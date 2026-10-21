import { useTranslation } from '../i18n/useTranslation'
import { DEFAULT_BACKGROUND } from '../theme/palette'
import { useTheme } from '../theme/useTheme'

export const BackgroundPicker = () => {
  const { t } = useTranslation()
  const { background, setBackground } = useTheme()

  return (
    <>
      <input
        type="color"
        className="bg-picker"
        aria-label={t.a11y.background}
        title={t.a11y.background}
        value={background}
        onChange={(event) => setBackground(event.target.value)}
      />

      {background !== DEFAULT_BACKGROUND ? (
        <button
          type="button"
          className="bg-picker__reset"
          aria-label={t.a11y.resetBackground}
          title={t.a11y.resetBackground}
          onClick={() => setBackground(DEFAULT_BACKGROUND)}
        >
          ↺
        </button>
      ) : null}
    </>
  )
}
