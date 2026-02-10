import React, { useState, useEffect } from 'react';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { getGuestsByEvent } from '@/features/guests/services/guests.service';
import { Card, KpiCard } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { Download, Users, UserCheck, UserX } from 'lucide-react';
import type { EventData } from '../types';
import type { GuestData } from '@/features/guests/types';

interface Props {
  eventId: string;
  event: EventData;
}

export function ReportsPanel({ eventId, event }: Props) {
  const { t } = useI18n();
  const { toast } = useToast();
  const [guests, setGuests] = useState<GuestData[]>([]);

  useEffect(() => {
    getGuestsByEvent(eventId).then(setGuests);
  }, [eventId]);

  const confirmed = guests.filter((g) => g.status === 'yes');
  const declined = guests.filter((g) => g.status === 'no');
  const pending = guests.filter((g) => g.status === 'pending');
  const totalAttendees = confirmed.reduce((sum, g) => sum + (g.partySize || 1), 0);

  // Group by group field
  const byGroup = confirmed.reduce<Record<string, { count: number; attendees: number }>>((acc, g) => {
    const group = g.group || 'אחר';
    if (!acc[group]) acc[group] = { count: 0, attendees: 0 };
    acc[group].count++;
    acc[group].attendees += g.partySize || 1;
    return acc;
  }, {});

  const exportCsv = () => {
    const header = 'שם פרטי,שם משפחה,טלפון,אימייל,סטטוס,כמות מגיעים,הערה,קבוצה\n';
    const rows = guests.map((g) =>
      `"${g.firstName}","${g.lastName}","${g.phone}","${g.email}","${g.status}","${g.partySize}","${g.note || ''}","${g.group || ''}"`
    ).join('\n');
    const blob = new Blob(['\uFEFF' + header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.title}-guests.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast('success', 'הקובץ הורד');
  };

  const exportForVenue = () => {
    const header = 'שם,כמות מגיעים,הערה\n';
    const rows = confirmed.map((g) =>
      `"${g.firstName} ${g.lastName}","${g.partySize || 1}","${g.note || ''}"`
    ).join('\n');
    const blob = new Blob(['\uFEFF' + header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.title}-venue-list.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast('success', 'רשימת אולם הורדה');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard title={t.reports.totalConfirmed} value={confirmed.length} icon={<UserCheck size={20} />} color="green" />
        <KpiCard title={t.reports.totalWithCompanions} value={totalAttendees} icon={<Users size={20} />} color="blue" />
        <KpiCard title={t.events.kpi.declined} value={declined.length} icon={<UserX size={20} />} color="red" />
        <KpiCard title={t.events.kpi.pending} value={pending.length} icon={<Users size={20} />} color="amber" />
      </div>

      {/* By Group */}
      {Object.keys(byGroup).length > 0 && (
        <Card>
          <h3 className="font-semibold mb-4">{t.reports.byGroup}</h3>
          <div className="space-y-2">
            {Object.entries(byGroup).map(([group, data]) => (
              <div key={group} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                <span className="font-medium">{group}</span>
                <span className="text-sm text-slate-500">
                  {data.count} אישרו, {data.attendees} מגיעים
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* No Response */}
      {pending.length > 0 && (
        <Card>
          <h3 className="font-semibold mb-4">{t.reports.noResponse} ({pending.length})</h3>
          <div className="space-y-1 text-sm">
            {pending.map((g) => (
              <div key={g.id} className="flex justify-between py-1">
                <span>{g.firstName} {g.lastName}</span>
                <span className="text-slate-400">{g.phone || g.email}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Export */}
      <div className="flex flex-wrap gap-3">
        <Button variant="secondary" icon={<Download size={16} />} onClick={exportCsv}>
          {t.guests.exportCsv}
        </Button>
        <Button variant="secondary" icon={<Download size={16} />} onClick={exportForVenue}>
          {t.reports.exportForVenue}
        </Button>
      </div>
    </div>
  );
}
