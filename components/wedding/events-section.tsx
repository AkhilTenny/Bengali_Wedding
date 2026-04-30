"use client"

import { motion } from "framer-motion"

export function EventsSection() {
  return (
    <section
      id="events"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFF8F0] to-[#F5E6D3] overflow-hidden"
    >
      {/* Background Paisley Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <pattern id="paisleyPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M30,50 Q50,20 70,50 Q90,80 70,90 Q50,100 30,70 Q10,40 30,50"
              fill="none"
              stroke="#E2856E"
              strokeWidth="1"
            />
            <circle cx="50" cy="60" r="8" fill="none" stroke="#E2856E" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#paisleyPattern)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#E2856E] mb-4">
            Wedding Schedule
          </h2>
          <div className="decorative-divider max-w-xs mx-auto">
            <span className="text-[#800000] text-2xl">🪔</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#800000] via-[#E2856E] to-[#800000]" />

          {/* Event Cards */}
          {[
            {
              title: "Ashirvad",
              time: "10:00 AM",
              desc: "Seeking blessings for the journey ahead"
            },
            {
              title: "Haldi",
              time: "11:00 AM",
              desc: "The sacred turmeric ceremony"
            },
            {
              title: "Subhodrishti & Varmala",
              time: "5:30 PM",
              desc: "The auspicious first glance and exchange of garlands"
            },
            {
              title: "Wedding",
              time: "6:00 PM",
              desc: "The sacred union and traditional Bengali rituals"
            }
          ].map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative mb-8 pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
              }`}
            >
              {/* Connector Dot */}
              <div
                className={`absolute left-[13px] md:top-1/2 md:-translate-y-1/2 ${
                  i % 2 === 0
                    ? "md:left-auto md:right-[-2rem] md:translate-x-[calc(100%+0.5rem)]"
                    : "md:left-[-2rem] md:-translate-x-[calc(100%-0.5rem)]"
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-[#800000] border-2 border-[#FFF8F0] shadow-lg absolute top-6 md:top-auto md:relative z-10" />
              </div>

              <div className="gold-frame bg-gradient-to-br from-[#E2856E] to-[#D36A50] rounded-xl p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading text-xl sm:text-2xl text-[#800000] mb-2">
                  {event.title}
                </h3>

                <div className="space-y-2 mt-4">
                  <div className={`flex items-center gap-2 text-[#FFF8F0] ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body text-sm sm:text-base">{event.time}</span>
                  </div>

                  <div className="pt-2 border-t border-[#800000]/30">
                    <p className="font-body text-[#FFF8F0]/80 text-sm italic">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#800000]" />
            <span className="text-[#800000] text-xl">✦</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#800000]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
