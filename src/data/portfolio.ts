import type { Job, NavItem, Project, Skill, Social, Stat } from '../types'

/* ------------------------------------------------------------------ *
 * Identité
 * ------------------------------------------------------------------ */

export const FULL_NAME = 'Lucas Laliche'
export const INITIALS = 'LL'
export const ROLE = 'Architecte IA · Chef de projet'
export const HERO_GREETING = "Hi, I'm Lucas,"
export const HEADLINE = 'Architecte IA.'
export const BADGE = '2 ans d’expérience · Front & IA'
export const CONTACT_EMAIL = 'lucas.laliche@gmail.com'
export const FOOTER_YEAR = 2026

export const HERO_LEAD =
  'Chef de projet qui code : je cadre les besoins, je développe les features et je présente les démos. Deux ans d’expérience — un an en alternance, un an en développement front — et aujourd’hui un poste d’architecte IA.'

export const ABOUT_STORY =
  'Je fais le pont entre le besoin et le code. Concrètement : je cadre, je développe les features moi-même, puis je les présente en démo. Un an d’alternance, un an de développement front avec un peu de Python, et je démarre maintenant sur l’architecture IA.'

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

/* TODO Lucas : remplace les "#" par tes vraies URLs (ou supprime la ligne). */
export const SOCIALS: Social[] = [
  { tag: 'IN', label: 'LinkedIn', href: '#' },
  { tag: 'GH', label: 'GitHub', href: '#' },
]

/* ------------------------------------------------------------------ *
 * Projets
 * TODO Lucas : remplace chaque champ entre crochets par un vrai projet.
 * Ajoute ou retire des entrées librement, le carrousel s'adapte tout seul.
 * ------------------------------------------------------------------ */

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    kind: '[Type — ex. Web app]',
    title: '[Titre du projet]',
    blurb: '[Une phrase : ce que fait le projet et avec quoi.]',
    tags: ['[Techno]', '[Techno]'],
    cat: '[Catégorie]',
    detail:
      '[Le détail affiché dans la fenêtre : le contexte, ton rôle exact, ce que tu as développé et le résultat.]',
  },
  {
    id: 'p2',
    kind: '[Type — ex. Outil interne]',
    title: '[Titre du projet]',
    blurb: '[Une phrase : ce que fait le projet et avec quoi.]',
    tags: ['[Techno]', '[Techno]'],
    cat: '[Catégorie]',
    detail:
      '[Le détail affiché dans la fenêtre : le contexte, ton rôle exact, ce que tu as développé et le résultat.]',
  },
  {
    id: 'p3',
    kind: '[Type — ex. Projet IA]',
    title: '[Titre du projet]',
    blurb: '[Une phrase : ce que fait le projet et avec quoi.]',
    tags: ['[Techno]', '[Techno]'],
    cat: '[Catégorie]',
    detail:
      '[Le détail affiché dans la fenêtre : le contexte, ton rôle exact, ce que tu as développé et le résultat.]',
  },
]

/* ------------------------------------------------------------------ *
 * Compétences
 * Les niveaux (lvl 1 à 5) sont ma lecture de ce que tu m'as décrit —
 * ajuste-les, c'est toi qui sais.
 * ------------------------------------------------------------------ */

export const SKILLS: Skill[] = [
  {
    name: 'Gestion de projet',
    lvl: 4,
    level: 'Quotidien',
    note: 'Cadrage, suivi, démos et relation métier',
  },
  {
    name: 'React / TypeScript',
    lvl: 3,
    level: 'Solide',
    note: 'Un an de développement front en production',
  },
  { name: 'HTML / CSS', lvl: 3, level: 'Solide', note: 'Intégration, responsive, accessibilité' },
  { name: 'Architecture IA', lvl: 2, level: 'En cours', note: 'Poste actuel — montée en compétence' },
  { name: 'Python', lvl: 2, level: 'Notions', note: 'Scripts, automatisation, manipulation de données' },
  { name: 'Git / CI', lvl: 3, level: 'Solide', note: 'Branches, revues, déploiements' },
]

export const SKILL_TONES: Record<number, string> = {
  5: '#a5f3d0',
  4: '#c4a6ff',
  3: '#c4a6ff',
  2: '#7dd3fc',
  1: '#7dd3fc',
}

/* ------------------------------------------------------------------ *
 * Parcours
 * TODO Lucas : remplace [Entreprise] / [Ville] et vérifie les dates.
 * Les puces sont des amorces à réécrire avec tes vraies réalisations.
 * ------------------------------------------------------------------ */

export const JOBS: Job[] = [
  {
    id: 'j1',
    role: 'Architecte IA',
    company: '[Entreprise]',
    place: '[Ville] · CDI',
    period: '2026 — auj.',
    summary:
      'Poste en cours de prise de fonction : je conçois les briques IA et je continue à développer et démontrer les features.',
    bullets: [
      '[À compléter : le périmètre du poste]',
      '[À compléter : une première réalisation ou un objectif]',
    ],
    stack: ['[Techno]', '[Techno]'],
  },
  {
    id: 'j2',
    role: 'Développeur Front-End',
    company: '[Entreprise]',
    place: '[Ville] · CDI',
    period: '2025 — 2026',
    summary:
      'Un an de développement front, avec du Python en appui, en lien direct avec les utilisateurs métier.',
    bullets: [
      '[À compléter : une feature que tu as développée de bout en bout]',
      '[À compléter : un chiffre ou un résultat concret]',
      '[À compléter : les démos / la relation métier]',
    ],
    stack: ['React', 'TypeScript', 'Python'],
  },
  {
    id: 'j3',
    role: 'Alternance — Développeur',
    company: '[Entreprise]',
    place: '[Ville]',
    period: '2024 — 2025',
    summary: 'Première année en entreprise : montée en compétence sur le développement web.',
    bullets: [
      '[À compléter : ce que tu as appris / livré]',
      '[À compléter : les technos pratiquées]',
    ],
    stack: ['[Techno]', '[Techno]'],
  },
]

const RIBBON_BASE = [
  'React',
  'TypeScript',
  'Python',
  'IA',
  'LLM',
  'Git',
  'HTML',
  'CSS',
  'Gestion de projet',
  'Démos',
]

export const RIBBON = [...RIBBON_BASE, ...RIBBON_BASE]

export const SOFT_SKILLS = [
  'Cadrage du besoin',
  'Démos client',
  'Vulgarisation',
  'Autonomie',
  'Travail en équipe',
  'Veille IA',
]

/* TODO Lucas : remplace les [N] par tes vrais chiffres, ou dis-moi de
   retirer la tuile si tu préfères ne rien afficher. */
export const STATS: Stat[] = [
  { value: '2 ans', label: 'd’expérience' },
  { value: '[N]', label: 'features livrées' },
  { value: '[N]', label: 'démos menées' },
]
