import React, { useState } from 'react';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { updateEvent } from '../services/events.service';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { Bell } from 'lucide-react';
import type { EventData } from '../types';

interface Props {
  eventId: string;
  event: EventData;
}

export function RemindersPanel({ eventId, event }: Props) {
  const { t } = useI18n();
  const { toast } = useToast();

  const [enabled, setEnabled] = useState(event.reminderSettings?.enabled ?? false);
  const [afterDays, setAfterDays] = useState(event.reminderSettings?.afterDays ?? 3);
  const [beforeDeadline, setBeforeDeadline] = useState(event.reminderSettings?.beforeDeadlineDays ?? 2);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateEvent(eventId, {
        reminderSettings: { enabled, afterDays, beforeDeadlineDays: beforeDeadline },
      } as any);
      toast('success', 'הגדרות תזכורות נשמרו');
    } catch {
      toast('error', t.errors.generic);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <Bell size={24} className="text-primary-600" />
        <h3 className="text-lg font-semibold">{t.reminders.title}</h3>
      </div>

      <div className="space-y-4 max-w-md">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            className="h-5 w-5"
          />
          <span className="font-medium">{t.reminders.auto}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${enabled ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
            {enabled ? t.reminders.enabled : t.reminders.disabled}
          </span>
        </label>

        {enabled && (
          <>
            <Input
              label={`תזכורת אחרי X ${t.reminders.afterDays}`}
              type="number"
              min={1}
              max={30}
              value={afterDays}
              onChange={(e) => setAfterDays(Number(e.target.value))}
              dir="ltr"
            />
            <Input
              label={`תזכורת X ימים ${t.reminders.beforeDeadline}`}
              type="number"
              min={1}
              max={14}
              value={beforeDeadline}
              onChange={(e) => setBeforeDeadline(Number(e.target.value))}
              dir="ltr"
            />
          </>
        )}

        <Button variant="primary" loading={saving} onClick={handleSave}>
          {t.common.save}
        </Button>
      </div>
    </Card>
  );
}
