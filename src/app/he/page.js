'use client'
import { he as d } from '../../dict'
import Navbar from '../../components/Navbar'
import useReveal from '../../components/useReveal'
import Hero from '../../components/Hero'
import HomeCTA from '../../components/HomeCTA'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'

export default function Page(){ 
  useReveal(); 
  return (
    <main>
      <Navbar d={d} locale="he" pageType="home" />
      <Hero d={d} locale="he" />
      <HomeCTA d={d} locale="he" />
      <CTA d={d} locale="he" />
      <Footer d={d} locale="he" />
    </main>
  ) 
}
