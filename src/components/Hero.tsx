import { lazy, Suspense, useMemo } from 'react'
import { HERO_TECHS } from '../data/portfolio'
import { useIsCompact } from '../hooks/useIsCompact'
import { useTranslation } from '../i18n/useTranslation'
import { useTheme } from '../theme/useTheme'
import { buildBadgeImage } from '../utils/badgeImage'
import ShinyText from './reactbits/ShinyText/ShinyText'
import TextType from './reactbits/TextType/TextType'

const Lanyard = lazy(() => import('./reactbits/Lanyard/Lanyard'))

const BADGE_SIZE_DESKTOP = 0.48
const BADGE_SIZE_COMPACT = 0.36

export const Hero = () => {
  const { t } = useTranslation()
  const { palette } = useTheme()
  const [headlineFirst, headlineSecond] = t.hero.headline
  const frontImage = useMemo(() => buildBadgeImage('front', t.role, palette), [t.role, palette])
  const backImage = useMemo(() => buildBadgeImage('back', t.role, palette), [t.role, palette])
  const isCompact = useIsCompact()
  const badgeSize = isCompact ? BADGE_SIZE_COMPACT : BADGE_SIZE_DESKTOP
  const anchor = isCompact ? 'center' : 'right'

  return (
    <section id="home" className="hero">
      <div className="hero__body">
        <div className="hero__badge">
          <ShinyText text={`✦ ${t.hero.badge}`} color={palette.shiny} shineColor={palette.ice} speed={3} />
        </div>

        <h1 className="hero__headline">
          <span className="hero__headline-line">{headlineFirst}</span>
          <span className="hero__headline-line hero__headline-line--accent">{headlineSecond}</span>
        </h1>

        <div className="hero__role">
          {/* key : repart de zéro au changement de langue plutôt que de finir le mot en cours. */}
          <TextType
            key={t.tag}
            as="span"
            text={t.hero.roles}
            typingSpeed={70}
            deletingSpeed={40}
            pauseDuration={1800}
            cursorCharacter="_"
          />
        </div>

        <p className="hero__lead">{t.hero.lead}</p>

        <ul className="hero__techs" aria-label={t.hero.techs}>
          {HERO_TECHS.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <ul className="hero__hints">
          {t.hero.hints.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ul>
      </div>

      <div className="hero__lanyard" aria-hidden="true">
        <Suspense fallback={null}>
          <Lanyard
            frontImage={frontImage}
            backImage={backImage}
            cardColor={palette.cardSurface}
            metal="silver"
            strapColor={palette.strap}
            anchor={anchor}
            interactionScope="window"
            size={badgeSize}
          />
        </Suspense>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        SCROLL ↓
      </div>
    </section>
  )
}
