'use client'

import { useState } from 'react'
import ContactForm from './ContactForm'

const ServiceIcon = ({ index }) => {
  const icons = [
    // Apps, Automation & Websites
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <path d="M7 7h10M7 11h10M7 15h6"/>
    </svg>,
    // Music & Show Productions
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
      <path d="M12 8v8"/>
      <path d="M8 12h8"/>
    </svg>,
    // Community Training & Consulting
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      <path d="M12 12h4"/>
      <path d="M12 16h4"/>
    </svg>,
    // Lectures & Content
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      <path d="M6 9h4"/>
      <path d="M6 13h4"/>
    </svg>
  ]
  
  return (
    <div className="w-16 h-16 mx-auto mb-6 text-amber-500">
      {icons[index] || icons[0]}
    </div>
  )
}

export default function Services({ d, pageType = 'home', locale = 'he' }){
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  // תרגום דינמי לפי שפה
  const t = {
    he: {
      techTitle: 'שירותי טכנולוגיה',
      productionsTitle: 'שירותי הפקות',
      techDescription: 'פתרונות טכנולוגיים מתקדמים לחברות, עמותות ועסקים - פיתוח אפליקציות, מערכות אוטומציה חכמות, הדרכות וסדנאות',
      productionsDescription: 'הפקות מוזיקה ומופעים ברמה הגבוהה ביותר - מקונצרטים ועד הרצאות מעוררות השראה',
      homeDescription: 'אנחנו מציעים מגוון רחב של שירותים מקצועיים - מטכנולוגיה מתקדמת ועד הפקות מוזיקה ומופעים',
      techServices: [
        ['אפליקציות ווב ואתרים', 'פיתוח אפליקציות מתקדמות ואתרים מרשימים, כלי ניהול לחברות, עמותות ועסקים, טכנולוגיה מתקדמת עם עיצוב מושלם.'],
        ['אוטומציה', 'מערכות אוטומציה חכמות לניהול יעיל וחסכון בזמן - פתרונות מותאמים אישית לכל עסק.'],
        ['הדרכות ויעוץ', 'הדרכות וסדנאות בתחומי הבינה המלאכותית, ליווי צוותים ובניית פתרונות ניהולים מקצועיים.']
      ],
      productionsServices: [
        ['הפקות מוזיקה ומופעים', 'הפקת מופעים, קונצרטים, שירה בציבור ואירועי מוזיקה — מקצועיות ברמה הגבוהה ביותר.'],
        ['הרצאות ותוכן', 'הרצאות מעוררות השראה בעולמות תוכן שונים והפקת תוכן איכותי — מניסיון עשיר ומעשי.'],
        ['הדרכות קהילתיות', 'הדרכות מקצועיות ויעוץ קהילתי מותאם אישית — מהתחלה ועד הצלחה מלאה.']
      ],
      ctaButton: 'בואו נדבר על הפרויקט שלכם'
    },
    en: {
      techTitle: 'Technology Services',
      productionsTitle: 'Production Services',
      techDescription: 'Advanced technology solutions for companies, non-profits and businesses - app development, smart automation systems, training and workshops',
      productionsDescription: 'Music and show productions at the highest level - from concerts to inspiring lectures',
      homeDescription: 'We offer a wide range of professional services - from advanced technology to music and show productions',
      techServices: [
        ['Web Applications & Websites', 'Development of advanced applications and impressive websites, management tools for companies, non-profits and businesses, advanced technology with perfect design.'],
        ['Automation', 'Smart automation systems for efficient management and time saving - customized solutions for every business.'],
        ['Training & Consulting', 'Training and workshops in artificial intelligence fields, team accompaniment and building professional management solutions.']
      ],
      productionsServices: [
        ['Music & Show Productions', 'Production of shows, concerts, public singing events, and music events — professional excellence at the highest level.'],
        ['Lectures & Content', 'Inspiring lectures in various content areas and quality content production — from rich and practical experience.'],
        ['Community Training', 'Professional training and personalized community consulting — from start to complete success.']
      ],
      ctaButton: 'Let\'s talk about your project'
    }
  }

  const text = t[locale] || t.he

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            {pageType === 'tech' ? text.techTitle : 
             pageType === 'productions' ? text.productionsTitle : 
             d.servicesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {pageType === 'tech' ? text.techDescription :
             pageType === 'productions' ? text.productionsDescription :
             text.homeDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid gap-8 ${pageType === 'tech' ? 'md:grid-cols-1 lg:grid-cols-3' : pageType === 'productions' ? 'md:grid-cols-1 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
          {(pageType === 'tech' ? text.techServices : 
            pageType === 'productions' ? text.productionsServices : 
            d.services).map(([title, description], index) => (
            <div 
              key={title} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <ServiceIcon index={index} />
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-amber-600 transition-colors duration-300">
                  {title}
                </h3>
                
                        <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {description}
                        </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                  <button 
                    onClick={() => setIsContactFormOpen(true)}
                    className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span>{text.ctaButton}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {locale === 'he' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      )}
                    </svg>
                  </button>
                </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        d={d}
        locale={locale}
      />
    </section>
  )
}