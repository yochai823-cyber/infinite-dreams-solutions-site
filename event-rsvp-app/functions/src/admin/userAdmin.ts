import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

// Set user role (admin only)
export const setUserRole = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
  }

  // Check if caller is admin
  const callerDoc = await db.collection('users').doc(context.auth.uid).get();
  if (!callerDoc.exists || callerDoc.data()?.role !== 'admin') {
    throw new functions.https.HttpsError('permission-denied', 'Admin access required');
  }

  const { userId, role } = data;
  if (!userId || !['client', 'admin'].includes(role)) {
    throw new functions.https.HttpsError('invalid-argument', 'Invalid parameters');
  }

  await db.collection('users').doc(userId).update({ role });

  return { success: true };
});

// Delete user data (for privacy compliance)
export const deleteUserData = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
  }

  const userId = data.userId || context.auth.uid;

  // Only allow self-deletion or admin
  if (userId !== context.auth.uid) {
    const callerDoc = await db.collection('users').doc(context.auth.uid).get();
    if (!callerDoc.exists || callerDoc.data()?.role !== 'admin') {
      throw new functions.https.HttpsError('permission-denied', 'Unauthorized');
    }
  }

  // Delete all events and their subcollections
  const eventsSnap = await db.collection('events').where('ownerId', '==', userId).get();
  const batch = db.batch();

  for (const eventDoc of eventsSnap.docs) {
    // Delete guests subcollection
    const guestsSnap = await eventDoc.ref.collection('guests').get();
    guestsSnap.forEach((doc) => batch.delete(doc.ref));

    // Delete activity subcollection
    const activitySnap = await eventDoc.ref.collection('activity').get();
    activitySnap.forEach((doc) => batch.delete(doc.ref));

    // Delete event
    batch.delete(eventDoc.ref);
  }

  // Delete user document
  batch.delete(db.collection('users').doc(userId));

  await batch.commit();

  // Delete Firebase Auth user
  try {
    await admin.auth().deleteUser(userId);
  } catch (err) {
    console.error('Error deleting auth user:', err);
  }

  // Log deletion
  await db.collection('consents').add({
    type: 'account_deletion',
    userId,
    deletedBy: context.auth.uid,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { success: true };
});
