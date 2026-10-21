import { useEffect, useState } from 'react'
import { useTranslation } from '../i18n/useTranslation'
import DecryptedText from './reactbits/DecryptedText/DecryptedText'

const LEAVE_DELAY = 2200
const REMOVE_DELAY = 2800

type LoaderProps = {
  onDone: () => void
}

export const Loader = ({ onDone }: LoaderProps) => {
  const { t } = useTranslation()
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const leaveTimeout = window.setTimeout(() => setIsLeaving(true), LEAVE_DELAY)
    const doneTimeout = window.setTimeout(onDone, REMOVE_DELAY)

    return () => {
      window.clearTimeout(leaveTimeout)
      window.clearTimeout(doneTimeout)
    }
  }, [onDone])

  return (
    <div className={isLeaving ? 'loader loader--leaving' : 'loader'} role="status" aria-label={t.loader}>
      <DecryptedText
        text="Welcome"
        animateOn="view"
        sequential
        speed={70}
        maxIterations={14}
        parentClassName="loader__text"
        encryptedClassName="loader__text--encrypted"
      />
    </div>
  )
}
