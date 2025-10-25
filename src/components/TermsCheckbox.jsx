"use client";

import React, { useState } from 'react';

const TermsCheckbox = ({ 
  onTermsChange, 
  required = true, 
  language = 'he',
  className = '' 
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const translations = {
    he: {
      label: 'אני מאשר/ת את תנאי השימוש',
      required: 'שדה חובה',
      error: 'יש לאשר את תנאי השימוש'
    },
    en: {
      label: 'I agree to the terms of service',
      required: 'Required field',
      error: 'You must agree to the terms of service'
    }
  };

  const t = translations[language];

  const handleChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (onTermsChange) {
      onTermsChange(checked);
    }
  };

  return (
    <div className={`terms-checkbox ${className}`} dir={language === 'he' ? 'rtl' : 'ltr'}>
      <label className="flex items-start gap-3 cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            required={required}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            aria-describedby={required ? 'terms-required' : undefined}
          />
          {required && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" 
                  aria-label={t.required}></span>
          )}
        </div>
        <div className="flex-1">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {t.label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </span>
          {required && (
            <div id="terms-required" className="text-xs text-gray-500 mt-1">
              {t.required}
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default TermsCheckbox;
