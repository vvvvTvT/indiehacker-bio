import Link from 'next/link'
import { SocialLink } from '@/types/socialLink'

interface SocialMediaProps {
  searchTerm: string;
  socialInView: boolean;
  filteredSocialLinks: SocialLink[];
  socialRef: (node?: Element | null | undefined) => void;
}

export default function SocialMedia({ searchTerm, socialInView, filteredSocialLinks, socialRef }: SocialMediaProps) {
  return (
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
  )
}
