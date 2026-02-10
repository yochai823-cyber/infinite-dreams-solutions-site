import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebase.client';

export async function uploadInvitationImage(
  userId: string,
  eventId: string,
  file: File
): Promise<string> {
  const ext = file.name.split('.').pop();
  const path = `public-invitations/${eventId}/cover.${ext}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, {
    contentType: file.type,
    customMetadata: { uploadedBy: userId },
  });
  return getDownloadURL(storageRef);
}

export async function uploadInvitationPdf(
  userId: string,
  eventId: string,
  file: File
): Promise<string> {
  const path = `invitations/${userId}/${eventId}/invitation.pdf`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, {
    contentType: 'application/pdf',
    customMetadata: { uploadedBy: userId },
  });
  return getDownloadURL(storageRef);
}

export async function deleteInvitationFile(path: string): Promise<void> {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
}
