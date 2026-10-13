import { useSyncExternalStore } from 'react'

const COMPACT_QUERY = '(max-width: 959px)'

const subscribe = (onChange: () => void): (() => void) => {
  const mediaQuery = window.matchMedia(COMPACT_QUERY)
  mediaQuery.addEventListener('change', onChange)

  return () => mediaQuery.removeEventListener('change', onChange)
}

const getSnapshot = (): boolean => window.matchMedia(COMPACT_QUERY).matches

export const useIsCompact = (): boolean => useSyncExternalStore(subscribe, getSnapshot)
