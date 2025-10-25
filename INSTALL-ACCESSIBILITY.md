# הוראות התקנה מהירה - סרגל נגישות

## שלב 1: התקנת תלויות
```bash
npm install framer-motion lucide-react
```

## שלב 2: הוספת הקבצים לפרויקט
1. העתק את `src/components/AccessibilityBar.jsx`
2. העתק את `src/components/KeyboardShortcuts.jsx`
3. העתק את `src/styles/accessibility.css`

## שלב 3: הוספת הקומפוננטה לאפליקציה
```jsx
import AccessibilityBar from './components/AccessibilityBar';
import './styles/accessibility.css';

function App() {
  return (
    <div>
      {/* התוכן שלך */}
      <AccessibilityBar />
    </div>
  );
}
```

## שלב 4: בדיקה
1. פתח את האתר
2. לחץ על הכפתור הכחול בפינה השמאלית התחתונה
3. נסה את הפעולות השונות

## תכונות זמינות
- ✅ 26 פעולות נגישות שונות
- ✅ שמירת הגדרות אוטומטית
- ✅ קיצורי מקלדת
- ✅ אנימציות חלקות
- ✅ תמיכה ב-RTL
- ✅ נגישות מובנית

## קיצורי מקלדת
- Alt + A - פתיחת סרגל נגישות
- Alt + C - דילוג לתוכן
- Alt + N - דילוג לניווט
- Alt + S - דילוג לחיפוש
- Escape - סגירת סרגל

## תמיכה
אם יש בעיות, בדוק את הקונסול בדפדפן או פנה לתמיכה.
