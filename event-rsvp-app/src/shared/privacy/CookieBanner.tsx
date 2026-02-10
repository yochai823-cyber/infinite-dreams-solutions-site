import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n';
import { getConsent, setConsent, hasConsented } from './consentStore';
import { Button } from '../ui/Button';
import { X } from 'lucide-react';

export function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!hasConsented()) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleAcceptAll = () => {
    setConsent({ analytics: true, marketing: true });
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    setConsent({ analytics: false, marketing: false });
    setVisible(false);
  };

  const handleSave = () => {
    setConsent({ analytics, marketing });
    setVisible(false);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg p-4 md:p-6"
      role="dialog"
      aria-label={t.legal.cookieTitle}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-4">
          <p className="text-sm text-slate-700">{t.legal.cookieBanner}</p>
          <button
            onClick={handleEssentialOnly}
            className="p-1 hover:bg-slate-100 rounded"
            aria-label={t.common.close}
          >
            <X size={18} />
          </button>
        </div>

        {showDetails && (
          <div className="space-y-3 mb-4 p-4 bg-slate-50 rounded-lg">
            <label className="flex items-center gap-3 cursor-not-allowed">
              <input type="checkbox" checked disabled className="h-4 w-4" />
              <span className="text-sm font-medium">{t.legal.essential}</span>
              <span className="text-xs text-slate-500">({t.legal.alwaysOn})</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="h-4 w-4"
              />
              <span className="text-sm font-medium">{t.legal.analytics}</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="h-4 w-4"
              />
              <span className="text-sm font-medium">{t.legal.marketing}</span>
            </label>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="sm" onClick={handleAcceptAll}>
            {t.legal.acceptAll}
          </Button>
          <Button variant="secondary" size="sm" onClick={handleEssentialOnly}>
            {t.legal.essentialOnly}
          </Button>
          {!showDetails ? (
            <Button variant="ghost" size="sm" onClick={() => setShowDetails(true)}>
              {t.legal.customize}
            </Button>
          ) : (
            <Button variant="ghost" size="sm" onClick={handleSave}>
              {t.legal.savePreferences}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
