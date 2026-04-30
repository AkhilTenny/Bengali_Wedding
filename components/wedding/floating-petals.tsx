"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  color: string
  rotation: number
}

const colors = [
  "#C0392B", // Red
  "#E74C3C", // Light Red
  "#D4AF37", // Gold
  "#FFB6C1", // Light Pink
  "#FF69B4", // Hot Pink
  "#8B0000", // Dark Red
]

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 7,
      size: 8 + Math.random() * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
    }))
    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.5}
            viewBox="0 0 20 30"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          >
            <path
              d="M10,0 Q15,10 10,30 Q5,10 10,0"
              fill={petal.color}
              opacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
