'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { openContact } from './contactBus'

export default function Navbar({ d, locale, pageType = 'home' }){
  const other = locale === 'he' ? 'en' : 'he'
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const langPath = () => {
    const map = { tech:'/tech', productions:'/productions', about:'/about', terms:'/terms', privacy:'/privacy' }
    return `/${other}${map[pageType] || ''}`
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive:true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const home = `/${locale}`
  const links = [
    { label:d.nav.services, href:`${home}#services` },
    { label:d.nav.process,  href:`${home}#process` },
    { label:d.nav.work,     href:`${home}#work` },
    { label:d.nav.about,    href:`${home}/about` },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-glass' : 'bg-transparent'}`}>
      <nav className="container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <Link href={home} className="group flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
            <img src="/logo-mark.webp" alt={d.brand} className="h-9 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="hidden sm:block text-[11px] md:text-xs text-[var(--muted)] border-s border-[var(--border)] ps-2.5 leading-tight">
              {locale === 'he' ? 'פיתוח · אוטומציה' : 'Development ·'}<br/>{locale === 'he' ? 'ובינה מלאכותית' : 'Automation · AI'}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="px-4 py-2 rounded-full text-[15px] font-medium text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href={langPath()} className="w-10 h-10 grid place-items-center rounded-full border border-[var(--border-strong)] text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">
              {d.nav.lang}
            </Link>
            <button onClick={openContact} className="btn btn-primary !py-2.5 !px-5 text-[15px]">
              {d.nav.quote}
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d={locale === 'he' ? 'M11 5l-7 7 7 7' : 'M13 5l7 7-7 7'} /><path d={locale === 'he' ? 'M4 12h16' : 'M20 12H4'} />
              </svg>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label={locale === 'he' ? 'תפריט' : 'Menu'}
            aria-expanded={open}
            className="lg:hidden w-11 h-11 grid place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur"
            onClick={() => setOpen(v => !v)}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`h-0.5 w-full bg-[var(--text)] rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`h-0.5 w-full bg-[var(--text)] rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-[var(--text)] rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile panel */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[420px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
          <div className="mt-2 rounded-2xl card-surface p-3 space-y-1">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-[15px] font-medium text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <button onClick={() => { setOpen(false); openContact() }} className="btn btn-primary flex-1">
                {d.nav.quote}
              </button>
              <Link href={langPath()} onClick={() => setOpen(false)} className="btn btn-ghost !px-5">
                {d.nav.lang}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
