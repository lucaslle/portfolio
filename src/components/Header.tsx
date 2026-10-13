import type { MouseEvent } from 'react'
import { FULL_NAME, NAV_ITEMS } from '../data/portfolio'
import type { SectionId } from '../types'

type HeaderProps = {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export const Header = ({ activeSection, onNavigate }: HeaderProps) => {
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

      <nav className="header__nav" aria-label="Navigation principale">
        {NAV_ITEMS.map((item) => (
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
    </header>
  )
}
