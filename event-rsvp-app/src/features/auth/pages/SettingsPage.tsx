import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/firebase/firebase.client';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { Card } from '@/shared/ui/Card';
import { User, Globe, Download, Trash2 } from 'lucide-react';

export function SettingsPage() {
  const { t, locale, setLocale } = useI18n();
  const { user, profile } = useAuth();
  const { toast } = useToast();

  const [name, setName] = useState(profile?.name || '');
  const [senderName, setSenderName] = useState(profile?.senderName || '');
  const [saving, setSaving] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    try {
      await updateDoc(doc(db, 'users', user.uid), { name, senderName });
      toast('success', 'ההגדרות נשמרו');
    } catch {
      toast('error', t.errors.generic);
    } finally {
      setSaving(false);
    }
  };

  const handleExportData = () => {
    toast('info', 'ייצוא נתונים — פנה לתמיכה לקבלת קובץ ייצוא מלא');
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">{t.settings.title}</h1>

      {/* Profile */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <User size={20} className="text-primary-600" />
          <h2 className="font-semibold">{t.settings.profile}</h2>
        </div>
        <div className="space-y-4">
          <Input
            label={t.auth.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label={t.auth.email}
            value={user?.email || ''}
            disabled
            dir="ltr"
          />
          <Input
            label={t.settings.senderName}
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            hint="השם שיופיע כשולח ההזמנות"
          />
          <Button variant="primary" loading={saving} onClick={handleSave}>
            {t.common.save}
          </Button>
        </div>
      </Card>

      {/* Language */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <Globe size={20} className="text-primary-600" />
          <h2 className="font-semibold">{t.settings.language}</h2>
        </div>
        <Select
          label={t.settings.language}
          options={[
            { value: 'he', label: 'עברית' },
            { value: 'en', label: 'English' },
          ]}
          value={locale}
          onChange={(e) => setLocale(e.target.value as 'he' | 'en')}
        />
      </Card>

      {/* Data */}
      <Card>
        <h2 className="font-semibold mb-4">נתונים ופרטיות</h2>
        <div className="space-y-3">
          <Button variant="secondary" icon={<Download size={16} />} onClick={handleExportData}>
            {t.settings.exportData}
          </Button>

          {!showDelete ? (
            <Button variant="danger" icon={<Trash2 size={16} />} onClick={() => setShowDelete(true)}>
              {t.settings.deleteAccount}
            </Button>
          ) : (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg space-y-3">
              <p className="text-sm text-red-700">{t.settings.deleteWarning}</p>
              <div className="flex gap-2">
                <Button variant="danger" size="sm" onClick={() => toast('info', 'לביצוע מחיקה, פנה לתמיכה')}>
                  אשר מחיקה
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
