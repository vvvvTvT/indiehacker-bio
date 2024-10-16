import { FaSun, FaMoon, FaTelegram, FaUsers, FaProjectDiagram, FaGithub } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { IconType } from 'react-icons'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

interface NavButtonProps {
  href: string;
  text: string;
  icon: IconType;
}

const NavButton: React.FC<NavButtonProps> = ({ href, text, icon: Icon }) => {
  return (
    <a
      href={href}
      className="nav-button text-xs md:text-sm"
    >
      <Icon className="text-xl" />
      <span className="hidden md:inline ml-2 whitespace-nowrap">{text}</span>
    </a>
  )
}

export default function Header() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations('header')

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl text-gray-800 dark:text-white">{t('title')}</h1>
        <div className="flex-1 flex justify-center space-x-2 max-w-md mx-auto">
          <NavButton href="#telegram" text={t('telegramChannel')} icon={FaTelegram} />
          <NavButton href="#social" text={t('socialMedia')} icon={FaUsers} />
          <NavButton href="#projects" text={t('projects')} icon={FaProjectDiagram} />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {theme === "dark" ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
          <LanguageSwitcher />
          <a
            href="https://github.com/wincatcher/indiehacker-bio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </nav>
  )
}
