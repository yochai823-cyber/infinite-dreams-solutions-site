import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useI18n } from '@/shared/i18n';
import { getRsvpData, type RsvpResponse } from '../services/rsvp.api';
import { Button } from '@/shared/ui/Button';
import { Spinner } from '@/shared/ui/Spinner';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

export function RsvpLandingPage() {
  const { eventId, token } = useParams<{ eventId: string; token: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();

  const [data, setData] = useState<RsvpResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setError(t.rsvp.invalidLink);
      setLoading(false);
      return;
    }
    getRsvpData(token)
      .then((res) => {
        if (!res.success) {
          setError(res.message);
        } else {
          setData(res);
        }
      })
      .catch(() => setError(t.errors.generic))
      .finally(() => setLoading(false));
  }, [token, t]);

  if (loading) return <Spinner className="min-h-screen" />;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
        <div className="text-center space-y-4">
          <p className="text-xl text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  const event = data?.event;
  const guest = data?.guest;
  if (!event || !guest) return null;

  const deadlineDate = new Date(event.deadline);
  const isPastDeadline = deadlineDate < new Date();
  const alreadyResponded = guest.status !== 'pending';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-lg mx-auto px-4 py-8 space-y-6">
        {/* Invitation Image */}
        {event.coverUrl && (
          <img
            src={event.coverUrl}
            alt={event.altText || event.title}
            className="w-full rounded-2xl shadow-lg"
          />
        )}

        {/* Event Info */}
        <div className="text-center space-y-3">
          <p className="text-lg text-slate-600">{t.rsvp.youAreInvited}</p>
          <h1 className="text-3xl font-bold text-slate-800">{event.title}</h1>
        </div>

        <div className="card space-y-3">
          <h2 className="font-semibold text-lg">{t.rsvp.eventDetails}</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-primary-600 shrink-0" />
              <span>
                {new Date(event.dateTime).toLocaleDateString('he-IL', {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-primary-600 shrink-0" />
              <span>
                {new Date(event.dateTime).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-primary-600 shrink-0" />
              <span>{event.locationName}</span>
            </div>
          </div>

          {event.locationLink && (
            <a
              href={event.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-center mt-3"
            >
              <ExternalLink size={16} />
              {t.rsvp.openMap}
            </a>
          )}

          {event.description && (
            <p className="text-sm text-slate-600 pt-3 border-t">{event.description}</p>
          )}
        </div>

        {/* CTA */}
        {isPastDeadline ? (
          <div className="card text-center bg-amber-50 border-amber-200">
            <p className="text-amber-700 font-medium">{t.rsvp.deadlinePassed}</p>
          </div>
        ) : alreadyResponded ? (
          <div className="space-y-3">
            <div className="card text-center bg-green-50 border-green-200">
              <p className="text-green-700 font-medium">{t.rsvp.thankYou}</p>
              <p className="text-sm text-green-600 mt-1">
                סטטוס: {guest.status === 'yes' ? t.rsvp.attending : guest.status === 'no' ? t.rsvp.notAttending : t.rsvp.maybe}
                {guest.status === 'yes' && ` (${guest.partySize} משתתפים)`}
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate(`/rsvp/${eventId}/${token}/form`)}
            >
              {t.rsvp.updateResponse}
            </Button>
          </div>
        ) : (
          <Button
            variant="primary"
            className="w-full text-lg py-4"
            onClick={() => navigate(`/rsvp/${eventId}/${token}/form`)}
          >
            {t.rsvp.confirmAttendance}
          </Button>
        )}
      </div>
    </div>
  );
}
