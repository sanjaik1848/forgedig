'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  FileText,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Globe,
} from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Contact Form: ${formData.service || 'General Inquiry'}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message}
    `
    
    // Open default email client
    window.location.href = `mailto:info@techforge.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Show success message
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@techforge.com', 'support@techforge.com'],
      color: 'from-blue-500 to-cyan-500',
      action: () => window.location.href = 'mailto:info@techforge.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211'],
      color: 'from-green-500 to-teal-500',
      action: () => window.location.href = 'tel:+919876543210',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Tech Park, Innovation Street', 'Bangalore, Karnataka 560001'],
      color: 'from-purple-500 to-pink-500',
      action: () => window.open('https://maps.google.com/?q=Tech+Park+Bangalore', '_blank'),
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'from-orange-500 to-yellow-500',
      action: undefined,
    },
  ]

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-[#1877F2]' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-[#1DA1F2]' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-[#0A66C2]' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-[#E4405F]' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'hover:text-[#FF0000]' },
  ]

  const offices = [
    {
      city: 'Bangalore',
      address: 'Tech Park, Innovation Street, Bangalore, Karnataka 560001',
      phone: '+91 98765 43210',
      email: 'bangalore@techforge.com',
      isHeadquarters: true,
    },
    {
      city: 'Mumbai',
      address: 'Business Hub, Marine Drive, Mumbai, Maharashtra 400001',
      phone: '+91 98765 43212',
      email: 'mumbai@techforge.com',
      isHeadquarters: false,
    },
    {
      city: 'Delhi',
      address: 'Corporate Center, Connaught Place, New Delhi 110001',
      phone: '+91 98765 43213',
      email: 'delhi@techforge.com',
      isHeadquarters: false,
    },
  ]

  const services = [
    'Web Development',
    'Mobile App Development',
    'Backend Development',
    'Cloud Solutions',
    'Cybersecurity',
    'Digital Marketing',
    'Other',
  ]

  return (
    <main className="relative min-h-screen gradient-bg">
      <AnimatedBackground />

      <div className="relative z-10 pt-20 pb-20 px-4 sm:px-6">
        {/* Hero Section */}
        <motion.div
          className="max-w-7xl mx-auto text-center mb-12 sm:mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-glow leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-3xl mx-auto px-2">
            Have a question or want to work together? We'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`bg-dark-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20 text-center group hover:border-primary/50 transition-all ${info.action ? 'cursor-pointer' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={info.action}
              >
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold text-primary mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-text-muted">
                    {detail}
                  </p>
                ))}
                {info.action && (
                  <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to {info.title.toLowerCase()}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 sm:mb-16">
          {/* Contact Form */}
          <motion.div
            className="bg-dark-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Send us a Message</h2>

            {submitted ? (
              <motion.div
                className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30 text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircle className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-text-muted">
                  Thank you for contacting us. We'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-muted mb-2">
                      <User className="inline mr-2" size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-muted mb-2">
                      <Mail className="inline mr-2" size={16} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-muted mb-2">
                      <Phone className="inline mr-2" size={16} />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-muted mb-2">
                      <Building className="inline mr-2" size={16} />
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-2">
                    <FileText className="inline mr-2" size={16} />
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-2">
                    <MessageCircle className="inline mr-2" size={16} />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Office Locations */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Our Offices</h2>
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-dark-200 rounded-xl sm:rounded-2xl p-6 border border-primary/20 relative overflow-hidden group hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {office.isHeadquarters && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-dark-100 text-xs font-bold">
                    HQ
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin size={20} />
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Globe className="text-secondary flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm text-text-muted">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-secondary flex-shrink-0" size={16} />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-secondary flex-shrink-0" size={16} />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <div className="bg-dark-200 rounded-xl sm:rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary ${social.color} transition-all`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="max-w-7xl mx-auto bg-dark-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">
            Find Us on Map
          </h2>
          <div className="bg-dark-100 rounded-xl overflow-hidden border border-primary/10">
            <div className="w-full h-64 sm:h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-primary mb-4" size={48} />
                <p className="text-text-muted">
                  🗺️ <span className="text-primary font-semibold">Google Maps Integration</span>
                </p>
                <p className="text-sm text-text-muted mt-2">
                  Add Google Maps iframe or map component here
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
            Quick Questions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { q: 'What are your response times?', a: 'We typically respond within 24 hours on business days.' },
              { q: 'Do you offer free consultations?', a: 'Yes! We offer a free 30-minute consultation for new projects.' },
              { q: 'What payment methods do you accept?', a: 'We accept bank transfers, UPI, credit cards, and online payments.' },
              { q: 'Do you sign NDAs?', a: 'Absolutely! We respect confidentiality and sign NDAs when required.' },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-dark-200 rounded-xl p-4 border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="text-sm font-bold text-primary mb-2">{faq.q}</h4>
                <p className="text-xs text-text-muted">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
