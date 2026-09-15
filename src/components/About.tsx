import { useState } from 'react'
import { ABOUT_STORY, JOBS, STATS } from '../data/portfolio'

export const About = () => {
  const [openJobId, setOpenJobId] = useState<string | null>(JOBS[0].id)

  const toggleJob = (id: string) => setOpenJobId((current) => (current === id ? null : id))

  return (
    <section id="about" className="panel about">
      <h2 className="section-title" style={{ marginBottom: 20 }}>
        About
      </h2>
      <h3 className="about__story-title">My story</h3>
      <p className="about__story">{ABOUT_STORY}</p>

      <div className="about__subhead">
        <h3>Parcours pro</h3>
        <span className="about__hint">clique pour déplier</span>
      </div>

      <div className="timeline">
        <span className="timeline__line" />
        {JOBS.map((job) => {
          const open = openJobId === job.id

          return (
            <button
              key={job.id}
              type="button"
              className="job"
              aria-expanded={open}
              onClick={() => toggleJob(job.id)}
              style={{
                borderColor: open ? 'rgba(167,139,250,.5)' : 'rgba(168,133,255,.14)',
                background: open ? 'rgba(139,92,246,.12)' : 'rgba(139,92,246,.04)',
              }}
            >
              <span
                className="job__dot"
                style={{
                  background: open ? 'linear-gradient(120deg,#a78bfa,#38bdf8)' : 'rgba(168,133,255,.35)',
                  boxShadow: open ? '0 0 14px rgba(167,139,250,.9)' : 'none',
                }}
              />

              <div className="job__head">
                <div style={{ minWidth: 0 }}>
                  <div className="job__role">{job.role}</div>
                  <div className="job__company">
                    {job.company} <span>· {job.place}</span>
                  </div>
                </div>
                <div className="job__meta">
                  <span className="job__period">{job.period}</span>
                  <span
                    className="job__caret"
                    style={{ transform: `rotate(${open ? 180 : 0}deg)`, display: 'inline-block' }}
                  >
                    ▾
                  </span>
                </div>
              </div>

              {open ? (
                <div className="job__detail">
                  <p className="job__summary">{job.summary}</p>
                  <ul className="job__bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {job.stack.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </button>
          )
        })}
      </div>

      <div className="stats">
        {STATS.map((stat) => (
          <div key={stat.label} className="stat">
            <div className="stat__value">{stat.value}</div>
            <div className="stat__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
