import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import { withAlpha } from '../theme/palette'
import { useTheme } from '../theme/useTheme'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'

export const SkillsPanel = () => {
  const { t } = useTranslation()
  const { skillGroups } = useContent()
  const { palette } = useTheme()
  const spotlightColor = withAlpha(palette.cyan, 0.22)

  return (
    <>
      <ul className="cards">
        {skillGroups.map((group) => (
          <li key={group.id}>
            <SpotlightCard spotlightColor={spotlightColor} className="skill">
              <h3 className="skill__name">{group.name}</h3>

              <ul className="skill__tags">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="skill__note">{group.proof}</p>
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
