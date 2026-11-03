import { useEffect, useRef } from 'react'
import type { MouseEvent, SyntheticEvent } from 'react'
import { CV_URL } from '../data/portfolio'
import { useTranslation } from '../i18n/useTranslation'

type CvDrawerProps = {
  onClose: () => void
}

const PDF_VIEW = `${CV_URL}#toolbar=0&navpanes=0&view=FitH`

export const CvDrawer = ({ onClose }: CvDrawerProps) => {
  const { t } = useTranslation()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined

    dialog.showModal()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
      dialog.close()
    }
  }, [])

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault()
    onClose()
  }

  const handleOverlayClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal-overlay modal-overlay--drawer"
      aria-labelledby="cv-drawer-title"
      onCancel={handleCancel}
      onClick={handleOverlayClick}
    >
      <div className="drawer">
        <div className="drawer__head">
          <h3 id="cv-drawer-title" className="modal__title">
            {t.modal.cvTitle}
          </h3>
          <div className="modal__actions">
            <a href={CV_URL} className="modal__link--solid" download>
              {t.modal.download}
            </a>
            <button type="button" className="modal__close" aria-label={t.modal.close} onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        {/* Les navigateurs sans lecteur PDF intégré (Android) affichent le lien de secours. */}
        <object className="modal__pdf" data={PDF_VIEW} type="application/pdf" aria-label={t.modal.cvTitle}>
          <a href={CV_URL} className="modal__link--ghost" download>
            {t.modal.download}
          </a>
        </object>
      </div>
    </dialog>
  )
}
