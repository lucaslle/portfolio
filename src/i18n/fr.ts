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
    lead: 'Chef de projet qui code : je cadre les besoins, je développe les features et je présente les démos. Deux ans de développement front en React, dont un an en alternance, et aujourd’hui un poste d’architecte IA.',
    techs: 'Technologies',
    hints: ['↓ découvrez mes projets plus bas', '↗ ouvert aux échanges et aux collaborations'],
  },

  about: {
    eyebrow: 'À propos',
    story:
      'Je fais le pont entre le besoin et le code. Concrètement : je cadre, je développe les features moi-même, puis je les présente en démo. Deux ans de développement front, dont un an en alternance, avec un peu de Python, et je démarre maintenant sur l’architecture IA.',
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
    sourceLabel: (label) => `Code source (${label})`,
    skillLevel: (level, max) => `Niveau ${level} sur ${max}`,
    softSkillsLabel: 'Savoir-être',
    experience: 'Expérience',
    education: 'Formation',
  },

  projects: {
    office: {
      kind: 'Outil de suivi · 3D',
      title: 'Claude Manage Office',
      blurb: 'Un bureau en 3D où mes conversations Claude Code et mes merge requests GitLab se déplacent de pièce en pièce selon leur état.',
      cat: 'Outil interne',
      detail:
        'Un tableau de bord en 3D pour voir d’un coup d’œil quelles conversations Claude Code attendent une réponse et quelles merge requests GitLab sont à relire ou à merger. Chaque conversation ou MR est un personnage qui change de pièce quand son état change : accueil quand une réponse est attendue, atelier quand un pipeline échoue, salle de réunion quand plusieurs agents tournent. Des hooks Claude Code écrivent l’état des sessions, un serveur local interroge l’API GitLab et pousse les changements en direct (SSE) à une scène Three.js.',
    },
    arosaje: {
      kind: 'Application web · Full-stack',
      title: 'A’rosa-je',
      blurb: 'Une application où des particuliers confient leurs plantes à d’autres membres pendant leur absence et demandent conseil à des botanistes.',
      cat: 'Application web',
      detail:
        'Application full-stack, front et API. Côté interface (React, TypeScript, Chakra UI, Zustand) : tableau de bord, gestion de ses plantes avec photos, parcours complet de garde (demande, offres, messagerie privée, journal avec photos, note du gardien), questions aux botanistes et espace d’administration, en six langues et en mode clair ou sombre. Côté API (FastAPI, PostgreSQL) : données personnelles chiffrées en base, migrations appliquées au démarrage, et toute la pile sous Docker Compose avec son observabilité (Grafana, Prometheus, Loki, Tempo).',
    },
    momentum: {
      kind: 'Application mobile',
      title: 'Momentum',
      blurb: 'Une to-do list gamifiée, 100 % locale : tâches, routines, série et XP stockés sur le téléphone.',
      cat: 'Application mobile',
      detail:
        'Application Flutter de to-do gamifiée, sans compte ni serveur : tout vit dans une base SQLite sur le téléphone. Chaque tâche fermée rapporte de l’XP, les routines se réimpriment chaque jour, une série récompense la régularité, une quête du jour donne un bonus, et des statistiques comparent les 28 derniers jours aux précédents. Un rappel local est envoyé le soir s’il reste des tâches ouvertes.',
    },
    kaizen: {
      kind: 'Application mobile',
      title: 'Kaizen 365',
      blurb: 'Une application de suivi d’objectifs annuels selon la méthode OKR, avec check-ins, graphiques et bilan de fin d’année.',
      cat: 'Application mobile',
      detail:
        'Application Flutter de suivi d’objectifs annuels, 100 % locale : aucun compte ni donnée envoyée sur Internet. Chaque objectif suit la méthode OKR (2 à 4 résultats clés : valeur chiffrée, pourcentage ou jalons), reçoit un statut calculé selon le temps écoulé dans l’année et un graphique comparé à la progression attendue. Check-ins avec humeur, rappels par notifications, widget Android, six thèmes, français et anglais, sauvegarde en JSON, et un bilan qui reporte les objectifs non atteints sur l’année suivante. Architecture Bloc, couverte par un test de bout en bout comparé à des captures de référence.',
    },
    hargne: {
      kind: 'Application mobile',
      title: 'Hargne',
      blurb: 'Une application pour planifier et suivre ses séances d’entraînement multisport : course, trail, vélo, natation et renforcement.',
      cat: 'Application mobile',
      detail:
        'Application Flutter de planification d’entraînement multisport. Les écrans Aujourd’hui, Plan de la semaine et Détail de séance affichent durée, distance, allure et fréquence cardiaque cibles, RPE et structure par blocs, avec une case « faite ». Les séances se créent dans l’application ou s’importent depuis un fichier CSV, avec détection du séparateur, colonnes dans n’importe quel ordre et alias reconnus, puis se réexportent au même format pour Excel. La connexion à Garmin permet de récupérer ses propres activités. D’autres écrans (calendrier, historique, charge d’entraînement, Strava) sont encore des maquettes.',
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
      note: 'Deux ans de développement front en production',
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
    background: 'Couleur de fond',
    resetBackground: 'Revenir à la couleur de fond d’origine',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
}
