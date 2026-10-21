import type { Translation } from './types'

export const fr: Translation = {
  tag: 'FR',
  switchTo: 'Afficher le site en français',

  documentTitle: 'Lucas Laliche — Architecte IA & Chef de projet',
  documentDescription:
    'Portfolio de Lucas Laliche — architecte IA et chef de projet. Je cadre, je développe les features et je fais les démos.',

  role: 'Architecte IA · Chef de projet',

  nav: {
    home: 'Accueil',
    about: 'À propos',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },

  loader: 'Chargement',

  hero: {
    badge: '2 ans d’expérience · Front & IA',
    headline: ['Architecte', 'IA.'],
    roles: ['Chef de projet qui code', 'Développeur front React', 'Architecte IA'],
    lead: 'Chef de projet qui code : je cadre les besoins, je développe les features et je présente les démos. Deux ans d’expérience — un an en alternance, un an en développement front — et aujourd’hui un poste d’architecte IA.',
    techs: 'Technologies',
    hints: ['↓ découvrez mes projets plus bas', '↗ ouvert aux échanges et aux collaborations'],
  },

  about: {
    eyebrow: 'À propos',
    story:
      'Je fais le pont entre le besoin et le code. Concrètement : je cadre, je développe les features moi-même, puis je les présente en démo. Un an d’alternance, un an de développement front avec un peu de Python, et je démarre maintenant sur l’architecture IA.',
    quote: 'Faire le pont entre le besoin et le code.',
    viewProjects: 'Voir les projets',
    contact: 'Me contacter',
    stats: {
      years: 'ans d’expérience',
      roles: 'rôles occupés',
      skills: 'compétences clés',
    },
  },

  portfolio: {
    title: 'Portfolio Showcase',
    lead: 'Mes projets, mes compétences et mon parcours.',
    tabsLabel: 'Contenu du portfolio',
    tabs: {
      projects: 'Projets',
      skills: 'Compétences',
      journey: 'Parcours',
    },
    details: 'Détails ↗',
    skillLevel: (level, max) => `Niveau ${level} sur ${max}`,
    softSkillsLabel: 'Savoir-être',
    experience: 'Expérience',
    education: 'Formation',
  },

  /* TODO Lucas : remplace chaque champ entre crochets par un vrai projet. */
  projects: {
    p1: {
      kind: '[Type — ex. Web app]',
      title: '[Titre du projet]',
      blurb: '[Une phrase : ce que fait le projet et avec quoi.]',
      cat: '[Catégorie]',
      detail:
        '[Le détail affiché dans la fenêtre : le contexte, ton rôle exact, ce que tu as développé et le résultat.]',
    },
    p2: {
      kind: '[Type — ex. Outil interne]',
      title: '[Titre du projet]',
      blurb: '[Une phrase : ce que fait le projet et avec quoi.]',
      cat: '[Catégorie]',
      detail:
        '[Le détail affiché dans la fenêtre : le contexte, ton rôle exact, ce que tu as développé et le résultat.]',
    },
    p3: {
      kind: '[Type — ex. Projet IA]',
      title: '[Titre du projet]',
      blurb: '[Une phrase : ce que fait le projet et avec quoi.]',
      cat: '[Catégorie]',
      detail:
        '[Le détail affiché dans la fenêtre : le contexte, ton rôle exact, ce que tu as développé et le résultat.]',
    },
  },

  skills: {
    'project-management': {
      name: 'Gestion de projet',
      level: 'Quotidien',
      note: 'Cadrage, suivi, démos et relation métier',
    },
    react: {
      name: 'React / TypeScript',
      level: 'Solide',
      note: 'Un an de développement front en production',
    },
    'html-css': { name: 'HTML / CSS', level: 'Solide', note: 'Intégration, responsive, accessibilité' },
    'ai-architecture': {
      name: 'Architecture IA',
      level: 'En cours',
      note: 'Poste actuel — montée en compétence',
    },
    python: { name: 'Python', level: 'Notions', note: 'Scripts, automatisation, manipulation de données' },
    'git-ci': { name: 'Git / CI', level: 'Solide', note: 'Branches, revues, déploiements' },
  },

  softSkills: [
    'Cadrage du besoin',
    'Démos client',
    'Vulgarisation',
    'Autonomie',
    'Travail en équipe',
    'Veille IA',
  ],

  jobs: {
    j1: {
      role: 'Développeur React & Gestion de projet',
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
    },
    j2: {
      role: 'Développeur React — alternance',
      place: 'Rillieux-la-Pape · Alternance',
      period: 'Août 2024 — Oct. 2025',
      summary:
        'Une année en alternance (CDA, Bac+3) au sein de la même équipe, avant le passage en CDI.',
      bullets: [
        'Conception et développement de la GED interne en React.',
        'Participation au cadrage, aux démos client et aux mises en production.',
      ],
    },
    j3: {
      role: 'Stagiaire développeur',
      place: 'Direction des Services Numériques',
      period: 'Mai — juil. 2023',
      summary: 'Stage de BTS au sein de la Direction des Services Numériques.',
      bullets: [
        'Participation au développement d’Easily, le logiciel de dossier patient utilisé par le personnel médical et paramédical des HCL.',
      ],
    },
  },

  education: {
    e1: { title: 'Concepteur Développeur d’Applications (CDA) — Bac+3, en alternance' },
    e2: { title: 'BTS SNIR — Systèmes Numériques, Informatique et Réseaux' },
    e3: { title: 'Baccalauréat STI2D — mention assez bien' },
  },

  modal: {
    close: 'Fermer',
    liveDemo: 'Démo en ligne',
    source: 'Code source',
  },

  contact: {
    lead: 'Une idée en tête ? Écrivez-moi et discutons-en.',
    name: 'Nom',
    namePlaceholder: 'Prénom Nom',
    email: 'Email',
    emailPlaceholder: 'vous@exemple.fr',
    message: 'Message',
    messagePlaceholder: 'Parlons de votre projet…',
    send: 'Envoyer par e-mail',
    findMe: 'Me retrouver',
    findMeText: 'Je réponds directement par e-mail, ou retrouvez-moi sur les réseaux.',
    mailSubject: 'Contact portfolio',
  },

  footer: 'Réalisé avec React Bits',

  a11y: {
    mainNav: 'Navigation principale',
    languageSwitch: 'Choix de la langue',
  },
}
