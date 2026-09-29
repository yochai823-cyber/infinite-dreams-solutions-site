import { he } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar d={he} locale="he" pageType="privacy" />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              מדיניות פרטיות
            </h1>
            <p className="text-xl text-gray-600">
              הגנה על הפרטיות שלכם היא העדיפות הראשונה שלנו
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-gray-700 mb-6 leading-relaxed">
                מדיניות זו מפרטת כיצד {he.brand} (להלן: &quot;אנחנו&quot;) אוספת, משתמשת ושומרת מידע
                בעת השימוש באתר. המדיניות מנוסחת בלשון זכר מטעמי נוחות בלבד ומופנית לכל המגדרים.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">איזה מידע אנו אוספים</h2>
              <p className="text-gray-700 mb-3 leading-relaxed"><strong>מידע שאתם מוסרים ביוזמתכם:</strong> בעת מילוי טופס יצירת קשר או פנייה אלינו — שם, מספר טלפון, כתובת דוא״ל ותיאור הצורך/הפרויקט שתבחרו לשתף.</p>
              <p className="text-gray-700 mb-6 leading-relaxed"><strong>מידע שנאסף אוטומטית:</strong> לצורכי שיפור האתר אנו אוספים נתוני שימוש בסיסיים באמצעות מערכת מדידה עצמאית (ללא Google Analytics וללא פרסום מבוסס מעקב) — כגון עמודים שנצפו, לחיצות על כפתורים וסוג המכשיר. איננו יוצרים באמצעותם פרופיל מזהה עליכם.</p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">מטרות השימוש במידע</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                המידע משמש כדי לחזור אליכם ולטפל בפנייה, לספק ולשפר את השירותים,
                ולתפעל ולאבטח את האתר. איננו מוכרים או משכירים את המידע האישי שלכם.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">דיוור ופרסום</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                נשלח לכם דברי פרסומת או עדכונים שיווקיים רק אם סימנתם הסכמה מפורשת לכך,
                בהתאם לסעיף 30א לחוק התקשורת (בזק ושידורים), התשמ״ב-1982. תוכלו להסיר את
                הסכמתכם בכל עת באמצעות פנייה אלינו או קישור ההסרה בהודעה.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">אחסון והעברת מידע</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                המידע נשמר אצל ספקי תשתית וארחון מוכרים (כגון שירותי אירוח ובסיסי נתונים בענן),
                וייתכן שהוא מאוחסן בשרתים הממוקמים מחוץ לישראל. אנו פועלים להתקשר עם ספקים
                המיישמים אמצעי אבטחה והגנת פרטיות מקובלים.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">שמירת המידע</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                נשמור את המידע כל עוד הוא נדרש למטרות שלשמן נאסף או כנדרש על פי דין,
                ולאחר מכן נמחק או ננטרל אותו.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">אבטחת מידע</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע מפני גישה, שימוש או חשיפה
                בלתי מורשים. עם זאת, אין באפשרותנו להבטיח הגנה מוחלטת בכל מקרה.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">זכויותיכם</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                בהתאם לחוק הגנת הפרטיות, התשמ״א-1981, יש לכם זכות לעיין במידע שנשמר עליכם,
                לבקש לתקן אותו, לעדכנו או למחוק אותו. לבקשה כזו ניתן לפנות אלינו בפרטים שלהלן.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">בעל המאגר ויצירת קשר</h2>
              <ul className="list-none text-gray-700 mb-6 leading-relaxed space-y-1">
                <li><strong>הגורם האחראי:</strong> {he.owner} — {he.brand}</li>
                <li><strong>דוא״ל:</strong> <a className="text-indigo-600 force-ltr" href={`mailto:${he.email}`}>{he.email}</a></li>
                <li><strong>טלפון:</strong> <a className="text-indigo-600 force-ltr" href={`tel:+${he.phoneE164}`}>{he.phone}</a></li>
                <li><strong>כתובת:</strong> {he.address}</li>
              </ul>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  מדיניות זו עודכנה לאחרונה ב-{new Date().toLocaleDateString('he-IL')}
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
