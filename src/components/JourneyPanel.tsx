import { JOBS } from '../data/portfolio'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'

const SPOTLIGHT_COLOR = 'rgba(196, 166, 255, 0.25)'

export const JourneyPanel = () => (
  <ol className="journey">
    {JOBS.map((job) => (
      <li key={job.id}>
        <SpotlightCard spotlightColor={SPOTLIGHT_COLOR} className="job">
          <div className="job__head">
            <div>
              <h3 className="job__role">{job.role}</h3>
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

          <ul className="project__tags">
            {job.stack.map((tech, index) => (
              <li key={`${tech}-${index}`} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </SpotlightCard>
      </li>
    ))}
  </ol>
)
