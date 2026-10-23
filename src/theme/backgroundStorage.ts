import { DEFAULT_BACKGROUND } from './palette'

const BACKGROUND_KEY = 'portfolio:background'

const HEX_COLOR = /^#[0-9a-f]{6}$/i

export const readBackground = (): string => {
  try {
    const stored = window.localStorage.getItem(BACKGROUND_KEY)

    return stored && HEX_COLOR.test(stored) ? stored : DEFAULT_BACKGROUND
  } catch {
    return DEFAULT_BACKGROUND
  }
}

export const storeBackground = (color: string): void => {
  try {
    window.localStorage.setItem(BACKGROUND_KEY, color)
  } catch {
    // stockage indisponible : la couleur reste valable pour la visite en cours
  }
}
