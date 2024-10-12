'use client'

import { FaTelegram } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { socialLinks } from '@/data/socialLinks'
import { projects } from '@/data/projects'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialMedia from '@/components/SocialMedia'
import Projects from '@/components/Projects'

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
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

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredSocialLinks = socialLinks.filter(link =>
    link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center p-4 md:p-24 bg-white dark:bg-gray-900 dark:text-white">
        <div className="w-full max-w-6xl mt-12 flex flex-col space-y-8 p-4">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">wincatcher</h1>
            <p className="text-lg">
              Independent developer with a passion for creating innovative
              solutions. Over 10+ projects delivered. Always striving for
              excellence and continuous improvement.
            </p>
          </div>

          <div id="telegram" className="mb-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md border border-gray-300 dark:border-gray-700 max-w-md mx-auto">
              <h2 className="font-bold mb-2 flex items-center justify-center">
                <FaTelegram className="mr-2 text-2xl" />
                Join wincatcher&apos;s Telegram Channel
              </h2>
              <p className="text-xs mb-2 text-center">
                Get the latest updates on ongoing projects (usually AI coding,
                programming, and web apps)
              </p>
              <a
                href="https://t.me/wincatcher"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Subscribe to Telegram Channel
              </a>
            </div>
          </div>

          <div className="mb-8">
            <input
              type="text"
              placeholder="Search projects or social media"
              className="w-full p-2 border rounded-md"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex-grow overflow-auto">
            <div className="flex flex-col gap-8">
              <SocialMedia 
                searchTerm={searchTerm} 
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
