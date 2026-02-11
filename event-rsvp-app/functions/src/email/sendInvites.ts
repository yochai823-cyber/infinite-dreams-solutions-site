import { onCall, HttpsError, CallableRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

interface SendRequest {
  eventId: string;
  guestIds?: string[]; // if empty, send to all unsent
  template: string;
}

export const sendInviteEmails = onCall(async (request: CallableRequest<SendRequest>) => {
  // Auth check
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required');
  }

  const { eventId, guestIds, template } = request.data;

  // Get event
  const eventDoc = await db.collection('events').doc(eventId).get();
  if (!eventDoc.exists) {
    throw new HttpsError('not-found', 'Event not found');
  }

  const eventData = eventDoc.data()!;
  if (eventData.ownerId !== request.auth.uid) {
    throw new HttpsError('permission-denied', 'Not event owner');
  }

  // Get guests
  let guestsQuery: admin.firestore.Query;
  if (guestIds && guestIds.length > 0) {
    // Firestore 'in' operator limited to 30 items
    guestsQuery = eventDoc.ref.collection('guests');
  } else {
    guestsQuery = eventDoc.ref.collection('guests').where('sentAt', '==', null);
  }

  const guestsSnap = await guestsQuery.get();
  let sentCount = 0;
  const errors: string[] = [];

  for (const guestDoc of guestsSnap.docs) {
    if (guestIds && guestIds.length > 0 && !guestIds.includes(guestDoc.id)) {
      continue;
    }

    const guest = guestDoc.data();
    if (!guest.email) continue;

    try {
      // In production, integrate with SendGrid/Mailgun here:
      // const sgMail = require('@sendgrid/mail');
      // sgMail.setApiKey(functions.config().sendgrid.key);
      // await sgMail.send({ to: guest.email, from: '...', subject: '...', html: '...' });

      // For now, just mark as sent
      await guestDoc.ref.update({
        sentAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      sentCount++;
    } catch (err: any) {
      errors.push(`${guest.email}: ${err.message}`);
    }
  }

  // Log activity
  await eventDoc.ref.collection('activity').add({
    type: 'email_sent',
    actorUserId: request.auth.uid,
    payload: { sentCount, errorCount: errors.length },
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { sentCount, errors };
});
