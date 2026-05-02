'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Code2, Menu, X, Home, Code, Trophy, Briefcase, BookOpen, GraduationCap, Terminal, Award, LogIn, LogOut, User, Github } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [content, setContent] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status on component mount
    const authStatus = localStorage.getItem('isAuthenticated')
    const email = localStorage.getItem('userEmail')

    setIsAuthenticated(authStatus === 'true')
    setUserEmail(email || '')

    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data.navbar))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminRole')
    setIsAuthenticated(false)
    setUserEmail('')
    router.push('/')
  }

  const iconMap: { [key: string]: any } = {
    Home, Briefcase, BookOpen, Code, Terminal, Trophy, Award
  }

  const navItems = content?.links?.map((link: any) => ({
    ...link,
    icon: iconMap[link.icon] || Code
  })) || [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Practice', href: '/practice', icon: Code },
    { name: 'IDE', href: '/ide', icon: Terminal },
    { name: 'Assessment', href: '/assessment', icon: Trophy },
    { name: 'Internships', href: '/internships', icon: Briefcase },
    { name: 'Certificates', href: '/certificates', icon: Award },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-dark-100/80 backdrop-blur-lg border-b border-primary/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="text-primary group-hover:rotate-12 transition-transform" size={32} />
              <span className="text-xl font-bold text-primary">{content?.brandName || 'Forge'}</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors cursor-pointer py-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    <span className="font-medium text-sm xl:text-base">{item.name}</span>
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                {/* User Menu */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <User className="text-dark-100" size={16} />
                  </div>
                  <span className="text-sm text-text-muted max-w-[120px] truncate">{userEmail}</span>
                </div>

                {/* Logout Button */}
                <motion.button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut size={16} />
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <motion.button
                    className="px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LogIn size={16} />
                    Login
                  </motion.button>
                </Link>

                <Link href="/signup">
                  <motion.button
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                    className="flex items-center gap-3 px-4 py-3 text-text-muted hover:text-primary hover:bg-dark-200 rounded-lg transition-colors cursor-pointer mx-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </Link>
              )
            })}

            {/* Mobile Auth Section */}
            <div className="px-4 pt-4 space-y-3 mx-2">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-3 p-3 bg-dark-200 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <User className="text-dark-100" size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-text-primary truncate">
                        {localStorage.getItem('userName') || userEmail}
                      </div>
                      <div className="text-xs text-text-muted truncate">{userEmail}</div>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="w-full px-4 py-3 rounded-full border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <LogOut size={16} />
                    Logout
                  </motion.button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <motion.button
                      className="w-full px-4 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <LogIn size={16} />
                      Login
                    </motion.button>
                  </Link>

                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <motion.button
                      className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign Up
                    </motion.button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
