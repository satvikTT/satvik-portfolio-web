'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const education = [
  {
    id: 1,
    tag: 'Current',
    tagColor: '#00f5ff',
    title: 'Integrated B.Tech – M.Tech (CSE)',
    institution: 'National Forensic Sciences University, Delhi',
    duration: '2022 – 2027',
    period: '8th Semester',
    logo: '/images/logo.png',
    highlights: ['Cyber Security Specialization', 'Digital Forensics', 'Secure Systems Design', 'Research-Oriented Program'],
    details: 'Five-year integrated program focused on core Computer Science, advanced Cyber Security, Digital Forensics, secure systems, and research aligned with national security and forensic applications.',
    accentColor: '#00f5ff',
    glowColor: 'rgba(0,245,255,0.06)',
  },
  {
    id: 2,
    tag: 'Class XII',
    tagColor: '#7b2fff',
    title: 'Senior Secondary – Non-Medical (CS)',
    institution: 'Kulachi Hansraj Model School, CBSE',
    duration: '2021 – 2022',
    period: 'CBSE Board',
    logo: '/images/khms.png',
    highlights: ['Physics & Chemistry', 'Mathematics', 'Computer Science', 'Analytical Thinking'],
    details: 'Completed CBSE Class XII with Non-Medical stream, developing strong analytical thinking, problem-solving ability, and programming foundations through Computer Science.',
    accentColor: '#7b2fff',
    glowColor: 'rgba(123,47,255,0.06)',
  },
  {
    id: 3,
    tag: 'Class X',
    tagColor: '#00ff9d',
    title: 'Secondary Education',
    institution: 'Kulachi Hansraj Model School, CBSE',
    duration: '2019 – 2020',
    period: 'CBSE Board',
    logo: '/images/khms.png',
    highlights: ['CBSE Curriculum', 'Logical Reasoning', 'Conceptual Clarity', 'Academic Discipline'],
    details: 'Built strong academic discipline, logical reasoning, and conceptual clarity forming the foundation for higher technical and engineering education.',
    accentColor: '#00ff9d',
    glowColor: 'rgba(0,255,157,0.06)',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-4" style={{ background: '#03030a' }}>

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
          &gt;_ academic background
        </p>
        <h2 className="text-3xl md:text-5xl font-black font-mono"
          style={{ color: '#e2e8f0', textShadow: '0 0 30px rgba(0,245,255,0.2)' }}>
          Edu<span style={{ color: '#00f5ff' }}>cation</span>
        </h2>
        <div className="mt-4 mx-auto h-px w-24"
          style={{ background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }}
        />
      </motion.div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto flex flex-col gap-5">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(0,245,255,0.08)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = edu.accentColor + '33'
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0,245,255,0.08)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
            }}
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5"
              style={{ background: edu.accentColor, boxShadow: `0 0 8px ${edu.accentColor}` }}
            />

            <div className="p-6 md:p-8 pl-8 md:pl-10 flex flex-col md:flex-row gap-6 items-start md:items-center">

              {/* Logo */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center"
                style={{ background: edu.glowColor, border: `1px solid ${edu.accentColor}25` }}>
                <div className="relative w-10 h-10">
                  <Image src={edu.logo} alt={edu.institution} fill className="object-contain" />
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold"
                    style={{ background: edu.glowColor, border: `1px solid ${edu.accentColor}35`, color: edu.accentColor }}>
                    {edu.tag}
                  </span>
                  <span className="text-xs font-mono" style={{ color: 'rgba(226,232,240,0.3)' }}>
                    {edu.duration} · {edu.period}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold font-mono mb-1" style={{ color: '#e2e8f0' }}>
                  {edu.title}
                </h3>

                <p className="text-sm font-mono mb-3" style={{ color: edu.accentColor, opacity: 0.8 }}>
                  {edu.institution}
                </p>

                <p className="text-sm leading-relaxed mb-4 font-mono hidden md:block"
                  style={{ color: 'rgba(226,232,240,0.45)', maxWidth: '60ch' }}>
                  {edu.details}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map(h => (
                    <span key={h} className="px-2.5 py-1 rounded text-xs font-mono"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(0,245,255,0.1)',
                        color: 'rgba(226,232,240,0.4)',
                      }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year block */}
              <div className="flex-shrink-0 hidden md:flex flex-col items-center justify-center w-20 h-20 rounded-xl"
                style={{ background: edu.glowColor, border: `1px solid ${edu.accentColor}18` }}>
                <span className="text-2xl font-black font-mono" style={{ color: edu.accentColor }}>
                  {edu.duration.split('–')[0].trim()}
                </span>
                <span className="text-xs font-mono" style={{ color: 'rgba(226,232,240,0.3)' }}>start</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}