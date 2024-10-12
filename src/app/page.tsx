'use client'

import Link from 'next/link'
import { FaTelegram } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { FaSun, FaMoon } from 'react-icons/fa'
import { socialLinks } from '@/data/socialLinks'
import { projects } from '@/data/projects'

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
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
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 dark:bg-gray-900 dark:text-white">
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">wincatcher</h1>
          <div className="space-x-4">
            <a href="#telegram" className="hover:underline">
              Telegram Channel
            </a>
            <a href="#social" className="hover:underline">
              Social Media
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === "dark" ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </button>
        </div>
      </nav>

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
            <div
              id="social"
              className={`space-y-4 transition-opacity duration-1000 ${
                socialInView ? "opacity-100" : "opacity-0"
              }`}
              ref={socialRef}
            >
              <h3 className="font-bold mb-4">Social Media</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSocialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} p-6 rounded-md hover:opacity-80 transition-colors border border-gray-300 dark:border-gray-700`}
                  >
                    <div className="flex items-center">
                      <link.icon className="mr-4 text-2xl flex-shrink-0" />
                      <div>
                        <h2 className="font-bold">{link.name}</h2>
                        <p className="text-xs">{link.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div
              id="projects"
              className={`transition-opacity duration-1000 ${
                projectInView ? "opacity-100" : "opacity-0"
              }`}
              ref={projectRef}
            >
              <h3 className="font-bold mb-4">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects
                  .slice(0, visibleProjects)
                  .map((project, index) => (
                    <div
                      key={index}
                      className={`${project.color} p-6 rounded-md border border-gray-300 dark:border-gray-700`}
                    >
                      <div className="flex items-center">
                        <project.icon className="mr-4 text-2xl flex-shrink-0" />
                        <div>
                          <h2 className="font-bold">{project.name}</h2>
                          <p className="text-xs mb-2">{project.description}</p>
                          <a
                            href="#"
                            className="text-blue-500 hover:underline text-sm"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {visibleProjects < filteredProjects.length && (
                <div className="flex justify-center">
                  <button
                    onClick={() => setVisibleProjects((prev) => prev + 6)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 w-full">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">wincatcher</h3>
              <p className="text-sm text-gray-300">
                Independent developer creating innovative solutions
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="text-sm">
                <li>
                  <a
                    href="#telegram"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Telegram Channel
                  </a>
                </li>
                <li>
                  <a
                    href="#social"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-right">
              <p className="text-sm">
                &copy; 2024 Wincatcher. All rights reserved.
              </p>
              <div className="mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors mr-4"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}