import React, { useState } from 'react'
import { FolderGit2, ExternalLink, Sparkles, Eye } from 'lucide-react'
import { PROJECTS, Project } from '../data/portfolioData'
import { GithubIcon } from './Icons'

interface ProjectsProps {
  onSelectProject: (project: Project) => void
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', 'Full Stack', 'Web Apps', 'APIs & Cloud', 'UI/UX']

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Showcase</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
            Production web apps, open-source libraries, and cloud architectural experiments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  background: isActive ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--accent-cyan)' : 'var(--border-card)',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '32px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Project Visual Banner */}
              <div
                style={{
                  height: '180px',
                  background: project.imageGradient,
                  position: 'relative',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Category & Featured tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontWeight: 600,
                    }}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span
                      style={{
                        background: 'rgba(0, 242, 254, 0.9)',
                        color: '#000',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Sparkles size={12} />
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Metrics pill */}
                {project.metrics && (
                  <div
                    style={{
                      alignSelf: 'flex-start',
                      background: 'rgba(10, 13, 20, 0.85)',
                      color: 'var(--accent-emerald)',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 245, 160, 0.3)',
                    }}
                  >
                    ⚡ {project.metrics}
                  </div>
                )}
              </div>

              {/* Project Card Body */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <button
                    onClick={() => onSelectProject(project)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0,
                    }}
                  >
                    <Eye size={16} />
                    <span>View Architecture</span>
                  </button>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: 'var(--text-muted)',
                          transition: 'color 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: 'var(--text-muted)',
                          transition: 'color 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                        title="Open Live Preview"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
