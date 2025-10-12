import { CodingQuestion } from './assessmentData'

export interface TestCaseResult {
  input: string
  expectedOutput: string
  actualOutput: string
  passed: boolean
  error?: string
}

export interface CodeEvaluationResult {
  questionId: number
  totalTestCases: number
  passedTestCases: number
  testCaseResults: TestCaseResult[]
  score: number
}

/**
 * Evaluates user code against test cases
 * In production, this should be done on a secure backend server
 */
export function evaluateCode(
  question: CodingQuestion,
  userCode: string
): CodeEvaluationResult {
  const testCaseResults: TestCaseResult[] = []
  let passedCount = 0

  // Evaluate each test case
  question.testCases.forEach((testCase) => {
    try {
      // Create a safe execution environment
      const result = executeCode(userCode, testCase.input, question.title)
      const actualOutput = result.trim()
      const expectedOutput = testCase.output.trim()
      const passed = actualOutput === expectedOutput

      if (passed) passedCount++

      testCaseResults.push({
        input: testCase.input,
        expectedOutput: testCase.output,
        actualOutput: actualOutput,
        passed,
      })
    } catch (error: any) {
      testCaseResults.push({
        input: testCase.input,
        expectedOutput: testCase.output,
        actualOutput: '',
        passed: false,
        error: error.message || 'Runtime error',
      })
    }
  })

  const score = (passedCount / question.testCases.length) * 100

  return {
    questionId: question.id,
    totalTestCases: question.testCases.length,
    passedTestCases: passedCount,
    testCaseResults,
    score,
  }
}

/**
 * Executes user code with given input
 * This is a simplified version - in production, use a sandboxed environment
 */
function executeCode(code: string, input: string, questionTitle: string): string {
  try {
    // Create a function from the user's code
    // This is simplified - real implementation should use VM or sandboxed execution
    
    // For demonstration, we'll simulate execution based on question type
    if (questionTitle.includes('Reverse')) {
      // Reverse string simulation
      const func = new Function('str', code + '\nreturn reverseString(str);')
      return String(func(input))
    } else if (questionTitle.includes('Maximum')) {
      // Find max simulation
      const func = new Function('arr', code + '\nreturn findMax(arr);')
      const arr = JSON.parse(input)
      return String(func(arr))
    } else if (questionTitle.includes('Palindrome')) {
      // Palindrome check simulation
      const func = new Function('s', code + '\nreturn is_palindrome(s);')
      return String(func(input))
    } else if (questionTitle.includes('Even')) {
      // Sum even numbers simulation
      const func = new Function('numbers', code + '\nreturn sum_even(numbers);')
      const arr = JSON.parse(input)
      return String(func(arr))
    } else if (questionTitle.includes('Counter')) {
      // React counter simulation
      return 'Component rendered successfully'
    } else if (questionTitle.includes('Filter')) {
      // React filter simulation
      return 'Filter component working'
    } else if (questionTitle.includes('Two Sum')) {
      // Two sum simulation
      const func = new Function('nums', 'target', code + '\nreturn JSON.stringify(twoSum(nums, target));')
      const [numsStr, targetStr] = input.split(', target: ')
      const nums = JSON.parse(numsStr)
      const target = parseInt(targetStr)
      return func(nums, target)
    } else if (questionTitle.includes('Parentheses')) {
      // Valid parentheses simulation
      const func = new Function('s', code + '\nreturn isValid(s);')
      return String(func(input))
    }

    return 'Code executed'
  } catch (error: any) {
    throw new Error(error.message || 'Execution failed')
  }
}

/**
 * Evaluates all coding questions
 */
export function evaluateAllCodingQuestions(
  questions: CodingQuestion[],
  answers: { [key: number]: string }
): CodeEvaluationResult[] {
  const results: CodeEvaluationResult[] = []

  questions.forEach((question) => {
    const userCode = answers[question.id]
    if (userCode && userCode.trim() !== question.starterCode.trim()) {
      const result = evaluateCode(question, userCode)
      results.push(result)
    } else {
      // No answer provided
      results.push({
        questionId: question.id,
        totalTestCases: question.testCases.length,
        passedTestCases: 0,
        testCaseResults: question.testCases.map((tc) => ({
          input: tc.input,
          expectedOutput: tc.output,
          actualOutput: '',
          passed: false,
          error: 'No code submitted',
        })),
        score: 0,
      })
    }
  })

  return results
}
