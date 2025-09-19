import { he } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Hero from '../../../components/Hero'
import Services from '../../../components/Services'
import CTA from '../../../components/CTA'
import Footer from '../../../components/Footer'

export default function TechPage() {
  return (
    <main className="min-h-screen">
      <Navbar d={he} locale="he" pageType="tech" />
      <Hero d={he} pageType="tech" locale="he" />
      <Services d={he} pageType="tech" locale="he" />
      <CTA d={he} locale="he" />
      <Footer d={he} locale="he" />
    </main>
  )
}
