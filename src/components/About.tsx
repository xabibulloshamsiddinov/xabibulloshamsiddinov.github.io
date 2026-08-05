import React, { useState } from 'react'
import { User, Briefcase, Compass, ShieldCheck, Zap, Layers, Cpu, CheckCircle2 } from 'lucide-react'
import { DEVELOPER_INFO, EXPERIENCES } from '../data/portfolioData'

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'philosophy' | 'experience'>('overview')

  const principles = [
    {
      title: "Performance First",
      description: "Sub-100ms response times, zero unnecessary re-renders, and optimized asset delivery.",
      icon: Zap,
    },
    {
      title: "Scalable Architecture",
      description: "Modular codebases built with strict TypeScript boundaries and clean separation of concerns.",
      icon: Layers,
    },
    {
      title: "Edge & Serverless",
      description: "Distributed infrastructure with minimal latency and automatic elasticity.",
      icon: Cpu,
    },
    {
      title: "Reliability & Uptime",
      description: "Comprehensive automated test suites, fault-tolerant fallback mechanisms, and robust error handling.",
      icon: ShieldCheck,
    },
  ]

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-badge">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Driven by curiosity, <span className="gradient-text">backed by engineering rigor</span>.
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
            A closer look into my background, engineering philosophy, and professional journey.
          </p>
        </div>

        {/* Interactive Tabs Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: activeTab === 'overview' ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
              border: '1px solid',
              borderColor: activeTab === 'overview' ? 'var(--accent-cyan)' : 'var(--border-card)',
              color: activeTab === 'overview' ? 'var(--accent-cyan)' : 'var(--text-muted)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            <User size={18} />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('philosophy')}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: activeTab === 'philosophy' ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
              border: '1px solid',
              borderColor: activeTab === 'philosophy' ? 'var(--accent-cyan)' : 'var(--border-card)',
              color: activeTab === 'philosophy' ? 'var(--accent-cyan)' : 'var(--text-muted)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            <Compass size={18} />
            <span>Core Principles</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: activeTab === 'experience' ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
              border: '1px solid',
              borderColor: activeTab === 'experience' ? 'var(--accent-cyan)' : 'var(--border-card)',
              color: activeTab === 'experience' ? 'var(--accent-cyan)' : 'var(--text-muted)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            <Briefcase size={18} />
            <span>Experience Timeline</span>
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div
            className="glass-card"
            style={{
              padding: '40px',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '20px' }}>
                Crafting digital experiences with purpose
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
                {DEVELOPER_INFO.bio}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                I believe software engineering is an art form of trade-offs: balancing high visual velocity with robust system resilience. Whether designing real-time node editors, multi-tenant cloud backends, or ultra-responsive dashboards, my goal is to build products that users fall in love with.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-card)',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                  CURRENT ROLE
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Senior Full-Stack Engineer @ Vanguard Tech
                </div>
              </div>

              <div
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-card)',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                  LOCATION
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  San Francisco, CA (Open to Worldwide Remote)
                </div>
              </div>

              <div
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: 'rgba(0, 245, 160, 0.05)',
                  border: '1px solid rgba(0, 245, 160, 0.2)',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                  WORK AVAILABILITY
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  Available for select consulting, contracts, or full-time roles
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Principles */}
        {activeTab === 'philosophy' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {principles.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="glass-card" style={{ padding: '32px 28px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(0, 242, 254, 0.1)',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              )
            })}
          </div>
        )}

        {/* Tab 3: Experience Timeline */}
        {activeTab === 'experience' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '24px',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                      background: 'rgba(0, 242, 254, 0.08)',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      border: '1px solid rgba(0, 242, 254, 0.2)',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '4px' }}>
                    {exp.role} <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>@ {exp.company}</span>
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {exp.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        <CheckCircle2 size={12} style={{ color: 'var(--accent-emerald)' }} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .glass-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
