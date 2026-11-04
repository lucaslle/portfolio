import type { Translation } from './types'

export const fr: Translation = {
  tag: 'FR',
  switchTo: 'Afficher le site en français',

  documentTitle: 'Lucas Laliche — Product Engineer React & Chef de projet',
  documentDescription:
    'Portfolio de Lucas Laliche — Product Engineer React et chef de projet. Je cadre, je développe les features et je fais les démos.',

  role: 'Product Engineer · Chef de projet',

  nav: {
    home: 'Accueil',
    about: 'À propos',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },

  loader: 'Chargement',

  hero: {
    badge: '2 ans d’expérience · Front-end & chef de projet',
    headline: ['Product Engineer', 'React.'],
    roles: ['Chef de projet qui code', 'Product Engineer React', 'Du besoin à la démo'],
    lead: 'Chef de projet qui code : je cadre les besoins, je développe les features et je présente les démos. Deux ans de développement front en React, dont un an en alternance.',
    techs: 'Technologies',
    hints: ['↓ découvrez mes projets plus bas', '↗ ouvert aux échanges et aux collaborations'],
  },

  about: {
    eyebrow: 'À propos',
    story:
      'Product Engineer React et chef de projet : je fais le pont entre le besoin et le code. Je cadre avec le Product Owner et les designers, je développe les features moi-même, j’anime les cérémonies Scrum d’une équipe de 14 personnes, puis je présente en démo et je déploie. Deux ans de développement front, dont un an en alternance, avec un peu de Python et un vrai intérêt pour l’IA.',
    quote: 'Faire le pont entre le besoin et le code.',
    viewProjects: 'Voir les projets',
    contact: 'Me contacter',
    method: {
      title: 'Ma méthode, du besoin à la production',
      steps: [
        { title: 'Besoin', text: 'Recueillir et analyser le besoin avec le Product Owner.' },
        { title: 'Délais', text: 'Estimer et s’engager sur les délais.' },
        { title: 'Maquettes', text: 'Concevoir les maquettes avec les designers.' },
        { title: 'Développement', text: 'Développer en React : composants modulaires, API, gestion d’état.' },
        { title: 'Démo', text: 'Présenter le résultat au client.' },
        { title: 'Déploiement', text: 'Mettre en production.' },
      ],
    },
    stats: {
      years: 'ans d’expérience',
      yearsAndMonths: 'ans et {months} d’expérience',
      roles: 'rôles occupés',
      skills: 'technologies utilisées',
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
    filtersLabel: 'Filtrer les projets',
    filters: { all: 'Tous', pro: 'Professionnels', personal: 'Personnels & études' },
    sourceLabel: (label) => `Code source (${label})`,
    softSkillsLabel: 'Savoir-être',
    experience: 'Expérience',
    education: 'Formation',
  },

  projects: {
    'ged-mobile': {
      kind: 'Projet professionnel',
      title: 'Application mobile de la GED',
      blurb: 'L’application Flutter qui prolonge la GED web.',
      cat: 'Application mobile',
      detail:
        'Application Flutter associée à la GED web : elle donne accès à la gestion électronique de documents depuis un appareil mobile.',
    },
    'hp-printer': {
      kind: 'Projet professionnel',
      title: 'Application embarquée sur imprimante HP',
      blurb: 'Une application qui tourne directement sur l’écran d’une imprimante HP.',
      cat: 'Application embarquée',
      detail:
        'Application embarquée sur imprimante HP : elle s’exécute directement sur l’appareil, sans passer par un ordinateur.',
    },
    ged: {
      kind: 'Projet professionnel',
      title: 'GED en SaaS',
      blurb: 'Le front React d’une gestion documentaire en SaaS : arborescence, circuits de validation, factures, tâches et portail invités.',
      cat: 'Application web',
      detail:
        'Front React d’une application SaaS de gestion électronique de documents et de workflows de validation, éditée pour des entreprises et utilisée par plus de 600 personnes. On y trouve l’arborescence des documents, les circuits de validation, les factures, les tâches, les statistiques, un portail pour les invités externes et l’administration des utilisateurs, des équipes et des absences. L’interface existe en 7 langues.',
      study: {
        context:
          'Des centaines d’utilisateurs doivent retrouver leurs documents, les faire valider et suivre leurs dossiers, avec des droits d’accès fins et des invités externes qui n’ont accès qu’à leur périmètre.',
        role: 'Développeur front pendant environ 2 ans, premier contributeur du dépôt (environ 20 % des commits) dans une équipe d’une dizaine de développeurs. Un peu de cadrage des besoins, et du Scrum au sein de l’équipe.',
        choices: [
          'Un contrôle des traductions bloquant au commit : il détecte, dans les 7 langues, les clés manquantes et les clés en trop par rapport à la langue de référence.',
          'Une configuration chargée au runtime, sans service tiers de feature flags : une seule image Docker sert tous les environnements.',
          'Un rechargement automatique vers la nouvelle version déployée, sans action de l’utilisateur.',
          'Une validation des requêtes GraphQL contre le schéma de l’API, avec deux schémas (interne et portail) choisis selon l’emplacement du code.',
          'Des tests découpés en deux suites, l’une isolée et rapide, avec une couverture fusionnée à la fin.',
          'Une suppression d’utilisateurs avec analyse d’impact : on désigne des successeurs, on voit ce qui bloque et on suit l’exécution.',
        ],
        results: [
          'Environ 2 ans sur le projet, au sein d’une équipe d’une dizaine de développeurs.',
          'Une application utilisée par plus de 600 personnes.',
          'Une interface en 7 langues, dont la cohérence est vérifiée à chaque commit.',
        ],
      },
    },
    signature: {
      kind: 'Projet professionnel',
      title: 'Signature électronique',
      blurb: 'Une application pour envoyer des documents en signature via YouTrust et suivre l’état de chaque signature.',
      cat: 'Application web',
      detail:
        'Application web de signature électronique connectée à YouTrust. On y ajoute des documents, on les envoie en signature, puis on suit le statut de chaque signature. Même stack que la GED : React avec Chakra UI, tests avec Vitest, une part de Python.',
      study: {
        context:
          'Faire signer un document oblige à jongler entre plusieurs outils. L’enjeu : tout faire au même endroit, de l’ajout du document au suivi de la signature.',
        role: 'Développeur front, avec une part de cadrage des besoins. Travail en équipe Scrum.',
        choices: [
          'Une intégration avec YouTrust pour l’envoi en signature.',
          'Un suivi du statut de chaque signature directement dans l’application.',
          'La même stack que la GED (React, Chakra UI, Vitest, Python).',
        ],
        results: [
          'Ajout des documents, envoi en signature et suivi de statut réunis dans une seule application.',
          'Des tests automatisés avec Vitest, comme sur la GED.',
        ],
      },
    },
    piseo: {
      kind: 'Projet de BTS',
      title: 'Piséo',
      blurb: 'Une application en Python réalisée pour un client réel, dans le cadre de mon BTS.',
      cat: 'Application',
      detail:
        'Application développée en Python pour l’entreprise Piséo, dans le cadre de mon BTS SNIR : un projet de fin de formation réalisé pour un client réel.',
    },
    office: {
      kind: 'Outil de suivi · 3D',
      title: 'Claude Manage Office',
      blurb: 'Un bureau en 3D où mes conversations Claude Code et mes merge requests GitLab se déplacent de pièce en pièce selon leur état.',
      cat: 'Outil interne',
      detail:
        'Un tableau de bord en 3D pour voir d’un coup d’œil quelles conversations Claude Code attendent une réponse et quelles merge requests GitLab sont à relire ou à merger. Chaque conversation ou MR est un personnage qui change de pièce quand son état change : accueil quand une réponse est attendue, atelier quand un pipeline échoue, salle de réunion quand plusieurs agents tournent. Des hooks Claude Code écrivent l’état des sessions, un serveur local interroge l’API GitLab et pousse les changements en direct (SSE) à une scène Three.js.',
      study: {
        context:
          'Quand plusieurs conversations Claude Code et plusieurs merge requests tournent en parallèle, il est difficile de savoir laquelle attend une réponse ou bloque. L’enjeu : lire l’état de tout son travail d’un coup d’œil.',
        choices: [
          'Des hooks Claude Code écrivent l’état de chaque session dans un fichier JSON ; ils n’affichent rien et ne font jamais échouer Claude Code.',
          'Un serveur local lit ces fichiers toutes les 2 secondes, interroge l’API GitLab toutes les 60 secondes et pousse les changements en direct (SSE) ; il n’écoute que sur 127.0.0.1.',
          'Une scène Three.js avec des modèles glTF, dont la qualité baisse toute seule si l’animation devient saccadée, et un mode démo sans serveur.',
        ],
        results: [
          'Un état égale une pièce : on repère tout de suite ce qui attend une réponse ou une correction, avec la cause des MR en échec.',
          'Intégration continue en place sur le dépôt.',
          'Une démo en ligne utilisable sans rien installer.',
        ],
      },
    },
    arosaje: {
      kind: 'Application web · Full-stack',
      title: 'A’rosa-je',
      blurb: 'Une application où des particuliers confient leurs plantes à d’autres membres pendant leur absence et demandent conseil à des botanistes.',
      cat: 'Application web',
      detail:
        'Application full-stack, front et API. Côté interface (React, TypeScript, Chakra UI, Zustand) : tableau de bord, gestion de ses plantes avec photos, parcours complet de garde (demande, offres, messagerie privée, journal avec photos, note du gardien), questions aux botanistes et espace d’administration, en six langues et en mode clair ou sombre. Côté API (FastAPI, PostgreSQL) : données personnelles chiffrées en base, migrations appliquées au démarrage, et toute la pile sous Docker Compose avec son observabilité (Grafana, Prometheus, Loki, Tempo).',
      study: {
        context:
          'Des particuliers qui s’absentent ne savent pas à qui confier leurs plantes, ni qui interroger quand l’une d’elles dépérit. L’enjeu : mettre en relation propriétaires, gardiens et botanistes, avec des données personnelles protégées.',
        choices: [
          'Front et API séparés : React, TypeScript et Vite d’un côté, FastAPI et PostgreSQL de l’autre, reliés par un client HTTP typé.',
          'Zustand pour le seul état partagé (membre connecté, langue), React Router pour des pages réservées aux membres, Chakra UI pour le thème clair ou sombre.',
          'E-mail, nom et téléphone chiffrés en base, retrouvés par empreintes HMAC sans jamais les déchiffrer.',
          'Migrations Alembic appliquées au démarrage et pile Docker Compose avec observabilité (Grafana, Prometheus, Loki, Tempo).',
        ],
        results: [
          'Six langues : TypeScript refuse un fichier de langue incomplet et des tests vérifient les variables de chaque traduction.',
          'RGPD : export des données du membre et suppression du compte avec ses plantes, photos et échanges.',
          'Connexion limitée (réponse 429 après 10 échecs en 15 minutes) ; tests Vitest côté front et tests d’API sans PostgreSQL.',
        ],
      },
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
      study: {
        context:
          'Les objectifs de l’année se perdent faute de suivi. L’enjeu : un suivi OKR simple, utilisable sans compte ni connexion, qui dit si l’on est en retard par rapport au temps écoulé.',
        choices: [
          '100 % local : aucune API ni compte, données sur le téléphone, sauvegarde et restauration dans un fichier JSON.',
          'Architecture OSDD avec Clean Architecture et flutter_bloc : Vue, Cubit, cas d’usage, puis gateway.',
          'Statut de chaque objectif calculé en comparant sa progression au temps écoulé dans l’année.',
        ],
        results: [
          'Un test de bout en bout parcourt l’application et compare chaque écran à une capture de référence.',
          'Widget Android, rappels locaux, six thèmes, français et anglais.',
          'APK d’environ 20 Mo par architecture de processeur, contre 52 Mo en universel.',
        ],
      },
    },
    hargne: {
      kind: 'Application mobile',
      title: 'Hargne',
      blurb: 'Une application pour planifier et suivre ses séances d’entraînement multisport : course, trail, vélo, natation et renforcement.',
      cat: 'Application mobile',
      detail:
        'Application Flutter de planification d’entraînement multisport. Les écrans Aujourd’hui, Plan de la semaine et Détail de séance affichent durée, distance, allure et fréquence cardiaque cibles, RPE et structure par blocs, avec une case « faite ». Les séances se créent dans l’application ou s’importent depuis un fichier CSV, avec détection du séparateur, colonnes dans n’importe quel ordre et alias reconnus, puis se réexportent au même format pour Excel. La connexion à Garmin permet de récupérer ses propres activités. D’autres écrans (calendrier, historique, charge d’entraînement, Strava) sont encore des maquettes.',
      study: {
        context:
          'Un plan d’entraînement multisport vit souvent dans un tableur, loin de la séance du jour. L’enjeu : le consulter et le cocher depuis le téléphone, sans perdre la compatibilité avec Excel.',
        choices: [
          '100 % local : le plan est enregistré sur l’appareil au format CSV, sans compte ni serveur.',
          'Un format CSV documenté : séparateur détecté (point-virgule, virgule ou tabulation), colonnes dans n’importe quel ordre, noms de colonnes tolérants (casse, accents, alias), guillemets selon la RFC 4180.',
          'Un import qui valide tout le fichier avant de toucher au plan, avec deux modes : fusionner (même date et même titre) ou remplacer.',
          'Un export avec BOM et fins de ligne CRLF pour qu’Excel l’ouvre sans réglage.',
          'Import des activités Garmin via l’API personnelle de Garmin Connect : clé gardée dans le stockage chiffré du téléphone, un seul appel pour la liste (1 000 activités au premier import), puis seulement les nouvelles sorties.',
        ],
        results: [
          'À la première erreur, l’import s’arrête et indique le numéro de ligne : colonne absente, date invalide, sport inconnu, RPE hors de 1 à 10.',
          'Un même fichier fait l’aller-retour entre l’application et Excel.',
          'Tout l’historique Garmin s’importe, rattaché à la séance prévue, et le détail d’une sortie affiche sa trace GPS simplifiée, téléchargée seulement à l’ouverture pour limiter les appels.',
          'Les écrans encore à l’état de maquette (calendrier, charge d’entraînement, Strava) sont signalés comme tels, avec des données fictives.',
        ],
      },
    },
    ecu: {
      kind: 'Application mobile',
      title: 'écu',
      blurb: 'Une application de suivi des dépenses quotidiennes pour jeunes épargnants, avec budgets par catégorie et suivi de l’épargne.',
      cat: 'Application mobile',
      detail:
        'Application Flutter de suivi des dépenses, 100 % locale : les données restent sur le téléphone. Elle importe un relevé bancaire en CSV et classe automatiquement chaque opération par mots-clés, avec un reclassement en masse depuis le détail d’une opération. Tableau de bord du jour, budget mensuel par catégorie et analyses en graphiques, plus le suivi des comptes d’épargne et de placement avec l’historique de leurs soldes. Les montants peuvent être masqués à l’écran.',
      study: {
        context:
          'Suivre ses dépenses oblige souvent à confier ses données bancaires à un service tiers. L’enjeu : un suivi simple pour jeunes épargnants, où tout reste sur le téléphone.',
        choices: [
          '100 % local : l’import d’un relevé bancaire CSV (date, libellé, montant) remplace toute connexion à la banque.',
          'Catégorisation automatique par mots-clés, avec un reclassement en masse depuis le détail d’une opération.',
          'Architecture OSDD : une couche technique réutilisable (thème, formats français, masquage des montants, graphiques) séparée des couches fonctionnelles Dépenses et Épargne.',
        ],
        results: [
          'Tableau de bord du jour, budget mensuel par catégorie et analyses en graphiques.',
          'Suivi de l’épargne et des placements avec l’historique des soldes.',
          'Montants masquables à l’écran, pour consulter l’application en public.',
        ],
      },
    },
  },

  skillGroups: {
    frontend: { name: 'Front-end', proof: 'GED SaaS : environ 2 ans de développement front en production, scène 3D sur Claude Manage Office.' },
    quality: {
      name: 'Qualité & outils',
      proof: 'Tests en deux suites, contrôle des traductions à chaque commit, déploiement via GitLab CI.',
    },
    mobile: {
      name: 'Mobile',
      proof: 'Application mobile de la GED et quatre applications personnelles : Kaizen 365, Hargne, écu, Momentum.',
    },
    backend: {
      name: 'Back-end',
      proof: 'API FastAPI et PostgreSQL sur Arosaje, Python sur la GED.',
    },
    management: {
      name: 'Gestion de projet',
      proof: 'Cérémonies Scrum d’une équipe de 14 personnes, cadrage avec le Product Owner, démos client.',
    },
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
        'GED en SaaS, côté front React : plateforme de gestion électronique de documents (recherche, prévisualisation, droits et autorisations fins), utilisée par plus de 600 utilisateurs.',
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
        'Développement du front React de la GED en SaaS.',
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
    context: 'Contexte & enjeu',
    role: 'Rôle & méthode',
    choices: 'Choix techniques',
    results: 'Résultats',
    cvTitle: 'Mon CV',
    download: 'Télécharger',
  },

  contact: {
    lead: 'Une idée en tête ? Écrivez-moi et discutons-en.',
    name: 'Nom',
    namePlaceholder: 'Prénom Nom',
    email: 'Email',
    emailPlaceholder: 'vous@exemple.fr',
    emailInvalid: 'Adresse e-mail invalide : vérifiez le format (nom@domaine.fr).',
    message: 'Message',
    messagePlaceholder: 'Parlons de votre projet…',
    send: 'Envoyer par e-mail',
    sending: 'Envoi en cours…',
    sent: 'Message envoyé, merci ! Je vous réponds vite.',
    error: 'L’envoi a échoué. Écrivez-moi directement par e-mail.',
    findMe: 'Me retrouver',
    findMeText: 'Je réponds directement par e-mail, ou retrouvez-moi sur les réseaux.',
    mailSubject: 'Contact portfolio',
  },

  footer: 'Réalisé avec React Bits',
  cv: 'Voir mon CV',
  cvShort: 'CV',

  a11y: {
    mainNav: 'Navigation principale',
    languageSwitch: 'Choix de la langue',
    background: 'Couleur de fond',
    resetBackground: 'Revenir à la couleur de fond d’origine',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
}
