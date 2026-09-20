'use client'
import { en as d } from '../../dict'
import useReveal from '../../components/useReveal'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Stats from '../../components/Stats'
import Clients from '../../components/Clients'
import Offerings from '../../components/Offerings'
import ProductSpotlight from '../../components/ProductSpotlight'
import Nynizi from '../../components/Nynizi'
import Process from '../../components/Process'
import FeaturedWork from '../../components/FeaturedWork'
import WhyUs from '../../components/WhyUs'
import FinalCTA from '../../components/FinalCTA'
import Footer from '../../components/Footer'

export default function Page(){
  useReveal()
  return (
    <main className="overflow-x-hidden">
      <Navbar d={d} locale="en" pageType="home" />
      <Hero d={d} locale="en" />
      <Stats d={d} />
      <Clients d={d} locale="en" />
      <Offerings d={d} locale="en" />
      <ProductSpotlight d={d} locale="en" />
      <Nynizi locale="en" />
      <Process d={d} locale="en" />
      <FeaturedWork d={d} locale="en" />
      <WhyUs d={d} locale="en" />
      <FinalCTA d={d} locale="en" />
      <Footer d={d} locale="en" />
    </main>
  )
}
