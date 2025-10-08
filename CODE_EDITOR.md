# Code Editor / Terminal Page

## 🎯 Overview

A full-featured LeetCode-style code editor interface for solving programming problems with real-time testing and execution.

## ✨ Features

### **Split View Layout**
- **Left Panel (50%)** - Problem description and information
- **Right Panel (50%)** - Code editor and output terminal

### **Left Panel - Problem Description**

#### **Tabs**
1. **Description** 📖
   - Problem statement
   - Examples with input/output
   - Constraints
   - Clean, readable formatting

2. **Solutions** 💡
   - Unlocked after solving
   - Community solutions
   - Different approaches

3. **Discuss** 💬
   - Community discussions
   - Questions and answers
   - Tips and tricks

### **Right Panel - Code Editor**

#### **Editor Features**
- ✅ **Multi-language support**: C, C++, Python, Java
- ✅ **Line numbers** on the left
- ✅ **Tab key support** (inserts 4 spaces)
- ✅ **Adjustable font size** (10-24px)
- ✅ **Syntax-aware** textarea
- ✅ **Auto-resize** based on content
- ✅ **Monospace font** for code clarity

#### **Language Selector**
- Dropdown with emoji icons
- Switches starter code automatically
- Preserves your code when switching

#### **Toolbar Actions**
- 🔄 **Reset** - Restore starter code
- ⚙️ **Settings** - Editor preferences
- ➕➖ **Font Size** - Adjust text size

### **Output Terminal**

#### **Test Results Display**
- ✅ **Visual indicators** (✓ for pass, ✗ for fail)
- 📊 **Test case details**:
  - Input values
  - Expected output
  - Actual output
  - Pass/fail status
- 🎨 **Color-coded results**:
  - Green for passed tests
  - Red for failed tests

#### **Execution Info**
- ⏱️ Execution time
- 💾 Memory usage
- 📝 Console output

### **Action Buttons**

1. **Run Code** ▶️
   - Executes code with sample test cases
   - Shows output in terminal
   - Displays test results

2. **Submit** ✅
   - Runs all test cases
   - Submits solution
   - Updates problem status

### **Header Bar**
- ⬅️ **Back button** - Return to problems list
- 📝 **Problem title** and number
- 🎯 **Difficulty badge** (Easy/Medium/Hard)
- ⚙️ **Settings** button

## 🎨 Design Features

### **Color Coding**
- **Easy** - 🟢 Green
- **Medium** - 🟡 Yellow
- **Hard** - 🔴 Red

### **Animations**
- Smooth tab transitions
- Test result fade-ins
- Hover effects on buttons
- Scale animations on interactions

### **Responsive Layout**
- Fixed header with sticky positioning
- Scrollable problem description
- Scrollable code editor
- Scrollable output terminal
- Proper height calculations

## 📝 Starter Code Templates

Each language includes:
- Function signature
- Comments for guidance
- Test case setup
- Print/output statements

### **Supported Languages**

| Language | Icon | Template Included |
|----------|------|-------------------|
| Python   | 🐍   | ✅ |
| C++      | 🔷   | ✅ |
| C        | 🔵   | ✅ |
| Java     | ☕   | ✅ |

## 🚀 Usage

### **Access the Editor**
1. Go to `/practice`
2. Click any problem card
3. Opens editor at `/practice/[id]`

### **Write Code**
1. Select your preferred language
2. Write solution in the editor
3. Use Tab key for indentation
4. Adjust font size as needed

### **Test Your Code**
1. Click "Run Code" button
2. View test results in output panel
3. Check passed/failed tests
4. Debug if needed

### **Submit Solution**
1. Click "Submit" button
2. All test cases run
3. Solution is evaluated
4. Problem status updates

## 🔧 Technical Details

### **File Structure**
```
app/
  practice/
    [id]/
      page.tsx          # Main editor page
components/
  CodeEditor.tsx        # Custom code editor component
```

### **Key Components**
- **CodeEditor** - Custom textarea with line numbers
- **Problem Description** - Tabbed interface
- **Output Terminal** - Test results display
- **Action Bar** - Run/Submit buttons

### **State Management**
- `code` - Current code content
- `language` - Selected programming language
- `output` - Terminal output text
- `testResults` - Array of test case results
- `isRunning` - Execution status
- `fontSize` - Editor font size

## 💡 Future Enhancements

- [ ] Real code execution backend
- [ ] Syntax highlighting
- [ ] Code autocomplete
- [ ] Debugging tools
- [ ] Custom test cases
- [ ] Code snippets library
- [ ] Keyboard shortcuts
- [ ] Theme customization
- [ ] Split screen resizing
- [ ] Code sharing
- [ ] Video solutions
- [ ] Hints system
