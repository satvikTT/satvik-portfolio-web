'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      style={{
        left: pos.x,
        top: pos.y,
      }}
      className="
        pointer-events-none fixed z-[9999]
        w-4 h-4 rounded-full
        -translate-x-1/2 -translate-y-1/2
        transition-transform duration-75
        dark:bg-emerald-400 dark:shadow-[0_0_20px_#10b981]
        bg-gray-800
      "
    />
  )
}
