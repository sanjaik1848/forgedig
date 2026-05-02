'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  CheckCircle,
  Code,
  Smartphone,
  Database,
  Cloud,
  Shield,
  TrendingUp,
  Zap,
  Users,
  Award,
  MessageCircle,
} from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'
import { servicesData } from '../servicesData'

const iconMap: { [key: string]: any } = {
  Code,
  Smartphone,
  Database,
  Cloud,
  Shield,
  TrendingUp,
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    return (
      <main className="relative min-h-screen gradient-bg flex items-center justify-center">
        <AnimatedBackground />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Service Not Found</h1>
          <button
            onClick={() => router.push('/services')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold"
          >
            Back to Services
          </button>
        </div>
      </main>
    )
  }

  const Icon = iconMap[service.icon]

  return (
    <main className="relative min-h-screen gradient-bg">
      <AnimatedBackground />

      <div className="relative z-10 pt-20 pb-20 px-4 sm:px-6">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto mb-6">
          <motion.button
            onClick={() => router.push('/services')}
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </motion.button>
        </div>

        {/* Hero Section */}
        <motion.div
          className="max-w-7xl mx-auto mb-12 sm:mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-glow">
                  <span className="text-primary">{service.title}</span>
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-text-muted mb-6">{service.description}</p>
              <p className="text-base text-text-muted leading-relaxed">{service.overview}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <motion.button
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={20} />
                  Get a Quote
                </motion.button>
                <motion.button
                  className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>
            <motion.div
              className={`relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br ${service.color} rounded-3xl overflow-hidden`}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl">{service.image}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Technologies */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-primary">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                className="px-4 py-2 rounded-full bg-dark-200 border border-primary/20 text-text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, borderColor: 'rgba(0, 255, 133, 0.5)' }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-primary">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-dark-200 rounded-xl p-4 border border-primary/20 flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(0, 255, 133, 0.5)' }}
              >
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-text-muted">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-primary">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-dark-200 rounded-xl p-6 border border-primary/20 relative overflow-hidden group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full`}
                />
                <div className="text-4xl font-bold text-primary/20 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-primary">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.pricing.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`bg-dark-200 rounded-2xl p-6 border-2 ${
                  idx === 1 ? 'border-primary scale-105' : 'border-primary/20'
                } relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: idx === 1 ? 1.05 : 1.03 }}
              >
                {idx === 1 && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-dark-100 text-xs font-bold">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.plan}</h3>
                <div className="text-3xl font-bold text-text-primary mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-text-muted text-sm">
                      <CheckCircle className="text-primary flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 rounded-full font-semibold ${
                    idx === 1
                      ? 'bg-gradient-to-r from-primary to-secondary text-dark-100'
                      : 'border-2 border-primary text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-primary">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-dark-200 rounded-xl p-6 border border-primary/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                <p className="text-text-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-8 sm:p-12 border border-primary/30 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-muted mb-6">
            Let&apos;s discuss your project and bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
            >
              <MessageCircle size={20} />
              Contact Us
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/services')}
            >
              View All Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
