'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, XCircle, Award, Download, IndianRupee, CheckCircle, XCircle as XIcon, ChevronDown, ChevronUp } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'
import { Assessment } from './assessmentData'
import { CodeEvaluationResult } from './codeEvaluator'

interface ResultsScreenProps {
  assessment: Assessment
  results: {
    score: number
    passed: boolean
    mcqScore: number
    codingScore: number
    codingResults?: CodeEvaluationResult[]
  }
  onReset: () => void
}

export default function ResultsScreen({ assessment, results, onReset }: ResultsScreenProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [certificatePurchased, setCertificatePurchased] = useState(false)
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

  const handlePayment = () => {
    setCertificatePurchased(true)
    setShowPaymentModal(false)
  }

  return (
    <main className="relative min-h-screen gradient-bg">
      <AnimatedBackground />
      <div className="relative z-10 pt-20 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-dark-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-primary/20 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {results.passed ? (
              <>
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <Trophy className="text-dark-100" size={48} />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Congratulations! 🎉
                </h2>
                <p className="text-lg sm:text-xl text-text-muted mb-6">
                  You passed the {assessment.title} assessment!
                </p>
              </>
            ) : (
              <>
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <XCircle className="text-red-500" size={48} />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-4">
                  Not Passed
                </h2>
                <p className="text-lg sm:text-xl text-text-muted mb-6">
                  Keep practicing and try again! You need {assessment.passingScore}% to pass.
                </p>
              </>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="bg-dark-100 rounded-xl p-4 border border-primary/10">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {results.score.toFixed(0)}%
                </div>
                <div className="text-sm text-text-muted">Total Score</div>
              </div>
              <div className="bg-dark-100 rounded-xl p-4 border border-primary/10">
                <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
                  {results.mcqScore.toFixed(0)}%
                </div>
                <div className="text-sm text-text-muted">MCQ Score</div>
              </div>
              <div className="bg-dark-100 rounded-xl p-4 border border-primary/10">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  {results.codingScore.toFixed(0)}%
                </div>
                <div className="text-sm text-text-muted">Coding Score</div>
              </div>
            </div>

            {results.passed && !certificatePurchased && (
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold text-base sm:text-lg mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPaymentModal(true)}
              >
                Get Certificate - ₹{assessment.certificatePrice}
              </motion.button>
            )}

            {certificatePurchased && (
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30 mb-4">
                <Award className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold text-primary mb-2">Certificate Purchased!</h3>
                <p className="text-text-muted mb-4">Your certificate is ready to download</p>
                <motion.button
                  className="px-6 py-3 rounded-full bg-primary text-dark-100 font-semibold flex items-center gap-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Certificate
                </motion.button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold text-base sm:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onReset}
              >
                Back to Assessments
              </motion.button>
              {!results.passed && (
                <motion.button
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onReset}
                >
                  Try Again
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Detailed Test Case Results */}
          {results.codingResults && results.codingResults.length > 0 && (
            <motion.div
              className="mt-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-primary">
                Coding Question Results
              </h3>
              <div className="space-y-4">
                {results.codingResults.map((codingResult, idx) => {
                  const question = assessment.codingQuestions.find(q => q.id === codingResult.questionId)
                  if (!question) return null

                  return (
                    <motion.div
                      key={codingResult.questionId}
                      className="bg-dark-200 rounded-xl border border-primary/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div
                        className="p-4 sm:p-6 cursor-pointer"
                        onClick={() => setExpandedQuestion(expandedQuestion === codingResult.questionId ? null : codingResult.questionId)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                              {question.title}
                            </h4>
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="text-sm text-text-muted">
                                Test Cases: {codingResult.passedTestCases}/{codingResult.totalTestCases}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                codingResult.score === 100
                                  ? 'bg-green-500/20 text-green-500'
                                  : codingResult.score >= 50
                                  ? 'bg-yellow-500/20 text-yellow-500'
                                  : 'bg-red-500/20 text-red-500'
                              }`}>
                                {codingResult.score.toFixed(0)}% Score
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {codingResult.passedTestCases === codingResult.totalTestCases ? (
                              <CheckCircle className="text-green-500" size={24} />
                            ) : (
                              <XIcon className="text-red-500" size={24} />
                            )}
                            {expandedQuestion === codingResult.questionId ? (
                              <ChevronUp className="text-primary" size={20} />
                            ) : (
                              <ChevronDown className="text-primary" size={20} />
                            )}
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedQuestion === codingResult.questionId && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3">
                              {codingResult.testCaseResults.map((testCase, tcIdx) => (
                                <div
                                  key={tcIdx}
                                  className={`bg-dark-100 rounded-lg p-3 sm:p-4 border ${
                                    testCase.passed ? 'border-green-500/30' : 'border-red-500/30'
                                  }`}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-text-muted">
                                      Test Case {tcIdx + 1}
                                    </span>
                                    {testCase.passed ? (
                                      <span className="flex items-center gap-1 text-xs text-green-500">
                                        <CheckCircle size={14} /> Passed
                                      </span>
                                    ) : (
                                      <span className="flex items-center gap-1 text-xs text-red-500">
                                        <XIcon size={14} /> Failed
                                      </span>
                                    )}
                                  </div>
                                  <div className="grid grid-cols-1 gap-2 text-xs">
                                    <div>
                                      <span className="text-text-muted">Input: </span>
                                      <span className="font-mono text-text-primary">{testCase.input}</span>
                                    </div>
                                    <div>
                                      <span className="text-text-muted">Expected: </span>
                                      <span className="font-mono text-primary">{testCase.expectedOutput}</span>
                                    </div>
                                    <div>
                                      <span className="text-text-muted">Your Output: </span>
                                      <span className={`font-mono ${testCase.passed ? 'text-green-500' : 'text-red-500'}`}>
                                        {testCase.actualOutput || testCase.error || 'No output'}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </div>
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
              className="bg-dark-200 border border-primary/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-md w-full mx-4"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                  Purchase Certificate
                </h3>
                <p className="text-sm sm:text-base text-text-muted">
                  Get your verified certificate for {assessment.title}
                </p>
              </div>

              <div className="bg-dark-100 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-primary/10">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-sm sm:text-base text-text-muted">Certificate Fee</span>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="text-primary" size={20} />
                    <span className="text-xl sm:text-2xl font-bold text-primary">
                      {assessment.certificatePrice}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">Assessment</span>
                    <span className="text-text-primary">{assessment.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">Score</span>
                    <span className="text-primary font-semibold">{results.score.toFixed(0)}%</span>
                  </div>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-primary/10">
                  <p className="text-xs sm:text-sm text-text-muted text-center">
                    🔌{' '}
                    <span className="text-primary font-semibold">
                      Connect Payment Gateway API here
                    </span>
                  </p>
                  <p className="text-xs text-text-muted text-center mt-2">
                    (Razorpay / PhonePe / Stripe integration)
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-primary/30 text-text-muted text-sm sm:text-base font-semibold hover:bg-dark-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPaymentModal(false)}
                >
                  Cancel
                </motion.button>
                <motion.button
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark-100 text-sm sm:text-base font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePayment}
                >
                  Proceed to Pay
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
