import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useI18n } from '@/shared/i18n';
import { getEventsByOwner } from '../services/events.service';
import { Button } from '@/shared/ui/Button';
import { Badge } from '@/shared/ui/Badge';
import { Spinner } from '@/shared/ui/Spinner';
import { Card } from '@/shared/ui/Card';
import { Plus, Calendar, MapPin, Users } from 'lucide-react';
import type { EventData } from '../types';

export function EventsListPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!user) return;
    getEventsByOwner(user.uid).then((data) => {
      setEvents(data);
      setLoading(false);
    });
  }, [user]);

  const filtered = events.filter((e) =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusBadge = (status: string) => {
    const map: Record<string, { variant: 'success' | 'warning' | 'gray'; label: string }> = {
      active: { variant: 'success', label: t.events.statuses.active },
      draft: { variant: 'warning', label: t.events.statuses.draft },
      archived: { variant: 'gray', label: t.events.statuses.archived },
    };
    const s = map[status] || map.draft;
    return <Badge variant={s.variant}>{s.label}</Badge>;
  };

  if (loading) return <Spinner className="py-20" />;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">{t.events.title}</h1>
        <Button
          variant="primary"
          icon={<Plus size={18} />}
          onClick={() => navigate('/events/new')}
        >
          {t.events.create}
        </Button>
      </div>

      <input
        type="search"
        placeholder={t.common.search + '...'}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="input-field max-w-md"
        aria-label={t.common.search}
      />

      {filtered.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-slate-500 mb-4">{t.common.noData}</p>
          <Button variant="primary" onClick={() => navigate('/events/new')}>
            {t.events.create}
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="card hover:shadow-md transition-shadow block"
            >
              {event.invitation?.coverUrl && (
                <img
                  src={event.invitation.coverUrl}
                  alt={event.invitation.altText || event.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                {statusBadge(event.status)}
              </div>
              <div className="space-y-1 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{event.dateTime?.toDate?.()?.toLocaleDateString('he-IL') || ''}</span>
                </div>
                {event.locationName && (
                  <div className="flex items-center gap-2">
                    <MapPin size={14} aria-hidden="true" />
                    <span>{event.locationName}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Users size={14} aria-hidden="true" />
                  <span>
                    {event.stats?.yesCount || 0} {t.events.kpi.confirmed} / {event.stats?.totalGuests || 0} {t.events.kpi.sent}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
