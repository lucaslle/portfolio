import type { ProjectGroup, ProjectSource, SectionId, Social, StatIcon } from '../types'

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
export const CV_URL = `${import.meta.env.BASE_URL}CV_Lucas_LALICHE.pdf`

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
  group: ProjectGroup
  tags: readonly string[]
  demoUrl?: string
  sources: readonly ProjectSource[]
}

export const PROJECTS = [
  {
    id: 'ged',
    group: 'pro',
    tags: ['React', 'TypeScript', 'Chakra UI', 'GraphQL', 'Vitest', 'Scrum'],
    sources: [],
  },
  {
    id: 'ged-mobile',
    group: 'pro',
    tags: ['Flutter', 'Dart'],
    sources: [],
  },
  {
    id: 'hp-printer',
    group: 'pro',
    tags: ['HP', 'Embarqué'],
    sources: [],
  },
  {
    id: 'signature',
    group: 'pro',
    tags: ['React', 'Chakra UI', 'Vitest', 'Python', 'YouTrust'],
    sources: [],
  },
  {
    id: 'cristal',
    group: 'personal',
    tags: ['Stencil', 'Web Components', 'TypeScript', 'React', 'Next.js'],
    demoUrl: 'https://lucaslle.github.io/Cristal-UI/',
    sources: [{ label: 'GitHub', url: 'https://github.com/lucaslle/Cristal' }],
  },
  {
    id: 'autour',
    group: 'personal',
    tags: ['Next.js', 'React', 'TypeScript', 'TanStack Query', 'Leaflet', 'Vitest'],
    demoUrl: 'https://lucaslle.github.io/Demo/',
    sources: [{ label: 'GitHub', url: 'https://github.com/lucaslle/Demo' }],
  },
  {
    id: 'office',
    group: 'personal',
    tags: ['Three.js', 'JavaScript', 'Node.js', 'API GitLab'],
    demoUrl: 'https://lucaslle.github.io/claude-manage-office/',
    sources: [{ label: 'GitHub', url: 'https://github.com/lucaslle/claude-manage-office' }],
  },
  {
    id: 'arosaje',
    group: 'personal',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
    sources: [
      { label: 'Front', url: 'https://github.com/lucaslle/Arosaje_Front' },
      { label: 'API', url: 'https://github.com/lucaslle/Arosaje_Back' },
    ],
  },
  {
    id: 'momentum',
    group: 'personal',
    tags: ['Flutter', 'Dart', 'SQLite'],
    demoUrl: 'https://lucaslle.github.io/TODOapp/?frame=iphone',
    sources: [{ label: 'GitHub', url: 'https://github.com/lucaslle/TODOapp' }],
  },
  {
    id: 'kaizen',
    group: 'personal',
    tags: ['Flutter', 'Dart', 'Bloc', 'Widget Android'],
    demoUrl: 'https://lucaslle.github.io/Kaizen_365/?frame=iphone',
    sources: [{ label: 'GitHub', url: 'https://github.com/lucaslle/Kaizen_365' }],
  },
  {
    id: 'hargne',
    group: 'personal',
    tags: ['Flutter', 'Dart', 'Garmin', 'Import / export CSV'],
    demoUrl: 'https://lucaslle.github.io/SportApp/?frame=iphone',
    sources: [{ label: 'GitHub', url: 'https://github.com/lucaslle/SportApp' }],
  },
  {
    id: 'ecu',
    group: 'personal',
    tags: ['Flutter', 'Dart', 'Import CSV'],
    demoUrl: 'https://lucaslle.github.io/spent_app/?frame=iphone',
    sources: [{ label: 'GitHub', url: 'https://github.com/lucaslle/spent_app' }],
  },
  {
    id: 'piseo',
    group: 'personal',
    tags: ['Python'],
    sources: [],
  },
] as const satisfies readonly ProjectBase[]

export type ProjectId = (typeof PROJECTS)[number]['id']

/* ------------------------------------------------------------------ *
 * Compétences — technologies par catégorie. Le nom de la catégorie et
 * sa ligne de preuve vivent dans fr.ts et en.ts.
 * ------------------------------------------------------------------ */

export const SKILL_GROUPS = [
  {
    id: 'frontend',
    items: ['React', 'TypeScript', 'Chakra UI', 'Zustand', 'Apollo / GraphQL', 'react-hook-form + Zod', 'i18next', 'HTML / CSS', 'Three.js'],
  },
  { id: 'quality', items: ['Vitest', 'Testing Library', 'Biome', 'Git', 'GitLab CI', 'Docker', 'Claude Code'] },
  { id: 'mobile', items: ['Flutter', 'Dart', 'Bloc'] },
  { id: 'backend', items: ['Python', 'FastAPI', 'GraphQL', 'PostgreSQL'] },
  { id: 'management', items: ['Scrum'] },
] as const satisfies readonly { id: string; items: readonly string[] }[]

export type SkillGroupId = (typeof SKILL_GROUPS)[number]['id']

const SKILL_COUNT = SKILL_GROUPS.reduce((total, group) => total + group.items.length, 0)

/* ------------------------------------------------------------------ *
 * Parcours
 * Source : CV (Développeur React & référent projet, XEFI).
 * ------------------------------------------------------------------ */

export const JOBS = [
  { id: 'j1', company: 'XEFI', stack: ['React', 'TypeScript', 'Chakra UI', 'GraphQL', 'Vitest', 'Python', 'Flutter', 'Scrum'] },
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

/** Début de l'alternance (15 août 2024) : l'expérience affichée s'en déduit. */
const CAREER_START = { year: 2024, month: 8, day: 15 }

export const getExperience = (now: Date = new Date()) => {
  const elapsed = (now.getFullYear() - CAREER_START.year) * 12 + (now.getMonth() + 1 - CAREER_START.month)
  // Le mois en cours n'est complet qu'à partir du jour anniversaire.
  const total = now.getDate() < CAREER_START.day ? elapsed - 1 : elapsed

  return { years: Math.floor(total / 12), months: total % 12 }
}

export const STATS = [
  { id: 'years', to: getExperience().years, icon: 'clock' },
  { id: 'roles', to: JOBS.length, icon: 'briefcase' },
  { id: 'skills', to: SKILL_COUNT, icon: 'spark' },
] as const satisfies readonly { id: string; to: number; icon: StatIcon }[]

export type StatId = (typeof STATS)[number]['id']
