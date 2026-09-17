import type { Translation } from './types'

export const fr: Translation = {
  tag: 'FR',
  name: 'Français',
  switchTo: 'Afficher le site en français',

  documentTitle: 'Lucas Laliche — Architecte IA & développeur front',
  documentDescription:
    'Portfolio de Lucas Laliche — architecte IA, développeur front et chef de projet. Je cadre, je développe les features et je fais les démos.',

  role: 'Architecte IA · Développeur front · Chef de projet',

  nav: {
    home: 'Accueil',
    projects: 'Projets',
    skills: 'Compétences',
    about: 'Parcours',
    contact: 'Contact',
  },

  hero: {
    greeting: 'Bonjour, moi c’est Lucas,',
    headline: 'Architecte IA.',
    badge: '2 ans d’expérience · Front & IA',
    lead: 'Chef de projet qui code : je cadre les besoins, je développe les features et je présente les démos. Deux ans d’expérience — un an en alternance, un an en développement front — et aujourd’hui un poste d’architecte IA.',
    portraitLabel: 'portrait',
    viewWork: 'Voir mes projets',
    contact: 'Me contacter',
  },

  ribbon: [
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
  ],

  projects: {
    title: 'Projets',
    previous: 'Projets précédents',
    next: 'Projets suivants',
    goToGroup: (index) => `Aller au groupe ${index}`,

    /* TODO Lucas : remplace chaque champ entre crochets par un vrai projet. */
    items: {
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
  },

  modal: {
    close: 'Fermer',
    liveDemo: 'Démo en ligne',
    source: 'Code source',
  },

  skills: {
    title: 'Compétences',
    note: 'niveau · usage quotidien → exploratoire',
    items: {
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
      'html-css': {
        name: 'HTML / CSS',
        level: 'Solide',
        note: 'Intégration, responsive, accessibilité',
      },
      'ai-architecture': {
        name: 'Architecture IA',
        level: 'En cours',
        note: 'Poste actuel — montée en compétence',
      },
      python: {
        name: 'Python',
        level: 'Notions',
        note: 'Scripts, automatisation, manipulation de données',
      },
      'git-ci': {
        name: 'Git / CI',
        level: 'Solide',
        note: 'Branches, revues, déploiements',
      },
    },
    soft: [
      'Cadrage du besoin',
      'Démos client',
      'Vulgarisation',
      'Autonomie',
      'Travail en équipe',
      'Veille IA',
    ],
  },

  about: {
    title: 'Parcours',
    storyTitle: 'Mon parcours',
    story:
      'Je fais le pont entre le besoin et le code. Concrètement : je cadre, je développe les features moi-même, puis je les présente en démo. Un an d’alternance, un an de développement front avec un peu de Python, et je démarre maintenant sur l’architecture IA.',
    careerTitle: 'Expériences',
    hint: 'clique pour déplier',

    /* TODO Lucas : remplace [Entreprise] / [Ville] et vérifie les dates. */
    jobs: {
      j1: {
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
      },
      j2: {
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
      },
      j3: {
        role: 'Alternance — Développeur',
        company: '[Entreprise]',
        place: '[Ville]',
        period: '2024 — 2025',
        summary: 'Première année en entreprise : montée en compétence sur le développement web.',
        bullets: [
          '[À compléter : ce que tu as appris / livré]',
          '[À compléter : les technos pratiquées]',
        ],
      },
    },

    /* TODO Lucas : remplace les [N] par tes vrais chiffres. */
    stats: [
      { value: '2 ans', label: 'd’expérience' },
      { value: '[N]', label: 'features livrées' },
      { value: '[N]', label: 'démos menées' },
    ],
  },

  contact: {
    title: 'Contact',
    name: 'Nom',
    namePlaceholder: 'Prénom Nom',
    email: 'Email',
    emailPlaceholder: 'vous@entreprise.fr',
    message: 'Message',
    messagePlaceholder: 'Parlons de votre projet…',
    send: 'Envoyer',
    sending: 'Envoi…',
    sent: 'Envoyé ✓',
    thanks: 'Merci ! Réponse sous 24h.',
    emailLabel: 'Email',
  },

  a11y: {
    mainNav: 'Navigation principale',
    languageSwitch: 'Choix de la langue',
  },
}
