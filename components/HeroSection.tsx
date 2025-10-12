'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useRouter } from 'next/navigation'
import { Code2, Settings, Battery, Smartphone, Brain, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const router = useRouter()
  
  const floatingIcons = [
    { Icon: Code2, delay: 0, x: -100, y: -50 },
    { Icon: Settings, delay: 0.5, x: 100, y: -80 },
    { Icon: Battery, delay: 1, x: -80, y: 50 },
    { Icon: Smartphone, delay: 1.5, x: 120, y: 60 },
    { Icon: Brain, delay: 2, x: 0, y: -100 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 text-primary opacity-20"
            initial={{ x, y, opacity: 0 }}
            animate={{
              x: [x, x + 20, x - 20, x],
              y: [y, y - 30, y + 10, y],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={48} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Animated Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-glow leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Welcome to{' '}
          <span className="text-primary">Tech Forge</span>
        </motion.h1>

        {/* Typewriter Animation */}
        <motion.div
          className="text-base sm:text-xl md:text-2xl lg:text-4xl font-medium mb-8 sm:mb-10 lg:mb-12 h-16 sm:h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              'Learn. Code. Build. Grow — All in One Place.',
              2000,
              'Master Programming Skills',
              2000,
              'Get Real-World Experience',
              2000,
              'Launch Your Tech Career',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-accent"
            repeat={Infinity}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full gradient-primary text-dark-100 font-semibold text-base sm:text-lg shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/courses')}
          >
            <span className="relative z-10">Start Learning</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>

          <motion.button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-primary text-primary font-semibold text-base sm:text-lg glow-border-hover transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/services')}
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-primary" size={40} />
        </motion.div>
      </div>
    </section>
  )
}
