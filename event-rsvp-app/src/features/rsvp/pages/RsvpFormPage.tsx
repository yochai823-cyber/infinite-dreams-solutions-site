import React, { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useI18n } from '@/shared/i18n';
import { getRsvpData, submitRsvp, type RsvpResponse } from '../services/rsvp.api';
import { PartySizePicker } from '../components/PartySizePicker';
import { Button } from '@/shared/ui/Button';
import { TextArea } from '@/shared/ui/Input';
import { Spinner } from '@/shared/ui/Spinner';
import { CheckCircle, XCircle, HelpCircle, PartyPopper } from 'lucide-react';

type RsvpStatus = 'yes' | 'no' | 'maybe';

export function RsvpFormPage() {
  const { token } = useParams<{ token: string }>();
  const { t } = useI18n();

  const [data, setData] = useState<RsvpResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [status, setStatus] = useState<RsvpStatus>('yes');
  const [partySize, setPartySize] = useState(1);
  const [note, setNote] = useState('');
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (!token) return;
    getRsvpData(token)
      .then((res) => {
        if (!res.success) {
          setError(res.message);
        } else {
          setData(res);
          if (res.guest) {
            if (res.guest.status !== 'pending') {
              setStatus(res.guest.status as RsvpStatus);
            }
            setPartySize(res.guest.partySize || 1);
            setNote(res.guest.note || '');
          }
        }
      })
      .catch(() => setError(t.errors.generic))
      .finally(() => setLoading(false));
  }, [token, t]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!token || !consent) return;
    setSubmitting(true);
    try {
      const res = await submitRsvp({ token, status, partySize: status === 'yes' ? partySize : 0, note, consent });
      if (res.success) {
        setSubmitted(true);
      } else {
        setError(res.message);
      }
    } catch {
      setError(t.errors.generic);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Spinner className="min-h-screen" />;
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="text-center space-y-4 max-w-md">
          <PartyPopper size={64} className="mx-auto text-green-600" />
          <h1 className="text-2xl font-bold text-green-800">{t.rsvp.thankYou}</h1>
          <p className="text-slate-600">
            {status === 'yes' && `נרשמו ${partySize} משתתפים`}
            {status === 'no' && 'תודה על העדכון'}
            {status === 'maybe' && 'נקווה לראותך!'}
          </p>
        </div>
      </div>
    );
  }

  const maxPartySize = data?.guest?.maxPartySize || 5;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-md mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-2">{t.rsvp.title}</h1>
        <p className="text-center text-slate-500 mb-8">
          {data?.guest?.firstName && `שלום ${data.guest.firstName}`}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Status Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">
              {t.rsvp.confirmAttendance}
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setStatus('yes')}
                className={`card text-center py-4 transition-all ${
                  status === 'yes'
                    ? 'ring-2 ring-green-500 bg-green-50 border-green-200'
                    : 'hover:bg-slate-50'
                }`}
                aria-pressed={status === 'yes'}
              >
                <CheckCircle
                  size={32}
                  className={`mx-auto mb-2 ${status === 'yes' ? 'text-green-600' : 'text-slate-400'}`}
                />
                <span className="text-sm font-medium">{t.rsvp.attending}</span>
              </button>

              <button
                type="button"
                onClick={() => setStatus('no')}
                className={`card text-center py-4 transition-all ${
                  status === 'no'
                    ? 'ring-2 ring-red-500 bg-red-50 border-red-200'
                    : 'hover:bg-slate-50'
                }`}
                aria-pressed={status === 'no'}
              >
                <XCircle
                  size={32}
                  className={`mx-auto mb-2 ${status === 'no' ? 'text-red-600' : 'text-slate-400'}`}
                />
                <span className="text-sm font-medium">{t.rsvp.notAttending}</span>
              </button>

              <button
                type="button"
                onClick={() => setStatus('maybe')}
                className={`card text-center py-4 transition-all ${
                  status === 'maybe'
                    ? 'ring-2 ring-amber-500 bg-amber-50 border-amber-200'
                    : 'hover:bg-slate-50'
                }`}
                aria-pressed={status === 'maybe'}
              >
                <HelpCircle
                  size={32}
                  className={`mx-auto mb-2 ${status === 'maybe' ? 'text-amber-600' : 'text-slate-400'}`}
                />
                <span className="text-sm font-medium">{t.rsvp.maybe}</span>
              </button>
            </div>
          </div>

          {/* Party Size */}
          {status === 'yes' && (
            <PartySizePicker
              value={partySize}
              max={maxPartySize}
              onChange={setPartySize}
            />
          )}

          {/* Note */}
          <TextArea
            label={t.rsvp.addNote}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t.rsvp.notePlaceholder}
            rows={3}
          />

          {/* Consent */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="mt-1 h-5 w-5"
            />
            <span className="text-sm text-slate-600">{t.rsvp.consentText}</span>
          </label>

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            className="w-full text-lg py-4"
            loading={submitting}
            disabled={!consent}
          >
            {t.rsvp.submit}
          </Button>
        </form>
      </div>
    </div>
  );
}
