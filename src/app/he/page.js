'use client'
import { he as d } from '../../dict'
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
      <Navbar d={d} locale="he" pageType="home" />
      <Hero d={d} locale="he" />
      <Stats d={d} />
      <Clients d={d} locale="he" />
      <Offerings d={d} locale="he" />
      <ProductSpotlight d={d} locale="he" />
      <Nynizi locale="he" />
      <Process d={d} locale="he" />
      <FeaturedWork d={d} locale="he" />
      <WhyUs d={d} locale="he" />
      <FinalCTA d={d} locale="he" />
      <Footer d={d} locale="he" />
    </main>
  )
}
