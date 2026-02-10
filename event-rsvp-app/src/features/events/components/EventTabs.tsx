import React from 'react';
import { useI18n } from '@/shared/i18n';

export type EventTab = 'overview' | 'guests' | 'sendCenter' | 'reminders' | 'reports' | 'settings';

interface Props {
  activeTab: EventTab;
  onTabChange: (tab: EventTab) => void;
}

const tabs: EventTab[] = ['overview', 'guests', 'sendCenter', 'reminders', 'reports', 'settings'];

export function EventTabs({ activeTab, onTabChange }: Props) {
  const { t } = useI18n();

  const labels: Record<EventTab, string> = {
    overview: t.events.tabs.overview,
    guests: t.events.tabs.guests,
    sendCenter: t.events.tabs.sendCenter,
    reminders: t.events.tabs.reminders,
    reports: t.events.tabs.reports,
    settings: t.events.tabs.settings,
  };

  return (
    <nav className="border-b border-slate-200 overflow-x-auto" role="tablist" aria-label="Event sections">
      <div className="flex gap-0 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors min-h-touch whitespace-nowrap
              ${activeTab === tab
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
          >
            {labels[tab]}
          </button>
        ))}
      </div>
    </nav>
  );
}
