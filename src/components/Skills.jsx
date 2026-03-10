'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Cyber Security',
    color: '#00f5ff',
    glow: 'rgba(0,245,255,0.3)',
    icon: '🛡️',
    skills: ['Penetration Testing', 'Network Security', 'Threat Analysis', 'Vulnerability Assessment', 'Incident Response', 'Security Auditing'],
  },
  {
    category: 'Digital Forensics',
    color: '#7b2fff',
    glow: 'rgba(123,47,255,0.3)',
    icon: '🔍',
    skills: ['Evidence Collection', 'Disk Imaging', 'Memory Analysis', 'Network Forensics', 'Malware Analysis', 'Chain of Custody'],
  },
  {
    category: 'Programming',
    color: '#00ff9d',
    glow: 'rgba(0,255,157,0.3)',
    icon: '💻',
    skills: ['Python', 'JavaScript', 'Bash Scripting', 'SQL', 'C/C++', 'PowerShell'],
  },
  {
    category: 'Tools & Technologies',
    color: '#ff6b6b',
    glow: 'rgba(255,107,107,0.3)',
    icon: '⚙️',
    skills: ['Kali Linux', 'Wireshark', 'Metasploit', 'Burp Suite', 'Nmap', 'Autopsy', 'Volatility', 'SIEM Tools'],
  },
]

function SkillCard({ group, cardIndex }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
      className="skill-card relative rounded-xl p-6 group"
      style={{ borderColor: `${group.color}22` }}
    >
      {/* Corner accents */}
      <span className="corner tl" style={{ borderColor: group.color }} />
      <span className="corner tr" style={{ borderColor: group.color }} />
      <span className="corner bl" style={{ borderColor: group.color }} />
      <span className="corner br" style={{ borderColor: group.color }} />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
          style={{ background: `${group.color}15`, border: `1px solid ${group.color}33` }}>
          {group.icon}
        </div>
        <h3 className="font-mono font-bold tracking-wider text-sm uppercase"
          style={{ color: group.color, textShadow: `0 0 12px ${group.glow}` }}>
          {group.category}
        </h3>
      </div>

      {/* Skill Tags — clean pills, no level indicators */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.25, delay: cardIndex * 0.08 + i * 0.05 }}
            className="skill-tag text-xs font-mono px-3 py-1.5 rounded-full cursor-default select-none"
            style={{
              color: group.color,
              background: `${group.color}10`,
              border: `1px solid ${group.color}30`,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${group.color}08, transparent 70%)` }}
      />
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4" style={{ background: '#03030a' }}>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono tracking-widest uppercase mb-3"
          style={{ color: 'rgba(0,245,255,0.5)' }}>
          &gt;_ what i work with
        </p>
        <h2 className="text-3xl md:text-5xl font-black font-mono"
          style={{ color: '#e2e8f0', textShadow: '0 0 30px rgba(0,245,255,0.2)' }}>
          Skills <span style={{ color: '#00f5ff' }}>&</span> Expertise
        </h2>
        <div className="mt-4 mx-auto h-px w-24"
          style={{ background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }}
        />
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <SkillCard key={group.category} group={group} cardIndex={i} />
        ))}
      </div>

      <style jsx>{`
        .skill-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid;
          transition: border-color 0.3s;
        }
        .skill-card:hover {
          border-color: rgba(0,245,255,0.2) !important;
        }
        .skill-tag {
          transition: all 0.2s ease;
        }
        .skill-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 14px currentColor;
          filter: brightness(1.3);
        }
        .corner {
          position: absolute;
          width: 10px;
          height: 10px;
          border-style: solid;
          opacity: 0.5;
        }
        .tl { top: 6px; left: 6px; border-width: 1px 0 0 1px; }
        .tr { top: 6px; right: 6px; border-width: 1px 1px 0 0; }
        .bl { bottom: 6px; left: 6px; border-width: 0 0 1px 1px; }
        .br { bottom: 6px; right: 6px; border-width: 0 1px 1px 0; }
      `}</style>
    </section>
  )
}