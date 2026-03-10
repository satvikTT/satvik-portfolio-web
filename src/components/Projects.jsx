'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 'ollama',
    title: 'LLM-Orchestrated Vulnerability Assessment System',
    description: 'Privacy-first web vulnerability scanner powered by a locally hosted LLM (Ollama/Llama 3.2). Generates adaptive attack payloads, maps findings to CVSS v3.1, OWASP Top 10, ISO 27001 & NIST CSF — zero cloud dependency.',
    tags: ['Python', 'Flask', 'Ollama', 'LLM', 'OWASP', 'CVSS', 'SQLite'],
    github: 'https://github.com/satvikTT/ollama-security-tool',
    file: 'app.py',
    output: [
      '> Loading Llama 3.2 via Ollama... [OK]',
      '> Crawling target — 15 pages discovered',
      '> Generating adaptive XSS payloads via LLM...',
      '> [CRITICAL] SQLi found — CVSS 9.8 — /login',
      '> [HIGH] Stored XSS — CVSS 8.8 — /comment',
      '> Mapped to OWASP A03 | ISO 27001 A.14.2',
      '> Exporting cyberpunk HTML report... [DONE]',
    ],
  },
  {
    id: 'ai-ids',
    title: 'AI-Based Intrusion Detection System',
    description: 'ML-powered IDS with Explainable AI (XAI) using SHAP and LIME to make model decisions transparent. Trained on network traffic data to detect anomalies and classify intrusion attempts with interpretable reasoning.',
    tags: ['Python', 'Machine Learning', 'SHAP', 'LIME', 'XAI', 'Network Security'],
    github: 'https://github.com/satvikTT/ai-ids',
    file: 'src/train_model.py',
    output: [
      '> Loading network traffic dataset...',
      '> Training Random Forest classifier... [OK]',
      '> SHAP explainability layer initialized',
      '> Anomaly detected — src: 192.168.1.42',
      '> Top features: pkt_len=0.38, duration=0.31',
      '> LIME explanation generated for alert #47',
      '> Classification: PORT_SCAN — Confidence 96.4%',
    ],
  },
  {
    id: 'port-scan',
    title: 'Port Scan Detection Lab (Splunk SIEM)',
    description: 'Detection engineering lab that simulates 4 Nmap reconnaissance scan types against a Windows target and uses custom Splunk SPL queries to identify and classify attacker activity while reducing false positives.',
    tags: ['Splunk', 'SIEM', 'Nmap', 'Kali Linux', 'SPL', 'Threat Detection'],
    github: 'https://github.com/satvikTT/port-scan-detection-splunk',
    file: 'splunk_queries/master_detection.spl',
    output: [
      '> Simulating SYN scan from Kali... [DONE]',
      '> Simulating NULL scan — firewall evasion',
      '> Ingesting logs into Splunk index...',
      '> [SUSPICIOUS] Port 110 (POP3) flagged',
      '> Classified: RECON — NULL_SCAN detected',
      '> Alert triggered — 4 scan types identified',
      '> Dashboard: 4 panels live — auto-refresh 5m',
    ],
  },
  {
    id: 'ssh-brute',
    title: 'SSH Brute Force Detection (Splunk SIEM)',
    description: 'Splunk-based detection system that analyzes SSH authentication logs to identify brute force patterns, flag malicious IPs, and detect compromised accounts — built with SPL queries and a real-time monitoring dashboard.',
    tags: ['Splunk', 'SIEM', 'Python', 'SSH', 'Linux', 'Brute Force'],
    github: 'https://github.com/satvikTT/ssh-bruteforce-detection-splunk',
    file: 'splunk_queries/brute_force_detection.spl',
    output: [
      '> Ingesting SSH auth logs — linux_secure',
      '> Scanning for failed login patterns...',
      '> [ALERT] 250+ failures from 45.33.32.156',
      '> Targets: root, admin, ubuntu attempted',
      '> Compromised account detected post-bruteforce',
      '> SPL query: 10+ failures in 5-min window',
      '> Dashboard armed — monitoring active.',
    ],
  },
  {
    id: 'phishing',
    title: 'Ethical Phishing Simulation Platform',
    description: 'Educational phishing simulation that replicates real-world social engineering tactics in a controlled environment. Includes a realistic Outlook clone, Flask credential capture, Ngrok tunneling, and automated phishing email dispatch.',
    tags: ['Python', 'Flask', 'HTML/CSS', 'Ngrok', 'SMTP', 'Social Engineering'],
    github: 'https://github.com/satvikTT/Phishing_Simulatn',
    file: 'app.py',
    output: [
      '> Serving fake Outlook login page... [LIVE]',
      '> Ngrok tunnel active — public URL generated',
      '> Phishing email dispatched via Gmail SMTP',
      '> Target clicked link — page loaded',
      '> Credentials submitted by target',
      '> Logged to logs.txt — for analysis only',
      '> [EDUCATIONAL USE ONLY] Simulation complete.',
    ],
  },
  {
    id: 'password',
    title: 'Password Strength Checker & Breach Detector',
    description: 'Python tool that evaluates password strength against security standards and checks for data breach exposure using the Have I Been Pwned API with k-anonymity — ensuring no actual password or full hash is ever transmitted.',
    tags: ['Python', 'HIBP API', 'SHA-1', 'k-Anonymity', 'Security Awareness'],
    github: 'https://github.com/satvikTT/Password_strength_checker',
    file: 'pswd_checker.py',
    output: [
      '> Analyzing password entropy...',
      '> Length check: PASS | Uppercase: PASS',
      '> Special chars: PASS | Digits: PASS',
      '> Hashing via SHA-1 (local only)...',
      '> Sending 5-char prefix to HIBP API...',
      '> Comparing suffix locally — k-anonymity',
      '> [WARNING] Password found in 3,847 breaches!',
    ],
  },
]

function TerminalCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="terminal-card rounded-xl overflow-hidden group"
    >
      {/* Terminal top bar */}
      <div className="flex items-center gap-2 px-4 py-3"
        style={{ background: 'rgba(0,245,255,0.04)', borderBottom: '1px solid rgba(0,245,255,0.1)' }}>
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        <span className="ml-3 text-xs font-mono truncate" style={{ color: 'rgba(0,245,255,0.45)' }}>
          ~/projects/{project.file}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Prompt */}
        <p className="text-xs font-mono mb-3">
          <span style={{ color: '#00ff9d' }}>satvik@cyber</span>
          <span style={{ color: 'rgba(226,232,240,0.3)' }}>:~$ </span>
          <span style={{ color: '#e2e8f0' }}>python {project.file}</span>
        </p>

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold font-mono mb-2" style={{ color: '#e2e8f0' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(226,232,240,0.55)' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2 py-1 rounded"
              style={{ color: '#00f5ff', background: 'rgba(0,245,255,0.07)', border: '1px solid rgba(0,245,255,0.18)' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Toggle output */}
        <button
          onClick={() => setExpanded(e => !e)}
          className="text-xs font-mono flex items-center gap-2 mb-3 transition-colors"
          style={{ color: expanded ? '#00ff9d' : 'rgba(0,245,255,0.5)' }}
        >
          <span>{expanded ? '▼' : '▶'}</span>
          {expanded ? 'hide output' : '$ run — show output'}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="rounded-lg p-4 mb-4"
                style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(0,255,157,0.12)' }}>
                {project.output.map((line, i) => (
                  <motion.p key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="text-xs font-mono leading-6"
                    style={{
                      color: line.includes('CRITICAL') || line.includes('WARNING') || line.includes('ALERT')
                        ? '#ff6b6b'
                        : line.includes('OK') || line.includes('DONE') || line.includes('active') || line.includes('complete')
                        ? '#00ff9d'
                        : line.includes('HIGH') || line.includes('SUSPICIOUS')
                        ? '#febc2e'
                        : 'rgba(226,232,240,0.65)',
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub */}
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded transition-all"
          style={{ color: '#7b2fff', border: '1px solid rgba(123,47,255,0.35)', background: 'rgba(123,47,255,0.08)' }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 16px rgba(123,47,255,0.35)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.82 5.63-5.5 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.2.68.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4" style={{ background: '#03030a' }}>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="h-px w-full"
          style={{ background: 'linear-gradient(to right, transparent, rgba(0,245,255,0.2), rgba(123,47,255,0.2), transparent)' }} />
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
          &gt;_ what i have built
        </p>
        <h2 className="text-3xl md:text-5xl font-black font-mono"
          style={{ color: '#e2e8f0', textShadow: '0 0 30px rgba(0,245,255,0.2)' }}>
          Featured <span style={{ color: '#00f5ff' }}>Projects</span>
        </h2>
        <div className="mt-4 mx-auto h-px w-24"
          style={{ background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }} />
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <TerminalCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <style jsx>{`
        .terminal-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(0,245,255,0.1);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .terminal-card:hover {
          border-color: rgba(0,245,255,0.25);
          box-shadow: 0 0 30px rgba(0,245,255,0.05);
        }
      `}</style>
    </section>
  )
}