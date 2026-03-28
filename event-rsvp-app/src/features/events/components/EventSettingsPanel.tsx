import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { updateEvent, deleteEvent, updateEventStatus } from '../services/events.service';
import { Button } from '@/shared/ui/Button';
import { Input, TextArea } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { Trash2, Archive, Settings } from 'lucide-react';
import type { EventData } from '../types';

interface Props {
  eventId: string;
  event: EventData;
  onUpdate: (event: EventData) => void;
}

export function EventSettingsPanel({ eventId, event, onUpdate }: Props) {
  const { t } = useI18n();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description || '');
  const [saving, setSaving] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateEvent(eventId, { title, description } as any);
      onUpdate({ ...event, title, description });
      toast('success', 'ההגדרות נשמרו');
    } catch {
      toast('error', t.errors.generic);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteEvent(eventId);
      toast('success', 'האירוע נמחק');
      navigate('/events');
    } catch {
      toast('error', t.errors.generic);
    }
  };

  const handleArchive = async () => {
    try {
      await updateEventStatus(eventId, 'archived');
      onUpdate({ ...event, status: 'archived' });
      toast('success', 'האירוע הועבר לארכיון');
    } catch {
      toast('error', t.errors.generic);
    }
  };

  return (
    <div className="space-y-6 max-w-xl">
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <Settings size={20} className="text-primary-600" />
          <h3 className="font-semibold">{t.events.tabs.settings}</h3>
        </div>
        <div className="space-y-4">
          <Input
            label={t.events.eventName}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            label={t.events.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant="primary" loading={saving} onClick={handleSave}>
            {t.common.save}
          </Button>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold mb-4 text-red-600">אזור מסוכן</h3>
        <div className="space-y-3">
          <Button variant="secondary" icon={<Archive size={16} />} onClick={handleArchive}>
            העבר לארכיון
          </Button>

          {!showDelete ? (
            <Button variant="danger" icon={<Trash2 size={16} />} onClick={() => setShowDelete(true)}>
              {t.common.delete}
            </Button>
          ) : (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg space-y-3">
              <p className="text-sm text-red-700">פעולה זו תמחק את האירוע וכל הנתונים הקשורים. האם להמשיך?</p>
              <div className="flex gap-2">
                <Button variant="danger" size="sm" onClick={handleDelete}>
                  כן, מחק
                </Button>
                <Button variant="secondary" size="sm" onClick={() => setShowDelete(false)}>
                  {t.common.cancel}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
