import { FONT_CREDIT, FOOTER_YEAR, FULL_NAME } from '../data/portfolio'

export const Footer = () => (
  <footer className="footer">
    <span>
      © {FOOTER_YEAR} {FULL_NAME}
    </span>
    <span>{FONT_CREDIT}</span>
  </footer>
)
