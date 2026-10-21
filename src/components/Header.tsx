import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { FULL_NAME } from '../data/portfolio'
import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import type { SectionId } from '../types'
import { BackgroundPicker } from './BackgroundPicker'
import { LanguageSwitch } from './LanguageSwitch'

type HeaderProps = {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const { t } = useTranslation()
  const { navItems } = useContent()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)

    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    event.preventDefault()
    // referme le menu avant de mesurer le header pour le décalage du défilement
    flushSync(() => setIsMenuOpen(false))
    onNavigate(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <header className={isMenuOpen ? 'header header--open' : 'header'}>
      <a href="#home" className="header__brand" aria-label={FULL_NAME} onClick={(event) => handleNavigate(event, 'home')}>
        lucas.dev
      </a>

      <nav id="main-nav" className="header__nav" aria-label={t.a11y.mainNav}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="nav-link"
            aria-current={activeSection === item.id ? 'location' : undefined}
            onClick={(event) => handleNavigate(event, item.id)}
          >
            {item.label}
            {activeSection === item.id ? <span className="nav-link__underline" /> : null}
          </a>
        ))}
      </nav>

      <div className="header__tools">
        <BackgroundPicker />
        <LanguageSwitch />
        <button
          type="button"
          className="header__burger"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label={isMenuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="header__burger-bar" />
          <span className="header__burger-bar" />
          <span className="header__burger-bar" />
        </button>
      </div>
    </header>
  )
}
