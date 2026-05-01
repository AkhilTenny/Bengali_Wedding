"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { FaMusic } from "react-icons/fa";
import { MdMusicOff } from "react-icons/md";

export function MusicPlayer({ variant = 'intro' }: { variant?: 'intro' | 'main' }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showText, setShowText] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audioEl = document.getElementById('wedding-bg-audio') as HTMLAudioElement;
    if (audioEl) {
      audioRef.current = audioEl;
      setIsPlaying(!audioEl.paused && audioEl.currentTime > 0);
      audioEl.volume = 0.5;
      setIsLoaded(true);

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audioEl.addEventListener('play', handlePlay);
      audioEl.addEventListener('pause', handlePause);

      return () => {
        audioEl.removeEventListener('play', handlePlay);
        audioEl.removeEventListener('pause', handlePause);
      };
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
    console.log("hai")
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
      initial={variant === 'intro' ? { opacity: 0, x: 50 } : { opacity: 0, scale: 0.5 }}
      animate={variant === 'intro' ? { opacity: 1, x: 0 } : { opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={variant === 'intro' ? "flex items-center justify-center w-full h-full top-4 right-4 z-100" : "fixed bottom-6 right-6 z-50"}
    >

      <button
        onClick={togglePlay}
        disabled={!isLoaded}
        className={variant === 'intro' ? `
          w-40 h-40 rounded-full mr-2
          bg-gradient-to-br from-[#E2856E] to-[#D36A50]
          border-2 border-[#800000]
          flex items-center justify-center
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isPlaying ? 'animate-pulse-glow' : ''}
        ` : `
          w-14 h-14 rounded-full
          bg-gradient-to-br from-[#E2856E] to-[#D36A50]
          border-2 border-[#800000]
          flex items-center justify-center
          shadow-lg hover:scale-110
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isPlaying ? 'animate-pulse-glow' : ''}
        `}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {/* Musical Note Icon */}
        <span className={variant === 'intro' ? "text-4xl text-red-800" : "text-xl text-red-800"}>
          {isPlaying ? <FaMusic /> : <MdMusicOff />}
        </span>

        {/* Pulsing Ring Animation when playing */}
        {isPlaying && (
          <>
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
