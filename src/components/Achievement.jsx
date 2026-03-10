'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Achievement() {
  return (
    <section id="achievement" className="pt-16 pb-24 px-4" style={{ background: '#03030a' }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono tracking-widest uppercase mb-3"
          style={{ color: 'rgba(0,245,255,0.5)' }}>
          &gt;_ milestone
        </p>
        <h2 className="text-3xl md:text-5xl font-black font-mono"
          style={{ color: '#e2e8f0', textShadow: '0 0 30px rgba(0,245,255,0.2)' }}>
          Achiev<span style={{ color: '#00f5ff' }}>ement</span>
        </h2>
        <div className="mt-4 mx-auto h-px w-24"
          style={{ background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }}
        />
      </motion.div>

      {/* Main card */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(0,245,255,0.1)',
          }}
        >
          {/* Top accent bar */}
          <div className="h-0.5 w-full"
            style={{ background: 'linear-gradient(to right, #00f5ff, #7b2fff)' }} />

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative rounded-xl overflow-hidden"
                style={{
                  width: '280px', height: '180px',
                  border: '1px solid rgba(0,245,255,0.2)',
                  boxShadow: '0 0 40px rgba(0,245,255,0.12)',
                }}
              >
                <Image
                  src="/images/image1.png"
                  alt="GATE 2025 Computer Science Achievement"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)' }}
                />
              </div>

              {/* Badge */}
              <div className="mt-3 flex justify-center">
                <div className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest"
                  style={{
                    background: 'rgba(0,245,255,0.06)',
                    border: '1px solid rgba(0,245,255,0.25)',
                    color: '#00f5ff',
                  }}>
                  ● GATE 2025 QUALIFIED
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-5 pb-3"
                style={{ borderBottom: '1px solid rgba(0,245,255,0.08)' }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff6b6b' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffd93d' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#00ff9d' }} />
                <span className="ml-2 text-xs font-mono" style={{ color: 'rgba(226,232,240,0.3)' }}>
                  achievement.log
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold font-mono mb-4"
                style={{ color: '#e2e8f0' }}>
                Qualified GATE 2025 –{' '}
                <span style={{ color: '#00f5ff' }}>Computer Science (CS)</span>
              </h3>

              <p className="text-sm leading-relaxed mb-4 font-mono"
                style={{ color: 'rgba(226,232,240,0.5)' }}>
                Successfully qualified the Graduate Aptitude Test in Engineering (GATE) 2025
                in the Computer Science and Information Technology (CS) domain — one of India's
                most competitive national-level examinations.
              </p>

              <p className="text-sm leading-relaxed mb-6 font-mono"
                style={{ color: 'rgba(226,232,240,0.5)' }}>
                Reflects strong foundations in core CS subjects and analytical problem-solving
                abilities essential for advanced research and high-impact roles in technology
                and cybersecurity.
              </p>

              {/* Subject tags */}
              <div>
                <p className="text-xs font-mono mb-3" style={{ color: 'rgba(226,232,240,0.25)' }}>
                  &gt;_ core subjects
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'Databases', 'Discrete Mathematics'].map(subject => (
                    <span key={subject} className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{
                        background: 'rgba(123,47,255,0.08)',
                        border: '1px solid rgba(123,47,255,0.25)',
                        color: '#7b2fff',
                      }}>
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}