'use client'

import { useState, useEffect } from 'react'
import { openContact } from './contactBus'

const SHOTS = [
  { src:'/product/hugim-pain.webp', he:'לפני: ניהול מפוזר על נייר', en:'Before: scattered paper management' },
  { src:'/product/hugim-manager.webp', he:'אחרי: הכל במקום אחד — לוח בקרה למנהל', en:'After: everything in one place — manager dashboard' },
  { src:'/product/hugim-teacher.webp', he:'המערכת מגיעה גם למורה', en:'Built for teachers too' },
  { src:'/product/hugim-parents.webp', he:'ההורים תמיד מעודכנים', en:'Parents always in the loop' },
  { src:'/product/hugim-pickup.webp', he:'יודעים בדיוק מתי לאסוף', en:'Know exactly when to pick up' },
  { src:'/product/hugim-devices.webp', he:'דסקטופ ומובייל — בכל מקום', en:'Desktop & mobile — anywhere' },
]

export default function ProductSpotlight({ d, locale = 'he' }){
  const he = locale === 'he'
  const [open, setOpen] = useState(null) // index or null
  const go = (dir) => setOpen((i) => i === null ? i : (i + dir + SHOTS.length) % SHOTS.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      else if (e.key === 'ArrowRight') go(he ? -1 : 1)
      else if (e.key === 'ArrowLeft') go(he ? 1 : -1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background:'var(--grad-soft)' }} />
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="eyebrow">{d.productEyebrow}</span>
          <h2 className="display mt-5 text-3xl md:text-5xl text-[var(--text)]">{d.productTitle}</h2>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">{d.productSub}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {d.productFeatures.map((f) => (
              <span key={f} className="text-sm font-semibold text-[var(--text)] bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-1.5 shadow-[var(--shadow-sm)]">{f}</span>
            ))}
          </div>
        </div>

        {/* Creative gallery */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {SHOTS.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setOpen(i)}
              className="reveal group relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
              style={{ transitionDelay:`${i*70}ms` }}
              aria-label={he ? s.he : s.en}
            >
              <div className="aspect-[941/1672] w-full bg-[var(--surface-2)]">
                <img src={s.src} alt={he ? s.he : s.en} loading="lazy" className="w-full h-full object-cover block" />
              </div>
              <span className="absolute inset-0 grid place-items-center bg-[rgba(13,18,32,.35)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold bg-[rgba(13,18,32,.5)] backdrop-blur rounded-full px-4 py-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg>
                  {d.productView}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <button onClick={openContact} className="btn btn-primary text-[17px]">
            {d.productCta}
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d={he ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'} /><path d={he ? 'M4 12h16' : 'M20 12H4'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div className="fixed inset-0 z-[70] grid place-items-center p-4 sm:p-8" onClick={() => setOpen(null)}>
          <div className="absolute inset-0 bg-[rgba(6,10,20,.82)] backdrop-blur-sm" />
          <button
            onClick={() => setOpen(null)}
            aria-label={he ? 'סגירה' : 'Close'}
            className="absolute top-4 inset-inline-end-4 z-10 w-11 h-11 grid place-items-center rounded-full bg-white/90 hover:bg-white text-[var(--text)] shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
          {/* prev / next */}
          <button onClick={(e) => { e.stopPropagation(); go(he ? 1 : -1) }} aria-label={he ? 'הקודם' : 'Previous'}
            className="absolute z-10 inset-inline-start-3 sm:inset-inline-start-6 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full bg-white/90 hover:bg-white text-[var(--text)] shadow-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7"/></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); go(he ? -1 : 1) }} aria-label={he ? 'הבא' : 'Next'}
            className="absolute z-10 inset-inline-end-3 sm:inset-inline-end-6 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full bg-white/90 hover:bg-white text-[var(--text)] shadow-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
          </button>

          <figure className="relative z-[5] flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <img
              src={SHOTS[open].src}
              alt={he ? SHOTS[open].he : SHOTS[open].en}
              className="max-h-[82vh] w-auto max-w-full rounded-2xl shadow-2xl"
            />
            <figcaption className="text-white/90 text-sm font-medium">{he ? SHOTS[open].he : SHOTS[open].en}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
