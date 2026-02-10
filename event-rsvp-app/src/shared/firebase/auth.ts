import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './firebase.client';

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
}

const googleProvider = new GoogleAuthProvider();

export async function signUp(email: string, password: string, name: string): Promise<User> {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(cred.user);
  await setDoc(doc(db, 'users', cred.user.uid), {
    email,
    name,
    role: 'client' as UserRole,
    createdAt: serverTimestamp(),
    lastLoginAt: serverTimestamp(),
  });
  return cred.user;
}

export async function signIn(email: string, password: string): Promise<User> {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, 'users', cred.user.uid), { lastLoginAt: serverTimestamp() }, { merge: true });
  return cred.user;
}

export async function signInWithGoogle(): Promise<User> {
  const cred = await signInWithPopup(auth, googleProvider);
  const userDoc = await getDoc(doc(db, 'users', cred.user.uid));
  if (!userDoc.exists()) {
    await setDoc(doc(db, 'users', cred.user.uid), {
      email: cred.user.email,
      name: cred.user.displayName || '',
      role: 'client' as UserRole,
      createdAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
    });
  } else {
    await setDoc(doc(db, 'users', cred.user.uid), { lastLoginAt: serverTimestamp() }, { merge: true });
  }
  return cred.user;
}

export async function logOut(): Promise<void> {
  await signOut(auth);
}

export async function resetPassword(email: string): Promise<void> {
  await sendPasswordResetEmail(auth, email);
}

export async function getUserProfile(uid: string): Promise<AppUser | null> {
  const snap = await getDoc(doc(db, 'users', uid));
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    uid,
    email: data.email,
    name: data.name,
    role: data.role,
    createdAt: data.createdAt?.toDate(),
    lastLoginAt: data.lastLoginAt?.toDate(),
    tosAcceptedAt: data.tosAcceptedAt?.toDate(),
    privacyAcceptedAt: data.privacyAcceptedAt?.toDate(),
  };
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
