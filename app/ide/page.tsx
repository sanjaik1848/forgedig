'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Save, 
  Download, 
  Upload, 
  Settings, 
  Code2, 
  Terminal,
  FileCode,
  Maximize2,
  Minimize2,
  Moon,
  Sun,
} from 'lucide-react'

export default function IDEPage() {
  const [code, setCode] = useState(`// Welcome to Forge Digital Solution Online IDE
// Start coding here!

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Developer"));`)

  const [output, setOutput] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [theme, setTheme] = useState('dark')
  const [isFullscreen, setIsFullscreen] = useState(false)

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'cpp', name: 'C++', icon: '⚡' },
    { id: 'html', name: 'HTML', icon: '🌐' },
    { id: 'css', name: 'CSS', icon: '🎨' },
  ]

  const runCode = () => {
    setOutput('Running code...\n')
    
    setTimeout(() => {
      try {
        // Placeholder for code execution
        if (language === 'javascript') {
          // Capture console.log output
          const logs: string[] = []
          const originalLog = console.log
          console.log = (...args) => {
            logs.push(args.join(' '))
          }
          
          // Execute code
          eval(code)
          
          // Restore console.log
          console.log = originalLog
          
          setOutput(logs.join('\n') || 'Code executed successfully!')
        } else {
          setOutput(`${language} execution placeholder\n\nIntegrate compiler API here:\n- Judge0 API\n- Piston API\n- Custom backend`)
        }
      } catch (error: any) {
        setOutput(`Error: ${error.message}`)
      }
    }, 500)
  }

  const saveCode = () => {
    localStorage.setItem('saved_code', code)
    localStorage.setItem('saved_language', language)
    alert('Code saved successfully!')
  }

  const loadCode = () => {
    const savedCode = localStorage.getItem('saved_code')
    const savedLanguage = localStorage.getItem('saved_language')
    if (savedCode) {
      setCode(savedCode)
      if (savedLanguage) setLanguage(savedLanguage)
      alert('Code loaded successfully!')
    } else {
      alert('No saved code found!')
    }
  }

  const downloadCode = () => {
    const extensions: { [key: string]: string } = {
      javascript: 'js',
      python: 'py',
      java: 'java',
      cpp: 'cpp',
      html: 'html',
      css: 'css',
    }
    
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `code.${extensions[language] || 'txt'}`
    a.click()
    URL.revokeObjectURL(url)
  }

  const clearCode = () => {
    if (confirm('Are you sure you want to clear the code?')) {
      setCode('')
      setOutput('')
    }
  }

  return (
    <div className={`min-h-screen ${isFullscreen ? 'fixed inset-0 z-50' : 'pt-20'} bg-dark-100`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Code2 className="text-dark-100" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary">Online IDE</h1>
                <p className="text-text-muted text-sm">Write, run, and test your code online</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <motion.button
                className="p-2 rounded-lg bg-dark-200 border border-primary/20 hover:border-primary/40 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun size={20} className="text-primary" /> : <Moon size={20} className="text-primary" />}
              </motion.button>
              <motion.button
                className="p-2 rounded-lg bg-dark-200 border border-primary/20 hover:border-primary/40 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                {isFullscreen ? <Minimize2 size={20} className="text-primary" /> : <Maximize2 size={20} className="text-primary" />}
              </motion.button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 bg-dark-200 p-4 rounded-xl border border-primary/20">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 rounded-lg bg-dark-100 border border-primary/20 text-text-primary focus:outline-none focus:border-primary transition-colors"
            >
              {languages.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.icon} {lang.name}
                </option>
              ))}
            </select>

            {/* Action Buttons */}
            <motion.button
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={runCode}
            >
              <Play size={18} />
              Run Code
            </motion.button>

            <motion.button
              className="px-4 py-2 rounded-lg bg-dark-100 border border-primary/20 text-primary font-semibold flex items-center gap-2 hover:bg-dark-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={saveCode}
            >
              <Save size={18} />
              Save
            </motion.button>

            <motion.button
              className="px-4 py-2 rounded-lg bg-dark-100 border border-primary/20 text-primary font-semibold flex items-center gap-2 hover:bg-dark-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadCode}
            >
              <Upload size={18} />
              Load
            </motion.button>

            <motion.button
              className="px-4 py-2 rounded-lg bg-dark-100 border border-primary/20 text-primary font-semibold flex items-center gap-2 hover:bg-dark-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCode}
            >
              <Download size={18} />
              Download
            </motion.button>

            <motion.button
              className="px-4 py-2 rounded-lg bg-dark-100 border border-red-500/20 text-red-500 font-semibold hover:bg-red-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearCode}
            >
              Clear
            </motion.button>
          </div>
        </motion.div>

        {/* Editor and Output */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Editor */}
          <motion.div
            className="bg-dark-200 rounded-xl border border-primary/20 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-dark-100 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <FileCode className="text-primary" size={18} />
                <span className="text-text-primary font-semibold">Code Editor</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[500px] p-4 bg-dark-200 text-text-primary font-mono text-sm focus:outline-none resize-none"
              placeholder="Write your code here..."
              spellCheck={false}
            />
            <div className="px-4 py-2 bg-dark-100 border-t border-primary/20 flex items-center justify-between text-xs text-text-muted">
              <span>Lines: {code.split('\n').length}</span>
              <span>Characters: {code.length}</span>
            </div>
          </motion.div>

          {/* Output Console */}
          <motion.div
            className="bg-dark-200 rounded-xl border border-secondary/20 overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-dark-100 border-b border-secondary/20">
              <div className="flex items-center gap-2">
                <Terminal className="text-secondary" size={18} />
                <span className="text-text-primary font-semibold">Output Console</span>
              </div>
              <motion.button
                className="text-text-muted hover:text-primary text-xs"
                onClick={() => setOutput('')}
                whileHover={{ scale: 1.05 }}
              >
                Clear Output
              </motion.button>
            </div>
            <div className="p-4 h-[500px] overflow-auto">
              <pre className="text-text-primary font-mono text-sm whitespace-pre-wrap">
                {output || 'Output will appear here...'}
              </pre>
            </div>
            <div className="px-4 py-2 bg-dark-100 border-t border-secondary/20 text-xs text-text-muted">
              Ready
            </div>
          </motion.div>
        </div>

        {/* Features Info */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-dark-200 border border-primary/20 rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <Code2 className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Multiple Languages</h3>
            <p className="text-text-muted text-sm">
              Support for JavaScript, Python, Java, C++, HTML, and CSS
            </p>
          </div>

          <div className="bg-dark-200 border border-primary/20 rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Save className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Save & Load</h3>
            <p className="text-text-muted text-sm">
              Save your code locally and load it anytime you need
            </p>
          </div>

          <div className="bg-dark-200 border border-primary/20 rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <Play className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Instant Execution</h3>
            <p className="text-text-muted text-sm">
              Run your code instantly and see the output in real-time
            </p>
          </div>
        </motion.div>

        {/* Integration Note */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-primary mb-3">🔌 Backend Integration Needed</h3>
          <p className="text-text-muted mb-4">
            For full code execution support, integrate with a compiler API:
          </p>
          <ul className="space-y-2 text-text-muted text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><strong className="text-primary">Judge0 API:</strong> https://judge0.com - Supports 60+ languages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><strong className="text-primary">Piston API:</strong> https://github.com/engineer-man/piston - Free and open-source</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><strong className="text-primary">Custom Backend:</strong> Build your own with Docker containers</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
