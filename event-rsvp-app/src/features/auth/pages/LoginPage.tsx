import React, { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signIn, signInWithGoogle } from '@/shared/firebase/auth';
import { useI18n } from '@/shared/i18n';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useToast } from '@/shared/ui/Toast';

export function LoginPage() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      const code = err?.code;
      if (code === 'auth/wrong-password' || code === 'auth/user-not-found') {
        toast('error', t.auth.wrongCredentials);
      } else {
        toast('error', t.errors.generic);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch {
      toast('error', t.errors.generic);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">{t.auth.loginTitle}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label={t.auth.email}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            dir="ltr"
          />
          <Input
            label={t.auth.password}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            dir="ltr"
          />

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-primary-600 hover:underline">
              {t.auth.forgotPassword}
            </Link>
          </div>

          <Button type="submit" variant="primary" loading={loading} className="w-full">
            {t.auth.login}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-slate-500">או</span>
          </div>
        </div>

        <Button variant="outline" onClick={handleGoogle} className="w-full">
          {t.auth.loginWithGoogle}
        </Button>

        <p className="text-center text-sm text-slate-500 mt-6">
          {t.auth.signup}?{' '}
          <Link to="/signup" className="text-primary-600 hover:underline font-medium">
            {t.auth.signupTitle}
          </Link>
        </p>
      </div>
    </div>
  );
}
