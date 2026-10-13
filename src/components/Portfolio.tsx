import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { PortfolioTab, Project } from '../types'
import { JourneyPanel } from './JourneyPanel'
import { ProjectsPanel } from './ProjectsPanel'
import BlurText from './reactbits/BlurText/BlurText'
import { SkillsPanel } from './SkillsPanel'

type TabItem = {
  id: PortfolioTab
  label: string
}

const TABS: TabItem[] = [
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'journey', label: 'Parcours' },
]

type PortfolioProps = {
  onOpenProject: (project: Project) => void
}

export const Portfolio = ({ onOpenProject }: PortfolioProps) => {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('projects')
  const tabRefs = useRef<Record<PortfolioTab, HTMLButtonElement | null>>({
    projects: null,
    skills: null,
    journey: null,
  })

  const selectTab = (index: number) => {
    const tab = TABS[(index + TABS.length) % TABS.length]
    setActiveTab(tab.id)
    tabRefs.current[tab.id]?.focus()
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
          <BlurText text="Portfolio Showcase" delay={100} animateBy="words" direction="top" />
        </h2>
        <p className="section-lead">Mes projets, mes compétences et mon parcours.</p>
      </div>

      <div className="tabs" role="tablist" aria-label="Contenu du portfolio">
        {TABS.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[tab.id] = element
            }}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            className="tabs__tab"
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {tab.label}
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
