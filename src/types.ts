export type SectionId = 'home' | 'projects' | 'skills' | 'about' | 'contact'

export type Project = {
  id: string
  kind: string
  title: string
  blurb: string
  tags: string[]
  cat: string
  detail: string
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
