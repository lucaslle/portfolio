import { FULL_NAME, INITIALS, NAV_ITEMS, ROLE } from '../data/portfolio'
import type { SectionId } from '../types'

type HeaderProps = {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export const Header = ({ activeSection, onNavigate }: HeaderProps) => (
  <header className="header">
    <div className="header__brand">
      <div className="header__mark">{INITIALS}</div>
      <div className="header__title">
        {FULL_NAME} <span style={{ color: '#a78bfa' }}>//</span> {ROLE}
      </div>
    </div>

    <nav className="header__nav" aria-label="Navigation principale">
      {NAV_ITEMS.map((item) => (
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
  </header>
)
