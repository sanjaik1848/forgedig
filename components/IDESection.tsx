'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Play, Terminal } from 'lucide-react'

export default function IDESection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [code, setCode] = useState('')
  
  const fullCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`

  useEffect(() => {
    if (isInView) {
      let index = 0
      const interval = setInterval(() => {
        if (index < fullCode.length) {
          setCode(fullCode.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
        }
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section ref={ref} className="relative py-20 px-4 z-10 overflow-hidden">
      {/* Animated code lines background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary font-mono text-sm whitespace-nowrap"
            style={{ left: `${(i * 17) % 100}%` }}
            animate={{ y: ['100vh', '-10vh'] }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          >
            {`const code = () => { return "Forge Digital Solution"; }`}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Write, Run, and <span className="text-primary">Practice Your Own Code</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Experience our powerful online IDE with real-time code execution and instant feedback
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-dark-200 rounded-2xl overflow-hidden border border-primary/30 glow-border max-w-4xl mx-auto"
        >
          {/* IDE Header */}
          <div className="bg-dark-100 px-6 py-4 flex items-center justify-between border-b border-primary/20">
            <div className="flex items-center gap-3">
              <Terminal className="text-primary" size={20} />
              <span className="font-semibold">Forge Digital Solution IDE</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Code Editor */}
          <div className="p-6 font-mono text-sm">
            <div className="flex gap-4">
              {/* Line numbers */}
              <div className="text-text-muted select-none">
                {code.split('\n').map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Code content */}
              <div className="flex-1">
                <pre className="text-text-primary">
                  <code>
                    {code.split('\n').map((line, i) => (
                      <div key={i}>
                        {line.includes('function') && (
                          <span className="text-accent">function </span>
                        )}
                        {line.includes('fibonacci') && !line.includes('function') && (
                          <span className="text-secondary">fibonacci</span>
                        )}
                        {line.includes('return') && (
                          <span className="text-primary">return </span>
                        )}
                        {line.includes('if') && (
                          <span className="text-primary">if </span>
                        )}
                        {line.includes('console') && (
                          <span className="text-accent">console</span>
                        )}
                        {line.replace(/function|fibonacci|return|if|console/g, '')}
                      </div>
                    ))}
                    <span className="typing-cursor">|</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-dark-100 px-6 py-4 border-t border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Play className="text-primary" size={16} />
              <span className="text-sm font-semibold">Output:</span>
            </div>
            <motion.div
              className="text-primary font-mono"
              initial={{ opacity: 0 }}
              animate={code.length === fullCode.length ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              55
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-10 py-4 rounded-full border-2 border-primary text-primary font-semibold text-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Try IDE Now</span>
            <motion.div
              className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
