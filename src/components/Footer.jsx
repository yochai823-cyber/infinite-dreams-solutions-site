'use client'
import Link from 'next/link'

export default function Footer({ d, locale = 'he' }){
  const he = locale === 'he'
  const home = `/${locale}`
  const tagline = he ? 'פיתוח אפליקציות, אוטומציה ובינה מלאכותית לארגונים.' : 'App development, automation & AI for organizations.'

  const nav = [
    { label:d.nav.services, href:`${home}#services` },
    { label:d.nav.process,  href:`${home}#process` },
    { label:d.nav.work,     href:`${home}#work` },
    { label:d.nav.about,    href:`${home}/about` },
  ]

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href={home} className="inline-flex items-center">
              <img src="/logo-mark.webp" alt={d.brand} className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-[15px] text-[var(--muted)] leading-relaxed max-w-xs">{tagline}</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text)] mb-4">{he ? 'ניווט' : 'Navigate'}</h4>
            <ul className="space-y-2.5">
              {nav.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text)] mb-4">{he ? 'דברו איתנו' : 'Get in touch'}</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li><a href={`mailto:${d.email}`} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors force-ltr">{d.email}</a></li>
              <li><a href={`tel:+${d.phoneE164}`} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors force-ltr">{d.phone}</a></li>
              <li><a href={`https://wa.me/${d.phoneE164}`} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">{he ? 'וואטסאפ' : 'WhatsApp'}</a></li>
              <li><a href={d.calendar} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">{he ? 'קביעת פגישה' : 'Book a meeting'}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[var(--faint)]">© {new Date().getFullYear()} {d.brand}</p>
          <div className="flex items-center gap-5">
            <Link href={`${home}/privacy`} className="text-[13px] text-[var(--faint)] hover:text-[var(--text)] transition-colors">{d.privacy}</Link>
            <Link href={`${home}/terms`} className="text-[13px] text-[var(--faint)] hover:text-[var(--text)] transition-colors">{d.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
