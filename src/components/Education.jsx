'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Education() {
  const [activeEdu, setActiveEdu] = useState(null)

  const education = [
    {
      id: 1,
      title: 'Integrated B.Tech – M.Tech (CSE)',
      institution: 'National Forensic Sciences University, Delhi',
      duration: '2022 – 2027 • 8th Semester',
      overview:
        'Integrated five-year Computer Science program with Cyber Security specialization.',
      details:
        'Pursuing a rigorous B.Tech–M.Tech integrated program focused on core Computer Science, advanced Cyber Security, Digital Forensics, secure systems, and research-oriented learning aligned with national security and forensic applications.',
      logo: '/images/logo.png',
    },
    {
      id: 2,
      title: 'Class XII – Non-Medical (CS)',
      institution: 'Kulachi Hansraj Model School, CBSE',
      duration: '2021 – 2022',
      overview:
        'Physics, Chemistry, Mathematics with Computer Science.',
      details:
        'Completed CBSE Class XII with Non-Medical stream, developing strong analytical thinking, problem-solving ability, and programming foundations through Computer Science.',
      logo: '/images/khms.png',
    },
    {
      id: 3,
      title: 'Class X',
      institution: 'Kulachi Hansraj Model School, CBSE',
      duration: '2019 – 2020',
      overview:
        'Secondary education under CBSE curriculum.',
      details:
        'Built strong academic discipline, logical reasoning, and conceptual clarity forming the foundation for higher technical and engineering education.',
      logo: '/images/khms.png',
    },
  ]

  return (
    <section id="education" className="relative py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-14 text-gradient"
      >
        Education
      </motion.h2>

      {/* Base Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setActiveEdu(edu)}
            onMouseLeave={() => setActiveEdu(null)}
            className="card p-6 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-md overflow-hidden bg-white/5">
                <Image
                  src={edu.logo}
                  alt="Institution Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold">
              {edu.title}
            </h3>

            <p className="text-sm text-textSecondary mt-1">
              {edu.institution}
            </p>

            <p className="text-xs text-textSecondary italic mt-1">
              {edu.duration}
            </p>

            <p className="text-textSecondary mt-4">
              {edu.overview}
            </p>
          </motion.div>
        ))}
      </div>

      {/* FOCUS OVERLAY */}
      <AnimatePresence>
        {activeEdu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              flex items-center justify-center
            "
          >
            {/* Background Blur */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

            {/* Expanded Detail Panel */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="
                relative z-10
                max-w-3xl w-full mx-4
                card p-8
              "
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-md overflow-hidden bg-white/5">
                  <Image
                    src={activeEdu.logo}
                    alt="Institution Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    {activeEdu.title}
                  </h3>
                  <p className="text-textSecondary">
                    {activeEdu.institution}
                  </p>
                  <p className="text-sm text-textSecondary italic">
                    {activeEdu.duration}
                  </p>
                </div>
              </div>

              <p className="text-textSecondary leading-relaxed">
                {activeEdu.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
