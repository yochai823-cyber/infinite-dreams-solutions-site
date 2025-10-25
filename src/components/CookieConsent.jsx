"use client";

import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // בדיקה אם המשתמש כבר קיבל הסכמה
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    } else {
      setAccepted(consent === 'accepted');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setAccepted(true);
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setAccepted(false);
    setShowConsent(false);
    // מחיקת הגדרות נגישות אם המשתמש לא מסכים
    localStorage.removeItem('accessibilitySettings');
  };


  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md w-full mx-4 p-6" dir="rtl">
        <div className="text-center">
          <div className="text-4xl mb-4">🍪</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            שימוש בקוקיז
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            האתר שלנו משתמש בקוקיז כדי לשמור את הגדרות הנגישות שלך ולהבטיח חוויית משתמש מותאמת אישית. 
            הנתונים נשמרים רק במכשיר שלך ולא מועברים לשרתים חיצוניים.
          </p>
          <div className="flex gap-3 justify-center flex-row-reverse">
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              קבלה
            </button>
            <button
              onClick={handleDecline}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors"
            >
              דחייה
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
