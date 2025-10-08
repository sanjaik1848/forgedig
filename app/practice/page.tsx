'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Trophy, 
  Filter, 
  Search, 
  CheckCircle2, 
  Circle, 
  Clock,
  Target,
  TrendingUp,
  Award,
  Zap,
  ChevronRight
} from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function PracticePage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedLanguage, setSelectedLanguage] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('problems') // 'problems' or 'leaderboard'

  const languages = [
    { name: 'All', icon: '🌐', color: 'from-gray-500 to-gray-600' },
    { name: 'C', icon: '🔵', color: 'from-blue-600 to-blue-700' },
    { name: 'C++', icon: '🔷', color: 'from-blue-500 to-purple-600' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-blue-600' },
    { name: 'Java', icon: '☕', color: 'from-red-600 to-orange-600' },
  ]

  const difficulties = ['All', 'Easy', 'Medium', 'Hard']
  const statuses = ['All', 'Solved', 'Attempted', 'Todo']

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      acceptance: '49.2%',
      status: 'Solved',
      tags: ['Array', 'Hash Table'],
      submissions: 12500000,
    },
    {
      id: 2,
      title: 'Add Two Numbers',
      difficulty: 'Medium',
      acceptance: '38.5%',
      status: 'Attempted',
      tags: ['Linked List', 'Math'],
      submissions: 8500000,
    },
    {
      id: 3,
      title: 'Longest Substring Without Repeating',
      difficulty: 'Medium',
      acceptance: '33.8%',
      status: 'Todo',
      tags: ['String', 'Sliding Window'],
      submissions: 7200000,
    },
    {
      id: 4,
      title: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      acceptance: '35.2%',
      status: 'Todo',
      tags: ['Array', 'Binary Search'],
      submissions: 3800000,
    },
    {
      id: 5,
      title: 'Longest Palindromic Substring',
      difficulty: 'Medium',
      acceptance: '32.1%',
      status: 'Solved',
      tags: ['String', 'Dynamic Programming'],
      submissions: 6100000,
    },
    {
      id: 6,
      title: 'Reverse Integer',
      difficulty: 'Easy',
      acceptance: '27.3%',
      status: 'Solved',
      tags: ['Math'],
      submissions: 5900000,
    },
    {
      id: 7,
      title: 'Regular Expression Matching',
      difficulty: 'Hard',
      acceptance: '27.9%',
      status: 'Todo',
      tags: ['String', 'Dynamic Programming'],
      submissions: 2100000,
    },
    {
      id: 8,
      title: 'Container With Most Water',
      difficulty: 'Medium',
      acceptance: '54.2%',
      status: 'Attempted',
      tags: ['Array', 'Two Pointers'],
      submissions: 4800000,
    },
  ]

  const leaderboard = [
    { rank: 1, name: 'CodeMaster_Pro', solved: 2847, points: 15420, streak: 365, avatar: '👑' },
    { rank: 2, name: 'AlgoNinja', solved: 2654, points: 14230, streak: 287, avatar: '🥷' },
    { rank: 3, name: 'ByteWarrior', solved: 2521, points: 13890, streak: 245, avatar: '⚔️' },
    { rank: 4, name: 'StackOverflow_Hero', solved: 2398, points: 12950, streak: 198, avatar: '🦸' },
    { rank: 5, name: 'RecursionQueen', solved: 2287, points: 12340, streak: 176, avatar: '👸' },
    { rank: 6, name: 'BinaryBoss', solved: 2156, points: 11780, streak: 154, avatar: '🎯' },
    { rank: 7, name: 'DPDynamo', solved: 2043, points: 11230, streak: 132, avatar: '⚡' },
    { rank: 8, name: 'GraphGuru', solved: 1987, points: 10890, streak: 121, avatar: '🧙' },
    { rank: 9, name: 'TreeTraverser', solved: 1876, points: 10340, streak: 98, avatar: '🌲' },
    { rank: 10, name: 'HashHacker', solved: 1765, points: 9870, streak: 87, avatar: '🔐' },
  ]

  const filteredProblems = problems.filter(problem => {
    const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty
    const matchesStatus = selectedStatus === 'All' || problem.status === selectedStatus
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDifficulty && matchesStatus && matchesSearch
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-500'
      case 'Medium': return 'text-yellow-500'
      case 'Hard': return 'text-red-500'
      default: return 'text-text-muted'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Solved': return <CheckCircle2 className="text-green-500" size={20} />
      case 'Attempted': return <Circle className="text-yellow-500" size={20} />
      default: return <Circle className="text-text-muted" size={20} />
    }
  }

  return (
    <main className="relative min-h-screen gradient-bg">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code2 className="text-primary" size={48} />
            <h1 className="text-5xl md:text-6xl font-bold text-glow">
              Practice <span className="text-primary">Arena</span>
            </h1>
          </div>
          <p className="text-xl text-text-muted">
            Master coding challenges and climb the leaderboard
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { icon: Target, label: 'Problems Solved', value: '142', color: 'from-primary to-secondary' },
            { icon: Zap, label: 'Current Streak', value: '28 days', color: 'from-yellow-500 to-orange-500' },
            { icon: Trophy, label: 'Global Rank', value: '#1,234', color: 'from-purple-500 to-pink-500' },
            { icon: Award, label: 'Total Points', value: '8,450', color: 'from-blue-500 to-cyan-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-dark-200 rounded-2xl p-6 border border-primary/20 relative overflow-hidden group"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 133, 0.5)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10">
                <stat.icon className="text-primary mb-3" size={32} />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex gap-4 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => setActiveTab('problems')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'problems'
                ? 'bg-primary text-dark-100'
                : 'bg-dark-200 text-text-muted border border-primary/20 hover:border-primary/50'
            }`}
          >
            Problems
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'leaderboard'
                ? 'bg-primary text-dark-100'
                : 'bg-dark-200 text-text-muted border border-primary/20 hover:border-primary/50'
            }`}
          >
            <Trophy size={20} />
            Leaderboard
          </button>
        </motion.div>

        {activeTab === 'problems' ? (
          <>
            {/* Filters Section */}
            <motion.div
              className="bg-dark-200 rounded-2xl p-6 border border-primary/20 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted" size={20} />
                  <input
                    type="text"
                    placeholder="Search problems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-dark-100 border border-primary/20 rounded-xl pl-12 pr-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Language Filter */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="text-primary" size={20} />
                  <h3 className="font-semibold text-primary">Programming Language</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.name}
                      onClick={() => setSelectedLanguage(lang.name)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                        selectedLanguage === lang.name
                          ? `bg-gradient-to-r ${lang.color} text-white`
                          : 'bg-dark-100 text-text-muted border border-primary/20 hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{lang.icon}</span>
                      {lang.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="text-primary" size={20} />
                  <h3 className="font-semibold text-primary">Difficulty</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {difficulties.map((diff) => (
                    <motion.button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedDifficulty === diff
                          ? 'bg-primary text-dark-100'
                          : 'bg-dark-100 text-text-muted border border-primary/20 hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {diff}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <h3 className="font-semibold text-primary">Status</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {statuses.map((status) => (
                    <motion.button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedStatus === status
                          ? 'bg-primary text-dark-100'
                          : 'bg-dark-100 text-text-muted border border-primary/20 hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {status}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Problems List */}
            <motion.div
              className="space-y-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {filteredProblems.map((problem, index) => (
                <motion.div
                  key={problem.id}
                  className="bg-dark-200 rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  onClick={() => window.location.href = `/practice/${problem.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {/* Status Icon */}
                      <div>{getStatusIcon(problem.status)}</div>

                      {/* Problem Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-text-muted font-mono">#{problem.id}</span>
                          <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
                            {problem.title}
                          </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                          <span className="text-text-muted">•</span>
                          <span className="text-text-muted">Acceptance: {problem.acceptance}</span>
                          <span className="text-text-muted">•</span>
                          <div className="flex gap-2">
                            {problem.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-dark-100 rounded-full text-xs text-text-muted border border-primary/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <ChevronRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          /* Leaderboard Section */
          <motion.div
            className="bg-dark-200 rounded-2xl border border-primary/20 overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Leaderboard Header */}
            <div className="bg-dark-100 px-6 py-4 border-b border-primary/20">
              <div className="grid grid-cols-12 gap-4 font-semibold text-primary">
                <div className="col-span-1">Rank</div>
                <div className="col-span-4">User</div>
                <div className="col-span-2 text-center">Solved</div>
                <div className="col-span-2 text-center">Points</div>
                <div className="col-span-2 text-center">Streak</div>
                <div className="col-span-1"></div>
              </div>
            </div>

            {/* Leaderboard Entries */}
            <div className="divide-y divide-primary/10">
              {leaderboard.map((user, index) => (
                <motion.div
                  key={user.rank}
                  className="px-6 py-4 hover:bg-dark-100/50 transition-colors group cursor-pointer"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Rank */}
                    <div className="col-span-1">
                      <div className={`text-2xl font-bold ${
                        user.rank === 1 ? 'text-yellow-500' :
                        user.rank === 2 ? 'text-gray-400' :
                        user.rank === 3 ? 'text-orange-600' :
                        'text-text-muted'
                      }`}>
                        {user.rank === 1 && '🥇'}
                        {user.rank === 2 && '🥈'}
                        {user.rank === 3 && '🥉'}
                        {user.rank > 3 && `#${user.rank}`}
                      </div>
                    </div>

                    {/* User */}
                    <div className="col-span-4 flex items-center gap-3">
                      <div className="text-3xl">{user.avatar}</div>
                      <div>
                        <div className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                          {user.name}
                        </div>
                      </div>
                    </div>

                    {/* Solved */}
                    <div className="col-span-2 text-center">
                      <div className="text-2xl font-bold text-primary">{user.solved}</div>
                      <div className="text-xs text-text-muted">problems</div>
                    </div>

                    {/* Points */}
                    <div className="col-span-2 text-center">
                      <div className="text-2xl font-bold text-secondary">{user.points.toLocaleString()}</div>
                      <div className="text-xs text-text-muted">points</div>
                    </div>

                    {/* Streak */}
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Zap className="text-yellow-500" size={20} />
                        <span className="text-xl font-bold text-yellow-500">{user.streak}</span>
                      </div>
                      <div className="text-xs text-text-muted">days</div>
                    </div>

                    {/* View Profile */}
                    <div className="col-span-1 flex justify-end">
                      <ChevronRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
