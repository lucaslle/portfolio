import { useState } from 'react'
import type { MouseEvent } from 'react'
import { About } from './components/About'
import { Backdrop } from './components/Backdrop'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { ProjectModal } from './components/ProjectModal'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { SECTION_IDS } from './data/portfolio'
import { usePointer } from './hooks/usePointer'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useSparks } from './hooks/useSparks'
import type { Project } from './types'
import { scrollToSection } from './utils/scrollToSection'

export const App = () => {
  const { section, scrollY, velocity } = useScrollSpy(SECTION_IDS)
  const pointer = usePointer()
  const { sparks, burst } = useSparks()
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const handlePageClick = (event: MouseEvent<HTMLDivElement>) => burst(event.clientX, event.clientY)

  return (
    <div className="page" onClick={handlePageClick}>
      <Backdrop scrollY={scrollY} cursor={pointer.position} sparks={sparks} />

      <div className="shell">
        <Header activeSection={section} onNavigate={scrollToSection} />

        <Hero
          pointerRatio={pointer.ratio}
          onViewWork={() => scrollToSection('projects')}
          onContact={() => scrollToSection('contact')}
        />

        <Marquee velocity={velocity} />

        <Projects onOpenProject={setActiveProject} />

        <Skills />

        <div className="duo">
          <About />
          <Contact />
        </div>

        <Footer />
      </div>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      ) : null}
    </div>
  )
}
