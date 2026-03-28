import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { I18nProvider } from '@/shared/i18n';
import { ToastProvider } from '@/shared/ui/Toast';
import { CookieBanner } from '@/shared/privacy/CookieBanner';
import { router } from '@/app/routes';

export function App() {
  return (
    <I18nProvider>
      <ToastProvider>
        <RouterProvider router={router} />
        <CookieBanner />
      </ToastProvider>
    </I18nProvider>
  );
}
