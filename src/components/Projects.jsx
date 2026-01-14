'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
  // Sample project data - Replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'AI-Based Intrusion Detection System',
      description:
        'Machine learning-powered IDS using Random Forest and XGBoost for real-time network threat detection and analysis.',
      tags: ['Python', 'Machine Learning', 'XGBoost', 'Network Security'],
      github: 'https://github.com/satvikbhagat',
      demo: null,
    },
    {
      id: 2,
      title: 'Digital Forensics Toolkit',
      description:
        'Comprehensive toolkit for digital evidence collection, analysis, and reporting for cybersecurity investigations.',
      tags: ['Python', 'Digital Forensics', 'Evidence Analysis', 'Security'],
      github: 'https://github.com/satvikbhagat',
      demo: null,
    },
    {
      id: 3,
      title: 'Network Packet Analyzer',
      description:
        'Advanced packet analysis tool for deep inspection of network traffic patterns and anomaly detection.',
      tags: ['Python', 'Wireshark', 'PCAP', 'Network Analysis'],
      github: 'https://github.com/satvikbhagat',
      demo: null,
    },
    {
      id: 4,
      title: 'Vulnerability Assessment Scanner',
      description:
        'Automated security scanner for identifying common vulnerabilities in web applications and network infrastructure.',
      tags: ['Python', 'Security', 'Penetration Testing', 'OWASP'],
      github: 'https://github.com/satvikbhagat',
      demo: null,
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="section-container bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-secondary text-gradient text-center">
          Featured Projects
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="card group"
          >
            {/* Project Title */}
            <h3 className="text-xl md:text-2xl font-bold text-textPrimary mb-3 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-textSecondary mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </motion.a>
              )}

              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
