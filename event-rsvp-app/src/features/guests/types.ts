import { Timestamp } from 'firebase/firestore';

export type GuestStatus = 'pending' | 'yes' | 'no' | 'maybe';

export interface GuestData {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  group: string;
  maxPartySize: number;
  status: GuestStatus;
  partySize: number;
  note: string;
  tokenHash: string;
  sentAt?: Timestamp;
  respondedAt?: Timestamp;
  updatedAt?: Timestamp;
  reminderOptOut?: boolean;
}

export interface GuestInput {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  group: string;
  maxPartySize: number;
}

export interface CsvRow {
  [key: string]: string;
}

export interface CsvMapping {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  group: string;
  maxPartySize: string;
}

export interface ImportResult {
  imported: number;
  duplicates: number;
  errors: Array<{ row: number; message: string }>;
}

export interface ActivityLog {
  id: string;
  type: 'rsvp_response' | 'rsvp_update' | 'guest_added' | 'guest_deleted' | 'import' | 'export' | 'reminder_sent';
  guestId?: string;
  actorUserId?: string;
  payload: Record<string, unknown>;
  createdAt: Timestamp;
}
