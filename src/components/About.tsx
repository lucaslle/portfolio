import { ABOUT_QUOTE, ABOUT_STORY, FULL_NAME, INITIALS, STATS } from '../data/portfolio'
import { scrollToSection } from '../utils/scrollToSection'
import AnimatedContent from './reactbits/AnimatedContent/AnimatedContent'
import BlurText from './reactbits/BlurText/BlurText'
import CountUp from './reactbits/CountUp/CountUp'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'
import StarBorder from './reactbits/StarBorder/StarBorder'
import { StatIconGlyph } from './StatIconGlyph'

const SPOTLIGHT_COLOR = 'rgba(139, 92, 246, 0.35)'

export const About = () => (
  <section id="about" className="about">
    <div className="about__grid">
      <div className="about__body">
        <span className="eyebrow">À propos</span>

        <h2 className="about__name">
          <BlurText text={FULL_NAME} delay={120} animateBy="words" direction="top" />
        </h2>

        <p className="about__story">{ABOUT_STORY}</p>

        <blockquote className="about__quote">“{ABOUT_QUOTE}”</blockquote>

        <div className="about__actions">
          <StarBorder
            as="button"
            type="button"
            color="#8b5cf6"
            trailColor="#7dd3fc"
            backgroundColor="#e9dcff"
            textColor="#07040e"
            radius={10}
            onClick={() => scrollToSection('portfolio')}
          >
            Voir les projets
          </StarBorder>

          <StarBorder
            as="button"
            type="button"
            color="#8b5cf6"
            backgroundColor="#0d0818"
            textColor="#e9dcff"
            radius={10}
            onClick={() => scrollToSection('contact')}
          >
            Me contacter
          </StarBorder>
        </div>
      </div>

      <div className="about__portrait" aria-hidden="true">
        <div className="about__monogram">{INITIALS}</div>
      </div>
    </div>

    <ul className="about__stats">
      {STATS.map((stat, index) => (
        <li key={stat.label}>
          <AnimatedContent distance={40} delay={index * 0.12}>
            <SpotlightCard spotlightColor={SPOTLIGHT_COLOR} className="stat">
              <span className="stat__icon">
                <StatIconGlyph icon={stat.icon} />
              </span>
              <CountUp to={stat.to} duration={2} className="stat__value" />
              <span className="stat__label">{stat.label}</span>
            </SpotlightCard>
          </AnimatedContent>
        </li>
      ))}
    </ul>
  </section>
)
