'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',            href: '#home' },
  { label: 'Achievement',     href: '#achievement' },
  { label: 'Education',       href: '#education' },
  { label: 'Projects',        href: '#projects' },
  { label: 'Skills',          href: '#skills' },
  { label: 'Internships',     href: '#internships' },
  { label: 'Certifications',  href: '#certifications' },
  { label: 'Contact',         href: '#contact' },
]

export default function Navbar() {
  const [active, setActive]       = useState('home')
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef   = useRef(null)
  const linkRefs = useRef({})

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const el = linkRefs.current[active]
    const nav = navRef.current
    if (el && nav) {
      const navRect = nav.getBoundingClientRect()
      const elRect  = el.getBoundingClientRect()
      setIndicatorStyle({ left: elRect.left - navRect.left, width: elRect.width })
    }
  }, [active])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(3,3,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,245,255,0.08)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home') }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black font-mono"
              style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.3)', color: '#00f5ff', boxShadow: '0 0 12px rgba(0,245,255,0.15)' }}>
              SB
            </div>
            <span className="text-sm font-mono font-bold tracking-widest hidden sm:block"
              style={{ color: 'rgba(226,232,240,0.7)' }}>
              SATVIK<span style={{ color: '#00f5ff' }}>.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1 relative">
            <motion.div
              className="absolute bottom-0 h-px rounded-full"
              animate={indicatorStyle}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              style={{ background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }}
            />
            {navLinks.map((link, i) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <motion.a
                  key={link.label}
                  ref={el => linkRefs.current[id] = el}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNav(link.href) }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="px-3 py-5 text-xs font-mono tracking-wider uppercase transition-colors duration-200"
                  style={{
                    color: isActive ? '#00f5ff' : 'rgba(226,232,240,0.45)',
                    textShadow: isActive ? '0 0 12px rgba(0,245,255,0.5)' : 'none',
                  }}
                >
                  {link.label}
                </motion.a>
              )
            })}
          </nav>

          {/* Resume CTA */}
          <motion.a
            href="/resume.pdf" target="_blank"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded transition-all duration-200"
            style={{ color: '#00f5ff', border: '1px solid rgba(0,245,255,0.35)', background: 'rgba(0,245,255,0.05)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 16px rgba(0,245,255,0.25)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/>
            </svg>
            Resume
          </motion.a>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5" aria-label="Toggle menu">
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
              className="block w-6 h-px" style={{ background: menuOpen ? '#00f5ff' : 'rgba(226,232,240,0.6)' }} />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }}
              className="block w-4 h-px self-start" style={{ background: 'rgba(226,232,240,0.6)' }} />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
              className="block w-6 h-px" style={{ background: menuOpen ? '#00f5ff' : 'rgba(226,232,240,0.6)' }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
            style={{ background: 'rgba(3,3,10,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,245,255,0.1)' }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const id = link.href.replace('#', '')
                const isActive = active === id
                return (
                  <motion.a key={link.label} href={link.href}
                    onClick={e => { e.preventDefault(); handleNav(link.href) }}
                    initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-mono tracking-wider uppercase transition-all"
                    style={{
                      color: isActive ? '#00f5ff' : 'rgba(226,232,240,0.55)',
                      background: isActive ? 'rgba(0,245,255,0.06)' : 'transparent',
                      borderLeft: isActive ? '2px solid #00f5ff' : '2px solid transparent',
                    }}
                  >
                    {isActive && <span className="w-1 h-1 rounded-full" style={{ background: '#00f5ff', boxShadow: '0 0 6px #00f5ff' }} />}
                    {link.label}
                  </motion.a>
                )
              })}
              <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(0,245,255,0.08)' }}>
                <a href="/resume.pdf" target="_blank"
                  className="flex items-center justify-center gap-2 text-sm font-mono px-4 py-2.5 rounded w-full"
                  style={{ color: '#00f5ff', border: '1px solid rgba(0,245,255,0.3)', background: 'rgba(0,245,255,0.05)' }}>
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}