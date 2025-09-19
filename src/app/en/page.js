'use client'
import { en as d } from '../../dict'
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
      <Navbar d={d} locale="en" pageType="home" />
      <Hero d={d} locale="en" />
      <HomeCTA d={d} locale="en" />
      <CTA d={d} locale="en" />
      <Footer d={d} locale="en" />
    </main>
  ) 
}
