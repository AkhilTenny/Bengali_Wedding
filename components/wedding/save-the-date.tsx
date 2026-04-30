"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const weddingDate = new Date("2026-07-12T18:00:00").getTime()

export function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]

  return (
    <section
      id="save-the-date"
      className="relative py-20 sm:py-28 bg-[#FFF8F0] overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="lotusPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10,2 Q12,6 10,10 Q8,6 10,2" fill="#8B0000" />
            <path d="M10,18 Q12,14 10,10 Q8,14 10,18" fill="#8B0000" />
            <path d="M2,10 Q6,12 10,10 Q6,8 2,10" fill="#8B0000" />
            <path d="M18,10 Q14,12 10,10 Q14,8 18,10" fill="#8B0000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lotusPattern)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#8B0000] mb-4">
            Save the Date
          </h2>
          <div className="decorative-divider max-w-xs mx-auto">
            <span className="text-[#D4AF37] text-2xl">✦</span>
          </div>
        </motion.div>

        {/* Countdown Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gold-frame bg-white/80 backdrop-blur-sm rounded-lg p-6 sm:p-10"
        >
          {/* Lotus Decorations */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <svg className="w-20 h-12" viewBox="0 0 80 48">
              <path
                d="M40,4 Q50,20 40,44 Q30,20 40,4"
                fill="#D4AF37"
                opacity="0.9"
              />
              <path
                d="M25,12 Q40,24 40,44 Q20,24 25,12"
                fill="#D4AF37"
                opacity="0.7"
              />
              <path
                d="M55,12 Q40,24 40,44 Q60,24 55,12"
                fill="#D4AF37"
                opacity="0.7"
              />
            </svg>
          </div>

          <div className="text-center mb-8">
            <p className="font-body text-[#5C4033] text-lg">
              The sacred union will take place in
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-lg p-4 sm:p-6 text-center gold-frame">
                  <span className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] block">
                    {mounted ? String(unit.value).padStart(2, "0") : "--"}
                  </span>
                  <span className="font-body text-[#FFF8F0]/80 text-xs sm:text-sm uppercase tracking-wider mt-1 block">
                    {unit.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="font-heading text-xl sm:text-2xl text-[#8B0000]">
              12<sup>th</sup> July 2026 • Sunday
            </p>
            <p className="font-body text-[#5C4033] mt-2">
              Mark your calendars for this auspicious day
            </p>
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <svg className="w-32 h-8" viewBox="0 0 128 32">
            <path
              d="M0,16 Q32,0 64,16 Q96,32 128,16"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
            />
            <circle cx="64" cy="16" r="4" fill="#D4AF37" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
