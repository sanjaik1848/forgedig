'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { GraduationCap, Code, Briefcase, Rocket } from 'lucide-react'

export default function HighlightsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const router = useRouter()

  const features = [
    {
      icon: GraduationCap,
      title: 'Learn Programming',
      description: 'Master coding with expert-led courses and hands-on projects',
      color: 'from-primary to-secondary',
      direction: 'left',
      link: '/courses',
    },
    {
      icon: Code,
      title: 'Practice Coding',
      description: 'Solve real-world problems with our interactive coding platform',
      color: 'from-secondary to-accent',
      direction: 'bottom',
      link: '/practice',
    },
    {
      icon: Briefcase,
      title: 'Get Internships',
      description: 'Gain practical experience with industry internship opportunities',
      color: 'from-accent to-primary',
      direction: 'top',
      link: '/internships',
    },
    {
      icon: Rocket,
      title: 'Business Solutions',
      description: 'Transform your business with our cutting-edge IT services',
      color: 'from-primary to-accent',
      direction: 'right',
      link: '/services',
    },
  ]

  const getInitialPosition = (direction: string) => {
    switch (direction) {
      case 'left': return { x: -100, y: 0 }
      case 'right': return { x: 100, y: 0 }
      case 'top': return { x: 0, y: -100 }
      case 'bottom': return { x: 0, y: 100 }
      default: return { x: 0, y: 0 }
    }
  }

  return (
    <section ref={ref} className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 text-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-primary">Tech Forge?</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const initialPos = getInitialPosition(feature.direction)
            
            return (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ ...initialPos, opacity: 0 }}
                animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => router.push(feature.link)}
              >
                <motion.div
                  className="bg-dark-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-primary/20 h-full relative overflow-hidden"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 133, 0.5)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
                  
                  {/* Image placeholder with icon */}
                  <motion.div
                    className="relative w-full h-28 sm:h-32 bg-gradient-to-br from-dark-100 to-dark-300 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Animated gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20`}
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    
                    {/* Icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Icon className="text-primary" size={40} />
                      </motion.div>
                    </div>

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
                        repeatDelay: 1,
                      }}
                    />
                  </motion.div>
                  
                  {/* Icon badge */}
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 relative z-10`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-dark-100" size={24} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-primary relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted relative z-10">
                    {feature.description}
                  </p>

                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 255, 133, 0.5), inset 0 0 20px rgba(0, 255, 133, 0.1)',
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
