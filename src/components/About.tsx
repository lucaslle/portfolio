import { FULL_NAME, INITIALS } from '../data/portfolio'
import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import { withAlpha } from '../theme/palette'
import { useTheme } from '../theme/useTheme'
import { scrollToSection } from '../utils/scrollToSection'
import AnimatedContent from './reactbits/AnimatedContent/AnimatedContent'
import BlurText from './reactbits/BlurText/BlurText'
import CountUp from './reactbits/CountUp/CountUp'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'
import StarBorder from './reactbits/StarBorder/StarBorder'
import { StatIconGlyph } from './StatIconGlyph'

export const About = () => {
  const { t } = useTranslation()
  const { stats } = useContent()
  const { palette } = useTheme()
  const spotlightColor = withAlpha(palette.violet, 0.35)

  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div className="about__body">
          <span className="eyebrow">{t.about.eyebrow}</span>

          <h2 className="about__name">
            <BlurText text={FULL_NAME} delay={120} animateBy="words" direction="top" />
          </h2>

          <p className="about__story">{t.about.story}</p>

          <blockquote className="about__quote">“{t.about.quote}”</blockquote>

          <div className="about__actions">
            <StarBorder
              as="button"
              type="button"
              color={palette.violet}
              trailColor={palette.cyan}
              backgroundColor={palette.ice}
              textColor={palette.ink}
              radius={10}
              onClick={() => scrollToSection('portfolio')}
            >
              {t.about.viewProjects}
            </StarBorder>

            <StarBorder
              as="button"
              type="button"
              color={palette.violet}
              backgroundColor={palette.cardSurface}
              textColor={palette.ice}
              radius={10}
              onClick={() => scrollToSection('contact')}
            >
              {t.about.contact}
            </StarBorder>
          </div>
        </div>

        <div className="about__portrait" aria-hidden="true">
          <div className="about__monogram">{INITIALS}</div>
        </div>
      </div>

      <ul className="about__stats">
        {stats.map((stat, index) => (
          <li key={stat.icon}>
            <AnimatedContent distance={40} delay={index * 0.12}>
              <SpotlightCard spotlightColor={spotlightColor} className="stat">
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
}
