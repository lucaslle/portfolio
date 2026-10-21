import { useEffect, useState } from 'react'
import type { SectionId } from '../types'

const SECTION_OFFSET = 160

export const useScrollSpy = (sectionIds: SectionId[]): SectionId => {
  const [section, setSection] = useState<SectionId>(sectionIds[0])

  useEffect(() => {
    let frame = 0

    const updateSection = () => {
      frame = 0

      let current: SectionId = sectionIds[0]
      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top < SECTION_OFFSET) current = id
      }

      setSection(current)
    }

    const handleScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updateSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateSection()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [sectionIds])

  return section
}
