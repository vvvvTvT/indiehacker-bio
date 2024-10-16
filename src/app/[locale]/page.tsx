'use client'

import { FaTelegram } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { socialLinks } from '@/data/socialLinks'
import { projects } from '@/data/projects'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialMedia from '@/components/SocialMedia'
import Projects from '@/components/Projects'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [searchTerm, setSearchTerm] = useState('')

  const [socialRef, socialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectRef, projectInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const t = useTranslations()
  const { locale } = useParams()

  const filteredProjects = projects.filter(project =>
    project.name[locale as keyof typeof project.name].toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description[locale as keyof typeof project.description].toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredSocialLinks = socialLinks.filter(link =>
    link.name[locale as keyof typeof link.name].toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.description[locale as keyof typeof link.description].toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center p-4 md:p-24 bg-white dark:bg-gray-900 dark:text-white">
        <div className="w-full max-w-6xl mt-12 flex flex-col space-y-8 p-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl mb-2">{t('main.title')}</h1>
            <p className="text-lg">
              {t('main.subtitle')}
            </p>
          </div>

          <div id="telegram" className="mb-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md border border-gray-300 dark:border-gray-700 max-w-md mx-auto">
              <h2 className="font-bold mb-2 flex items-center justify-center">
                <FaTelegram className="mr-2 text-2xl" />
                {t('main.telegram.title')}
              </h2>
              <p className="text-xs mb-2 text-center">
                {t('main.telegram.description')}
              </p>
              <a
                href="https://biobio.top/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                {t('main.telegram.button')}
              </a>
            </div>
          </div>

          <div className="mb-8">
            <input
              type="text"
              placeholder={t('main.searchPlaceholder')}
              className="w-full p-2 border rounded-md"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex-grow overflow-auto">
            <div className="flex flex-col gap-8">
              <SocialMedia 
                socialInView={socialInView} 
                filteredSocialLinks={filteredSocialLinks}
                socialRef={socialRef}
              />
              <Projects
                searchTerm={searchTerm}
                projectInView={projectInView}
                visibleProjects={visibleProjects}
                setVisibleProjects={setVisibleProjects}
                filteredProjects={filteredProjects}
                projectRef={projectRef}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
