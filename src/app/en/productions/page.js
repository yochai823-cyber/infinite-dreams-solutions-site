'use client'

import React, { useState } from 'react'
import { en as d } from '../../../dict'
import Navbar from '../../../components/Navbar'
import Services from '../../../components/Services'
import VideoSection from '../../../components/VideoSection'
import AudioSection from '../../../components/AudioSection'
import Footer from '../../../components/Footer'

export default function ProductionsPage() {
  const [activeSection, setActiveSection] = useState('productions')

  // Video data
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Song for Shira - Mitrim Group Kadima Tzoran",
      description: "Song for Shira - Mitrim Group Kadima Tzoran",
      url: "/video/VID-1234.mp4",
      thumbnail: null, // נטען אוטומטית מהקובץ המקומי
      isLocal: true
    },
    {
      id: 2,
      title: "Not Leaving the City - Young Group of Gush Etzion",
      description: "Not Leaving the City - Young Group of Gush Etzion",
      url: "https://www.youtube.com/watch?v=0LrN8ls0RYU",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isLocal: false
    },
    {
      id: 3,
      title: "Memorial Day Ceremony - Youth Group of Ramot Neighborhood",
      description: "Memorial Day Ceremony - Youth Group of Ramot Neighborhood",
      url: "https://www.youtube.com/watch?v=Q0JFv2ITjIo",
      thumbnail: "https://img.youtube.com/vi/Q0JFv2ITjIo/maxresdefault.jpg",
      isLocal: false
    },
    {
      id: 4,
      title: "When It's Deep - Corinne Elal, Intimate and Magical Performance by David Solo and Yochai Aflalo",
      description: "When It's Deep - Corinne Elal, Intimate and Magical Performance by David Solo and Yochai Aflalo",
      url: "https://www.youtube.com/watch?v=wieH-TEjI48",
      thumbnail: "https://img.youtube.com/vi/wieH-TEjI48/maxresdefault.jpg",
      isLocal: false
    },
    {
      id: 5,
      title: "On This Day - Leah Goldberg",
      description: "Words: Leah Goldberg / Music: Muni Amarilio / Arrangement: Boaz Dorot / Singing: Yochai Aflalo, with the Israeli Sinfonietta Be'er Sheva",
      url: "https://www.youtube.com/watch?v=O62KMkk99e8",
      thumbnail: "https://img.youtube.com/vi/O62KMkk99e8/maxresdefault.jpg",
      isLocal: false
    },
    {
      id: 6,
      title: "Amti Le'egoz - Musical for Children and the Whole Family",
      description: "Directed by: Rachel Keshet | Play, Set and Costumes: Yehonatan Biton | Produced by: Yativ Loichter | Original Music: Yehonatan Biton and Yochai Aflalo | Musical Direction: Yochai Aflalo | Playbacks: Elad Deutsch Music | Choreography: Hadassa Burns | Makeup: Osherat Gispan | Sound and Lighting: Israel Shuk",
      url: "https://www.youtube.com/watch?v=thWghJRhXdc",
      thumbnail: "https://img.youtube.com/vi/thWghJRhXdc/maxresdefault.jpg",
      isLocal: false
    }
  ])

  // Audio data
  const [audioFiles, setAudioFiles] = useState([
    {
      id: 1,
      title: "Hallelujah",
      description: "Volume Group - Gush Etzion Youth",
      url: "/audio/haleluya.mpeg",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "All Love - Gush Etzion Youth Group",
      description: "All Love - Gush Etzion Youth Group",
      url: "/audio/me kol ahahhavot.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Sea Mix",
      description: "Memorial Day Ceremony - Ramot Neighborhood Youth Group",
      url: "/audio/mix yam zicaron.wav",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Rain People",
      description: "Volume Group - Gush Etzion Youth",
      url: "/audio/anshey ageshem.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "I Carry With Me",
      description: "Memorial Day Ceremony - Ramot Neighborhood Youth Group",
      url: "/audio/ani nose imi.wav",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Here Comes the Sun",
      description: "Volume Group - Gush Etzion Youth",
      url: "/audio/here-comes-the-sun.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Beautiful Prince Born",
      description: "Memorial Day Ceremony - Ramot Neighborhood Youth Group",
      url: "/audio/ben yafe nolad.wav",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Adam Within Himself",
      description: "Volume Group - Gush Etzion Youth",
      url: "/audio/adam betoch azmo.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Mix - Ballad, The Prince, Crying for You",
      description: "Memorial Day Ceremony - Ramot Neighborhood Youth Group",
      url: "/audio/mix shirey zicaron.mp3",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ])

  const handleDownloadImage = async () => {
    try {
      // Create canvas
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      // Load main image
      const mainImg = new Image()
      mainImg.crossOrigin = 'anonymous'
      mainImg.onload = () => {
        // Set canvas size
        canvas.width = mainImg.width
        canvas.height = mainImg.height
        
        // Draw main image
        ctx.drawImage(mainImg, 0, 0)
        
        // Load logo
        const logoImg = new Image()
        logoImg.crossOrigin = 'anonymous'
        logoImg.onload = () => {
          // Calculate logo size - maintain aspect ratio
          const logoAspectRatio = logoImg.width / logoImg.height
          const logoHeight = Math.max(mainImg.width * 0.2, 100)
          const logoWidth = logoHeight * logoAspectRatio
          
          // Position logo (top right corner)
          const logoX = mainImg.width - logoWidth - 20
          const logoY = 20
          
          // Draw logo with aspect ratio preservation
          ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight)
          
          // Download
          const link = document.createElement('a')
          link.download = 'music-community-ad.png'
          link.href = canvas.toDataURL()
          link.click()
        }
        logoImg.src = '/logo.png'
      }
      mainImg.src = '/mc.png'
    } catch (error) {
      console.error('Error creating image:', error)
    }
  }

  return (
    <main>
      <Navbar d={d} locale="en" pageType="productions" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        {/* Main Header */}
        <section className="relative h-[60vh] flex items-start justify-center overflow-hidden">
          {/* Beautiful Background Image */}
          <div className="absolute inset-0 z-0">
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
          <div className="relative z-10 container mx-auto px-6 text-center pt-2">
            <div className="max-w-6xl mx-auto">
            {/* HUGE LOGO - NO FRAME */}
            <div className="mb-0 flex justify-center">
              <img 
                src="/logo.png" 
                alt="Infinite Dreams Solutions Logo" 
                className="w-[400px] h-40 md:w-[500px] md:h-48 lg:w-[600px] lg:h-56 transition-all duration-500 hover:scale-105 object-contain"
              />
            </div>
              
              {/* Main heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-2 leading-tight drop-shadow-lg -mt-12">
                Music Productions & Performances
              </h1>
              
              <div className="w-32 h-1 bg-gray-800 mx-auto mb-2"></div>
              
              <div className="mt-1">
                <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
                  We believe in the power of creation to connect people, build strong communities, and create meaningful experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <Services d={d} locale="en" pageType="productions" activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Productions Content */}
        <div id="productions-content" className="py-8">
          <div className="container mx-auto px-6">
            {/* Musical Management Section */}
            <section className="mb-12 relative overflow-hidden">
              {/* Background with gradient and animated elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
              
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-4 left-4 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                <div className="absolute top-8 right-8 w-16 h-16 bg-cyan-200/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-16 left-16 w-24 h-24 bg-purple-200/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-12 right-12 w-12 h-12 bg-pink-200/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-6 left-1/4 w-8 h-8 bg-yellow-200/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-10 right-1/3 w-14 h-14 bg-green-200/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 py-8 px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-6 text-center">
                  Musical Management & Production
                </h2>
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    We have extensive experience in various productions, ceremonies, events, musical management, singing groups and more. 
                    Our experience allows us to bring to each project the professional knowledge and sensitivity required.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    We specialize in producing diverse musical events - from formal ceremonies to intimate performances, 
                    while maintaining high professional quality and connection with the audience.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Every project is an opportunity for us to create a unique and exciting musical experience, 
                    combining professionalism with genuine love for music and people.
                  </p>
                </div>
                
                {/* Scroll to Media Button */}
                <div className="text-center mb-8">
                  <button 
                    onClick={() => document.getElementById('media-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Videos & Audio Files
                  </button>
                </div>
              </div>
            </section>

            {/* Public Singing Section */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-6 text-center">
                Public Singing & Music Evenings
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    We specialize in organizing and producing unique and exciting public singing events, combining classic Israeli music with contemporary songs. Each evening is personally tailored to the audience and purpose.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    We offer a wide variety of special concept evenings - tribute evenings to beloved artists, themed evenings around different musical periods, and musical quizzes.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our experience in hosting public singing events allows us to create a warm and connecting atmosphere, where every participant feels part of the shared musical experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Media Section */}
            {/* Videos and Audio Files */}
            <div id="media-section">
              <div id="video-section">
                <VideoSection videos={videos} locale="en" />
              </div>
              <div id="audio-section">
                <AudioSection audioFiles={audioFiles} locale="en" />
              </div>
            </div>

            {/* Lectures & Content Section */}
            <section id="lectures-content" className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-8 text-center">
                Lectures & Content
              </h2>
              
              {/* Introduction */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    We offer inspiring lectures and high-quality content production across various fields. 
                    Our lectures combine rich practical experience with engaging presentation, creating 
                    meaningful learning experiences for diverse audiences.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    From music and community topics to technology and innovation, we create content that 
                    educates, inspires, and connects people through shared knowledge and experiences.
                  </p>
                </div>
              </div>
              
              {/* Two ads side by side */}
              <div className="w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 gap-4 mb-8">
                  {/* First ad - Lectures & Content */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col sm:p-8 p-4">
                  <div className="flex justify-center flex-grow">
                    <div className="relative">
                      <img 
                        src="/mc.png" 
                        alt="Music & Community - Yochai Aflalo"
                        className="w-full max-w-sm h-[506px] sm:h-[506px] h-[200px] object-cover rounded-lg shadow-md"
                      />
                      {/* Logo in corner of image */}
                      <div className="absolute -top-12 -left-4">
                        <img 
                          src="/logo.png" 
                          alt="Logo"
                          className="w-48 h-48 object-contain"
                        />
                      </div>
                      
                      {/* Download button - center of ad */}
                      <div className="flex justify-center mt-6">
                        <button 
                        onClick={async () => {
                          try {
                            // Create canvas
                            const canvas = document.createElement('canvas')
                            const ctx = canvas.getContext('2d')
                            
                            // Load main image
                            const mainImg = new Image()
                            mainImg.crossOrigin = 'anonymous'
                            mainImg.onload = () => {
                              // Load logo
                              const logoImg = new Image()
                              logoImg.crossOrigin = 'anonymous'
                              logoImg.onload = () => {
                                // Set canvas size
                                canvas.width = mainImg.width
                                canvas.height = mainImg.height
                                
                                // Draw main image
                                ctx.drawImage(mainImg, 0, 0)
                                
                                // Calculate logo position and size
                                const logoSize = Math.min(mainImg.width * 0.3, mainImg.height * 0.3)
                                const logoX = mainImg.width - logoSize - 20
                                const logoY = 20
                                
                                // Draw logo
                                ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize)
                                
                                // Convert to blob and download
                                canvas.toBlob((blob) => {
                                  const url = URL.createObjectURL(blob)
                                  const a = document.createElement('a')
                                  a.href = url
                                  a.download = 'music-community-ad.png'
                                  document.body.appendChild(a)
                                  a.click()
                                  document.body.removeChild(a)
                                  URL.revokeObjectURL(url)
                                })
                              }
                              logoImg.src = '/logo.png'
                            }
                            mainImg.src = '/mc.png'
                          } catch (error) {
                            console.error('Error creating image:', error)
                          }
                        }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Download Ad
                      </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second ad - Workshops */}
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                  <div className="flex justify-center flex-grow">
                    <div className="relative">
                      <img 
                        src="/sadnat bina.png" 
                        alt="Sadnat Bina Workshops"
                        className="w-full max-w-sm h-[506px] sm:h-[506px] h-[200px] object-cover rounded-lg shadow-md"
                      />
                      
                      {/* Download button - center of ad */}
                      <div className="flex justify-center mt-6">
                        <button 
                        onClick={async () => {
                          try {
                            // Create canvas
                            const canvas = document.createElement('canvas')
                            const ctx = canvas.getContext('2d')
                            
                            // Load image
                            const mainImg = new Image()
                            mainImg.crossOrigin = 'anonymous'
                            mainImg.onload = () => {
                              // Set canvas size
                              canvas.width = mainImg.width
                              canvas.height = mainImg.height
                              
                              // Draw image
                              ctx.drawImage(mainImg, 0, 0)
                              
                              // Convert to blob and download
                              canvas.toBlob((blob) => {
                                const url = URL.createObjectURL(blob)
                                const a = document.createElement('a')
                                a.href = url
                                a.download = 'sadnat-bina-workshops-ad.png'
                                a.click()
                                URL.revokeObjectURL(url)
                              })
                            }
                            mainImg.src = '/sadnat bina.png'
                          } catch (error) {
                            console.error('Error downloading image:', error)
                          }
                        }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Download Ad
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        {/* Community Training Section */}
        <section id="community-training" className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-8 text-center">
            Community Training
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto">
            Professional training programs for community leaders, youth coordinators, and cultural event organizers.
          </p>
        </section>
      </div>
      </div>
      <Footer d={d} locale="en" />
    </main>
  )
}
