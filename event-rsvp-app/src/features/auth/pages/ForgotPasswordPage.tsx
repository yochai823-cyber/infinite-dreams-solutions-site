import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { resetPassword } from '@/shared/firebase/auth';
import { useI18n } from '@/shared/i18n';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useToast } from '@/shared/ui/Toast';

export function ForgotPasswordPage() {
  const { t } = useI18n();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(email);
      setSent(true);
      toast('success', t.auth.resetSent);
    } catch {
      toast('error', t.errors.generic);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">{t.auth.resetTitle}</h1>

        {sent ? (
          <div className="text-center space-y-4">
            <p className="text-slate-600">{t.auth.resetSent}</p>
            <Link to="/login" className="text-primary-600 hover:underline">
              {t.auth.login}
            </Link>
          </div>
        ) : (
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
            <Button type="submit" variant="primary" loading={loading} className="w-full">
              {t.auth.resetPassword}
            </Button>
            <p className="text-center">
              <Link to="/login" className="text-sm text-primary-600 hover:underline">
                {t.common.back}
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
