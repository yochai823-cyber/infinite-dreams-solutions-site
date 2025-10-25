'use client'
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
    } else if (pageType === 'about') {
      return `/${other}/about`
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
          {/* Brand Text Only */}
          <Link href={`/${locale}`} className="flex items-center gap-2 md:gap-6 group absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
            <div className="flex flex-col items-center text-center">
            <span className="font-black text-sm sm:text-base md:text-2xl tracking-wide transition-colors duration-300" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '1px 1px 2px rgba(255,255,255,0.8), 0 0 0 1px #3b82f6'
            }}>
              {d.brand}
            </span>
            <span className="text-xs md:text-sm font-medium text-gray-700 transition-colors duration-300 text-center" style={{
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
                        href={pageType === 'about' ? '#contact' : '#contact'}
                        onClick={pageType === 'about' ? (e) => {
                          e.preventDefault();
                          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                        } : undefined}
                      >
                        {d.nav.contact}
                      </a>
                    </li>
                    <li>
                      <Link 
                        href={`/${locale}/about`}
                        className="nav-link transition-colors duration-300 hover:text-amber-600 text-gray-700"
                      >
                        {locale === 'he' ? 'אודותינו' : 'About Us'}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        className="rounded-full px-4 py-2 border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-amber-600 transition-all duration-300 hover:scale-105" 
                        href={getLanguageSwitchPath()}
                      >
                        {d.nav.lang}
                      </Link>
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
          isMobileMenuOpen ? 'max-h-96 opacity-100 bg-amber-50 shadow-lg border-t border-amber-200' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 px-6">
            {/* Individual buttons with pill-shaped design */}
            <div className="space-y-3">
              <a 
                className="block w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 font-medium py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md" 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {d.nav.contact}
              </a>
              <Link 
                className="block w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 font-medium py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md" 
                href={`/${locale}/about`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {locale === 'he' ? 'אודותינו' : 'About Us'}
              </Link>
              <Link 
                className="block w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 font-medium py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md" 
                href={getLanguageSwitchPath()}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {d.nav.lang}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}