import type { CsvRow, CsvMapping, GuestInput, ImportResult } from '../types';
import { isValidIsraeliPhone, isValidEmail, normalizePhone } from '@/shared/forms/validators';

export const DEFAULT_MAPPING: CsvMapping = {
  firstName: 'firstName',
  lastName: 'lastName',
  phone: 'phone',
  email: 'email',
  group: 'group',
  maxPartySize: 'maxPartySize',
};

// Common Hebrew column name aliases
const ALIASES: Record<keyof CsvMapping, string[]> = {
  firstName: ['שם פרטי', 'שם', 'first name', 'firstname', 'first_name', 'name'],
  lastName: ['שם משפחה', 'משפחה', 'last name', 'lastname', 'last_name', 'surname'],
  phone: ['טלפון', 'נייד', 'phone', 'mobile', 'tel', 'phone_number'],
  email: ['אימייל', 'דוא"ל', 'מייל', 'email', 'e-mail', 'email_address'],
  group: ['קבוצה', 'group', 'category', 'קטגוריה'],
  maxPartySize: ['מקסימום', 'כמות', 'max', 'max_party', 'maxPartySize', 'party_size'],
};

export function autoDetectMapping(headers: string[]): CsvMapping {
  const mapping = { ...DEFAULT_MAPPING };
  const lowerHeaders = headers.map((h) => h.trim().toLowerCase());

  for (const [field, aliases] of Object.entries(ALIASES)) {
    const idx = lowerHeaders.findIndex((h) =>
      aliases.some((a) => h === a.toLowerCase())
    );
    if (idx >= 0) {
      (mapping as any)[field] = headers[idx];
    }
  }

  return mapping;
}

export function mapCsvToGuests(
  rows: CsvRow[],
  mapping: CsvMapping
): ImportResult & { guests: GuestInput[] } {
  const guests: GuestInput[] = [];
  const errors: Array<{ row: number; message: string }> = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const firstName = (row[mapping.firstName] || '').trim();
    const lastName = (row[mapping.lastName] || '').trim();
    const phone = (row[mapping.phone] || '').trim();
    const email = (row[mapping.email] || '').trim();
    const group = (row[mapping.group] || '').trim();
    const maxPartySize = parseInt(row[mapping.maxPartySize] || '2', 10) || 2;

    if (!firstName) {
      errors.push({ row: i + 2, message: 'שם פרטי חסר' });
      continue;
    }

    if (!phone && !email) {
      errors.push({ row: i + 2, message: 'חסר טלפון או אימייל' });
      continue;
    }

    if (phone && !isValidIsraeliPhone(phone)) {
      errors.push({ row: i + 2, message: `טלפון לא תקין: ${phone}` });
      continue;
    }

    if (email && !isValidEmail(email)) {
      errors.push({ row: i + 2, message: `אימייל לא תקין: ${email}` });
      continue;
    }

    guests.push({
      firstName,
      lastName,
      phone: phone ? normalizePhone(phone) : '',
      email,
      group,
      maxPartySize,
    });
  }

  return {
    guests,
    imported: guests.length,
    duplicates: 0,
    errors,
  };
}
