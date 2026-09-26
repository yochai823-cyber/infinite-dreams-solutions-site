'use client'

import Link from 'next/link'
import { openContact } from './contactBus'

function HeroVisual({ locale }){
  const he = locale === 'he'
  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0">
      {/* glow behind */}
      <div className="glow-blob w-[380px] h-[380px] top-4 inset-inline-end-[-40px]" style={{ background:'rgba(79,70,229,.35)' }} />
      <div className="glow-blob w-[320px] h-[320px] bottom-[-30px] inset-inline-start-[-30px]" style={{ background:'rgba(6,182,212,.35)' }} />

      {/* colorful glow halo behind the window */}
      <div className="absolute z-0 -inset-4 rounded-[2.2rem] opacity-60 blur-2xl animate-floaty" style={{ background:'var(--grad)', backgroundSize:'200% auto' }} />

      {/* Browser window with real screenshot */}
      <div className="relative z-10 card-surface overflow-hidden shadow-[var(--shadow-lg)] animate-floaty ring-1 ring-white/60">
        <div className="flex items-center gap-1.5 px-4 h-10 border-b border-[var(--border)] bg-[var(--surface-2)]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ms-3 text-xs text-[var(--faint)] force-ltr">app.infinite-dreams.io</span>
        </div>
        <div className="aspect-[16/10] w-full bg-[var(--surface-2)]">
          <img src="/projects/room-management-2.png" alt={he ? 'מערכת ניהול שבנינו' : 'A management system we built'} className="w-full h-full object-cover object-top" />
        </div>
      </div>

      {/* Floating phone (real app) */}
      <div className="absolute z-20 bottom-[-28px] inset-inline-start-[-18px] w-[116px] sm:w-[140px] rounded-[1.6rem] overflow-hidden border-4 border-white shadow-[var(--shadow-lg)] animate-floaty" style={{ animationDelay:'1s' }}>
        <img src="/product/hugim-2.webp" alt={he ? 'אפליקציה שבנינו' : 'An app we built'} className="w-full h-auto block" />
      </div>

      {/* Floating chips */}
      <div className="absolute z-30 top-[-18px] inset-inline-start-6 animate-floaty" style={{ animationDelay:'.4s' }}>
        <div className="card-surface px-3 py-1.5 flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-[var(--shadow-md)]">
          <span className="w-5 h-5 grid place-items-center rounded-md text-white" style={{ background:'var(--grad)' }}>
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>
          </span>
          {he ? 'אוטומציה' : 'Automation'}
        </div>
      </div>
      <div className="absolute z-30 top-16 inset-inline-end-[-10px] animate-floaty" style={{ animationDelay:'1.4s' }}>
        <div className="card-surface px-3 py-1.5 flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-[var(--shadow-md)]">
          <span className="w-5 h-5 grid place-items-center rounded-md text-white bg-[var(--accent-3)]">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5 10.1 10.9 5.5 9l4.6-1.4L12 3z"/></svg>
          </span>
          AI
        </div>
      </div>
    </div>
  )
}

export default function Hero({ d, locale = 'he', pageType = 'home' }){
  const he = locale === 'he'

  if (pageType !== 'home'){
    const titles = {
      tech: he ? 'פיתוח וכלי ניהול' : 'Development & Management Tools',
      productions: he ? 'הפקות, מוזיקה ותוכן' : 'Productions, Music & Content',
      about: he ? 'אודות' : 'About',
    }
    return (
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-10 md:pb-14">
        <div className="absolute inset-0 -z-10" style={{ background:'linear-gradient(160deg,#eef2ff 0%,#f5f3ff 40%,#ecfeff 100%)' }} />
        <div className="glow-blob -z-10 w-[420px] h-[420px] -top-24 inset-inline-start-[-60px]" style={{ background:'rgba(79,70,229,.28)' }} />
        <div className="container-page text-center">
          <h1 className="display text-4xl md:text-6xl text-[var(--text)]">{titles[pageType] || d.brand}</h1>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full" style={{ background:'var(--grad)' }} />
          <div className="mt-8">
            <Link href={`/${locale}`} className="btn btn-ghost">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d={he ? 'M13 5l7 7-7 7' : 'M11 5l-7 7 7 7'} /><path d={he ? 'M20 12H4' : 'M4 12h16'} />
              </svg>
              {he ? 'חזרה לדף הבית' : 'Back to home'}
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const [line1, line2] = d.hero.title.split('\n')

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-24">
      {/* rich colorful aurora background */}
      <div className="absolute inset-0 -z-20 hero-aurora" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="glow-blob -z-10 w-[560px] h-[560px] -top-40 inset-inline-start-[-120px]" style={{ background:'rgba(236,72,153,.32)' }} />
      <div className="glow-blob -z-10 w-[520px] h-[520px] top-10 inset-inline-end-[-120px]" style={{ background:'rgba(6,182,212,.30)' }} />

      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text */}
          <div className="text-center lg:text-start">
            <span className="eyebrow">
              <span className="w-2 h-2 rounded-full" style={{ background:'var(--grad)' }} />
              {d.hero.eyebrow}
            </span>

            <h1 className="display mt-5 text-[2.05rem] leading-[1.1] sm:text-5xl lg:text-[3.55rem] text-[var(--text)] balance">
              {line1}
              <br />
              <span className="text-grad">{line2}</span>
            </h1>

            <p className="mx-auto lg:mx-0 mt-5 max-w-xl text-lg md:text-xl text-[var(--muted)] leading-relaxed">
              {d.hero.subShort || d.hero.sub}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <button onClick={openContact} className="btn btn-primary w-full sm:w-auto text-[17px]">
                {d.hero.ctaPrimary}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d={he ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'} /><path d={he ? 'M4 12h16' : 'M20 12H4'} />
                </svg>
              </button>
              <Link href={`/${locale}#solutions`} className="btn btn-ghost w-full sm:w-auto text-[17px]">
                {d.hero.ctaSecondary}
              </Link>
            </div>

            {/* quick highlights */}
            <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {(he ? ['+20 שנות ניסיון','ליווי מקצה לקצה','תגובה תוך 48ש׳'] : ['20+ years','End-to-end','48h response']).map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] bg-white/70 backdrop-blur border border-[var(--border)] rounded-full px-3.5 py-1.5 shadow-[var(--shadow-sm)]">
                  <span className="w-4 h-4 rounded-full grid place-items-center text-white" style={{ background:'var(--grad)' }}>
                    <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="order-first lg:order-last">
            <HeroVisual locale={locale} />
          </div>
        </div>
      </div>
    </section>
  )
}
