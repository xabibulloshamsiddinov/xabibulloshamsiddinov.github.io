import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Project } from './data/portfolioData'

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Contact />
      </main>
      <Footer />

      {/* Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App
