'use client'

import { useState } from 'react'

const AudioSection = ({ audioFiles, locale = 'he' }) => {
  const [currentAudio, setCurrentAudio] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const t = {
    he: {
      title: 'קבצי שמע',
      subtitle: 'האזינו לקטעי מוזיקה מההפקות שלנו',
      playButton: 'הפעל',
      pauseButton: 'השתק',
      downloadButton: 'הורד'
    },
    en: {
      title: 'Audio Files',
      subtitle: 'Listen to music clips from our productions',
      playButton: 'Play',
      pauseButton: 'Pause',
      downloadButton: 'Download'
    }
  }

  const text = t[locale] || t.he

  if (!audioFiles || audioFiles.length === 0) return null

  const handlePlay = (audioFile) => {
    console.log('handlePlay called with:', audioFile.title);
    if (currentAudio === audioFile && isPlaying) {
      // השתק
      console.log('Pausing audio');
      setIsPlaying(false);
      const audioElement = document.querySelector('audio');
      if (audioElement) {
        audioElement.pause();
      }
    } else {
      // הפעל
      console.log('Playing audio:', audioFile.title);
      setCurrentAudio(audioFile);
      setIsPlaying(true);
      
      // נסה לנגן את השמע
      setTimeout(() => {
        const audioElement = document.querySelector('audio');
        if (audioElement) {
          console.log('Found audio element, trying to play...');
          audioElement.play().then(() => {
            console.log('Audio playing successfully!');
          }).catch(err => {
            console.log('Auto-play failed:', err);
          });
        } else {
          console.log('No audio element found!');
        }
      }, 100);
    }
  }

  return (
    <section className="pt-8 pb-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            {text.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {text.subtitle}
          </p>
        </div>

        {/* Audio Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {audioFiles.map((audio, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Audio Container */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-green-500 to-blue-600">
                {/* תמונת רקע */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                     style={{
                       backgroundImage: audio.thumbnail ? `url(${audio.thumbnail})` : 
                         'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
                     }}>
                </div>
                
                {/* Overlay עם כפתורי הפעלה */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                  <div className="text-center text-white">
                    <div className="relative flex items-center justify-center mb-4">
                      {/* Rewind to Start Button - Only when audio is selected */}
                      {currentAudio === audio && (
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Rewind to start button clicked!');
                            const audioElement = document.querySelector('audio');
                            if (audioElement) {
                              console.log('Rewinding audio to start...');
                              audioElement.currentTime = 0;
                            } else {
                              console.log('No audio element found!');
                            }
                          }}
                          className="absolute -left-12 w-12 h-12 bg-blue-500/80 hover:bg-blue-600/80 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                          title={locale === 'en' ? 'Back to start' : 'חזרה להתחלה'}
                        >
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                          </svg>
                        </button>
                      )}
                      
                      {/* Main Play Button - Always centered */}
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 cursor-pointer backdrop-blur-sm"
                           onClick={(e) => {
                             e.preventDefault();
                             e.stopPropagation();
                             console.log('Play button clicked!');
                             handlePlay(audio);
                           }}>
                        {currentAudio === audio && isPlaying ? (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                          </svg>
                        ) : (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {locale === 'en' ? 'Click to listen' : 'לחצו להאזנה'}
                    </h3>
                    <p className="text-sm opacity-90">
                      {locale === 'en' ? 'File will play directly' : 'הקובץ יושמע ישירות'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Audio Player */}
              {currentAudio === audio && (
                <div className="mb-4 relative z-50">
                  <audio 
                    ref={(el) => {
                      if (el) {
                        el.addEventListener('play', () => {
                          console.log('Audio started playing');
                          setIsPlaying(true);
                        });
                        el.addEventListener('pause', () => {
                          console.log('Audio paused');
                          setIsPlaying(false);
                        });
                        el.addEventListener('ended', () => {
                          console.log('Audio ended');
                          setIsPlaying(false);
                        });
                        el.addEventListener('error', (e) => {
                          console.error('Audio error:', e);
                          console.error('Audio URL:', audio.url);
                        });
                        el.addEventListener('loadstart', () => console.log('Loading audio:', audio.url));
                        el.addEventListener('canplay', () => {
                          console.log('Audio can play:', audio.url);
                        });
                      }
                    }}
                    controls 
                    className="w-full relative z-50"
                    preload="auto"
                    style={{ zIndex: 9999 }}
                  >
                    <source src={audio.url} type="audio/mpeg" />
                    <source src={audio.url} type="audio/wav" />
                    <source src={audio.url} type="audio/ogg" />
                    <source src={audio.url} type="audio/mp4" />
                    הדפדפן שלך לא תומך בנגן השמע.
                  </audio>
                  
                </div>
              )}

              {/* Audio Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {audio.title}
                </h3>
                {audio.description && (
                  <p className="text-gray-600 text-sm mb-4">
                    {audio.description}
                  </p>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AudioSection
