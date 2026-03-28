import {
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
  DocumentData,
  QueryConstraint,
} from 'firebase/firestore';
import { db } from './firebase.client';

// Generic helpers
export async function createDocument(path: string, data: DocumentData): Promise<string> {
  const ref = await addDoc(collection(db, path), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function setDocument(path: string, id: string, data: DocumentData): Promise<void> {
  await setDoc(doc(db, path, id), {
    ...data,
    updatedAt: serverTimestamp(),
  }, { merge: true });
}

export async function getDocument<T>(path: string, id: string): Promise<T | null> {
  const snap = await getDoc(doc(db, path, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as T;
}

export async function queryDocuments<T>(
  path: string,
  constraints: QueryConstraint[]
): Promise<T[]> {
  const q = query(collection(db, path), ...constraints);
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as T));
}

export async function updateDocument(path: string, id: string, data: DocumentData): Promise<void> {
  await updateDoc(doc(db, path, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteDocument(path: string, id: string): Promise<void> {
  await deleteDoc(doc(db, path, id));
}

// Re-export useful Firestore utilities
export { collection, doc, query, where, orderBy, limit, serverTimestamp, Timestamp };
export type { DocumentData };
