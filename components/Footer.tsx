'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram, ExternalLink } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Practice', href: '#' },
    { name: 'Internships', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', color: 'hover:text-[#0A66C2]' },
    { icon: Youtube, href: '#', color: 'hover:text-[#FF0000]' },
    { icon: Instagram, href: '#', color: 'hover:text-[#E4405F]' },
  ]

  return (
    <footer className="relative bg-dark-100 border-t-2 border-primary/30 mt-20 z-10">
      {/* Top glow effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-3xl font-bold mb-4 text-glow"
              animate={{
                textShadow: [
                  '0 0 10px rgba(0, 255, 133, 0.5)',
                  '0 0 20px rgba(0, 255, 133, 0.8)',
                  '0 0 10px rgba(0, 255, 133, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary">Inai One</span>
            </motion.h3>
            <p className="text-text-muted mb-4">
              Empowering Students & Businesses with cutting-edge technology education and solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary ${social.color} transition-all glow-border-hover`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-muted">
                <Mail className="text-primary flex-shrink-0 mt-1" size={18} />
                <a href="mailto:info@inaione.com" className="hover:text-primary transition-colors">
                  info@inaione.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted">
                <Phone className="text-primary flex-shrink-0 mt-1" size={18} />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                <span>
                  Tech Park, Innovation Street<br />
                  Bangalore, Karnataka 560001
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-4 text-accent">Stay Updated</h4>
            <p className="text-text-muted mb-4">
              Subscribe to get the latest courses and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-dark-200 border border-primary/30 text-text-primary focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-primary/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-text-muted">
            © 2025 <span className="text-primary font-semibold">Inai One</span>. Empowering Students & Businesses.
          </p>
          <p className="text-text-muted text-sm mt-2">
            Made with <span className="text-red-500">❤️</span> for the future of technology
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </footer>
  )
}
