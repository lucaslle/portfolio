import type { ReactNode } from 'react'
import { CV_URL } from '../data/portfolio'
import { useCvPreview } from '../hooks/useCvPreview'

type CvLinkProps = {
  className?: string
  children: ReactNode
}

export const CvLink = ({ className, children }: CvLinkProps) => {
  const { openPreview, modal } = useCvPreview()

  return (
    <>
      <a href={CV_URL} className={className} onClick={openPreview}>
        {children}
      </a>
      {modal}
    </>
  )
}
