"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      setIsLoaded(true)
    }
  }, [])

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch {
        console.log("Audio playback failed - user interaction required")
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-4 right-4 z-40"
    >
      <audio ref={audioRef} src="/genesh-audio.mp3" loop preload="auto" />

      <button
        onClick={togglePlay}
        disabled={!isLoaded}
        className={`
          relative w-12 h-12 rounded-full 
          bg-gradient-to-br from-[#E2856E] to-[#D36A50]
          border-2 border-[#800000]
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 hover:shadow-lg mt-6
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isPlaying ? 'animate-pulse-glow' : ''}
        `}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {/* Musical Note Icon */}
        <span className="text-xl text-[#800000]">
          {isPlaying ? "🎵" : "🎶"}
        </span>

        {/* Pulsing Ring Animation when playing */}
        {isPlaying && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-[#800000]"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-[#800000]"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}
      </button>
    </motion.div>
  )
}
