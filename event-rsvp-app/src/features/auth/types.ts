export type UserRole = 'client' | 'admin';

export interface AppUser {
  uid: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  lastLoginAt: Date;
  tosAcceptedAt?: Date;
  privacyAcceptedAt?: Date;
  tosVersion?: string;
  privacyVersion?: string;
  senderName?: string;
  logoUrl?: string;
  language?: 'he' | 'en';
  blocked?: boolean;
}
