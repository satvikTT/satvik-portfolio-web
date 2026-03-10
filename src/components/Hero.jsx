'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// ── Typing Hook ────────────────────────────────────────────────
function useTypingEffect(phrases, typingSpeed = 80, deletingSpeed = 40, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const current = phrases[index % phrases.length]
    let timeout

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pause)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed)
      } else {
        setIndex(i => i + 1)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, phase, index, phrases, typingSpeed, deletingSpeed, pause])

  return displayed
}

// ── Particle Canvas ────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    const NUM = Math.floor((W * H) / 14000)
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }))

    const CONNECT_DIST = 120
    const COLORS = ['#00f5ff', '#7b2fff', '#00ff9d']

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Dots
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,245,255,0.7)'
        ctx.fill()
      })

      // Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.35
            const color = COLORS[Math.floor((i + j) % COLORS.length)]
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = color.replace(')', `,${alpha})`).replace('rgb', 'rgba').replace('#', 'rgba(').replace('rgba(00f5ff', 'rgba(0,245,255').replace('rgba(7b2fff', 'rgba(123,47,255').replace('rgba(00ff9d', 'rgba(0,255,157')
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    // simpler stroke color approach
    function drawClean() {
      ctx.clearRect(0, 0, W, H)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,245,255,0.75)'
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.3
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,245,255,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(drawClean)
    }

    drawClean()

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.45 }}
    />
  )
}

// ── Main Hero ──────────────────────────────────────────────────
export default function Hero() {
  const roles = [
    'Cyber Security Enthusiast',
    'Penetration Tester',
    'Digital Forensics Analyst',
    'GATE 2025 Qualified',
  ]
  const typedText = useTypingEffect(roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03030a]"
    >
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,245,255,0.06) 0%, rgba(123,47,255,0.04) 50%, transparent 100%)',
        }}
      />

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="photo-ring absolute inset-0 rounded-full" />
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 40px rgba(0,245,255,0.25), 0 0 80px rgba(123,47,255,0.15)' }}
            />
            {/* Photo */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2"
              style={{ borderColor: 'rgba(0,245,255,0.4)' }}>
              <Image
                src="/images/profile.JPG"
                alt="Satvik Bhagat"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs tracking-widest uppercase font-mono"
          style={{
            borderColor: 'rgba(0,245,255,0.3)',
            color: '#00f5ff',
            background: 'rgba(0,245,255,0.05)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#00ff9d' }}
          />
          Available for Opportunities
        </motion.div>

        {/* Glitch Name — Orbitron font */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-4 inline-block"
        >
          {/* Google Font import via style */}
          <style>{`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');`}</style>

          {/* Neon glow blob behind name */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: '-30px -40px',
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,245,255,0.13) 0%, rgba(123,47,255,0.10) 50%, transparent 100%)',
              filter: 'blur(18px)',
              borderRadius: '50%',
              zIndex: 0,
            }}
          />
          {/* Second tighter pulse glow */}
          <div
            className="absolute pointer-events-none name-pulse"
            style={{
              inset: '-10px -20px',
              background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,245,255,0.07) 0%, transparent 100%)',
              filter: 'blur(10px)',
              borderRadius: '50%',
              zIndex: 0,
            }}
          />

          <h1
            className="glitch relative"
            data-text="SATVIK BHAGAT"
            style={{
              fontFamily: '"Orbitron", sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 8vw, 7rem)',
              color: '#e2e8f0',
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              zIndex: 1,
              textShadow: '0 0 30px rgba(0,245,255,0.35), 0 0 60px rgba(0,245,255,0.15), 0 0 100px rgba(123,47,255,0.2)',
            }}
          >
            SATVIK BHAGAT
          </h1>
        </motion.div>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex items-center justify-center gap-2 mb-6 h-8"
        >
          <span
            className="text-lg sm:text-xl md:text-2xl font-mono font-medium"
            style={{ color: '#00f5ff' }}
          >
            &gt;_ {typedText}
          </span>
          <span
            className="w-0.5 h-6 animate-pulse"
            style={{ background: '#00f5ff' }}
          />
        </motion.div>

        {/* Punchy bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-mono"
          style={{ color: 'rgba(226,232,240,0.6)' }}
        >
          Breaking systems to build them stronger.
          <br />
          CS undergrad · Security researcher · GATE '25 qualifier.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="cyber-btn-primary px-6 py-3 text-sm font-mono tracking-widest uppercase rounded"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="cyber-btn-outline px-6 py-3 text-sm font-mono tracking-widest uppercase rounded"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="cyber-btn-ghost px-6 py-3 text-sm font-mono tracking-widest uppercase rounded"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'rgba(0,245,255,0.4)' }}
          >
            scroll
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: 'linear-gradient(to bottom, rgba(0,245,255,0.5), transparent)' }}
          />
        </motion.div>
      </div>

      {/* Glitch + Photo Ring CSS */}
      <style jsx>{`
        .photo-ring {
          border-radius: 50%;
          border: 1.5px solid transparent;
          background: linear-gradient(#03030a, #03030a) padding-box,
            conic-gradient(from 0deg, #00f5ff, #7b2fff, #00ff9d, #00f5ff) border-box;
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .name-pulse {
          animation: namePulse 3s ease-in-out infinite;
        }
        @keyframes namePulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch::before {
          color: #00f5ff;
          animation: glitch1 3.5s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
          transform: translate(-2px, 0);
          opacity: 0.7;
        }
        .glitch::after {
          color: #7b2fff;
          animation: glitch2 3.5s infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
          transform: translate(2px, 0);
          opacity: 0.7;
        }
        @keyframes glitch1 {
          0%, 90%, 100% { transform: translate(0); opacity: 0; }
          91% { transform: translate(-3px, 1px); opacity: 0.7; }
          93% { transform: translate(3px, -1px); opacity: 0.7; }
          95% { transform: translate(-2px, 0); opacity: 0.7; }
          97% { transform: translate(0); opacity: 0; }
        }
        @keyframes glitch2 {
          0%, 90%, 100% { transform: translate(0); opacity: 0; }
          92% { transform: translate(3px, 1px); opacity: 0.7; }
          94% { transform: translate(-3px, -1px); opacity: 0.7; }
          96% { transform: translate(2px, 0); opacity: 0.7; }
          98% { transform: translate(0); opacity: 0; }
        }

        .cyber-btn-primary {
          background: rgba(0,245,255,0.1);
          border: 1px solid rgba(0,245,255,0.5);
          color: #00f5ff;
          transition: all 0.2s;
        }
        .cyber-btn-primary:hover {
          background: rgba(0,245,255,0.2);
          box-shadow: 0 0 20px rgba(0,245,255,0.3);
        }
        .cyber-btn-outline {
          background: transparent;
          border: 1px solid rgba(123,47,255,0.5);
          color: #7b2fff;
          transition: all 0.2s;
        }
        .cyber-btn-outline:hover {
          background: rgba(123,47,255,0.1);
          box-shadow: 0 0 20px rgba(123,47,255,0.3);
        }
        .cyber-btn-ghost {
          background: transparent;
          border: 1px solid rgba(226,232,240,0.15);
          color: rgba(226,232,240,0.6);
          transition: all 0.2s;
        }
        .cyber-btn-ghost:hover {
          border-color: rgba(226,232,240,0.4);
          color: #e2e8f0;
        }
      `}</style>
    </section>
  )
}