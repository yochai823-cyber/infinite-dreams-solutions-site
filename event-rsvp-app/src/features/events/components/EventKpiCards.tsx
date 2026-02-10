import React from 'react';
import { KpiCard } from '@/shared/ui/Card';
import { useI18n } from '@/shared/i18n';
import { Send, CheckCircle, XCircle, Clock, HelpCircle, Users } from 'lucide-react';
import type { EventStats } from '../types';

interface Props {
  stats: EventStats;
}

export function EventKpiCards({ stats }: Props) {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <KpiCard
        title={t.events.kpi.sent}
        value={stats.totalGuests}
        icon={<Send size={20} />}
        color="blue"
      />
      <KpiCard
        title={t.events.kpi.confirmed}
        value={stats.yesCount}
        icon={<CheckCircle size={20} />}
        color="green"
      />
      <KpiCard
        title={t.events.kpi.declined}
        value={stats.noCount}
        icon={<XCircle size={20} />}
        color="red"
      />
      <KpiCard
        title={t.events.kpi.pending}
        value={stats.pendingCount}
        icon={<Clock size={20} />}
        color="amber"
      />
      <KpiCard
        title={t.events.kpi.maybe}
        value={stats.maybeCount}
        icon={<HelpCircle size={20} />}
        color="slate"
      />
      <KpiCard
        title={t.events.kpi.totalAttending}
        value={stats.totalAttendees}
        icon={<Users size={20} />}
        color="blue"
      />
    </div>
  );
}
