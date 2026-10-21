import type { MouseEvent } from 'react'
import { FULL_NAME } from '../data/portfolio'
import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import type { SectionId } from '../types'
import { LanguageSwitch } from './LanguageSwitch'

type HeaderProps = {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const { t } = useTranslation()
  const { navItems } = useContent()

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    event.preventDefault()
    onNavigate(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <header className="header">
      <a href="#home" className="header__brand" aria-label={FULL_NAME} onClick={(event) => handleNavigate(event, 'home')}>
        lucas.dev
      </a>

      <nav className="header__nav" aria-label={t.a11y.mainNav}>
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

      <LanguageSwitch />
    </header>
  )
}
