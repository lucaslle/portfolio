import { useMemo } from 'react'
import { EDUCATION, getExperience, JOBS, PROJECTS, SECTION_IDS, SKILL_GROUPS, STATS } from '../data/portfolio'
import type { Education, Job, NavItem, Project, SkillGroup, Stat } from '../types'
import { useTranslation } from './useTranslation'

type Content = {
  navItems: NavItem[]
  projects: Project[]
  skillGroups: SkillGroup[]
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
  const { t, locale } = useTranslation()
  const { months } = getExperience()
  const monthsLabel = new Intl.NumberFormat(locale, { style: 'unit', unit: 'month', unitDisplay: 'long' }).format(months)
  const experienceLabel = months > 0 ? t.about.stats.yearsAndMonths.replace('{months}', monthsLabel) : t.about.stats.years

  return useMemo(
    () => ({
      navItems: SECTION_IDS.map((id) => ({ id, label: t.nav[id] })),
      projects: PROJECTS.map((project) => ({ ...project, ...t.projects[project.id] })),
      skillGroups: SKILL_GROUPS.map((group) => ({ ...group, ...t.skillGroups[group.id] })),
      jobs: JOBS.map((job) => ({ ...job, ...t.jobs[job.id] })),
      education: EDUCATION.map((diploma) => ({ ...diploma, ...t.education[diploma.id] })),
      stats: STATS.map(({ id, to, icon }) => ({ to, icon, label: id === 'years' ? experienceLabel : t.about.stats[id] })),
    }),
    [t, experienceLabel],
  )
}
