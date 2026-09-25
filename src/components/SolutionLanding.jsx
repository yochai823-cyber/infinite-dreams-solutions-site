'use client'

import Link from 'next/link'
import useReveal from './useReveal'
import Navbar from './Navbar'
import FinalCTA from './FinalCTA'
import Footer from './Footer'
import SolutionDemo from './SolutionDemo'
import { openContact } from './contactBus'

export default function SolutionLanding({ d, locale = 'he', solution }){
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
                {solution.badge} · {he ? 'פתרון של Infinite Dreams' : 'By Infinite Dreams'}
              </span>
              <h1 className="display mt-5 text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-[3.4rem] text-[var(--text)] balance">
                {solution.title}
              </h1>
              <p className="mt-4 text-xl font-bold text-grad">{solution.tagline}</p>
              <p className="mt-5 text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">{solution.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
                <button onClick={openContact} className="btn btn-primary w-full sm:w-auto text-[17px]">
                  {he ? 'רוצים פתרון כזה? דברו איתנו' : 'Want this? Let\'s talk'}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d={he ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'}/><path d={he ? 'M4 12h16' : 'M20 12H4'}/></svg>
                </button>
                <Link href={`/${locale}#solutions`} className="btn btn-ghost w-full sm:w-auto text-[17px]">
                  {he ? 'לכל הפתרונות' : 'All solutions'}
                </Link>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-4 rounded-[2.4rem] opacity-50 blur-2xl" style={{ background:'var(--grad)' }} />
                <div className="relative rounded-[var(--radius-xl)] overflow-hidden border border-[var(--border)] shadow-[var(--shadow-lg)] ring-1 ring-white/60">
                  <img src={solution.image} alt={solution.title} className="w-full h-auto block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain + benefits */}
      <section className="py-16 md:py-24 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center reveal">
            <p className="text-2xl md:text-3xl font-extrabold text-[var(--text)]">“{solution.pain}”</p>
            <p className="mt-3 text-lg text-[var(--muted)]">{he ? 'יש פתרון — וזה כבר עובד.' : 'There\'s a solution — and it already works.'}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
            {solution.benefits.map((b, i) => (
              <div key={i} className="reveal flex items-start gap-3 card-surface p-5" style={{ transitionDelay:`${i*50}ms` }}>
                <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full grid place-items-center text-white" style={{ background:'var(--grad)' }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <span className="text-[15px] font-medium text-[var(--text)] leading-snug">{b}</span>
              </div>
            ))}
          </div>
          {solution.forWho && (
            <p className="reveal mt-10 text-center text-[var(--muted)] max-w-2xl mx-auto">
              <span className="font-semibold text-[var(--text)]">{he ? 'למי זה מתאים? ' : 'Who is it for? '}</span>
              {solution.forWho}
            </p>
          )}
        </div>
      </section>

      {/* Live demo screen */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background:'var(--grad-soft)' }} />
        <div className="container-page">
          <div className="max-w-xl mx-auto text-center reveal mb-12">
            <span className="eyebrow">{he ? 'הצצה למערכת' : 'A peek inside'}</span>
            <h2 className="display mt-4 text-3xl md:text-4xl text-[var(--text)]">{he ? 'ככה זה נראה מבפנים' : 'This is how it looks'}</h2>
          </div>
          <div className="reveal">
            <SolutionDemo slug={solution.slug} />
          </div>
        </div>
      </section>

      <FinalCTA d={d} locale={locale} />
      <Footer d={d} locale={locale} />
    </main>
  )
}
