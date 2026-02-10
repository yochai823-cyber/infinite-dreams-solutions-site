import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useI18n } from '@/shared/i18n';
import { getEventsByOwner } from '../services/events.service';
import { KpiCard } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { Badge } from '@/shared/ui/Badge';
import { Spinner } from '@/shared/ui/Spinner';
import { CalendarPlus, Upload, Bell, Calendar, Users, CheckCircle, Layers } from 'lucide-react';
import type { EventData } from '../types';

export function DashboardPage() {
  const { t } = useI18n();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getEventsByOwner(user.uid).then((data) => {
      setEvents(data);
      setLoading(false);
    });
  }, [user]);

  if (loading) return <Spinner className="py-20" />;

  const activeEvents = events.filter((e) => e.status === 'active');
  const totalGuests = events.reduce((sum, e) => sum + (e.stats?.totalGuests || 0), 0);
  const totalAttendees = events.reduce((sum, e) => sum + (e.stats?.totalAttendees || 0), 0);

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold">
          {t.dashboard.welcome}, {profile?.name || 'משתמש'}
        </h1>
        <p className="text-slate-500 mt-1">{t.dashboard.title}</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard title={t.dashboard.totalEvents} value={events.length} icon={<Layers size={20} />} color="blue" />
        <KpiCard title={t.dashboard.activeEvents} value={activeEvents.length} icon={<Calendar size={20} />} color="green" />
        <KpiCard title={t.dashboard.totalGuests} value={totalGuests} icon={<Users size={20} />} color="amber" />
        <KpiCard title={t.dashboard.totalAttendees} value={totalAttendees} icon={<CheckCircle size={20} />} color="green" />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">{t.dashboard.quickActions}</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" icon={<CalendarPlus size={18} />} onClick={() => navigate('/events/new')}>
            {t.dashboard.createEvent}
          </Button>
          <Button variant="secondary" icon={<Upload size={18} />} onClick={() => navigate('/events')}>
            {t.dashboard.importGuests}
          </Button>
          <Button variant="secondary" icon={<Bell size={18} />} onClick={() => navigate('/events')}>
            {t.dashboard.sendReminder}
          </Button>
        </div>
      </div>

      {/* Recent Events */}
      <div>
        <h2 className="text-lg font-semibold mb-4">{t.dashboard.recentEvents}</h2>
        {events.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-slate-500 mb-4">{t.common.noData}</p>
            <Button variant="primary" onClick={() => navigate('/events/new')}>
              {t.events.create}
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {events.slice(0, 5).map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="card flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-slate-500">
                    {event.dateTime?.toDate?.()?.toLocaleDateString('he-IL') || ''}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">
                    {event.stats?.yesCount || 0}/{event.stats?.totalGuests || 0}
                  </span>
                  <Badge variant={event.status === 'active' ? 'success' : event.status === 'draft' ? 'warning' : 'gray'}>
                    {t.events.statuses[event.status]}
                  </Badge>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
