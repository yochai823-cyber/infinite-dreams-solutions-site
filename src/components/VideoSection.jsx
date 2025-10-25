'use client'

import { useState } from 'react'

const VideoSection = ({ videos, locale = 'he' }) => {
  const [activeVideo, setActiveVideo] = useState(0)

  const t = {
    he: {
      title: 'סרטונים',
      subtitle: 'צפו בסרטונים מההפקות שלנו'
    },
    en: {
      title: 'Videos',
      subtitle: 'Watch videos from our productions'
    }
  }

  const text = t[locale] || t.he

  if (!videos || videos.length === 0) return null

  return (
    <section className="pt-32 pb-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            {text.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {text.subtitle}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Video Container */}
              <div className="relative w-full h-[28rem] rounded-xl overflow-hidden mb-6 bg-gray-100">
                {/* בדיקה אם זה קובץ מקומי */}
                {(video.url || video.embedUrl || video.directUrl)?.startsWith('/video/') || (video.url || video.embedUrl || video.directUrl)?.startsWith('/audio/') ? (
                  // נגן וידאו מקומי
                  <video 
                    className="w-full h-full object-cover relative z-50"
                    controls
                    preload="metadata"
                    style={{ zIndex: 9999 }}
                  >
                    <source src={video.url || video.embedUrl || video.directUrl} type="video/mp4" />
                    <source src={video.url || video.embedUrl || video.directUrl} type="video/webm" />
                    <source src={video.url || video.embedUrl || video.directUrl} type="video/ogg" />
                    הדפדפן שלך לא תומך בנגן הוידאו.
                  </video>
                ) : (
                  // תמונת רקע + כפתור הפעלה לקישורים חיצוניים
                  <>
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                         style={{
                           backgroundImage: video.thumbnail ? `url(${video.thumbnail})` : 
                             (video.url || video.embedUrl)?.includes('youtube.com') ? 
                               `url(https://img.youtube.com/vi/${(video.url || video.embedUrl).split('v=')[1]?.split('&')[0]}/maxresdefault.jpg)` :
                               (video.url || video.embedUrl)?.includes('facebook.com') ?
                                 `url(https://graph.facebook.com/v18.0/${(video.url || video.embedUrl).split('/videos/')[1]?.split('/')[0]}/picture?type=large)` :
                                 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                         }}>
                    </div>
                    
                    {/* Overlay עם כפתור הפעלה */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10"
                         onClick={() => {
                           const url = video.url || video.directUrl || video.embedUrl;
                           window.open(url, '_blank');
                         }}>
                      <div className="text-center text-white">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 cursor-pointer backdrop-blur-sm">
                          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {locale === 'en' ? 'Click to watch video' : 'לחצו לצפייה בסרטון'}
                        </h3>
                        <p className="text-sm opacity-90">
                          {locale === 'en' ? 'Video will open in new window' : 'הסרטון יפתח בחלון חדש'}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Video Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="text-gray-600 text-sm">
                    {video.description}
                  </p>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default VideoSection
