import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppShell } from './layout/AppShell';
import { PublicShell } from './layout/PublicShell';
import { ProtectedRoute } from '@/features/auth/components/ProtectedRoute';
import { PageLoader } from '@/shared/ui/Spinner';

// Lazy load pages
const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const SignupPage = lazy(() => import('@/features/auth/pages/SignupPage').then((m) => ({ default: m.SignupPage })));
const ForgotPasswordPage = lazy(() => import('@/features/auth/pages/ForgotPasswordPage').then((m) => ({ default: m.ForgotPasswordPage })));
const DashboardPage = lazy(() => import('@/features/events/pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const EventsListPage = lazy(() => import('@/features/events/pages/EventsListPage').then((m) => ({ default: m.EventsListPage })));
const EventWizardPage = lazy(() => import('@/features/events/pages/EventWizardPage').then((m) => ({ default: m.EventWizardPage })));
const EventDetailsPage = lazy(() => import('@/features/events/pages/EventDetailsPage').then((m) => ({ default: m.EventDetailsPage })));
const SettingsPage = lazy(() => import('@/features/auth/pages/SettingsPage').then((m) => ({ default: m.SettingsPage })));
const PrivacyPage = lazy(() => import('@/features/auth/pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('@/features/auth/pages/TermsPage').then((m) => ({ default: m.TermsPage })));

// RSVP (public)
const RsvpLandingPage = lazy(() => import('@/features/rsvp/pages/RsvpLandingPage').then((m) => ({ default: m.RsvpLandingPage })));
const RsvpFormPage = lazy(() => import('@/features/rsvp/pages/RsvpFormPage').then((m) => ({ default: m.RsvpFormPage })));

// Admin
const AdminDashboardPage = lazy(() => import('@/features/admin/pages/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })));
const UserManagementPage = lazy(() => import('@/features/admin/pages/UserManagementPage').then((m) => ({ default: m.UserManagementPage })));
const TemplatesPage = lazy(() => import('@/features/admin/pages/TemplatesPage').then((m) => ({ default: m.TemplatesPage })));
const CompliancePage = lazy(() => import('@/features/admin/pages/CompliancePage').then((m) => ({ default: m.CompliancePage })));

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  // Public auth pages
  {
    path: '/login',
    element: <SuspenseWrapper><LoginPage /></SuspenseWrapper>,
  },
  {
    path: '/signup',
    element: <SuspenseWrapper><SignupPage /></SuspenseWrapper>,
  },
  {
    path: '/forgot-password',
    element: <SuspenseWrapper><ForgotPasswordPage /></SuspenseWrapper>,
  },

  // Public legal pages
  {
    element: <PublicShell />,
    children: [
      { path: '/privacy', element: <SuspenseWrapper><PrivacyPage /></SuspenseWrapper> },
      { path: '/terms', element: <SuspenseWrapper><TermsPage /></SuspenseWrapper> },
      { path: '/cookies', element: <SuspenseWrapper><PrivacyPage /></SuspenseWrapper> },
    ],
  },

  // RSVP public pages (no auth)
  {
    path: '/rsvp/:eventId/:token',
    element: <SuspenseWrapper><RsvpLandingPage /></SuspenseWrapper>,
  },
  {
    path: '/rsvp/:eventId/:token/form',
    element: <SuspenseWrapper><RsvpFormPage /></SuspenseWrapper>,
  },

  // Authenticated app
  {
    element: (
      <ProtectedRoute>
        <AppShell />
      </ProtectedRoute>
    ),
    children: [
      { path: '/dashboard', element: <SuspenseWrapper><DashboardPage /></SuspenseWrapper> },
      { path: '/events', element: <SuspenseWrapper><EventsListPage /></SuspenseWrapper> },
      { path: '/events/new', element: <SuspenseWrapper><EventWizardPage /></SuspenseWrapper> },
      { path: '/events/:eventId', element: <SuspenseWrapper><EventDetailsPage /></SuspenseWrapper> },
      { path: '/settings', element: <SuspenseWrapper><SettingsPage /></SuspenseWrapper> },

      // Admin (requires admin role)
      {
        path: '/admin',
        element: <ProtectedRoute requireAdmin><SuspenseWrapper><AdminDashboardPage /></SuspenseWrapper></ProtectedRoute>,
      },
      {
        path: '/admin/users',
        element: <ProtectedRoute requireAdmin><SuspenseWrapper><UserManagementPage /></SuspenseWrapper></ProtectedRoute>,
      },
      {
        path: '/admin/templates',
        element: <ProtectedRoute requireAdmin><SuspenseWrapper><TemplatesPage /></SuspenseWrapper></ProtectedRoute>,
      },
      {
        path: '/admin/compliance',
        element: <ProtectedRoute requireAdmin><SuspenseWrapper><CompliancePage /></SuspenseWrapper></ProtectedRoute>,
      },
      {
        path: '/admin/abuse',
        element: <ProtectedRoute requireAdmin><SuspenseWrapper><CompliancePage /></SuspenseWrapper></ProtectedRoute>,
      },
    ],
  },

  // Root redirect
  { path: '/', element: <Navigate to="/dashboard" replace /> },

  // 404
  {
    path: '*',
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-300">404</h1>
          <p className="text-slate-500 mt-2">הדף לא נמצא</p>
        </div>
      </div>
    ),
  },
]);
