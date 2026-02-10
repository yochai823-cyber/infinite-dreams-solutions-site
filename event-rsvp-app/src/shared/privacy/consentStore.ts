const CONSENT_KEY = 'rsvp_cookie_consent';

export interface CookieConsent {
  essential: boolean; // always true
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

const DEFAULT_CONSENT: CookieConsent = {
  essential: true,
  analytics: false,
  marketing: false,
  timestamp: '',
  version: '1.0',
};

export function getConsent(): CookieConsent | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function setConsent(consent: Partial<CookieConsent>): void {
  const full: CookieConsent = {
    ...DEFAULT_CONSENT,
    ...consent,
    essential: true, // always on
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(full));
}

export function hasConsented(): boolean {
  return getConsent() !== null;
}

export function hasAnalyticsConsent(): boolean {
  const consent = getConsent();
  return consent?.analytics ?? false;
}

export function clearConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
}
