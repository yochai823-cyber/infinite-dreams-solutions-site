import { useState, useEffect, useCallback } from 'react';
import { User } from 'firebase/auth';
import { onAuthChange, getUserProfile, logOut, type AppUser } from '@/shared/firebase/auth';

interface AuthState {
  user: User | null;
  profile: AppUser | null;
  loading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const profile = await getUserProfile(firebaseUser.uid);
          setState({ user: firebaseUser, profile, loading: false, error: null });
        } catch (err) {
          setState({ user: firebaseUser, profile: null, loading: false, error: 'Failed to load profile' });
        }
      } else {
        setState({ user: null, profile: null, loading: false, error: null });
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await logOut();
    } catch (err) {
      setState((prev) => ({ ...prev, error: 'Failed to logout' }));
    }
  }, []);

  return {
    user: state.user,
    profile: state.profile,
    loading: state.loading,
    error: state.error,
    isAuthenticated: !!state.user,
    isAdmin: state.profile?.role === 'admin',
    logout: handleLogout,
  };
}
