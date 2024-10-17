import Link from 'next/link'
import { SocialLink } from '@/types/socialLink'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { FaUsers } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface SocialMediaProps {
  socialInView: boolean;
  filteredSocialLinks: SocialLink[];
  socialRef: (node?: Element | null | undefined) => void;
}

export default function SocialMedia({ socialInView, filteredSocialLinks, socialRef }: SocialMediaProps) {
  const t = useTranslations('main.socialMedia')
  const { locale } = useParams()

  return (
    <motion.div
      id="social"
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: socialInView ? 1 : 0, y: socialInView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      ref={socialRef}
    >
      <div className="flex items-center mb-4">
        <FaUsers className="mr-2 text-xl" />
        <h3 className="font-bold">{t('title')}</h3>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {filteredSocialLinks.map((link, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${link.color} p-6 rounded-md hover:opacity-80 transition-colors border border-gray-300 dark:border-gray-700`}
            >
              <div className="flex items-center h-24">
                <link.icon className="mr-4 text-2xl flex-shrink-0" />
                <div>
                  <h2 className="font-bold">{link.name[locale as keyof typeof link.name]}</h2>
                  <p className="text-xs line-clamp-3">{link.description[locale as keyof typeof link.description]}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
