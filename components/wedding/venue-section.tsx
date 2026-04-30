"use client"

import { motion } from "framer-motion"

export function VenueSection() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Paramathivelur+Tamil+Nadu+India"
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31269.78!2d78.05!3d11.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab3de0!2sParamathivelur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1"

  return (
    <section
      id="venue"
      className="relative py-20 sm:py-28 bg-[#FFF8F0] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="venuePattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <circle cx="12.5" cy="12.5" r="10" fill="none" stroke="#8B0000" strokeWidth="0.3" />
            <circle cx="12.5" cy="12.5" r="5" fill="none" stroke="#8B0000" strokeWidth="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#venuePattern)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#8B0000] mb-4">
            Venue & Location
          </h2>
          <div className="decorative-divider max-w-xs mx-auto">
            <span className="text-[#D4AF37] text-2xl">📍</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Venue Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="gold-frame bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 flex flex-col justify-between"
          >
            {/* Venue Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8B0000] to-[#6B0000] flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="font-heading text-2xl sm:text-3xl text-[#8B0000]">
                Upalakshya Banquet
              </h3>
              
              <div className="space-y-2">
                <p className="font-body text-[#5C4033] text-lg">
                  Udita Community Hall, 1050/1
                </p>
                <p className="font-body text-[#5C4033] text-lg">
                  Survey Park, Satoshpur
                </p>
                <p className="font-body text-[#5C4033]/80">
                  Opposite Calcutta Greens HIG, Kolkata – 700075
                </p>
              </div>

              {/* Decorative Lotus */}
              <div className="flex justify-center py-4">
                <svg className="w-24 h-12" viewBox="0 0 96 48">
                  <path d="M48,6 Q56,22 48,42 Q40,22 48,6" fill="#D4AF37" opacity="0.9" />
                  <path d="M34,12 Q48,26 48,42 Q28,26 34,12" fill="#D4AF37" opacity="0.7" />
                  <path d="M62,12 Q48,26 48,42 Q68,26 62,12" fill="#D4AF37" opacity="0.7" />
                  <path d="M22,20 Q42,30 48,42 Q18,30 22,20" fill="#D4AF37" opacity="0.5" />
                  <path d="M74,20 Q54,30 48,42 Q78,30 74,20" fill="#D4AF37" opacity="0.5" />
                </svg>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full py-3 px-6 bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-[#FFF8F0] font-body text-center rounded-lg hover:from-[#6B0000] hover:to-[#4B0000] transition-all duration-300 shadow-lg hover:shadow-xl border border-[#D4AF37]/30"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </span>
            </a>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gold-frame rounded-xl overflow-hidden h-80 md:h-auto min-h-[320px]"
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
