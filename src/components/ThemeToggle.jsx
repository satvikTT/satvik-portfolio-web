'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
      document.documentElement.classList.toggle('light', saved === 'light')
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('light', next === 'light')
    localStorage.setItem('theme', next)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full text-sm border border-border backdrop-blur bg-background/80 hover:scale-105 transition"
    >
      {theme === 'dark' ? 'Day Mode' : 'Dark Mode'}
    </button>
  )
}
