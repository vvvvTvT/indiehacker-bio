'use client'

import Link from 'next/link'
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTiktok, FaPinterest, FaReddit, FaMedium, FaTelegram, FaLeaf, FaImage, FaHome, FaChartLine } from 'react-icons/fa'
import { FaShoppingCart, FaCubes, FaCalendarAlt, FaVideo, FaDumbbell, FaLanguage } from 'react-icons/fa'
import { AiOutlineRobot } from 'react-icons/ai'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { FaSun, FaMoon } from 'react-icons/fa'

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

  const socialLinks = [
    { name: 'follow @wincatcher', icon: FaTwitter, url: 'https://twitter.com/wincatcher', description: 'This is where I\'m most active', color: 'bg-[#1DA1F2] text-white' },
    { name: 'Subscribe to my YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@wincatcher', description: 'If you follow me I get cool gold videos', color: 'bg-[#FF0000] text-white' },
    { name: 'Connect on LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/wincatcher/', description: 'I\'m rarely here professionally enough to be on here', color: 'bg-[#0A66C2] text-white' },
    { name: 'Follow on GitHub', icon: FaGithub, url: 'https://github.com/wincatcher', description: 'Check out my open source projects', color: 'bg-[#181717] text-white' },
    { name: 'Follow on Instagram', icon: FaInstagram, url: 'https://www.instagram.com/wincatcher', description: 'Behind the scenes of my projects', color: 'bg-[#E4405F] text-white' },
    { name: 'Connect on Facebook', icon: FaFacebook, url: 'https://www.facebook.com/wincatcher', description: 'Occasional updates and thoughts', color: 'bg-[#1877F2] text-white' },
    { name: 'Follow on TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@wincatcher', description: 'Short-form content and tips', color: 'bg-[#000000] text-white' },
    { name: 'Follow on Pinterest', icon: FaPinterest, url: 'https://www.pinterest.com/wincatcher', description: 'Visual inspiration and project ideas', color: 'bg-[#BD081C] text-white' },
    { name: 'Join me on Reddit', icon: FaReddit, url: 'https://www.reddit.com/user/wincatcher', description: 'Discussions and community engagement', color: 'bg-[#FF4500] text-white' },
    { name: 'Read on Medium', icon: FaMedium, url: 'https://medium.com/@wincatcher', description: 'In-depth articles and thought pieces', color: 'bg-[#000000] text-white' },
  ]

  const projects = [
    { name: 'AI Code Assistant', description: 'An advanced AI-powered coding assistant that helps developers write, debug, and optimize code across multiple programming languages. Features include real-time code suggestions, automated bug detection, and performance optimization tips.', icon: AiOutlineRobot, color: 'bg-purple-200 dark:bg-purple-800' },
    { name: 'Blockchain Explorer Pro', description: 'A comprehensive blockchain analytics platform for cryptocurrency enthusiasts and researchers. Dive deep into transaction histories, smart contract interactions, and network statistics across multiple blockchain networks.', icon: FaCubes, color: 'bg-blue-200 dark:bg-blue-800' },
    { name: 'EcoTrack', description: 'An innovative app that helps individuals and businesses track and reduce their carbon footprint. Features include personalized sustainability tips, carbon offset recommendations, and integration with smart home devices for energy optimization.', icon: FaLeaf, color: 'bg-green-200 dark:bg-green-800' },
    { name: 'AI Image Generator', description: 'A powerful tool that uses advanced AI algorithms to generate unique and creative images based on text descriptions. Perfect for designers, marketers, and content creators looking for custom visuals.', icon: FaImage, color: 'bg-indigo-200 dark:bg-indigo-800' },
    { name: 'Smart Home Hub', description: 'A centralized platform to control and automate all your smart home devices. Integrate lights, thermostats, security systems, and more for a seamless and efficient home experience.', icon: FaHome, color: 'bg-yellow-200 dark:bg-yellow-800' },
    { name: 'Crypto Portfolio Tracker', description: 'An all-in-one solution for managing and tracking your cryptocurrency investments. Features real-time price updates, portfolio analytics, and tax reporting tools.', icon: FaChartLine, color: 'bg-red-200 dark:bg-red-800' },
    { name: 'AI Writing Assistant', description: 'AI-powered tool for content creation. Leverage advanced language models to generate high-quality articles, blog posts, and marketing copy. Boost your productivity and overcome writer\'s block with intelligent suggestions.', icon: AiOutlineRobot, color: 'bg-teal-200 dark:bg-teal-800' },
    { name: 'E-commerce Platform', description: 'Scalable solution for online stores. Build and manage your e-commerce business with ease. Features include inventory management, secure payments, and customizable storefronts to help you grow your online presence.', icon: FaShoppingCart, color: 'bg-pink-200 dark:bg-pink-800' },
    { name: 'Blockchain Explorer', description: 'Comprehensive tool for viewing blockchain transactions. Dive deep into cryptocurrency networks, analyze token movements, and track smart contract interactions. Essential for researchers and crypto enthusiasts.', icon: FaCubes, color: 'bg-orange-200 dark:bg-orange-800' },
    { name: 'Social Media Scheduler', description: 'Automate your social media posts across multiple platforms. Plan and schedule content in advance, analyze post performance, and optimize your social media strategy. Perfect for marketers and content creators.', icon: FaCalendarAlt, color: 'bg-cyan-200 dark:bg-cyan-800' },
    { name: 'Virtual Event Platform', description: 'Host engaging online conferences and meetups. Create immersive virtual spaces, manage attendees, and facilitate networking opportunities. Ideal for event organizers looking to expand their reach beyond physical limitations.', icon: FaVideo, color: 'bg-lime-200 dark:bg-lime-800' },
    { name: 'Fitness Tracking App', description: 'Monitor your workouts and track your fitness progress. Set goals, log exercises, and visualize your improvements over time. Integrates with popular fitness devices and offers personalized workout recommendations.', icon: FaDumbbell, color: 'bg-amber-200 dark:bg-amber-800' },
    { name: 'Language Learning Game', description: 'Fun and interactive way to learn new languages. Gamify your language learning experience with challenges, quizzes, and real-world scenarios. Suitable for beginners and advanced learners alike.', icon: FaLanguage, color: 'bg-emerald-200 dark:bg-emerald-800' },
  ]

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
            <a href="#telegram" className="hover:underline">Telegram Channel</a>
            <a href="#social" className="hover:underline">Social Media</a>
            <a href="#projects" className="hover:underline">Projects</a>
          </div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </div>
      </nav>

      <div className="w-full max-w-6xl mt-6 flex flex-col space-y-8 p-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">wincatcher</h1>
          <p className="text-lg">Serial internet biz builder. 100+ exits. Always learning, usually from mistakes.</p>
        </div>

        <div id="telegram" className="mb-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md border border-gray-300 dark:border-gray-700 max-w-md mx-auto">
            <h2 className="font-bold mb-2 flex items-center justify-center">
              <FaTelegram className="mr-2 text-2xl" />
              Join wincatcher&apos;s Telegram Channel
            </h2>
            <p className="text-xs mb-2 text-center">Get the latest updates on ongoing projects (usually AI coding, programming, and web apps)</p>
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
            <div id="social" className={`space-y-4 transition-opacity duration-1000 ${socialInView ? 'opacity-100' : 'opacity-0'}`} ref={socialRef}>
              <h3 className="font-bold mb-4">Social Media</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSocialLinks.map((link, index) => (
                  <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`block ${link.color} p-6 rounded-md hover:opacity-80 transition-colors border border-gray-300 dark:border-gray-700`}>
                    <h2 className="font-bold flex items-center">
                      <link.icon className="mr-2 text-2xl" />
                      {link.name}
                    </h2>
                    <p className="text-xs">{link.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div id="projects" className={`transition-opacity duration-1000 ${projectInView ? 'opacity-100' : 'opacity-0'}`} ref={projectRef}>
              <h3 className="font-bold mb-4">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                  <div key={index} className={`${project.color} p-6 rounded-md border border-gray-300 dark:border-gray-700`}>
                    <h2 className="font-bold flex items-center">
                      <project.icon className="mr-2 text-2xl" />
                      {project.name}
                    </h2>
                    <p className="text-xs mb-2">{project.description}</p>
                    <a href="#" className="text-blue-500 hover:underline text-sm">Learn More</a>
                  </div>
                ))}
              </div>
              {visibleProjects < filteredProjects.length && (
                <div className="flex justify-center">
                  <button
                    onClick={() => setVisibleProjects(prev => prev + 6)}
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

      <footer className="mt-16 bg-gray-100 dark:bg-gray-800 py-8 w-full">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Wincatcher. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}