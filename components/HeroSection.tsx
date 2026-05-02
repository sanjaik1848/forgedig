'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Code2, Settings, Battery, Smartphone, Brain, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const router = useRouter()
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data.hero))
  }, [])
  
  const floatingIcons = [
    { Icon: Code2, delay: 0, x: -100, y: -50 },
    { Icon: Settings, delay: 0.5, x: 100, y: -80 },
    { Icon: Battery, delay: 1, x: -80, y: 50 },
    { Icon: Smartphone, delay: 1.5, x: 120, y: 60 },
    { Icon: Brain, delay: 2, x: 0, y: -100 },
  ]

  if (!content) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 text-primary/30"
            initial={{ x, y, opacity: 0 }}
            animate={{
              x: [x, x + 30, x - 10, x],
              y: [y, y - 40, y + 20, y],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12 + index * 2,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={index % 2 === 0 ? 56 : 40} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 tracking-wide">
            {content.badge}
          </span>
          
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 text-glow leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {content.title.split(' ').map((word: string, i: number) => (
              <span key={i} className={i >= 2 ? "bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent" : ""}>
                {word}{' '}
                {i === 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Typewriter Animation */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-12 text-text-muted h-16 sm:h-20 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={content.typewriter.flatMap((text: string) => [text, 2000])}
              wrapper="span"
              speed={50}
              className="text-text-primary"
              repeat={Infinity}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="w-full sm:w-auto px-10 py-4 rounded-full gradient-primary text-dark-100 font-bold text-lg shadow-[0_0_20px_rgba(0,255,133,0.3)] hover:shadow-[0_0_30px_rgba(0,255,133,0.5)] transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/courses')}
            >
              <span className="relative z-10 flex items-center gap-2">
                {content.ctaPrimary}
                <Code2 size={20} />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </motion.button>

            <motion.button
              className="w-full sm:w-auto px-10 py-4 rounded-full border border-primary/30 text-text-primary font-bold text-lg backdrop-blur-md hover:bg-primary/5 hover:border-primary/60 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/services')}
            >
              {content.ctaSecondary}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs text-primary font-medium uppercase tracking-[0.2em]">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-primary" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
