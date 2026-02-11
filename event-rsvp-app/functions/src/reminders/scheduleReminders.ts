import { onSchedule } from 'firebase-functions/v2/scheduler';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

// Scheduled function: runs daily to check for reminders
export const processReminders = onSchedule('every 24 hours', async () => {
  const now = new Date();
  const eventsSnap = await db
    .collection('events')
    .where('status', '==', 'active')
    .get();

  let remindersSent = 0;

  for (const eventDoc of eventsSnap.docs) {
    const event = eventDoc.data();
    const settings = event.reminderSettings;

    if (!settings?.enabled) continue;

    const deadline = event.deadline?.toDate?.();
    if (!deadline || deadline < now) continue;

    // Check "X days after sending" reminder
    const pendingGuests = await eventDoc.ref
      .collection('guests')
      .where('status', '==', 'pending')
      .where('reminderOptOut', '!=', true)
      .get();

    for (const guestDoc of pendingGuests.docs) {
      const guest = guestDoc.data();
      if (!guest.sentAt) continue;

      const sentDate = guest.sentAt.toDate();
      const daysSinceSent = Math.floor(
        (now.getTime() - sentDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (daysSinceSent >= settings.afterDays) {
        // Check "before deadline" reminder
        const daysUntilDeadline = Math.floor(
          (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        );

        const shouldRemind =
          daysSinceSent === settings.afterDays ||
          daysUntilDeadline === settings.beforeDeadlineDays;

        if (shouldRemind) {
          // In production: send email/SMS reminder
          // For now, log it
          await eventDoc.ref.collection('activity').add({
            type: 'reminder_sent',
            guestId: guestDoc.id,
            payload: {
              guestName: guest.firstName,
              channel: guest.email ? 'email' : 'sms',
            },
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
          remindersSent++;
        }
      }
    }
  }

  console.log(`Processed reminders: ${remindersSent} sent`);
});
