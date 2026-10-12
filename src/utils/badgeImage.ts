import { FULL_NAME, INITIALS, ROLE } from '../data/portfolio'

const CARD_WIDTH = 800
const CARD_HEIGHT = 1125

type BadgeSide = 'front' | 'back'

const toDataUrl = (svg: string): string => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`

const buildFront = (): string => `
<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1b0f3a"/>
      <stop offset="1" stop-color="#07040e"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.38" r="0.55">
      <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e9dcff"/>
      <stop offset="1" stop-color="#7dd3fc"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#c4a6ff" stroke-opacity="0.08"/>
    </pattern>
  </defs>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#bg)"/>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#grid)"/>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#glow)"/>
  <text x="64" y="150" fill="#c4a6ff" font-family="monospace" font-size="26" letter-spacing="6">ID · PORTFOLIO</text>
  <circle cx="400" cy="520" r="210" fill="none" stroke="#c4a6ff" stroke-opacity="0.35" stroke-width="2"/>
  <circle cx="400" cy="520" r="176" fill="#0d0818" stroke="#8b5cf6" stroke-width="3"/>
  <text x="400" y="578" text-anchor="middle" fill="url(#ink)" font-family="sans-serif" font-weight="800" font-size="170">${INITIALS}</text>
  <text x="64" y="860" fill="#ffffff" font-family="sans-serif" font-weight="800" font-size="64">${FULL_NAME}</text>
  <text x="64" y="916" fill="#c4a6ff" font-family="monospace" font-size="28">${ROLE}</text>
  <rect x="64" y="960" width="672" height="2" fill="#c4a6ff" fill-opacity="0.25"/>
  <text x="64" y="1020" fill="#8b7aa8" font-family="monospace" font-size="22" letter-spacing="3">REACT · TYPESCRIPT · IA</text>
</svg>`

const buildBack = (): string => `
<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#07040e"/>
      <stop offset="1" stop-color="#1b0f3a"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#c4a6ff" stroke-opacity="0.08"/>
    </pattern>
  </defs>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#bg)"/>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#grid)"/>
  <text x="400" y="560" text-anchor="middle" fill="#e9dcff" font-family="sans-serif" font-weight="800" font-size="120">${INITIALS}</text>
  <text x="400" y="630" text-anchor="middle" fill="#c4a6ff" font-family="monospace" font-size="28" letter-spacing="4">${FULL_NAME.toUpperCase()}</text>
</svg>`

export const buildBadgeImage = (side: BadgeSide): string =>
  toDataUrl(side === 'front' ? buildFront() : buildBack())
