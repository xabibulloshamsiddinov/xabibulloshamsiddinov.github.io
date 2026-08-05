import React from 'react'
import { Terminal, ArrowUp } from 'lucide-react'
import { DEVELOPER_INFO } from '../data/portfolioData'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '60px 0 30px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(0,242,254,0.15) 0%, rgba(127,0,255,0.15) 100%)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
              }}
            >
              <Terminal size={18} />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem' }}>
              Khabibullo<span style={{ color: 'var(--accent-cyan)' }}>.dev</span>
            </span>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
              About
            </a>
            <a href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Skills
            </a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Projects
            </a>
            <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            style={{
              padding: '10px 16px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-card)',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-card)')}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {DEVELOPER_INFO.name}. All rights reserved.
          </div>

          <div>
            Built with React, TypeScript & deployed on <span style={{ color: 'var(--accent-cyan)' }}>Netlify</span>.
          </div>
        </div>
      </div>
    </footer>
  )
}
