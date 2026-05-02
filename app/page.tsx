'use client'

import HeroSection from '@/components/HeroSection'
import HighlightsSection from '@/components/HighlightsSection'
import ImageGallerySection from '@/components/ImageGallerySection'
import HorizontalScrollSection from '@/components/HorizontalScrollSection'
import ScrollRevealSection from '@/components/ScrollRevealSection'
import ProgressSection from '@/components/ProgressSection'
import IDESection from '@/components/IDESection'
import InternshipServicesSection from '@/components/InternshipServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import ChatbotAssistant from '@/components/ChatbotAssistant'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen gradient-bg">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        {/* Temporarily hidden for Launching Soon
        <HighlightsSection />
        <ImageGallerySection />
        <HorizontalScrollSection />
        <ScrollRevealSection />
        <ProgressSection />
        <IDESection />
        <InternshipServicesSection />
        <TestimonialsSection />
        */}
        <Footer />
      </div>
      {/* <ChatbotAssistant /> */}
    </main>
  )
}
