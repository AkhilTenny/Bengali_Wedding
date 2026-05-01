"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showText, setShowText] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (showText) {
      const timer = setTimeout(() => {
        setShowText(false)
      }, 8000)
      return () => clearTimeout(timer);
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

  console.log(showText)

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
          relative w-14 h-14 rounded-full mr-2
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
      {!isPlaying && showText && (
        <div className="absolute top-21 px-2 right-0 z-40 w-29 bg-[#FFCBA4]/95 transition-all fade-in duration-300 bg-transparent backdrop-blur-sm rounded-full">
          <p className="text-[#800000] font-heading text-sm">Tap to play music</p>
        </div>
      )}
    </motion.div>
  )
}
