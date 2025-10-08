'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Shield,
  TrendingUp,
  Clock,
  Users,
  Star,
  BookOpen,
  Award,
  Play,
  CheckCircle,
  Filter,
  Search,
} from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { name: 'All', icon: '🌐' },
    { name: 'Web Development', icon: '💻' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'Data Science', icon: '📊' },
    { name: 'AI & ML', icon: '🤖' },
    { name: 'Cybersecurity', icon: '🔒' },
    { name: 'Cloud Computing', icon: '☁️' },
    { name: 'DevOps', icon: '⚙️' },
  ]

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'Web Development',
      level: 'Intermediate',
      duration: '12 weeks',
      students: 15420,
      rating: 4.8,
      price: '$99',
      instructor: 'John Doe',
      image: '💻',
      color: 'from-blue-500 to-cyan-500',
      description: 'Master React, Node.js, MongoDB and build real-world applications',
      modules: 45,
      projects: 8,
      certificate: true,
    },
    {
      id: 2,
      title: 'Python for Data Science',
      category: 'Data Science',
      level: 'Beginner',
      duration: '10 weeks',
      students: 12350,
      rating: 4.9,
      price: '$89',
      instructor: 'Jane Smith',
      image: '🐍',
      color: 'from-yellow-500 to-orange-500',
      description: 'Learn Python, Pandas, NumPy, and data visualization techniques',
      modules: 38,
      projects: 6,
      certificate: true,
    },
    {
      id: 3,
      title: 'React Native Mobile Apps',
      category: 'Mobile Development',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 9870,
      rating: 4.7,
      price: '$79',
      instructor: 'Mike Johnson',
      image: '📱',
      color: 'from-purple-500 to-pink-500',
      description: 'Build cross-platform mobile apps for iOS and Android',
      modules: 32,
      projects: 5,
      certificate: true,
    },
    {
      id: 4,
      title: 'Machine Learning Fundamentals',
      category: 'AI & ML',
      level: 'Advanced',
      duration: '14 weeks',
      students: 8540,
      rating: 4.9,
      price: '$129',
      instructor: 'Dr. Sarah Lee',
      image: '🤖',
      color: 'from-green-500 to-teal-500',
      description: 'Deep dive into ML algorithms, neural networks, and AI',
      modules: 52,
      projects: 10,
      certificate: true,
    },
    {
      id: 5,
      title: 'Cybersecurity Essentials',
      category: 'Cybersecurity',
      level: 'Beginner',
      duration: '6 weeks',
      students: 7230,
      rating: 4.6,
      price: '$69',
      instructor: 'Alex Turner',
      image: '🔒',
      color: 'from-red-500 to-orange-500',
      description: 'Learn security fundamentals, ethical hacking, and protection',
      modules: 28,
      projects: 4,
      certificate: true,
    },
    {
      id: 6,
      title: 'AWS Cloud Practitioner',
      category: 'Cloud Computing',
      level: 'Beginner',
      duration: '8 weeks',
      students: 11200,
      rating: 4.8,
      price: '$99',
      instructor: 'Chris Brown',
      image: '☁️',
      color: 'from-orange-500 to-yellow-500',
      description: 'Master AWS services, cloud architecture, and deployment',
      modules: 35,
      projects: 7,
      certificate: true,
    },
    {
      id: 7,
      title: 'DevOps Engineering',
      category: 'DevOps',
      level: 'Advanced',
      duration: '12 weeks',
      students: 6890,
      rating: 4.7,
      price: '$119',
      instructor: 'David Wilson',
      image: '⚙️',
      color: 'from-indigo-500 to-purple-500',
      description: 'CI/CD, Docker, Kubernetes, and automation tools',
      modules: 42,
      projects: 9,
      certificate: true,
    },
    {
      id: 8,
      title: 'UI/UX Design Masterclass',
      category: 'Web Development',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 10500,
      rating: 4.9,
      price: '$89',
      instructor: 'Emma Davis',
      image: '🎨',
      color: 'from-pink-500 to-rose-500',
      description: 'Design beautiful interfaces with Figma and modern principles',
      modules: 36,
      projects: 8,
      certificate: true,
    },
    {
      id: 9,
      title: 'Backend Development with Node.js',
      category: 'Web Development',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 9340,
      rating: 4.8,
      price: '$95',
      instructor: 'Robert Taylor',
      image: '🟢',
      color: 'from-green-600 to-emerald-500',
      description: 'Build scalable APIs with Express, MongoDB, and authentication',
      modules: 40,
      projects: 7,
      certificate: true,
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesLevel && matchesSearch
  })

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-500 bg-green-500/20'
      case 'Intermediate': return 'text-yellow-500 bg-yellow-500/20'
      case 'Advanced': return 'text-red-500 bg-red-500/20'
      default: return 'text-text-muted bg-dark-100'
    }
  }

  return (
    <main className="relative min-h-screen gradient-bg">
      <AnimatedBackground />

      <div className="relative z-10 pt-12 pb-20">
        {/* Hero Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-glow"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Explore Our <span className="text-primary">Courses</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto">
            Learn from industry experts and master in-demand skills
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="max-w-7xl mx-auto px-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, value: '50+', label: 'Courses' },
              { icon: Users, value: '100K+', label: 'Students' },
              { icon: Award, value: '95%', label: 'Completion Rate' },
              { icon: Star, value: '4.8', label: 'Average Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-dark-200 rounded-xl p-4 border border-primary/20 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="mx-auto text-primary mb-2" size={28} />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="max-w-7xl mx-auto px-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-dark-200 rounded-2xl p-6 border border-primary/20">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted" size={20} />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-dark-100 border border-primary/20 rounded-xl pl-12 pr-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="text-primary" size={20} />
                <h3 className="font-semibold text-primary">Category</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <motion.button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === cat.name
                        ? 'bg-primary text-dark-100'
                        : 'bg-dark-100 text-text-muted border border-primary/20 hover:border-primary/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="text-primary" size={20} />
                <h3 className="font-semibold text-primary">Level</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {levels.map((level) => (
                  <motion.button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedLevel === level
                        ? 'bg-primary text-dark-100'
                        : 'bg-dark-100 text-text-muted border border-primary/20 hover:border-primary/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {level}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-dark-200 rounded-3xl overflow-hidden border border-primary/20 group hover:border-primary/50 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
              >
                {/* Course Image */}
                <div className="relative h-48 bg-gradient-to-br from-dark-100 to-dark-300 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-30`}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-8xl"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {course.image}
                    </motion.span>
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Play className="text-dark-100" size={28} fill="currentColor" />
                    </motion.div>
                  </div>
                  {/* Level Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                    {course.level}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-text-muted">{course.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-primary/10">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-primary">{course.modules}</div>
                      <div className="text-xs text-text-muted">Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-primary">{course.projects}</div>
                      <div className="text-xs text-text-muted">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-primary">{course.duration}</div>
                      <div className="text-xs text-text-muted">Duration</div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500" size={16} fill="currentColor" />
                      <span className="font-semibold text-text-primary">{course.rating}</span>
                      <span className="text-text-muted text-sm">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center gap-1 text-text-muted text-sm">
                      <Users size={16} />
                      <span>{(course.students / 1000).toFixed(1)}K students</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold">
                        {course.instructor.charAt(0)}
                      </div>
                      <span className="text-sm text-text-muted">{course.instructor}</span>
                    </div>
                    {course.certificate && (
                      <Award className="text-primary" size={20} />
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-primary">{course.price}</div>
                    <motion.button
                      className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <BookOpen className="mx-auto text-text-muted mb-4" size={64} />
              <h3 className="text-2xl font-bold text-text-primary mb-2">No courses found</h3>
              <p className="text-text-muted">Try adjusting your filters or search query</p>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  )
}
