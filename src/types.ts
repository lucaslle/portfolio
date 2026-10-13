export type SectionId = 'home' | 'about' | 'portfolio' | 'contact'

export type PortfolioTab = 'projects' | 'skills' | 'journey'

export type Project = {
  id: string
  kind: string
  title: string
  blurb: string
  tags: string[]
  cat: string
  detail: string
  demoUrl?: string
  sourceUrl?: string
}

export type Skill = {
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
  bullets: string[]
  stack: string[]
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
