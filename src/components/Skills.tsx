import React from 'react'
import { Cpu, Layout, Server, Cloud, Code, Atom, Palette, Layers, Zap, Terminal, Database, Globe, HardDrive, Box, CloudRain, GitBranch } from 'lucide-react'
import { SKILL_CATEGORIES } from '../data/portfolioData'

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Server,
  Cloud,
  Atom,
  Code,
  Palette,
  Layers,
  Zap,
  Cpu,
  Terminal,
  Database,
  Globe,
  HardDrive,
  Box,
  CloudRain,
  GitBranch,
}

export const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Proficiency</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Skills & <span className="gradient-text">Tech Ecosystem</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
            A curated list of languages, frameworks, and cloud tooling I work with daily.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const CatIcon = ICON_MAP[category.iconName] || Cpu
            return (
              <div
                key={catIdx}
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '28px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(0,242,254,0.15) 0%, rgba(127,0,255,0.15) 100%)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    <CatIcon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{category.title}</h3>
                </div>

                {/* Skills List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = ICON_MAP[skill.icon] || Code
                    return (
                      <div key={sIdx}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '8px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <SkillIcon size={16} style={{ color: 'var(--accent-cyan)' }} />
                            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{skill.name}</span>
                          </div>
                          {skill.highlight && (
                            <span
                              style={{
                                fontSize: '0.75rem',
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--accent-emerald)',
                                background: 'rgba(0, 245, 160, 0.08)',
                                padding: '2px 8px',
                                borderRadius: '4px',
                              }}
                            >
                              {skill.highlight}
                            </span>
                          )}
                        </div>

                        {/* Progress Bar */}
                        <div
                          style={{
                            width: '100%',
                            height: '6px',
                            borderRadius: '999px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            overflow: 'hidden',
                            position: 'relative',
                          }}
                        >
                          <div
                            style={{
                              width: `${skill.level}%`,
                              height: '100%',
                              borderRadius: '999px',
                              background: 'linear-gradient(90deg, var(--accent-cyan) 0%, var(--accent-purple) 100%)',
                              boxShadow: '0 0 10px rgba(0, 242, 254, 0.5)',
                              transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
