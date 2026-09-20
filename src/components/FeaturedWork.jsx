'use client'

import { useState, useEffect } from 'react'

export default function FeaturedWork({ d, locale = 'he' }){
  const he = locale === 'he'
  const [open, setOpen] = useState(null)

  const items = [
    { img:'/projects/urban-place-hub.webp', he:'פורטל קהילתי — Urban Place', en:'Community portal — Urban Place', tag:'React · Web App', kind:he?'פורטל':'Portal' },
    { img:'/projects/open-houses-map.webp', he:'מפת אירוע אינטראקטיבית — בתים פתוחים', en:'Interactive event map — Open Houses', tag:'Maps · Realtime', kind:he?'מפה':'Map' },
    { img:'/projects/room-management-2.png', he:'מערכת ניהול חדרים ואולמות', en:'Rooms & Halls Management', tag:'React · Node · MongoDB', kind:he?'אפליקציה':'App' },
    { img:'/projects/classes-login.webp', he:'מערכת ניהול חוגים', en:'Classes Management System', tag:'UI/UX · Web App', kind:he?'מוצר':'Product' },
    { img:'/projects/room-management-3.png', he:'יומן הזמנות חכם', en:'Smart Bookings Calendar', tag:'React · Node · MongoDB', kind:he?'אפליקציה':'App' },
    { img:'/projects/automation-1.png', he:'בוט וואטסאפ עם AI', en:'AI WhatsApp Bot', tag:'Make · WhatsApp · AI', kind:he?'אוטומציה':'Automation' },
  ]

  const go = (dir) => setOpen((i) => i === null ? i : (i + dir + items.length) % items.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      else if (e.key === 'ArrowRight') go(he ? 1 : -1)
      else if (e.key === 'ArrowLeft') go(he ? -1 : 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="work" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="eyebrow">{he ? 'עבודות נבחרות' : 'Featured work'}</span>
          <h2 className="display mt-5 text-3xl md:text-5xl text-[var(--text)]">{d.featured}</h2>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">{d.featuredSub}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <button
              key={it.img}
              onClick={() => setOpen(i)}
              className="reveal group text-start card-surface overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] hover:border-[var(--border-strong)]"
              style={{ transitionDelay:`${(i%3)*60}ms` }}
              aria-label={he ? it.he : it.en}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-2)]">
                <img src={it.img} alt={he ? it.he : it.en} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500" />
                <span className="absolute top-3 inset-inline-start-3 text-[11px] font-bold text-white px-2.5 py-1 rounded-full shadow-[var(--shadow-sm)]" style={{ background:'var(--grad)' }}>
                  {it.kind}
                </span>
                <span className="absolute inset-0 grid place-items-center bg-[rgba(13,18,32,.28)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold bg-[rgba(13,18,32,.55)] backdrop-blur rounded-full px-4 py-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg>
                    {he ? 'הגדלה' : 'View'}
                  </span>
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{he ? it.he : it.en}</h3>
                <p className="mt-1 text-[13px] text-[var(--muted)] force-ltr">{it.tag}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[70] grid place-items-center p-4 sm:p-8" onClick={() => setOpen(null)}>
          <div className="absolute inset-0 bg-[rgba(6,10,20,.85)] backdrop-blur-sm" />
          <button onClick={() => setOpen(null)} aria-label={he ? 'סגירה' : 'Close'}
            className="absolute top-4 inset-inline-end-4 z-20 w-11 h-11 grid place-items-center rounded-full bg-white/90 hover:bg-white text-[var(--text)] shadow-lg">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); go(he ? 1 : -1) }} aria-label={he ? 'הקודם' : 'Previous'}
            className="absolute z-20 inset-inline-start-3 sm:inset-inline-start-6 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full bg-white/90 hover:bg-white text-[var(--text)] shadow-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7"/></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); go(he ? -1 : 1) }} aria-label={he ? 'הבא' : 'Next'}
            className="absolute z-20 inset-inline-end-3 sm:inset-inline-end-6 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full bg-white/90 hover:bg-white text-[var(--text)] shadow-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          <figure className="relative z-10 flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <img src={items[open].img} alt={he ? items[open].he : items[open].en} className="max-h-[82vh] max-w-[92vw] w-auto rounded-xl shadow-2xl ring-1 ring-white/10" />
            <figcaption className="text-white/90 text-sm font-medium">{he ? items[open].he : items[open].en}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
