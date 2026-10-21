import { FULL_NAME, INITIALS } from '../data/portfolio'
import type { Palette } from '../theme/palette'

const CARD_WIDTH = 800
const CARD_HEIGHT = 1125

type BadgeSide = 'front' | 'back'

const toDataUrl = (svg: string): string => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`

const buildFront = (role: string, palette: Palette): string => `
<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.deep}"/>
      <stop offset="1" stop-color="${palette.ink}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.38" r="0.55">
      <stop offset="0" stop-color="${palette.violet}" stop-opacity="0.55"/>
      <stop offset="1" stop-color="${palette.violet}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.ice}"/>
      <stop offset="1" stop-color="${palette.cyan}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="${palette.lilac}" stroke-opacity="0.08"/>
    </pattern>
  </defs>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#bg)"/>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#grid)"/>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#glow)"/>
  <text x="64" y="150" fill="${palette.lilac}" font-family="monospace" font-size="26" letter-spacing="6">ID · PORTFOLIO</text>
  <circle cx="400" cy="520" r="210" fill="none" stroke="${palette.lilac}" stroke-opacity="0.35" stroke-width="2"/>
  <circle cx="400" cy="520" r="176" fill="${palette.cardSurface}" stroke="${palette.violet}" stroke-width="3"/>
  <text x="400" y="578" text-anchor="middle" fill="url(#ink)" font-family="sans-serif" font-weight="800" font-size="170">${INITIALS}</text>
  <text x="64" y="860" fill="${palette.text}" font-family="sans-serif" font-weight="800" font-size="64">${FULL_NAME}</text>
  <text x="64" y="916" fill="${palette.lilac}" font-family="monospace" font-size="28">${role}</text>
  <rect x="64" y="960" width="672" height="2" fill="${palette.lilac}" fill-opacity="0.25"/>
  <text x="64" y="1020" fill="${palette.shiny}" font-family="monospace" font-size="22" letter-spacing="3">REACT · TYPESCRIPT · IA</text>
</svg>`

const buildBack = (palette: Palette): string => `
<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="${palette.ink}"/>
      <stop offset="1" stop-color="${palette.deep}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="${palette.lilac}" stroke-opacity="0.08"/>
    </pattern>
  </defs>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#bg)"/>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#grid)"/>
  <text x="400" y="560" text-anchor="middle" fill="${palette.ice}" font-family="sans-serif" font-weight="800" font-size="120">${INITIALS}</text>
  <text x="400" y="630" text-anchor="middle" fill="${palette.lilac}" font-family="monospace" font-size="28" letter-spacing="4">${FULL_NAME.toUpperCase()}</text>
</svg>`

export const buildBadgeImage = (side: BadgeSide, role: string, palette: Palette): string =>
  toDataUrl(side === 'front' ? buildFront(role, palette) : buildBack(palette))
