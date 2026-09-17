import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Locale } from '../types'
import { LanguageContext } from './LanguageContext'
import { TRANSLATIONS, resolveInitialLocale, storeLocale } from './index'

type LanguageProviderProps = {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(resolveInitialLocale)

  /* Garde le document aligné sur la langue : <html lang> est ce que lisent
     les lecteurs d'écran pour choisir la bonne prononciation, et le titre
     et la description sont ce qu'affichent l'onglet et les moteurs de
     recherche. */
  useEffect(() => {
    const { documentTitle, documentDescription } = TRANSLATIONS[locale]

    document.documentElement.lang = locale
    document.title = documentTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', documentDescription)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    storeLocale(next)
  }, [])

  const value = useMemo(
    () => ({ locale, setLocale, t: TRANSLATIONS[locale] }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
