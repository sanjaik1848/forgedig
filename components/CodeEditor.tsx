'use client'

import { useEffect, useRef } from 'react'

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language: string
  fontSize: number
}

export default function CodeEditor({ value, onChange, language, fontSize }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      // Auto-resize textarea
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [value])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const start = e.currentTarget.selectionStart
      const end = e.currentTarget.selectionEnd
      const newValue = value.substring(0, start) + '    ' + value.substring(end)
      onChange(newValue)
      
      // Set cursor position after the inserted tab
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4
        }
      }, 0)
    }
  }

  const getLineNumbers = () => {
    const lines = value.split('\n').length
    return Array.from({ length: lines }, (_, i) => i + 1)
  }

  return (
    <div className="flex h-full bg-dark-100">
      {/* Line Numbers */}
      <div className="bg-dark-200 px-4 py-4 text-text-muted font-mono select-none border-r border-primary/10" style={{ fontSize: `${fontSize}px`, lineHeight: '1.6' }}>
        {getLineNumbers().map((num) => (
          <div key={num} className="text-right">
            {num}
          </div>
        ))}
      </div>

      {/* Code Area */}
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-full bg-transparent text-text-primary font-mono p-4 focus:outline-none resize-none overflow-auto"
          style={{ 
            fontSize: `${fontSize}px`, 
            lineHeight: '1.6',
            tabSize: 4,
          }}
          spellCheck={false}
          placeholder="// Start coding here..."
        />
      </div>
    </div>
  )
}
