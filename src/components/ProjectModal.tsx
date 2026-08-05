import React, { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, Cpu, Zap } from 'lucide-react'
import { Project } from '../data/portfolioData'
import { GithubIcon } from './Icons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(5, 8, 14, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-accent)',
          borderRadius: '24px',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8), var(--shadow-glow-cyan)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Banner */}
        <div
          style={{
            height: '200px',
            background: project.imageGradient,
            padding: '28px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <span
            style={{
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              padding: '6px 14px',
              borderRadius: '8px',
              fontWeight: 600,
            }}
          >
            {project.category}
          </span>

          <button
            onClick={onClose}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '36px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px', lineHeight: 1.2 }}>
            {project.title}
          </h2>

          {project.metrics && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(0, 245, 160, 0.08)',
                border: '1px solid rgba(0, 245, 160, 0.25)',
                color: 'var(--accent-emerald)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                marginBottom: '24px',
              }}
            >
              <Zap size={16} />
              <span>{project.metrics}</span>
            </div>
          )}

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
            {project.fullDescription}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={18} style={{ color: 'var(--accent-cyan)' }} />
              <span>Technical Accomplishments</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '36px' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
              TECHNOLOGIES USED
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(0, 242, 254, 0.08)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ flex: 1 }}
              >
                <span>Visit Live App</span>
                <ExternalLink size={18} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ flex: 1 }}
              >
                <GithubIcon size={18} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
