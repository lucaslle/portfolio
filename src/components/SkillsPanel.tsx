import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'

const SPOTLIGHT_COLOR = 'rgba(125, 211, 252, 0.22)'
const MAX_LEVEL = 5
const LEVEL_STEPS = Array.from({ length: MAX_LEVEL }, (_, index) => index + 1)

export const SkillsPanel = () => {
  const { t } = useTranslation()
  const { skills } = useContent()

  return (
    <>
      <ul className="cards">
        {skills.map((skill) => (
          <li key={skill.id}>
            <SpotlightCard spotlightColor={SPOTLIGHT_COLOR} className="skill">
              <div className="skill__head">
                <h3 className="skill__name">{skill.name}</h3>
                <span className="skill__level">{skill.level}</span>
              </div>

              <div
                className="skill__meter"
                role="img"
                aria-label={t.portfolio.skillLevel(skill.lvl, MAX_LEVEL)}
              >
                {LEVEL_STEPS.map((step) => (
                  <span
                    key={step}
                    className={step <= skill.lvl ? 'skill__step skill__step--on' : 'skill__step'}
                  />
                ))}
              </div>

              <p className="skill__note">{skill.note}</p>
            </SpotlightCard>
          </li>
        ))}
      </ul>

      <ul className="soft-skills" aria-label={t.portfolio.softSkillsLabel}>
        {t.softSkills.map((softSkill) => (
          <li key={softSkill} className="chip">
            {softSkill}
          </li>
        ))}
      </ul>
    </>
  )
}
