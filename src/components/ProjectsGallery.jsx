'use client'

import { useState } from 'react'

export default function ProjectsGallery({ isOpen, onClose, projectType, locale = 'he' }) {
  // פרויקטים לפי סוג
  const projects = {
    apps: {
      he: [
        {
          id: 'room-management',
          title: 'מערכת ניהול חדרים',
          description: 'מערכת מתקדמת לניהול הזמנות חדרים במתנ"ס - ניהול לוח זמנים, הזמנות, תשלומים ודוחות',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
          images: [
            '/projects/room-management-1.png',
            '/projects/room-management-2.png',
            '/projects/room-management-3.png'
          ]
        },
        {
          id: 'dance-school',
          title: 'אפליקציה לניהול בית ספר למחול',
          description: 'מערכת מקיפה לניהול תלמידים, שיעורים ונוכחות בבית ספר למחול',
          technologies: ['React Native', 'Firebase', 'Node.js'],
          images: [
            '/projects/dance-school-1.png',
            '/projects/dance-school-2.png',
            '/projects/dance-school-3.png',
            '/projects/dance-school-4.png'
          ]
        },
        {
          id: 'rehearsal-room-management',
          title: 'אפליקציה לניהול חדר חזרות',
          description: 'פלטפורמה לניהול חדר חזרות - הזמנות, לוח זמנים ומעקב פעילויות',
          technologies: ['Vue.js', 'Express', 'MySQL'],
          images: [
            '/projects/rehearsal-room-1.png',
            '/projects/rehearsal-room-2.png',
            '/projects/rehearsal-room-3.png'
          ]
        }
      ],
      en: [
        {
          id: 'room-management',
          title: 'Room Management System',
          description: 'Advanced system for managing room bookings in community centers - schedule management, bookings, payments and reports',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
          images: [
            '/projects/room-management-1.png',
            '/projects/room-management-2.png',
            '/projects/room-management-3.png'
          ]
        },
        {
          id: 'dance-school',
          title: 'Dance School Management App',
          description: 'Comprehensive system for managing students, classes and attendance at a dance school',
          technologies: ['React Native', 'Firebase', 'Node.js'],
          images: [
            '/projects/dance-school-1.png',
            '/projects/dance-school-2.png',
            '/projects/dance-school-3.png',
            '/projects/dance-school-4.png'
          ]
        },
        {
          id: 'rehearsal-room-management',
          title: 'Rehearsal Room Management App',
          description: 'Platform for managing rehearsal rooms - bookings, schedules and activity tracking',
          technologies: ['Vue.js', 'Express', 'MySQL'],
          images: [
            '/projects/rehearsal-room-1.png',
            '/projects/rehearsal-room-2.png',
            '/projects/rehearsal-room-3.png'
          ]
        }
      ]
    },
    automation: {
      he: [
        {
          id: 'automation-1',
          title: 'מערכת אוטומציה לניהול תהליכים',
          description: 'מערכת אוטומציה חכמה לניהול תהליכים עסקיים, חיסכון בזמן ושיפור יעילות - מבוססת על פלטפורמת Make',
          technologies: ['Make (Integromat)', 'Automation', 'API Integration'],
          images: [
            '/projects/automation-1.png',
            '/projects/automation-2.png'
          ]
        }
      ],
      en: [
        {
          id: 'automation-1',
          title: 'Process Automation System',
          description: 'Smart automation system for managing business processes, saving time and improving efficiency - powered by Make platform',
          technologies: ['Make (Integromat)', 'Automation', 'API Integration'],
          images: [
            '/projects/automation-1.png',
            '/projects/automation-2.png'
          ]
        }
      ]
    }
  }

  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const t = {
    he: {
      title: 'פרויקטים שלנו',
      appsTitle: 'אפליקציות ווב ואתרים',
      automationTitle: 'מערכות אוטומציה',
      close: 'סגור',
      viewDetails: 'צפייה בפרטים',
      technologies: 'טכנולוגיות',
      next: 'הבא',
      prev: 'הקודם',
      noImage: 'תמונה לא זמינה'
    },
    en: {
      title: 'Our Projects',
      appsTitle: 'Web Applications & Websites',
      automationTitle: 'Automation Systems',
      close: 'Close',
      viewDetails: 'View Details',
      technologies: 'Technologies',
      next: 'Next',
      prev: 'Previous',
      noImage: 'Image not available'
    }
  }

  const text = t[locale] || t.he
  const projectList = projects[projectType]?.[locale] || []

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-3xl z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">
                {projectType === 'apps' ? text.appsTitle : text.automationTitle}
              </h2>
              <p className="text-blue-100 text-sm">{text.title}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
          {selectedProject ? (
            // Project Details View
            <div className="space-y-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 mb-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>{locale === 'he' ? 'חזרה לרשימה' : 'Back to list'}</span>
              </button>

              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    {text.technologies}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Gallery */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {locale === 'he' ? 'תמונות מהפרויקט' : 'Project Screenshots'}
                    </h4>
                    <div className="relative">
                      {/* Main Image */}
                      <div className="relative bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                        {selectedProject.images[currentImageIndex] ? (
                          <img
                            src={selectedProject.images[currentImageIndex]}
                            alt={selectedProject.title}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                        ) : null}
                        <div className="hidden absolute inset-0 items-center justify-center text-gray-400">
                          <div className="text-center">
                            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p>{text.noImage}</p>
                          </div>
                        </div>

                        {/* Navigation Arrows */}
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={() => setCurrentImageIndex((prev) => 
                                prev === 0 ? selectedProject.images.length - 1 : prev - 1
                              )}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={() => setCurrentImageIndex((prev) => 
                                prev === selectedProject.images.length - 1 ? 0 : prev + 1
                              )}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnails */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                          {selectedProject.images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                currentImageIndex === idx 
                                  ? 'border-blue-500 ring-2 ring-blue-200' 
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <img
                                src={img}
                                alt={`${selectedProject.title} - ${idx + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Projects Grid
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectList.map((project) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project)
                    setCurrentImageIndex(0)
                  }}
                  className="group bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-200 dark:border-gray-600"
                >
                  {/* Project Image Preview */}
                  <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl overflow-hidden mb-4 aspect-video flex items-center justify-center">
                    {project.images && project.images[0] ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div className="hidden absolute inset-0 items-center justify-center text-gray-400">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-gray-500 dark:text-gray-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm">
                    <span>{text.viewDetails}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {locale === 'he' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      )}
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

