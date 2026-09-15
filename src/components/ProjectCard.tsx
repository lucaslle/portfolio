import type { Project } from '../types'

const SKELETON_LINES = [
  { width: '82%', color: 'rgba(196,166,255,.55)' },
  { width: '58%', color: 'rgba(139,92,246,.45)' },
  { width: '70%', color: 'rgba(125,211,252,.35)' },
  { width: '40%', color: 'rgba(196,166,255,.3)' },
  { width: '64%', color: 'rgba(139,92,246,.3)' },
]

const WINDOW_DOTS = ['#f472b6', '#fbbf24', '#34d399']

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => (
  <button type="button" className="project-card" onClick={() => onOpen(project)}>
    <div className="project-card__thumb">
      <div className="project-card__window">
        <div className="project-card__dots">
          {WINDOW_DOTS.map((color) => (
            <span key={color} style={{ background: color }} />
          ))}
        </div>
        {SKELETON_LINES.map((line) => (
          <span
            key={line.width + line.color}
            style={{ height: 4, width: line.width, borderRadius: 3, background: line.color }}
          />
        ))}
      </div>
      <span className="project-card__cat">{project.cat}</span>
    </div>

    <div className="project-card__body">
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__blurb">{project.blurb}</p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </button>
)
