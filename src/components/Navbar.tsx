import React, { useState, useEffect } from 'react'
import { Terminal, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { DEVELOPER_INFO } from '../data/portfolioData'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 13, 20, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'var(--text-main)',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.5px',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(0,242,254,0.15) 0%, rgba(127,0,255,0.15) 100%)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
            }}
          >
            <Terminal size={20} />
          </div>
          <span>
            Khabibullo<span style={{ color: 'var(--accent-cyan)' }}>.dev</span>
          </span>
        </a>

        {/* Status indicator (Desktop) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(0, 245, 160, 0.08)',
            border: '1px solid rgba(0, 245, 160, 0.2)',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-emerald)',
          }}
          className="desktop-status"
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-emerald)',
              boxShadow: '0 0 10px var(--accent-emerald)',
              animation: 'pulseGlow 2s infinite',
            }}
          />
          <span>{DEVELOPER_INFO.status}</span>
        </div>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '4px 0',
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--accent-cyan)',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px var(--accent-cyan)',
                    }}
                  />
                )}
              </a>
            )
          })}

          <a
            href="#contact"
            className="btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.88rem',
              borderRadius: '10px',
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '8px',
          }}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 13, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 24px',
            gap: '24px',
            zIndex: 999,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: activeSection === link.id ? 'var(--accent-cyan)' : 'var(--text-main)',
                fontSize: '1.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '12px',
                background: 'rgba(0, 245, 160, 0.08)',
                border: '1px solid rgba(0, 245, 160, 0.2)',
                fontSize: '0.85rem',
                color: 'var(--accent-emerald)',
              }}
            >
              <Sparkles size={16} />
              <span>{DEVELOPER_INFO.status}</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}

      {/* Media query styling in JSX */}
      <style>{`
        @media (max-width: 868px) {
          .desktop-nav, .desktop-status {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  )
}
