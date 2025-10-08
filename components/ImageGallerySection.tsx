'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Laptop, Users, Zap, Target, TrendingUp } from 'lucide-react'

export default function ImageGallerySection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const galleryItems = [
    {
      icon: Code2,
      title: 'Interactive Coding',
      description: 'Real-time code editor with instant feedback',
      color: 'from-primary to-secondary',
      image: '🖥️',
    },
    {
      icon: Laptop,
      title: 'Live Projects',
      description: 'Build real-world applications',
      color: 'from-secondary to-accent',
      image: '💻',
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Collaborate with peers worldwide',
      color: 'from-accent to-primary',
      image: '👥',
    },
    {
      icon: Zap,
      title: 'Fast Learning',
      description: 'Accelerated skill development',
      color: 'from-primary to-accent',
      image: '⚡',
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Monitor your progress daily',
      color: 'from-secondary to-primary',
      image: '🎯',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Land your dream tech job',
      color: 'from-accent to-secondary',
      image: '📈',
    },
  ]

  return (
    <section ref={containerRef} className="relative py-32 px-4 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          style={{ opacity, scale }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-glow"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Experience <span className="text-primary">Innovation</span>
          </motion.h2>
          <motion.p
            className="text-xl text-text-muted max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our cutting-edge features designed to accelerate your learning journey
          </motion.p>
        </motion.div>

        {/* Parallax Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 0
            const yTransform = isEven ? y1 : y2

            return (
              <motion.div
                key={index}
                style={{ y: yTransform }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card */}
                  <div className="bg-dark-200 rounded-3xl p-8 border border-primary/20 h-full overflow-hidden relative">
                    {/* Background gradient on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Image Placeholder with Emoji */}
                    <motion.div
                      className="relative w-full h-48 bg-gradient-to-br from-dark-100 to-dark-300 rounded-2xl mb-6 flex items-center justify-center overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.span
                        className="text-7xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        {item.image}
                      </motion.span>

                      {/* Animated overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating particles */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-primary rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            bottom: '10%',
                          }}
                          animate={{
                            y: [-20, -60],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 relative z-10`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-dark-100" size={24} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-primary relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-text-muted relative z-10">
                      {item.description}
                    </p>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow: '0 0 30px rgba(0, 255, 133, 0.4), inset 0 0 30px rgba(0, 255, 133, 0.1)',
                      }}
                    />
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute -top-3 -right-3 bg-primary text-dark-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 border-4 border-primary/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-10 w-24 h-24 border-4 border-accent/20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  )
}
