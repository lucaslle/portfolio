import { useEffect, useRef } from 'react'
import { useTheme } from '../theme/useTheme'
import CursorGrid from './reactbits/CursorGrid/CursorGrid'

const FORWARDED_EVENTS = ['pointermove', 'pointerdown'] as const

export const GridBackdrop = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { palette } = useTheme()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const forwardPointer = (event: PointerEvent) => {
      container.dispatchEvent(
        new PointerEvent(event.type, {
          clientX: event.clientX,
          clientY: event.clientY,
          pointerId: event.pointerId,
          pointerType: event.pointerType,
        }),
      )
    }

    FORWARDED_EVENTS.forEach((type) => window.addEventListener(type, forwardPointer, { passive: true }))

    return () => FORWARDED_EVENTS.forEach((type) => window.removeEventListener(type, forwardPointer))
  }, [])

  return (
    <div ref={containerRef} className="page__grid" aria-hidden="true">
      <CursorGrid color={palette.violet} cellSize={44} radius={170} maxOpacity={0.55} gridOpacity={0.09} />
    </div>
  )
}
