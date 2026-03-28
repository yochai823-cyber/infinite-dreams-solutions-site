import React, { useState } from 'react';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { Button } from '@/shared/ui/Button';
import { TextArea } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { Send, MessageSquare, Mail, Download } from 'lucide-react';
import type { EventData } from '../types';

interface Props {
  eventId: string;
  event: EventData;
}

const DEFAULT_TEMPLATE = `שלום {firstName}! 🎉
הוזמנת ל{eventName}.
לאישור הגעה לחץ/י על הקישור:
{rsvpLink}`;

export function SendCenterPanel({ eventId, event }: Props) {
  const { t } = useI18n();
  const { toast } = useToast();
  const [template, setTemplate] = useState(event.messageTemplate || DEFAULT_TEMPLATE);

  const appUrl = import.meta.env.VITE_APP_URL || window.location.origin;

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      template
        .replace('{firstName}', '[שם]')
        .replace('{eventName}', event.title)
        .replace('{rsvpLink}', `${appUrl}/rsvp/${eventId}/TOKEN`)
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleTestEmail = () => {
    toast('info', 'שליחת אימייל ניסיוני — יש לחבר ספק אימייל (SendGrid) ב-Cloud Functions');
  };

  const handleExportPhones = () => {
    toast('info', 'ייצוא רשימת טלפונים — נא לייצא מטאב "מוזמנים"');
  };

  return (
    <div className="space-y-6">
      {/* Template */}
      <Card>
        <h3 className="font-semibold mb-3">{t.send.template}</h3>
        <TextArea
          label=""
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          rows={6}
        />
        <div className="mt-2 text-xs text-slate-500">
          <strong>{t.send.variables}:</strong> {'{firstName}'}, {'{eventName}'}, {'{rsvpLink}'}
        </div>
      </Card>

      {/* Actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="text-center">
          <MessageSquare size={32} className="mx-auto mb-3 text-green-600" />
          <h4 className="font-medium mb-2">{t.send.whatsapp}</h4>
          <p className="text-xs text-slate-500 mb-4">פתיחת WhatsApp עם הודעה מוכנה</p>
          <Button variant="success" size="sm" onClick={handleWhatsAppShare} icon={<Send size={14} />}>
            {t.send.whatsapp}
          </Button>
        </Card>

        <Card className="text-center">
          <Mail size={32} className="mx-auto mb-3 text-blue-600" />
          <h4 className="font-medium mb-2">{t.send.emailSend}</h4>
          <p className="text-xs text-slate-500 mb-4">שליחה אוטומטית דרך Cloud Function</p>
          <Button variant="primary" size="sm" onClick={handleTestEmail} icon={<Send size={14} />}>
            {t.send.testSend}
          </Button>
        </Card>

        <Card className="text-center">
          <Download size={32} className="mx-auto mb-3 text-slate-600" />
          <h4 className="font-medium mb-2">{t.send.exportSmsList}</h4>
          <p className="text-xs text-slate-500 mb-4">ייצוא CSV של מספרי טלפון</p>
          <Button variant="secondary" size="sm" onClick={handleExportPhones} icon={<Download size={14} />}>
            {t.common.export}
          </Button>
        </Card>
      </div>
    </div>
  );
}
