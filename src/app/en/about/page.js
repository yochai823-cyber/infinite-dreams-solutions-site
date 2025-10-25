'use client'

import React from 'react'
import { en as d } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Hero from '../../../components/Hero'
import CTA from '../../../components/CTA'
import Footer from '../../../components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Navbar d={d} locale="en" pageType="about" />
      <Hero d={d} locale="en" pageType="about" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">

      {/* Main Content */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="w-full">
            <div className="bg-white rounded-3xl p-6 shadow-2xl">
              {/* Mobile: Vertical layout with image on top */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Circular Image - on mobile at top, on desktop on side */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="relative">
                    {/* Beautiful circle with shadows */}
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-200 ring-offset-4 ring-offset-white">
                      <img 
                        src="/me.png" 
                        alt="Yochai Aflalo"
                        className="w-full h-full object-cover rounded-full"
                        style={{
                          objectPosition: 'center 2.5%'
                        }}
                      />
                    </div>
                    
                    {/* Additional decoration */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-3">
                    Yochai Aflalo
                  </h2>
                  
                  <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                    <p className="text-xl font-semibold text-blue-600 mb-4">
                      Married to Netta and father of four boys - Nadav, Itai, Ziv, and Idan
                    </p>
                    
                    {/* On mobile: full-width cards, on desktop: 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border-r-4 border-blue-500">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">Musical Background</h3>
                        <p className="text-sm">
                          Graduate of the Academy of Music, conductor, producer and musical director, voice development teacher, singer, writer and composer
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg border-r-4 border-cyan-500">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">Community Experience</h3>
                        <p className="text-sm">
                          Works and manages in community worlds for over 20 years in various roles, youth department manager, culture department manager and CEO of the community center
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-3 rounded-lg border-r-4 border-green-500">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">Technological Background</h3>
                        <p className="text-sm">
                          Builds websites, applications and automation systems. Creates management and strategic solutions for authorities, companies, organizations and businesses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <CTA d={d} locale="en" />
      </div>
      <Footer d={d} locale="en" />
    </main>
  )
}
