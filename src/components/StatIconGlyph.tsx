import type { StatIcon } from '../types'

type StatIconGlyphProps = {
  icon: StatIcon
}

const GLYPH_PATHS: Record<StatIcon, string> = {
  clock: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  briefcase: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16',
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
}

export const StatIconGlyph = ({ icon }: StatIconGlyphProps) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={GLYPH_PATHS[icon]} />
  </svg>
)
