import { FULL_NAME, INITIALS } from '../data/portfolio'
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

  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__mark">{INITIALS}</div>
        <div className="header__title">
          {FULL_NAME} <span style={{ color: '#a78bfa' }}>//</span> {t.role}
        </div>
      </div>

      <div className="header__end">
        <nav className="header__nav" aria-label={t.a11y.mainNav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav-link"
              aria-current={activeSection === item.id ? 'true' : undefined}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
              {activeSection === item.id ? <span className="nav-link__underline" /> : null}
            </button>
          ))}
        </nav>

        <LanguageSwitch />
      </div>
    </header>
  )
}
