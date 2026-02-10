import React from 'react';
import { useI18n } from '@/shared/i18n';

export function TermsPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t.legal.termsTitle}</h1>

      <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed">
        <p><strong>עדכון אחרון:</strong> פברואר 2026</p>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">1. הגדרות ופרטי מפעיל</h2>
          <p>
            "השירות" — מערכת ניהול אירועים ואישורי הגעה (RSVP) המופעלת על ידי [שם החברה] (להלן: "המפעיל").
          </p>
          <p>
            "לקוח" / "מארח" — משתמש רשום היוצר ומנהל אירועים.
          </p>
          <p>
            "מוזמן" — אדם המקבל הזמנה ומשיב לאישור הגעה.
          </p>
          <p>ליצירת קשר: [כתובת אימייל] | [טלפון]</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">2. תיאור השירות</h2>
          <p>השירות מאפשר:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>יצירת אירועים והעלאת הזמנות.</li>
            <li>ניהול רשימות מוזמנים ויבוא מ-CSV.</li>
            <li>שליחת הזמנות אישיות עם קישורי RSVP.</li>
            <li>איסוף תשובות ודוחות סיכום.</li>
            <li>שליחת תזכורות אוטומטיות.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">3. אחריות הלקוח</h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>הלקוח אחראי לכך שרשימת המוזמנים הועלתה כדין ובהסכמה.</li>
            <li>הלקוח לא ישתמש בשירות לשליחת ספאם או דיוור שיווקי ללא הסכמה.</li>
            <li>הלקוח אחראי לשמירת סודיות פרטי חשבונו.</li>
            <li>הלקוח מתחייב שלא לעשות שימוש שיפגע בזכויות צדדים שלישיים.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">4. הגבלות שימוש</h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>אין להשתמש בשירות לשליחת מסרים מסחריים ללא הסכמה (בהתאם לתיקון 40 לחוק התקשורת).</li>
            <li>אין להעלות תכנים פוגעניים, בלתי חוקיים או מפרי זכויות.</li>
            <li>אין לנסות לעקוף מנגנוני אבטחה.</li>
            <li>אין לשתף קישורי RSVP של אנשים אחרים.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">5. תמחור וביטולים</h2>
          <p>
            השירות מוצע בתוכניות שונות. פרטי התמחור מופיעים באתר.
            ביטול מנוי ייכנס לתוקף בסוף תקופת החיוב הנוכחית.
            לא יינתנו החזרים עבור תקופה ששולמה מראש, אלא בהתאם לדין.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">6. הגבלת אחריות</h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>השירות ניתן "כפי שהוא" (AS IS).</li>
            <li>המפעיל לא אחראי לנזק עקיף או תוצאתי.</li>
            <li>המפעיל אינו מתחייב לזמינות רציפה של השירות.</li>
            <li>אחריות המפעיל מוגבלת לסכום ששולם על ידי הלקוח ב-12 החודשים האחרונים.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">7. קניין רוחני</h2>
          <p>
            כל הזכויות בשירות שייכות למפעיל. הלקוח שומר על זכויותיו בתכנים שהעלה (הזמנות, רשימות).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">8. שינויים בתנאים</h2>
          <p>
            המפעיל רשאי לשנות תנאים אלו בכל עת. שינויים מהותיים יתפרסמו באתר
            ויישלח עדכון בדוא"ל. המשך שימוש בשירות מהווה הסכמה לתנאים המעודכנים.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">9. דין וסמכות שיפוט</h2>
          <p>
            תנאי שימוש אלו כפופים לדין הישראלי.
            סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו.
          </p>
        </section>
      </div>
    </div>
  );
}
