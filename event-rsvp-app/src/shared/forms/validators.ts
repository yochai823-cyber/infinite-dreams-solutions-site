// Israeli phone: 05X-XXXXXXX or +9725XXXXXXXX
export function isValidIsraeliPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  return /^(0[23489]\d{7}|05\d{8}|07[2-9]\d{7}|\+9725\d{8}|\+972[23489]\d{7})$/.test(cleaned);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

export function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  if (cleaned.startsWith('+972')) return cleaned;
  if (cleaned.startsWith('0')) return '+972' + cleaned.slice(1);
  return cleaned;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateGuestInput(data: {
  firstName: string;
  phone?: string;
  email?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!isRequired(data.firstName)) {
    errors.firstName = 'שם פרטי הוא שדה חובה';
  }

  if (!data.phone && !data.email) {
    errors.contact = 'יש להזין טלפון או אימייל לפחות';
  }

  if (data.phone && !isValidIsraeliPhone(data.phone)) {
    errors.phone = 'מספר טלפון לא תקין';
  }

  if (data.email && !isValidEmail(data.email)) {
    errors.email = 'כתובת אימייל לא תקינה';
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
