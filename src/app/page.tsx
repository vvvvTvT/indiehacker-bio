'use client'

import Link from 'next/link'
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTiktok, FaPinterest, FaReddit, FaMedium } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { IoDocumentText } from 'react-icons/io5'
import { FaCode, FaShoppingCart, FaCubes, FaCalendarAlt, FaVideo, FaDumbbell, FaLanguage } from 'react-icons/fa'
import { BiCast } from 'react-icons/bi'
import { AiOutlineRobot } from 'react-icons/ai'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const socialLinks = [
    { name: 'follow @iannuttall', icon: FaTwitter, url: 'https://twitter.com/iannuttall', description: 'this is where i\'m most active', color: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'subscribe to my youtube', icon: FaYoutube, url: 'https://www.youtube.com/@iannuttall', description: 'if you follow me i get cool gold videos', color: 'bg-red-100 dark:bg-red-900' },
    { name: 'connect on linkedin', icon: FaLinkedin, url: 'https://www.linkedin.com/in/iannuttall/', description: 'i\'m rarely here professionally enough to be on here', color: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'follow on github', icon: FaGithub, url: 'https://github.com/iannuttall', description: 'check out my open source projects', color: 'bg-gray-100 dark:bg-gray-800' },
    { name: 'follow on instagram', icon: FaInstagram, url: 'https://www.instagram.com/iannuttall', description: 'behind the scenes of my projects', color: 'bg-pink-100 dark:bg-pink-900' },
    { name: 'connect on facebook', icon: FaFacebook, url: 'https://www.facebook.com/iannuttall', description: 'occasional updates and thoughts', color: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'follow on tiktok', icon: FaTiktok, url: 'https://www.tiktok.com/@iannuttall', description: 'short-form content and tips', color: 'bg-gray-100 dark:bg-gray-800' },
    { name: 'follow on pinterest', icon: FaPinterest, url: 'https://www.pinterest.com/iannuttall', description: 'visual inspiration and project ideas', color: 'bg-red-100 dark:bg-red-900' },
    { name: 'join me on reddit', icon: FaReddit, url: 'https://www.reddit.com/user/iannuttall', description: 'discussions and community engagement', color: 'bg-orange-100 dark:bg-orange-900' },
    { name: 'read on medium', icon: FaMedium, url: 'https://medium.com/@iannuttall', description: 'in-depth articles and thought pieces', color: 'bg-green-100 dark:bg-green-900' },
  ]

  const projects = [
    { name: 'create pages', description: 'No-code tool to create programmatic web pages. Streamline your web development process and create dynamic, data-driven pages without writing a single line of code. Perfect for marketers and entrepreneurs.', icon: IoDocumentText, color: 'bg-orange-100 dark:bg-orange-900' },
    { name: 'practical programmatic', description: 'Comprehensive programmatic SEO course. Learn how to scale your content creation and optimize for search engines using data-driven techniques. Ideal for SEO professionals and content creators looking to boost their online presence.', icon: FaCode, color: 'bg-green-100 dark:bg-green-900' },
    { name: 'cursor casts', description: 'Learn how to code using cursor.so. Dive into interactive coding tutorials and real-time collaboration features. Enhance your programming skills with hands-on exercises and expert guidance.', icon: BiCast, color: 'bg-gray-100 dark:bg-gray-800' },
    { name: 'AI writing assistant', description: 'AI-powered tool for content creation. Leverage advanced language models to generate high-quality articles, blog posts, and marketing copy. Boost your productivity and overcome writer\'s block with intelligent suggestions.', icon: AiOutlineRobot, color: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'e-commerce platform', description: 'Scalable solution for online stores. Build and manage your e-commerce business with ease. Features include inventory management, secure payments, and customizable storefronts to help you grow your online presence.', icon: FaShoppingCart, color: 'bg-purple-100 dark:bg-purple-900' },
    { name: 'blockchain explorer', description: 'Comprehensive tool for viewing blockchain transactions. Dive deep into cryptocurrency networks, analyze token movements, and track smart contract interactions. Essential for researchers and crypto enthusiasts.', icon: FaCubes, color: 'bg-yellow-100 dark:bg-yellow-900' },
    { name: 'social media scheduler', description: 'Automate your social media posts across multiple platforms. Plan and schedule content in advance, analyze post performance, and optimize your social media strategy. Perfect for marketers and content creators.', icon: FaCalendarAlt, color: 'bg-pink-100 dark:bg-pink-900' },
    { name: 'virtual event platform', description: 'Host engaging online conferences and meetups. Create immersive virtual spaces, manage attendees, and facilitate networking opportunities. Ideal for event organizers looking to expand their reach beyond physical limitations.', icon: FaVideo, color: 'bg-indigo-100 dark:bg-indigo-900' },
    { name: 'fitness tracking app', description: 'Monitor your workouts and track your fitness progress. Set goals, log exercises, and visualize your improvements over time. Integrates with popular fitness devices and offers personalized workout recommendations.', icon: FaDumbbell, color: 'bg-red-100 dark:bg-red-900' },
    { name: 'language learning game', description: 'Fun and interactive way to learn new languages. Gamify your language learning experience with challenges, quizzes, and real-world scenarios. Suitable for beginners and advanced learners alike.', icon: FaLanguage, color: 'bg-teal-100 dark:bg-teal-900' },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 dark:bg-gray-900 dark:text-white">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>

      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">ian nuttall</h1>
        <p className="text-sm mb-8 text-center">
          life: serial internet biz builder. 100+ exits. always learning. usually from my mistakes.
        </p>

        <div className="space-y-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md border border-gray-300 dark:border-gray-700">
            <h2 className="font-bold mb-2 flex items-center">
              <HiMail className="mr-2 text-2xl" />
              join ian's list
            </h2>
            <p className="text-xs mb-2">sporadic emails where i talk about what i'm working on (usually ai coding, programming and web apps)</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Type your email and hit enter to join"
                className="flex-grow p-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button type="submit" className="bg-red-500 text-white px-4 rounded-r-md hover:bg-red-600 transition-colors">
                Go
              </button>
            </form>
          </div>

          {socialLinks.map((link, index) => (
            <Link key={index} href={link.url} className={`block ${link.color} p-4 rounded-md hover:opacity-80 transition-colors border border-gray-300 dark:border-gray-700`}>
              <h2 className="font-bold flex items-center">
                <link.icon className="mr-2 text-2xl" />
                {link.name}
              </h2>
              <p className="text-xs">{link.description}</p>
            </Link>
          ))}

          <h3 className="font-bold mt-8 mb-4">projects</h3>

          {projects.map((project, index) => (
            <Link key={index} href="#" className={`block ${project.color} p-4 rounded-md hover:opacity-80 transition-colors border border-gray-300 dark:border-gray-700`}>
              <h2 className="font-bold flex items-center">
                <project.icon className="mr-2 text-2xl" />
                {project.name}
              </h2>
              <p className="text-xs">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}