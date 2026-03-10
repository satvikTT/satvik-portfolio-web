'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    label: 'GitHub',
    handle: '@satvikTT',
    href: 'https://github.com/satvikTT',
    color: '#e2e8f0',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.82 5.63-5.5 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.2.68.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'satvik-bhagat2705',
    href: 'https://linkedin.com/in/satvik-bhagat2705',
    color: '#0a66c2',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'satvikbhagat2705@gmail.com',
    href: 'mailto:satvikbhagat2705@gmail.com',
    color: '#00f5ff',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

const availability = [
  'Internships',
  'Research Collaborations',
  'Cybersecurity Projects',
  'Freelance Opportunities',
]

const fieldStyle = {
  background: 'rgba(0,245,255,0.02)',
  border: '1px solid rgba(0,245,255,0.08)',
  borderRadius: '0.5rem',
  padding: '1rem',
  marginBottom: '0',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [focused, setFocused] = useState(null)

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
  }

  const getFocusStyle = (field) => ({
    ...fieldStyle,
    borderColor: focused === field ? 'rgba(0,245,255,0.4)' : 'rgba(0,245,255,0.08)',
    boxShadow: focused === field ? '0 0 12px rgba(0,245,255,0.06)' : 'none',
  })

  return (
    <section id="contact" ref={ref} className="py-24 px-4" style={{ background: '#03030a' }}>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="h-px w-full"
          style={{ background: 'linear-gradient(to right, transparent, rgba(0,245,255,0.2), rgba(123,47,255,0.2), transparent)' }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono tracking-widest uppercase mb-3"
          style={{ color: 'rgba(0,245,255,0.5)' }}>
          &gt;_ reach out
        </p>
        <h2 className="text-3xl md:text-5xl font-black font-mono"
          style={{ color: '#e2e8f0', textShadow: '0 0 30px rgba(0,245,255,0.2)' }}>
          Get In <span style={{ color: '#00f5ff' }}>Touch</span>
        </h2>
        <div className="mt-4 mx-auto h-px w-24"
          style={{ background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }}
        />
        <p className="mt-5 text-sm font-mono max-w-md mx-auto"
          style={{ color: 'rgba(226,232,240,0.45)' }}>
          Open to collaborations, opportunities, and anything cybersecurity. Drop a message — I respond fast.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT — Secure Transmission form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative rounded-xl p-6"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0,245,255,0.1)' }}
        >
          {/* Classified header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)' }}>
                <svg width="14" height="14" fill="none" stroke="#00f5ff" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: '#00f5ff' }}>
                  Secure Transmission
                </p>
                <p className="text-xs font-mono" style={{ color: 'rgba(226,232,240,0.3)' }}>
                  End-to-end encrypted
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded"
              style={{ color: '#00ff9d', background: 'rgba(0,255,157,0.08)', border: '1px solid rgba(0,255,157,0.2)' }}>
              ● LIVE
            </span>
          </div>

          {/* Dashed separator */}
          <div className="mb-6 flex items-center gap-2">
            <div className="flex-1" style={{ borderTop: '1px dashed rgba(0,245,255,0.12)' }} />
            <span className="text-xs font-mono" style={{ color: 'rgba(0,245,255,0.3)' }}>INITIATE CONTACT</span>
            <div className="flex-1" style={{ borderTop: '1px dashed rgba(0,245,255,0.12)' }} />
          </div>

          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 gap-4"
            >
              <div className="text-4xl">✅</div>
              <p className="text-sm font-mono text-center" style={{ color: '#00ff9d' }}>
                Transmission received successfully!
              </p>
              <p className="text-xs font-mono text-center" style={{ color: 'rgba(226,232,240,0.4)' }}>
                I'll get back to you soon.
              </p>
              <button
                onClick={() => { setStatus(null); setForm({ name: '', email: '', message: '' }) }}
                className="mt-2 text-xs font-mono px-4 py-2 rounded"
                style={{ color: '#00f5ff', border: '1px solid rgba(0,245,255,0.3)', background: 'rgba(0,245,255,0.05)' }}
              >
                New transmission
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-4">

              {/* Sender ID */}
              <div style={getFocusStyle('name')}>
                <p className="text-xs font-mono uppercase tracking-widest mb-2"
                  style={{ color: 'rgba(0,245,255,0.45)' }}>Sender ID</p>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your name"
                  className="w-full bg-transparent text-sm font-mono outline-none"
                  style={{ color: '#e2e8f0' }}
                />
              </div>

              {/* Return Channel */}
              <div style={getFocusStyle('email')}>
                <p className="text-xs font-mono uppercase tracking-widest mb-2"
                  style={{ color: 'rgba(0,245,255,0.45)' }}>Return Channel</p>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-sm font-mono outline-none"
                  style={{ color: '#e2e8f0' }}
                />
              </div>

              {/* Message Payload */}
              <div style={getFocusStyle('message')}>
                <p className="text-xs font-mono uppercase tracking-widest mb-2"
                  style={{ color: 'rgba(0,245,255,0.45)' }}>Message Payload</p>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="What's on your mind..."
                  className="w-full bg-transparent text-sm font-mono outline-none resize-none"
                  style={{ color: '#e2e8f0' }}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full py-3 rounded-lg text-sm font-mono tracking-widest uppercase flex items-center justify-center gap-2 transition-all"
                style={{
                  background: 'rgba(0,245,255,0.08)',
                  border: '1px solid rgba(0,245,255,0.35)',
                  color: '#00f5ff',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(0,245,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                {status === 'sending' ? 'Transmitting...' : 'Transmit Message'}
              </button>
            </div>
          )}
        </motion.div>

        {/* RIGHT — socials + availability */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Social cards */}
          <div className="flex flex-col gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl no-underline transition-all"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(0,245,255,0.08)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,245,255,0.25)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,255,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,245,255,0.08)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color }}>
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono uppercase tracking-widest mb-0.5"
                    style={{ color: 'rgba(226,232,240,0.4)' }}>{s.label}</p>
                  <p className="text-sm font-mono truncate" style={{ color: s.color }}>{s.handle}</p>
                </div>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24" style={{ color: 'rgba(226,232,240,0.2)', flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="relative rounded-xl p-5"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0,245,255,0.1)' }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: 'rgba(0,245,255,0.5)' }}>
              &gt;_ open to
            </p>
            <div className="flex flex-wrap gap-2">
              {availability.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.65 + i * 0.07 }}
                  className="text-xs font-mono px-3 py-1.5 rounded-full flex items-center gap-1.5"
                  style={{
                    color: '#00ff9d',
                    background: 'rgba(0,255,157,0.08)',
                    border: '1px solid rgba(0,255,157,0.25)',
                  }}
                >
                  <span className="w-1 h-1 rounded-full animate-pulse"
                    style={{ background: '#00ff9d', boxShadow: '0 0 6px #00ff9d' }} />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}