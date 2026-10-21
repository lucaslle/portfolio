import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { useTranslation } from '../i18n/useTranslation'
import type { PortfolioTab, Project } from '../types'
import { JourneyPanel } from './JourneyPanel'
import { ProjectsPanel } from './ProjectsPanel'
import BlurText from './reactbits/BlurText/BlurText'
import { SkillsPanel } from './SkillsPanel'

const TABS: PortfolioTab[] = ['projects', 'skills', 'journey']

type PortfolioProps = {
  onOpenProject: (project: Project) => void
}

export const Portfolio = ({ onOpenProject }: PortfolioProps) => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<PortfolioTab>('projects')
  const tabRefs = useRef<Record<PortfolioTab, HTMLButtonElement | null>>({
    projects: null,
    skills: null,
    journey: null,
  })

  const selectTab = (index: number) => {
    const tab = TABS[(index + TABS.length) % TABS.length]
    setActiveTab(tab)
    tabRefs.current[tab]?.focus()
  }

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const targetIndexByKey: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: TABS.length - 1,
    }
    const targetIndex = targetIndexByKey[event.key]
    if (targetIndex === undefined) return

    event.preventDefault()
    selectTab(targetIndex)
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__head">
        <h2 className="section-title">
          <BlurText text={t.portfolio.title} delay={100} animateBy="words" direction="top" />
        </h2>
        <p className="section-lead">{t.portfolio.lead}</p>
      </div>

      <div className="tabs" role="tablist" aria-label={t.portfolio.tabsLabel}>
        {TABS.map((tab, index) => (
          <button
            key={tab}
            ref={(element) => {
              tabRefs.current[tab] = element
            }}
            type="button"
            role="tab"
            id={`tab-${tab}`}
            aria-selected={activeTab === tab}
            aria-controls={`panel-${tab}`}
            tabIndex={activeTab === tab ? 0 : -1}
            className="tabs__tab"
            onClick={() => setActiveTab(tab)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {t.portfolio.tabs[tab]}
          </button>
        ))}
      </div>

      <div
        key={activeTab}
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
        className="portfolio__panel"
      >
        {activeTab === 'projects' ? <ProjectsPanel onOpenProject={onOpenProject} /> : null}
        {activeTab === 'skills' ? <SkillsPanel /> : null}
        {activeTab === 'journey' ? <JourneyPanel /> : null}
      </div>
    </section>
  )
}
