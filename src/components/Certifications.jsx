'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const certifications = [
  {
    id: 1,
    title: 'Cyber Security Training',
    issuer: 'Acmegrade | Mood Indigo, IIT Bombay',
    color: '#00f5ff',
    icon: '🎓',
    tag: 'Security Fundamentals',
    highlights: [
      'Threat analysis & attack vectors',
      'Security fundamentals & defense strategies',
      'Real-world scenario-based learning',
      'Conducted at IIT Bombay\'s Mood Indigo',
    ],
    proof: '/certifications/acmegrade.jpg',
  },
  {
    id: 2,
    title: 'OSINT & Open-Source Intelligence',
    issuer: 'Cyber Secured India (CSI) & MKITOS',
    color: '#7b2fff',
    icon: '🔎',
    tag: 'CTRL.ALT.ACT — 4 Week Program',
    highlights: [
      'Ethical intelligence gathering techniques',
      'OSINT tools & frameworks for investigations',
      'Real-world open-source investigation cases',
      'Social good & digital awareness focus',
    ],
    proof: '/certifications/csi-osint.pdf',
  },
  {
    id: 3,
    title: 'Cyber Security Management',
    issuer: 'ANZ | Forage',
    color: '#00ff9d',
    icon: '🏦',
    tag: 'Industry Simulation',
    highlights: [
      'Social engineering investigation workflows',
      'Digital forensics analysis procedures',
      'Security decision-making under pressure',
      'Modelled on ANZ\'s actual security operations',
    ],
    proof: '/certifications/forage-anz.pdf',
  },
  {
    id: 4,
    title: 'Cyber Security Consulting',
    issuer: 'Deloitte | Forage',
    color: '#ff6b6b',
    icon: '🔷',
    tag: 'Industry Simulation',
    highlights: [
      'Enterprise-level risk analysis',
      'Security framework implementation',
      'Cyber problem-solving at consulting scale',
      'Modelled on Deloitte\'s consulting workflows',
    ],
    proof: '/certifications/forage-deloitte.pdf',
  },
  {
    id: 5,
    title: 'Cybersecurity Awareness & Phishing',
    issuer: 'Mastercard | Forage',
    color: '#febc2e',
    icon: '💳',
    tag: 'Industry Simulation',
    highlights: [
      'Phishing simulation design & execution',
      'Campaign result analysis & reporting',
      'Organizational response to cyber threats',
      'Modelled on Mastercard\'s security team',
    ],
    proof: '/certifications/forage-mastercard.pdf',
  },
]

function CertCard({ cert, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="cert-card relative rounded-xl p-6 group flex flex-col"
      style={{ borderColor: `${cert.color}22` }}
    >
      {/* Corner accents */}
      <span className="corner tl" style={{ borderColor: cert.color }} />
      <span className="corner tr" style={{ borderColor: cert.color }} />
      <span className="corner bl" style={{ borderColor: cert.color }} />
      <span className="corner br" style={{ borderColor: cert.color }} />

      {/* Top row — icon + tag */}
      <div className="flex items-start justify-between mb-5 gap-3">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
        >
          {cert.icon}
        </div>
        <span
          className="text-xs font-mono px-2.5 py-1 rounded-full mt-0.5"
          style={{
            color: cert.color,
            background: `${cert.color}12`,
            border: `1px solid ${cert.color}30`,
          }}
        >
          {cert.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold font-mono mb-1 leading-snug" style={{ color: '#e2e8f0' }}>
        {cert.title}
      </h3>

      {/* Issuer */}
      <p className="text-xs font-mono mb-4" style={{ color: cert.color, opacity: 0.75 }}>
        {cert.issuer}
      </p>

      {/* Divider */}
      <div className="h-px mb-4" style={{ background: `${cert.color}18` }} />

      {/* Highlights */}
      <ul className="flex flex-col gap-2 mb-6 flex-1">
        {cert.highlights.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.08 + i * 0.07 }}
            className="flex items-start gap-2 text-sm"
            style={{ color: 'rgba(226,232,240,0.6)' }}
          >
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: cert.color, boxShadow: `0 0 6px ${cert.color}` }} />
            {point}
          </motion.li>
        ))}
      </ul>

      {/* View Certificate */}
      <a
        href={cert.proof}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded w-fit transition-all"
        style={{
          color: cert.color,
          border: `1px solid ${cert.color}35`,
          background: `${cert.color}0d`,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = `0 0 16px ${cert.color}40`
          e.currentTarget.style.background = `${cert.color}18`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.background = `${cert.color}0d`
        }}
      >
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
        </svg>
        View Certificate
      </a>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${cert.color}07, transparent 70%)` }}
      />

      <style jsx>{`
        .cert-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .cert-card:hover {
          border-color: rgba(0,245,255,0.2) !important;
          box-shadow: 0 0 30px rgba(0,245,255,0.04);
        }
        .corner {
          position: absolute;
          width: 8px; height: 8px;
          border-style: solid;
          opacity: 0.55;
        }
        .tl { top: 5px; left: 5px; border-width: 1px 0 0 1px; }
        .tr { top: 5px; right: 5px; border-width: 1px 1px 0 0; }
        .bl { bottom: 5px; left: 5px; border-width: 0 0 1px 1px; }
        .br { bottom: 5px; right: 5px; border-width: 0 1px 1px 0; }
      `}</style>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4" style={{ background: '#03030a' }}>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="h-px w-full"
          style={{ background: 'linear-gradient(to right, transparent, rgba(0,245,255,0.2), rgba(123,47,255,0.2), transparent)' }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono tracking-widest uppercase mb-3"
          style={{ color: 'rgba(0,245,255,0.5)' }}>
          &gt;_ credentials
        </p>
        <h2 className="text-3xl md:text-5xl font-black font-mono"
          style={{ color: '#e2e8f0', textShadow: '0 0 30px rgba(0,245,255,0.2)' }}>
          Certifi<span style={{ color: '#00f5ff' }}>cations</span>
        </h2>
        <div className="mt-4 mx-auto h-px w-24"
          style={{ background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }}
        />
      </motion.div>

      {/* Cards — 3 col lg, 2 col md, 1 col sm */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>

    </section>
  )
}