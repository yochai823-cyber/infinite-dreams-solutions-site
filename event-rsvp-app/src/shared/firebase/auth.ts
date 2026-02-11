import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
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

async function ensureGoogleUserDoc(user: User): Promise<void> {
  const userDoc = await getDoc(doc(db, 'users', user.uid));
  if (!userDoc.exists()) {
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      name: user.displayName || '',
      role: 'client' as UserRole,
      createdAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
    });
  } else {
    await setDoc(doc(db, 'users', user.uid), { lastLoginAt: serverTimestamp() }, { merge: true });
  }
}

export async function signInWithGoogle(): Promise<void> {
  await signInWithRedirect(auth, googleProvider);
}

export async function handleGoogleRedirectResult(): Promise<User | null> {
  const cred = await getRedirectResult(auth);
  if (cred?.user) {
    await ensureGoogleUserDoc(cred.user);
    return cred.user;
  }
  return null;
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
