import React, { useState, useRef } from 'react';
import Papa from 'papaparse';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { addGuestsBatch, generateTokenHash } from '../services/guests.service';
import { autoDetectMapping, mapCsvToGuests } from '../utils/csv.mapper';
import { deduplicateGuests } from '../utils/dedupe';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import { Select } from '@/shared/ui/Select';
import { Card } from '@/shared/ui/Card';
import { Upload, AlertTriangle, CheckCircle } from 'lucide-react';
import type { GuestData, CsvRow, CsvMapping } from '../types';

interface Props {
  eventId: string;
  existingGuests: GuestData[];
  onClose: () => void;
  onImported: () => void;
}

type Step = 'upload' | 'mapping' | 'review' | 'done';

export function ImportCsvModal({ eventId, existingGuests, onClose, onImported }: Props) {
  const { t } = useI18n();
  const { toast } = useToast();
  const fileRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState<Step>('upload');
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<CsvRow[]>([]);
  const [mapping, setMapping] = useState<CsvMapping | null>(null);
  const [importResult, setImportResult] = useState<{ imported: number; duplicates: number; errors: Array<{ row: number; message: string }> } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = (file: File) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        if (result.data.length === 0) {
          toast('error', 'הקובץ ריק');
          return;
        }
        const csvRows = result.data as CsvRow[];
        const csvHeaders = Object.keys(csvRows[0]);
        setHeaders(csvHeaders);
        setRows(csvRows);
        const autoMapping = autoDetectMapping(csvHeaders);
        setMapping(autoMapping);
        setStep('mapping');
      },
      error: () => {
        toast('error', 'שגיאה בקריאת הקובץ');
      },
    });
  };

  const handleMapping = () => {
    if (!mapping) return;
    const result = mapCsvToGuests(rows, mapping);
    const existing = existingGuests.map((g) => ({ phone: g.phone, email: g.email }));
    const deduped = deduplicateGuests(result.guests, existing);

    setImportResult({
      imported: deduped.unique.length,
      duplicates: deduped.duplicates.length,
      errors: result.errors,
    });
    setStep('review');
  };

  const handleImport = async () => {
    if (!mapping) return;
    setLoading(true);
    try {
      const result = mapCsvToGuests(rows, mapping);
      const existing = existingGuests.map((g) => ({ phone: g.phone, email: g.email }));
      const deduped = deduplicateGuests(result.guests, existing);

      await addGuestsBatch(eventId, deduped.unique, generateTokenHash);
      toast('success', `${deduped.unique.length} מוזמנים יובאו בהצלחה`);
      setStep('done');
      onImported();
    } catch {
      toast('error', t.errors.generic);
    } finally {
      setLoading(false);
    }
  };

  const headerOptions = headers.map((h) => ({ value: h, label: h }));

  return (
    <Modal isOpen onClose={onClose} title={t.guests.importCsv} size="lg">
      {step === 'upload' && (
        <div className="space-y-4 text-center py-8">
          <Upload size={48} className="mx-auto text-slate-400" />
          <p className="text-sm text-slate-600">בחר קובץ CSV עם רשימת המוזמנים</p>
          <Button variant="primary" onClick={() => fileRef.current?.click()}>
            בחר קובץ
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => { if (e.target.files?.[0]) handleFileSelect(e.target.files[0]); }}
          />
          <p className="text-xs text-slate-400">
            עמודות נדרשות: שם פרטי + (טלפון או אימייל)
          </p>
        </div>
      )}

      {step === 'mapping' && mapping && (
        <div className="space-y-4">
          <h3 className="font-medium">{t.guests.csvMapping}</h3>
          <p className="text-sm text-slate-500">נמצאו {rows.length} שורות. מפה את העמודות:</p>

          <div className="grid grid-cols-2 gap-4">
            {(Object.keys(mapping) as Array<keyof CsvMapping>).map((field) => (
              <Select
                key={field}
                label={t.guests[field as keyof typeof t.guests] as string || field}
                options={[{ value: '', label: '-- לא ממופה --' }, ...headerOptions]}
                value={mapping[field]}
                onChange={(e) => setMapping({ ...mapping, [field]: e.target.value })}
              />
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="secondary" onClick={() => setStep('upload')}>
              {t.common.back}
            </Button>
            <Button variant="primary" onClick={handleMapping}>
              {t.common.next}
            </Button>
          </div>
        </div>
      )}

      {step === 'review' && importResult && (
        <div className="space-y-4">
          <h3 className="font-medium">סיכום ייבוא</h3>

          <div className="grid grid-cols-3 gap-4">
            <Card className="text-center">
              <CheckCircle className="mx-auto mb-2 text-green-600" size={24} />
              <p className="text-2xl font-bold">{importResult.imported}</p>
              <p className="text-xs text-slate-500">תקינים לייבוא</p>
            </Card>
            <Card className="text-center">
              <AlertTriangle className="mx-auto mb-2 text-amber-600" size={24} />
              <p className="text-2xl font-bold">{importResult.duplicates}</p>
              <p className="text-xs text-slate-500">{t.guests.duplicatesFound}</p>
            </Card>
            <Card className="text-center">
              <AlertTriangle className="mx-auto mb-2 text-red-600" size={24} />
              <p className="text-2xl font-bold">{importResult.errors.length}</p>
              <p className="text-xs text-slate-500">שגיאות</p>
            </Card>
          </div>

          {importResult.errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-h-40 overflow-y-auto">
              <h4 className="text-sm font-medium text-red-700 mb-2">{t.guests.csvErrors}</h4>
              {importResult.errors.map((err, i) => (
                <p key={i} className="text-xs text-red-600">
                  שורה {err.row}: {err.message}
                </p>
              ))}
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="secondary" onClick={() => setStep('mapping')}>
              {t.common.back}
            </Button>
            <Button variant="primary" loading={loading} onClick={handleImport} disabled={importResult.imported === 0}>
              ייבא {importResult.imported} מוזמנים
            </Button>
          </div>
        </div>
      )}

      {step === 'done' && (
        <div className="text-center py-8 space-y-4">
          <CheckCircle size={48} className="mx-auto text-green-600" />
          <p className="font-medium">הייבוא הושלם בהצלחה!</p>
          <Button variant="primary" onClick={onClose}>
            {t.common.close}
          </Button>
        </div>
      )}
    </Modal>
  );
}
