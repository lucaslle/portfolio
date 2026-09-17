import { useMemo } from 'react'
import { JOBS, PROJECTS, SECTION_IDS, SKILLS } from '../data/portfolio'
import type { Job, NavItem, Project, Skill, Stat } from '../types'
import { useTranslation } from './useTranslation'

type Content = {
  navItems: NavItem[]
  projects: Project[]
  skills: Skill[]
  jobs: Job[]
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
      projects: PROJECTS.map(({ id, tags }) => ({ id, tags, ...t.projects.items[id] })),
      skills: SKILLS.map(({ id, lvl }) => ({ id, lvl, ...t.skills.items[id] })),
      jobs: JOBS.map(({ id, stack }) => ({ id, stack, ...t.about.jobs[id] })),
      stats: [...t.about.stats],
    }),
    [t],
  )
}
