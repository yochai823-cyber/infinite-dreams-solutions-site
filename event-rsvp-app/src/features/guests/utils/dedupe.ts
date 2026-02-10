import type { GuestInput } from '../types';
import { normalizePhone } from '@/shared/forms/validators';

export interface DedupeResult {
  unique: GuestInput[];
  duplicates: Array<{ guest: GuestInput; existingIndex: number }>;
}

export function deduplicateGuests(
  newGuests: GuestInput[],
  existingGuests: Array<{ phone: string; email: string }> = []
): DedupeResult {
  const seen = new Map<string, number>();
  const unique: GuestInput[] = [];
  const duplicates: Array<{ guest: GuestInput; existingIndex: number }> = [];

  // Index existing guests
  existingGuests.forEach((g, i) => {
    if (g.phone) seen.set(normalizePhone(g.phone), i);
    if (g.email) seen.set(g.email.toLowerCase(), i);
  });

  for (const guest of newGuests) {
    const normalizedPhone = guest.phone ? normalizePhone(guest.phone) : '';
    const normalizedEmail = guest.email ? guest.email.toLowerCase() : '';

    const existingByPhone = normalizedPhone ? seen.get(normalizedPhone) : undefined;
    const existingByEmail = normalizedEmail ? seen.get(normalizedEmail) : undefined;

    if (existingByPhone !== undefined) {
      duplicates.push({ guest, existingIndex: existingByPhone });
    } else if (existingByEmail !== undefined) {
      duplicates.push({ guest, existingIndex: existingByEmail });
    } else {
      unique.push(guest);
      const idx = unique.length - 1;
      if (normalizedPhone) seen.set(normalizedPhone, idx);
      if (normalizedEmail) seen.set(normalizedEmail, idx);
    }
  }

  return { unique, duplicates };
}
