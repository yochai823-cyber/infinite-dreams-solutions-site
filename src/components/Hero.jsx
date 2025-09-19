export default function Hero({ d, locale = 'he', pageType = 'home' }){
  // תרגום דינמי לפי שפה
  const t = {
    he: {
      techButton: 'פיתוח וכלי ניהול',
      productionsButton: 'הפקות ותוכן',
      backToHome: 'חזרה לדף הבית',
      techTitle: 'פיתוח וכלי ניהול',
      productionsTitle: 'הפקות ותוכן'
    },
    en: {
      techButton: 'Development & Management Tools',
      productionsButton: 'Productions & Content',
      backToHome: 'Back to Home',
      techTitle: 'Development & Management Tools',
      productionsTitle: 'Productions & Content'
    }
  }
  
  const text = t[locale] || t.he
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beautiful Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Beautiful Background Image */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/hero-bg.jpg")`
          }}
        ></div>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
        
        {/* Subtle animated elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* HUGE LOGO - NO FRAME */}
          <div className="mb-0 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Infinite Dreams Solutions Logo" 
              className="w-[500px] h-64 md:w-[650px] md:h-80 lg:w-[750px] lg:h-96 transition-all duration-500 hover:scale-105 object-contain"
            />
          </div>
          
                  {/* Main heading */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-12 leading-tight drop-shadow-lg -mt-24">
                    {pageType === 'tech' ? text.techTitle : 
                     pageType === 'productions' ? text.productionsTitle : 
                     d.hero.title}
                  </h1>
          
          {/* Two Main CTA Buttons */}
          {pageType === 'home' ? (
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              {/* Technology Button */}
              <a 
                href={`/${locale}/tech`} 
                className="group bg-white border-2 border-gray-800 hover:bg-gray-50 text-gray-800 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-glow-lg flex items-center gap-4 min-w-[280px] justify-center"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{text.techButton}</span>
              </a>
              
              {/* Productions Button */}
              <a 
                href={`/${locale}/productions`} 
                className="group bg-white border-2 border-gray-800 hover:bg-gray-50 text-gray-800 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-glow-lg flex items-center gap-4 min-w-[280px] justify-center"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <span>{text.productionsButton}</span>
              </a>
            </div>
          ) : (
            <div className="flex justify-center items-center mb-16">
              <a 
                href={`/${locale}`} 
                className="group bg-white border-2 border-gray-800 hover:bg-gray-50 text-gray-800 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-glow-lg flex items-center gap-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>{text.backToHome}</span>
              </a>
            </div>
          )}
          
          {/* Contact Icons */}
          <div className="flex justify-center items-center gap-8 mb-4">
            <a 
              href={`https://wa.me/${d.phoneE164}`} 
              className="group bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-5 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200"
              title="WhatsApp"
            >
              <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a 
              href={`mailto:${d.email}`} 
              className="group bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-5 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200"
              title="Email"
            >
              <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}