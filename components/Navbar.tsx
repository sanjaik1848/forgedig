'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, Menu, X, Home, Code, Trophy, Briefcase, BookOpen } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Practice', href: '/practice', icon: Code },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Leaderboard', href: '/practice#leaderboard', icon: Trophy },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-dark-100/80 backdrop-blur-lg border-b border-primary/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="text-primary group-hover:rotate-12 transition-transform" size={32} />
              <span className="text-xl font-bold text-primary">Inai One</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-primary/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href}>
                  <div
                    className="flex items-center gap-3 px-4 py-3 text-text-muted hover:text-primary hover:bg-dark-200 rounded-lg transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </Link>
              )
            })}
            <div className="px-4 pt-4">
              <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
