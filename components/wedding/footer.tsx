"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-16 sm:py-20 bg-gradient-to-b from-[#8B0000] to-[#4B0000] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <g fill="none" stroke="#D4AF37" strokeWidth="0.3">
            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx="200"
                cy="200"
                r={40 + i * 25}
              />
            ))}
            {[...Array(16)].map((_, i) => (
              <line
                key={`line-${i}`}
                x1="200"
                y1="0"
                x2="200"
                y2="400"
                transform={`rotate(${i * 22.5} 200 200)`}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        {/* Golden Mandala Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100">
            {/* Outer Ring */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="1" />
            {/* Lotus Petals */}
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d="M50,50 Q50,20 50,10 Q55,30 50,50"
                fill="#D4AF37"
                fillOpacity="0.8"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
            {/* Inner Circle */}
            <circle cx="50" cy="50" r="12" fill="#D4AF37" />
            <circle cx="50" cy="50" r="6" fill="#8B0000" />
          </svg>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="font-body text-[#D4AF37] text-lg tracking-widest uppercase">
            With love and blessings
          </p>
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#FFF8F0]">
            Jiya & Arnob
          </h3>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-8 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />

        {/* Om Shanti */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-3"
        >
          <p className="font-heading text-3xl sm:text-4xl text-[#D4AF37]">
            ॐ शान्तिः
          </p>
          <p className="font-body text-[#FFF8F0]/60 text-sm tracking-wider">
            Om Shanti
          </p>
        </motion.div>

        {/* Diya Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-8 my-8"
        >
          {[0, 1, 2].map((i) => (
            <svg key={i} className="w-8 h-12" viewBox="0 0 32 48">
              <ellipse cx="16" cy="42" rx="10" ry="4" fill="#D4AF37" />
              <path d="M6,42 Q10,34 16,32 Q22,34 26,42" fill="#D4AF37" />
              <motion.path
                d="M16,8 Q20,16 18,24 Q16,28 16,28 Q16,28 14,24 Q12,16 16,8"
                fill="#FFD700"
                animate={{
                  d: [
                    "M16,8 Q20,16 18,24 Q16,28 16,28 Q16,28 14,24 Q12,16 16,8",
                    "M16,6 Q21,15 19,23 Q16,28 16,28 Q16,28 13,23 Q11,15 16,6",
                    "M16,8 Q20,16 18,24 Q16,28 16,28 Q16,28 14,24 Q12,16 16,8",
                  ],
                }}
                transition={{ duration: 1 + i * 0.2, repeat: Infinity }}
              />
            </svg>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pt-8 border-t border-[#D4AF37]/20"
        >
          <p className="font-body text-[#FFF8F0]/40 text-xs">
            © 2026 Jiya & Arnob Wedding Celebration
          </p>
          <p className="font-body text-[#FFF8F0]/30 text-xs mt-2">
            Made with ❤ for a sacred union
          </p>
        </motion.div>
      </div>

      {/* Bottom Corner Decorations */}
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]/30" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/30" />
    </footer>
  )
}
