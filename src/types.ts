export type SectionId = 'home' | 'about' | 'portfolio' | 'contact'

export type PortfolioTab = 'projects' | 'skills' | 'journey'

export type Locale = 'fr' | 'en'

/** Étude de cas d'un projet ; chaque bloc est facultatif et n'est affiché que s'il est rempli. */
export type CaseStudy = {
  context: string
  role?: string
  choices: readonly string[]
  results: readonly string[]
}

/** Origine d'un projet : en entreprise, ou personnel / scolaire. */
export type ProjectGroup = 'pro' | 'personal'

export type ProjectFilter = 'all' | ProjectGroup

export type Project = {
  id: string
  group: ProjectGroup
  kind: string
  title: string
  blurb: string
  tags: readonly string[]
  cat: string
  detail: string
  study?: CaseStudy
  demoUrl?: string
  sources: readonly ProjectSource[]
}

/** Un dépôt de code ; le libellé distingue les dépôts d'un même projet (Front, API). */
export type ProjectSource = {
  label: string
  url: string
}

export type SkillGroup = {
  id: string
  items: readonly string[]
  name: string
  proof: string
}

export type Job = {
  id: string
  role: string
  company: string
  place: string
  period: string
  summary: string
  bullets: readonly string[]
  stack: readonly string[]
}

export type Education = {
  id: string
  title: string
  school: string
  period: string
}

export type Social = {
  tag: string
  label: string
  handle: string
  href: string
}

export type NavItem = {
  id: SectionId
  label: string
}

export type StatIcon = 'clock' | 'briefcase' | 'spark'

export type Stat = {
  to: number
  label: string
  icon: StatIcon
}

export type ContactForm = {
  name: string
  email: string
  msg: string
}

export type SendingState = 'idle' | 'sending' | 'sent'
