import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { getEvent, updateEventStatus } from '../services/events.service';
import { EventKpiCards } from '../components/EventKpiCards';
import { EventTabs, type EventTab } from '../components/EventTabs';
import { GuestsTable } from '@/features/guests/components/GuestsTable';
import { SendCenterPanel } from '@/features/events/components/SendCenterPanel';
import { RemindersPanel } from '@/features/events/components/RemindersPanel';
import { ReportsPanel } from '@/features/events/components/ReportsPanel';
import { EventSettingsPanel } from '@/features/events/components/EventSettingsPanel';
import { Button } from '@/shared/ui/Button';
import { Badge } from '@/shared/ui/Badge';
import { Spinner } from '@/shared/ui/Spinner';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import type { EventData } from '../types';

export function EventDetailsPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const { t, dir } = useI18n();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<EventTab>('overview');

  useEffect(() => {
    if (!eventId) return;
    getEvent(eventId).then((data) => {
      setEvent(data);
      setLoading(false);
    });
  }, [eventId]);

  const handleStatusChange = async (status: 'active' | 'archived' | 'draft') => {
    if (!eventId || !event) return;
    try {
      await updateEventStatus(eventId, status);
      setEvent({ ...event, status });
      toast('success', 'הסטטוס עודכן');
    } catch {
      toast('error', t.errors.generic);
    }
  };

  if (loading) return <Spinner className="py-20" />;
  if (!event) return <div className="text-center py-20 text-slate-500">{t.common.noData}</div>;

  const statusVariant = event.status === 'active' ? 'success' : event.status === 'draft' ? 'warning' : 'gray';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <div>
          <button
            onClick={() => navigate('/events')}
            className="text-sm text-primary-600 hover:underline flex items-center gap-1 mb-2"
          >
            <ArrowRight size={14} className={dir === 'ltr' ? 'rotate-180' : ''} />
            {t.common.back}
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">{event.title}</h1>
            <Badge variant={statusVariant}>
              {t.events.statuses[event.status]}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {event.dateTime?.toDate?.()?.toLocaleDateString('he-IL')}
            </span>
            {event.locationName && (
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {event.locationName}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {event.status === 'draft' && (
            <Button variant="success" size="sm" onClick={() => handleStatusChange('active')}>
              הפעל אירוע
            </Button>
          )}
          {event.status === 'active' && (
            <Button variant="secondary" size="sm" onClick={() => handleStatusChange('archived')}>
              העבר לארכיון
            </Button>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      <EventKpiCards stats={event.stats} />

      {/* Tabs */}
      <EventTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div role="tabpanel" aria-label={activeTab}>
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {event.invitation?.coverUrl && (
              <img
                src={event.invitation.coverUrl}
                alt={event.invitation.altText || event.title}
                className="max-h-80 rounded-lg shadow"
              />
            )}
            {event.description && (
              <p className="text-slate-600">{event.description}</p>
            )}
          </div>
        )}
        {activeTab === 'guests' && eventId && (
          <GuestsTable eventId={eventId} />
        )}
        {activeTab === 'sendCenter' && eventId && (
          <SendCenterPanel eventId={eventId} event={event} />
        )}
        {activeTab === 'reminders' && eventId && (
          <RemindersPanel eventId={eventId} event={event} />
        )}
        {activeTab === 'reports' && eventId && (
          <ReportsPanel eventId={eventId} event={event} />
        )}
        {activeTab === 'settings' && eventId && (
          <EventSettingsPanel eventId={eventId} event={event} onUpdate={setEvent} />
        )}
      </div>
    </div>
  );
}
