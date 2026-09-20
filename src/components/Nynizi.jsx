'use client'

import { useState, useEffect } from 'react'
import { openContact } from './contactBus'

export default function Nynizi({ locale = 'he' }){
  const he = locale === 'he'
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const stats = he
    ? [['729', 'שיחות מנוהלות'], ['119', 'שיחות AI'], ['24/7', 'זמינות']]
    : [['729', 'Conversations'], ['119', 'AI chats'], ['24/7', 'Availability']]

  const features = he
    ? ['בוט AI חכם', 'בנק ידע', 'ניתוב לנציג אנושי', 'סטטיסטיקות בזמן אמת']
    : ['Smart AI bot', 'Knowledge base', 'Human hand-off', 'Real-time stats']

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background:'linear-gradient(180deg,#ffffff 0%,#eef6ff 100%)' }}>
      <div className="glow-blob w-[420px] h-[420px] -top-20 inset-inline-start-[-100px]" style={{ background:'rgba(6,182,212,.16)' }} />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Text */}
          <div className="text-center lg:text-start reveal">
            <span className="eyebrow">{he ? 'עוד מהמעבדה שלנו' : 'More from our lab'}</span>

            <div className="mt-5 flex items-center justify-center lg:justify-start gap-3">
              <img src="/nynizi-logo.png" alt="NYNIZI" className="w-12 h-12 rounded-2xl shadow-[var(--shadow-md)]" />
              <h2 className="display text-3xl md:text-5xl text-[var(--text)]">
                <span className="force-ltr">NYNIZI</span>
              </h2>
            </div>
            <p className="mt-2 text-xl font-bold text-grad">{he ? 'מוקד שיחות חכם' : 'A smart conversations hub'}</p>

            <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {he
                ? 'פלטפורמה שמשלבת בוט AI ונציגים אנושיים בממשק אחד — עונה ללקוחות אוטומטית, מסלימה לנציג כשצריך, ולומדת מבנק ידע חכם.'
                : 'A platform that blends an AI bot with human reps in one inbox — answers customers automatically, escalates to a human when needed, and learns from a smart knowledge base.'}
            </p>

            {/* connection badge — the smart tie-in */}
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] bg-[var(--accent-soft)] border border-[rgba(79,70,229,.18)] rounded-full px-4 py-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8"/></svg>
              {he ? 'מחובר ישירות למערכת ניהול החוגים' : 'Connects directly to the classes system'}
            </div>

            {/* stats */}
            <div className="mt-7 flex items-stretch justify-center lg:justify-start gap-3">
              {stats.map(([v, l]) => (
                <div key={l} className="flex-1 max-w-[130px] card-surface px-3 py-3 text-center">
                  <div className="text-xl md:text-2xl font-extrabold text-grad force-ltr">{v}</div>
                  <div className="mt-1 text-[12px] text-[var(--muted)] leading-tight">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {features.map((f) => (
                <span key={f} className="text-[13px] font-semibold text-[var(--text)] bg-[var(--surface)] border border-[var(--border)] rounded-full px-3 py-1">{f}</span>
              ))}
            </div>

            <div className="mt-8">
              <button onClick={openContact} className="btn btn-primary text-[16px]">
                {he ? 'רוצים בוט חכם לעסק שלכם?' : 'Want a smart bot for your business?'}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d={he ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'} /><path d={he ? 'M4 12h16' : 'M20 12H4'} /></svg>
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="reveal order-first lg:order-last">
            <button onClick={() => setOpen(true)} className="group relative block w-full text-start" aria-label={he ? 'הגדלת מסך NYNIZI' : 'Enlarge NYNIZI dashboard'}>
              <div className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl" style={{ background:'var(--grad)' }} />
              <div className="relative card-surface overflow-hidden shadow-[var(--shadow-lg)] ring-1 ring-white/60">
                <div className="flex items-center gap-1.5 px-4 h-9 border-b border-[var(--border)] bg-[var(--surface-2)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ms-3 text-xs text-[var(--faint)] force-ltr">nynizi.app</span>
                </div>
                <div className="aspect-[1860/928] w-full bg-[var(--surface-2)]">
                  <img src="/projects/nynizi-dashboard.webp" alt={he ? 'מסך הבקרה של NYNIZI' : 'NYNIZI dashboard'} loading="lazy" className="w-full h-full object-cover object-top" />
                </div>
                <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(13,18,32,.18)]">
                  <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold bg-[rgba(13,18,32,.55)] backdrop-blur rounded-full px-4 py-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg>
                    {he ? 'הגדלה' : 'View'}
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[70] grid place-items-center p-4 sm:p-8" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-[rgba(6,10,20,.85)] backdrop-blur-sm" />
          <button onClick={() => setOpen(false)} aria-label={he ? 'סגירה' : 'Close'}
            className="absolute top-4 inset-inline-end-4 z-10 w-11 h-11 grid place-items-center rounded-full bg-white/90 hover:bg-white text-[var(--text)] shadow-lg">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
          <img src="/projects/nynizi-dashboard.webp" alt="NYNIZI" className="relative z-[5] max-h-[85vh] max-w-[92vw] w-auto rounded-xl shadow-2xl ring-1 ring-white/10" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
