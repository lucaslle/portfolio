import type { Locale } from '../types'
import { en } from './en'
import { fr } from './fr'
import type { Translation } from './types'

export const TRANSLATIONS: Record<Locale, Translation> = { fr, en }

/** Ordre d'affichage dans le sélecteur. */
export const LOCALES: readonly Locale[] = ['fr', 'en']

export const DEFAULT_LOCALE: Locale = 'fr'

const STORAGE_KEY = 'portfolio:locale'

const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && LOCALES.includes(value as Locale)

/** Le choix explicite du visiteur, s'il en a déjà fait un. */
const readStoredLocale = (): Locale | null => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)

    return isLocale(stored) ? stored : null
  } catch {
    /* Navigation privée ou stockage bloqué : on retombe sur la langue du navigateur. */
    return null
  }
}

export const storeLocale = (locale: Locale) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    /* Rien à faire : la langue reste valable pour la visite en cours. */
  }
}

/** Choix mémorisé, sinon langue du navigateur, sinon français. */
export const resolveInitialLocale = (): Locale => {
  const stored = readStoredLocale()
  if (stored) return stored

  const preferred = navigator.languages ?? [navigator.language]
  const match = preferred.find((tag) => LOCALES.includes(tag.slice(0, 2) as Locale))

  return match ? (match.slice(0, 2) as Locale) : DEFAULT_LOCALE
}
