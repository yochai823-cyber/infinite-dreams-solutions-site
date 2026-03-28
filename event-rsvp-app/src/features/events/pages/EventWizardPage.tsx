import React, { useState, useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { createEvent } from '../services/events.service';
import { Button } from '@/shared/ui/Button';
import { Input, TextArea } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { Card } from '@/shared/ui/Card';
import { Upload, Image, ArrowRight, ArrowLeft } from 'lucide-react';
import type { EventType } from '../types';

export function EventWizardPage() {
  const { t, dir } = useI18n();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Step 1 - Event details
  const [title, setTitle] = useState('');
  const [eventType, setEventType] = useState<EventType>('wedding');
  const [dateTime, setDateTime] = useState('');
  const [deadline, setDeadline] = useState('');
  const [locationName, setLocationName] = useState('');
  const [locationLink, setLocationLink] = useState('');
  const [description, setDescription] = useState('');

  // Step 2 - Invitation
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [altText, setAltText] = useState('');

  const handleImageSelect = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      toast('error', t.errors.fileTooLarge);
      return;
    }
    if (!file.type.match(/^image\/(jpeg|png|webp)$/)) {
      toast('error', t.errors.invalidFileType);
      return;
    }
    setCoverImage(file);
    const reader = new FileReader();
    reader.onload = (e) => setCoverPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handlePdfSelect = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      toast('error', t.errors.fileTooLarge);
      return;
    }
    if (file.type !== 'application/pdf') {
      toast('error', t.errors.invalidFileType);
      return;
    }
    setPdfFile(file);
  };

  const handleSubmit = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const eventId = await createEvent(user.uid, {
        title,
        type: eventType,
        dateTime: new Date(dateTime),
        deadline: new Date(deadline),
        locationName,
        locationLink,
        description,
        coverImage: coverImage || undefined,
        pdfFile: pdfFile || undefined,
        altText,
      });
      toast('success', 'האירוע נוצר בהצלחה');
      navigate(`/events/${eventId}`);
    } catch {
      toast('error', t.errors.generic);
    } finally {
      setLoading(false);
    }
  };

  const eventTypeOptions = Object.entries(t.events.types).map(([value, label]) => ({
    value,
    label,
  }));

  const steps = [t.events.wizard.step1, t.events.wizard.step2];
  const NextIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">{t.events.create}</h1>

      {/* Stepper */}
      <div className="flex items-center gap-2" role="navigation" aria-label="שלבי יצירת אירוע">
        {steps.map((label, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div className="flex-1 h-px bg-slate-200" />}
            <button
              onClick={() => setStep(i + 1)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                ${step === i + 1 ? 'bg-primary-100 text-primary-700' : 'text-slate-500 hover:text-slate-700'}`}
              aria-current={step === i + 1 ? 'step' : undefined}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                ${step === i + 1 ? 'bg-primary-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                {i + 1}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Event Details */}
      {step === 1 && (
        <Card>
          <form className="space-y-4" onSubmit={(e: FormEvent) => { e.preventDefault(); setStep(2); }}>
            <Input
              label={t.events.eventName}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Select
              label={t.events.eventType}
              options={eventTypeOptions}
              value={eventType}
              onChange={(e) => setEventType(e.target.value as EventType)}
              required
            />
            <Input
              label={t.events.dateTime}
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
              dir="ltr"
            />
            <Input
              label={t.events.deadline}
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              dir="ltr"
            />
            <Input
              label={t.events.location}
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              required
            />
            <Input
              label={t.events.locationLink}
              type="url"
              value={locationLink}
              onChange={(e) => setLocationLink(e.target.value)}
              hint="https://waze.com/ul/... או Google Maps"
              dir="ltr"
            />
            <TextArea
              label={t.events.description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex justify-end">
              <Button type="submit" variant="primary" icon={<NextIcon size={16} />}>
                {t.common.next}
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Step 2: Invitation Upload */}
      {step === 2 && (
        <Card>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t.events.invitation.upload}
              </label>
              <div
                className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary-400 transition-colors"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) handleImageSelect(file);
                }}
                role="button"
                tabIndex={0}
                aria-label={t.events.invitation.upload}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
              >
                {coverPreview ? (
                  <img src={coverPreview} alt={altText || 'תצוגה מקדימה'} className="max-h-64 mx-auto rounded-lg" />
                ) : (
                  <div className="space-y-2">
                    <Upload size={40} className="mx-auto text-slate-400" />
                    <p className="text-sm text-slate-500">{t.events.invitation.dragDrop}</p>
                    <p className="text-xs text-slate-400">{t.events.invitation.maxSize}</p>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => { if (e.target.files?.[0]) handleImageSelect(e.target.files[0]); }}
                className="hidden"
                aria-hidden="true"
              />
            </div>

            <Input
              label={t.events.invitation.altText}
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              hint="טקסט שייקרא על ידי קורא מסך"
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t.events.invitation.uploadPdf}
              </label>
              <Button
                variant="secondary"
                size="sm"
                icon={<Image size={16} />}
                onClick={() => pdfInputRef.current?.click()}
              >
                {pdfFile ? pdfFile.name : t.events.invitation.uploadPdf}
              </Button>
              <input
                ref={pdfInputRef}
                type="file"
                accept="application/pdf"
                onChange={(e) => { if (e.target.files?.[0]) handlePdfSelect(e.target.files[0]); }}
                className="hidden"
                aria-hidden="true"
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="secondary" onClick={() => setStep(1)}>
                {t.common.back}
              </Button>
              <Button variant="primary" loading={loading} onClick={handleSubmit}>
                {t.common.create}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
