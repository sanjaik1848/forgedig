'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Mail, Lock, User, Phone, Building, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long')
      setIsLoading(false)
      return
    }

    if (!acceptTerms) {
      setError('Please accept the Terms of Service and Privacy Policy')
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // For demo purposes, create account
      // In production, this would create account in your backend
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', formData.email)
      localStorage.setItem('userName', `${formData.firstName} ${formData.lastName}`)

      setSuccess(true)
      setTimeout(() => {
        router.push('/')
      }, 1500)
    } catch (err) {
      setError('Failed to create account. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (success) {
    return (
      <main className="relative min-h-screen gradient-bg flex items-center justify-center">
        <AnimatedBackground />
        <motion.div
          className="bg-dark-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-primary/20 text-center max-w-md mx-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <CheckCircle className="text-dark-100" size={32} />
          </motion.div>
          <h2 className="text-2xl font-bold text-primary mb-2">Account Created!</h2>
          <p className="text-text-muted">Welcome to Tech Forge! Redirecting...</p>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen gradient-bg flex items-center justify-center">
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-lg mx-4">
        <motion.div
          className="bg-dark-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-primary/20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <User className="text-dark-100" size={32} />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Create Account</h1>
            <p className="text-text-muted">Join Tech Forge and start your learning journey</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-500 flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle size={20} />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-text-muted mb-2">
                  <User className="inline mr-2" size={16} />
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-muted mb-2">
                  <User className="inline mr-2" size={16} />
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-text-muted mb-2">
                <Mail className="inline mr-2" size={16} />
                Email Address *
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

            {/* Phone and Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-text-muted mb-2">
                  <Phone className="inline mr-2" size={16} />
                  Phone Number
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
                  Company/Organization
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

            {/* Password Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-muted mb-2">
                  <Lock className="inline mr-2" size={16} />
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-muted mb-2">
                  <Lock className="inline mr-2" size={16} />
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 rounded border-primary/30"
                required
              />
              <label htmlFor="acceptTerms" className="text-sm text-text-muted">
                I agree to the{' '}
                <button
                  type="button"
                  className="text-primary hover:text-secondary transition-colors"
                  onClick={() => router.push('/terms')}
                >
                  Terms of Service
                </button>
                {' '}and{' '}
                <button
                  type="button"
                  className="text-primary hover:text-secondary transition-colors"
                  onClick={() => router.push('/privacy')}
                >
                  Privacy Policy
                </button>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              whileHover={!isLoading ? { scale: 1.02 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-dark-100 border-t-transparent rounded-full animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={20} />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-dark-200 text-text-muted">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Signup Buttons */}
          <div className="space-y-3">
            <motion.button
              className="w-full py-3 px-4 rounded-lg border border-primary/30 text-text-muted hover:border-primary/50 hover:bg-dark-100 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </motion.button>

            <motion.button
              className="w-full py-3 px-4 rounded-lg border border-primary/30 text-text-muted hover:border-primary/50 hover:bg-dark-100 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with GitHub
            </motion.button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-text-muted">
              Already have an account?{' '}
              <button
                type="button"
                className="text-primary hover:text-secondary font-semibold transition-colors"
                onClick={() => router.push('/login')}
              >
                Sign in here
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
