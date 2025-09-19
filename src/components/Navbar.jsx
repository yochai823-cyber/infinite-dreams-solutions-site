'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar({ d, locale, pageType = 'home' }){
  const other = locale==='he' ? 'en' : 'he'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // קביעת הנתיב הנכון לפי הדף הנוכחי
  const getLanguageSwitchPath = () => {
    if (pageType === 'tech') {
      return `/${other}/tech`
    } else if (pageType === 'productions') {
      return `/${other}/productions`
    } else if (pageType === 'terms') {
      return `/${other}/terms`
    } else if (pageType === 'privacy') {
      return `/${other}/privacy`
    } else {
      return `/${other}`
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-amber-50/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 md:gap-6 group">
            <div className="relative">
              <Image 
                src="/logo.png" 
                alt="logo" 
                width={60} 
                height={60} 
                className="md:w-20 md:h-20 rounded-2xl shadow-2xl group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 border-2 border-white/20" 
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/30 to-yellow-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-amber-300/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </div>
            <div className="flex flex-col">
            <span className="font-black text-lg md:text-2xl tracking-wide transition-colors duration-300" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '1px 1px 2px rgba(255,255,255,0.8), 0 0 0 1px #3b82f6'
            }}>
              {d.brand}
            </span>
            <span className="text-xs md:text-sm font-medium text-gray-700 transition-colors duration-300" style={{
              textShadow: '1px 1px 2px rgba(255,255,255,0.8), 0 0 0 1px #3b82f6'
            }}>
              {locale === 'he' ? 'הופכים חלומות למציאות' : 'Turning Dreams into Reality'}
            </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
                    <li>
                      <a 
                        className="nav-link transition-colors duration-300 hover:text-amber-600 text-gray-700" 
                        href="#services"
                      >
                        {d.nav.services}
                      </a>
                    </li>
                    <li>
                      <a 
                        className="nav-link transition-colors duration-300 hover:text-amber-600 text-gray-700" 
                        href="#projects"
                      >
                        {d.nav.projects}
                      </a>
                    </li>
                    <li>
                      <a 
                        className="nav-link transition-colors duration-300 hover:text-amber-600 text-gray-700" 
                        href="#contact"
                      >
                        {d.nav.contact}
                      </a>
                    </li>
                    <li>
                      <Link 
                        className="rounded-full px-4 py-2 border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-amber-600 transition-all duration-300 hover:scale-105" 
                        href={getLanguageSwitchPath()}
                      >
                        {d.nav.lang}
                      </Link>
                    </li>
            <li>
              <a 
                href="#contact" 
                className={`bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                {d.nav.quote}
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-6 flex flex-col justify-center space-y-1 transition-all duration-300`}>
              <span className={`block h-0.5 w-6 transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 bg-amber-50 shadow-lg' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            <a 
              className="block py-2 transition-colors duration-300 text-gray-700 hover:text-amber-600" 
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {d.nav.services}
            </a>
            <a 
              className="block py-2 transition-colors duration-300 text-gray-700 hover:text-amber-600" 
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {d.nav.projects}
            </a>
            <a 
              className="block py-2 transition-colors duration-300 text-gray-700 hover:text-amber-600" 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {d.nav.contact}
            </a>
            <Link 
              className="block py-2 transition-colors duration-300 text-gray-700 hover:text-amber-600" 
              href={getLanguageSwitchPath()}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {d.nav.lang}
            </Link>
            <a 
              href="#contact" 
              className="block bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {d.nav.quote}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}