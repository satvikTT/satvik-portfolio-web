'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const internships = [
  {
    id: 1,
    role: 'Cyber Security & Digital Forensics UK Ltd (CSDF UK)',
    company: 'Internship Mentor — Cybersecurity & Innovation',
    duration: 'Oct 2025 — Jan 2026',
    days: '90 Days',
    badge: 'REMOTE',
    badgeColor: '#7b2fff',
    description:
      'Appointed as Internship Mentor with responsibilities spanning cybersecurity research, online investigation, and innovation-driven security work. Applied core cybersecurity concepts alongside professional soft skills in a fully remote environment.',
    proof: '/internships/csdf.pdf',
  },
  {
    id: 2,
    role: 'Redynox',
    company: 'Cybersecurity Intern',
    duration: 'Aug 2025 — Oct 2025',
    days: '3 Months',
    badge: 'REMOTE',
    badgeColor: '#00ff9d',
    description:
      'Focused on safeguarding digital infrastructure, promoting cyber awareness, and contributing to practical cybersecurity initiatives. Work aligned with industry standards and real-world operational security practices.',
    proof: '/internships/redynox.pdf',
  },
  {
    id: 3,
    role: 'Elevate Labs',
    company: 'Cyber Security Intern',
    duration: 'May 2025 — Jun 2025',
    days: null,
    badge: 'REMOTE',
    badgeColor: '#fd0c71',
    description:
      'Completed real-world security tasks and projects covering threat analysis, vulnerability assessment, and security operations. Demonstrated strong analytical thinking and professionalism throughout the program.',
    proof: '/internships/elevate-labs.pdf',
  },
  
]

function TimelineItem({ item, index, isLeft }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className={`relative flex items-start gap-0 mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

      {/* Card — takes up ~45% width on desktop */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.1 }}
        className="relative w-full md:w-[45%] timeline-card rounded-xl p-5 group"
      >
        {/* Corner accents */}
        <span className="corner tl" style={{ borderColor: item.badgeColor }} />
        <span className="corner tr" style={{ borderColor: item.badgeColor }} />
        <span className="corner bl" style={{ borderColor: item.badgeColor }} />
        <span className="corner br" style={{ borderColor: item.badgeColor }} />

        {/* Badge */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span
            className="text-xs font-mono font-bold px-3 py-1 rounded-full tracking-widest"
            style={{
              color: item.badgeColor,
              background: `${item.badgeColor}18`,
              border: `1px solid ${item.badgeColor}40`,
              textShadow: `0 0 10px ${item.badgeColor}80`,
            }}
          >
            [ {item.badge} ]
          </span>
          <span className="text-xs font-mono" style={{ color: 'rgba(0,245,255,0.45)' }}>
            {item.duration}{item.days ? ` · ${item.days}` : ''}
          </span>
        </div>

        {/* Role */}
        <h3 className="text-base font-bold font-mono mb-1" style={{ color: '#e2e8f0' }}>
          {item.role}
        </h3>

        {/* Company */}
        <p className="text-sm font-mono mb-3" style={{ color: '#00f5ff', opacity: 0.75 }}>
          {item.company}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(226,232,240,0.55)' }}>
          {item.description}
        </p>

        {/* View proof */}
        <a
          href={item.proof}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded transition-all"
          style={{
            color: '#00f5ff',
            border: '1px solid rgba(0,245,255,0.25)',
            background: 'rgba(0,245,255,0.05)',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 14px rgba(0,245,255,0.2)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
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
          style={{ background: `radial-gradient(ellipse at center, ${item.badgeColor}07, transparent 70%)` }}
        />
      </motion.div>

      {/* Center timeline connector — hidden on mobile */}
      <div className="hidden md:flex flex-col items-center w-[10%] pt-5">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="relative"
        >
          {/* Outer ring */}
          <div
            className="w-4 h-4 rounded-full"
            style={{
              background: item.badgeColor,
              boxShadow: `0 0 16px ${item.badgeColor}, 0 0 32px ${item.badgeColor}60`,
            }}
          />
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-[45%]" />
    </div>
  )
}

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-4" style={{ background: '#03030a' }}>

      {/* Divider */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="h-px w-full"
          style={{ background: 'linear-gradient(to right, transparent, rgba(123,47,255,0.3), rgba(0,245,255,0.3), transparent)' }}
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
          &gt;_ field experience
        </p>
        <h2 className="text-3xl md:text-5xl font-black font-mono"
          style={{ color: '#e2e8f0', textShadow: '0 0 30px rgba(0,245,255,0.2)' }}>
          Intern<span style={{ color: '#00f5ff' }}>ships</span>
        </h2>
        <div className="mt-4 mx-auto h-px w-24"
          style={{ background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }}
        />
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">

        {/* Vertical center line — desktop only */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,245,255,0.2) 10%, rgba(0,245,255,0.2) 90%, transparent)' }}
        />

        {internships.map((item, i) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={i}
            isLeft={i % 2 === 0}
          />
        ))}
      </div>

      <style jsx>{`
        .timeline-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(0,245,255,0.1);
          transition: border-color 0.3s;
        }
        .timeline-card:hover {
          border-color: rgba(0,245,255,0.2);
        }
        .corner {
          position: absolute;
          width: 8px;
          height: 8px;
          border-style: solid;
          opacity: 0.6;
        }
        .tl { top: 5px; left: 5px; border-width: 1px 0 0 1px; }
        .tr { top: 5px; right: 5px; border-width: 1px 1px 0 0; }
        .bl { bottom: 5px; left: 5px; border-width: 0 0 1px 1px; }
        .br { bottom: 5px; right: 5px; border-width: 0 1px 1px 0; }
      `}</style>
    </section>
  )
}