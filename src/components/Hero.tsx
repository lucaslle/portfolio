import { useMemo, useState } from 'react'
import { BADGE, HERO_HEADLINE, HERO_HINTS, HERO_LEAD, HERO_ROLES, HERO_TECHS } from '../data/portfolio'
import { buildBadgeImage } from '../utils/badgeImage'
import Lanyard from './reactbits/Lanyard/Lanyard'
import ShinyText from './reactbits/ShinyText/ShinyText'
import TextType from './reactbits/TextType/TextType'

const [HEADLINE_FIRST, HEADLINE_SECOND] = HERO_HEADLINE

const COMPACT_BREAKPOINT = 960
const BADGE_SIZE_DESKTOP = 0.48
const BADGE_SIZE_COMPACT = 0.36

export const Hero = () => {
  const frontImage = useMemo(() => buildBadgeImage('front'), [])
  const backImage = useMemo(() => buildBadgeImage('back'), [])
  const [badgeSize] = useState(() =>
    window.innerWidth < COMPACT_BREAKPOINT ? BADGE_SIZE_COMPACT : BADGE_SIZE_DESKTOP,
  )

  return (
    <section id="home" className="hero">
      <div className="hero__body">
        <div className="hero__badge">
          <ShinyText text={`✦ ${BADGE}`} color="#8b7aa8" shineColor="#e9dcff" speed={3} />
        </div>

        <h1 className="hero__headline">
          <span className="hero__headline-line">{HEADLINE_FIRST}</span>
          <span className="hero__headline-line hero__headline-line--accent">{HEADLINE_SECOND}</span>
        </h1>

        <div className="hero__role">
          <TextType
            as="span"
            text={HERO_ROLES}
            typingSpeed={70}
            deletingSpeed={40}
            pauseDuration={1800}
            cursorCharacter="_"
          />
        </div>

        <p className="hero__lead">{HERO_LEAD}</p>

        <ul className="hero__techs" aria-label="Technologies">
          {HERO_TECHS.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <ul className="hero__hints">
          {HERO_HINTS.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ul>
      </div>

      <div className="hero__lanyard" aria-hidden="true">
        <Lanyard
          frontImage={frontImage}
          backImage={backImage}
          cardColor="#0d0818"
          metal="silver"
          strapColor="#4c2a9e"
          anchor="center"
          size={badgeSize}
        />
      </div>

      <div className="hero__scroll" aria-hidden="true">
        SCROLL ↓
      </div>
    </section>
  )
}
