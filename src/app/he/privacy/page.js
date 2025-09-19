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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">איסוף מידע</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אנו אוספים מידע אישי רק כאשר אתם מספקים אותו לנו מרצונכם החופשי, 
                כגון בעת יצירת קשר, הרשמה לשירותים או הזמנת פרויקטים.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">שימוש במידע</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                המידע שאנו אוספים משמש אותנו לספק לכם שירותים איכותיים, 
                לתקשר איתכם בנוגע לפרויקטים, ולשפר את השירותים שלנו.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">הגנה על המידע</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אנו משתמשים באמצעי אבטחה מתקדמים כדי להגן על המידע האישי שלכם 
                מפני גישה לא מורשית, שימוש לרעה או חשיפה.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">שיתוף מידע</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אנו לא מוכרים, משכירים או חושפים את המידע האישי שלכם לצדדים שלישיים 
                ללא הסכמתכם המפורשת, למעט במקרים הנדרשים על פי חוק.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">זכויותיכם</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                יש לכם זכות לגשת למידע האישי שלכם, לעדכן אותו, למחוק אותו 
                או לבקש העברה שלו. אתם יכולים לפנות אלינו בכל עת בנושאים אלה.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">יצירת קשר</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אם יש לכם שאלות בנוגע למדיניות הפרטיות שלנו, 
                אתם מוזמנים לפנות אלינו בכתובת: {he.email}
              </p>
              
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
