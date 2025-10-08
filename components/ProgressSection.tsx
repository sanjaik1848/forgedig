'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Award } from 'lucide-react'

export default function ProgressSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 30)
      return () => clearInterval(interval)
    }
  }, [isInView])

  const progressData = [
    { day: 'Mon', solved: 12 },
    { day: 'Tue', solved: 18 },
    { day: 'Wed', solved: 15 },
    { day: 'Thu', solved: 22 },
    { day: 'Fri', solved: 25 },
    { day: 'Sat', solved: 30 },
    { day: 'Sun', solved: 20 },
  ]

  const maxSolved = Math.max(...progressData.map(d => d.solved))

  return (
    <section ref={ref} className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Progress Graph */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-dark-200 rounded-2xl p-8 border border-primary/20 glow-border"
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">Weekly Progress</h3>
            
            {/* Bar Chart */}
            <div className="flex items-end justify-between h-64 gap-4">
              {progressData.map((data, index) => (
                <motion.div
                  key={data.day}
                  className="flex-1 flex flex-col items-center gap-2"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: 'auto' } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg relative group cursor-pointer"
                    style={{ height: `${(data.solved / maxSolved) * 100}%` }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {data.solved}
                    </span>
                  </motion.div>
                  <span className="text-text-muted text-sm">{data.day}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{progress}%</div>
                <div className="text-sm text-text-muted">Completion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">142</div>
                <div className="text-sm text-text-muted">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">28</div>
                <div className="text-sm text-text-muted">Day Streak</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Certificate Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-glow">
              Track Your <span className="text-primary">Learning Journey</span>
            </h2>
            
            <p className="text-xl text-text-muted leading-relaxed">
              Visualize your coding progress and earn verified Inai One certificates instantly. 
              Build your portfolio with industry-recognized credentials.
            </p>

            {/* Certificate Mockup */}
            <motion.div
              className="relative bg-gradient-to-br from-dark-200 to-dark-100 rounded-2xl p-8 border-2 border-primary/30 overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 255, 133, 0.3)',
                  '0 0 40px rgba(0, 255, 133, 0.5)',
                  '0 0 20px rgba(0, 255, 133, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="absolute top-4 right-4">
                <Award className="text-primary" size={48} />
              </div>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-primary">Certificate of Completion</h4>
                <p className="text-text-muted">This certifies that</p>
                <p className="text-3xl font-bold">Your Name</p>
                <p className="text-text-muted">has successfully completed</p>
                <p className="text-xl font-semibold text-secondary">Full Stack Development Course</p>
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-sm text-text-muted">Inai One • 2025</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
