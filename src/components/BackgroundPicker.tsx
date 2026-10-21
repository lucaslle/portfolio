import { useState } from 'react'
import { useTranslation } from '../i18n/useTranslation'
import { applyBackground, DEFAULT_BACKGROUND, readBackground, storeBackground } from '../utils/backgroundColor'

export const BackgroundPicker = () => {
  const { t } = useTranslation()
  const [color, setColor] = useState(readBackground)

  const changeColor = (next: string) => {
    setColor(next)
    applyBackground(next)
    storeBackground(next)
  }

  return (
    <>
      <input
        type="color"
        className="bg-picker"
        aria-label={t.a11y.background}
        title={t.a11y.background}
        value={color}
        onChange={(event) => changeColor(event.target.value)}
      />

      {color !== DEFAULT_BACKGROUND ? (
        <button
          type="button"
          className="bg-picker__reset"
          aria-label={t.a11y.resetBackground}
          title={t.a11y.resetBackground}
          onClick={() => changeColor(DEFAULT_BACKGROUND)}
        >
          ↺
        </button>
      ) : null}
    </>
  )
}
