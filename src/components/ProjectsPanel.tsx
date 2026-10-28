import { useCallback, useEffect, useRef, useState } from 'react'
import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import { withAlpha } from '../theme/palette'
import { useTheme } from '../theme/useTheme'
import type { Project } from '../types'
import { prefersReducedMotion } from '../utils/prefersReducedMotion'
import { GitHubGlyph } from './GitHubGlyph'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'

type ProjectsPanelProps = {
  onOpenProject: (project: Project) => void
}

export const ProjectsPanel = ({ onOpenProject }: ProjectsPanelProps) => {
  const { t } = useTranslation()
  const { projects } = useContent()
  const { palette } = useTheme()
  const spotlightColor = withAlpha(palette.violet, 0.3)
  const trackRef = useRef<HTMLUListElement>(null)
  const [canScroll, setCanScroll] = useState({ previous: false, next: false })

  const updateArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    // 1 px de marge : le défilement s'arrête parfois sur une fraction de pixel
    setCanScroll({
      previous: track.scrollLeft > 1,
      next: track.scrollLeft + track.clientWidth < track.scrollWidth - 1,
    })
  }, [])

  useEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)

    return () => window.removeEventListener('resize', updateArrows)
  }, [updateArrows, projects])

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    const card = track?.firstElementChild
    if (!track || !card) return

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  return (
    <div className="carousel">
      <div className="carousel__controls">
        <button
          type="button"
          className="carousel__arrow"
          aria-label={t.portfolio.previousProjects}
          disabled={!canScroll.previous}
          onClick={() => scrollByCard(-1)}
        >
          ←
        </button>
        <button
          type="button"
          className="carousel__arrow"
          aria-label={t.portfolio.nextProjects}
          disabled={!canScroll.next}
          onClick={() => scrollByCard(1)}
        >
          →
        </button>
      </div>

      <ul ref={trackRef} className="cards cards--projects" onScroll={updateArrows}>
        {projects.map((project, index) => (
          <li key={project.id}>
            <SpotlightCard spotlightColor={spotlightColor} className="project">
              <div className="project__top">
                <span className="project__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="project__kind">{project.kind}</span>
              </div>
              <h3 className="project__title">{project.title}</h3>
              <p className="project__blurb">{project.blurb}</p>

              <ul className="project__tags">
                {project.tags.map((tag, tagIndex) => (
                  <li key={`${tag}-${tagIndex}`} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project__footer">
                <button type="button" className="project__more" onClick={() => onOpenProject(project)}>
                  {t.portfolio.details}
                </button>

                <ul className="project__sources">
                  {project.demoUrl ? (
                    <li>
                      <a
                        className="project__source project__source--demo"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} — ${t.modal.liveDemo}`}
                      >
                        {t.modal.liveDemo} ↗
                      </a>
                    </li>
                  ) : null}
                  {project.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        className="project__source"
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} — ${t.portfolio.sourceLabel(source.label)}`}
                      >
                        <GitHubGlyph />
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </li>
        ))}
      </ul>
    </div>
  )
}
