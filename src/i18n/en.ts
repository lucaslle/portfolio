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
      'I bridge the gap between the need and the code. In practice: I scope the work, build the features myself, then present them in demos. Two years of front-end development, including one as an apprentice, with some Python, and I am now starting out in AI architecture.',
    quote: 'Bridging the gap between the need and the code.',
    viewProjects: 'View projects',
    contact: 'Get in touch',
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
    sourceLabel: (label) => `Source code (${label})`,
    skillLevel: (level, max) => `Level ${level} out of ${max}`,
    softSkillsLabel: 'Soft skills',
    experience: 'Experience',
    education: 'Education',
  },

  projects: {
    office: {
      kind: 'Monitoring tool · 3D',
      title: 'Claude Manage Office',
      blurb: 'A 3D office where my Claude Code conversations and GitLab merge requests move from room to room as their status changes.',
      cat: 'Internal tool',
      detail:
        'A 3D dashboard showing at a glance which Claude Code conversations are waiting for a reply and which GitLab merge requests need a review or a merge. Each conversation or MR is a character that changes room when its status changes: reception when a reply is needed, workshop when a pipeline fails, meeting room when several agents are running. Claude Code hooks record session status, a local server polls the GitLab API and streams changes live (SSE) to a Three.js scene.',
    },
    arosaje: {
      kind: 'Web app · Full-stack',
      title: 'A’rosa-je',
      blurb: 'An app where people entrust their plants to other members while they are away and ask botanists for advice.',
      cat: 'Web app',
      detail:
        'A full-stack app, front end and API. On the interface side (React, TypeScript, Chakra UI, Zustand): dashboard, plant management with photos, the full plant-sitting flow (request, offers, private messaging, photo journal, sitter rating), questions to botanists and an admin area, in six languages and in light or dark mode. On the API side (FastAPI, PostgreSQL): personal data encrypted at rest, migrations applied on startup, and the whole stack on Docker Compose with its observability tools (Grafana, Prometheus, Loki, Tempo).',
    },
    momentum: {
      kind: 'Mobile app',
      title: 'Momentum',
      blurb: 'A gamified to-do list that runs 100% on the device: tasks, routines, streaks and XP stored on the phone.',
      cat: 'Mobile app',
      detail:
        'A gamified to-do app in Flutter, with no account and no server: everything lives in a SQLite database on the phone. Closing a task earns XP, routines reappear every day, a streak rewards consistency, a daily quest gives a bonus, and stats compare the last 28 days with the previous 28. A local reminder is sent in the evening if tasks are still open.',
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
    findMe: 'Find me',
    findMeText: 'I reply directly by email, or find me on social media.',
    mailSubject: 'Portfolio contact',
  },

  footer: 'Built with React Bits',

  a11y: {
    mainNav: 'Main navigation',
    languageSwitch: 'Language',
    background: 'Background colour',
    resetBackground: 'Restore the original background colour',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
}
