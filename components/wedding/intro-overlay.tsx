"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 4000)

    return () => clearTimeout(timer)
  }, [onComplete])

  const handleSkip = () => {
    setIsVisible(false)
    setTimeout(onComplete, 500)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#8B0000] via-[#6B0000] to-[#4B0000] overflow-hidden"
        >
          {/* Background Mandala Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 800">
              <pattern id="mandalaPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                {[...Array(8)].map((_, i) => (
                  <line
                    key={i}
                    x1="100"
                    y1="20"
                    x2="100"
                    y2="180"
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                    transform={`rotate(${i * 22.5} 100 100)`}
                  />
                ))}
              </pattern>
              <rect width="100%" height="100%" fill="url(#mandalaPattern)" />
            </svg>
          </div>

          {/* Central Animation Container */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Animated Mandala/Lotus */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="relative"
            >
              <svg
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
                viewBox="0 0 200 200"
              >
                {/* Outer Ring */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                
                {/* Lotus Petals */}
                {[...Array(8)].map((_, i) => (
                  <motion.path
                    key={i}
                    d="M100,100 Q100,40 100,30 Q115,60 100,100"
                    fill="#D4AF37"
                    fillOpacity="0.8"
                    transform={`rotate(${i * 45} 100 100)`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  />
                ))}
                
                {/* Inner Lotus Petals */}
                {[...Array(8)].map((_, i) => (
                  <motion.path
                    key={`inner-${i}`}
                    d="M100,100 Q100,60 100,50 Q110,70 100,100"
                    fill="#FFD700"
                    fillOpacity="0.9"
                    transform={`rotate(${i * 45 + 22.5} 100 100)`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  />
                ))}
                
                {/* Center Circle */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="15"
                  fill="#FFD700"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="#8B0000"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.8 }}
                />
              </svg>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="mt-8 text-center"
            >
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] font-light tracking-wider">
                {"You're Invited"}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="mt-4 text-[#FFF8F0]/80 font-body text-lg tracking-widest uppercase"
              >
                To a Sacred Union
              </motion.p>
            </motion.div>
          </div>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleSkip}
            className="absolute bottom-8 right-8 px-6 py-2 text-[#D4AF37] border border-[#D4AF37]/50 rounded-full font-body text-sm tracking-wider hover:bg-[#D4AF37]/10 transition-colors"
          >
            Skip Intro
          </motion.button>

          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/50" />
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/50" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]/50" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/50" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
