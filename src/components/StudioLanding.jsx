'use client'

import Link from 'next/link'
import useReveal from './useReveal'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import Footer from './Footer'
import SolutionPricing from './SolutionPricing'
import { openContact } from './contactBus'

/* ---------- phone shell ---------- */
function Phone({ children, className = '' }){
  return (
    <div className={`relative mx-auto w-[288px] max-w-full ${className}`}>
      <div className="absolute -inset-5 rounded-[3rem] opacity-40 blur-2xl" style={{ background:'var(--grad)' }} />
      <div className="relative rounded-[2.6rem] bg-[#0d1220] p-2.5 shadow-[var(--shadow-lg)]" dir="rtl">
        <div className="relative rounded-[2rem] overflow-hidden bg-[var(--surface-2)]">
          <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30 pointer-events-none">
            <div className="mt-1.5 w-24 h-5 bg-[#0d1220] rounded-b-2xl" />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ---------- animated auto-scrolling home screen ---------- */
function HomeScroller({ app, alertsTitle, todayTitle, liveLabel }){
  const toneBg = { good:'#ecfdf5', info:'#eef2ff', bad:'#fef2f2' }
  const toneBar = { good:'#10b981', info:'#6366f1', bad:'#ef4444' }
  return (
    <Phone>
      <style>{`
        @keyframes studioScroll {
          0%, 9% { transform: translateY(0); }
          52%, 61% { transform: translateY(var(--sc, -330px)); }
          100% { transform: translateY(0); }
        }
        .studio-track { animation: studioScroll 13s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce){ .studio-track { animation: none; } }
      `}</style>
      <span className="absolute top-2 inset-inline-start-2 z-30 text-[10px] font-bold text-white px-2 py-0.5 rounded-full shadow flex items-center gap-1" style={{ background:'rgba(13,18,32,.72)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> {liveLabel}
      </span>
      <div className="pt-7 h-[478px] overflow-hidden relative">
        <div className="studio-track" style={{ ['--sc']:'-352px' }}>
          {/* app header */}
          <div className="px-3.5 py-3 text-white" style={{ background:'var(--grad)' }}>
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full grid place-items-center bg-white/20 text-[13px] font-black">∞</span>
              <span className="text-[11px] bg-white/20 rounded-full px-2 py-0.5">היום · {app.lessons.length} שיעורים</span>
            </div>
            <div className="mt-2 text-[13px] font-bold">{app.greeting}</div>
          </div>

          {/* alerts */}
          <div className="px-3 pt-3">
            <div className="text-[11px] font-bold text-[var(--muted)] mb-1.5">🔔 {alertsTitle}</div>
            <div className="space-y-1.5">
              {app.alerts.map((a,i)=>(
                <div key={i} className="flex items-center gap-2 rounded-xl px-2.5 py-2 border border-[var(--border)]" style={{ background:toneBg[a.tone] }}>
                  <span className="w-1 self-stretch rounded-full" style={{ background:toneBar[a.tone] }} />
                  <span className="text-[13px]">{a.icon}</span>
                  <span className="text-[12px] font-semibold text-[var(--text)] leading-tight">{a.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* today */}
          <div className="px-3 pt-3 pb-4">
            <div className="text-[11px] font-bold text-[var(--muted)] mb-1.5">🕒 {todayTitle}</div>
            <div className="space-y-1.5">
              {app.lessons.map((l,i)=>(
                <div key={i} className="flex items-center gap-2.5 rounded-xl bg-white border border-[var(--border)] px-2.5 py-2">
                  <span className="text-[12px] font-black text-grad force-ltr w-10 text-center">{l.time}</span>
                  <span className="w-px self-stretch bg-[var(--border)]" />
                  <div className="min-w-0">
                    <div className="text-[12px] font-bold text-[var(--text)] truncate">{l.name}</div>
                    <div className="text-[10px] text-[var(--muted)]">{l.count}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* fade + bottom nav overlay */}
        <div className="absolute bottom-0 inset-x-0 h-10 pointer-events-none" style={{ background:'linear-gradient(to top, var(--surface-2), transparent)' }} />
        <div className="absolute bottom-2 inset-x-3 z-20 h-11 rounded-2xl bg-white shadow-[var(--shadow-lg)] border border-[var(--border)] flex items-center justify-around text-[var(--muted)]">
          <span className="text-[15px]">🏠</span><span className="text-[15px]">🗓️</span>
          <span className="w-8 h-8 rounded-full grid place-items-center text-white -mt-4 shadow" style={{ background:'var(--grad)' }}>＋</span>
          <span className="text-[15px]">💬</span><span className="text-[15px]">👤</span>
        </div>
      </div>
    </Phone>
  )
}

export default function StudioLanding({ d, locale = 'he', solution, content }){
  const he = locale === 'he'
  useReveal()

  return (
    <main className="overflow-x-hidden">
      <Navbar d={d} locale={locale} pageType="solution" />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="absolute inset-0 -z-20 hero-aurora" />
        <div className="glow-blob -z-10 w-[460px] h-[460px] -top-28 inset-inline-start-[-100px]" style={{ background:'rgba(236,72,153,.28)' }} />
        <div className="glow-blob -z-10 w-[420px] h-[420px] top-10 inset-inline-end-[-100px]" style={{ background:'rgba(6,182,212,.26)' }} />

        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-start">
              <span className="eyebrow">
                <span className="w-2 h-2 rounded-full" style={{ background:'var(--grad)' }} />
                {content.badge}
              </span>
              <h1 className="display mt-5 text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-[3.4rem] text-[var(--text)] whitespace-pre-line">
                {content.title}
              </h1>
              <p className="mt-4 text-xl font-bold text-grad">{content.tagline}</p>
              <p className="mt-5 text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">{content.desc}</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
                <button onClick={openContact} className="btn btn-primary w-full sm:w-auto text-[17px]">
                  {he ? 'רוצים מערכת כזו? דברו איתנו' : 'Want this system? Let\'s talk'}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d={he ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'}/><path d={he ? 'M4 12h16' : 'M20 12H4'}/></svg>
                </button>
                <Link href={`/${locale}#solutions`} className="btn btn-ghost w-full sm:w-auto text-[17px]">
                  {he ? 'לכל הפתרונות' : 'All solutions'}
                </Link>
              </div>
            </div>

            <div className="order-first lg:order-last">
              {content.heroVideo ? (
                <div className="relative mx-auto w-[300px] max-w-full">
                  <div className="absolute -inset-5 rounded-[3rem] opacity-40 blur-2xl" style={{ background:'var(--grad)' }} />
                  <div className="relative rounded-[2rem] overflow-hidden border border-[var(--border)] shadow-[var(--shadow-lg)] ring-1 ring-white/60 bg-black">
                    <video src={content.heroVideo} poster={content.heroPoster} autoPlay muted loop playsInline preload="metadata" className="w-full h-auto block" />
                    <span className="absolute top-2 inset-inline-start-2 z-10 text-[10px] font-bold text-white px-2 py-0.5 rounded-full shadow flex items-center gap-1" style={{ background:'rgba(13,18,32,.72)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> {d.studioLiveLabel}
                    </span>
                  </div>
                </div>
              ) : (
                <HomeScroller app={content.app} alertsTitle={d.studioAppAlertsTitle} todayTitle={d.studioAppTodayTitle} liveLabel={d.studioLiveLabel} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Claim band */}
      <section className="py-12 md:py-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 -z-10 aurora-dark" />
        <div className="container-page">
          <p className="display text-2xl md:text-4xl text-white max-w-4xl mx-auto leading-tight reveal">
            {content.claim}
          </p>
        </div>
      </section>

      {/* Feature blocks */}
      <section className="py-16 md:py-24 bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 max-w-5xl mx-auto">
            {content.features.map((f,i)=>(
              <div key={i} className="reveal card-surface p-6 md:p-7 flex flex-col" style={{ transitionDelay:`${i*60}ms` }}>
                <span className="w-12 h-12 rounded-2xl grid place-items-center text-2xl text-white shrink-0" style={{ background:'var(--grad)' }}>{f.icon}</span>
                <h3 className="mt-4 text-xl font-extrabold text-[var(--text)]">{f.title}</h3>
                <p className="mt-2 text-[15px] text-[var(--muted)] leading-relaxed flex-1">{f.desc}</p>
                {f.quote && (
                  <p className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-grad">
                    <span className="text-lg leading-none">“</span>{f.quote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cubes */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background:'var(--grad-soft)' }} />
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center reveal mb-12">
            <span className="eyebrow">{content.badge}</span>
            <h2 className="display mt-4 text-3xl md:text-4xl text-[var(--text)]">{d.studioCubesTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {content.cubes.map((c,i)=>(
              <div key={i} className="reveal card-surface p-5" style={{ transitionDelay:`${i*40}ms` }}>
                <span className="w-11 h-11 rounded-xl grid place-items-center text-xl bg-[var(--surface-2)] border border-[var(--border)]">{c.icon}</span>
                <h3 className="mt-3 text-[15px] font-extrabold text-[var(--text)] leading-snug">{c.title}</h3>
                <p className="mt-1.5 text-[13px] text-[var(--muted)] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <SolutionPricing d={d} locale={locale} slug={content.pricingSlug} heading={d.studioPricingTitle} />

      <FinalCTA d={d} locale={locale} />
      <Footer d={d} locale={locale} />
    </main>
  )
}
