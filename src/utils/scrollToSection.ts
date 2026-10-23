import { prefersReducedMotion } from './prefersReducedMotion'

// espace laissé sous le header fixe, dont la hauteur change sur mobile
const HEADER_GAP = 24

export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id)
  if (!element) return

  const headerBottom = document.querySelector('.header')?.getBoundingClientRect().bottom ?? 0

  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - headerBottom - HEADER_GAP,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
}
