import { PROJECTS } from '../data/portfolio'
import type { Project } from '../types'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'

const SPOTLIGHT_COLOR = 'rgba(139, 92, 246, 0.3)'

type ProjectsPanelProps = {
  onOpenProject: (project: Project) => void
}

export const ProjectsPanel = ({ onOpenProject }: ProjectsPanelProps) => (
  <ul className="cards">
    {PROJECTS.map((project) => (
      <li key={project.id}>
        <SpotlightCard spotlightColor={SPOTLIGHT_COLOR} className="project">
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
            Détails ↗
          </button>
        </SpotlightCard>
      </li>
    ))}
  </ul>
)
