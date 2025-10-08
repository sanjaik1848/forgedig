'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Shield,
  Zap,
  TrendingUp,
  Users,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Scalable Architecture'],
      color: 'from-blue-500 to-cyan-500',
      image: '🌐',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
      color: 'from-purple-500 to-pink-500',
      image: '📱',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust backend systems with databases, APIs, and server infrastructure',
      features: ['RESTful APIs', 'GraphQL', 'Database Design', 'Microservices'],
      color: 'from-green-500 to-teal-500',
      image: '⚙️',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and management on AWS, Azure, and Google Cloud',
      features: ['Cloud Migration', 'DevOps', 'CI/CD Pipeline', 'Auto Scaling'],
      color: 'from-orange-500 to-yellow-500',
      image: '☁️',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security Audit', 'Penetration Testing', 'Data Encryption', 'Compliance'],
      color: 'from-red-500 to-pink-500',
      image: '🔒',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and digital advertising strategies',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'Analytics'],
      color: 'from-indigo-500 to-purple-500',
      image: '📈',
    },
  ]

  const clients = [
    { name: 'TechCorp', logo: '🏢', industry: 'Technology' },
    { name: 'StartupX', logo: '🚀', industry: 'Startup' },
    { name: 'FinanceHub', logo: '💰', industry: 'Finance' },
    { name: 'HealthCare+', logo: '🏥', industry: 'Healthcare' },
    { name: 'EduLearn', logo: '📚', industry: 'Education' },
    { name: 'RetailPro', logo: '🛍️', industry: 'Retail' },
    { name: 'FoodChain', logo: '🍔', industry: 'Food & Beverage' },
    { name: 'TravelGo', logo: '✈️', industry: 'Travel' },
    { name: 'MediaHub', logo: '📺', industry: 'Media' },
    { name: 'GreenEnergy', logo: '🌱', industry: 'Energy' },
  ]

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: Briefcase },
    { value: '300+', label: 'Happy Clients', icon: Users },
    { value: '50+', label: 'Team Members', icon: Users },
    { value: '98%', label: 'Client Satisfaction', icon: Star },
  ]

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your business needs and goals' },
    { step: '02', title: 'Planning', description: 'Creating a detailed project roadmap' },
    { step: '03', title: 'Development', description: 'Building your solution with best practices' },
    { step: '04', title: 'Testing', description: 'Rigorous quality assurance and testing' },
    { step: '05', title: 'Deployment', description: 'Launching your project successfully' },
    { step: '06', title: 'Support', description: 'Ongoing maintenance and support' },
  ]

  return (
    <main className="relative min-h-screen gradient-bg">
      <AnimatedBackground />

      <div className="relative z-10 pt-12 pb-20">
        {/* Hero Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 text-center mb-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-glow"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-primary">IT Services</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto">
            Comprehensive IT solutions to transform your business and accelerate growth
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-dark-200 rounded-2xl p-6 border border-primary/20 text-center group hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="mx-auto text-primary mb-3 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What We <span className="text-primary">Offer</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className="bg-dark-200 rounded-3xl p-8 border border-primary/20 group hover:border-primary/50 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                >
                  {/* Image Placeholder */}
                  <motion.div
                    className="relative w-full h-40 bg-gradient-to-br from-dark-100 to-dark-300 rounded-2xl mb-6 overflow-hidden flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}
                      animate={{ opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.span
                      className="text-7xl z-10"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {service.image}
                    </motion.span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                        <CheckCircle className="text-primary flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span className="text-primary">Process</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="bg-dark-200 rounded-2xl p-6 border border-primary/20 relative overflow-hidden group hover:border-primary/50 transition-all"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2 text-text-primary">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Logos Slideshow */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by <span className="text-primary">Leading Companies</span>
          </motion.h2>

          <div className="relative overflow-hidden">
            {/* Slideshow Container */}
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {[...clients, ...clients, ...clients].map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 h-40 bg-dark-200 rounded-2xl border border-primary/20 flex flex-col items-center justify-center gap-3 group hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -10 }}
                >
                  <motion.div
                    className="text-6xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {client.logo}
                  </motion.div>
                  <div className="text-center">
                    <div className="font-bold text-text-primary text-lg">{client.name}</div>
                    <div className="text-sm text-text-muted">{client.industry}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark-100 to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark-100 to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-12 border border-primary/30">
            <Zap className="mx-auto text-primary mb-6" size={64} />
            <h2 className="text-4xl font-bold mb-4 text-glow">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-muted mb-8">
              Let's discuss how we can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
