'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  ChevronLeft,
  ChevronRight,
  Terminal,
  BookOpen,
  Code,
  Trophy,
  Briefcase,
  Award,
  Play,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

/* ─────────────────────────── UNIQUE MINI-ANIMATIONS ─────────────────────── */

// 1. IDE – typing code animation
function IDEPreview() {
  const lines = [
    { text: 'function', color: 'text-[#22D3EE]', rest: ' greet(name) {' },
    { text: '  return', color: 'text-[#00FF85]', rest: ' `Hello, ${name}!`' },
    { text: '}', color: 'text-white', rest: '' },
    { text: '', color: '', rest: '' },
    { text: 'console', color: 'text-[#A78BFA]', rest: '.log(greet("Forge"))' },
  ]
  const [visible, setVisible] = useState(0)
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    const t = setInterval(() => setVisible(v => (v < lines.length ? v + 1 : v)), 400)
    const c = setInterval(() => setCursor(b => !b), 500)
    return () => { clearInterval(t); clearInterval(c) }
  }, [])

  return (
    <div className="bg-[#0d1117] rounded-xl p-4 font-mono text-sm border border-[#00FF85]/30 w-full">
      <div className="flex gap-1.5 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-gray-500">forge-ide.js</span>
      </div>
      {lines.slice(0, visible).map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex"
        >
          <span className="w-6 text-gray-600 select-none">{i + 1}</span>
          <span className={l.color}>{l.text}</span>
          <span className="text-gray-300">{l.rest}</span>
        </motion.div>
      ))}
      <span className={`text-[#00FF85] ${cursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
      {visible >= lines.length && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 pt-2 border-t border-gray-700 text-[#00FF85]"
        >
          <span className="text-gray-500">▶ </span>Hello, Forge!
        </motion.div>
      )}
    </div>
  )
}

// 2. Courses – animated lesson cards
function CoursesPreview() {
  const courses = [
    { name: 'Full Stack Web Dev', progress: 78, emoji: '🌐', color: 'from-[#00FF85] to-[#0D9488]' },
    { name: 'Python & ML', progress: 45, emoji: '🐍', color: 'from-[#22D3EE] to-[#6D28D9]' },
    { name: 'IoT & Embedded', progress: 92, emoji: '🔌', color: 'from-[#F59E0B] to-[#EC4899]' },
  ]
  return (
    <div className="space-y-3 w-full">
      {courses.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          className="bg-dark-100 rounded-xl p-3 border border-primary/10"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{c.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">{c.name}</div>
              <div className="text-xs text-text-muted">{c.progress}% complete</div>
            </div>
            <CheckCircle size={16} className="text-primary flex-shrink-0" />
          </div>
          <div className="h-1.5 bg-dark-300 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${c.color} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${c.progress}%` }}
              transition={{ delay: i * 0.2 + 0.3, duration: 1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// 3. Practice – animated code problem
function PracticePreview() {
  const [selected, setSelected] = useState<number | null>(null)
  const [correct, setCorrect] = useState(false)

  const options = ['O(n)', 'O(n²)', 'O(log n)', 'O(1)']
  const answer = 1

  useEffect(() => {
    const t = setTimeout(() => {
      setSelected(answer)
      setTimeout(() => setCorrect(true), 400)
    }, 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="bg-dark-100 rounded-xl p-4 border border-[#22D3EE]/30 w-full">
      <div className="text-xs text-[#22D3EE] mb-2 font-semibold">⚡ Daily Challenge</div>
      <div className="text-sm font-semibold mb-3">What is the time complexity of Bubble Sort?</div>
      <div className="font-mono text-xs bg-dark-200 p-2 rounded mb-3 text-[#A78BFA]">
        {`for i in range(n):\n  for j in range(n-i-1):\n    if arr[j] > arr[j+1]:\n      swap(arr, j)`}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt, i) => (
          <motion.div
            key={opt}
            className={`text-center py-2 rounded-lg text-sm border cursor-pointer transition-all ${
              selected === i
                ? correct
                  ? 'bg-green-500/20 border-green-500 text-green-400'
                  : 'bg-[#22D3EE]/20 border-[#22D3EE]'
                : 'bg-dark-200 border-primary/10 text-text-muted'
            }`}
            whileHover={{ scale: 1.03 }}
            animate={selected === i ? { scale: [1, 1.05, 1] } : {}}
          >
            {opt}
            {selected === i && correct && <span className="ml-1">✓</span>}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// 4. Assessment – animated quiz score
function AssessmentPreview() {
  const [score, setScore] = useState(0)
  const skills = [
    { name: 'JavaScript', val: 88, color: '#F59E0B' },
    { name: 'React', val: 76, color: '#22D3EE' },
    { name: 'Algorithms', val: 64, color: '#A78BFA' },
    { name: 'System Design', val: 52, color: '#00FF85' },
  ]
  useEffect(() => {
    const t = setInterval(() => setScore(s => (s < 82 ? s + 2 : 82)), 40)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="bg-dark-100 rounded-xl p-4 border border-[#F59E0B]/30 w-full">
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-[#F59E0B] flex items-center justify-center"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-lg font-bold text-[#F59E0B]">{score}%</span>
        </motion.div>
        <div>
          <div className="font-bold text-sm">Assessment Score</div>
          <div className="text-xs text-text-muted">Frontend Developer</div>
        </div>
      </div>
      <div className="space-y-2">
        {skills.map((s, i) => (
          <div key={s.name}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-text-muted">{s.name}</span>
              <span style={{ color: s.color }}>{s.val}%</span>
            </div>
            <div className="h-1.5 bg-dark-300 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: s.color }}
                initial={{ width: 0 }}
                animate={{ width: `${s.val}%` }}
                transition={{ delay: i * 0.15 + 0.5, duration: 0.8 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 5. Internships – animated project cards
function InternshipPreview() {
  const projects = [
    { role: 'Full Stack Intern', company: 'Forge Digital', status: 'Active', color: '#00FF85' },
    { role: 'IoT Developer', company: 'TechStart', status: 'Open', color: '#22D3EE' },
    { role: 'UI/UX Designer', company: 'CreativeLab', status: 'Open', color: '#A78BFA' },
  ]
  return (
    <div className="space-y-3 w-full">
      {projects.map((p, i) => (
        <motion.div
          key={p.role}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="bg-dark-100 rounded-xl p-3 border border-primary/10 flex items-center gap-3"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: `${p.color}20`, border: `1px solid ${p.color}40` }}
          >
            <Briefcase size={18} style={{ color: p.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate">{p.role}</div>
            <div className="text-xs text-text-muted">{p.company}</div>
          </div>
          <motion.span
            className="text-xs px-2 py-1 rounded-full font-semibold"
            style={{ background: `${p.color}20`, color: p.color }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            {p.status}
          </motion.span>
        </motion.div>
      ))}
    </div>
  )
}

// 6. Certificates – animated certificate
function CertificatePreview() {
  return (
    <motion.div
      className="w-full bg-white rounded-xl p-4 border-4 border-double border-yellow-400/60 text-center relative overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-80"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="relative z-10">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-4xl mb-2"
        >
          🏆
        </motion.div>
        <div className="text-xs text-gray-500 mb-1">CERTIFICATE OF COMPLETION</div>
        <div className="text-sm font-bold text-gray-800 mb-1">Full Stack Development</div>
        <div className="text-xs text-gray-600 mb-2">Awarded to <span className="font-bold text-yellow-700">You</span></div>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <motion.span key={i} animate={{ scale: [1, 1.3, 1] }} transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }}>⭐</motion.span>
          ))}
        </div>
        <div className="text-xs font-bold text-primary">Forge Digital Solution</div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────── SLIDE DATA ────────────────────────────────── */
const slides = [
  {
    id: 'ide',
    icon: Terminal,
    title: 'Online IDE',
    subtitle: 'Code anywhere, instantly',
    description: 'Write, run, and debug code in 10+ languages right in your browser. No install needed — just open and start coding.',
    href: '/ide',
    gradient: 'from-[#00FF85] to-[#0D9488]',
    bgGlow: 'rgba(0,255,133,0.15)',
    Preview: IDEPreview,
  },
  {
    id: 'courses',
    icon: BookOpen,
    title: 'Courses',
    subtitle: 'Learn with the best',
    description: 'Industry-aligned tech courses with project-based learning. Track your progress and master in-demand skills.',
    href: '/courses',
    gradient: 'from-[#22D3EE] to-[#6D28D9]',
    bgGlow: 'rgba(34,211,238,0.15)',
    Preview: CoursesPreview,
  },
  {
    id: 'practice',
    icon: Code,
    title: 'Practice Arena',
    subtitle: 'Sharpen your skills daily',
    description: 'Solve real coding problems, DSA challenges, and earn XP. Compete on leaderboards and level up every day.',
    href: '/practice',
    gradient: 'from-[#A78BFA] to-[#EC4899]',
    bgGlow: 'rgba(167,139,250,0.15)',
    Preview: PracticePreview,
  },
  {
    id: 'assessment',
    icon: Trophy,
    title: 'Assessment',
    subtitle: 'Know where you stand',
    description: 'Take AI-graded assessments, mock interviews, and skill tests. Get a detailed report and personalized study plan.',
    href: '/assessment',
    gradient: 'from-[#F59E0B] to-[#D97706]',
    bgGlow: 'rgba(245,158,11,0.15)',
    Preview: AssessmentPreview,
  },
  {
    id: 'internships',
    icon: Briefcase,
    title: 'Internships',
    subtitle: 'Real work, real growth',
    description: 'Apply to curated internship programs, build live projects, and earn industry recognition to boost your career.',
    href: '/internships',
    gradient: 'from-[#00FF85] to-[#22D3EE]',
    bgGlow: 'rgba(0,255,133,0.15)',
    Preview: InternshipPreview,
  },
  {
    id: 'certificates',
    icon: Award,
    title: 'Certificates',
    subtitle: 'Prove your expertise',
    description: 'Earn verified digital certificates upon course completion. Share them on LinkedIn and impress employers.',
    href: '/certificates',
    gradient: 'from-[#F59E0B] to-[#EC4899]',
    bgGlow: 'rgba(245,158,11,0.15)',
    Preview: CertificatePreview,
  },
]

/* ─────────────────────────── MAIN COMPONENT ─────────────────────────────── */
export default function FeatureShowcaseSlider() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const router = useRouter()
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDir(1)
      setCurrent(c => (c + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const go = (next: number) => {
    setDir(next > current ? 1 : -1)
    setCurrent(next)
    startTimer()
  }

  const slide = slides[current]
  const Icon = slide.icon
  const { Preview } = slide

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Dynamic background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ background: `radial-gradient(ellipse at 50% 60%, ${slide.bgGlow}, transparent 70%)` }}
        transition={{ duration: 0.8 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Play size={14} />
            Feature Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-3">
            Everything in{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              One Place
            </span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            See what makes Forge Digital Solution your ultimate tech companion
          </p>
        </motion.div>

        {/* Slide Nav Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {slides.map((s, i) => {
            const SIcon = s.icon
            return (
              <motion.button
                key={s.id}
                onClick={() => go(i)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  i === current
                    ? 'bg-primary/20 border-primary text-primary scale-105'
                    : 'bg-dark-200 border-primary/10 text-text-muted hover:border-primary/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SIcon size={12} />
                <span className="hidden sm:inline">{s.title}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Main Slide */}
        <div className="relative">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={current}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Left – Text */}
              <div className="order-2 lg:order-1">
                <motion.div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${slide.gradient} mb-5`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Icon className="text-dark-100" size={18} />
                  <span className="text-dark-100 text-sm font-bold">{slide.subtitle}</span>
                </motion.div>

                <motion.h3
                  className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {slide.title}
                </motion.h3>

                <motion.p
                  className="text-text-muted text-lg mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.description}
                </motion.p>

                <motion.button
                  className={`flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r ${slide.gradient} text-dark-100 font-bold text-base shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push(slide.href)}
                >
                  Explore {slide.title}
                  <ArrowRight size={18} />
                </motion.button>
              </div>

              {/* Right – Preview */}
              <motion.div
                className="order-1 lg:order-2 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                {/* Glow ring */}
                <div
                  className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${slide.bgGlow.replace('0.15', '0.5')}, transparent)` }}
                />
                <div className="relative bg-dark-200/80 backdrop-blur-sm rounded-2xl border border-primary/20 p-5">
                  {/* Window bar */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className={`ml-auto text-xs font-semibold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                      {slide.title} — Forge Digital Solution
                    </span>
                  </div>
                  {/* Each slide has its own preview component */}
                  <Preview />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow Controls */}
          <button
            onClick={() => go((current - 1 + slides.length) % slides.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-dark-200 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-all z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go((current + 1) % slides.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-dark-200 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-all z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button key={i} onClick={() => go(i)} className="h-1 rounded-full overflow-hidden bg-dark-300 transition-all" style={{ width: i === current ? 32 : 16 }}>
              {i === current && (
                <motion.div
                  className={`h-full bg-gradient-to-r ${slide.gradient}`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                  key={current}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
