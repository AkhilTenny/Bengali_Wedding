"use client"

import { useState } from "react"
import { IntroOverlay } from "@/components/wedding/intro-overlay"
import { MusicPlayer } from "@/components/wedding/music-player"
import { Navigation } from "@/components/wedding/navigation"
import { FloatingPetals } from "@/components/wedding/floating-petals"
import { HeroSection } from "@/components/wedding/hero-section"
import { SaveTheDate } from "@/components/wedding/save-the-date"
import { EventsSection } from "@/components/wedding/events-section"
import { VenueSection } from "@/components/wedding/venue-section"
import { DressCode } from "@/components/wedding/dress-code"
import { Footer } from "@/components/wedding/footer"

export default function WeddingInvitation() {
  const [showIntro, setShowIntro] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleIntroComplete = () => {
    setShowIntro(false)
    setShowContent(true)
  }

  return (
    <main className="min-h-screen bg-[#FFF8F0]">
      {/* Intro Animation Overlay */}
      {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}

      {/* Main Content */}
      {showContent && (
        <>
          {/* Music Player */}
          <MusicPlayer />

          {/* Navigation */}
          <Navigation />

          {/* Floating Petals Animation */}
          <FloatingPetals />

          {/* Page Sections */}
          <HeroSection />
          <SaveTheDate />
          <EventsSection />
          <VenueSection />
          <DressCode />
          <Footer />
        </>
      )}
    </main>
  )
}
