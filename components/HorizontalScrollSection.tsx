'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles } from 'lucide-react'

export default function HorizontalScrollSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-blue-500' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-400' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-300' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500' },
    { name: 'GraphQL', icon: '💜', color: 'from-pink-500 to-purple-500' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-800 to-gray-600' },
    { name: 'Vue.js', icon: '💚', color: 'from-green-500 to-teal-500' },
  ]

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-glow">
              Master <span className="text-primary">Modern Technologies</span>
            </h2>
            <Sparkles className="text-accent" size={32} />
          </div>
          <p className="text-xl text-text-muted">
            Learn the most in-demand tech stack used by industry leaders
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div className="relative">
        <motion.div
          style={{ x }}
          className="flex gap-8 px-8"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 h-96 relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              {/* Card */}
              <div className="relative w-full h-full bg-dark-200 rounded-3xl border border-primary/20 overflow-hidden">
                {/* Gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10 group-hover:opacity-20`}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                  {/* Icon */}
                  <motion.div
                    className="text-9xl mb-6"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {tech.icon}
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-center mb-6">
                    Master {tech.name} with hands-on projects and expert guidance
                  </p>

                  {/* Progress bar */}
                  <div className="w-full bg-dark-100 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${60 + (index * 13 % 40)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>

                  {/* Stats */}
                  <div className="mt-6 flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {20 + (index % 50)}+
                      </div>
                      <div className="text-xs text-text-muted">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">
                        {50 + (index * 7 % 100)}h
                      </div>
                      <div className="text-xs text-text-muted">Content</div>
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: '0 0 40px rgba(0, 255, 133, 0.5)',
                  }}
                />

                {/* Animated particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${10 + i * 10}%`,
                        top: '50%',
                      }}
                      animate={{
                        y: [-50, -100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center font-bold text-white shadow-lg opacity-0 group-hover:opacity-100`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
              >
                NEW
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark-100 to-transparent pointer-events-none z-20" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark-100 to-transparent pointer-events-none z-20" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="text-center mt-12"
        animate={{
          x: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <p className="text-text-muted flex items-center justify-center gap-2">
          <span>Scroll to explore more</span>
          <span className="text-2xl">→</span>
        </p>
      </motion.div>
    </section>
  )
}
