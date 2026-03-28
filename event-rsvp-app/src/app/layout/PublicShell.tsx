import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useI18n } from '@/shared/i18n';

export function PublicShell() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-slate-100 border-t border-slate-200 py-6 px-4 text-center text-sm text-slate-500 no-print">
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/privacy" className="hover:underline">{t.nav.privacy}</Link>
          <Link to="/terms" className="hover:underline">{t.nav.terms}</Link>
          <Link to="/cookies" className="hover:underline">{t.nav.cookies}</Link>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} RSVP Manager</p>
      </footer>
    </div>
  );
}
