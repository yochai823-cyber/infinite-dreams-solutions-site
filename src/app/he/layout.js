import '../globals.css'
import ContactHost from '../../components/ContactHost'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import FloatingContact from '../../components/FloatingContact'
import AnalyticsTracker from '../../components/AnalyticsTracker'
import { he } from '../../dict'

export default function HeLayout({children}){
  return (
    <div className="font-hebrew antialiased" dir="rtl">
      {children}
      <FloatingContact locale="he" />
      <FloatingWhatsApp d={he} locale="he" />
      <ContactHost d={he} locale="he" />
      <AnalyticsTracker locale="he" />
    </div>
  )
}
