"use client";

import React, { useEffect } from 'react';

const KeyboardShortcuts = ({ onToggleAccessibility, onSkipToContent, onSkipToNav, onSkipToSearch }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Alt + A - פתיחת סרגל נגישות
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        onToggleAccessibility();
      }
      
      // Alt + C - דילוג לתוכן
      if (event.altKey && event.key === 'c') {
        event.preventDefault();
        onSkipToContent();
      }
      
      // Alt + N - דילוג לניווט
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        onSkipToNav();
      }
      
      // Alt + S - דילוג לחיפוש
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        onSkipToSearch();
      }
      
      // Escape - סגירת סרגל נגישות
      if (event.key === 'Escape') {
        const accessibilityBar = document.querySelector('[data-accessibility-bar]');
        if (accessibilityBar && accessibilityBar.style.display !== 'none') {
          onToggleAccessibility();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleAccessibility, onSkipToContent, onSkipToNav, onSkipToSearch]);

  return null; // קומפוננטה זו לא מציגה כלום
};

export default KeyboardShortcuts;
