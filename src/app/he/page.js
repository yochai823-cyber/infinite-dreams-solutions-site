'use client'
import { he as d } from '../../dict'
import useReveal from '../../components/useReveal'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Solutions from '../../components/Solutions'
import Stats from '../../components/Stats'
import Clients from '../../components/Clients'
import FinalCTA from '../../components/FinalCTA'
import Footer from '../../components/Footer'

export default function Page(){
  useReveal()
  return (
    <main className="overflow-x-hidden">
      <Navbar d={d} locale="he" pageType="home" />
      <Hero d={d} locale="he" />
      <Solutions d={d} locale="he" />
      <Stats d={d} />
      <Clients d={d} locale="he" />
      <FinalCTA d={d} locale="he" />
      <Footer d={d} locale="he" />
    </main>
  )
}
