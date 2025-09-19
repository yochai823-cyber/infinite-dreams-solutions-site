'use client'

import { useState } from 'react'
import ContactForm from './ContactForm'

export default function HomeCTA({ d, locale = 'he' }){
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  // תרגום דינמי לפי שפה
  const t = {
    he: {
      title: 'יש לכם רעיון? בואו נבנה אותו יחד',
      subtitle: 'נחזור אליכם תוך 24 שעות עם תכנית פעולה מפורטת',
      button: 'בואו נדבר על הפרויקט שלכם'
    },
    en: {
      title: 'Got an idea? Let\'s build it together',
      subtitle: 'We\'ll get back to you within 24 hours with a detailed action plan',
      button: 'Let\'s talk about your project'
    }
  }

  const text = t[locale] || t.he

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Decorative element */}
            <div className="mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 leading-tight">
              {text.title}
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {text.subtitle}
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>{text.button}</span>
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
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        d={d}
        locale={locale}
      />
    </>
  )
}
