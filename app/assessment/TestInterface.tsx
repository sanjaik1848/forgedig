'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, BookOpen, Terminal, CheckCircle, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'
import { Assessment, MCQQuestion, CodingQuestion } from './assessmentData'
import { evaluateAllCodingQuestions } from './codeEvaluator'

interface TestInterfaceProps {
  assessment: Assessment
  onComplete: (results: any) => void
  onCancel: () => void
}

export default function TestInterface({ assessment, onComplete, onCancel }: TestInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [mcqAnswers, setMcqAnswers] = useState<{ [key: number]: number }>({})
  const [codingAnswers, setCodingAnswers] = useState<{ [key: number]: string }>({})
  const [timeRemaining, setTimeRemaining] = useState(assessment.duration * 60)

  const allQuestions = [...assessment.mcqQuestions, ...assessment.codingQuestions]
  const currentQuestion = allQuestions[currentQuestionIndex]
  const isMCQ = currentQuestion && 'options' in currentQuestion

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSubmit = () => {
    // Calculate MCQ score
    let mcqCorrect = 0
    assessment.mcqQuestions.forEach((q) => {
      if (mcqAnswers[q.id] === q.correctAnswer) {
        mcqCorrect++
      }
    })
    const mcqScore = (mcqCorrect / assessment.mcqQuestions.length) * 50

    // Evaluate coding questions with test cases
    const codingResults = evaluateAllCodingQuestions(assessment.codingQuestions, codingAnswers)
    const totalCodingScore = codingResults.reduce((sum, result) => sum + result.score, 0)
    const codingScore = (totalCodingScore / codingResults.length) * 0.5 // 50% weight

    const totalScore = mcqScore + codingScore
    const passed = totalScore >= assessment.passingScore

    onComplete({
      score: totalScore,
      passed,
      mcqScore,
      codingScore,
      codingResults, // Include detailed test case results
    })
  }

  const goToNext = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  return (
    <main className="relative min-h-screen gradient-bg">
      <AnimatedBackground />
      <div className="relative z-10 pt-20 pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="bg-dark-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1">
                  {assessment.title}
                </h2>
                <p className="text-sm sm:text-base text-text-muted">
                  Question {currentQuestionIndex + 1} of {allQuestions.length}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-dark-100 px-4 py-2 rounded-lg">
                  <Clock className="text-primary" size={20} />
                  <span className={`text-lg font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-primary'}`}>
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-dark-100 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / allQuestions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Question */}
          <motion.div
            key={currentQuestionIndex}
            className="bg-dark-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-primary/20 mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMCQ ? (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-primary" size={24} />
                  <span className="text-sm font-semibold text-primary">MCQ Question</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-6">
                  {(currentQuestion as MCQQuestion).question}
                </h3>
                <div className="space-y-3">
                  {(currentQuestion as MCQQuestion).options.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        mcqAnswers[currentQuestion.id] === index
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-primary/20 bg-dark-100 text-text-muted hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        setMcqAnswers({ ...mcqAnswers, [currentQuestion.id]: index })
                      }
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            mcqAnswers[currentQuestion.id] === index
                              ? 'border-primary bg-primary'
                              : 'border-primary/30'
                          }`}
                        >
                          {mcqAnswers[currentQuestion.id] === index && (
                            <CheckCircle className="text-dark-100" size={16} />
                          )}
                        </div>
                        <span className="text-sm sm:text-base">{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Coding Question Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Terminal className="text-primary" size={24} />
                    <span className="text-sm font-semibold text-primary">Coding Challenge</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      (currentQuestion as CodingQuestion).difficulty === 'Easy'
                        ? 'bg-green-500/20 text-green-500'
                        : (currentQuestion as CodingQuestion).difficulty === 'Medium'
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'bg-red-500/20 text-red-500'
                    }`}
                  >
                    {(currentQuestion as CodingQuestion).difficulty}
                  </span>
                </div>

                {/* Problem Statement */}
                <div className="bg-dark-100 rounded-xl p-4 sm:p-6 mb-6 border border-primary/10">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3">
                    {(currentQuestion as CodingQuestion).title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                    {(currentQuestion as CodingQuestion).description}
                  </p>
                </div>

                {/* Test Cases Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="text-primary" size={20} />
                    <h4 className="text-base font-semibold text-primary">Test Cases</h4>
                  </div>
                  <div className="space-y-3">
                    {(currentQuestion as CodingQuestion).testCases.map((testCase, idx) => (
                      <div key={idx} className="bg-dark-100 rounded-xl p-4 border border-primary/10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <div className="text-xs font-semibold text-secondary mb-1">Input:</div>
                            <div className="bg-dark-200 rounded-lg p-2 font-mono text-xs text-text-primary">
                              {testCase.input}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-primary mb-1">Expected Output:</div>
                            <div className="bg-dark-200 rounded-lg p-2 font-mono text-xs text-primary">
                              {testCase.output}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Editor Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="text-primary" size={20} />
                      <h4 className="text-base font-semibold text-primary">Code Editor</h4>
                    </div>
                    <button
                      className="px-3 py-1 rounded-lg bg-dark-100 border border-primary/20 text-xs text-text-muted hover:border-primary/50 transition-colors"
                      onClick={() => {
                        setCodingAnswers({
                          ...codingAnswers,
                          [currentQuestion.id]: (currentQuestion as CodingQuestion).starterCode,
                        })
                      }}
                    >
                      Reset Code
                    </button>
                  </div>
                  <div className="relative">
                    <textarea
                      className="w-full h-80 bg-dark-100 border-2 border-primary/20 rounded-xl p-4 text-sm font-mono text-text-primary focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Write your code here..."
                      value={codingAnswers[currentQuestion.id] || (currentQuestion as CodingQuestion).starterCode}
                      onChange={(e) =>
                        setCodingAnswers({ ...codingAnswers, [currentQuestion.id]: e.target.value })
                      }
                      spellCheck={false}
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-text-muted bg-dark-200 px-2 py-1 rounded">
                      {(codingAnswers[currentQuestion.id] || (currentQuestion as CodingQuestion).starterCode).split('\n').length} lines
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="mt-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div className="text-xs text-text-muted">
                      <strong className="text-primary">Note:</strong> Your code will be evaluated against all test cases. 
                      Make sure your solution handles edge cases and follows the expected output format.
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.button
              className="w-full sm:w-auto px-6 py-3 rounded-full border-2 border-primary/30 text-text-muted font-semibold flex items-center justify-center gap-2 hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCancel}
            >
              <AlertCircle size={20} />
              Cancel Test
            </motion.button>

            <div className="flex gap-3 w-full sm:w-auto">
              {currentQuestionIndex > 0 && (
                <motion.button
                  className="flex-1 sm:flex-none px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToPrevious}
                >
                  <ArrowLeft size={20} />
                  Previous
                </motion.button>
              )}

              {currentQuestionIndex < allQuestions.length - 1 ? (
                <motion.button
                  className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goToNext}
                >
                  Next
                  <ArrowRight size={20} />
                </motion.button>
              ) : (
                <motion.button
                  className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-dark-100 font-semibold flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                >
                  Submit Test
                  <CheckCircle size={20} />
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
