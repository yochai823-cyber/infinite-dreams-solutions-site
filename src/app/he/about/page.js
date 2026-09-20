'use client'

import Link from 'next/link'
import { he as d } from '../../../dict'
import useReveal from '../../../components/useReveal'
import Navbar from '../../../components/Navbar'
import FinalCTA from '../../../components/FinalCTA'
import Footer from '../../../components/Footer'

const backgrounds = [
  {
    title:'רקע טכנולוגי',
    text:'בונה אתרים, אפליקציות ומערכות אוטומציה, ומייצר פתרונות ניהוליים ואסטרטגיים לרשויות, חברות, עמותות ועסקים.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m13 6-2 12"/></svg>,
  },
  {
    title:'ניסיון קהילתי וניהולי',
    text:'מעל 20 שנה בעולמות הקהילה בשלל תפקידים — מנהל אגף נוער, מנהל אגף תרבות ומנכ״ל מתנ״ס.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title:'רקע מוזיקלי',
    text:'בוגר האקדמיה למוזיקה, מנצח, מפיק ומנהל מוזיקלי, מורה לפיתוח קול, זמר, כותב ומלחין.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  },
]

export default function AboutPage(){
  useReveal()
  return (
    <main className="overflow-x-hidden">
      <Navbar d={d} locale="he" pageType="about" />

      {/* Header */}
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-6">
        <div className="absolute inset-0 -z-10 bg-grid" />
        <div className="glow-blob -z-10 w-[440px] h-[440px] -top-24 inset-inline-start-[-60px]" style={{ background:'rgba(79,70,229,.22)' }} />
        <div className="container-page text-center">
          <span className="eyebrow">אודות</span>
          <h1 className="display mt-5 text-4xl md:text-6xl text-[var(--text)]">יוחאי אפללו</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--muted)] leading-relaxed">
            המקום שבו ניסיון ניהולי־ארגוני, יצירתיות וטכנולוגיה נפגשים — כדי לבנות לארגונים פתרונות שבאמת עובדים.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-10 md:py-16">
        <div className="container-page">
          <div className="reveal card-surface shadow-[var(--shadow-md)] p-7 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            {/* Photo */}
            <div className="mx-auto md:mx-0">
              <div className="relative">
                <div className="absolute -inset-2 rounded-[2rem] opacity-30 blur-xl" style={{ background:'var(--grad)' }} />
                <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-[1.8rem] overflow-hidden border border-[var(--border)] shadow-[var(--shadow-lg)]">
                  <img src="/me.png" alt="יוחאי אפללו" className="w-full h-full object-cover" style={{ objectPosition:'center 5%' }} />
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="text-center md:text-start">
              <p className="text-xl font-bold text-grad">נשוי לנטע ואב לארבעה בנים — נדב, איתי, זיו ועידן</p>
              <p className="mt-4 text-[17px] text-[var(--muted)] leading-relaxed">
                יוחאי משלב בין עשרות שנות ניסיון בניהול ארגונים וקהילות לבין פיתוח טכנולוגי מתקדם.
                השילוב הזה הוא היתרון הגדול: הוא לא רק כותב קוד — הוא מבין את התהליך הארגוני, את האנשים
                ואת המטרה העסקית שמאחורי כל מערכת. כך נולדים פתרונות שמתאימים באמת לצורך, ולא רק "נראים טוב".
              </p>
            </div>
          </div>

          {/* Background cards */}
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {backgrounds.map((b, i) => (
              <div key={b.title} className="reveal card-surface p-6 md:p-7 transition-all duration-300 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)]" style={{ transitionDelay:`${i*60}ms` }}>
                <div className="w-12 h-12 rounded-xl grid place-items-center text-white shadow-[var(--shadow-sm)]" style={{ background:'var(--grad)' }}>
                  <span className="w-6 h-6 block [&_svg]:w-full [&_svg]:h-full">{b.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--text)]">{b.title}</h3>
                <p className="mt-2 text-[15px] text-[var(--muted)] leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

          {/* Productions reveal */}
          <div className="reveal mt-6 card-surface overflow-hidden">
            <div className="relative p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="absolute inset-0 opacity-[.06]" style={{ background:'var(--grad)' }} />
              <div className="relative flex items-start gap-4 flex-1">
                <div className="shrink-0 w-14 h-14 rounded-2xl grid place-items-center text-white shadow-[var(--shadow-md)]" style={{ background:'var(--grad)' }}>
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text)]">מאחורי הקלעים: עולם המוזיקה, ההפקות והתוכן</h3>
                  <p className="mt-2 text-[15px] md:text-base text-[var(--muted)] leading-relaxed max-w-xl">
                    לצד הטכנולוגיה, יוחאי מגיע מעולם עשיר של ניהול מוזיקלי, הפקת מופעים, שירה בציבור והרצאות.
                    כל העושר הזה — סרטונים, הקלטות ומופעים — שמור וממתין למי שרוצה להכיר את הצד הזה.
                  </p>
                </div>
              </div>
              <div className="relative shrink-0">
                <Link href="/he/productions" className="btn btn-primary">
                  לעולם המוזיקה וההפקות
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA d={d} locale="he" />
      <Footer d={d} locale="he" />
    </main>
  )
}
