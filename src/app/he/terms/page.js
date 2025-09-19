import { he } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar d={he} locale="he" pageType="terms" />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              תנאי שימוש
            </h1>
            <p className="text-xl text-gray-600">
              התנאים וההגבלות לשימוש בשירותים שלנו
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">קבלת השירותים</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                על ידי שימוש בשירותים שלנו, אתם מסכימים לתנאים אלה. 
                אם אינכם מסכימים לתנאים, אנא הימנעו משימוש בשירותים.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">שירותים</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אנו מספקים שירותי פיתוח אפליקציות, אוטומציות, הפקות מוזיקה ומופעים, 
                הדרכות ויעוץ קהילתי, והרצאות. כל השירותים ניתנים ברמה מקצועית גבוהה.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">תשלומים</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                התשלום עבור השירותים יבוצע בהתאם להסכם שנחתם בין הצדדים. 
                אנו שומרים לעצמנו את הזכות לשנות מחירים בהתאם לשינויים בשוק.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">אחריות</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אנו מתחייבים לספק שירותים איכותיים ומקצועיים. 
                במקרה של בעיות, נשמח לתקן אותן במהירות האפשרית.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ביטול והחזרים</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ביטול פרויקטים יתבצע בהתאם להסכם שנחתם. 
                החזרים יבוצעו בהתאם למדיניות הביטול המוסכמת.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">שינויים בתנאים</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אנו שומרים לעצמנו את הזכות לשנות תנאים אלה בכל עת. 
                שינויים ייכנסו לתוקף מיידית עם פרסומם באתר.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">יצירת קשר</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                לשאלות בנוגע לתנאי השימוש, אתם מוזמנים לפנות אלינו בכתובת: {he.email}
              </p>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  תנאים אלה עודכנו לאחרונה ב-{new Date().toLocaleDateString('he-IL')}
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
