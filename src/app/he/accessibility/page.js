import { he } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export const metadata = {
  title: 'הצהרת נגישות — Infinite Dreams Solutions',
  description: 'הצהרת הנגישות של אתר Infinite Dreams Solutions בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות ולתקן הישראלי ת״י 5568.',
}

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      <Navbar d={he} locale="he" pageType="accessibility" />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">הצהרת נגישות</h1>
            <p className="text-xl text-gray-600">אנו מחויבים להנגיש את השירותים שלנו לכל אדם, לרבות אנשים עם מוגבלות</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-2">

              <h2 className="text-2xl font-bold text-gray-800 mb-4">המחויבות שלנו</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {he.brand} רואה חשיבות רבה במתן שירות שוויוני ונגיש לכלל הגולשים, ופועלת כדי
                שאתר האינטרנט שלה יהיה נגיש לאנשים עם מוגבלות, בהתאם לחוק שוויון זכויות
                לאנשים עם מוגבלות, התשנ״ח-1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות
                (התאמות נגישות לשירות), התשע״ג-2013.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">רמת הנגישות באתר</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                האתר נבנה במאמץ להתאימו לדרישות התקן הישראלי ת״י 5568 המבוסס על הנחיות
                הנגישות הבין-לאומיות <span className="force-ltr">WCAG 2.0</span> ברמת <span className="force-ltr">AA</span>.
                בין השאר יושמו האמצעים הבאים:
              </p>
              <ul className="list-disc pr-6 text-gray-700 mb-6 leading-relaxed space-y-2">
                <li>מבנה כותרות סמנטי וניווט מקלדת לאורך האתר.</li>
                <li>טקסט חלופי לתמונות ולאלמנטים גרפיים משמעותיים.</li>
                <li>ניגודיות צבעים מספקת בין הטקסט לרקע.</li>
                <li>התאמה למגוון גדלי מסך ומכשירים (רספונסיביות מלאה).</li>
                <li>כיבוד העדפת המשתמש להפחתת אנימציות (<span className="force-ltr">prefers-reduced-motion</span>).</li>
                <li>תמיכה בכיווניות מימין לשמאל (עברית) ובהגדלת טקסט בדפדפן.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">הסתייגויות</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אנו משקיעים מאמצים מתמשכים לשפר את נגישות האתר. ייתכן שחלקים מסוימים טרם
                הונגשו במלואם או שיימצאו בהם ליקויים. אם נתקלתם בבעיית נגישות, נשמח מאוד
                שתפנו אלינו — נטפל בפנייה בהקדם ונפעל לתקן.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">פנייה לרכז הנגישות</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                לכל שאלה, בקשה או דיווח על בעיית נגישות ניתן לפנות לרכז הנגישות שלנו:
              </p>
              <ul className="list-none text-gray-700 mb-6 leading-relaxed space-y-1">
                <li><strong>רכז נגישות:</strong> {he.owner}</li>
                <li><strong>דוא״ל:</strong> <a className="text-indigo-600 force-ltr" href={`mailto:${he.email}`}>{he.email}</a></li>
                <li><strong>טלפון:</strong> <a className="text-indigo-600 force-ltr" href={`tel:+${he.phoneE164}`}>{he.phone}</a></li>
                <li><strong>כתובת:</strong> {he.address}</li>
              </ul>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  הצהרת נגישות זו עודכנה לאחרונה ב-{new Date().toLocaleDateString('he-IL')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer d={he} />
    </main>
  )
}
