import { CV_URL, FOOTER_YEAR, FULL_NAME } from '../data/portfolio'
import { useTranslation } from '../i18n/useTranslation'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <span>
        © {FOOTER_YEAR} {FULL_NAME}
      </span>
      <a href={CV_URL} target="_blank" rel="noreferrer">
        {t.cv}
      </a>
      <span>{t.footer}</span>
    </footer>
  )
}
