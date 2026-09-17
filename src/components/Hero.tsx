import { useState } from 'react'
import type { MouseEvent } from 'react'
import { SOCIALS } from '../data/portfolio'
import { useTranslation } from '../i18n/useTranslation'

const TILT_X = 22
const TILT_Y = 16
const MAGNET_X = 0.28
const MAGNET_Y = 0.4

type HeroProps = {
  pointerRatio: { x: number; y: number }
  onViewWork: () => void
  onContact: () => void
}

export const Hero = ({ pointerRatio, onViewWork, onContact }: HeroProps) => {
  const { t } = useTranslation()
  const [magnet, setMagnet] = useState({ x: 0, y: 0 })

  const tiltX = (pointerRatio.x - 0.5) * TILT_X
  const tiltY = (pointerRatio.y - 0.5) * TILT_Y

  const handleMagnetMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setMagnet({
      x: (event.clientX - rect.left - rect.width / 2) * MAGNET_X,
      y: (event.clientY - rect.top - rect.height / 2) * MAGNET_Y,
    })
  }

  const resetMagnet = () => setMagnet({ x: 0, y: 0 })

  return (
    <section id="home" className="hero">
      <div className="hero__halo" />

      <div className="hero__inner">
        <div
          className="hero__portrait"
          style={{ transform: `translate3d(${tiltX}px, ${tiltY}px, 0)` }}
        >
          <div className="hero__frame">
            <div className="hero__frame-label">
              <span>
                {t.hero.portraitLabel}
                <br />
                1:1
              </span>
            </div>
            <div className="hero__scan" />
          </div>
        </div>

        <div className="hero__body">
          <div className="badge">
            <span className="badge__dot" />
            {t.hero.badge}
          </div>

          <h1 className="hero__headline">
            {t.hero.greeting}
            <br />
            <span className="hero__gradient-text">{t.hero.headline}</span>
            <span className="hero__caret" />
          </h1>

          <p className="hero__lead">{t.hero.lead}</p>

          <div className="hero__actions">
            <button
              type="button"
              className="btn-primary"
              onClick={onViewWork}
              onMouseMove={handleMagnetMove}
              onMouseLeave={resetMagnet}
              style={{ transform: `translate3d(${magnet.x}px, ${magnet.y}px, 0)` }}
            >
              {t.hero.viewWork}
            </button>
            <button type="button" className="btn-ghost" onClick={onContact}>
              {t.hero.contact}
            </button>
          </div>

          <div className="hero__socials">
            {SOCIALS.map((social) => (
              <a
                key={social.tag}
                className="social"
                href={social.href}
                title={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
