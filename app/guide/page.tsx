'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Code, 
  Rocket, 
  CreditCard, 
  Users, 
  CheckCircle, 
  Lightbulb,
  FileText,
  Sparkles,
  TrendingUp,
  Settings,
  Database,
  MessageSquare,
} from 'lucide-react'

export default function GuidePage() {
  const sections = [
    {
      title: 'Free Projects Section',
      icon: Rocket,
      color: 'from-blue-500 to-purple-600',
      items: [
        'Project Name: [Placeholder_Project_Name]',
        'Domain: [Placeholder_Domain]',
        'Tech Stack: [Tech1, Tech2, Tech3, Tech4]',
        'Duration: [Placeholder_Duration]',
        'Difficulty: [Beginner/Intermediate/Advanced]',
        'Description: [Placeholder_Description]',
        'Mentor: [Placeholder_Mentor]',
        'Mode: [Remote/Hybrid]',
        'Certificate: Yes/No',
      ],
    },
    {
      title: 'Paid Internships Section',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-600',
      items: [
        'Role: [Placeholder_Role]',
        'Department: [Web Dev/Data Science/IoT/AI]',
        'Duration: [Placeholder_Duration]',
        'Fee: ₹[Placeholder_Price]',
        'Description: [Placeholder_Description]',
        'Mode: [Remote/Hybrid/Onsite]',
        'Skills: [Skill1, Skill2, Skill3, Skill4]',
        'Benefits: [Benefit1, Benefit2, Benefit3]',
        'Mentor: [Placeholder_Mentor]',
      ],
    },
  ]

  const examples = [
    {
      type: 'Free Project',
      title: 'Smart Attendance System',
      details: [
        'Domain: IoT + AI',
        'Duration: 4 Weeks',
        'Difficulty: Intermediate',
        'Tech: Python, OpenCV, TensorFlow',
        'Mode: Remote',
      ],
      color: 'border-blue-500',
    },
    {
      type: 'Paid Internship',
      title: 'Full Stack Developer',
      details: [
        'Department: Web Development',
        'Duration: 8 Weeks',
        'Fee: ₹999',
        'Skills: React, Node.js, MongoDB',
        'Mode: Remote',
      ],
      color: 'border-purple-500',
    },
  ]

  const features = [
    {
      icon: Code,
      title: 'Add New Projects',
      description: 'Edit freeProjects array in InternshipProjectsSection.tsx',
      color: 'text-blue-500',
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Integrate Razorpay/PhonePe in payment modal',
      color: 'text-purple-500',
    },
    {
      icon: Users,
      title: 'Student Dashboard',
      description: 'Track progress, tasks, and certificates',
      color: 'text-green-500',
    },
    {
      icon: Settings,
      title: 'Admin Panel',
      description: 'Manage projects, approve submissions, send certificates',
      color: 'text-orange-500',
    },
    {
      icon: MessageSquare,
      title: 'Mentor Chat',
      description: 'Real-time communication with mentors',
      color: 'text-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Analytics',
      description: 'Track payments, enrollments, and revenue',
      color: 'text-pink-500',
    },
  ]

  return (
    <div className="min-h-screen bg-dark-100 pt-20 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <BookOpen className="text-primary mx-auto" size={64} />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Internship Section
            </span>{' '}
            <span className="text-primary">Guide</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Complete guide to customize and manage your Internship & Projects section
          </p>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">📋 Overview</h2>
          <p className="text-text-muted mb-4">
            The Internship & Projects section has <strong className="text-primary">two tabs</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark-200/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="text-blue-500" size={28} />
                <h3 className="text-xl font-bold text-blue-400">Free Projects</h3>
              </div>
              <p className="text-text-muted text-sm">
                Students work on projects for FREE and earn certificates upon completion.
              </p>
            </div>
            <div className="bg-dark-200/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-purple-500" size={28} />
                <h3 className="text-xl font-bold text-purple-400">Paid Internships</h3>
              </div>
              <p className="text-text-muted text-sm">
                Students pay a fee and get mentorship, live projects, certificates, and LOR.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Placeholders */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-accent" size={32} />
            <h2 className="text-3xl font-bold text-primary">All Placeholders</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-200 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-muted text-sm">
                        <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="font-mono">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Examples */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-secondary" size={32} />
            <h2 className="text-3xl font-bold text-primary">Examples</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-dark-200 border-2 ${example.color} rounded-2xl p-6`}
              >
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                  {example.type}
                </span>
                <h3 className="text-xl font-bold text-primary mt-4 mb-3">{example.title}</h3>
                <ul className="space-y-2">
                  {example.details.map((detail, i) => (
                    <li key={i} className="text-text-muted text-sm">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features to Implement */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Settings className="text-accent" size={32} />
            <h2 className="text-3xl font-bold text-primary">Features to Implement</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-dark-200 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all"
                >
                  <Icon className={`${feature.color} mb-4`} size={32} />
                  <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-text-muted text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* How to Add */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-200 border border-primary/20 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">🔧 How to Add New Items</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-3">Adding a Free Project</h3>
              <div className="bg-dark-100 rounded-lg p-4 border border-primary/10">
                <p className="text-text-muted text-sm mb-2">
                  <strong className="text-primary">File:</strong> components/InternshipProjectsSection.tsx
                </p>
                <p className="text-text-muted text-sm mb-3">
                  <strong className="text-primary">Location:</strong> freeProjects array (around line 35)
                </p>
                <pre className="bg-dark-200 p-4 rounded-lg overflow-x-auto text-xs text-text-muted border border-primary/10">
{`{
  id: 7,
  projectName: 'Your Project Name',
  domain: 'Your Domain',
  techStack: ['Tech1', 'Tech2', 'Tech3'],
  duration: '4 Weeks',
  difficulty: 'Intermediate',
  description: 'Project description',
  mentor: '[Mentor Name]',
  mode: 'Remote',
  certificate: true,
  icon: Brain,
  color: 'from-purple-600 to-pink-500',
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary mb-3">Adding a Paid Internship</h3>
              <div className="bg-dark-100 rounded-lg p-4 border border-primary/10">
                <p className="text-text-muted text-sm mb-2">
                  <strong className="text-primary">File:</strong> components/InternshipProjectsSection.tsx
                </p>
                <p className="text-text-muted text-sm mb-3">
                  <strong className="text-primary">Location:</strong> paidInternships array (around line 115)
                </p>
                <pre className="bg-dark-200 p-4 rounded-lg overflow-x-auto text-xs text-text-muted border border-primary/10">
{`{
  id: 7,
  role: 'Your Internship Role',
  department: 'Your Department',
  duration: '8 Weeks',
  fee: 999,
  description: 'What intern will learn',
  mode: 'Remote',
  certificate: true,
  mentor: '[Mentor Name]',
  skills: ['Skill1', 'Skill2', 'Skill3'],
  benefits: ['Benefit1', 'Benefit2'],
  icon: Globe,
  color: 'from-blue-500 to-cyan-400',
}`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Payment Integration */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="text-purple-500" size={32} />
            <h2 className="text-3xl font-bold text-purple-400">Payment Integration</h2>
          </div>
          
          <p className="text-text-muted mb-4">
            Currently shows placeholder: <strong className="text-primary">&quot;🔌 Integrate with Razorpay / PhonePe / Paytm Gateway Here&quot;</strong>
          </p>
          
          <div className="bg-dark-200/50 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-secondary mb-3">To Integrate Razorpay:</h3>
            <ol className="space-y-2 text-text-muted text-sm list-decimal list-inside">
              <li>Sign up at <a href="https://razorpay.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">razorpay.com</a></li>
              <li>Get your API Key and Secret</li>
              <li>Add Razorpay script to app/layout.tsx</li>
              <li>Update payment modal button action in InternshipProjectsSection.tsx</li>
              <li>Test with test mode keys before going live</li>
            </ol>
          </div>
        </motion.div>
      </section>

      {/* Quick Checklist */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-200 border border-primary/20 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">✅ Quick Start Checklist</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle size={20} />
                <span className="text-text-muted">Internship section created</span>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle size={20} />
                <span className="text-text-muted">Free projects with examples</span>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle size={20} />
                <span className="text-text-muted">Paid internships with examples</span>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle size={20} />
                <span className="text-text-muted">Payment modal placeholder</span>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle size={20} />
                <span className="text-text-muted">Responsive design</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-text-muted">
                <div className="w-5 h-5 rounded border-2 border-primary/30" />
                <span>Integrate payment gateway</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <div className="w-5 h-5 rounded border-2 border-primary/30" />
                <span>Create project detail pages</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <div className="w-5 h-5 rounded border-2 border-primary/30" />
                <span>Build student dashboard</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <div className="w-5 h-5 rounded border-2 border-primary/30" />
                <span>Add admin panel</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <div className="w-5 h-5 rounded border-2 border-primary/30" />
                <span>Certificate generation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
