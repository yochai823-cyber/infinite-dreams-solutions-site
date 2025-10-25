"use client";

import React, { useState, useEffect } from 'react';
import '../styles/accessibility.css';
import KeyboardShortcuts from './KeyboardShortcuts';

const AccessibilityBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('he'); // עברית כברירת מחדל
  
  // תרגומים
  const translations = {
    he: {
      title: 'סרגל נגישות',
      fontSize: 'הגדלת טקסט',
      letterSpacing: 'רווחי אותיות',
      contrast: 'ניגודיות',
      darkMode: 'מצב כהה/בהיר',
      highlightLinks: 'הדגשת קישורים',
      highlightHeadings: 'הדגשת כותרות',
      highlightForms: 'הדגשת טפסים',
      keyboardNavigation: 'ניווט מקלדת',
      skipToContent: 'דילוג לתוכן',
      skipToNav: 'דילוג לניווט',
      skipToSearch: 'דילוג לחיפוש',
      textToSpeech: 'קריאה בקול',
      slowAnimations: 'האטת אנימציות',
      hideImages: 'הסרת תמונות',
      readingMode: 'מצב קריאה',
      fontFamily: 'שינוי גופן',
      textDirection: 'כיוון טקסט',
      highlightLines: 'הדגשת שורות',
      lineSpacing: 'רווחי שורות',
      monochrome: 'מצב מונוכרום',
      colorblindMode: 'מצב דלטוניזם',
      focusHighlight: 'הדגשת פוקוס',
      backgroundColor: 'צבע רקע',
      textColor: 'צבע טקסט',
      reset: 'איפוס הגדרות',
      save: 'שמירת הגדרות',
      info: 'מידע על נגישות',
      help: 'קיצורי מקלדת',
      activate: 'הפעלה',
      active: 'הפסקה',
      inactive: 'הפעלה',
      default: 'ברירת מחדל',
      openAccessibility: 'פתיחת סרגל נגישות',
      closeAccessibility: 'סגירת סרגל נגישות'
    },
    en: {
      title: 'Accessibility Bar',
      fontSize: 'Font Size',
      letterSpacing: 'Letter Spacing',
      contrast: 'Contrast',
      darkMode: 'Dark/Light Mode',
      highlightLinks: 'Highlight Links',
      highlightHeadings: 'Highlight Headings',
      highlightForms: 'Highlight Forms',
      keyboardNavigation: 'Keyboard Navigation',
      skipToContent: 'Skip to Content',
      skipToNav: 'Skip to Navigation',
      skipToSearch: 'Skip to Search',
      textToSpeech: 'Text to Speech',
      slowAnimations: 'Slow Animations',
      hideImages: 'Hide Images',
      readingMode: 'Reading Mode',
      fontFamily: 'Font Family',
      textDirection: 'Text Direction',
      highlightLines: 'Highlight Lines',
      lineSpacing: 'Line Spacing',
      monochrome: 'Monochrome Mode',
      colorblindMode: 'Colorblind Mode',
      focusHighlight: 'Focus Highlight',
      backgroundColor: 'Background Color',
      textColor: 'Text Color',
      reset: 'Reset Settings',
      save: 'Save Settings',
      info: 'Accessibility Info',
      help: 'Keyboard Shortcuts',
      activate: 'Activate',
      active: 'Stop',
      inactive: 'Start',
      default: 'Default',
      openAccessibility: 'Open Accessibility Bar',
      closeAccessibility: 'Close Accessibility Bar'
    }
  };

  const t = translations[language];
  
  const [settings, setSettings] = useState({
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1.5,
    contrast: 100,
    darkMode: false,
    highlightLinks: false,
    highlightHeadings: false,
    highlightForms: false,
    keyboardNavigation: false,
    skipToContent: false,
    skipToNav: false,
    skipToSearch: false,
    textToSpeech: false,
    slowAnimations: false,
    hideImages: false,
    readingMode: false,
    fontFamily: 'system-ui',
    textDirection: 'ltr',
    highlightLines: false,
    lineSpacing: 1.5,
    monochrome: false,
    colorblindMode: false,
    focusHighlight: false,
    backgroundColor: '#ffffff',
    textColor: '#000000'
  });

  // אייקונים פנימיים
  const icons = {
    fontSize: '🔤',
    letterSpacing: '📝',
    contrast: '🌓',
    darkMode: settings.darkMode ? '☀️' : '🌙',
    highlightLinks: '🔗',
    highlightHeadings: '📋',
    highlightForms: '📝',
    keyboardNavigation: '⌨️',
    skipToContent: '⏭️',
    skipToNav: '⏭️',
    skipToSearch: '🔍',
    textToSpeech: '🔊',
    slowAnimations: '⏸️',
    hideImages: '🖼️',
    readingMode: '📖',
    fontFamily: '🔤',
    textDirection: settings.textDirection === 'rtl' ? '➡️' : '⬅️',
    highlightLines: '🖍️',
    lineSpacing: '📏',
    monochrome: '🎨',
    colorblindMode: '👁️',
    focusHighlight: '🎯',
    backgroundColor: '🎨',
    textColor: '🖋️',
    reset: '🔄',
    save: '💾',
    info: 'ℹ️',
    help: '❓',
    close: '❌',
    menu: '☰',
    wheelchair: '♿'
  };

  // בדיקת הסכמה לקוקיז
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      setHasConsent(true);
      const savedSettings = localStorage.getItem('accessibilitySettings');
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } else {
      setHasConsent(false);
    }
  }, []);

  useEffect(() => {
    if (hasConsent) {
      localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
      applySettings();
    }
  }, [settings, hasConsent]);

  const applySettings = () => {
    const root = document.documentElement;
    
    // הגדלת טקסט
    root.style.setProperty('--font-size', `${settings.fontSize}px`);
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);
    root.style.setProperty('--line-height', settings.lineHeight);
    
    // ניגודיות
    root.style.setProperty('--contrast', `${settings.contrast}%`);
    
    // מצב כהה/בהיר
    if (settings.darkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
    
    // הדגשת קישורים
    if (settings.highlightLinks) {
      root.classList.add('highlight-links');
    } else {
      root.classList.remove('highlight-links');
    }
    
    // הדגשת כותרות
    if (settings.highlightHeadings) {
      root.classList.add('highlight-headings');
    } else {
      root.classList.remove('highlight-headings');
    }
    
    // הדגשת טפסים
    if (settings.highlightForms) {
      root.classList.add('highlight-forms');
    } else {
      root.classList.remove('highlight-forms');
    }
    
    // ניווט מקלדת
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
    
    // האטת אנימציות
    if (settings.slowAnimations) {
      root.classList.add('slow-animations');
    } else {
      root.classList.remove('slow-animations');
    }
    
    // הסתרת תמונות
    if (settings.hideImages) {
      root.classList.add('hide-images');
    } else {
      root.classList.remove('hide-images');
    }
    
    // מצב קריאה
    if (settings.readingMode) {
      root.classList.add('reading-mode');
    } else {
      root.classList.remove('reading-mode');
    }
    
    // שינוי גופן
    root.style.setProperty('--font-family', settings.fontFamily);
    
    // כיוון טקסט
    root.style.setProperty('--text-direction', settings.textDirection);
    
    // הדגשת שורות
    if (settings.highlightLines) {
      root.classList.add('highlight-lines');
    } else {
      root.classList.remove('highlight-lines');
    }
    
    // רווחי שורות
    root.style.setProperty('--line-spacing', settings.lineSpacing);
    
    // מצב מונוכרום
    if (settings.monochrome) {
      root.classList.add('monochrome');
    } else {
      root.classList.remove('monochrome');
    }
    
    // מצב דלטוניזם
    if (settings.colorblindMode) {
      root.classList.add('colorblind-mode');
    } else {
      root.classList.remove('colorblind-mode');
    }
    
    // הדגשת פוקוס
    if (settings.focusHighlight) {
      root.classList.add('focus-highlight');
    } else {
      root.classList.remove('focus-highlight');
    }
    
    // צבעי רקע וטקסט
    root.style.setProperty('--bg-color', settings.backgroundColor);
    root.style.setProperty('--text-color', settings.textColor);
  };

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings({
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 1.5,
      contrast: 100,
      darkMode: false,
      highlightLinks: false,
      highlightHeadings: false,
      highlightForms: false,
      keyboardNavigation: false,
      skipToContent: false,
      skipToNav: false,
      skipToSearch: false,
      textToSpeech: false,
      slowAnimations: false,
      hideImages: false,
      readingMode: false,
      fontFamily: 'system-ui',
      textDirection: 'ltr',
      highlightLines: false,
      lineSpacing: 1.5,
      monochrome: false,
      colorblindMode: false,
      focusHighlight: false,
      backgroundColor: '#ffffff',
      textColor: '#000000'
    });
  };

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(document.body.innerText);
      utterance.lang = 'he-IL';
      speechSynthesis.speak(utterance);
    }
  };

  const skipToContent = () => {
    const mainContent = document.querySelector('main') || document.querySelector('#main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skipToNav = () => {
    const nav = document.querySelector('nav') || document.querySelector('#nav');
    if (nav) {
      nav.focus();
      nav.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skipToSearch = () => {
    const search = document.querySelector('input[type="search"]') || document.querySelector('#search');
    if (search) {
      search.focus();
      search.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const accessibilityActions = [
    // פעולות נגישות בסיסיות
    {
      id: 'fontSize',
      icon: icons.fontSize,
      label: t.fontSize,
      type: 'range',
      min: 12,
      max: 24,
      value: settings.fontSize,
      onChange: (value) => updateSetting('fontSize', parseInt(value))
    },
    {
      id: 'letterSpacing',
      icon: icons.letterSpacing,
      label: t.letterSpacing,
      type: 'range',
      min: 0,
      max: 5,
      value: settings.letterSpacing,
      onChange: (value) => updateSetting('letterSpacing', parseFloat(value))
    },
    {
      id: 'contrast',
      icon: icons.contrast,
      label: t.contrast,
      type: 'range',
      min: 50,
      max: 200,
      value: settings.contrast,
      onChange: (value) => updateSetting('contrast', parseInt(value))
    },
    {
      id: 'darkMode',
      icon: icons.darkMode,
      label: t.darkMode,
      type: 'toggle',
      value: settings.darkMode,
      onChange: (value) => updateSetting('darkMode', value)
    },
    {
      id: 'highlightLinks',
      icon: icons.highlightLinks,
      label: t.highlightLinks,
      type: 'toggle',
      value: settings.highlightLinks,
      onChange: (value) => updateSetting('highlightLinks', value)
    },
    {
      id: 'highlightHeadings',
      icon: icons.highlightHeadings,
      label: t.highlightHeadings,
      type: 'toggle',
      value: settings.highlightHeadings,
      onChange: (value) => updateSetting('highlightHeadings', value)
    },
    {
      id: 'highlightForms',
      icon: icons.highlightForms,
      label: t.highlightForms,
      type: 'toggle',
      value: settings.highlightForms,
      onChange: (value) => updateSetting('highlightForms', value)
    },
    
    // פעולות ניווט
    {
      id: 'keyboardNavigation',
      icon: icons.keyboardNavigation,
      label: t.keyboardNavigation,
      type: 'toggle',
      value: settings.keyboardNavigation,
      onChange: (value) => updateSetting('keyboardNavigation', value)
    },
    {
      id: 'skipToContent',
      icon: icons.skipToContent,
      label: t.skipToContent,
      type: 'action',
      onClick: skipToContent
    },
    {
      id: 'skipToNav',
      icon: icons.skipToNav,
      label: t.skipToNav,
      type: 'action',
      onClick: skipToNav
    },
    {
      id: 'skipToSearch',
      icon: icons.skipToSearch,
      label: t.skipToSearch,
      type: 'action',
      onClick: skipToSearch
    },
    
    // פעולות קריאה
    {
      id: 'textToSpeech',
      icon: icons.textToSpeech,
      label: t.textToSpeech,
      type: 'action',
      onClick: speakText
    },
    {
      id: 'slowAnimations',
      icon: icons.slowAnimations,
      label: t.slowAnimations,
      type: 'toggle',
      value: settings.slowAnimations,
      onChange: (value) => updateSetting('slowAnimations', value)
    },
    {
      id: 'hideImages',
      icon: icons.hideImages,
      label: t.hideImages,
      type: 'toggle',
      value: settings.hideImages,
      onChange: (value) => updateSetting('hideImages', value)
    },
    {
      id: 'readingMode',
      icon: icons.readingMode,
      label: t.readingMode,
      type: 'toggle',
      value: settings.readingMode,
      onChange: (value) => updateSetting('readingMode', value)
    },
    
    // פעולות טקסט
    {
      id: 'fontFamily',
      icon: icons.fontFamily,
      label: t.fontFamily,
      type: 'select',
      options: [
        { value: 'system-ui', label: t.default },
        { value: 'Arial', label: 'Arial' },
        { value: 'Times New Roman', label: 'Times New Roman' },
        { value: 'Courier New', label: 'Courier New' }
      ],
      value: settings.fontFamily,
      onChange: (value) => updateSetting('fontFamily', value)
    },
    {
      id: 'textDirection',
      icon: icons.textDirection,
      label: t.textDirection,
      type: 'toggle',
      value: settings.textDirection === 'rtl',
      onChange: (value) => updateSetting('textDirection', value ? 'rtl' : 'ltr')
    },
    {
      id: 'highlightLines',
      icon: icons.highlightLines,
      label: t.highlightLines,
      type: 'toggle',
      value: settings.highlightLines,
      onChange: (value) => updateSetting('highlightLines', value)
    },
    {
      id: 'lineSpacing',
      icon: icons.lineSpacing,
      label: t.lineSpacing,
      type: 'range',
      min: 1,
      max: 3,
      step: 0.1,
      value: settings.lineSpacing,
      onChange: (value) => updateSetting('lineSpacing', parseFloat(value))
    },
    
    // פעולות צבע
    {
      id: 'monochrome',
      icon: icons.monochrome,
      label: t.monochrome,
      type: 'toggle',
      value: settings.monochrome,
      onChange: (value) => updateSetting('monochrome', value)
    },
    {
      id: 'colorblindMode',
      icon: icons.colorblindMode,
      label: t.colorblindMode,
      type: 'toggle',
      value: settings.colorblindMode,
      onChange: (value) => updateSetting('colorblindMode', value)
    },
    {
      id: 'focusHighlight',
      icon: icons.focusHighlight,
      label: t.focusHighlight,
      type: 'toggle',
      value: settings.focusHighlight,
      onChange: (value) => updateSetting('focusHighlight', value)
    },
    {
      id: 'backgroundColor',
      icon: icons.backgroundColor,
      label: t.backgroundColor,
      type: 'color',
      value: settings.backgroundColor,
      onChange: (value) => updateSetting('backgroundColor', value)
    },
    {
      id: 'textColor',
      icon: icons.textColor,
      label: t.textColor,
      type: 'color',
      value: settings.textColor,
      onChange: (value) => updateSetting('textColor', value)
    },
    
    // פעולות נוספות
    {
      id: 'reset',
      icon: icons.reset,
      label: t.reset,
      type: 'action',
      onClick: resetSettings
    },
    {
      id: 'save',
      icon: icons.save,
      label: t.save,
      type: 'action',
      onClick: () => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === 'accepted') {
          localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
          alert(language === 'he' ? 'ההגדרות נשמרו בהצלחה!' : 'Settings saved successfully!');
        } else {
          alert(language === 'he' ? 'אנא קבל את תנאי השימוש בקוקיז כדי לשמור הגדרות' : 'Please accept cookie terms to save settings');
        }
      }
    },
    {
      id: 'info',
      icon: icons.info,
      label: t.info,
      type: 'action',
      onClick: () => {
        alert(language === 'he' ? 'סרגל נגישות זה מאפשר התאמה אישית של האתר לצרכים שלך. כל ההגדרות נשמרות אוטומטית.' : 'This accessibility bar allows you to customize the website to your needs. All settings are saved automatically.');
      }
    },
    {
      id: 'help',
      icon: icons.help,
      label: t.help,
      type: 'action',
      onClick: () => {
        const shortcuts = language === 'he' 
          ? 'קיצורי מקלדת:\nAlt + A - פתיחת סרגל נגישות\nAlt + C - דילוג לתוכן\nAlt + N - דילוג לניווט\nAlt + S - דילוג לחיפוש\nTab - ניווט בין אלמנטים\nEnter - הפעלת פעולה\nEscape - סגירת סרגל'
          : 'Keyboard Shortcuts:\nAlt + A - Open Accessibility Bar\nAlt + C - Skip to Content\nAlt + N - Skip to Navigation\nAlt + S - Skip to Search\nTab - Navigate between elements\nEnter - Activate action\nEscape - Close bar';
        alert(shortcuts);
      }
    }
  ];

  return (
    <>
      {/* קיצורי מקלדת */}
      <KeyboardShortcuts
        onToggleAccessibility={() => setIsOpen(!isOpen)}
        onSkipToContent={skipToContent}
        onSkipToNav={skipToNav}
        onSkipToSearch={skipToSearch}
      />
      
      {/* כפתור צף - מיקום RTL */}
      <button
        className={`fixed bottom-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 ${language === 'he' ? 'left-6' : 'right-6'}`}
        onClick={() => {
          if (!hasConsent) {
            alert(language === 'he' ? 'אנא קבל את תנאי השימוש בקוקיז כדי להשתמש בסרגל נגישות' : 'Please accept cookie terms to use accessibility bar');
            return;
          }
          setIsOpen(!isOpen);
        }}
        aria-label={isOpen ? t.closeAccessibility : t.openAccessibility}
        style={{ 
          transform: isOpen ? 'scale(1.1)' : 'scale(1)',
          transition: 'all 0.3s ease'
        }}
      >
        <span className="text-2xl">
          {isOpen ? icons.close : icons.wheelchair}
        </span>
      </button>

      {/* סרגל נגישות - מיקום RTL */}
      {isOpen && (
        <div
          className={`accessibility-bar fixed bottom-6 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md w-full max-h-96 overflow-y-auto transition-all duration-300 ${language === 'he' ? 'left-6' : 'right-6'}`}
          dir={language === 'he' ? 'rtl' : 'ltr'}
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
            transition: 'all 0.3s ease'
          }}
        >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t.title}
                </h3>
                <div className="flex items-center gap-2">
                  {/* כפתור החלפת שפה */}
                  <button
                    onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
                    className="text-sm px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-gray-700"
                  >
                    {language === 'he' ? 'EN' : 'עב'}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <span className="text-xl">{icons.close}</span>
                  </button>
                </div>
              </div>

              {/* הודעה אם אין הסכמה לקוקיז */}
              {!hasConsent && (
                <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 rounded-md">
                  <p className="text-sm text-yellow-800">
                    {language === 'he' 
                      ? '⚠️ סרגל נגישות זמין רק לאחר קבלת תנאי השימוש בקוקיז. ההגדרות לא יישמרו.' 
                      : '⚠️ Accessibility bar is only available after accepting cookie terms. Settings will not be saved.'}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                {accessibilityActions.map((action) => (
                  <div key={action.id} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <span className="text-xl text-gray-600 dark:text-gray-400">
                        {action.icon}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                        {action.label}
                      </label>
                      
                      {action.type === 'range' && (
                        <input
                          type="range"
                          min={action.min}
                          max={action.max}
                          step={action.step || 1}
                          value={action.value}
                          onChange={(e) => action.onChange(e.target.value)}
                          className="w-full mt-1"
                        />
                      )}
                      
                      {action.type === 'toggle' && (
                        <button
                          onClick={() => action.onChange(!action.value)}
                          className={`mt-2 px-4 py-2 rounded text-sm font-medium ${
                            action.value 
                              ? 'bg-blue-600 text-white hover:bg-blue-700' 
                              : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                          }`}
                        >
                          {action.value ? t.active : t.inactive}
                        </button>
                      )}
                      
                      {action.type === 'select' && (
                        <select
                          value={action.value}
                          onChange={(e) => action.onChange(e.target.value)}
                          className="w-full mt-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded text-sm"
                        >
                          {action.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}
                      
                      {action.type === 'color' && (
                        <input
                          type="color"
                          value={action.value}
                          onChange={(e) => action.onChange(e.target.value)}
                          className="w-full mt-2 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                        />
                      )}
                      
                      {action.type === 'action' && (
                        <button
                          onClick={action.onClick}
                          className="mt-2 px-4 py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700"
                        >
                          {t.activate}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      )}

      {/* עדכון CSS variables */}
      <style jsx global>{`
        :root {
          --font-size: ${settings.fontSize}px;
          --letter-spacing: ${settings.letterSpacing}px;
          --line-height: ${settings.lineHeight};
          --contrast: ${settings.contrast}%;
          --font-family: ${settings.fontFamily};
          --text-direction: ${settings.textDirection};
          --line-spacing: ${settings.lineSpacing};
          --bg-color: ${settings.backgroundColor};
          --text-color: ${settings.textColor};
        }
      `}</style>
    </>
  );
};

export default AccessibilityBar;
