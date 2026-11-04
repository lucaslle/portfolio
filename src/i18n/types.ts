import type { EducationId, JobId, ProjectId, SkillGroupId, StatId } from '../data/portfolio'
import type { CaseStudy, PortfolioTab, ProjectFilter, SectionId } from '../types'

export type ProjectCopy = {
  kind: string
  title: string
  blurb: string
  cat: string
  detail: string
  study?: CaseStudy
}

export type SkillGroupCopy = {
  name: string
  proof: string
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
    method: {
      title: string
      steps: readonly { title: string; text: string }[]
    }
    stats: Record<StatId, string> & { yearsAndMonths: string }
  }

  portfolio: {
    title: string
    lead: string
    tabsLabel: string
    tabs: Record<PortfolioTab, string>
    details: string
    filtersLabel: string
    filters: Record<ProjectFilter, string>
    sourceLabel: (label: string) => string
    softSkillsLabel: string
    experience: string
    education: string
  }

  projects: Record<ProjectId, ProjectCopy>
  skillGroups: Record<SkillGroupId, SkillGroupCopy>
  softSkills: readonly string[]
  jobs: Record<JobId, JobCopy>
  education: Record<EducationId, EducationCopy>

  modal: {
    close: string
    liveDemo: string
    source: string
    context: string
    role: string
    choices: string
    results: string
    cvTitle: string
    download: string
  }

  contact: {
    lead: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    emailInvalid: string
    message: string
    messagePlaceholder: string
    send: string
    sending: string
    sent: string
    error: string
    findMe: string
    findMeText: string
    mailSubject: string
  }

  footer: string
  cv: string
  cvShort: string

  a11y: {
    mainNav: string
    languageSwitch: string
    background: string
    resetBackground: string
    openMenu: string
    closeMenu: string
  }
}
