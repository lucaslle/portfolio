import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { GridBackdrop } from './components/GridBackdrop'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Loader } from './components/Loader'
import { Portfolio } from './components/Portfolio'
import { ProjectModal } from './components/ProjectModal'
import ClickSpark from './components/reactbits/ClickSpark/ClickSpark'
import { NAV_ITEMS } from './data/portfolio'
import { useScrollSpy } from './hooks/useScrollSpy'
import type { Project } from './types'
import { markIntroSeen, shouldPlayIntro } from './utils/introSeen'
import { scrollToSection } from './utils/scrollToSection'

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export const App = () => {
  const section = useScrollSpy(SECTION_IDS)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(shouldPlayIntro)

  const finishLoading = useCallback(() => {
    markIntroSeen()
    setIsLoading(false)
  }, [])

  return (
    <ClickSpark sparkColor={['#8b5cf6', '#c4a6ff', '#7dd3fc']} sparkCount={9} sparkRadius={22}>
      <div className="page">
        <GridBackdrop />
        <div className="page__halo page__halo--left" aria-hidden="true" />
        <div className="page__halo page__halo--right" aria-hidden="true" />

        <Header activeSection={section} onNavigate={scrollToSection} />

        <main className="shell">
          <Hero />
          <About />
          <Portfolio onOpenProject={setActiveProject} />
          <Contact />
        </main>

        <Footer />

        {activeProject ? (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        ) : null}
      </div>

      {isLoading ? <Loader onDone={finishLoading} /> : null}
    </ClickSpark>
  )
}
