'use client'

import { he } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Hero from '../../../components/Hero'
import Services from '../../../components/Services'
import CTA from '../../../components/CTA'
import Footer from '../../../components/Footer'

export default function TechPage() {
  return (
    <main className="min-h-screen">
      <Navbar d={he} locale="he" pageType="tech" />
      <Hero d={he} pageType="tech" locale="he" />
      <Services d={he} pageType="tech" locale="he" />
      
      {/* הדרכות ויעוץ קהילתי */}
      <div id="community-content">
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-8">
              הדרכות ויעוץ
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-8"></div>
            
            {/* הקדמה */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  הדרכות מקצועיות ויעוץ מותאם אישית לצוותים וארגונים. 
                  אנו מספקים הנחיה מקיפה בבינה מלאכותית, אוטומציה 
                  ויישום טכנולוגיות מודרניות.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  הסדנאות והייעוץ שלנו מיועדים להעצים את הצוות שלכם עם ידע מעשי 
                  וניסיון מעשי בטכנולוגיות מתקדמות.
                </p>
              </div>
            </div>
            
            {/* מודעה יחידה - סדנת בינה מלאכותית */}
            <div className="w-full max-w-lg mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex justify-center">
                  <div className="relative cursor-pointer" onClick={() => window.open('/sadnat bina.png', '_blank')}>
                    <img 
                      src="/sadnat bina.png" 
                      alt="סדנת בינה מלאכותית - סדנת בינה"
                      className="w-full max-w-sm rounded-lg shadow-md hover:opacity-90 transition-opacity"
                    />
                    
                    {/* כפתור הורדה - מרכז המודעה */}
                    <div className="flex justify-center mt-6">
                      <button 
                        onClick={async () => {
                          try {
                            // Create canvas
                            const canvas = document.createElement('canvas')
                            const ctx = canvas.getContext('2d')
                            
                            // Load image
                            const mainImg = new Image()
                            mainImg.crossOrigin = 'anonymous'
                            mainImg.onload = () => {
                              // Set canvas size
                              canvas.width = mainImg.width
                              canvas.height = mainImg.height
                              
                              // Draw image
                              ctx.drawImage(mainImg, 0, 0)
                              
                              // Convert to blob and download
                              canvas.toBlob((blob) => {
                                const url = URL.createObjectURL(blob)
                                const a = document.createElement('a')
                                a.href = url
                                a.download = 'ai-workshop-ad.png'
                                a.click()
                                URL.revokeObjectURL(url)
                              })
                            }
                            mainImg.src = '/sadnat bina.png'
                          } catch (error) {
                            console.error('Error downloading image:', error)
                          }
                        }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        הורדת המודעה
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTA d={he} locale="he" />
      <Footer d={he} locale="he" />
    </main>
  )
}
