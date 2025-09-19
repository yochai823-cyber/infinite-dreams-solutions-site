import { en } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Hero from '../../../components/Hero'
import Services from '../../../components/Services'
import CTA from '../../../components/CTA'
import Footer from '../../../components/Footer'

export default function ProductionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar d={en} locale="en" pageType="productions" />
      <Hero d={en} pageType="productions" locale="en" />
      <Services d={en} pageType="productions" locale="en" />
      <CTA d={en} locale="en" />
      <Footer d={en} locale="en" />
    </main>
  )
}
