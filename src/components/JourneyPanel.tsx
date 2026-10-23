import { useContent } from '../i18n/useContent'
import { useTranslation } from '../i18n/useTranslation'
import { withAlpha } from '../theme/palette'
import { useTheme } from '../theme/useTheme'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'

export const JourneyPanel = () => {
  const { t } = useTranslation()
  const { jobs, education } = useContent()
  const { palette } = useTheme()
  const spotlightColor = withAlpha(palette.lilac, 0.25)

  return (
    <div className="journey">
      <section aria-labelledby="journey-experience">
        <h3 id="journey-experience" className="journey__title">
          {t.portfolio.experience}
        </h3>

        <ol className="journey__list">
          {jobs.map((job) => (
            <li key={job.id}>
              <SpotlightCard spotlightColor={spotlightColor} className="job">
                <div className="job__head">
                  <div>
                    <h4 className="job__role">{job.role}</h4>
                    <p className="job__company">
                      {job.company} · {job.place}
                    </p>
                  </div>
                  <span className="job__period">{job.period}</span>
                </div>

                <p className="job__summary">{job.summary}</p>

                <ul className="job__bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {job.stack.length > 0 ? (
                  <ul className="project__tags">
                    {job.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </SpotlightCard>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="journey-education">
        <h3 id="journey-education" className="journey__title">
          {t.portfolio.education}
        </h3>

        <ol className="journey__list">
          {education.map((diploma) => (
            <li key={diploma.id}>
              <SpotlightCard spotlightColor={spotlightColor} className="job">
                <div className="job__head">
                  <div>
                    <h4 className="job__role job__role--small">{diploma.title}</h4>
                    <p className="job__company">{diploma.school}</p>
                  </div>
                  <span className="job__period">{diploma.period}</span>
                </div>
              </SpotlightCard>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
