'use client'
import { useState, useEffect } from 'react'
import { openContact } from './contactBus'

// Persistent lead CTA that follows the scroll. Appears once the visitor
// scrolls past the hero, so most visitors always have a one-tap way to reach
// the contact form.
export default function FloatingContact({ locale = 'he' }){
  const he = locale === 'he'
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ((location.pathname || '').startsWith('/admin')) return
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={openContact}
      aria-label={he ? 'ספרו לנו מה לפתור' : 'Tell us what to solve'}
      className={`fixed z-[55] bottom-5 left-1/2 -translate-x-1/2 btn text-white text-[15px] md:text-base font-bold shadow-[0_16px_40px_-10px_rgba(79,70,229,.6)] transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
      style={{ background: 'var(--grad)', backgroundSize: '200% auto' }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
      {he ? 'ספרו לנו מה לפתור' : 'Tell us what to solve'}
    </button>
  )
}
