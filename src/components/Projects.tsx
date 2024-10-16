import { Project } from '@/types/project'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

interface ProjectsProps {
  searchTerm: string;
  projectInView: boolean;
  visibleProjects: number;
  setVisibleProjects: React.Dispatch<React.SetStateAction<number>>;
  filteredProjects: Project[];
  projectRef: (node?: Element | null | undefined) => void;
}

export default function Projects({ projectInView, visibleProjects, setVisibleProjects, filteredProjects, projectRef }: ProjectsProps) {
  const t = useTranslations('main.projects')
  const { locale } = useParams()

  return (
    <div
      id="projects"
      className={`transition-opacity duration-1000 ${
        projectInView ? "opacity-100" : "opacity-0"
      }`}
      ref={projectRef}
    >
      <h3 className="font-bold mb-4">{t('title')}</h3>
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
                  <h2 className="font-bold">{project.name[locale as keyof typeof project.name]}</h2>
                  <p className="text-xs mb-2">{project.description[locale as keyof typeof project.description]}</p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    {t('learnMore')}
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      {visibleProjects < filteredProjects.length && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleProjects(prev => prev + 6)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            {t('loadMore')}
          </button>
        </div>
      )}
    </div>
  )
}
