import { Project } from '@/types/project'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { FaProjectDiagram, FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface ProjectsProps {
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
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: projectInView ? 1 : 0, y: projectInView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      ref={projectRef}
    >
      <div className="flex items-center mb-4">
        <FaProjectDiagram className="mr-2 text-xl" />
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
        {filteredProjects
          .slice(0, visibleProjects)
          .map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <div
                className={`${project.color} p-6 rounded-md border border-gray-300 dark:border-gray-700 h-36 flex flex-col`}
              >
                <div className="flex items-start">
                  <project.icon className="mr-4 text-2xl flex-shrink-0" />
                  <div className="flex-grow">
                    <h2 className="font-bold mb-2">{project.name[locale as keyof typeof project.name]}</h2>
                    <p className="text-xs mb-2 line-clamp-2">{project.description[locale as keyof typeof project.description]}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="text-blue-500 hover:underline text-sm dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    {t('learnMore')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>
      {visibleProjects < filteredProjects.length && (
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setVisibleProjects(prev => prev + 6)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center"
          >
            {t('loadMore')}
            <FaChevronDown className="ml-2" />
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}
