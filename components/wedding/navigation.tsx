"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "save-the-date", label: "Save the Date" },
  { id: "events", label: "Events" },
  { id: "venue", label: "Venue" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }))

      for (const section of sections.reverse()) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`
        fixed top-0 left-0 right-0 z-30
        transition-all duration-300
        ${scrolled
          ? "bg-[#FFCBA4]/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-transparent py-4"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-6 flex-wrap">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                px-2 sm:px-4 py-2 font-heading text-xs sm:text-sm md:text-base tracking-wider
                transition-all duration-300 rounded-full
                ${activeSection === item.id
                  ? "text-[#800000] bg-[#800000]/10"
                  : scrolled
                    ? "text-[#800000]/80 hover:text-[#800000]"
                    : "text-[#FFF8F0]/80 hover:text-[#800000]"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gold accent line */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 h-px
          bg-gradient-to-r from-transparent via-[#800000] to-transparent
          transition-opacity duration-300
          ${scrolled ? "opacity-100" : "opacity-0"}
        `}
      />
    </motion.nav>
  )
}
