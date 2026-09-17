import { useEffect, useRef, useState } from 'react'
import type { SectionId } from '../types'

const SECTION_OFFSET = 160
const VELOCITY_RESET_DELAY = 160
const VELOCITY_CLAMP = 140
const VELOCITY_GAIN = 6

type ScrollSpy = {
  section: SectionId
  scrollY: number
  velocity: number
}

export const useScrollSpy = (sectionIds: readonly SectionId[]): ScrollSpy => {
  const [section, setSection] = useState<SectionId>('home')
  const [scrollY, setScrollY] = useState(0)
  const [velocity, setVelocity] = useState(0)
  const lastScrollY = useRef<number | null>(null)
  const velocityTimeout = useRef<number | undefined>(undefined)

  useEffect(() => {
    const handleScroll = () => {
      let current: SectionId = sectionIds[0]
      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top < SECTION_OFFSET) current = id
      }

      const y = window.scrollY
      const previousY = lastScrollY.current ?? y
      const rawVelocity = (y - previousY) * VELOCITY_GAIN
      lastScrollY.current = y

      setScrollY(y)
      setSection(current)
      setVelocity(Math.max(-VELOCITY_CLAMP, Math.min(VELOCITY_CLAMP, rawVelocity)))

      window.clearTimeout(velocityTimeout.current)
      velocityTimeout.current = window.setTimeout(() => setVelocity(0), VELOCITY_RESET_DELAY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.clearTimeout(velocityTimeout.current)
    }
  }, [sectionIds])

  return { section, scrollY, velocity }
}
