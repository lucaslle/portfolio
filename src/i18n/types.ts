import type { EducationId, JobId, ProjectId, SkillId, StatId } from '../data/portfolio'
import type { PortfolioTab, SectionId } from '../types'

export type ProjectCopy = {
  kind: string
  title: string
  blurb: string
  cat: string
  detail: string
}

export type SkillCopy = {
  name: string
  level: string
  note: string
}

export type JobCopy = {
  role: string
  place: string
  period: string
  summary: string
  bullets: readonly string[]
}

export type EducationCopy = {
  title: string
}

/**
 * Le contrat que chaque langue doit remplir. Les `Record<…Id, …>` sont
 * indexés sur les ids déclarés dans src/data/portfolio.ts : ajouter un
 * projet sans sa traduction devient une erreur de compilation.
 */
export type Translation = {
  /** Code court affiché dans le sélecteur. */
  tag: string
  /** Libellé accessible du bouton qui active cette langue. */
  switchTo: string

  /** Titre de l'onglet et description pour les moteurs de recherche. */
  documentTitle: string
  documentDescription: string

  /** Imprimé sur la carte du badge. */
  role: string
  nav: Record<SectionId, string>

  loader: string

  hero: {
    badge: string
    headline: readonly [string, string]
    roles: string[]
    lead: string
    techs: string
    hints: readonly string[]
  }

  about: {
    eyebrow: string
    story: string
    quote: string
    viewProjects: string
    contact: string
    stats: Record<StatId, string>
  }

  portfolio: {
    title: string
    lead: string
    tabsLabel: string
    tabs: Record<PortfolioTab, string>
    details: string
    sourceLabel: (label: string) => string
    skillLevel: (level: number, max: number) => string
    softSkillsLabel: string
    experience: string
    education: string
  }

  projects: Record<ProjectId, ProjectCopy>
  skills: Record<SkillId, SkillCopy>
  softSkills: readonly string[]
  jobs: Record<JobId, JobCopy>
  education: Record<EducationId, EducationCopy>

  modal: {
    close: string
    liveDemo: string
    source: string
  }

  contact: {
    lead: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    message: string
    messagePlaceholder: string
    send: string
    findMe: string
    findMeText: string
    mailSubject: string
  }

  footer: string

  a11y: {
    mainNav: string
    languageSwitch: string
    background: string
    resetBackground: string
    openMenu: string
    closeMenu: string
  }
}
