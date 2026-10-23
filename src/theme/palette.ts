/* ------------------------------------------------------------------ *
 * Toute la palette du site est dérivée de la couleur de fond choisie :
 * chaque teinte d'origine (pensée autour du violet) est tournée vers la
 * teinte du fond, sa saturation suit celle du fond, et ses clartés
 * s'inversent quand le fond est clair pour garder un texte lisible.
 * ------------------------------------------------------------------ */

const BASE = {
  bg: '#07040e',
  ink: '#07040e',
  cardSurface: '#0d0818',
  deep: '#1b0f3a',
  deepStrong: '#28144a',
  strap: '#4c2a9e',
  violet: '#8b5cf6',
  violetBright: '#a855f7',
  glow: '#a885ff',
  lilac: '#c4a6ff',
  ice: '#e9dcff',
  iceSoft: '#d9caff',
  iceMuted: '#e2d7ff',
  cyan: '#7dd3fc',
  text: '#f4efff',
  muted: '#9a8db8',
  faint: '#8578a8',
  shiny: '#8b7aa8',
}

export type Palette = Record<keyof typeof BASE | 'onAccent', string>

export const DEFAULT_BACKGROUND = BASE.bg

type Hsl = [number, number, number]

const toRgb = (hex: string): [number, number, number] => [
  parseInt(hex.slice(1, 3), 16) / 255,
  parseInt(hex.slice(3, 5), 16) / 255,
  parseInt(hex.slice(5, 7), 16) / 255,
]

const toHsl = (hex: string): Hsl => {
  const [r, g, b] = toRgb(hex)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const lightness = (max + min) / 2
  const delta = max - min
  if (delta === 0) return [0, 0, lightness]

  const saturation = delta / (1 - Math.abs(2 * lightness - 1))
  const hue =
    max === r ? ((g - b) / delta) % 6 : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4

  return [(hue * 60 + 360) % 360, saturation, lightness]
}

const toHex = ([hue, saturation, lightness]: Hsl): string => {
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation
  const channel = (offset: number) => {
    const k = (offset + hue / 30) % 12
    const value = lightness - chroma / 2 * Math.max(-1, Math.min(k - 3, 9 - k, 1))

    return Math.round(value * 255)
      .toString(16)
      .padStart(2, '0')
  }

  return `#${channel(0)}${channel(8)}${channel(4)}`
}

const luminance = (hex: string): number => {
  const [r, g, b] = toRgb(hex).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const [BASE_HUE, BASE_SATURATION] = toHsl(BASE.bg)

// au-delà, un texte sombre contraste mieux qu'un texte clair
const LIGHT_BACKGROUND_LUMINANCE = 0.18

// contraste minimal d'un libellé blanc sur un bouton d'accent (texte gras, WCAG 1.4.11)
const MIN_ACCENT_CONTRAST = 3

const contrast = (a: string, b: string): number => {
  const [high, low] = [luminance(a), luminance(b)].sort((x, y) => y - x)

  return (high + 0.05) / (low + 0.05)
}

export const buildPalette = (background: string): Palette => {
  const [hue, saturation] = toHsl(background)
  const hueShift = hue - BASE_HUE
  const saturationScale = Math.min(1, saturation / BASE_SATURATION)
  const isLight = luminance(background) > LIGHT_BACKGROUND_LUMINANCE

  const derive = (hex: string): string => {
    const [h, s, l] = toHsl(hex)

    return toHex([(h + hueShift + 360) % 360, s * saturationScale, isLight ? 1 - l : l])
  }

  const palette = Object.fromEntries(
    Object.entries(BASE).map(([token, hex]) => [token, derive(hex)]),
  ) as Omit<Palette, 'onAccent'>
  // une teinte claire (jaune, vert) rendrait le blanc illisible sur les boutons
  const onAccent = contrast('#ffffff', palette.violet) >= MIN_ACCENT_CONTRAST ? '#ffffff' : palette.ink

  return { ...palette, bg: background, onAccent }
}

export const withAlpha = (hex: string, alpha: number): string => {
  const [r, g, b] = toRgb(hex).map((c) => Math.round(c * 255))

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const toCssVariable = (token: string): string => `--${token.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`

export const applyPalette = (palette: Palette): void => {
  const root = document.documentElement.style
  Object.entries(palette).forEach(([token, hex]) => root.setProperty(toCssVariable(token), hex))
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', palette.bg)
}
