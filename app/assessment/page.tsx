'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Award, Clock, BookOpen, Terminal, Trophy } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'
import { Assessment, assessments } from './assessmentData'
import TestInterface from './TestInterface'
import ResultsScreen from './ResultsScreen'

export default function AssessmentPage() {
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null)
  const [testStarted, setTestStarted] = useState(false)
  const [testCompleted, setTestCompleted] = useState(false)
  const [testResults, setTestResults] = useState<{
    score: number
    passed: boolean
    mcqScore: number
    codingScore: number
  } | null>(null)

  const startTest = (assessment: Assessment) => {
    setSelectedAssessment(assessment)
    setTestStarted(true)
    setTestCompleted(false)
    setTestResults(null)
  }

  const handleTestComplete = (results: any) => {
    setTestResults(results)
    setTestCompleted(true)
  }

  const resetTest = () => {
    setTestStarted(false)
    setSelectedAssessment(null)
    setTestCompleted(false)
    setTestResults(null)
  }

  if (testCompleted && testResults && selectedAssessment) {
    return (
      <ResultsScreen
        assessment={selectedAssessment}
        results={testResults}
        onReset={resetTest}
      />
    )
  }

  if (testStarted && selectedAssessment) {
    return (
      <TestInterface
        assessment={selectedAssessment}
        onComplete={handleTestComplete}
        onCancel={resetTest}
      />
    )
  }

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
            Take <span className="text-primary">Assessment</span> Tests
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-3xl mx-auto px-2">
            Test your skills, pass the assessment, and get certified!
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="max-w-7xl mx-auto mb-12 sm:mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { icon: BookOpen, value: '4+', label: 'Assessments' },
              { icon: Code, value: '50+', label: 'Questions' },
              { icon: Award, value: '100%', label: 'Verified Certs' },
              { icon: Trophy, value: '1000+', label: 'Certified' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-dark-200 rounded-xl p-3 sm:p-4 lg:p-6 border border-primary/20 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="mx-auto text-primary mb-2" size={24} />
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Assessments Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Available <span className="text-primary">Assessments</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {assessments.map((assessment: Assessment, index: number) => (
              <motion.div
                key={assessment.id}
                className="bg-dark-200 rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/20 group hover:border-primary/50 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
              >
                {/* Header */}
                <div className={`relative h-32 sm:h-40 bg-gradient-to-br ${assessment.color} overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <span className="text-6xl sm:text-7xl">{assessment.icon}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">
                    {assessment.title}
                  </h3>
                  <p className="text-sm text-secondary font-semibold mb-4">{assessment.category}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-primary/10">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-primary">{assessment.duration} min</div>
                      <div className="text-xs text-text-muted">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-primary">
                        {assessment.mcqQuestions.length + assessment.codingQuestions.length}
                      </div>
                      <div className="text-xs text-text-muted">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-primary">{assessment.passingScore}%</div>
                      <div className="text-xs text-text-muted">Pass Score</div>
                    </div>
                  </div>

                  {/* Question Types */}
                  <div className="flex items-center justify-between mb-4 text-xs sm:text-sm text-text-muted">
                    <div className="flex items-center gap-1">
                      <BookOpen size={16} className="text-primary" />
                      <span>{assessment.mcqQuestions.length} MCQs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Terminal size={16} className="text-secondary" />
                      <span>{assessment.codingQuestions.length} Coding</span>
                    </div>
                  </div>

                  {/* Certificate Price & CTA */}
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-xs text-text-muted">Certificate</div>
                      <div className="text-xl sm:text-2xl font-bold text-primary">
                        ₹{assessment.certificatePrice}
                      </div>
                    </div>
                    <motion.button
                      className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 text-sm sm:text-base font-semibold flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => startTest(assessment)}
                    >
                      <Clock size={18} />
                      Start Test
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-12 sm:mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Take Test</h4>
              <p className="text-sm text-text-muted">
                Answer MCQs and solve coding problems within the time limit
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Pass Assessment</h4>
              <p className="text-sm text-text-muted">
                Score above the passing percentage to qualify for certificate
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Get Certificate</h4>
              <p className="text-sm text-text-muted">
                Pay and download your verified certificate instantly
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
