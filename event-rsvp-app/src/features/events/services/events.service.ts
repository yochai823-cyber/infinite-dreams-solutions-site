import {
  queryDocuments,
  createDocument,
  getDocument,
  updateDocument,
  deleteDocument,
  where,
  orderBy,
  Timestamp,
} from '@/shared/firebase/firestore';
import { uploadInvitationImage, uploadInvitationPdf } from '@/shared/firebase/storage';
import type { EventData, EventStats, CreateEventInput, EventStatus } from '../types';

const EVENTS_PATH = 'events';

export async function getEventsByOwner(ownerId: string): Promise<EventData[]> {
  return queryDocuments<EventData>(EVENTS_PATH, [
    where('ownerId', '==', ownerId),
    orderBy('createdAt', 'desc'),
  ]);
}

export async function getEvent(eventId: string): Promise<EventData | null> {
  return getDocument<EventData>(EVENTS_PATH, eventId);
}

export async function createEvent(
  ownerId: string,
  input: CreateEventInput
): Promise<string> {
  let coverUrl = '';
  let pdfUrl: string | undefined;

  // We'll create a temp ID, upload images, then update
  const eventId = await createDocument(EVENTS_PATH, {
    ownerId,
    title: input.title,
    type: input.type,
    dateTime: Timestamp.fromDate(input.dateTime),
    deadline: Timestamp.fromDate(input.deadline),
    locationName: input.locationName,
    locationLink: input.locationLink,
    description: input.description,
    invitation: { coverUrl: '', pdfUrl: '', altText: input.altText },
    stats: defaultStats(),
    status: 'draft' as EventStatus,
  });

  // Upload files if provided
  if (input.coverImage) {
    coverUrl = await uploadInvitationImage(ownerId, eventId, input.coverImage);
  }
  if (input.pdfFile) {
    pdfUrl = await uploadInvitationPdf(ownerId, eventId, input.pdfFile);
  }

  // Update with file URLs
  if (coverUrl || pdfUrl) {
    await updateDocument(EVENTS_PATH, eventId, {
      invitation: { coverUrl, pdfUrl: pdfUrl || '', altText: input.altText },
    });
  }

  return eventId;
}

export async function updateEvent(
  eventId: string,
  data: Partial<EventData>
): Promise<void> {
  await updateDocument(EVENTS_PATH, eventId, data);
}

export async function updateEventStatus(
  eventId: string,
  status: EventStatus
): Promise<void> {
  await updateDocument(EVENTS_PATH, eventId, { status });
}

export async function updateEventStats(
  eventId: string,
  stats: Partial<EventStats>
): Promise<void> {
  await updateDocument(EVENTS_PATH, eventId, { stats });
}

export async function deleteEvent(eventId: string): Promise<void> {
  await deleteDocument(EVENTS_PATH, eventId);
}

function defaultStats(): EventStats {
  return {
    totalGuests: 0,
    responded: 0,
    yesCount: 0,
    noCount: 0,
    maybeCount: 0,
    pendingCount: 0,
    totalAttendees: 0,
  };
}
