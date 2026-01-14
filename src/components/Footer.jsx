'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-sm text-textSecondary">
          © {new Date().getFullYear()} Satvik Bhagat. All rights reserved.
        </p>

        <p className="text-xs text-textSecondary mt-1">
          Built with Next.js & Passion for Cyber Security
        </p>
      </motion.div>
    </footer>
  )
}
