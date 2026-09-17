import { useEffect } from 'react'
import type { MouseEvent } from 'react'
import { useTranslation } from '../i18n/useTranslation'
import type { Project } from '../types'

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useTranslation()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const stopPropagation = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation()

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={stopPropagation}
      >
        <div className="modal__head">
          <div>
            <div className="modal__kind">{project.kind}</div>
            <h3 className="modal__title">{project.title}</h3>
          </div>
          <button type="button" className="modal__close" aria-label={t.modal.close} onClick={onClose}>
            ✕
          </button>
        </div>

        <p className="modal__detail">{project.detail}</p>

        <div className="modal__tags">
          {project.tags.map((tag, index) => (
            <span key={`${tag}-${index}`} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="modal__links">
          <a href="#projects" className="modal__link--solid" onClick={onClose}>
            {t.modal.liveDemo}
          </a>
          <a href="#projects" className="modal__link--ghost" onClick={onClose}>
            {t.modal.source}
          </a>
        </div>
      </div>
    </div>
  )
}
