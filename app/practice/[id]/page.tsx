'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import {
  Play,
  RotateCcw,
  Save,
  Settings,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  Clock,
  Code2,
  Terminal as TerminalIcon,
  Lightbulb,
  BookOpen,
  Users,
} from 'lucide-react'
import CodeEditor from '@/components/CodeEditor'

export default function ProblemPage() {
  const params = useParams()
  const router = useRouter()
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('python')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [activeTab, setActiveTab] = useState('description')
  const [testResults, setTestResults] = useState<any[]>([])
  const [fontSize, setFontSize] = useState(14)
  const [editorHeight, setEditorHeight] = useState(60) // percentage

  const languages = [
    { id: 'c', name: 'C', icon: '🔵' },
    { id: 'cpp', name: 'C++', icon: '🔷' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'java', name: 'Java', icon: '☕' },
  ]

  const problemData = {
    id: params.id,
    title: 'Two Sum',
    difficulty: 'Easy',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10⁴',
      '-10⁹ <= nums[i] <= 10⁹',
      '-10⁹ <= target <= 10⁹',
      'Only one valid answer exists.',
    ],
    starterCode: {
      python: `def twoSum(nums, target):
    # Write your code here
    pass

# Test your solution
nums = [2, 7, 11, 15]
target = 9
print(twoSum(nums, target))`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your code here
    
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    
    cout << "[" << result[0] << "," << result[1] << "]" << endl;
    return 0;
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your code here
    
}

int main() {
    int nums[] = {2, 7, 11, 15};
    int target = 9;
    int returnSize;
    int* result = twoSum(nums, 4, target, &returnSize);
    
    printf("[%d,%d]\\n", result[0], result[1]);
    return 0;
}`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = solution.twoSum(nums, target);
        
        System.out.println("[" + result[0] + "," + result[1] + "]");
    }
}`,
    },
  }

  useEffect(() => {
    setCode(problemData.starterCode[language as keyof typeof problemData.starterCode])
  }, [language])

  const runCode = () => {
    setIsRunning(true)
    setOutput('Running...')

    // Simulate code execution
    setTimeout(() => {
      setOutput(`Output:\n[0, 1]\n\nExecution Time: 45ms\nMemory Usage: 15.2 MB`)
      setTestResults([
        { id: 1, input: '[2,7,11,15], target=9', expected: '[0,1]', actual: '[0,1]', passed: true },
        { id: 2, input: '[3,2,4], target=6', expected: '[1,2]', actual: '[1,2]', passed: true },
        { id: 3, input: '[3,3], target=6', expected: '[0,1]', actual: '[0,1]', passed: true },
      ])
      setIsRunning(false)
    }, 1500)
  }

  const resetCode = () => {
    setCode(problemData.starterCode[language as keyof typeof problemData.starterCode])
    setOutput('')
    setTestResults([])
  }

  const submitCode = () => {
    runCode()
    // Additional submission logic here
  }

  return (
    <div className="min-h-screen bg-dark-100 pt-16">
      {/* Header */}
      <div className="border-b border-primary/20 bg-dark-200/50 backdrop-blur-lg sticky top-16 z-40">
        <div className="max-w-[1920px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/practice')}
              className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Back to Problems</span>
            </button>
            <div className="h-6 w-px bg-primary/20" />
            <h1 className="text-xl font-semibold text-text-primary">
              {problemData.id}. {problemData.title}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              problemData.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' :
              problemData.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
              'bg-red-500/20 text-red-500'
            }`}>
              {problemData.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-dark-100 rounded-lg transition-colors">
              <Settings className="text-text-muted" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-8rem)]">
        {/* Left Panel - Problem Description */}
        <div className="w-1/2 border-r border-primary/20 overflow-y-auto">
          <div className="p-6">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-primary/20">
              {['description', 'solutions', 'discuss'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium capitalize transition-colors relative ${
                    activeTab === tab
                      ? 'text-primary'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {tab === 'description' && <BookOpen size={16} className="inline mr-2" />}
                  {tab === 'solutions' && <Lightbulb size={16} className="inline mr-2" />}
                  {tab === 'discuss' && <Users size={16} className="inline mr-2" />}
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeTab"
                    />
                  )}
                </button>
              ))}
            </div>

            {activeTab === 'description' && (
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h2 className="text-lg font-semibold text-primary mb-3">Description</h2>
                  <p className="text-text-muted leading-relaxed whitespace-pre-line">
                    {problemData.description}
                  </p>
                </div>

                {/* Examples */}
                <div>
                  <h2 className="text-lg font-semibold text-primary mb-3">Examples</h2>
                  {problemData.examples.map((example, index) => (
                    <div key={index} className="mb-4 bg-dark-200 rounded-lg p-4 border border-primary/20">
                      <div className="font-semibold text-text-primary mb-2">
                        Example {index + 1}:
                      </div>
                      <div className="space-y-2 font-mono text-sm">
                        <div>
                          <span className="text-text-muted">Input: </span>
                          <span className="text-secondary">{example.input}</span>
                        </div>
                        <div>
                          <span className="text-text-muted">Output: </span>
                          <span className="text-primary">{example.output}</span>
                        </div>
                        {example.explanation && (
                          <div>
                            <span className="text-text-muted">Explanation: </span>
                            <span className="text-text-primary">{example.explanation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Constraints */}
                <div>
                  <h2 className="text-lg font-semibold text-primary mb-3">Constraints</h2>
                  <ul className="space-y-2">
                    {problemData.constraints.map((constraint, index) => (
                      <li key={index} className="text-text-muted flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="font-mono text-sm">{constraint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'solutions' && (
              <div className="text-center py-12">
                <Lightbulb className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Solutions Available After Solving
                </h3>
                <p className="text-text-muted">
                  Complete this problem to unlock community solutions
                </p>
              </div>
            )}

            {activeTab === 'discuss' && (
              <div className="text-center py-12">
                <Users className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Join the Discussion
                </h3>
                <p className="text-text-muted">
                  Share your thoughts and learn from others
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-1/2 flex flex-col">
          {/* Editor Header */}
          <div className="bg-dark-200 border-b border-primary/20 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 className="text-primary" size={20} />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-dark-100 border border-primary/20 rounded-lg px-3 py-1.5 text-text-primary focus:outline-none focus:border-primary transition-colors"
              >
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.icon} {lang.name}
                  </option>
                ))}
              </select>
              <div className="flex items-center gap-2 ml-4">
                <span className="text-text-muted text-sm">Font Size:</span>
                <button
                  onClick={() => setFontSize(Math.max(10, fontSize - 2))}
                  className="px-2 py-1 bg-dark-100 rounded hover:bg-dark-300 transition-colors"
                >
                  -
                </button>
                <span className="text-text-primary text-sm w-8 text-center">{fontSize}</span>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className="px-2 py-1 bg-dark-100 rounded hover:bg-dark-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={resetCode}
                className="flex items-center gap-2 px-3 py-1.5 bg-dark-100 hover:bg-dark-300 rounded-lg transition-colors text-text-muted hover:text-text-primary"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>
          </div>

          {/* Code Editor */}
          <div className="overflow-hidden" style={{ height: `${editorHeight}%` }}>
            <CodeEditor
              value={code}
              onChange={setCode}
              language={language}
              fontSize={fontSize}
            />
          </div>

          {/* Resize Handle */}
          <div className="h-1 bg-primary/20 hover:bg-primary/50 cursor-row-resize group relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-1 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
            </div>
          </div>

          {/* Output Panel */}
          <div className="bg-dark-200 flex flex-col" style={{ height: `${100 - editorHeight}%` }}>
            <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/20">
              <TerminalIcon className="text-primary" size={18} />
              <span className="font-semibold text-text-primary">Output</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {testResults.length > 0 ? (
                <div className="space-y-2">
                  {testResults.map((result) => (
                    <motion.div
                      key={result.id}
                      className={`p-3 rounded-lg border ${
                        result.passed
                          ? 'bg-green-500/10 border-green-500/30'
                          : 'bg-red-500/10 border-red-500/30'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {result.passed ? (
                          <CheckCircle2 className="text-green-500" size={18} />
                        ) : (
                          <XCircle className="text-red-500" size={18} />
                        )}
                        <span className="font-semibold text-text-primary">
                          Test Case {result.id}
                        </span>
                      </div>
                      <div className="text-sm font-mono space-y-1">
                        <div className="text-text-muted">Input: {result.input}</div>
                        <div className="text-text-muted">
                          Expected: <span className="text-primary">{result.expected}</span>
                        </div>
                        <div className="text-text-muted">
                          Actual: <span className={result.passed ? 'text-green-500' : 'text-red-500'}>
                            {result.actual}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <pre className="text-text-muted font-mono text-sm whitespace-pre-wrap">
                  {output || 'Run your code to see output...'}
                </pre>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-dark-200 border-t border-primary/20 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <Clock size={16} />
              <span>Last run: Never</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={runCode}
                disabled={isRunning}
                className="flex items-center gap-2 px-6 py-2 bg-dark-100 hover:bg-dark-300 rounded-lg transition-colors text-text-primary disabled:opacity-50"
              >
                <Play size={18} />
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
              <button
                onClick={submitCode}
                disabled={isRunning}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-dark-100 font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <CheckCircle2 size={18} />
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
