import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { readBackground, storeBackground } from './backgroundStorage'
import { applyPalette, buildPalette } from './palette'
import { ThemeContext } from './ThemeContext'

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [background, setBackgroundState] = useState(readBackground)
  const palette = useMemo(() => buildPalette(background), [background])

  // avant le premier affichage : pas de flash de la palette par défaut
  useLayoutEffect(() => applyPalette(palette), [palette])

  const setBackground = useCallback((color: string) => {
    setBackgroundState(color)
    storeBackground(color)
  }, [])

  const value = useMemo(() => ({ background, setBackground, palette }), [background, setBackground, palette])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
