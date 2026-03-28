import {
  queryDocuments,
  updateDocument,
  getDocument,
  where,
  orderBy,
} from '@/shared/firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/firebase/firebase.client';
import type { AppUser } from '@/features/auth/types';

export async function getAllUsers(): Promise<AppUser[]> {
  return queryDocuments<AppUser>('users', [orderBy('createdAt', 'desc')]);
}

export async function getUser(userId: string): Promise<AppUser | null> {
  return getDocument<AppUser>('users', userId);
}

export async function updateUserRole(userId: string, role: 'client' | 'admin'): Promise<void> {
  await updateDocument('users', userId, { role });
}

export async function blockUser(userId: string, blocked: boolean): Promise<void> {
  await updateDocument('users', userId, { blocked });
}

export interface SystemStats {
  totalUsers: number;
  totalEvents: number;
  activeEvents: number;
}

export async function getSystemStats(): Promise<SystemStats> {
  const usersSnap = await getDocs(collection(db, 'users'));
  const eventsSnap = await getDocs(collection(db, 'events'));

  let activeEvents = 0;
  eventsSnap.forEach((doc) => {
    if (doc.data().status === 'active') activeEvents++;
  });

  return {
    totalUsers: usersSnap.size,
    totalEvents: eventsSnap.size,
    activeEvents,
  };
}
