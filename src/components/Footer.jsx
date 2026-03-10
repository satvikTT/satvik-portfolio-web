'use client'

import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'Achievement',    href: '#achievement' },
  { label: 'Education',      href: '#education' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Internships',    href: '#internships' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#03030a' }}>

      {/* Top gradient divider */}
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,245,255,0.3), rgba(123,47,255,0.3), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Main grid: Brand (left) + Nav (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black font-mono"
                style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.25)', color: '#00f5ff', boxShadow: '0 0 16px rgba(0,245,255,0.1)' }}>
                SB
              </div>
              <span className="text-base font-mono font-bold tracking-widest" style={{ color: '#e2e8f0' }}>
                SATVIK<span style={{ color: '#00f5ff' }}>.</span>
              </span>
            </div>

            <p className="text-sm font-mono leading-relaxed mb-5"
              style={{ color: 'rgba(226,232,240,0.4)', maxWidth: '30ch' }}>
              Cyber Security Enthusiast &amp; CS undergrad building tools that break and protect digital infrastructure.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(0,255,157,0.06)', border: '1px solid rgba(0,255,157,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#00ff9d', boxShadow: '0 0 6px #00ff9d' }} />
              <span className="text-xs font-mono" style={{ color: '#00ff9d' }}>Available for Opportunities</span>
            </div>

            <div className="p-3 rounded-lg w-fit"
              style={{ background: 'rgba(123,47,255,0.06)', border: '1px solid rgba(123,47,255,0.2)' }}>
              <p className="text-xs font-mono" style={{ color: 'rgba(226,232,240,0.4)' }}>🎓 B.Tech–M.Tech (CSE)</p>
              <p className="text-xs font-mono mt-0.5" style={{ color: '#7b2fff' }}>National Forensic Sciences University, Delhi</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs font-mono tracking-widest uppercase mb-5"
              style={{ color: 'rgba(0,245,255,0.5)' }}>
              &gt;_ navigation
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-mono transition-colors duration-200"
                  style={{ color: 'rgba(226,232,240,0.4)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onMouseEnter={e => e.currentTarget.style.color = '#00f5ff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,232,240,0.4)'}
                >
                  <span style={{ color: '#00f5ff', opacity: 0.4, marginRight: '0.4rem' }}>›</span>
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(0,245,255,0.06)' }}>

          <p className="text-xs font-mono" style={{ color: 'rgba(226,232,240,0.2)' }}>
            © 2026 Satvik Bhagat. All rights reserved.
          </p>

          <p className="text-xs font-mono flex items-center gap-1.5" style={{ color: 'rgba(226,232,240,0.2)' }}>
            Built with <span style={{ color: '#00f5ff' }}>Next.js</span> &amp; <span style={{ color: '#7b2fff' }}>Passion for Cyber Security</span>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded"
            style={{ color: 'rgba(0,245,255,0.5)', border: '1px solid rgba(0,245,255,0.12)', background: 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#00f5ff'; e.currentTarget.style.borderColor = 'rgba(0,245,255,0.35)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,245,255,0.12)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(0,245,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(0,245,255,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}