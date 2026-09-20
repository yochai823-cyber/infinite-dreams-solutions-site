'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { OPEN_CONTACT_EVENT } from './contactBus'

function getSid(){
  try {
    let s = localStorage.getItem('ids_sid')
    if (!s){ s = Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('ids_sid', s) }
    return s
  } catch { return null }
}
function getDevice(){
  try { return window.matchMedia('(max-width:767px)').matches ? 'mobile' : 'desktop' } catch { return 'unknown' }
}

export default function AnalyticsTracker({ locale = 'he' }){
  const pathname = usePathname()
  const last = useRef(null)

  const send = (type, extra = {}) => {
    try {
      if (typeof window === 'undefined') return
      if ((location.pathname || '').startsWith('/admin')) return // never track the admin screen
      const payload = JSON.stringify({
        type,
        path: location.pathname,
        sessionId: getSid(),
        device: getDevice(),
        locale,
        referrer: document.referrer || null,
        ...extra,
      })
      const url = '/api/track'
      if (navigator.sendBeacon){
        navigator.sendBeacon(url, new Blob([payload], { type: 'application/json' }))
      } else {
        fetch(url, { method: 'POST', body: payload, headers: { 'Content-Type': 'application/json' }, keepalive: true })
      }
    } catch {}
  }

  // page views (also on client-side route changes)
  useEffect(() => {
    if (last.current === pathname) return
    last.current = pathname
    send('pageview')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // click tracking + form opens
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest('a, button')
      if (!el) return
      let label = el.getAttribute('data-track') || el.getAttribute('aria-label') || el.textContent || ''
      label = label.replace(/\s+/g, ' ').trim().slice(0, 80)
      const href = el.getAttribute('href') || ''
      if (href.includes('wa.me')) label = 'וואטסאפ'
      else if (href.startsWith('mailto:')) label = 'אימייל'
      else if (href.startsWith('tel:')) label = 'טלפון'
      else if (href.includes('calendar')) label = 'קביעת פגישה'
      if (!label && href) label = href.slice(0, 80)
      if (label) send('click', { label })
    }
    const onOpenContact = () => send('form_open', { label: 'פתיחת טופס לידים' })
    document.addEventListener('click', onClick, true)
    window.addEventListener(OPEN_CONTACT_EVENT, onOpenContact)
    return () => {
      document.removeEventListener('click', onClick, true)
      window.removeEventListener(OPEN_CONTACT_EVENT, onOpenContact)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
