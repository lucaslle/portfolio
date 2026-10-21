import { createContext } from 'react'
import type { Palette } from './palette'

export type ThemeContextValue = {
  background: string
  setBackground: (color: string) => void
  palette: Palette
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
