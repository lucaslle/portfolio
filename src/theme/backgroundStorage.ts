const BACKGROUND_KEY = 'portfolio:background'

export const DEFAULT_BACKGROUND = '#07040e'

const HEX_COLOR = /^#[0-9a-f]{6}$/i

export const readBackground = (): string => {
  try {
    const stored = window.localStorage.getItem(BACKGROUND_KEY)

    return stored && HEX_COLOR.test(stored) ? stored : DEFAULT_BACKGROUND
  } catch {
    return DEFAULT_BACKGROUND
  }
}

export const applyBackground = (color: string): void => {
  document.documentElement.style.setProperty('--bg', color)
}

export const storeBackground = (color: string): void => {
  try {
    window.localStorage.setItem(BACKGROUND_KEY, color)
  } catch {
    // stockage indisponible : la couleur reste valable pour la visite en cours
  }
}
