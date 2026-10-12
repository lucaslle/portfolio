import type { Job, NavItem, Project, Skill, Social, Stat } from '../types'

/* ------------------------------------------------------------------ *
 * Identité
 * ------------------------------------------------------------------ */

export const FULL_NAME = 'Lucas Laliche'
export const INITIALS = 'LL'
export const ROLE = 'Architecte IA · Chef de projet'
export const HERO_HEADLINE = ['Architecte', 'IA.'] as const
export const HERO_ROLES = ['Chef de projet qui code', 'Développeur front React', 'Architecte IA']
export const HERO_HINTS = ['↓ découvrez mes projets plus bas', '↗ ouvert aux échanges et aux collaborations']
export const HERO_TECHS = ['React', 'TypeScript', 'Python']
export const ABOUT_QUOTE = 'Faire le pont entre le besoin et le code.'
export const BADGE = '2 ans d’expérience · Front & IA'
export const CONTACT_EMAIL = 'lucas.laliche@gmail.com'
export const FOOTER_YEAR = 2026

export const HERO_LEAD =
  'Chef de projet qui code : je cadre les besoins, je développe les features et je présente les démos. Deux ans d’expérience — un an en alternance, un an en développement front — et aujourd’hui un poste d’architecte IA.'

export const ABOUT_STORY =
  'Je fais le pont entre le besoin et le code. Concrètement : je cadre, je développe les features moi-même, puis je les présente en démo. Un an d’alternance, un an de développement front avec un peu de Python, et je démarre maintenant sur l’architecture IA.'

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

/* TODO Lucas : remplace les "#" par tes vraies URLs (ou supprime la ligne). */
export const SOCIALS: Social[] = [
  { tag: 'IN', label: 'LinkedIn', handle: 'linkedin.com/in/…', href: '#' },
  { tag: 'GH', label: 'GitHub', handle: 'github.com/…', href: '#' },
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

export const SOFT_SKILLS = [
  'Cadrage du besoin',
  'Démos client',
  'Vulgarisation',
  'Autonomie',
  'Travail en équipe',
  'Veille IA',
]

export const STATS: Stat[] = [
  { to: 2, label: 'ans d’expérience', icon: 'clock' },
  { to: JOBS.length, label: 'rôles occupés', icon: 'briefcase' },
  { to: SKILLS.length, label: 'compétences clés', icon: 'spark' },
]
