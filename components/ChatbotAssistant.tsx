'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export default function ChatbotAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: 'Hi! I\'m your AI Assistant. How can I help you today?', sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      setInput('')
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: 'Thanks for your message! Our team will get back to you soon. Feel free to explore our courses and services!', 
          sender: 'bot' 
        }])
      }, 1000)
    }
  }

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg z-50 group"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(0, 255, 133, 0.5)',
            '0 0 40px rgba(0, 255, 133, 0.8)',
            '0 0 20px rgba(0, 255, 133, 0.5)',
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity },
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="text-dark-100" size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="text-dark-100" size={28} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Label */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-8 right-28 bg-dark-200 px-4 py-2 rounded-lg border border-primary/30 z-50 pointer-events-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <p className="text-sm font-semibold text-primary whitespace-nowrap">
              AI Assistant — Ask Me Anything
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-8 w-96 h-[500px] bg-dark-200 rounded-2xl border-2 border-primary/30 shadow-2xl z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dark-100 flex items-center justify-center">
                🤖
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-dark-100">AI Assistant</h4>
                <p className="text-xs text-dark-100/80">Online</p>
              </div>
              <motion.div
                className="w-3 h-3 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-dark-100'
                        : 'bg-dark-100 text-text-primary border border-primary/20'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-primary/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full bg-dark-100 border border-primary/30 text-text-primary focus:outline-none focus:border-primary transition-colors"
                />
                <motion.button
                  onClick={handleSend}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="text-dark-100" size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
