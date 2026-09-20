'use client'
import { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import { OPEN_CONTACT_EVENT } from './contactBus'

// One contact-form modal per page (mounted in the layout) that any button
// can open instantly via openContact(), plus deep-link support.
export default function ContactHost({ d, locale = 'he' }){
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener(OPEN_CONTACT_EVENT, onOpen)
    try {
      const u = new URL(window.location.href)
      if (u.searchParams.get('open') === 'project-form' || window.location.hash === '#project-form'){
        setTimeout(() => setOpen(true), 150)
      }
    } catch {}
    return () => window.removeEventListener(OPEN_CONTACT_EVENT, onOpen)
  }, [])

  return <ContactForm isOpen={open} onClose={() => setOpen(false)} d={d} locale={locale} />
}
