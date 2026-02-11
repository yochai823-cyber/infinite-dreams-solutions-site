import React, { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUp } from '@/shared/firebase/auth';
import { useI18n } from '@/shared/i18n';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useToast } from '@/shared/ui/Toast';

export function SignupPage() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = t.common.required;
    if (password.length < 6) errs.password = t.auth.weakPassword;
    if (password !== confirmPassword) errs.confirmPassword = t.auth.passwordMismatch;
    if (!acceptTerms) errs.terms = t.common.required;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await signUp(email, password, name);
      toast('success', t.auth.verifyEmail);
      navigate('/dashboard');
    } catch (err: any) {
      const code = err?.code;
      if (code === 'auth/email-already-in-use') {
        toast('error', t.auth.emailInUse);
      } else if (code === 'auth/invalid-email') {
        toast('error', t.auth.invalidEmail);
      } else if (code === 'auth/weak-password') {
        toast('error', 'הסיסמה חלשה מדי. נדרשים לפחות 6 תווים');
      } else if (code === 'auth/network-request-failed') {
        toast('error', 'שגיאת רשת. בדוק את החיבור לאינטרנט');
      } else if (code === 'auth/configuration-not-found') {
        toast('error', 'שירות ההתחברות לא מופעל בפרויקט Firebase');
      } else {
        toast('error', `${t.errors.generic} (${code || err?.message || 'unknown'})`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">{t.auth.signupTitle}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label={t.auth.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            error={errors.name}
          />
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
            autoComplete="new-password"
            dir="ltr"
            error={errors.password}
          />
          <Input
            label={t.auth.confirmPassword}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
            dir="ltr"
            error={errors.confirmPassword}
          />

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mt-1 h-4 w-4"
            />
            <span className="text-sm text-slate-600">
              אני מאשר/ת את{' '}
              <Link to="/terms" className="text-primary-600 hover:underline" target="_blank">
                {t.nav.terms}
              </Link>{' '}
              ו{' '}
              <Link to="/privacy" className="text-primary-600 hover:underline" target="_blank">
                {t.nav.privacy}
              </Link>
            </span>
          </label>
          {errors.terms && (
            <p className="text-xs text-red-600" role="alert">{errors.terms}</p>
          )}

          <Button type="submit" variant="primary" loading={loading} className="w-full">
            {t.auth.signup}
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          כבר יש לך חשבון?{' '}
          <Link to="/login" className="text-primary-600 hover:underline font-medium">
            {t.auth.login}
          </Link>
        </p>
      </div>
    </div>
  );
}
