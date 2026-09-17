import type { JobId, ProjectId, SkillId } from '../data/portfolio'
import type { SectionId } from '../types'

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
  company: string
  place: string
  period: string
  summary: string
  bullets: readonly string[]
}

export type StatCopy = {
  value: string
  label: string
}

/**
 * Le contrat que chaque langue doit remplir. Les `Record<…Id, …>` sont
 * indexés sur les ids déclarés dans src/data/portfolio.ts : ajouter un
 * projet sans sa traduction devient une erreur de compilation.
 */
export type Translation = {
  /** Code court affiché dans le sélecteur. */
  tag: string
  /** Nom de la langue dans cette langue. */
  name: string
  /** Libellé accessible du bouton qui active cette langue. */
  switchTo: string

  /** Titre de l'onglet et description pour les moteurs de recherche. */
  documentTitle: string
  documentDescription: string

  role: string
  nav: Record<SectionId, string>

  hero: {
    greeting: string
    headline: string
    badge: string
    lead: string
    portraitLabel: string
    viewWork: string
    contact: string
  }

  ribbon: readonly string[]

  projects: {
    title: string
    previous: string
    next: string
    goToGroup: (index: number) => string
    items: Record<ProjectId, ProjectCopy>
  }

  modal: {
    close: string
    liveDemo: string
    source: string
  }

  skills: {
    title: string
    note: string
    items: Record<SkillId, SkillCopy>
    soft: readonly string[]
  }

  about: {
    title: string
    storyTitle: string
    story: string
    careerTitle: string
    hint: string
    jobs: Record<JobId, JobCopy>
    stats: readonly StatCopy[]
  }

  contact: {
    title: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    message: string
    messagePlaceholder: string
    send: string
    sending: string
    sent: string
    thanks: string
    emailLabel: string
  }

  a11y: {
    mainNav: string
    languageSwitch: string
  }
}
