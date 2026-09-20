'use client'
import { useEffect } from 'react'

// Reveal-on-scroll that never leaves content stuck invisible.
// It re-queries the DOM on every pass, observes elements added later
// (client render / HMR), and force-reveals anything already in or past
// the viewport — including after hash/deep-link jumps.
export default function useReveal(){
  useEffect(() => {
    const reveal = (el) => el.classList.add('is-visible')

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting){ reveal(e.target); obs.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => io.observe(el))
    }
    const sweep = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
        if (el.getBoundingClientRect().top < vh - 40){ reveal(el); io.unobserve(el) }
      })
    }
    const tick = () => { observeAll(); sweep() }

    observeAll()
    requestAnimationFrame(() => requestAnimationFrame(sweep))
    const timers = [80, 250, 600, 1200].map(t => setTimeout(tick, t))

    window.addEventListener('scroll', sweep, { passive: true })
    window.addEventListener('resize', sweep, { passive: true })
    window.addEventListener('hashchange', sweep)
    window.addEventListener('load', tick)

    // catch .reveal nodes added after mount (client render / hot reload)
    const mo = new MutationObserver(() => tick())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect(); mo.disconnect()
      timers.forEach(clearTimeout)
      window.removeEventListener('scroll', sweep)
      window.removeEventListener('resize', sweep)
      window.removeEventListener('hashchange', sweep)
      window.removeEventListener('load', tick)
    }
  }, [])
  return null
}
