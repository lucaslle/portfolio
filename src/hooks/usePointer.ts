import { useEffect, useState } from 'react'

type Pointer = {
  /** Normalised position in [0,1] on both axes, used for the hero tilt. */
  ratio: { x: number; y: number }
  /** Raw viewport coordinates, used for the cursor halo. */
  position: { x: number; y: number }
}

const INITIAL_POINTER: Pointer = {
  ratio: { x: 0.5, y: 0.5 },
  position: { x: -400, y: -400 },
}

export const usePointer = (): Pointer => {
  const [pointer, setPointer] = useState<Pointer>(INITIAL_POINTER)

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPointer({
        ratio: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight },
        position: { x: event.clientX, y: event.clientY },
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })

    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return pointer
}
