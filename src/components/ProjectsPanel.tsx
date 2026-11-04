import { useState } from 'react'
import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import type { ProjectFilter } from '../types'
import { GitHubGlyph } from './GitHubGlyph'
import { ProjectDetail } from './ProjectDetail'

const FILTERS: ProjectFilter[] = ['all', 'pro', 'personal']
const VISIBLE_TAGS = 4

export const ProjectsPanel = () => {
  const { t } = useTranslation()
  const { projects } = useContent()
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  const countOf = (value: ProjectFilter) =>
    value === 'all' ? projects.length : projects.filter((project) => project.group === value).length
  const visibleProjects = filter === 'all' ? projects : projects.filter((project) => project.group === filter)

  return (
    <div>
      <div className="filters" role="group" aria-label={t.portfolio.filtersLabel}>
        {FILTERS.map((value) => (
          <button
            key={value}
            type="button"
            className="filters__button"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {t.portfolio.filters[value]}
            <span className="filters__count">{countOf(value)}</span>
          </button>
        ))}
      </div>

      <ul className="project-rows">
        {visibleProjects.map((project, index) => {
          const isOpen = project.id === openId
          const hiddenTags = project.tags.length - VISIBLE_TAGS

          return (
            <li key={project.id} className={`project-row project-row--${project.group}${isOpen ? ' project-row--open' : ''}`}>
              <div className="project-row__head">
                <button
                  type="button"
                  className="project-row__toggle"
                  aria-expanded={isOpen}
                  aria-controls={`project-detail-${project.id}`}
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                >
                  <span className="project-row__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="project-row__name">
                    <span className="project-row__title">{project.title}</span>
                    <span className="project-row__kind">{project.kind}</span>
                  </span>
                  <span className="project-row__tags">
                    {project.tags.slice(0, VISIBLE_TAGS).map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                    {hiddenTags > 0 ? <span className="chip">+{hiddenTags}</span> : null}
                  </span>
                  <span className="project-row__chevron" aria-hidden="true">
                    +
                  </span>
                </button>

                {project.demoUrl || project.sources.length > 0 ? (
                  <ul className="project-row__links">
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
                ) : null}
              </div>

              {isOpen ? (
                <div id={`project-detail-${project.id}`} className="project-row__detail">
                  <ProjectDetail project={project} />
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
