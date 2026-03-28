import React, { createContext, useContext, useState, useCallback } from 'react';
import { he } from './he';
import { en } from './en';

export type Locale = 'he' | 'en';
export type Dict = typeof he;

const dictionaries: Record<Locale, Dict> = { he, en };

interface I18nContextValue {
  locale: Locale;
  dir: 'rtl' | 'ltr';
  t: Dict;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('he');

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = dictionaries[newLocale].dir;
  }, []);

  const value: I18nContextValue = {
    locale,
    dir: dictionaries[locale].dir,
    t: dictionaries[locale],
    setLocale,
  };

  return React.createElement(I18nContext.Provider, { value }, children);
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export { he, en };
