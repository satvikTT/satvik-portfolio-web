'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Achievement() {
  return (
    <section id="achievement" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-14 text-gradient"
      >
        Achievement
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Achievement Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-72 h-44 md:w-96 md:h-56 rounded-xl overflow-hidden ring-1 ring-emerald-400/40 shadow-[0_0_40px_rgba(0,255,156,0.2)]"
        >
          <Image
            src="/images/image1.png"
            alt="GATE 2025 Computer Science Achievement"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Achievement Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="card p-6 text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Qualified GATE 2025 – Computer Science (CS)
          </h3>

          <p className="text-textSecondary leading-relaxed mb-4">
            Successfully qualified the <strong>Graduate Aptitude Test in Engineering (GATE) 2025</strong>
            in the <strong>Computer Science and Information Technology (CS)</strong> domain, one of the most
            competitive national-level examinations in India.
          </p>

          <p className="text-textSecondary leading-relaxed">
            This achievement reflects strong foundations in core computer science subjects such as
            <strong> Data Structures, Algorithms, Operating Systems, Computer Networks, Databases,</strong>
            and <strong>Discrete Mathematics</strong>, along with analytical thinking and problem-solving
            abilities essential for advanced research and high-impact roles in technology and cybersecurity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
