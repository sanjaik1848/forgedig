export interface MCQQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

export interface CodingQuestion {
  id: number
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  testCases: { input: string; output: string }[]
  starterCode: string
}

export interface Assessment {
  id: number
  title: string
  category: string
  duration: number
  passingScore: number
  certificatePrice: number
  mcqQuestions: MCQQuestion[]
  codingQuestions: CodingQuestion[]
  icon: string
  color: string
}

export const assessments: Assessment[] = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    category: 'Web Development',
    duration: 60,
    passingScore: 70,
    certificatePrice: 499,
    icon: '💻',
    color: 'from-yellow-500 to-orange-500',
    mcqQuestions: [
      {
        id: 1,
        question: 'What is the output of: console.log(typeof null)?',
        options: ['null', 'undefined', 'object', 'number'],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: 'Which method is used to add an element at the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: 'What does "===" operator do in JavaScript?',
        options: ['Assigns value', 'Compares value only', 'Compares value and type', 'None'],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: 'Which keyword is used to declare a constant in JavaScript?',
        options: ['var', 'let', 'const', 'static'],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: 'What is a closure in JavaScript?',
        options: [
          'A function with no return value',
          'A function that has access to outer function scope',
          'A loop structure',
          'An error handling mechanism',
        ],
        correctAnswer: 1,
      },
    ],
    codingQuestions: [
      {
        id: 1,
        title: 'Reverse a String',
        description: 'Write a function that reverses a given string.',
        difficulty: 'Easy',
        testCases: [
          { input: 'hello', output: 'olleh' },
          { input: 'world', output: 'dlrow' },
        ],
        starterCode: 'function reverseString(str) {\n  // Write your code here\n  \n}',
      },
      {
        id: 2,
        title: 'Find Maximum in Array',
        description: 'Write a function that finds the maximum number in an array.',
        difficulty: 'Easy',
        testCases: [
          { input: '[1, 5, 3, 9, 2]', output: '9' },
          { input: '[10, 20, 5, 15]', output: '20' },
        ],
        starterCode: 'function findMax(arr) {\n  // Write your code here\n  \n}',
      },
    ],
  },
  {
    id: 2,
    title: 'Python Programming',
    category: 'Programming',
    duration: 75,
    passingScore: 70,
    certificatePrice: 599,
    icon: '🐍',
    color: 'from-blue-500 to-cyan-500',
    mcqQuestions: [
      {
        id: 1,
        question: 'Which of the following is a mutable data type in Python?',
        options: ['tuple', 'string', 'list', 'int'],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: 'What is the output of: print(2 ** 3)?',
        options: ['5', '6', '8', '9'],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: 'Which keyword is used to define a function in Python?',
        options: ['function', 'def', 'func', 'define'],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: 'What does the "self" keyword represent in Python classes?',
        options: ['Current instance', 'Parent class', 'Static method', 'None'],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: 'Which method is used to add an item to a list in Python?',
        options: ['add()', 'append()', 'insert()', 'push()'],
        correctAnswer: 1,
      },
    ],
    codingQuestions: [
      {
        id: 1,
        title: 'Check Palindrome',
        description: 'Write a function to check if a string is a palindrome.',
        difficulty: 'Easy',
        testCases: [
          { input: 'racecar', output: 'True' },
          { input: 'hello', output: 'False' },
        ],
        starterCode: 'def is_palindrome(s):\n    # Write your code here\n    pass',
      },
      {
        id: 2,
        title: 'Sum of Even Numbers',
        description: 'Write a function that returns the sum of all even numbers in a list.',
        difficulty: 'Easy',
        testCases: [
          { input: '[1, 2, 3, 4, 5, 6]', output: '12' },
          { input: '[10, 15, 20, 25]', output: '30' },
        ],
        starterCode: 'def sum_even(numbers):\n    # Write your code here\n    pass',
      },
    ],
  },
  {
    id: 3,
    title: 'React Development',
    category: 'Frontend',
    duration: 90,
    passingScore: 75,
    certificatePrice: 699,
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-500',
    mcqQuestions: [
      {
        id: 1,
        question: 'What is JSX in React?',
        options: [
          'JavaScript XML',
          'Java Syntax Extension',
          'JSON Extension',
          'JavaScript Extension',
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: 'Which hook is used for side effects in React?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: 'What is the virtual DOM?',
        options: [
          'A copy of the real DOM',
          'A JavaScript representation of the DOM',
          'A database',
          'A server',
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: 'How do you pass data from parent to child component?',
        options: ['State', 'Props', 'Context', 'Redux'],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: 'What does useState return?',
        options: [
          'A single value',
          'An array with state and setter',
          'An object',
          'A function',
        ],
        correctAnswer: 1,
      },
    ],
    codingQuestions: [
      {
        id: 1,
        title: 'Counter Component',
        description: 'Create a simple counter component with increment and decrement buttons.',
        difficulty: 'Easy',
        testCases: [
          { input: 'Initial: 0, Click +', output: '1' },
          { input: 'Initial: 5, Click -', output: '4' },
        ],
        starterCode:
          'function Counter() {\n  // Write your component code here\n  \n  return (\n    <div>\n      {/* Your JSX here */}\n    </div>\n  )\n}',
      },
      {
        id: 2,
        title: 'Filter List',
        description: 'Create a component that filters a list based on search input.',
        difficulty: 'Medium',
        testCases: [
          { input: 'Search: "app"', output: 'Shows items with "app"' },
          { input: 'Search: ""', output: 'Shows all items' },
        ],
        starterCode:
          'function FilterList({ items }) {\n  // Write your component code here\n  \n  return (\n    <div>\n      {/* Your JSX here */}\n    </div>\n  )\n}',
      },
    ],
  },
  {
    id: 4,
    title: 'Data Structures & Algorithms',
    category: 'Computer Science',
    duration: 120,
    passingScore: 75,
    certificatePrice: 799,
    icon: '🧮',
    color: 'from-purple-500 to-pink-500',
    mcqQuestions: [
      {
        id: 1,
        question: 'What is the time complexity of binary search?',
        options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: 'Which data structure uses LIFO principle?',
        options: ['Queue', 'Stack', 'Array', 'Tree'],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: 'What is the best case time complexity of Quick Sort?',
        options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: 'Which traversal visits the root node first?',
        options: ['Inorder', 'Preorder', 'Postorder', 'Level order'],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: 'What is a hash collision?',
        options: [
          'Two keys map to same index',
          'Array overflow',
          'Stack overflow',
          'Memory leak',
        ],
        correctAnswer: 0,
      },
    ],
    codingQuestions: [
      {
        id: 1,
        title: 'Two Sum Problem',
        description: 'Find two numbers in an array that add up to a target sum.',
        difficulty: 'Medium',
        testCases: [
          { input: '[2, 7, 11, 15], target: 9', output: '[0, 1]' },
          { input: '[3, 2, 4], target: 6', output: '[1, 2]' },
        ],
        starterCode: 'function twoSum(nums, target) {\n  // Write your code here\n  \n}',
      },
      {
        id: 2,
        title: 'Valid Parentheses',
        description: 'Check if a string of parentheses is valid.',
        difficulty: 'Medium',
        testCases: [
          { input: '()', output: 'true' },
          { input: '([)]', output: 'false' },
        ],
        starterCode: 'function isValid(s) {\n  // Write your code here\n  \n}',
      },
    ],
  },
]
