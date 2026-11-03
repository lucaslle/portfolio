import type { Translation } from './types'

export const en: Translation = {
  tag: 'EN',
  switchTo: 'View this site in English',

  documentTitle: 'Lucas Laliche — AI Architect & Project Lead',
  documentDescription:
    'Portfolio of Lucas Laliche — AI architect and project lead. I scope the need, build the features and run the demos.',

  role: 'AI Architect · Project Lead',

  nav: {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },

  loader: 'Loading',

  hero: {
    badge: '2 years of experience · Front-end & AI',
    headline: ['AI', 'Architect.'],
    roles: ['A project lead who codes', 'React front-end developer', 'AI architect'],
    lead: 'A project lead who codes: I scope the need, build the features myself, then run the demos. Two years of React front-end development, including one as an apprentice, and now an AI architect role.',
    techs: 'Technologies',
    hints: ['↓ my projects are further down', '↗ open to conversations and collaborations'],
  },

  about: {
    eyebrow: 'About',
    story:
      'React developer and project lead: I bridge the gap between the need and the code. I scope the work with the Product Owner and the designers, build the features myself, run the Scrum ceremonies of a 14-person team, then present them in demos and deploy. Two years of front-end development, including one as an apprentice, with some Python and a genuine interest in AI.',
    quote: 'Bridging the gap between the need and the code.',
    viewProjects: 'View projects',
    contact: 'Get in touch',
    method: {
      title: 'My method, from need to production',
      steps: [
        { title: 'Need', text: 'Gather and analyse the need with the Product Owner.' },
        { title: 'Deadlines', text: 'Estimate and commit to deadlines.' },
        { title: 'Mock-ups', text: 'Design the mock-ups with the designers.' },
        { title: 'Development', text: 'Build in React: modular components, APIs, state management.' },
        { title: 'Demo', text: 'Present the result to the client.' },
        { title: 'Deployment', text: 'Ship to production.' },
      ],
    },
    stats: {
      years: 'years of experience',
      roles: 'roles held',
      skills: 'key skills',
    },
  },

  portfolio: {
    title: 'Portfolio Showcase',
    lead: 'My projects, my skills and my journey.',
    tabsLabel: 'Portfolio content',
    tabs: {
      projects: 'Projects',
      skills: 'Skills',
      journey: 'Journey',
    },
    details: 'Details ↗',
    previousProjects: 'Previous projects',
    nextProjects: 'Next projects',
    sourceLabel: (label) => `Source code (${label})`,
    skillLevel: (level, max) => `Level ${level} out of ${max}`,
    softSkillsLabel: 'Soft skills',
    experience: 'Experience',
    education: 'Education',
  },

  projects: {
    'ged-mobile': {
      kind: 'Professional project',
      title: 'DMS mobile app',
      blurb: 'The Flutter app that extends the web DMS.',
      cat: 'Mobile application',
      detail:
        'A Flutter application paired with the web DMS: it gives access to document management from a mobile device.',
    },
    'hp-printer': {
      kind: 'Professional project',
      title: 'HP printer embedded app',
      blurb: 'An application that runs directly on the screen of an HP printer.',
      cat: 'Embedded application',
      detail:
        'An application embedded on an HP printer: it runs directly on the device, without going through a computer.',
    },
    ged: {
      kind: 'Professional project',
      title: 'SaaS DMS',
      blurb: 'The React front end of a SaaS document management system: folder tree, validation circuits, invoices, tasks and a guest portal.',
      cat: 'Web application',
      detail:
        'React front end of a SaaS document management and validation workflow application, sold to companies and used by over 600 people. It covers the document tree, validation circuits, invoices, tasks, statistics, a portal for external guests and the administration of users, teams and absences. The interface exists in 7 languages.',
      study: {
        context:
          'Hundreds of users need to find their documents, get them validated and follow their files, with fine-grained access rights and external guests who only reach their own scope.',
        role: 'Front-end developer for about 2 years, first contributor to the repository (about 20% of commits) in a team of around ten developers. Some requirements scoping, and Scrum within the team.',
        choices: [
          'A translation check that blocks the commit: across the 7 languages, it detects missing and extra keys compared with the reference language.',
          'Configuration loaded at runtime, with no third-party feature-flag service: a single Docker image serves every environment.',
          'An automatic reload to the newly deployed version, with no action from the user.',
          'GraphQL queries validated against the API schema, with two schemas (internal and portal) chosen by where the code lives.',
          'Tests split into two suites, one isolated and fast, with coverage merged at the end.',
          'User deletion with impact analysis: you name successors, see what blocks and follow the execution.',
        ],
        results: [
          'About 2 years on the project, within a team of around ten developers.',
          'An application used by over 600 people.',
          'An interface in 7 languages, kept consistent by a check on every commit.',
        ],
      },
    },
    signature: {
      kind: 'Professional project',
      title: 'E-signature',
      blurb: 'An app to send documents for signature through YouTrust and track the status of each signature.',
      cat: 'Web application',
      detail:
        'A web e-signature application connected to YouTrust. You add documents, send them for signature, then track the status of each signature. Same stack as the DMS: React with Chakra UI, tested with Vitest, with some Python.',
      study: {
        context:
          'Getting a document signed means juggling several tools. The goal: do everything in one place, from adding the document to tracking the signature.',
        role: 'Front-end developer, with some requirements scoping. Worked in a Scrum team.',
        choices: [
          'An integration with YouTrust to send documents for signature.',
          'Signature status tracking directly in the application.',
          'The same stack as the DMS (React, Chakra UI, Vitest, Python).',
        ],
        results: [
          'Adding documents, sending for signature and status tracking in a single application.',
          'Automated tests with Vitest, as on the DMS.',
        ],
      },
    },
    office: {
      kind: 'Monitoring tool · 3D',
      title: 'Claude Manage Office',
      blurb: 'A 3D office where my Claude Code conversations and GitLab merge requests move from room to room as their status changes.',
      cat: 'Internal tool',
      detail:
        'A 3D dashboard showing at a glance which Claude Code conversations are waiting for a reply and which GitLab merge requests need a review or a merge. Each conversation or MR is a character that changes room when its status changes: reception when a reply is needed, workshop when a pipeline fails, meeting room when several agents are running. Claude Code hooks record session status, a local server polls the GitLab API and streams changes live (SSE) to a Three.js scene.',
      study: {
        context:
          'When several Claude Code conversations and merge requests run in parallel, it’s hard to tell which one is waiting for an answer or blocked. The stake: read the state of all your work at a glance.',
        choices: [
          'Claude Code hooks write each session’s state to a JSON file; they print nothing and never make Claude Code fail.',
          'A local server reads those files every 2 seconds, queries the GitLab API every 60 seconds and pushes changes live (SSE); it only listens on 127.0.0.1.',
          'A Three.js scene with glTF models whose quality drops by itself if the animation gets choppy, plus a demo mode that needs no server.',
        ],
        results: [
          'One state, one room: you immediately see what is waiting for an answer or a fix, with the cause of failing MRs.',
          'Continuous integration set up on the repository.',
          'A live demo you can use without installing anything.',
        ],
      },
    },
    arosaje: {
      kind: 'Web app · Full-stack',
      title: 'A’rosa-je',
      blurb: 'An app where people entrust their plants to other members while they are away and ask botanists for advice.',
      cat: 'Web app',
      detail:
        'A full-stack app, front end and API. On the interface side (React, TypeScript, Chakra UI, Zustand): dashboard, plant management with photos, the full plant-sitting flow (request, offers, private messaging, photo journal, sitter rating), questions to botanists and an admin area, in six languages and in light or dark mode. On the API side (FastAPI, PostgreSQL): personal data encrypted at rest, migrations applied on startup, and the whole stack on Docker Compose with its observability tools (Grafana, Prometheus, Loki, Tempo).',
      study: {
        context:
          'People who go away don’t know who to trust with their plants, or who to ask when one of them is struggling. The stake: connect owners, sitters and botanists while keeping personal data protected.',
        choices: [
          'Separate front end and API: React, TypeScript and Vite on one side, FastAPI and PostgreSQL on the other, linked by a typed HTTP client.',
          'Zustand only for shared state (signed-in member, language), React Router for member-only pages, Chakra UI for the light or dark theme.',
          'Email, name and phone number encrypted in the database, looked up through HMAC fingerprints without ever decrypting them.',
          'Alembic migrations applied at startup and a Docker Compose stack with observability (Grafana, Prometheus, Loki, Tempo).',
        ],
        results: [
          'Six languages: TypeScript rejects an incomplete language file and tests check the variables in every translation.',
          'GDPR: export of the member’s data and account deletion along with their plants, photos and exchanges.',
          'Login rate limiting (429 after 10 failures in 15 minutes); Vitest tests on the front end and API tests that need no PostgreSQL.',
        ],
      },
    },
    momentum: {
      kind: 'Mobile app',
      title: 'Momentum',
      blurb: 'A gamified to-do list that runs 100% on the device: tasks, routines, streaks and XP stored on the phone.',
      cat: 'Mobile app',
      detail:
        'A gamified to-do app in Flutter, with no account and no server: everything lives in a SQLite database on the phone. Closing a task earns XP, routines reappear every day, a streak rewards consistency, a daily quest gives a bonus, and stats compare the last 28 days with the previous 28. A local reminder is sent in the evening if tasks are still open.',
    },
    kaizen: {
      kind: 'Mobile app',
      title: 'Kaizen 365',
      blurb: 'An app for tracking yearly goals with the OKR method, with check-ins, charts and an end-of-year review.',
      cat: 'Mobile app',
      detail:
        'A Flutter app for tracking yearly goals that runs entirely on the device: no account and no data sent over the internet. Each goal follows the OKR method (2 to 4 key results: a number, a percentage or milestones), gets a status computed from how far the year has gone, and a chart compared with the expected progress. Check-ins with a mood, notification reminders, an Android home-screen widget, six themes, French and English, JSON backup, and a yearly review that carries unfinished goals over to the next year. Built with Bloc and covered by an end-to-end test compared against reference screenshots.',
      study: {
        context:
          'Yearly goals get lost without follow-up. The stake: simple OKR tracking that works with no account or connection and tells you whether you are behind relative to the time elapsed.',
        choices: [
          '100% local: no API or account, data stays on the phone, backup and restore through a JSON file.',
          'OSDD architecture with Clean Architecture and flutter_bloc: View, Cubit, use case, then gateway.',
          'Each goal’s status is computed by comparing its progress to the time elapsed in the year.',
        ],
        results: [
          'An end-to-end test walks through the app and compares every screen to a reference screenshot.',
          'Android widget, local reminders, six themes, French and English.',
          'About 20 MB per CPU architecture APK, against 52 MB for a universal one.',
        ],
      },
    },
    hargne: {
      kind: 'Mobile app',
      title: 'Hargne',
      blurb: 'An app for planning and tracking multisport training sessions: running, trail, cycling, swimming and strength.',
      cat: 'Mobile app',
      detail:
        'A Flutter app for planning multisport training. The Today, Weekly plan and Session detail screens show target duration, distance, pace and heart rate, RPE and a block-by-block structure, with a “done” checkbox. Sessions are created in the app or imported from a CSV file, with separator detection, columns in any order and recognised aliases, then exported back in the same format for Excel. Connecting to Garmin brings in your own activities. Other screens (calendar, history, training load, Strava) are still mockups.',
      study: {
        context:
          'A multisport training plan often lives in a spreadsheet, far from the day’s workout. The stake: check and tick it off from the phone without losing Excel compatibility.',
        choices: [
          '100% local: the plan is stored on the device as a CSV file, with no account or server.',
          'A documented CSV format: detected separator (semicolon, comma or tab), columns in any order, forgiving column names (case, accents, aliases), quoting per RFC 4180.',
          'An import that validates the whole file before touching the plan, with two modes: merge (same date and title) or replace.',
          'An export with a BOM and CRLF line endings so Excel opens it without any setup.',
          'Garmin activity import through Garmin Connect’s personal API: key kept in the phone’s encrypted storage, a single call for the list (1,000 activities on the first import), then only new activities.',
        ],
        results: [
          'At the first error the import stops and gives the line number: missing column, invalid date, unknown sport, RPE outside 1 to 10.',
          'The same file round-trips between the app and Excel.',
          'The whole Garmin history imports, linked to the planned session, and an activity’s detail shows its simplified GPS track, downloaded only when opened to limit calls.',
          'Screens that are still mock-ups (calendar, training load, Strava) are labelled as such, with fictional data.',
        ],
      },
    },
    ecu: {
      kind: 'Mobile app',
      title: 'écu',
      blurb: 'A daily spending tracker for young savers, with category budgets and savings tracking.',
      cat: 'Mobile app',
      detail:
        'A Flutter spending tracker that runs entirely on the device: data never leaves the phone. It imports a bank statement as CSV and automatically categorises each transaction by keyword, with bulk re-categorisation from a transaction’s detail. A daily dashboard, a monthly budget per category and chart-based analytics, plus savings and investment accounts with their balance history. Amounts can be hidden on screen.',
      study: {
        context:
          'Tracking spending often means handing bank data to a third-party service. The stake: simple tracking for young savers, where everything stays on the phone.',
        choices: [
          '100% local: importing a CSV bank statement (date, label, amount) replaces any connection to the bank.',
          'Automatic keyword-based categorisation, with bulk reclassification from an operation’s detail.',
          'OSDD architecture: a reusable technical layer (theme, French formats, amount masking, charts) kept apart from the Spending and Savings functional layers.',
        ],
        results: [
          'Daily dashboard, monthly budget per category and chart analytics.',
          'Savings and investment tracking with balance history.',
          'Amounts can be hidden on screen, to use the app in public.',
        ],
      },
    },
  },

  skills: {
    'project-management': {
      name: 'Project management',
      level: 'Daily',
      note: 'Scoping, follow-up, demos and business relations',
    },
    react: {
      name: 'React / TypeScript',
      level: 'Solid',
      note: 'Two years of front-end development in production',
    },
    'html-css': { name: 'HTML / CSS', level: 'Solid', note: 'Integration, responsive, accessibility' },
    'ai-architecture': {
      name: 'AI architecture',
      level: 'Learning',
      note: 'Current role — ramping up',
    },
    python: { name: 'Python', level: 'Basics', note: 'Scripts, automation, data wrangling' },
    'git-ci': { name: 'Git / CI', level: 'Solid', note: 'Branches, reviews, deployments' },
  },

  softSkills: [
    'Scoping the need',
    'Client demos',
    'Explaining clearly',
    'Autonomy',
    'Teamwork',
    'AI watch',
  ],

  jobs: {
    j1: {
      role: 'React Developer & Project Management',
      place: 'Rillieux-la-Pape · Permanent',
      period: 'Oct. 2025 — now',
      summary:
        'I run projects end to end: from gathering the need to going live, while staying hands-on with the code.',
      bullets: [
        'End-to-end project management: needs analysis, estimates and delivery commitments, mockups, development, client demo, then deployment.',
        'Internal DMS in React: a document management platform (search, preview, fine-grained rights and permissions) used by more than 700 people.',
        'Front-end architecture: responsive, modular and maintainable interfaces (component architecture, API integration, state management).',
        'Scrum Master: running agile ceremonies and clearing blockers for a team of 14.',
        'Close work with the Product Owner, designers and back-end developers, proposing technical and UX choices.',
      ],
    },
    j2: {
      role: 'React Developer — apprenticeship',
      place: 'Rillieux-la-Pape · Apprenticeship',
      period: 'Aug. 2024 — Oct. 2025',
      summary:
        'A year as an apprentice (CDA, bachelor’s level) in the same team, before moving to a permanent role.',
      bullets: [
        'Design and development of the internal DMS in React.',
        'Involved in scoping, client demos and production releases.',
      ],
    },
    j3: {
      role: 'Developer intern',
      place: 'Digital Services Department',
      period: 'May — Jul. 2023',
      summary: 'BTS internship in the Digital Services Department.',
      bullets: [
        'Contributed to Easily, the patient record software used by the HCL medical and paramedical staff.',
      ],
    },
  },

  education: {
    e1: { title: 'Application Designer & Developer (CDA) — bachelor’s level, apprenticeship' },
    e2: { title: 'BTS SNIR — Digital Systems, Computing and Networks' },
    e3: { title: 'STI2D Baccalaureate — with honours' },
  },

  modal: {
    close: 'Close',
    liveDemo: 'Live demo',
    source: 'Source',
    context: 'Context & stakes',
    role: 'Role & method',
    choices: 'Technical choices',
    results: 'Results',
  },

  contact: {
    lead: 'Got an idea in mind? Write to me and let’s talk.',
    name: 'Name',
    namePlaceholder: 'First Last',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project…',
    send: 'Send by email',
    sending: 'Sending…',
    sent: 'Message sent, thank you! I’ll reply soon.',
    error: 'Sending failed. Please email me directly.',
    findMe: 'Find me',
    findMeText: 'I reply directly by email, or find me on social media.',
    mailSubject: 'Portfolio contact',
  },

  footer: 'Built with React Bits',
  cv: 'Download my résumé (PDF, French)',
  cvShort: 'Résumé',

  a11y: {
    mainNav: 'Main navigation',
    languageSwitch: 'Language',
    background: 'Background colour',
    resetBackground: 'Restore the original background colour',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
}
