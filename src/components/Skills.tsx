import { useEffect, useState } from 'react'
import { SKILLS, SKILL_TONES, SOFT_SKILLS } from '../data/portfolio'

const MOUNT_DELAY = 200
const PIP_COUNT = 5

export const Skills = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), MOUNT_DELAY)

    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <section id="skills" className="panel skills">
      <div className="skills__head">
        <h2 className="section-title">Skills</h2>
        <span className="section-note">niveau · usage quotidien → exploratoire</span>
      </div>

      <div className="skills__grid">
        {SKILLS.map((skill, skillIndex) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-card__head">
              <span className="skill-card__name">{skill.name}</span>
              <span className="skill-card__level" style={{ color: SKILL_TONES[skill.lvl] }}>
                {skill.level}
              </span>
            </div>

            <div className="skill-card__pips">
              {Array.from({ length: PIP_COUNT }, (_, pipIndex) => {
                const filled = mounted && pipIndex < skill.lvl

                return (
                  <span
                    key={pipIndex}
                    style={{
                      background: filled
                        ? 'linear-gradient(90deg,#8b5cf6,#c4a6ff)'
                        : 'rgba(168,133,255,.14)',
                      boxShadow: filled ? '0 0 12px rgba(167,139,250,.55)' : 'none',
                      animationDelay: `${skillIndex * 90 + pipIndex * 70}ms`,
                    }}
                  />
                )
              })}
            </div>

            <div className="skill-card__note">{skill.note}</div>
          </div>
        ))}
      </div>

      <div className="skills__divider" />

      <div className="soft-row">
        {SOFT_SKILLS.map((soft) => (
          <span key={soft} className="soft-chip">
            {soft}
          </span>
        ))}
      </div>
    </section>
  )
}
