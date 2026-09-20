'use client'
// Tiny global bus so any button anywhere can open the single contact-form modal.
export const OPEN_CONTACT_EVENT = 'ids:open-contact'

export function openContact(){
  if (typeof window !== 'undefined'){
    window.dispatchEvent(new Event(OPEN_CONTACT_EVENT))
  }
}
