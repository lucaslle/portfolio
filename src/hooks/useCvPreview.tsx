import { useState } from 'react'
import type { MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import { CvDrawer } from '../components/CvDrawer'

export const useCvPreview = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Un clic modifié (nouvel onglet, etc.) garde le comportement natif du lien.
  const openPreview = (event: MouseEvent) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return
    event.preventDefault()
    setIsOpen(true)
  }

  // Portail : le menu mobile masqué (display: none) empêcherait sinon l'affichage du drawer.
  const modal = isOpen ? createPortal(<CvDrawer onClose={() => setIsOpen(false)} />, document.body) : null

  return { openPreview, modal }
}
