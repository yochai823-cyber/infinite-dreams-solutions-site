import {
  queryDocuments,
  createDocument,
  getDocument,
  updateDocument,
  deleteDocument,
  where,
  orderBy,
} from '@/shared/firebase/firestore';
import type { GuestData, GuestInput } from '../types';

function guestsPath(eventId: string) {
  return `events/${eventId}/guests`;
}

export async function getGuestsByEvent(eventId: string): Promise<GuestData[]> {
  return queryDocuments<GuestData>(guestsPath(eventId), [
    orderBy('firstName', 'asc'),
  ]);
}

export async function getGuestsByStatus(eventId: string, status: string): Promise<GuestData[]> {
  return queryDocuments<GuestData>(guestsPath(eventId), [
    where('status', '==', status),
  ]);
}

export async function getGuest(eventId: string, guestId: string): Promise<GuestData | null> {
  return getDocument<GuestData>(guestsPath(eventId), guestId);
}

export async function addGuest(eventId: string, input: GuestInput, tokenHash: string): Promise<string> {
  return createDocument(guestsPath(eventId), {
    ...input,
    status: 'pending',
    partySize: 1,
    note: '',
    tokenHash,
  });
}

export async function updateGuest(eventId: string, guestId: string, data: Partial<GuestData>): Promise<void> {
  await updateDocument(guestsPath(eventId), guestId, data);
}

export async function deleteGuest(eventId: string, guestId: string): Promise<void> {
  await deleteDocument(guestsPath(eventId), guestId);
}

export async function addGuestsBatch(eventId: string, guests: GuestInput[], generateTokenHash: () => string): Promise<number> {
  let count = 0;
  for (const guest of guests) {
    const hash = generateTokenHash();
    await addGuest(eventId, guest, hash);
    count++;
  }
  return count;
}

// Generate a secure token hash (client-side - for demo; in production use Cloud Function)
export function generateTokenHash(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
}
