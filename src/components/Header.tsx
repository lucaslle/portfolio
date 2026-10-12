import { FULL_NAME, NAV_ITEMS } from '../data/portfolio'
import type { SectionId } from '../types'

type HeaderProps = {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export const Header = ({ activeSection, onNavigate }: HeaderProps) => (
  <header className="header">
    <button type="button" className="header__brand" aria-label={FULL_NAME} onClick={() => onNavigate('home')}>
      lucas.dev
    </button>

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
