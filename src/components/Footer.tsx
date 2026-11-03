import { FOOTER_YEAR, FULL_NAME } from '../data/portfolio'
import { useTranslation } from '../i18n/useTranslation'
import { CvLink } from './CvLink'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <span>
        © {FOOTER_YEAR} {FULL_NAME}
      </span>
      <CvLink>{t.cv}</CvLink>
      <span>{t.footer}</span>
    </footer>
  )
}
