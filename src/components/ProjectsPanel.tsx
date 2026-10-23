import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import { withAlpha } from '../theme/palette'
import { useTheme } from '../theme/useTheme'
import type { Project } from '../types'
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

  return (
    <ul className="cards">
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
  )
}
