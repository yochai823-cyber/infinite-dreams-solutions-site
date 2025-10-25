'use client'

import { he } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Hero from '../../../components/Hero'
import Services from '../../../components/Services'
import VideoSection from '../../../components/VideoSection'
import AudioSection from '../../../components/AudioSection'
import CTA from '../../../components/CTA'
import Footer from '../../../components/Footer'

export default function ProductionsPage() {
  // נתוני הסרטונים
  const videos = [
    {
      title: "שיר לשירה - חבורת מיתרים קדימה צורן",
      description: "",
      embedUrl: "/video/VID-1234.mp4",
      directUrl: "/video/VID-1234.mp4",
      thumbnail: null // נטען אוטומטית מהקובץ המקומי
    },
    {
      title: "טקס יום הזיכרון - הרכב הנוער של שכונת רמות",
      description: "ניהול מוזיקלי: יוחאי אפללו",
      embedUrl: "https://www.youtube.com/watch?v=Q0JFv2ITjIo",
      directUrl: "https://www.youtube.com/watch?v=Q0JFv2ITjIo",
      thumbnail: null // נטען אוטומטית מ-YouTube
    },
    {
      title: "עמתי לעגוז' - מחזמר לילדים ולכל המשפחה",
      description: "בימוי: רחל קשת | מחזה תפאורה ותלבושות: יהונתן ביטון | הפקה: יטיב לויכטר | מוזיקה מקורית: יהונתן ביטון ויוחאי אפללו | ניהול מוזיקלי: יוחאי אפללו | פלייבקים: אלעד דויטש מוזיקה | כוריאוגרפיה: הדסה ברנס | איפור: אושרת גיספאן | הגברה ותאורה: ישראל שוק",
      embedUrl: "https://www.youtube.com/watch?v=thWghJRhXdc",
      directUrl: "https://www.youtube.com/watch?v=thWghJRhXdc",
      thumbnail: null // נטען אוטומטית מ-YouTube
    },
    {
      title: "לא עוזב את העיר - הרכב הצעירים של גוש עציון",
      description: "",
      embedUrl: "https://www.youtube.com/watch?v=0LrN8ls0RYU",
      directUrl: "https://www.youtube.com/watch?v=0LrN8ls0RYU",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "ביום זה - לאה גולדברג",
      description: "מילים: לאה גולדברג / לחן: מוני אמריליו / עיבוד: בועז דורות / שירה: יוחאי אפללו, בליווי הסינפונייטה הישראלית באר שבע",
      embedUrl: "https://www.youtube.com/watch?v=O62KMkk99e8",
      directUrl: "https://www.youtube.com/watch?v=O62KMkk99e8",
      thumbnail: null // נטען אוטומטית מ-YouTube
    },
    {
      title: "כשזה עמוק - קורין אלאל",
      description: "ביצוע אינטימי וקסום של דוד סולן ויוחאי אפללו",
      embedUrl: "https://www.youtube.com/watch?v=wieH-TEjI48",
      directUrl: "https://www.youtube.com/watch?v=wieH-TEjI48",
      thumbnail: null // נטען אוטומטית מ-YouTube
    }
  ]

  // נתוני קבצי השמע
  const audioFiles = [
    {
      title: "הללויה",
      description: "הרכב ווליום - נוער גוש עציון",
      url: "/audio/haleluya.mpeg",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "מכל האהבות",
      description: "הרכב הצעירים של גוש עציון",
      url: "/audio/me kol ahahhavot.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "מיקס ים",
      description: "טקס יום הזיכרון - הרכב הנוער של שכונת רמות",
      url: "/audio/mix yam zicaron.wav",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "אנשי הגשם",
      description: "הרכב ווליום - נוער גוש עציון",
      url: "/audio/anshey ageshem.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "אני נושא עימי",
      description: "טקס יום הזיכרון - הרכב הנוער של שכונת רמות",
      url: "/audio/ani nose imi.wav",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Here Comes The Sun",
      description: "הרכב ווליום - נוער גוש עציון",
      url: "/audio/here-comes-the-sun.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "בן יפה נולד",
      description: "טקס יום הזיכרון - הרכב הנוער של שכונת רמות",
      url: "/audio/ben yafe nolad.wav",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "אדם בתוך עצמו",
      description: "הרכב ווליום - נוער גוש עציון",
      url: "/audio/adam betoch azmo.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "מיקס - בלדה, הנסיך, לבכות לך",
      description: "טקס יום הזיכרון - הרכב הנוער של שכונת רמות",
      url: "/audio/mix shirey zicaron.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar d={he} locale="he" pageType="productions" />
      <Hero d={he} pageType="productions" locale="he" />
      
      <Services d={he} pageType="productions" locale="he" />
      
      {/* תוכן הפקות מוזיקה ומופעים */}
      <div id="productions-content">
        {/* כותרת הפקות מוזיקה ומופעים */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-8">
              הפקות מוזיקה ומופעים
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-8"></div>
          </div>
        </section>

        {/* ניהול והפקה מוזיקלית */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">ניהול והפקה מוזיקלית</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            </div>
            
            <div className="max-w-4xl mx-auto relative overflow-hidden">
              {/* Background with gradient and animated elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl"></div>
              
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute top-2 left-2 w-16 h-16 bg-blue-200/30 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-200/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-8 left-8 w-20 h-20 bg-purple-200/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-6 right-6 w-10 h-10 bg-pink-200/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-3 left-1/4 w-6 h-6 bg-yellow-200/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-5 right-1/3 w-12 h-12 bg-green-200/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  אנו בעלי ניסיון רב בהפקות שונות, טקסים, אירועים, ניהול מוזיקלי, חבורות זמר ועוד. 
                  הניסיון שלנו מאפשר לנו להביא לכל פרויקט את הידע המקצועי והרגישות הנדרשת.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  אנו מתמחים בהפקת אירועים מוזיקליים מגוונים - מטקסים רשמיים ועד מופעים אינטימיים, 
                  תוך שמירה על איכות מקצועית גבוהה וחיבור עם הקהל.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  כל פרויקט הוא עבורנו הזדמנות ליצור חוויה מוזיקלית ייחודית ומרגשת, 
                  המשלבת מקצועיות עם אהבה אמיתית למוזיקה ולאנשים.
                </p>
              </div>
            </div>
            
            {/* כפתור לברטונים וקבצי שמע */}
            <div className="text-center mt-4">
              <button 
                onClick={() => document.getElementById('media-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                סרטונים וקבצי שמע
              </button>
            </div>
          </div>
        </section>

        {/* שירה בציבור וערבי מוזיקה */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">שירה בציבור וערבי מוזיקה</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  אנו מתמחים בארגון והפקת ערבי שירה בציבור ייחודיים ומרגשים, המשלבים בין מוזיקה ישראלית קלאסית לבין שירים עכשוויים. כל ערב מותאם אישית לקהל ולמטרה.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  אנו מציעים מגוון רחב של ערבי קונספט מיוחדים - ערבי מחווה לאמנים אהובים, ערבי נושא סביב תקופות מוזיקליות שונות, וחידונים מוזיקלים.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  הניסיון שלנו בהנחיית ערבי שירה בציבור מאפשר לנו ליצור אווירה חמה ומחברת, שבה כל משתתף ומשתתפת מרגישים חלק מהחוויה המוזיקלית המשותפת.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* סרטונים וקבצי שמע */}
        <div id="media-section">
          <div id="video-section">
            <VideoSection videos={videos} locale="he" />
          </div>
          <div id="audio-section">
            <AudioSection audioFiles={audioFiles} locale="he" />
          </div>
        </div>
      </div>

      {/* תוכן הרצאות ותוכן */}
      <div id="lectures-content">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-8">
              הרצאות ותוכן
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8"></div>
            
            {/* הקדמה */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  אנו מציעים הרצאות מעוררות השראה והפקת תוכן איכותי בתחומים מגוונים. 
                  ההרצאות שלנו משלבות ניסיון מעשי עשיר עם הצגה מרתקת, 
                  יוצרות חוויות למידה משמעותיות לקהלים מגוונים.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  ממוזיקה וקהילה ועד טכנולוגיה וחדשנות, אנו יוצרים תוכן שמחנך, 
                  מעורר השראה ומחבר בין אנשים דרך ידע וחוויות משותפות.
                </p>
              </div>
            </div>
            
            {/* שתי מודעות אחת ליד השנייה */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 gap-4 mb-8">
                {/* מודעה ראשונה - הרצאות ותוכן */}
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col sm:p-8 p-4">
                  <div className="flex justify-center flex-grow">
                    <div className="relative cursor-pointer" onClick={() => {
                      const img = new Image();
                      img.src = '/mc.png';
                      img.style.maxWidth = '100vw';
                      img.style.maxHeight = '100vh';
                      img.style.objectFit = 'contain';
                      img.style.position = 'fixed';
                      img.style.top = '50%';
                      img.style.left = '50%';
                      img.style.transform = 'translate(-50%, -50%)';
                      img.style.zIndex = '9999';
                      img.style.backgroundColor = 'rgba(0,0,0,0.8)';
                      img.style.padding = '20px';
                      img.style.borderRadius = '10px';
                      img.onclick = () => document.body.removeChild(img);
                      document.body.appendChild(img);
                    }}>
                      <img 
                      src="/mc.png" 
                      alt="מוזיקה וקהילה - יוחאי אפללו"
                      className="w-full max-w-sm rounded-lg shadow-md hover:opacity-90 transition-opacity"
                      style={{height: 'auto', maxHeight: '300px'}}
                    />
                    
                    {/* כפתור הורדה - במרכז המודעה */}
                    <div className="flex justify-center mt-6">
                      <button 
                      onClick={async () => {
                        try {
                          // יצירת canvas
                          const canvas = document.createElement('canvas')
                          const ctx = canvas.getContext('2d')
                          
                          // טעינת התמונה הראשית
                          const mainImg = new Image()
                          mainImg.crossOrigin = 'anonymous'
                          mainImg.onload = async () => {
                            // הגדרת גודל canvas
                            canvas.width = mainImg.width
                            canvas.height = mainImg.height
                            
                            // ציור התמונה הראשית
                            ctx.drawImage(mainImg, 0, 0)
                            
                            // טעינת הלוגו
                            const logoImg = new Image()
                            logoImg.crossOrigin = 'anonymous'
                            logoImg.onload = () => {
                              // חישוב גודל הלוגו - שמירה על יחס הגובה-רוחב המקורי
                              const logoAspectRatio = logoImg.width / logoImg.height
                              const logoHeight = Math.max(mainImg.width * 0.2, 100)
                              const logoWidth = logoHeight * logoAspectRatio
                              
                              // מיקום הלוגו בפינה השמאלית העליונה
                              const logoX = 20
                              const logoY = 20
                              
                              // ציור הלוגו עם שמירה על יחס הגובה-רוחב המקורי
                              ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight)
                              
                              // הורדת התמונה המשולבת
                              const link = document.createElement('a')
                              link.download = 'מוזיקה-וקהילה-יוחאי-אפללו.png'
                              link.href = canvas.toDataURL('image/png')
                              link.click()
                            }
                            logoImg.src = '/logo.png'
                          }
                          mainImg.src = '/mc.png'
                        } catch (error) {
                          console.error('שגיאה בהורדת התמונה:', error)
                          alert('שגיאה בהורדת התמונה')
                        }
                      }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      הורדת מודעה
                    </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* מודעה שנייה - סדנאות */}
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col sm:p-8 p-4">
                  <div className="flex justify-center flex-grow">
                    <div className="relative cursor-pointer" onClick={() => {
                      const img = new Image();
                      img.src = '/sadnat bina.png';
                      img.style.maxWidth = '100vw';
                      img.style.maxHeight = '100vh';
                      img.style.objectFit = 'contain';
                      img.style.position = 'fixed';
                      img.style.top = '50%';
                      img.style.left = '50%';
                      img.style.transform = 'translate(-50%, -50%)';
                      img.style.zIndex = '9999';
                      img.style.backgroundColor = 'rgba(0,0,0,0.8)';
                      img.style.padding = '20px';
                      img.style.borderRadius = '10px';
                      img.onclick = () => document.body.removeChild(img);
                      document.body.appendChild(img);
                    }}>
                      <img 
                        src="/sadnat bina.png" 
                        alt="סדנאות בינה"
                        className="w-full max-w-sm rounded-lg shadow-md hover:opacity-90 transition-opacity"
                        style={{height: 'auto', maxHeight: '300px'}}
                      />
                      
                      {/* כפתור הורדה - במרכז המודעה */}
                      <div className="flex justify-center mt-6">
                        <button 
                        onClick={async () => {
                          try {
                            // יצירת canvas
                            const canvas = document.createElement('canvas')
                            const ctx = canvas.getContext('2d')
                            
                            // טעינת התמונה
                            const mainImg = new Image()
                            mainImg.crossOrigin = 'anonymous'
                            mainImg.onload = () => {
                              // הגדרת גודל canvas
                              canvas.width = mainImg.width
                              canvas.height = mainImg.height
                              
                              // ציור התמונה
                              ctx.drawImage(mainImg, 0, 0)
                              
                              // המרה ל-blob והורדה
                              canvas.toBlob((blob) => {
                                const url = URL.createObjectURL(blob)
                                const a = document.createElement('a')
                                a.href = url
                                a.download = 'סדנאות-בינה-מודעה.png'
                                a.click()
                                URL.revokeObjectURL(url)
                              })
                            }
                            mainImg.src = '/sadnat bina.png'
                          } catch (error) {
                            console.error('שגיאה בהורדת התמונה:', error)
                          }
                        }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        הורדת מודעה
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* תוכן הדרכות קהילתיות */}
      <div id="community-content">
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-8">
              הדרכות קהילתיות
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              תוכן הדרכות קהילתיות יופיע כאן בעתיד
            </p>
          </div>
        </section>
      </div>

      <CTA d={he} locale="he" />
      <Footer d={he} locale="he" />
    </main>
  )
}
