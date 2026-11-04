import { useTranslation } from '../i18n/useTranslation'
import type { Project } from '../types'

type ProjectDetailProps = {
  project: Project
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { t } = useTranslation()

  return (
    <>
      <p className="modal__detail">{project.detail}</p>

      {project.study ? (
        <div className="modal__study">
          <section>
            <h4 className="modal__section-title">{t.modal.context}</h4>
            <p className="modal__detail">{project.study.context}</p>
          </section>
          {project.study.role ? (
            <section>
              <h4 className="modal__section-title">{t.modal.role}</h4>
              <p className="modal__detail">{project.study.role}</p>
            </section>
          ) : null}
          <section>
            <h4 className="modal__section-title">{t.modal.choices}</h4>
            <ul className="modal__list">
              {project.study.choices.map((choice) => (
                <li key={choice}>{choice}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4 className="modal__section-title">{t.modal.results}</h4>
            <ul className="modal__list">
              {project.study.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </section>
        </div>
      ) : null}

      <div className="modal__tags">
        {project.tags.map((tag, index) => (
          <span key={`${tag}-${index}`} className="chip">
            {tag}
          </span>
        ))}
      </div>

      {project.demoUrl || project.sources.length > 0 ? (
        <div className="modal__links">
          {project.demoUrl ? (
            <a href={project.demoUrl} className="modal__link--solid" target="_blank" rel="noreferrer">
              {t.modal.liveDemo}
            </a>
          ) : null}
          {project.sources.map((source) => (
            <a key={source.url} href={source.url} className="modal__link--ghost" target="_blank" rel="noreferrer">
              {project.sources.length > 1 ? `${t.modal.source} · ${source.label}` : t.modal.source}
            </a>
          ))}
        </div>
      ) : null}
    </>
  )
}
