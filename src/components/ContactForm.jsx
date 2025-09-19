'use client'

import { useState } from 'react'

export default function ContactForm({ isOpen, onClose, d, locale = 'he' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  // תרגום דינמי לפי שפה
  const t = {
    he: {
      title: 'בואו נדבר על הפרויקט שלכם',
      subtitle: 'נחזור אליכם תוך 24 שעות',
      name: 'שם מלא',
      email: 'אימייל',
      phone: 'טלפון',
      projectType: 'סוג הפרויקט',
      projectDescription: 'תיאור הפרויקט',
      budget: 'תקציב משוער',
      timeline: 'לוח זמנים רצוי',
      additionalInfo: 'מידע נוסף',
      submit: 'שלחו בקשה',
      sending: 'שולח...',
      success: 'הבקשה נשלחה בהצלחה!',
      successSub: 'נחזור אליכם תוך 24 שעות',
      error: 'שגיאה בשליחת הבקשה',
      errorSub: 'אנא נסו שוב או צרו קשר ישירות',
      sent: 'נשלח בהצלחה!',
              orContact: 'או צרו קשר ישירות:',
              emailLabel: 'אימייל',
      projectTypes: {
        '': 'בחרו סוג פרויקט',
        'app': 'אפליקציה',
        'website': 'אתר אינטרנט',
        'automation': 'אוטומציה',
        'consulting': 'יעוץ והדרכה',
        'production': 'הפקה מוזיקלית',
        'lecture': 'הרצאה',
        'other': 'אחר'
      },
      budgets: {
        '': 'בחרו טווח תקציב',
        'under-5k': 'עד 5,000 ₪',
        '5k-15k': '5,000 - 15,000 ₪',
        '15k-30k': '15,000 - 30,000 ₪',
        '30k-50k': '30,000 - 50,000 ₪',
        '50k-100k': '50,000 - 100,000 ₪',
        'over-100k': 'מעל 100,000 ₪',
        'discuss': 'נדבר על זה'
      },
      timelines: {
        '': 'בחרו לוח זמנים',
        'asap': 'כמה שיותר מהר',
        '1-month': 'תוך חודש',
        '2-3-months': '2-3 חודשים',
        '3-6-months': '3-6 חודשים',
        '6-months-plus': 'מעל 6 חודשים',
        'flexible': 'גמיש'
      },
      placeholders: {
        name: 'השם שלכם',
        email: 'your@email.com',
        phone: '050-123-4567',
        description: 'ספרו לנו על הפרויקט שלכם - מה אתם רוצים להשיג, איזה בעיות אתם רוצים לפתור, וכל פרט חשוב אחר...',
        additional: 'כל מידע נוסף שיכול לעזור לנו להבין טוב יותר את הצרכים שלכם...'
      }
    },
    en: {
      title: 'Let\'s talk about your project',
      subtitle: 'We\'ll get back to you within 24 hours',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      projectType: 'Project Type',
      projectDescription: 'Project Description',
      budget: 'Estimated Budget',
      timeline: 'Preferred Timeline',
      additionalInfo: 'Additional Information',
      submit: 'Send Request',
      sending: 'Sending...',
      success: 'Request sent successfully!',
      successSub: 'We\'ll get back to you within 24 hours',
      error: 'Error sending request',
      errorSub: 'Please try again or contact us directly',
      sent: 'Sent successfully!',
              orContact: 'Or contact us directly:',
              emailLabel: 'Email',
      projectTypes: {
        '': 'Select project type',
        'app': 'Application',
        'website': 'Website',
        'automation': 'Automation',
        'consulting': 'Consulting & Training',
        'production': 'Music Production',
        'lecture': 'Lecture',
        'other': 'Other'
      },
      budgets: {
        '': 'Select budget range',
        'under-5k': 'Up to $1,500',
        '5k-15k': '$1,500 - $4,500',
        '15k-30k': '$4,500 - $9,000',
        '30k-50k': '$9,000 - $15,000',
        '50k-100k': '$15,000 - $30,000',
        'over-100k': 'Over $30,000',
        'discuss': 'Let\'s discuss'
      },
      timelines: {
        '': 'Select timeline',
        'asap': 'As soon as possible',
        '1-month': 'Within a month',
        '2-3-months': '2-3 months',
        '3-6-months': '3-6 months',
        '6-months-plus': 'Over 6 months',
        'flexible': 'Flexible'
      },
      placeholders: {
        name: 'Your name',
        email: 'your@email.com',
        phone: '+1-234-567-8900',
        description: 'Tell us about your project - what you want to achieve, what problems you want to solve, and any other important details...',
        additional: 'Any additional information that can help us better understand your needs...'
      }
    }
  }

  const text = t[locale] || t.he

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          projectDescription: '',
          budget: '',
          timeline: '',
          additionalInfo: ''
        })
        // Close form after 3 seconds
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{text.title}</h2>
              <p className="text-blue-100">{text.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {text.name} *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder={text.placeholders.name}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {text.email} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder={text.placeholders.email}
              />
            </div>
          </div>

          {/* Phone and Project Type Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {text.phone} *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder={text.placeholders.phone}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {text.projectType} *
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                {Object.entries(text.projectTypes).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {text.projectDescription} *
            </label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder={text.placeholders.description}
            />
          </div>

          {/* Budget and Timeline Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {text.budget}
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                {Object.entries(text.budgets).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {text.timeline}
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                {Object.entries(text.timelines).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {text.additionalInfo}
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder={text.placeholders.additional}
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-green-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">{text.success}</span>
              </div>
              <p className="text-green-600 text-sm mt-1">{text.successSub}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-red-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">{text.error}</span>
              </div>
              <p className="text-red-600 text-sm mt-1">{text.errorSub}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>{text.sending}</span>
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{text.sent}</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>{text.submit}</span>
                </>
              )}
            </button>
          </div>

          {/* Contact Info */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              {text.orContact}
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href={`https://wa.me/${d.phoneE164}`}
                className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              <a 
                href={`mailto:${d.email}`}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {text.emailLabel}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
