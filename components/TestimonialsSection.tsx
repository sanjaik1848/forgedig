'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      image: '👩‍💻',
      quote: 'Inai One transformed my career! The hands-on projects and expert mentorship helped me land my dream job as a Full Stack Developer.',
      type: 'student',
    },
    {
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'Digital Innovations Ltd.',
      image: '👨‍💼',
      quote: 'Outstanding IT services! Their team delivered a cutting-edge web solution that increased our online presence by 300%. Highly recommended!',
      type: 'client',
    },
    {
      name: 'Ananya Patel',
      role: 'IoT Intern',
      company: 'Inai One',
      image: '👩‍🔬',
      quote: 'The IoT internship program was incredible. I built real-world projects and gained practical skills that made me industry-ready.',
      type: 'student',
    },
    {
      name: 'Vikram Singh',
      role: 'Marketing Director',
      company: 'Growth Ventures',
      image: '👨‍💻',
      quote: 'Their digital marketing expertise helped us achieve 5x ROI. Professional, creative, and results-driven team!',
      type: 'client',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What Our <span className="text-primary">Community</span> Says
        </motion.h2>

        <div className="relative">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-200 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden"
            >
              {/* Floating quote icons */}
              <motion.div
                className="absolute top-8 left-8 text-primary/20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Quote size={60} />
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-8 text-secondary/20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Quote size={60} className="rotate-180" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <motion.div
                  className="flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl border-4 border-primary/30 glow-border">
                    {testimonials[currentIndex].image}
                  </div>
                </motion.div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <motion.p
                    className="text-xl md:text-2xl text-text-primary mb-6 leading-relaxed italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-2xl font-bold text-primary mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-text-muted">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </p>
                    <div className="mt-3">
                      <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        testimonials[currentIndex].type === 'student' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary/20 text-secondary'
                      }`}>
                        {testimonials[currentIndex].type === 'student' ? '🎓 Student' : '💼 Client'}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative glow */}
              <motion.div
                className="absolute inset-0 opacity-0"
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 255, 133, 0.2), transparent 70%)',
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-dark-100 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-dark-100 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
