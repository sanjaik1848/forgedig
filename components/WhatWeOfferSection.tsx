'use client'

import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import {
  BookOpen,
  Code,
  Terminal,
  Trophy,
  Briefcase,
  Award,
  Wrench,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Courses',
    description: 'Industry-aligned tech courses taught by experts. Master web dev, Python, IoT and more.',
    href: '/courses',
    gradient: 'from-[#00FF85] to-[#0D9488]',
    glow: 'rgba(0,255,133,0.3)',
    badge: 'Popular',
  },
  {
    icon: Code,
    title: 'Practice Arena',
    description: 'Sharpen your coding skills with real-world problems, DSA challenges and live feedback.',
    href: '/practice',
    gradient: 'from-[#22D3EE] to-[#0D9488]',
    glow: 'rgba(34,211,238,0.3)',
    badge: 'New',
  },
  {
    icon: Terminal,
    title: 'Online IDE',
    description: 'Code directly in your browser — no setup needed. Supports 10+ languages with syntax highlighting.',
    href: '/ide',
    gradient: 'from-[#A78BFA] to-[#6D28D9]',
    glow: 'rgba(167,139,250,0.3)',
    badge: null,
  },
  {
    icon: Trophy,
    title: 'Assessment',
    description: 'Test your knowledge with timed quizzes, mock interviews, and AI-graded assessments.',
    href: '/assessment',
    gradient: 'from-[#F59E0B] to-[#D97706]',
    glow: 'rgba(245,158,11,0.3)',
    badge: null,
  },
  {
    icon: Briefcase,
    title: 'Internships',
    description: 'Get hands-on experience with real projects. Earn industry recognition and build your portfolio.',
    href: '/internships',
    gradient: 'from-[#EC4899] to-[#BE185D]',
    glow: 'rgba(236,72,153,0.3)',
    badge: 'Hiring',
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Earn verified digital certificates upon completion. Share on LinkedIn and showcase your skills.',
    href: '/certificates',
    gradient: 'from-[#00FF85] to-[#22D3EE]',
    glow: 'rgba(0,255,133,0.3)',
    badge: null,
  },
  {
    icon: Wrench,
    title: 'Services',
    description: 'We build websites, apps, and digital solutions for businesses and startups — end to end.',
    href: '/services',
    gradient: 'from-[#F97316] to-[#EA580C]',
    glow: 'rgba(249,115,22,0.3)',
    badge: null,
  },
  {
    icon: MessageCircle,
    title: 'Contact Us',
    description: 'Have a question or project idea? Reach out to our team — we respond within 24 hours.',
    href: '/contact',
    gradient: 'from-[#0D9488] to-[#0F766E]',
    glow: 'rgba(13,148,136,0.3)',
    badge: null,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WhatWeOfferSection() {
  const router = useRouter()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={16} />
            Everything You Need
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
            What We{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto">
            From learning to launching — Forge Digital Solution is your complete tech ecosystem.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="relative group cursor-pointer"
                onClick={() => router.push(feature.href)}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Card */}
                <div
                  className="h-full bg-dark-200/80 backdrop-blur-sm rounded-2xl border border-primary/10 group-hover:border-primary/40 p-6 flex flex-col gap-4 transition-all duration-300 overflow-hidden relative"
                  style={{
                    boxShadow: `0 0 0 0 ${feature.glow}`,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ boxShadow: `inset 0 0 30px ${feature.glow}` }}
                  />

                  {/* Badge */}
                  {feature.badge && (
                    <span className={`absolute top-4 right-4 px-2.5 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r ${feature.gradient} text-dark-100`}>
                      {feature.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-dark-100" size={26} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1`}>
                    Explore
                    <ArrowRight size={16} className={`bg-gradient-to-r ${feature.gradient} bg-clip-text`} style={{ color: 'transparent', stroke: '#00FF85' }} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-bold text-lg shadow-[0_0_25px_rgba(0,255,133,0.3)] hover:shadow-[0_0_40px_rgba(0,255,133,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/services')}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
