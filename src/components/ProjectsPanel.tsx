import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import { withAlpha } from '../theme/palette'
import { useTheme } from '../theme/useTheme'
import type { Project } from '../types'
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
      {projects.map((project) => (
        <li key={project.id}>
          <SpotlightCard spotlightColor={spotlightColor} className="project">
            <span className="project__kind">{project.kind}</span>
            <h3 className="project__title">{project.title}</h3>
            <p className="project__blurb">{project.blurb}</p>

            <ul className="project__tags">
              {project.tags.map((tag, index) => (
                <li key={`${tag}-${index}`} className="chip">
                  {tag}
                </li>
              ))}
            </ul>

            <button type="button" className="project__more" onClick={() => onOpenProject(project)}>
              {t.portfolio.details}
            </button>
          </SpotlightCard>
        </li>
      ))}
    </ul>
  )
}
