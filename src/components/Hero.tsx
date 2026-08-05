import React, { useState } from 'react'
import { ArrowDown, Sparkles, Mail, Copy, Check } from 'lucide-react'
import { DEVELOPER_INFO } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [terminalTab, setTerminalTab] = useState<'profile' | 'stack' | 'status'>('profile')

  const copyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.socials.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        paddingTop: '140px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(127, 0, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Intro text */}
          <div>
            <div className="section-badge">
              <Sparkles size={14} />
              <span>{DEVELOPER_INFO.role}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                marginBottom: '20px',
                lineHeight: 1.1,
              }}
            >
              Hi, I'm <br />
              <span className="gradient-text">{DEVELOPER_INFO.name}</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'var(--text-muted)',
                marginBottom: '32px',
                maxWidth: '580px',
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {DEVELOPER_INFO.tagline}
            </p>

            {/* Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowDown size={18} />
              </a>
              <button onClick={copyEmail} className="btn-secondary" title="Copy email address">
                {copied ? <Check size={18} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={18} />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social links & Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={DEVELOPER_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-card)')}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={DEVELOPER_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-card)')}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={`mailto:${DEVELOPER_INFO.socials.email}`}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-card)')}
                  aria-label="Send Email"
                >
                  <Mail size={20} />
                </a>
              </div>

              <div
                style={{
                  height: '24px',
                  width: '1px',
                  background: 'rgba(255,255,255,0.1)',
                }}
              />

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                📍 {DEVELOPER_INFO.location}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Showcase */}
          <div className="animate-float">
            <div
              style={{
                background: '#090d16',
                borderRadius: '16px',
                border: '1px solid rgba(0, 242, 254, 0.25)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0, 242, 254, 0.15)',
                overflow: 'hidden',
              }}
            >
              {/* Terminal Header */}
              <div
                style={{
                  padding: '12px 18px',
                  background: 'rgba(15, 20, 32, 0.9)',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                  <span
                    style={{
                      marginLeft: '12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-dim)',
                    }}
                  >
                    khabibullo@developer-terminal ~ %
                  </span>
                </div>

                {/* Tab selector */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {(['profile', 'stack', 'status'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setTerminalTab(tab)}
                      style={{
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: terminalTab === tab ? 'rgba(0,242,254,0.15)' : 'transparent',
                        border: '1px solid',
                        borderColor: terminalTab === tab ? 'rgba(0,242,254,0.3)' : 'transparent',
                        color: terminalTab === tab ? 'var(--accent-cyan)' : 'var(--text-dim)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Content */}
              <div
                style={{
                  padding: '20px 24px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  minHeight: '260px',
                }}
              >
                {terminalTab === 'profile' && (
                  <div>
                    <p style={{ color: 'var(--text-dim)' }}># developer.config.ts</p>
                    <p style={{ color: 'var(--accent-purple)' }}>
                      export const <span style={{ color: 'var(--accent-cyan)' }}>developer</span> = &#123;
                    </p>
                    <p style={{ paddingLeft: '18px', color: 'var(--text-muted)' }}>
                      name: <span style={{ color: '#00f5a0' }}>"{DEVELOPER_INFO.name}"</span>,
                    </p>
                    <p style={{ paddingLeft: '18px', color: 'var(--text-muted)' }}>
                      role: <span style={{ color: '#00f5a0' }}>"Full-Stack Architect"</span>,
                    </p>
                    <p style={{ paddingLeft: '18px', color: 'var(--text-muted)' }}>
                      experience: <span style={{ color: '#ffbd2e' }}>"6+ years"</span>,
                    </p>
                    <p style={{ paddingLeft: '18px', color: 'var(--text-muted)' }}>
                      primaryFocus: <span style={{ color: '#00f5a0' }}>["React/Next.js", "Node.js", "Netlify Edge"]</span>,
                    </p>
                    <p style={{ paddingLeft: '18px', color: 'var(--text-muted)' }}>
                      passion: <span style={{ color: '#00f5a0' }}>"Building fluid, fast, resilient web applications"</span>
                    </p>
                    <p style={{ color: 'var(--accent-purple)' }}>&#125;</p>
                    <p style={{ marginTop: '12px', color: 'var(--accent-cyan)' }}>
                      &gt; Ready for input<span className="cursor-blink" />
                    </p>
                  </div>
                )}

                {terminalTab === 'stack' && (
                  <div>
                    <p style={{ color: 'var(--text-dim)' }}>$ system-fetch --stack</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
                      <div>
                        <span style={{ color: 'var(--accent-cyan)' }}>Frontend:</span> React, TypeScript, Vite
                      </div>
                      <div>
                        <span style={{ color: 'var(--accent-purple)' }}>Backend:</span> Node.js, Express, Python
                      </div>
                      <div>
                        <span style={{ color: 'var(--accent-emerald)' }}>Cloud:</span> Netlify, Docker, AWS
                      </div>
                      <div>
                        <span style={{ color: '#ff1493' }}>Database:</span> PostgreSQL, Redis, Drizzle
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: '16px',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px dashed rgba(255,255,255,0.1)',
                      }}
                    >
                      <span style={{ color: 'var(--accent-emerald)' }}>✓ All systems operational</span> — 100/100 Lighthouse performance benchmark
                    </div>
                  </div>
                )}

                {terminalTab === 'status' && (
                  <div>
                    <p style={{ color: 'var(--text-dim)' }}>$ curl https://api.khabibullo.dev/v1/health</p>
                    <pre
                      style={{
                        background: 'rgba(0,0,0,0.4)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginTop: '8px',
                        color: 'var(--accent-emerald)',
                      }}
                    >
{`{
  "status": "200 OK",
  "availability": "Accepting projects",
  "response_time_ms": 12,
  "location": "San Francisco, CA"
}`}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '80px',
          }}
        >
          {DEVELOPER_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <span
                style={{
                  fontSize: '2.5rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  color: idx % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-emerald)',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
