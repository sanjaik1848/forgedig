'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Shield, Rocket, Star, TrendingUp, Award } from 'lucide-react'

export default function ScrollRevealSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless learning experience',
      image: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Enterprise-grade security for your data',
      image: '🛡️',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Rocket,
      title: 'Career Launch',
      description: 'Fast-track your journey to tech success',
      image: '🚀',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Star,
      title: 'Premium Content',
      description: 'Curated courses from industry experts',
      image: '⭐',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Real-time analytics and insights',
      image: '📊',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Industry-recognized credentials',
      image: '🏆',
      color: 'from-orange-500 to-yellow-500',
    },
  ]

  return (
    <section ref={containerRef} className="relative py-32 px-4 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-glow"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Powerful <span className="text-primary">Features</span>
          </motion.h2>
          <motion.p
            className="text-xl text-text-muted max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to succeed in your coding journey
          </motion.p>
        </motion.div>

        {/* Features Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const delay = index * 0.1

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay }}
              >
                <motion.div
                  className="relative group h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card */}
                  <div className="bg-dark-200 rounded-3xl p-8 border border-primary/20 h-full overflow-hidden relative">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10`}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Image placeholder with animation */}
                    <motion.div
                      className="relative w-full h-40 bg-gradient-to-br from-dark-100 to-dark-300 rounded-2xl mb-6 flex items-center justify-center overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Emoji */}
                      <motion.div
                        className="text-6xl z-10 relative"
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
                        {feature.image}
                      </motion.div>

                      {/* Animated rings */}
                      <motion.div
                        className={`absolute inset-0 border-4 border-primary/20 rounded-2xl`}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      {/* Floating particles */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                          style={{
                            left: `${15 + i * 15}%`,
                            bottom: '20%',
                          }}
                          animate={{
                            y: [0, -40, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Icon with rotation */}
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-primary relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-text-muted relative z-10 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Progress bar animation */}
                    <motion.div
                      className="mt-6 h-1 bg-dark-100 rounded-full overflow-hidden relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${feature.color}`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: delay + 0.3 }}
                      />
                    </motion.div>

                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow: '0 0 40px rgba(0, 255, 133, 0.4)',
                      }}
                    />

                    {/* Corner decoration */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: delay + 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: delay + 0.5 }}
                    />
                  </div>

                  {/* Floating number badge */}
                  <motion.div
                    className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center font-bold text-white text-lg shadow-xl`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.3, duration: 0.5, type: 'spring' }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Decorative animated elements */}
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-40 h-40 border-4 border-primary/10 rounded-full pointer-events-none"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-20 right-10 w-32 h-32 border-4 border-accent/10 pointer-events-none"
        />
      </div>
    </section>
  )
}
