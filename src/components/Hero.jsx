'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="
        min-h-screen
        flex
        flex-col
        items-center
        pt-16        /* 🔴 REDUCED FROM pt-28 */
      "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        {/* Profile Image */}
<motion.div
  variants={itemVariants}
  className="mb-6 flex justify-center"
>
  {/* SMALL IMAGE (hover trigger) */}
  <motion.div
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="
      relative
      w-36 h-36 md:w-44 md:h-44
      rounded-full
      overflow-hidden
      ring-2 ring-emerald-400
      shadow-[0_0_30px_rgba(0,255,156,0.35)]
      cursor-pointer
      z-10
    "
  >
    <Image
      src="/images/profile.jpg"
      alt="Satvik Bhagat"
      fill
      priority
      sizes="(max-width: 768px) 144px, 176px"
      className="object-cover"
    />
  </motion.div>

  {/* BIG IMAGE (15–20% SCREEN ON HOVER) */}
  {isHovered && (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="
        fixed
        inset-0
        flex
        items-center
        justify-center
        z-50
        pointer-events-none
      "
    >
      {/* dark background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* enlarged image */}
      <motion.div
        className="
          relative
          w-[20vw] h-[20vw]
          min-w-[260px] min-h-[260px]
          max-w-[360px] max-h-[360px]
          rounded-full
          overflow-hidden
          ring-2 ring-emerald-400
          shadow-[0_0_80px_rgba(0,255,156,0.45)]
        "
      >
        <Image
          src="/images/profile.jpg"
          alt="Satvik Bhagat"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  )}
</motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="heading-primary text-gradient"
        >
          SATVIK BHAGAT
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl text-textSecondary mb-5"
        >
          Cyber Security Enthusiast
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-textSecondary text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          I am a passionate student with a strong interest in Cyber Security,
          Digital Forensics, and core Computer Science concepts. I enjoy
          breaking down complex security challenges and building a strong
          foundation in both theoretical and practical security analysis.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="btn-primary w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-12"   /* 🔴 REDUCED FROM mt-16 */
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-accent"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
