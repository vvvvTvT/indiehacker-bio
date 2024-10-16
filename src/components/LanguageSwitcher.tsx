import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { FaLanguage } from 'react-icons/fa'

const locales = ['en', 'zh', 'ja', 'zh-Hant']

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div className="relative group">
      <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
        <FaLanguage className="text-xl" />
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
        <div className="p-2"> {/* 添加一个额外的div来扩大可点击区域 */}
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${
                currentLocale === locale ? 'font-bold' : ''
              }`}
            >
              {locale === 'en' ? 'English' : locale === 'zh' ? '简体中文' : locale === 'ja' ? '日本語' : '繁體中文'}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
