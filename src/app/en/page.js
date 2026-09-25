'use client'
import { en as d } from '../../dict'
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
      <Navbar d={d} locale="en" pageType="home" />
      <Hero d={d} locale="en" />
      <Solutions d={d} locale="en" />
      <Stats d={d} />
      <Clients d={d} locale="en" />
      <FinalCTA d={d} locale="en" />
      <Footer d={d} locale="en" />
    </main>
  )
}
