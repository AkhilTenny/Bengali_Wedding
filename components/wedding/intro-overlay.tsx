"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MusicPlayer } from "./music-player"

export function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(onComplete, 500)
    }, 100000)

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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#E2856E] via-[#D36A50] to-[#B54D38] overflow-hidden"
        >

          {/* Background Mandala Pattern */}

          {/* invited text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="  w-full "
          >

            <h1 className="text-4xl w-full text-center  mb-6 text-[#800000]">You are Invited !</h1>

          </motion.div>

          {/* Central Animation Container */}
          <div onClick={handleSkip}>
            <MusicPlayer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="  w-full "
          >

            <h1 className="text-2xl w-full text-center text-shadow-md mt-6 text-white">Click to open</h1>

          </motion.div>




          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#800000]/50" />
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#800000]/50" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#800000]/50" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#800000]/50" />
        </motion.div>
      )
      }
    </AnimatePresence >
  )
}
