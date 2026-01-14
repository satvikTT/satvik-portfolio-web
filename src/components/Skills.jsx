'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  // Skills data organized by category
  const skillsData = [
    {
      category: 'Cyber Security',
      skills: [
        'Penetration Testing',
        'Network Security',
        'Threat Analysis',
        'Vulnerability Assessment',
        'Incident Response',
        'Security Auditing',
      ],
    },
    {
      category: 'Digital Forensics',
      skills: [
        'Evidence Collection',
        'Disk Imaging',
        'Memory Analysis',
        'Network Forensics',
        'Malware Analysis',
        'Chain of Custody',
      ],
    },
    {
      category: 'Programming',
      skills: [
        'Python',
        'JavaScript',
        'Bash Scripting',
        'SQL',
        'C/C++',
        'PowerShell',
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        'Kali Linux',
        'Wireshark',
        'Metasploit',
        'Burp Suite',
        'Nmap',
        'Autopsy',
        'Volatility',
        'SIEM Tools',
      ],
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="skills" className="section-container bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-secondary text-gradient text-center">
          Skills & Expertise
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={categoryVariants}
            className="card"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              {category.category}
            </h3>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-3"
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-primary/50 border border-border rounded-lg text-center text-textSecondary hover:text-accent hover:border-accent/50 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
