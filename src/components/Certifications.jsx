'use client'

import { motion } from 'framer-motion'

export default function Certifications() {
  const certifications = [
    {
      title: 'Cyber Security Training',
      issuer: 'Acmegrade | Mood Indigo, IIT Bombay',
      description:
        'Completed hands-on training in core Cyber Security concepts including threat analysis, security fundamentals, and practical exposure to real-world security scenarios.',
      link: '/certifications/acmegrade.jpg',
    },
    {
      title: 'OSINT & Open-Source Intelligence (CTRL. ALT. ACT.)',
      issuer: 'Cyber Secured India (CSI) & MKITOS',
      description:
        'Successfully completed a 4-week intensive program focused on OSINT techniques, ethical intelligence gathering, and real-world open-source investigations for social good.',
      link: '/certifications/csi-osint.pdf',
    },
    {
      title: 'Cyber Security Management Job Simulation',
      issuer: 'ANZ | Forage',
      description:
        'Gained practical experience in social engineering investigations, digital forensics analysis, and security decision-making through simulated real-world tasks.',
      link: '/certifications/forage-anz.pdf',
    },
    {
      title: 'Cyber Job Simulation',
      issuer: 'Deloitte | Forage',
      description:
        'Completed simulated cyber security tasks covering risk analysis, security fundamentals, and enterprise-level cyber problem solving.',
      link: '/certifications/forage-deloitte.pdf',
    },
    {
      title: 'Cybersecurity Job Simulation',
      issuer: 'Mastercard | Forage',
      description:
        'Worked on phishing simulation design, result analysis, and understanding organizational response to cyber threats in a real-world inspired environment.',
      link: '/certifications/forage-mastercard.pdf',
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient"
      >
        Certifications
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-1">
                {cert.issuer}
              </h3>
              <p className="text-sm text-textSecondary mb-3">
                {cert.title}
              </p>
              <p className="text-textSecondary text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-5 w-fit"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
