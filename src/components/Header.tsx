import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">wincatcher</h1>
        <div className="space-x-4 flex">
          <a href="#telegram" className="hover:underline text-gray-600 dark:text-gray-300 px-3 py-2 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
            Telegram Channel
          </a>
          <a href="#social" className="hover:underline text-gray-600 dark:text-gray-300 px-3 py-2 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
            Social Media
          </a>
          <a href="#projects" className="hover:underline text-gray-600 dark:text-gray-300 px-3 py-2 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
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
  )
}
