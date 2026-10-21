import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export const useTranslation = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useTranslation doit être utilisé dans un <LanguageProvider>.')
  }

  return context
}
