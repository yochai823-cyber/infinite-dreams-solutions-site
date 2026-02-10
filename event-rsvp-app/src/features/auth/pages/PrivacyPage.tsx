import React from 'react';
import { useI18n } from '@/shared/i18n';

export function PrivacyPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t.legal.privacyTitle}</h1>

      <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed">
        <p><strong>עדכון אחרון:</strong> פברואר 2026</p>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">1. מי אנחנו</h2>
          <p>
            שירות זה מופעל על ידי [שם החברה] (להלן: "החברה", "אנחנו").
            מטרת השירות היא מערכת ניהול אירועים ואישורי הגעה (RSVP).
          </p>
          <p>ליצירת קשר: [כתובת אימייל] | [טלפון]</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">2. אילו נתונים אנו אוספים</h2>
          <ul className="list-disc pr-6 space-y-1">
            <li><strong>לקוחות (מארחים):</strong> שם, אימייל, סיסמה מוצפנת, הגדרות חשבון.</li>
            <li><strong>מוזמנים:</strong> שם, טלפון, אימייל, תשובת RSVP, כמות מלווים, הערות (אלרגיות/צרכים מיוחדים).</li>
            <li><strong>נתונים טכניים:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה (לצורכי אבטחה).</li>
            <li><strong>קוקיז:</strong> ראו מדיניות קוקיז.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">3. מטרות עיבוד המידע</h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>ניהול אירועים ושליחת הזמנות.</li>
            <li>איסוף ועיבוד אישורי הגעה.</li>
            <li>הפקת דוחות וסיכומים למארח.</li>
            <li>שליחת תזכורות למוזמנים.</li>
            <li>אבטחת השירות ומניעת שימוש לרעה.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">4. בעל מאגר המידע</h2>
          <p>
            בעל מאגר המידע הוא החברה המפעילה את השירות.
            הלקוח (המארח) הוא "המחזיק" במאגר בהתאם לחוק הגנת הפרטיות, התשמ"א-1981.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">5. העברת מידע לצדדים שלישיים</h2>
          <ul className="list-disc pr-6 space-y-1">
            <li><strong>Firebase (Google):</strong> אחסון נתונים, אימות משתמשים.</li>
            <li><strong>ספק דוא"ל (SendGrid/Mailgun):</strong> שליחת הזמנות ותזכורות.</li>
            <li><strong>ספקי אנליטיקס:</strong> רק לאחר הסכמת המשתמש.</li>
          </ul>
          <p>לא נמכור או נעביר מידע אישי לצדדים שלישיים למטרות שיווק ללא הסכמה מפורשת.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">6. שמירה ומחיקה</h2>
          <p>
            נתוני מוזמנים נשמרים עד 90 יום לאחר מועד האירוע, ולאחר מכן נמחקים או עוברים אנונימיזציה.
            הלקוח יכול לבקש מחיקה מוקדמת בכל עת.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">7. זכויות המשתמש</h2>
          <p>בהתאם לחוק הגנת הפרטיות, עומדות לך הזכויות הבאות:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li><strong>עיון:</strong> זכות לעיין במידע שנשמר אודותיך.</li>
            <li><strong>תיקון:</strong> זכות לתקן מידע שגוי.</li>
            <li><strong>מחיקה:</strong> זכות לבקש מחיקת המידע שלך.</li>
            <li><strong>ייצוא:</strong> זכות לקבל עותק של המידע שלך בפורמט קריא.</li>
          </ul>
          <p>לבקשות, נא לפנות: [כתובת אימייל]</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">8. אבטחת מידע</h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>תעבורה מוצפנת (HTTPS/TLS).</li>
            <li>קישורי RSVP מאובטחים עם token hash.</li>
            <li>הגנת App Check על שירותי Firebase.</li>
            <li>הגבלת קצב בקשות (Rate Limiting).</li>
            <li>עקרון "מינימום נתונים" — שומרים רק מה שנדרש.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">9. יצירת קשר</h2>
          <p>לשאלות בנוגע לפרטיות ואבטחת מידע:</p>
          <p>אימייל: [כתובת אימייל] | טלפון: [מספר טלפון]</p>
        </section>
      </div>
    </div>
  );
}
