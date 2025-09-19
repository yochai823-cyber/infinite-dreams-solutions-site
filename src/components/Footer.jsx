export default function Footer({ d, locale = 'he' }){
  const slogan = locale === 'he' ? 'הופכים חלומות למציאות' : 'Turning Dreams into Reality'
  
  return (
    <footer className="py-12 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Main Copyright */}
          <div className="mb-6">
            <p className="text-gray-600 text-lg font-medium">
              © {new Date().getFullYear()} {d.brand}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {slogan}
            </p>
          </div>
          
          {/* Links */}
          <div className="flex justify-center items-center gap-8 mb-6">
            <a 
              href={`/${locale}/privacy`} 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium"
            >
              {d.privacy}
            </a>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <a 
              href={`/${locale}/terms`} 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium"
            >
              {d.terms}
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="text-center">
            <p className="text-gray-500 text-xs md:text-sm break-words px-4">
              {d.email} • {d.phone}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}