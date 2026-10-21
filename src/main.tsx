import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { LanguageProvider } from './i18n/LanguageProvider'
import './styles/global.css'
import { applyBackground, readBackground } from './utils/backgroundColor'

// appliqué avant le premier rendu pour éviter un flash de la couleur par défaut
applyBackground(readBackground())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
