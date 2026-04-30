"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden texture-overlay"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#6B0000] to-[#4B0000]" />

      {/* Couple Photo Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/palace_hall_hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/70 via-transparent to-[#8B0000]/30" />

      {/* Mandala Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg className="w-[150%] h-[150%] max-w-none" viewBox="0 0 400 400">
          <g fill="none" stroke="#D4AF37" strokeWidth="0.5">
            {[...Array(12)].map((_, i) => (
              <circle
                key={i}
                cx="200"
                cy="200"
                r={30 + i * 15}
              />
            ))}
            {[...Array(24)].map((_, i) => (
              <line
                key={`line-${i}`}
                x1="200"
                y1="0"
                x2="200"
                y2="400"
                transform={`rotate(${i * 15} 200 200)`}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Decorative Border Frame */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 border border-[#D4AF37]/30 pointer-events-none">
        {/* Corner Ornaments */}
        <div className="absolute -top-px -left-px w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute -top-px -right-px w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-r-2 border-[#D4AF37]" />
        <div className="absolute -bottom-px -left-px w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute -bottom-px -right-px w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-[#D4AF37]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Om Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl text-[#D4AF37] font-heading animate-float inline-block">
            ॐ
          </span>
        </motion.div>

        {/* Decorative Top Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mb-8 w-48 sm:w-64 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />

        {/* Names and Couple Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-6"
        >
          {/* Names */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FFF8F0] font-bold tracking-wide leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] text-center">
            <span className="block sm:inline text-shadow-lg">Jiya</span>
            <span className="block my-3 sm:my-0 sm:mx-6 text-4xl sm:text-5xl md:text-6xl">
              <span className="text-[#D4AF37] animate-pulse drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">Weds</span>
            </span>
            <span className="block sm:inline text-shadow-lg">Arnob</span>
          </h1>

          {/* Couple Photo */}
          <motion.div
            className="relative flex justify-center h-full items-end w-48 h-48 sm:w-64 sm:h-64 z-20"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/couplePhoto.png"
              alt="Jiya and Arnob"
              className="h-full w-full object-cover size-1.5"
            />
          </motion.div>

          {/* Hashtag */}
          <h2 className="mt-4 text-[#D4AF37] font-heading text-2xl sm:text-3xl tracking-[0.2em] font-bold drop-shadow-md">
            #ARJIYA
          </h2>
        </motion.div>



        {/* Wedding Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-2"
        >
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#FFF8F0] mt-4">
            12<sup>th</sup> July 2026
          </p>
          <p className="font-body text-[#FFF8F0]/80 text-base sm:text-lg">
            Sunday • 6:00 PM
          </p>
        </motion.div>

        {/* Decorative Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mx-auto mt-8 w-48 sm:w-64 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#D4AF37]/60 text-sm font-body tracking-wider flex flex-col items-center gap-2"
          >
            <span>Scroll Down</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
