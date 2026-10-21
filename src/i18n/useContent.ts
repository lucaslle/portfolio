import { useMemo } from 'react'
import { EDUCATION, JOBS, PROJECTS, SECTION_IDS, SKILLS, STATS } from '../data/portfolio'
import type { Education, Job, NavItem, Project, Skill, Stat } from '../types'
import { useTranslation } from './useTranslation'

type Content = {
  navItems: NavItem[]
  projects: Project[]
  skills: Skill[]
  jobs: Job[]
  education: Education[]
  stats: Stat[]
}

/**
 * Assemble les données neutres (ids, niveaux, technos) avec les textes
 * de la langue courante. Les composants ne voient qu'un objet prêt à
 * afficher et ignorent tout de l'internationalisation.
 */
export const useContent = (): Content => {
  const { t } = useTranslation()

  return useMemo(
    () => ({
      navItems: SECTION_IDS.map((id) => ({ id, label: t.nav[id] })),
      projects: PROJECTS.map((project) => ({ ...project, ...t.projects[project.id] })),
      skills: SKILLS.map((skill) => ({ ...skill, ...t.skills[skill.id] })),
      jobs: JOBS.map((job) => ({ ...job, ...t.jobs[job.id] })),
      education: EDUCATION.map((diploma) => ({ ...diploma, ...t.education[diploma.id] })),
      stats: STATS.map(({ id, to, icon }) => ({ to, icon, label: t.about.stats[id] })),
    }),
    [t],
  )
}
