'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  Code,
  Award,
  Clock,
  MapPin,
  IndianRupee,
  Sparkles,
  CheckCircle,
  User,
  Brain,
  Smartphone,
  Database,
  Globe,
  ShoppingCart,
  Rocket,
  CreditCard,
  MessageSquare,
  Mail,
  X,
  TrendingUp,
  Zap,
  Settings,
  Github,
} from 'lucide-react'

export default function InternshipProjectsSection() {
  const [activeTab, setActiveTab] = useState<'free' | 'paid'>('free')
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [selectedInternship, setSelectedInternship] = useState<any>(null)

  const freeProjects = [
    {
      id: 1,
      title: 'Smart Attendance System',
      domain: 'IoT + AI',
      description: 'Develop a face-recognition based attendance system using Python, OpenCV, and machine learning.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Raspberry Pi'],
      difficulty: 'Intermediate',
      duration: '4-6 weeks',
      githubLink: '#',
      icon: Brain,
      color: 'from-purple-600 to-pink-500',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      domain: 'Web Development',
      description: 'Build a full-stack e-commerce website with payment integration, cart management, and admin panel.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      difficulty: 'Advanced',
      duration: '6-8 weeks',
      githubLink: '#',
      icon: ShoppingCart,
      color: 'from-blue-600 to-cyan-500',
    },
    {
      id: 3,
      title: 'Mobile Weather App',
      domain: 'Mobile Development',
      description: 'Create a cross-platform weather application with real-time data and beautiful UI animations.',
      technologies: ['React Native', 'API Integration', 'Redux'],
      difficulty: 'Beginner',
      duration: '3-4 weeks',
      githubLink: '#',
      icon: Smartphone,
      color: 'from-green-600 to-teal-500',
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      domain: 'Data Science',
      description: 'Build an interactive dashboard for visualizing and analyzing large datasets with insights.',
      technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      difficulty: 'Intermediate',
      duration: '4-5 weeks',
      githubLink: '#',
      icon: Database,
      color: 'from-orange-600 to-red-500',
    },
    {
      id: 5,
      title: 'Portfolio Website Builder',
      domain: 'Web Development',
      description: 'Create a drag-and-drop portfolio builder with customizable templates and hosting.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      difficulty: 'Intermediate',
      duration: '5-6 weeks',
      githubLink: '#',
      icon: Globe,
      color: 'from-indigo-600 to-purple-500',
    },
    {
      id: 6,
      title: 'IoT Home Automation',
      domain: 'IoT + Hardware',
      description: 'Design a smart home system to control lights, fans, and appliances via mobile app.',
      technologies: ['Arduino', 'ESP32', 'MQTT', 'Flutter'],
      difficulty: 'Advanced',
      duration: '6-8 weeks',
      githubLink: '#',
      icon: Settings,
      color: 'from-yellow-600 to-orange-500',
    },
  ]

  const premiumInternships = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      duration: '6 Weeks',
      mode: 'Remote',
      price: 499,
      description: 'Work on real client projects using React, Next.js, and modern UI libraries.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
      benefits: ['Live Projects', 'Mentorship', 'Certificate', 'LOR'],
      icon: Code,
      color: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'Data Analyst Intern',
      duration: '1 Month',
      mode: 'Remote',
      price: 999,
      description: 'Analyze real business data, create reports, and build predictive models.',
      skills: ['Python', 'SQL', 'Excel', 'Power BI'],
      benefits: ['Real Data', 'Industry Tools', 'Certificate', 'Portfolio'],
      icon: Database,
      color: 'from-purple-500 to-pink-400',
    },
    {
      id: 3,
      title: 'Machine Learning Intern',
      duration: '2 Months',
      mode: 'Hybrid',
      price: 1499,
      description: 'Build ML models, work on AI projects, and deploy solutions to production.',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'AWS'],
      benefits: ['AI Projects', 'Cloud Deployment', 'Certificate', 'Stipend'],
      icon: Brain,
      color: 'from-green-500 to-emerald-400',
    },
    {
      id: 4,
      title: 'Full Stack Developer Intern',
      duration: '3 Months',
      mode: 'Remote',
      price: 1999,
      description: 'End-to-end development experience with MERN stack on production applications.',
      skills: ['MongoDB', 'Express', 'React', 'Node.js'],
      benefits: ['Full Stack', 'Production Code', 'Certificate', 'Job Referral'],
      icon: Globe,
      color: 'from-orange-500 to-red-400',
    },
    {
      id: 5,
      title: 'Mobile App Developer Intern',
      duration: '6 Weeks',
      mode: 'Remote',
      price: 799,
      description: 'Create cross-platform mobile apps with React Native and publish to app stores.',
      skills: ['React Native', 'JavaScript', 'Firebase', 'Redux'],
      benefits: ['App Publishing', 'Play Store', 'Certificate', 'Portfolio'],
      icon: Smartphone,
      color: 'from-indigo-500 to-blue-400',
    },
    {
      id: 6,
      title: 'DevOps Engineer Intern',
      duration: '2 Months',
      mode: 'Hybrid',
      price: 1299,
      description: 'Learn CI/CD, containerization, cloud deployment, and infrastructure management.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      benefits: ['Cloud Access', 'Real Infrastructure', 'Certificate', 'LOR'],
      icon: Settings,
      color: 'from-teal-500 to-green-400',
    },
  ]

  const handleJoinInternship = (internship: any) => {
    setSelectedInternship(internship)
    setShowPaymentModal(true)
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Briefcase className="text-primary mx-auto" size={56} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Internship & Projects</span> Section
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Work, Learn, and Grow with Real Projects
          </p>
          <p className="text-lg text-text-muted mt-2">
            Choose from live or guided internship options and boost your career
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
              activeTab === 'free'
                ? 'bg-gradient-to-r from-primary to-secondary text-dark-100'
                : 'bg-dark-200 text-text-muted border border-primary/20 hover:border-primary/40'
            }`}
            onClick={() => setActiveTab('free')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Code size={20} />
              Free Internships (Projects)
            </span>
          </motion.button>
          <motion.button
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
              activeTab === 'paid'
                ? 'bg-gradient-to-r from-primary to-secondary text-dark-100'
                : 'bg-dark-200 text-text-muted border border-primary/20 hover:border-primary/40'
            }`}
            onClick={() => setActiveTab('paid')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Sparkles size={20} />
              Premium Internships (Paid)
            </span>
          </motion.button>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'free' ? (
            <motion.div
              key="free"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {freeProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-200 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all group"
                  >
                    {/* Icon & Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                        {project.difficulty}
                      </span>
                    </div>

                    {/* Title & Domain */}
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-sm text-secondary font-semibold mb-3">{project.domain}</p>

                    {/* Description */}
                    <p className="text-text-muted text-sm mb-4 line-clamp-3">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-dark-100 text-xs text-text-muted border border-primary/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                      <Clock size={16} className="text-primary" />
                      <span>{project.duration}</span>
                    </div>

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                      <Award className="text-primary" size={20} />
                      <span className="text-sm font-semibold text-primary">Internship Certificate on Completion</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-2">
                      <motion.button
                        className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Settings size={18} />
                        Work on Project (Free)
                      </motion.button>
                      <motion.button
                        className="w-full px-4 py-3 rounded-lg border border-primary/30 text-primary font-semibold flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={18} />
                        View Requirements
                      </motion.button>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          ) : (
            <motion.div
              key="premium"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {premiumInternships.map((internship, index) => {
                const Icon = internship.icon
                return (
                  <motion.div
                    key={internship.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-200 border border-secondary/20 rounded-2xl p-6 hover:border-secondary/40 transition-all group relative overflow-hidden"
                  >
                    {/* Premium Badge */}
                    <div className="absolute top-4 right-4">
                      <Sparkles className="text-secondary" size={24} />
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${internship.color} flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-secondary mb-3">{internship.title}</h3>

                    {/* Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <Clock size={16} className="text-secondary" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <MapPin size={16} className="text-secondary" />
                        <span>{internship.mode}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-muted text-sm mb-4">{internship.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {internship.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-dark-100 text-xs text-text-muted border border-secondary/10">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="mb-4 space-y-2">
                      {internship.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-text-muted">
                          <CheckCircle size={16} className="text-secondary" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                      <div className="flex items-center gap-1">
                        <IndianRupee className="text-secondary" size={24} />
                        <span className="text-3xl font-bold text-secondary">{internship.price}</span>
                      </div>
                      <motion.button
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-dark-100 font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleJoinInternship(internship)}
                      >
                        💰 Join Now
                      </motion.button>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              className="bg-dark-200 border border-primary/30 rounded-2xl p-8 max-w-md w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                  <IndianRupee className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Payment Integration</h3>
                <p className="text-text-muted">Ready to join {selectedInternship?.title}?</p>
              </div>

              <div className="bg-dark-100 rounded-xl p-6 mb-6 border border-primary/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-text-muted">Internship Fee</span>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="text-secondary" size={20} />
                    <span className="text-2xl font-bold text-secondary">{selectedInternship?.price}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-sm text-text-muted text-center">
                    🔌 <span className="text-primary font-semibold">Connect Razorpay / PhonePe Business API here</span>
                  </p>
                  <p className="text-xs text-text-muted text-center mt-2">
                    Payment gateway integration placeholder
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  className="flex-1 px-6 py-3 rounded-lg border border-primary/30 text-text-muted font-semibold hover:bg-dark-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPaymentModal(false)}
                >
                  Cancel
                </motion.button>
                <motion.button
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-dark-100 font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Pay
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
