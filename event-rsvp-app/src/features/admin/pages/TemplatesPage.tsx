import React, { useState } from 'react';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { TextArea, Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { Plus, Save } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  language: 'he' | 'en';
  channel: 'whatsapp' | 'email' | 'sms';
  content: string;
}

const DEFAULT_TEMPLATES: Template[] = [
  {
    id: '1',
    name: 'הזמנה בסיסית - עברית',
    language: 'he',
    channel: 'whatsapp',
    content: 'שלום {firstName}! 🎉\nהוזמנת ל{eventName}.\nלאישור הגעה: {rsvpLink}',
  },
  {
    id: '2',
    name: 'Basic Invitation - English',
    language: 'en',
    channel: 'email',
    content: 'Hi {firstName}!\nYou are invited to {eventName}.\nRSVP here: {rsvpLink}',
  },
  {
    id: '3',
    name: 'תזכורת - עברית',
    language: 'he',
    channel: 'whatsapp',
    content: 'היי {firstName}, תזכורת ל{eventName}! עדיין לא קיבלנו ממך אישור.\nלאישור: {rsvpLink}',
  },
];

export function TemplatesPage() {
  const { t } = useI18n();
  const { toast } = useToast();
  const [templates, setTemplates] = useState<Template[]>(DEFAULT_TEMPLATES);
  const [editing, setEditing] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  const handleEdit = (template: Template) => {
    setEditing(template.id);
    setEditContent(template.content);
  };

  const handleSave = (id: string) => {
    setTemplates((prev) =>
      prev.map((t) => (t.id === id ? { ...t, content: editContent } : t))
    );
    setEditing(null);
    toast('success', 'התבנית נשמרה');
  };

  const channelLabels: Record<string, string> = {
    whatsapp: 'WhatsApp',
    email: 'Email',
    sms: 'SMS',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t.admin.templates}</h1>
      </div>

      <div className="space-y-4">
        {templates.map((template) => (
          <Card key={template.id}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-medium">{template.name}</h3>
                <div className="flex gap-2 mt-1">
                  <span className="badge-info">{channelLabels[template.channel]}</span>
                  <span className="badge-gray">{template.language === 'he' ? 'עברית' : 'English'}</span>
                </div>
              </div>
              {editing !== template.id ? (
                <Button variant="ghost" size="sm" onClick={() => handleEdit(template)}>
                  {t.common.edit}
                </Button>
              ) : (
                <Button variant="primary" size="sm" icon={<Save size={14} />} onClick={() => handleSave(template.id)}>
                  {t.common.save}
                </Button>
              )}
            </div>

            {editing === template.id ? (
              <TextArea
                label=""
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={4}
              />
            ) : (
              <pre className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg whitespace-pre-wrap">
                {template.content}
              </pre>
            )}

            <p className="text-xs text-slate-400 mt-2">
              משתנים: {'{firstName}'}, {'{eventName}'}, {'{rsvpLink}'}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
