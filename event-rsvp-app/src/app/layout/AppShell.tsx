import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useI18n } from '@/shared/i18n';
import { SkipLink } from '@/shared/accessibility/SkipLink';
import {
  LayoutDashboard,
  Calendar,
  CalendarPlus,
  Settings,
  Shield,
  LogOut,
  Menu,
  X,
  Globe,
} from 'lucide-react';

export function AppShell() {
  const { t, locale, setLocale } = useI18n();
  const { profile, logout, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: '/dashboard', label: t.nav.dashboard, icon: <LayoutDashboard size={20} /> },
    { to: '/events', label: t.nav.events, icon: <Calendar size={20} /> },
    { to: '/events/new', label: t.nav.createEvent, icon: <CalendarPlus size={20} /> },
    { to: '/settings', label: t.nav.settings, icon: <Settings size={20} /> },
  ];

  if (isAdmin) {
    navItems.push({ to: '/admin', label: t.nav.admin, icon: <Shield size={20} /> });
  }

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const toggleLang = () => {
    setLocale(locale === 'he' ? 'en' : 'he');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SkipLink />

      {/* Mobile header */}
      <header className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40 no-print">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 min-h-touch min-w-touch flex items-center justify-center"
          aria-label={sidebarOpen ? t.a11y.closeMenu : t.a11y.openMenu}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="font-bold text-primary-700">RSVP Manager</h1>
        <button onClick={toggleLang} className="p-2 rounded-lg hover:bg-slate-100" aria-label={t.settings.language}>
          <Globe size={20} />
        </button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-0 h-screen w-64 bg-white border-e border-slate-200 z-50 lg:z-auto
            transform transition-transform lg:transform-none
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full lg:translate-x-0 lg:rtl:translate-x-0'}
          `}
          role="navigation"
          aria-label="ניווט ראשי"
        >
          <div className="p-6 border-b border-slate-200 hidden lg:block">
            <h1 className="text-xl font-bold text-primary-700">RSVP Manager</h1>
            <p className="text-xs text-slate-400 mt-1">מערכת אישורי הגעה</p>
          </div>

          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-touch
                  ${isActive(item.to)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                aria-current={isActive(item.to) ? 'page' : undefined}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-0 w-full p-4 border-t border-slate-200 space-y-2">
            <div className="px-3 py-2 text-sm text-slate-500 truncate">
              {profile?.name || profile?.email}
            </div>
            <button
              onClick={toggleLang}
              className="hidden lg:flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 w-full"
            >
              <Globe size={18} />
              {locale === 'he' ? 'English' : 'עברית'}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full min-h-touch"
            >
              <LogOut size={18} />
              {t.auth.logout}
            </button>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main content */}
        <main id="main-content" className="flex-1 p-4 md:p-8 min-h-screen" tabIndex={-1}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
