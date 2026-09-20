import '../globals.css'
import ContactHost from '../../components/ContactHost'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import AnalyticsTracker from '../../components/AnalyticsTracker'
import { en } from '../../dict'

export default function EnLayout({children}){
  return (
    <div className="font-sans antialiased" dir="ltr">
      {children}
      <FloatingWhatsApp d={en} locale="en" />
      <ContactHost d={en} locale="en" />
      <AnalyticsTracker locale="en" />
    </div>
  )
}
