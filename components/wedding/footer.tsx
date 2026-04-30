"use client"

import { motion } from "framer-motion"


export function Footer() {



  return (
    <footer className="relative py-16 sm:py-20 bg-gradient-to-b from-[#E2856E] to-[#B54D38] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <g fill="none" stroke="#800000" strokeWidth="0.3">
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
          <div className="flex w-full justify-center">
            <div className="w-40 h-40 bg-[#800000]" style={{ maskImage: "url('/genesh-logo.png')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/genesh-logo.png')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />

          </div>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="font-body text-[#800000] text-base sm:text-lg tracking-widest uppercase">
              Mr. Joydeep Bose & <br />Mrs. Mohua Bose
            </p>
            <p className="font-body text-[#FFF8F0]/80 text-sm sm:text-base tracking-wide">
              cordially invite you to<br /> the wedding of their daughter
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#FFF8F0]">
              Jiya
            </h3>
            <p className="font-heading text-3xl sm:text-4xl text-[#800000]">
              &
            </p>
            <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#FFF8F0]">
              Arnob
            </h3>
          </div>

          <div className="space-y-2">
            <p className="font-body text-[#FFF8F0]/80 text-sm sm:text-base tracking-wide">
              son of
            </p>
            <p className="font-body text-[#800000] text-base sm:text-lg tracking-widest uppercase">
              Mr. Braja Gopal Saha &<br />   Lt. Soma Saha
            </p>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-8 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-[#800000] to-transparent"
        />

        {/* Om Shanti */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-3"
        >
          <p className="font-heading text-3xl sm:text-4xl text-white">
            Om Ganeshay Namah
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
              <ellipse cx="16" cy="42" rx="10" ry="4" fill="#800000" />
              <path d="M6,42 Q10,34 16,32 Q22,34 26,42" fill="#800000" />
              <motion.path
                d="M16,8 Q20,16 18,24 Q16,28 16,28 Q16,28 14,24 Q12,16 16,8"
                fill="#800000"
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
          className="pt-8 border-t border-[#800000]/20"
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
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#800000]/30" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#800000]/30" />
    </footer>
  )
}
