import { Timestamp } from 'firebase/firestore';

export type EventType = 'wedding' | 'barMitzvah' | 'birthday' | 'corporate' | 'other';
export type EventStatus = 'draft' | 'active' | 'archived';

export interface EventData {
  id: string;
  ownerId: string;
  title: string;
  type: EventType;
  dateTime: Timestamp;
  deadline: Timestamp;
  locationName: string;
  locationLink: string;
  description: string;
  invitation: {
    coverUrl: string;
    pdfUrl?: string;
    altText: string;
  };
  stats: EventStats;
  status: EventStatus;
  messageTemplate?: string;
  reminderSettings?: ReminderSettings;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface EventStats {
  totalGuests: number;
  responded: number;
  yesCount: number;
  noCount: number;
  maybeCount: number;
  pendingCount: number;
  totalAttendees: number;
}

export interface ReminderSettings {
  enabled: boolean;
  afterDays: number;
  beforeDeadlineDays: number;
}

export interface CreateEventInput {
  title: string;
  type: EventType;
  dateTime: Date;
  deadline: Date;
  locationName: string;
  locationLink: string;
  description: string;
  coverImage?: File;
  pdfFile?: File;
  altText: string;
}
