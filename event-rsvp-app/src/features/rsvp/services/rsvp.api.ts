import { httpsCallable } from 'firebase/functions';
import { functions } from '@/shared/firebase/firebase.client';

export interface RsvpSubmission {
  token: string;
  status: 'yes' | 'no' | 'maybe';
  partySize: number;
  note: string;
  consent: boolean;
}

export interface RsvpResponse {
  success: boolean;
  message: string;
  event?: {
    title: string;
    dateTime: string;
    locationName: string;
    locationLink: string;
    description: string;
    coverUrl: string;
    altText: string;
    deadline: string;
  };
  guest?: {
    firstName: string;
    status: string;
    partySize: number;
    maxPartySize: number;
    note: string;
  };
}

// Get RSVP page data via Cloud Function
export async function getRsvpData(token: string): Promise<RsvpResponse> {
  const fn = httpsCallable<{ token: string }, RsvpResponse>(functions, 'getRsvpData');
  const result = await fn({ token });
  return result.data;
}

// Submit RSVP response via Cloud Function
export async function submitRsvp(submission: RsvpSubmission): Promise<RsvpResponse> {
  const fn = httpsCallable<RsvpSubmission, RsvpResponse>(functions, 'submitRsvp');
  const result = await fn(submission);
  return result.data;
}
