import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-sm text-center">
          {t('copyright', { year: new Date().getFullYear() })}{" "}
          <a
            href="https://biobio.top/"
            className="link link-hover text-blue-400 hover:text-blue-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            wincatcher
          </a>
        </p>
      </div>
    </footer>
  )
}
