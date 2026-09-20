import '../globals.css'
import ContactHost from '../../components/ContactHost'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import AnalyticsTracker from '../../components/AnalyticsTracker'
import { he } from '../../dict'

export default function HeLayout({children}){
  return (
    <div className="font-hebrew antialiased" dir="rtl">
      {children}
      <FloatingWhatsApp d={he} locale="he" />
      <ContactHost d={he} locale="he" />
      <AnalyticsTracker locale="he" />
    </div>
  )
}
