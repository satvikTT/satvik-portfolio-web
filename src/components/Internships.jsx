'use client'

import { motion } from 'framer-motion'

export default function Internships() {
  const internships = [
    {
      role: 'Internship Mentor – Cybersecurity & Innovation',
      company: 'Cyber Security & Digital Forensics UK Ltd (CSDF UK)',
      duration: 'October 2025 – January 2026 (90 Days)',
      description:
        'Appointed as Internship Mentor with responsibilities involving cybersecurity research, online investigation, innovation-driven security work, and application of cybersecurity concepts along with soft skills in a remote working environment.',
      link: '/internships/csdf.pdf',
    },
    {
      role: 'Cyber Security Intern',
      company: 'Elevate Labs',
      duration: 'May 2025 – June 2025',
      description:
        'Successfully completed a Cyber Security internship involving real-world security tasks and projects, demonstrating strong analytical thinking, professionalism, and dedication. Awarded Best Performer for exceptional contribution.',
      link: '/internships/elevate-labs.pdf',
    },
    {
      role: 'Cybersecurity Intern',
      company: 'Redynox',
      duration: 'August 2025 – October 2025',
      description:
        'Completed a three-month cybersecurity internship focusing on safeguarding digital infrastructure, promoting cyber awareness, and contributing to practical cybersecurity initiatives aligned with industry standards.',
      link: '/internships/redynox.pdf',
    },
    {
      role: 'Cyber Security Intern',
      company: 'The Red Users',
      duration: 'May 2025 – June 2025',
      description:
        'Completed a one-month internship in Cyber Security, gaining hands-on exposure to security fundamentals and practical cybersecurity operations within a professional environment.',
      link: '/internships/the-red-user.pdf',
    },
    {
      role: 'Cybersecurity Analyst Intern',
      company: 'YuvaIntern',
      duration: '2025',
      description:
        'Successfully completed the Cybersecurity Analyst internship program, demonstrating strong commitment, professionalism, and continuous learning while contributing to cybersecurity analysis and operational tasks.',
      link: '/internships/yuva-intern.pdf',
    },
  ]

  return (
    <section id="internships" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-14 text-gradient"
      >
        Internships
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {internships.map((internship, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card p-6"
          >
            <h3 className="text-xl font-semibold">
              {internship.role}
            </h3>

            <p className="text-sm text-textSecondary mt-1">
              {internship.company}
            </p>

            <p className="text-sm text-textSecondary italic mt-1">
              {internship.duration}
            </p>

            <p className="text-textSecondary mt-4 leading-relaxed">
              {internship.description}
            </p>

            <a
              href={internship.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-5 inline-block"
            >
              View Internship Proof
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
