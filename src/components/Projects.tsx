import { useCallback, useEffect, useRef, useState } from 'react'
import type { UIEvent } from 'react'
import { PROJECTS } from '../data/portfolio'
import type { Project } from '../types'
import { ProjectCard } from './ProjectCard'

const RAIL_GAP = 18
const FALLBACK_STEP = 308

type ProjectsProps = {
  onOpenProject: (project: Project) => void
}

export const Projects = ({ onOpenProject }: ProjectsProps) => {
  const railRef = useRef<HTMLDivElement | null>(null)
  const [slide, setSlide] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  const stepWidth = useCallback(() => {
    const card = railRef.current?.firstElementChild
    if (!card) return FALLBACK_STEP

    return card.getBoundingClientRect().width + RAIL_GAP
  }, [])

  useEffect(() => {
    const measure = () => {
      const rail = railRef.current
      if (!rail) return

      setCardsPerView(Math.max(1, Math.round(rail.clientWidth / stepWidth())))
    }

    measure()
    window.addEventListener('resize', measure)

    return () => window.removeEventListener('resize', measure)
  }, [stepWidth])

  const pageCount = Math.max(1, PROJECTS.length - cardsPerView + 1)
  const currentPage = Math.min(slide, pageCount - 1)

  const step = (direction: number) => {
    railRef.current?.scrollBy({ left: direction * stepWidth(), behavior: 'smooth' })
  }

  const goToSlide = (index: number) => {
    railRef.current?.scrollTo({ left: index * stepWidth(), behavior: 'smooth' })
  }

  const handleRailScroll = (event: UIEvent<HTMLDivElement>) => {
    const index = Math.round(event.currentTarget.scrollLeft / stepWidth())
    if (index !== slide) setSlide(index)
  }

  const shownCount = String(Math.min(currentPage + cardsPerView, PROJECTS.length)).padStart(2, '0')
  const totalCount = String(PROJECTS.length).padStart(2, '0')

  return (
    <section id="projects" className="panel projects">
      <div className="projects__head">
        <div className="projects__heading">
          <h2 className="section-title">Projects</h2>
          <span className="section-note">
            {shownCount} / {totalCount}
          </span>
        </div>
        <div className="projects__arrows">
          <button
            type="button"
            className="arrow-btn"
            aria-label="Projets précédents"
            onClick={() => step(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="arrow-btn"
            aria-label="Projets suivants"
            onClick={() => step(1)}
          >
            ›
          </button>
        </div>
      </div>

      <div ref={railRef} className="rail no-sb" onScroll={handleRailScroll}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
        ))}
      </div>

      <div className="dots">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Aller au groupe ${index + 1}`}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentPage ? 30 : 12,
              background:
                index === currentPage
                  ? 'linear-gradient(90deg,#a78bfa,#38bdf8)'
                  : 'rgba(168,133,255,.28)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
