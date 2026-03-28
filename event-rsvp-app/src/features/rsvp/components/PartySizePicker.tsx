import React from 'react';
import { useI18n } from '@/shared/i18n';
import { Minus, Plus } from 'lucide-react';

interface Props {
  value: number;
  max: number;
  onChange: (size: number) => void;
}

export function PartySizePicker({ value, max, onChange }: Props) {
  const { t } = useI18n();

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">
        {t.rsvp.howMany}
      </label>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, value - 1))}
          disabled={value <= 1}
          className="btn-secondary p-3 rounded-full disabled:opacity-30"
          aria-label="הפחת משתתף"
        >
          <Minus size={20} />
        </button>
        <span className="text-3xl font-bold text-primary-700 min-w-[3ch] text-center" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="btn-secondary p-3 rounded-full disabled:opacity-30"
          aria-label="הוסף משתתף"
        >
          <Plus size={20} />
        </button>
      </div>
      <p className="text-xs text-slate-400">מקסימום {max} משתתפים</p>
    </div>
  );
}
