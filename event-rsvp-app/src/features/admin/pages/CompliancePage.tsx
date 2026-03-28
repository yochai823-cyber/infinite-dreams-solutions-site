import React from 'react';
import { useI18n } from '@/shared/i18n';
import { Card } from '@/shared/ui/Card';
import { Shield, FileText, Trash2, Download } from 'lucide-react';

export function CompliancePage() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t.admin.compliance}</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Deletion Requests */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Trash2 size={20} className="text-red-600" />
            <h3 className="font-semibold">{t.admin.deleteRequests}</h3>
          </div>
          <p className="text-sm text-slate-500 mb-4">
            בקשות מחיקה שהתקבלו ממשתמשים בהתאם לחוק הגנת הפרטיות
          </p>
          <div className="text-center py-6 text-slate-400 text-sm">
            אין בקשות פתוחות
          </div>
        </Card>

        {/* Export Requests */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Download size={20} className="text-blue-600" />
            <h3 className="font-semibold">{t.admin.exportRequests}</h3>
          </div>
          <p className="text-sm text-slate-500 mb-4">
            בקשות ייצוא נתונים שהתקבלו ממשתמשים
          </p>
          <div className="text-center py-6 text-slate-400 text-sm">
            אין בקשות פתוחות
          </div>
        </Card>

        {/* ToS Versions */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <FileText size={20} className="text-amber-600" />
            <h3 className="font-semibold">{t.admin.tosVersions}</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <div>
                <p className="text-sm font-medium">תנאי שימוש v1.0</p>
                <p className="text-xs text-slate-400">פברואר 2026</p>
              </div>
              <span className="badge-success">פעיל</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <div>
                <p className="text-sm font-medium">מדיניות פרטיות v1.0</p>
                <p className="text-xs text-slate-400">פברואר 2026</p>
              </div>
              <span className="badge-success">פעיל</span>
            </div>
          </div>
        </Card>

        {/* Audit Log */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} className="text-green-600" />
            <h3 className="font-semibold">Audit Log</h3>
          </div>
          <p className="text-sm text-slate-500 mb-4">
            רישום כל שינויי תשובות, מחיקות, ייבוא וייצוא
          </p>
          <div className="text-center py-6 text-slate-400 text-sm">
            לוג פעילות מתעדכן אוטומטית
          </div>
        </Card>
      </div>

      {/* Data Retention */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <Shield size={20} className="text-primary-600" />
          <h3 className="font-semibold">מדיניות שמירת נתונים (Data Retention)</h3>
        </div>
        <div className="space-y-2 text-sm text-slate-600">
          <p>• נתוני מוזמנים נמחקים/עוברים אנונימיזציה <strong>90 יום</strong> לאחר מועד האירוע.</p>
          <p>• ניתן לשנות את תקופת השמירה בהגדרות כל אירוע.</p>
          <p>• לקוחות יכולים לבקש מחיקה מיידית בכל עת.</p>
          <p>• הלוגים נשמרים ל-365 יום למטרות ביקורת.</p>
        </div>
      </Card>
    </div>
  );
}
