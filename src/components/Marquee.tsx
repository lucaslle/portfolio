import { useTranslation } from '../i18n/useTranslation'

type MarqueeProps = {
  velocity: number
}

export const Marquee = ({ velocity }: MarqueeProps) => {
  const { t } = useTranslation()
  /* Doublé pour que le défilement boucle sans trou visible. */
  const ribbon = [...t.ribbon, ...t.ribbon]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" style={{ transform: `translateX(${velocity}px)` }}>
        {ribbon.map((label, index) => (
          <span key={`${label}-${index}`} className="marquee__item">
            {label} <span>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
