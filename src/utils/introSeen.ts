import { prefersReducedMotion } from './prefersReducedMotion'

const INTRO_SEEN_KEY = 'portfolio:intro-seen'

export const shouldPlayIntro = (): boolean => {
  if (prefersReducedMotion()) return false

  try {
    return window.sessionStorage.getItem(INTRO_SEEN_KEY) === null
  } catch {
    return true
  }
}

export const markIntroSeen = (): void => {
  try {
    window.sessionStorage.setItem(INTRO_SEEN_KEY, '1')
  } catch {
    // stockage indisponible : l'intro rejouera à la prochaine visite, sans conséquence
  }
}
