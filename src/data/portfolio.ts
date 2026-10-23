import type { ProjectSource, SectionId, Social, StatIcon } from '../types'

/* ------------------------------------------------------------------ *
 * Ce fichier ne contient QUE ce qui ne change pas d'une langue à
 * l'autre : identité, liens, technos, niveaux.
 * Tous les textes vivent dans src/i18n/fr.ts et src/i18n/en.ts.
 * ------------------------------------------------------------------ */

export const FULL_NAME = 'Lucas Laliche'
export const INITIALS = 'LL'
export const HERO_TECHS = ['React', 'TypeScript', 'Python']
export const CONTACT_EMAIL = 'lucas.laliche@gmail.com'
export const FOOTER_YEAR = 2026

export const SECTION_IDS: SectionId[] = ['home', 'about', 'portfolio', 'contact']

export const SOCIALS: Social[] = [
  {
    tag: 'IN',
    label: 'LinkedIn',
    handle: 'linkedin.com/in/lucas-laliche',
    href: 'https://www.linkedin.com/in/lucas-laliche-995767251',
  },
  { tag: 'GH', label: 'GitHub', handle: 'github.com/lucaslle', href: 'https://github.com/lucaslle/' },
]

/* ------------------------------------------------------------------ *
 * Projets — l'id relie la carte à son texte dans chaque langue.
 * Si tu ajoutes une entrée ici, TypeScript exigera sa traduction
 * dans fr.ts ET en.ts. C'est voulu : impossible d'oublier.
 * ------------------------------------------------------------------ */

type ProjectBase = {
  id: string
  tags: readonly string[]
  demoUrl?: string
  sources: readonly ProjectSource[]
}

export const PROJECTS = [
  {
    id: 'office',
    tags: ['Three.js', 'JavaScript', 'Node.js', 'API GitLab'],
    demoUrl: 'https://lucaslle.github.io/claude-manage-office/',
    sources: [{ label: 'GitHub', url: 'https://github.com/lucaslle/claude-manage-office' }],
  },
  {
    id: 'arosaje',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
    sources: [
      { label: 'Front', url: 'https://github.com/lucaslle/Arosaje_Front' },
      { label: 'API', url: 'https://github.com/lucaslle/Arosaje_Back' },
    ],
  },
  {
    id: 'momentum',
    tags: ['Flutter', 'Dart', 'SQLite'],
    sources: [{ label: 'GitHub', url: 'https://github.com/lucaslle/TODOapp' }],
  },
] as const satisfies readonly ProjectBase[]

export type ProjectId = (typeof PROJECTS)[number]['id']

/* ------------------------------------------------------------------ *
 * Compétences — les niveaux (1 à 5) sont ma lecture de ce que tu
 * m'as décrit, ajuste-les.
 * ------------------------------------------------------------------ */

export const SKILLS = [
  { id: 'project-management', lvl: 4 },
  { id: 'react', lvl: 3 },
  { id: 'html-css', lvl: 3 },
  { id: 'ai-architecture', lvl: 2 },
  { id: 'python', lvl: 2 },
  { id: 'git-ci', lvl: 3 },
] as const satisfies readonly { id: string; lvl: number }[]

export type SkillId = (typeof SKILLS)[number]['id']

/* ------------------------------------------------------------------ *
 * Parcours
 * Source : CV (Développeur React & référent projet, XEFI).
 * ------------------------------------------------------------------ */

export const JOBS = [
  { id: 'j1', company: 'XEFI', stack: ['React', 'TypeScript', 'Scrum'] },
  { id: 'j2', company: 'XEFI', stack: ['React', 'TypeScript'] },
  { id: 'j3', company: 'Hospices Civils de Lyon (HCL)', stack: [] },
] as const satisfies readonly { id: string; company: string; stack: readonly string[] }[]

export type JobId = (typeof JOBS)[number]['id']

export const EDUCATION = [
  { id: 'e1', school: 'EPSI Lyon', period: '2024 — 2025' },
  { id: 'e2', school: 'Lycée ORT Lyon 8', period: '2022 — 2024' },
  { id: 'e3', school: 'Lycée ORT Lyon 8', period: '2020 — 2022' },
] as const satisfies readonly { id: string; school: string; period: string }[]

export type EducationId = (typeof EDUCATION)[number]['id']

export const STATS = [
  { id: 'years', to: 2, icon: 'clock' },
  { id: 'roles', to: JOBS.length, icon: 'briefcase' },
  { id: 'skills', to: SKILLS.length, icon: 'spark' },
] as const satisfies readonly { id: string; to: number; icon: StatIcon }[]

export type StatId = (typeof STATS)[number]['id']
