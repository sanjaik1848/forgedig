'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Cpu, Layers, TrendingUp, Globe, BarChart, Search, Megaphone } from 'lucide-react'

export default function InternshipServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const internships = [
    {
      title: 'IoT Development',
      description: 'Build smart devices and IoT solutions',
      duration: '3 Months',
      icon: Cpu,
      color: 'from-primary to-secondary',
    },
    {
      title: 'Full Stack Development',
      description: 'Master frontend and backend technologies',
      duration: '6 Months',
      icon: Layers,
      color: 'from-secondary to-accent',
    },
    {
      title: 'Digital Marketing',
      description: 'Learn SEO, SEM, and social media strategies',
      duration: '3 Months',
      icon: TrendingUp,
      color: 'from-accent to-primary',
    },
  ]

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications',
      icon: Globe,
      color: 'text-primary',
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology solutions',
      icon: BarChart,
      color: 'text-secondary',
    },
    {
      title: 'SEO Services',
      description: 'Boost your online visibility',
      icon: Search,
      color: 'text-accent',
    },
    {
      title: 'Digital Marketing',
      description: 'Grow your brand online',
      icon: Megaphone,
      color: 'text-primary',
    },
  ]

  return (
    <section ref={ref} className="relative py-20 px-4 z-10">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'linear-gradient(90deg, rgba(0,255,133,0.1) 0%, rgba(13,148,136,0.1) 100%)',
            'linear-gradient(90deg, rgba(13,148,136,0.1) 0%, rgba(34,211,238,0.1) 100%)',
            'linear-gradient(90deg, rgba(34,211,238,0.1) 0%, rgba(0,255,133,0.1) 100%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary">Internships</span> & <span className="text-secondary">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Internships */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-primary">Internship Programs</h3>
            <div className="space-y-6">
              {internships.map((internship, index) => {
                const Icon = internship.icon
                const isFlipped = flippedCard === index

                return (
                  <motion.div
                    key={index}
                    className="relative h-48 cursor-pointer"
                    style={{ perspective: '1000px' }}
                    onHoverStart={() => setFlippedCard(index)}
                    onHoverEnd={() => setFlippedCard(null)}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div
                      className="relative w-full h-full"
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Front */}
                      <div
                        className="absolute inset-0 bg-dark-200 rounded-2xl p-6 border border-primary/20 flex items-center gap-6"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${internship.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="text-dark-100" size={32} />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold mb-2">{internship.title}</h4>
                          <p className="text-text-muted">{internship.description}</p>
                          <p className="text-primary mt-2 font-semibold">{internship.duration}</p>
                        </div>
                      </div>

                      {/* Back */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${internship.color} rounded-2xl p-6 flex items-center justify-center`}
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                        <motion.button
                          className="px-8 py-3 bg-dark-100 text-white rounded-full font-semibold text-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Services */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-secondary">Business Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <motion.div
                    key={index}
                    className="bg-dark-200 rounded-2xl p-6 border border-primary/20 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 133, 0.5)' }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ y: -5 }}
                    >
                      <Icon className={`${service.color} mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,255,133,0.5)]`} size={40} />
                      <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                      <p className="text-text-muted text-sm">{service.description}</p>
                    </motion.div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ boxShadow: '0 0 20px rgba(0, 255, 133, 0.3)' }}
                    />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
