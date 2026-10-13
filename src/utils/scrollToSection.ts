import { prefersReducedMotion } from './prefersReducedMotion'

const HEADER_OFFSET = 90

export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id)
  if (!element) return

  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
}
