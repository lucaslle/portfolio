import type { Education, Job, NavItem, Project, Skill, Social, Stat } from '../types'

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
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
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
    kind: 'Web app',
    title: 'Momentum',
    blurb: '[Une phrase : ce que fait Momentum et avec quoi.]',
    tags: ['[Techno]', '[Techno]'],
    cat: '[Catégorie]',
    detail:
      '[Le détail affiché dans la fenêtre : le contexte, ton rôle exact, ce que tu as développé et le résultat.]',
    demoUrl: 'https://lucaslle.github.io/TODOapp/?frame=iphone',
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
 * Source : CV (Développeur React & référent projet, XEFI).
 * ------------------------------------------------------------------ */

export const JOBS: Job[] = [
  {
    id: 'j1',
    role: 'Développeur React & Gestion de projet',
    company: 'XEFI',
    place: 'Rillieux-la-Pape · CDI',
    period: 'Oct. 2025 — auj.',
    summary:
      'Je pilote des projets de bout en bout : du recueil du besoin jusqu’à la mise en production, en restant sur le code.',
    bullets: [
      'Pilotage de projet de A à Z : analyse du besoin, estimation et engagement sur les délais, maquettes, développement, démo client puis déploiement.',
      'GED interne en React : plateforme de gestion électronique de documents (recherche, prévisualisation, droits et autorisations fins), utilisée par plus de 700 utilisateurs.',
      'Architecture frontend : interfaces réactives, modulaires et maintenables (architecture composants, intégration d’API, gestion d’état).',
      'Scrum Master : animation des cérémonies agiles et levée des blocages pour une équipe de 14 personnes.',
      'Travail étroit avec le Product Owner, les designers et les développeurs backend, avec une force de proposition sur les choix techniques et UX.',
    ],
    stack: ['React', 'TypeScript', 'Scrum'],
  },
  {
    id: 'j2',
    role: 'Développeur React — alternance',
    company: 'XEFI',
    place: 'Rillieux-la-Pape · Alternance',
    period: 'Août 2024 — Oct. 2025',
    summary:
      'Une année en alternance (CDA, Bac+3) au sein de la même équipe, avant le passage en CDI.',
    bullets: [
      'Conception et développement de la GED interne en React.',
      'Participation au cadrage, aux démos client et aux mises en production.',
    ],
    stack: ['React', 'TypeScript'],
  },
  {
    id: 'j3',
    role: 'Stagiaire développeur',
    company: 'Hospices Civils de Lyon (HCL)',
    place: 'Direction des Services Numériques',
    period: 'Mai — juil. 2023',
    summary: 'Stage de BTS au sein de la Direction des Services Numériques.',
    bullets: [
      'Participation au développement d’Easily, le logiciel de dossier patient utilisé par le personnel médical et paramédical des HCL.',
    ],
    stack: [],
  },
]

export const EDUCATION: Education[] = [
  {
    id: 'e1',
    title: 'Concepteur Développeur d’Applications (CDA) — Bac+3, en alternance',
    school: 'EPSI Lyon',
    period: '2024 — 2025',
  },
  {
    id: 'e2',
    title: 'BTS SNIR — Systèmes Numériques, Informatique et Réseaux',
    school: 'Lycée ORT Lyon 8',
    period: '2022 — 2024',
  },
  {
    id: 'e3',
    title: 'Baccalauréat STI2D — mention assez bien',
    school: 'Lycée ORT Lyon 8',
    period: '2020 — 2022',
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
