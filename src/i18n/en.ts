import type { Translation } from './types'

export const en: Translation = {
  tag: 'EN',
  name: 'English',
  switchTo: 'View this site in English',

  documentTitle: 'Lucas Laliche — AI Architect & Front-End Developer',
  documentDescription:
    'Portfolio of Lucas Laliche — AI architect, front-end developer and project lead. I scope the need, build the features and run the demos.',

  role: 'AI Architect · Front-End Developer · Project Lead',

  nav: {
    home: 'Home',
    projects: 'Projects',
    skills: 'Skills',
    about: 'About',
    contact: 'Contact',
  },

  hero: {
    greeting: "Hi, I'm Lucas,",
    headline: 'AI Architect.',
    badge: '2 years of experience · Front-end & AI',
    lead: 'A project lead who codes: I scope the need, build the features myself, then run the demos. Two years in — one as an apprentice, one in front-end development — and now moving into AI architecture.',
    portraitLabel: 'portrait',
    viewWork: 'View my work',
    contact: 'Get in touch',
  },

  ribbon: [
    'React',
    'TypeScript',
    'Python',
    'AI',
    'LLM',
    'Git',
    'HTML',
    'CSS',
    'Project management',
    'Demos',
  ],

  projects: {
    title: 'Projects',
    previous: 'Previous projects',
    next: 'Next projects',
    goToGroup: (index) => `Go to group ${index}`,

    /* TODO Lucas: replace every bracketed field with a real project. */
    items: {
      p1: {
        kind: '[Type — e.g. Web app]',
        title: '[Project title]',
        blurb: '[One sentence: what it does and what it is built with.]',
        cat: '[Category]',
        detail:
          '[The detail shown in this window: the context, your exact role, what you built and the outcome.]',
      },
      p2: {
        kind: '[Type — e.g. Internal tool]',
        title: '[Project title]',
        blurb: '[One sentence: what it does and what it is built with.]',
        cat: '[Category]',
        detail:
          '[The detail shown in this window: the context, your exact role, what you built and the outcome.]',
      },
      p3: {
        kind: '[Type — e.g. AI project]',
        title: '[Project title]',
        blurb: '[One sentence: what it does and what it is built with.]',
        cat: '[Category]',
        detail:
          '[The detail shown in this window: the context, your exact role, what you built and the outcome.]',
      },
    },
  },

  modal: {
    close: 'Close',
    liveDemo: 'Live demo',
    source: 'Source',
  },

  skills: {
    title: 'Skills',
    note: 'level · daily use → exploratory',
    items: {
      'project-management': {
        name: 'Project management',
        level: 'Daily',
        note: 'Scoping, follow-up, demos and stakeholder relations',
      },
      react: {
        name: 'React / TypeScript',
        level: 'Solid',
        note: 'One year of front-end development in production',
      },
      'html-css': {
        name: 'HTML / CSS',
        level: 'Solid',
        note: 'Markup, responsive layouts, accessibility',
      },
      'ai-architecture': {
        name: 'AI architecture',
        level: 'Ramping up',
        note: 'Current role — actively growing',
      },
      python: {
        name: 'Python',
        level: 'Working knowledge',
        note: 'Scripting, automation, data wrangling',
      },
      'git-ci': {
        name: 'Git / CI',
        level: 'Solid',
        note: 'Branching, code review, deployments',
      },
    },
    soft: [
      'Requirement scoping',
      'Client demos',
      'Explaining the technical',
      'Autonomy',
      'Teamwork',
      'AI watch',
    ],
  },

  about: {
    title: 'About',
    storyTitle: 'My story',
    story:
      'I bridge the gap between the need and the code. In practice: I scope it, I build the features myself, then I present them in a demo. One year as an apprentice, one year of front-end development with some Python, and now getting started on AI architecture.',
    careerTitle: 'Experience',
    hint: 'click to expand',

    /* TODO Lucas: replace [Company] / [City] and double-check the dates. */
    jobs: {
      j1: {
        role: 'AI Architect',
        company: '[Company]',
        place: '[City] · Permanent',
        period: '2026 — now',
        summary:
          'Just started: I design the AI building blocks while still developing and demoing the features.',
        bullets: [
          '[To fill in: the scope of the role]',
          '[To fill in: a first delivery or an objective]',
        ],
      },
      j2: {
        role: 'Front-End Developer',
        company: '[Company]',
        place: '[City] · Permanent',
        period: '2025 — 2026',
        summary:
          'A year of front-end development, backed by some Python, working directly with business users.',
        bullets: [
          '[To fill in: a feature you built end to end]',
          '[To fill in: a number or a concrete outcome]',
          '[To fill in: the demos / the stakeholder relationship]',
        ],
      },
      j3: {
        role: 'Apprenticeship — Developer',
        company: '[Company]',
        place: '[City]',
        period: '2024 — 2025',
        summary: 'First year in a company: building up web development skills.',
        bullets: ['[To fill in: what you learned / shipped]', '[To fill in: the tech you practised]'],
      },
    },

    /* TODO Lucas: replace the [N] with your real numbers. */
    stats: [
      { value: '2 years', label: 'of experience' },
      { value: '[N]', label: 'features shipped' },
      { value: '[N]', label: 'demos delivered' },
    ],
  },

  contact: {
    title: 'Contact',
    name: 'Name',
    namePlaceholder: 'First name Last name',
    email: 'Email',
    emailPlaceholder: 'you@company.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project…',
    send: 'Send',
    sending: 'Sending…',
    sent: 'Sent ✓',
    thanks: 'Thanks! I reply within 24h.',
    emailLabel: 'Email',
  },

  a11y: {
    mainNav: 'Main navigation',
    languageSwitch: 'Language',
  },
}
