export type SectionId = 'home' | 'projects' | 'skills' | 'about' | 'contact'

export type Locale = 'fr' | 'en'

/* ------------------------------------------------------------------ *
 * Données indépendantes de la langue (src/data/portfolio.ts)
 * ------------------------------------------------------------------ */

export type ProjectBase = {
  id: string
  tags: readonly string[]
}

export type SkillBase = {
  id: string
  lvl: number
}

export type JobBase = {
  id: string
  stack: readonly string[]
}

/* ------------------------------------------------------------------ *
 * Formes assemblées (données + traduction) consommées par les composants
 * ------------------------------------------------------------------ */

export type Project = {
  id: string
  kind: string
  title: string
  blurb: string
  tags: readonly string[]
  cat: string
  detail: string
}

export type Skill = {
  id: string
  name: string
  lvl: number
  level: string
  note: string
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

export type Social = {
  tag: string
  label: string
  href: string
}

export type NavItem = {
  id: SectionId
  label: string
}

export type Stat = {
  value: string
  label: string
}

export type Spark = {
  id: number
  angle: number
  x: number
  y: number
}

export type ContactForm = {
  name: string
  email: string
  msg: string
}

export type SendingState = 'idle' | 'sending' | 'sent'
