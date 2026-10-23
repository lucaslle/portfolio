import { LOCALES, TRANSLATIONS } from '../i18n'
import { useTranslation } from '../i18n/useTranslation'

export const LanguageSwitch = () => {
  const { locale, setLocale, t } = useTranslation()

  return (
    <div className="lang-switch" role="group" aria-label={t.a11y.languageSwitch}>
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          className="lang-switch__option"
          lang={option}
          /* Le libellé est écrit dans la langue qu'il active : un visiteur
             anglophone comprend le bouton même s'il ne lit pas le français. */
          title={TRANSLATIONS[option].switchTo}
          aria-label={TRANSLATIONS[option].switchTo}
          aria-pressed={option === locale}
          onClick={() => setLocale(option)}
        >
          {TRANSLATIONS[option].tag}
        </button>
      ))}
    </div>
  )
}
