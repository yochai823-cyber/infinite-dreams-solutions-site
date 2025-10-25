'use client'

import React from 'react'
import { he as d } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Hero from '../../../components/Hero'
import CTA from '../../../components/CTA'
import Footer from '../../../components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Navbar d={d} locale="he" pageType="about" />
      <Hero d={d} locale="he" pageType="about" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">

      {/* תוכן ראשי */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="w-full">
            <div className="bg-white rounded-3xl p-6 shadow-2xl">
              {/* מובייל: פריסה אנכית עם תמונה למעלה */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* תמונה עגולה - במובייל למעלה, בדסקטופ בצד */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="relative">
                    {/* עיגול יפה עם צללים */}
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-200 ring-offset-4 ring-offset-white">
                      <img 
                        src="/me.png" 
                        alt="יוחאי אפללו"
                        className="w-full h-full object-cover rounded-full"
                        style={{
                          objectPosition: 'center 2.5%'
                        }}
                      />
                    </div>
                    
                    {/* עיטור נוסף */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20"></div>
                  </div>
                </div>

                {/* תוכן טקסט */}
                <div className="flex-1 text-center md:text-right">
                  <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-3">
                    יוחאי אפללו
                  </h2>
                  
                  <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                    <p className="text-xl font-semibold text-blue-600 mb-4">
                      נשוי לנטע ואב לארבע בנים - נדב, איתי, זיו ועידן
                    </p>
                    
                    {/* במובייל: כרטיסיות ברוחב מלא, בדסקטופ: 3 עמודות */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border-r-4 border-blue-500">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">רקע מוזיקלי</h3>
                        <p className="text-sm">
                          בוגר האקדמיה למוזיקה, מנצח, מפיק ומנהל מוזיקלי, מורה לפיתוח קול, זמר, כותב ומלחין
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg border-r-4 border-cyan-500">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">ניסיון קהילתי</h3>
                        <p className="text-sm">
                          עובד ומנהל בעולמות הקהילה מעל ל-20 שנה בשלל תפקידים, מנהל אגף נוער, מנהל אגף תרבות ומנכ"ל המתנ"ס
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-3 rounded-lg border-r-4 border-green-500">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">רקע טכנולוגי</h3>
                        <p className="text-sm">
                          בונה אתרים, אפליקציות ומערכות אוטומציה. מייצר פתרונות ניהוליים ואסטרטגיים לרשויות, חברות, עמותות ועסקים
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* צרו קשר */}
      <CTA d={d} locale="he" />

      </div>
      <Footer d={d} locale="he" />
    </main>
  )
}
