import type { JobBase, ProjectBase, SkillBase, Social } from '../types'

/* ------------------------------------------------------------------ *
 * Ce fichier ne contient QUE ce qui ne change pas d'une langue à
 * l'autre : identité, liens, technos, niveaux, couleurs.
 * Tous les textes vivent dans src/i18n/fr.ts et src/i18n/en.ts.
 * ------------------------------------------------------------------ */

export const FULL_NAME = 'Lucas Laliche'
export const INITIALS = 'LL'
export const CONTACT_EMAIL = 'lucas.laliche@gmail.com'
export const FOOTER_YEAR = 2026
export const FONT_CREDIT = 'Space Grotesk · JetBrains Mono'

export const SECTION_IDS = ['home', 'projects', 'skills', 'about', 'contact'] as const

/* TODO Lucas : remplace les "#" par tes vraies URLs (ou supprime la ligne). */
export const SOCIALS: Social[] = [
  { tag: 'IN', label: 'LinkedIn', href: '#' },
  { tag: 'GH', label: 'GitHub', href: '#' },
]

/* ------------------------------------------------------------------ *
 * Projets — l'id relie la carte à son texte dans chaque langue.
 * Si tu ajoutes une entrée ici, TypeScript exigera sa traduction
 * dans fr.ts ET en.ts. C'est voulu : impossible d'oublier.
 * ------------------------------------------------------------------ */

export const PROJECTS = [
  { id: 'p1', tags: ['[Techno]', '[Techno]'] },
  { id: 'p2', tags: ['[Techno]', '[Techno]'] },
  { id: 'p3', tags: ['[Techno]', '[Techno]'] },
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
] as const satisfies readonly SkillBase[]

export type SkillId = (typeof SKILLS)[number]['id']

export const SKILL_TONES: Record<number, string> = {
  5: '#a5f3d0',
  4: '#c4a6ff',
  3: '#c4a6ff',
  2: '#7dd3fc',
  1: '#7dd3fc',
}

/* ------------------------------------------------------------------ *
 * Parcours
 * ------------------------------------------------------------------ */

export const JOBS = [
  { id: 'j1', stack: ['[Techno]', '[Techno]'] },
  { id: 'j2', stack: ['React', 'TypeScript', 'Python'] },
  { id: 'j3', stack: ['[Techno]', '[Techno]'] },
] as const satisfies readonly JobBase[]

export type JobId = (typeof JOBS)[number]['id']
