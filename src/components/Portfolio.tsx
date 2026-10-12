import { useState } from 'react'
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

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__head">
        <h2 className="section-title">
          <BlurText text="Portfolio Showcase" delay={100} animateBy="words" direction="top" />
        </h2>
        <p className="section-lead">Mes projets, mes compétences et mon parcours.</p>
      </div>

      <div className="tabs" role="tablist" aria-label="Contenu du portfolio">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            className="tabs__tab"
            onClick={() => setActiveTab(tab.id)}
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
        className="portfolio__panel"
      >
        {activeTab === 'projects' ? <ProjectsPanel onOpenProject={onOpenProject} /> : null}
        {activeTab === 'skills' ? <SkillsPanel /> : null}
        {activeTab === 'journey' ? <JourneyPanel /> : null}
      </div>
    </section>
  )
}
