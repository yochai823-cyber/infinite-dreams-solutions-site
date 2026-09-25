'use client'

import { useState, useEffect } from 'react'

export default function ContactForm({ isOpen, onClose, d, locale = 'he' }) {
  const he = locale === 'he'
  const [step, setStep] = useState(1)
  const [data, setData] = useState({ description: '', name: '', phone: '', email: '', updates: true })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  // reset when opened
  useEffect(() => {
    if (isOpen){ setStep(1); setStatus(null); setData({ description: '', name: '', phone: '', email: '', updates: true }) }
  }, [isOpen])

  const t = he ? {
    step1Title: 'ספרו לנו מה תרצו לפתור בעזרת AI בעסק שלכם',
    step1Sub: 'משפט או שניים על העסק והאתגר — ונחזור אליכם עם רעיון.',
    descPh: 'לדוגמה: אני מבזבז שעות על תיאום תורים ומענה ללקוחות בוואטסאפ…',
    next: 'המשך',
    step2Title: 'כמעט שם — איך נחזור אליכם?',
    step2Sub: 'נחזור אליכם תוך 48 שעות.',
    name: 'שם מלא', phone: 'טלפון', email: 'אימייל',
    namePh: 'השם שלכם', phonePh: '054-000-0000', emailPh: 'your@email.com',
    updates: 'אשמח לקבל עדכונים על מערכות חדשות שיעזרו לי בעסק',
    terms: 'בשליחה אני מאשר/ת את תנאי השימוש ומדיניות הפרטיות',
    send: 'שליחה', sending: 'שולח…', back: 'חזרה',
    successTitle: 'הפנייה נשלחה! 🎉', successSub: 'נחזור אליכם תוך 48 שעות.',
    waTitle: 'רוצים לדבר עכשיו?', waBtn: 'שיחת וואטסאפ מיידית',
    waMsg: 'היי, ביקרתי אצלכם באתר, הייתי שמח לשוחח טלפונית',
    errorMsg: 'שגיאה בשליחה. נסו שוב או דברו איתנו בוואטסאפ.',
  } : {
    step1Title: 'Tell us what you\'d like to solve with AI in your business',
    step1Sub: 'A sentence or two about your business and the challenge — we\'ll come back with an idea.',
    descPh: 'e.g. I waste hours coordinating appointments and answering customers on WhatsApp…',
    next: 'Continue',
    step2Title: 'Almost there — how should we reach you?',
    step2Sub: 'We\'ll get back to you within 48 hours.',
    name: 'Full name', phone: 'Phone', email: 'Email',
    namePh: 'Your name', phonePh: '+972-54-000-0000', emailPh: 'your@email.com',
    updates: 'I\'d like updates about new systems that could help my business',
    terms: 'By submitting I agree to the Terms and Privacy Policy',
    send: 'Send', sending: 'Sending…', back: 'Back',
    successTitle: 'Sent! 🎉', successSub: 'We\'ll get back to you within 48 hours.',
    waTitle: 'Want to talk now?', waBtn: 'Instant WhatsApp chat',
    waMsg: 'Hi, I visited your website and would love to chat by phone',
    errorMsg: 'Something went wrong. Try again or message us on WhatsApp.',
  }

  const waHref = `https://wa.me/${d.phoneE164}?text=${encodeURIComponent(t.waMsg)}`
  const set = (k) => (e) => setData(p => ({ ...p, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setSubmitting(true); setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name, email: data.email, phone: data.phone,
          projectType: 'ai', projectDescription: data.description,
          budget: '', timeline: '',
          additionalInfo: (he ? 'עדכונים שיווקיים: ' : 'Marketing updates: ') + (data.updates ? (he ? 'כן' : 'yes') : (he ? 'לא' : 'no')),
        }),
      })
      const j = await res.json()
      setStatus(j.success ? 'success' : 'error')
    } catch { setStatus('error') }
    finally { setSubmitting(false) }
  }

  if (!isOpen) return null

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-[var(--border-strong)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent transition text-[var(--text)]'

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[rgba(6,10,20,.6)] backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-[var(--shadow-lg)] max-w-lg w-full max-h-[92vh] overflow-y-auto">
        {/* header */}
        <div className="sticky top-0 z-10 px-6 py-5 text-white rounded-t-3xl flex items-start justify-between" style={{ background: 'var(--grad)' }}>
          <div className="pe-3">
            {status === 'success' ? (
              <><h2 className="text-xl font-bold">{t.successTitle}</h2><p className="text-white/85 text-sm mt-1">{t.successSub}</p></>
            ) : step === 1 ? (
              <><h2 className="text-lg font-bold leading-snug">{t.step1Title}</h2><p className="text-white/85 text-sm mt-1">{t.step1Sub}</p></>
            ) : (
              <><h2 className="text-xl font-bold">{t.step2Title}</h2><p className="text-white/85 text-sm mt-1">{t.step2Sub}</p></>
            )}
          </div>
          <button onClick={onClose} aria-label="close" className="shrink-0 w-9 h-9 grid place-items-center rounded-full hover:bg-white/15 transition">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>

        {/* progress (steps) */}
        {status !== 'success' && (
          <div className="flex gap-1.5 px-6 pt-4">
            <span className="h-1.5 flex-1 rounded-full" style={{ background: 'var(--grad)' }} />
            <span className="h-1.5 flex-1 rounded-full" style={{ background: step === 2 ? 'var(--grad)' : 'var(--surface-3)' }} />
          </div>
        )}

        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full grid place-items-center text-white mb-4" style={{ background: 'var(--grad)' }}>
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
                <p className="font-bold text-[var(--text)]">{t.waTitle}</p>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="mt-3 btn w-full text-white" style={{ background: '#25D366' }}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.463 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/></svg>
                  {t.waBtn}
                </a>
              </div>
              <button onClick={onClose} className="mt-4 text-sm text-[var(--muted)] hover:text-[var(--text)]">{he ? 'סגירה' : 'Close'}</button>
            </div>
          ) : step === 1 ? (
            <form onSubmit={(e) => { e.preventDefault(); if (data.description.trim()) setStep(2) }}>
              <textarea autoFocus value={data.description} onChange={set('description')} required rows={5}
                className={inputCls + ' resize-none'} placeholder={t.descPh} />
              <button type="submit" disabled={!data.description.trim()}
                className={`btn btn-primary w-full mt-5 text-[17px] ${!data.description.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {t.next}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d={he ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'}/><path d={he ? 'M4 12h16' : 'M20 12H4'}/></svg>
              </button>
            </form>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--text)]">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d={he ? 'M13 5l7 7-7 7' : 'M11 5l-7 7 7 7'}/><path d={he ? 'M20 12H4' : 'M4 12h16'}/></svg>
                {t.back}
              </button>
              <div>
                <label className="block text-sm font-semibold text-[var(--text)] mb-1.5">{t.name}</label>
                <input value={data.name} onChange={set('name')} required className={inputCls} placeholder={t.namePh} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[var(--text)] mb-1.5">{t.phone}</label>
                  <input type="tel" value={data.phone} onChange={set('phone')} required className={inputCls + ' force-ltr text-start'} placeholder={t.phonePh} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--text)] mb-1.5">{t.email}</label>
                  <input type="email" value={data.email} onChange={set('email')} required className={inputCls + ' force-ltr text-start'} placeholder={t.emailPh} />
                </div>
              </div>
              <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
                <input type="checkbox" checked={data.updates} onChange={set('updates')} className="mt-1 w-5 h-5 rounded accent-[var(--accent)]" />
                <span className="text-[14px] text-[var(--muted)] leading-snug">{t.updates}</span>
              </label>
              {status === 'error' && <p className="text-sm text-red-600">{t.errorMsg}</p>}
              <button type="submit" disabled={submitting} className={`btn btn-primary w-full text-[17px] ${submitting ? 'opacity-70' : ''}`}>
                {submitting ? t.sending : t.send}
                {!submitting && <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>}
              </button>
              <p className="text-[12px] text-[var(--faint)] text-center">{t.terms}</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
