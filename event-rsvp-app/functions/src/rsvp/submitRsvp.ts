import { onCall, CallableRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import { createHash } from 'crypto';

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

// Rate limiting: simple in-memory store (for production, use Redis/Memcached)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10; // max requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) {
    return false;
  }
  entry.count++;
  return true;
}

function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

// Find guest by token hash across all events
async function findGuestByToken(tokenHash: string) {
  const eventsSnap = await db.collection('events').get();
  for (const eventDoc of eventsSnap.docs) {
    const guestSnap = await eventDoc.ref
      .collection('guests')
      .where('tokenHash', '==', tokenHash)
      .limit(1)
      .get();
    if (!guestSnap.empty) {
      return {
        eventId: eventDoc.id,
        eventData: eventDoc.data(),
        guestId: guestSnap.docs[0].id,
        guestData: guestSnap.docs[0].data(),
      };
    }
  }
  return null;
}

interface GetRsvpData {
  token: string;
}

// Get RSVP data (public, no auth required)
export const getRsvpData = onCall(async (request: CallableRequest<GetRsvpData>) => {
  const { token } = request.data;
  if (!token || typeof token !== 'string' || token.length < 16) {
    return { success: false, message: 'קישור לא תקין' };
  }

  // Rate limit by IP
  const ip = request.rawRequest?.ip || 'unknown';
  if (!checkRateLimit(`getRsvp:${ip}`)) {
    return { success: false, message: 'יותר מדי בקשות, נסה שוב בעוד דקה' };
  }

  const tokenHash = hashToken(token);
  const result = await findGuestByToken(tokenHash);

  if (!result) {
    return { success: false, message: 'קישור לא תקין או שפג תוקפו' };
  }

  const { eventData, guestData } = result;

  return {
    success: true,
    event: {
      title: eventData.title,
      dateTime: eventData.dateTime?.toDate?.()?.toISOString() || '',
      locationName: eventData.locationName || '',
      locationLink: eventData.locationLink || '',
      description: eventData.description || '',
      coverUrl: eventData.invitation?.coverUrl || '',
      altText: eventData.invitation?.altText || '',
      deadline: eventData.deadline?.toDate?.()?.toISOString() || '',
    },
    guest: {
      firstName: guestData.firstName,
      status: guestData.status,
      partySize: guestData.partySize || 1,
      maxPartySize: guestData.maxPartySize || 5,
      note: guestData.note || '',
    },
  };
});

interface SubmitRsvpData {
  token: string;
  status: string;
  partySize: number;
  note: string;
  consent: boolean;
}

// Submit RSVP (public, no auth required)
export const submitRsvp = onCall(async (request: CallableRequest<SubmitRsvpData>) => {
  const { token, status, partySize, note, consent } = request.data;

  // Input validation
  if (!token || typeof token !== 'string') {
    return { success: false, message: 'טוקן חסר' };
  }
  if (!['yes', 'no', 'maybe'].includes(status)) {
    return { success: false, message: 'סטטוס לא תקין' };
  }
  if (typeof partySize !== 'number' || partySize < 0 || partySize > 50) {
    return { success: false, message: 'כמות משתתפים לא תקינה' };
  }
  if (typeof note !== 'string' || note.length > 500) {
    return { success: false, message: 'הערה ארוכה מדי' };
  }
  if (!consent) {
    return { success: false, message: 'נדרש אישור שמירת מידע' };
  }

  // Rate limit by IP + token
  const ip = request.rawRequest?.ip || 'unknown';
  if (!checkRateLimit(`submitRsvp:${ip}:${token.slice(0, 8)}`)) {
    return { success: false, message: 'יותר מדי בקשות, נסה שוב בעוד דקה' };
  }

  const tokenHash = hashToken(token);
  const result = await findGuestByToken(tokenHash);

  if (!result) {
    return { success: false, message: 'קישור לא תקין' };
  }

  const { eventId, eventData, guestId, guestData } = result;

  // Check deadline
  const deadline = eventData.deadline?.toDate?.();
  if (deadline && deadline < new Date()) {
    return { success: false, message: 'המועד האחרון לאישור הגעה עבר' };
  }

  // Validate party size
  const maxParty = guestData.maxPartySize || 5;
  const validPartySize = Math.min(Math.max(status === 'yes' ? partySize : 0, 0), maxParty);

  // Update guest
  const previousStatus = guestData.status;
  await db
    .collection('events')
    .doc(eventId)
    .collection('guests')
    .doc(guestId)
    .update({
      status,
      partySize: validPartySize,
      note: note.trim(),
      respondedAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

  // Update event stats
  const eventRef = db.collection('events').doc(eventId);
  const statsUpdate: Record<string, admin.firestore.FieldValue> = {};

  // Decrement old status
  if (previousStatus === 'yes') {
    statsUpdate['stats.yesCount'] = admin.firestore.FieldValue.increment(-1);
    statsUpdate['stats.totalAttendees'] = admin.firestore.FieldValue.increment(-(guestData.partySize || 1));
  } else if (previousStatus === 'no') {
    statsUpdate['stats.noCount'] = admin.firestore.FieldValue.increment(-1);
  } else if (previousStatus === 'maybe') {
    statsUpdate['stats.maybeCount'] = admin.firestore.FieldValue.increment(-1);
  } else if (previousStatus === 'pending') {
    statsUpdate['stats.pendingCount'] = admin.firestore.FieldValue.increment(-1);
  }

  // Increment new status
  if (status === 'yes') {
    statsUpdate['stats.yesCount'] = admin.firestore.FieldValue.increment(1);
    statsUpdate['stats.totalAttendees'] = admin.firestore.FieldValue.increment(validPartySize);
  } else if (status === 'no') {
    statsUpdate['stats.noCount'] = admin.firestore.FieldValue.increment(1);
  } else if (status === 'maybe') {
    statsUpdate['stats.maybeCount'] = admin.firestore.FieldValue.increment(1);
  }

  if (previousStatus === 'pending') {
    statsUpdate['stats.responded'] = admin.firestore.FieldValue.increment(1);
  }

  await eventRef.update(statsUpdate);

  // Log activity
  await db.collection('events').doc(eventId).collection('activity').add({
    type: previousStatus === 'pending' ? 'rsvp_response' : 'rsvp_update',
    guestId,
    payload: { status, partySize: validPartySize, previousStatus },
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { success: true, message: 'תודה על התשובה!' };
});
