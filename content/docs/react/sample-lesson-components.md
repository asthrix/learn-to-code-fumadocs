---
title: "Introduction to React Components"
description: "Learn how to create and use React components, the building blocks of React applications"
module: "M1"
lesson: "3"
difficulty: "beginner"
duration: "45"
project_phase: "Creating TaskCard and Header components"
prerequisites: ["JSX Fundamentals", "React Setup"]
learning_objectives:
  - "Understand what React components are and why they're important"
  - "Create functional components with JSX"
  - "Pass and use props in components"
  - "Apply component composition patterns"
tags: ["components", "jsx", "props", "composition"]
---

# Introduction to React Components

## Learning Objectives
By the end of this lesson, you will:
- [ ] Understand what React components are and why they're the foundation of React apps
- [ ] Create functional components using modern React syntax
- [ ] Pass data between components using props
- [ ] Apply component composition to build complex UIs from simple pieces

## Project Context
In this lesson, we'll create the first components for our **TaskFlow Pro** application. We'll build a `Header` component for navigation and a `TaskCard` component to display individual tasks. These components will form the foundation of our task management interface.

---

## What Are React Components?

React components are **reusable pieces of UI** that encapsulate both the visual appearance and behavior of a part of your application. Think of components like **custom HTML elements** that you can create, customize, and reuse throughout your app.

### Why Components Matter

In traditional web development, you might copy and paste HTML for similar elements. React components eliminate this repetition by allowing you to:

- **Reuse code** across different parts of your application
- **Maintain consistency** in design and behavior
- **Easier debugging** by isolating functionality
- **Scale applications** by composing small pieces into larger interfaces

### Component Hierarchy

React applications are built as a **tree of components**, where:
- Each component can contain other components (children)
- Components receive data from parents via **props**
- Components can manage their own internal state

```
App
├── Header
├── Sidebar
└── TaskList
    ├── TaskCard
    ├── TaskCard
    └── TaskCard
```

---

## Creating Your First Component

### Basic Functional Component

Modern React uses **functional components** with hooks. Here's the simplest possible component:

```jsx
// components/Welcome.jsx
function Welcome() {
  return <h1>Welcome to TaskFlow Pro!</h1>;
}

export default Welcome;
```

### Component with JSX Structure

Let's create a more realistic component for our TaskFlow Pro header:

```jsx
// components/Header.jsx
function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">TaskFlow Pro</h1>
        <nav>
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
            Add Task
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
```

### Advanced Component with Props

Components become powerful when they accept **props** (properties) to customize their behavior:

```jsx
// components/TaskCard.jsx
function TaskCard({ title, description, priority, dueDate, isCompleted }) {
  const priorityColors = {
    high: 'border-red-500 bg-red-50',
    medium: 'border-yellow-500 bg-yellow-50',
    low: 'border-green-500 bg-green-50'
  };

  return (
    <div className={`border-l-4 p-4 rounded-lg shadow-sm ${priorityColors[priority]}`}>
      <div className="flex items-center justify-between">
        <h3 className={`font-semibold ${isCompleted ? 'line-through text-gray-500' : ''}`}>
          {title}
        </h3>
        <span className={`px-2 py-1 text-xs rounded ${
          priority === 'high' ? 'bg-red-100 text-red-800' :
          priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {priority}
        </span>
      </div>
      
      {description && (
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      )}
      
      {dueDate && (
        <p className="text-gray-500 text-xs mt-2">
          Due: {new Date(dueDate).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}

export default TaskCard;
```

---

## ✅ Best Practices

### 1. Single Responsibility Principle
**Why:** Each component should have one clear purpose, making it easier to understand, test, and maintain.

```javascript
// Good: Focused component with single responsibility
function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}

// Good: Separate component for actions
function TaskActions({ onEdit, onDelete }) {
  return (
    <div className="task-actions">
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
```

### 2. Descriptive Component Names
**Why:** Clear names make your code self-documenting and easier for team members to understand.

```javascript
// Good: Clear, descriptive names
function UserProfileCard({ user }) { /* ... */ }
function NavigationHeader() { /* ... */ }
function TaskListItem({ task }) { /* ... */ }

// Bad: Vague or generic names
function Card({ data }) { /* ... */ }
function Component1() { /* ... */ }
function Thing({ stuff }) { /* ... */ }
```

### 3. Consistent File Organization
**Why:** Organized file structure helps team members find and maintain components efficiently.

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Modal.jsx
│   │   └── LoadingSpinner.jsx
│   ├── layout/           # Layout-specific components
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── Footer.jsx
│   └── features/         # Feature-specific components
│       ├── tasks/
│       │   ├── TaskCard.jsx
│       │   ├── TaskList.jsx
│       │   └── TaskForm.jsx
│       └── users/
│           ├── UserProfile.jsx
│           └── UserSettings.jsx
```

### 4. Props Validation (TypeScript or PropTypes)
**Why:** Catch errors early and make component APIs clear to other developers.

```javascript
// Good: Using TypeScript for props validation
interface TaskCardProps {
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  isCompleted: boolean;
}

function TaskCard({ title, description, priority, dueDate, isCompleted }: TaskCardProps) {
  // Component implementation
}
```

---

## ❌ Common Mistakes

### 1. Creating Monolithic Components
**Problem:** Putting too much functionality in a single component makes it hard to maintain and reuse.

```javascript
// Bad: Everything in one massive component
function TaskDashboard() {
  return (
    <div>
      {/* Header with navigation */}
      <header className="bg-blue-600 p-4">
        <h1>TaskFlow Pro</h1>
        <nav>
          <button>Home</button>
          <button>Projects</button>
          <button>Settings</button>
        </nav>
      </header>
      
      {/* Sidebar with filters */}
      <aside className="w-64 bg-gray-100">
        <h2>Filters</h2>
        <input type="text" placeholder="Search..." />
        <select>
          <option>All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </aside>
      
      {/* Main content with task list */}
      <main>
        <h2>Your Tasks</h2>
        {/* Hundreds of lines of task rendering logic */}
      </main>
    </div>
  );
}
```

**Solution:** Break it into smaller, focused components:

```javascript
// Good: Composed from smaller components
function TaskDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <TaskSidebar />
        <TaskMainContent />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">TaskFlow Pro</h1>
      <Navigation />
    </header>
  );
}
```

### 2. Inline Styles and Poor CSS Organization
**Problem:** Inline styles make components hard to maintain and don't leverage CSS optimization.

```javascript
// Bad: Inline styles everywhere
function TaskCard({ task }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px 0',
      backgroundColor: task.priority === 'high' ? '#fee' : '#efe',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
        {task.title}
      </h3>
    </div>
  );
}
```

**Solution:** Use CSS classes and CSS-in-JS libraries or CSS modules:

```javascript
// Good: Using Tailwind CSS classes
function TaskCard({ task }) {
  const priorityStyles = {
    high: 'bg-red-50 border-red-200',
    medium: 'bg-yellow-50 border-yellow-200',
    low: 'bg-green-50 border-green-200'
  };

  return (
    <div className={`border rounded-lg p-4 my-2 shadow-sm ${priorityStyles[task.priority]}`}>
      <h3 className="text-lg font-bold mb-2">{task.title}</h3>
    </div>
  );
}
```

### 3. Not Using Component Composition
**Problem:** Duplicating code instead of creating reusable components.

```javascript
// Bad: Repeating similar button code
function TaskCard() {
  return (
    <div>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
```

**Solution:** Create reusable components:

```javascript
// Good: Reusable Button component
function Button({ variant = 'primary', children, onClick, ...props }) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    danger: 'bg-red-500 hover:bg-red-600',
    secondary: 'bg-gray-500 hover:bg-gray-600'
  };

  return (
    <button
      className={`text-white px-4 py-2 rounded transition-colors ${variants[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

// Usage
function TaskCard() {
  return (
    <div>
      <Button variant="primary" onClick={handleEdit}>Edit</Button>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </div>
  );
}
```

---

## 🔨 Implement in TaskFlow Pro

### Task: Create Header and TaskCard Components

Let's build the foundational components for our TaskFlow Pro application.

#### Step 1: Create the Project Structure

```bash
src/
├── components/
│   ├── layout/
│   │   └── Header.jsx
│   └── tasks/
│       └── TaskCard.jsx
├── App.jsx
└── main.jsx
```

#### Step 2: Build the Header Component

Create `src/components/layout/Header.jsx`:

```jsx
function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">T</span>
            </div>
            <h1 className="text-2xl font-bold">TaskFlow Pro</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="hover:text-blue-200 transition-colors">
              Dashboard
            </a>
            <a href="#projects" className="hover:text-blue-200 transition-colors">
              Projects
            </a>
            <a href="#settings" className="hover:text-blue-200 transition-colors">
              Settings
            </a>
          </nav>

          {/* Action Button */}
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            + Add Task
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
```

#### Step 3: Build the TaskCard Component

Create `src/components/tasks/TaskCard.jsx`:

```jsx
function TaskCard({ 
  title, 
  description, 
  priority = 'medium', 
  dueDate, 
  isCompleted = false,
  onToggleComplete,
  onEdit,
  onDelete 
}) {
  const priorityConfig = {
    high: {
      border: 'border-l-red-500',
      badge: 'bg-red-100 text-red-800',
      bg: 'bg-red-50'
    },
    medium: {
      border: 'border-l-yellow-500',
      badge: 'bg-yellow-100 text-yellow-800',
      bg: 'bg-yellow-50'
    },
    low: {
      border: 'border-l-green-500',
      badge: 'bg-green-100 text-green-800',
      bg: 'bg-green-50'
    }
  };

  const config = priorityConfig[priority];
  const isOverdue = dueDate && new Date(dueDate) < new Date() && !isCompleted;

  return (
    <div className={`
      border-l-4 ${config.border} 
      ${isCompleted ? 'bg-gray-50' : config.bg}
      rounded-r-lg shadow-sm p-4 transition-all hover:shadow-md
      ${isOverdue ? 'ring-2 ring-red-300' : ''}
    `}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onToggleComplete?.()}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <h3 className={`font-semibold text-lg ${
            isCompleted ? 'line-through text-gray-500' : 'text-gray-900'
          }`}>
            {title}
          </h3>
        </div>
        
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.badge}`}>
          {priority.toUpperCase()}
        </span>
      </div>

      {/* Description */}
      {description && (
        <p className={`text-sm mb-3 ${
          isCompleted ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {description}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Due Date */}
        {dueDate && (
          <span className={`text-xs ${
            isOverdue ? 'text-red-600 font-medium' : 'text-gray-500'
          }`}>
            Due: {new Date(dueDate).toLocaleDateString()}
            {isOverdue && ' (Overdue!)'}
          </span>
        )}

        {/* Actions */}
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit?.()}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete?.()}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
```

#### Step 4: Update App Component

Update `src/App.jsx` to use our new components:

```jsx
import Header from './components/layout/Header';
import TaskCard from './components/tasks/TaskCard';

function App() {
  // Sample task data for demonstration
  const sampleTasks = [
    {
      id: 1,
      title: "Complete React Components Lesson",
      description: "Learn about functional components, props, and composition patterns",
      priority: "high",
      dueDate: "2025-10-15",
      isCompleted: false
    },
    {
      id: 2,
      title: "Review TaskFlow Pro Requirements",
      description: "Go through the project specifications and plan the implementation",
      priority: "medium",
      dueDate: "2025-10-12",
      isCompleted: true
    },
    {
      id: 3,
      title: "Set up Development Environment",
      description: "Install Node.js, create React app, and configure tools",
      priority: "low",
      dueDate: "2025-10-10",
      isCompleted: true
    }
  ];

  const handleToggleComplete = (taskId) => {
    console.log(`Toggle complete for task ${taskId}`);
    // We'll implement this properly in the State module
  };

  const handleEditTask = (taskId) => {
    console.log(`Edit task ${taskId}`);
    // We'll implement this properly in the State module
  };

  const handleDeleteTask = (taskId) => {
    console.log(`Delete task ${taskId}`);
    // We'll implement this properly in the State module
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Tasks</h2>
          <p className="text-gray-600">Manage your daily tasks and stay productive</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sampleTasks.map(task => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              dueDate={task.dueDate}
              isCompleted={task.isCompleted}
              onToggleComplete={() => handleToggleComplete(task.id)}
              onEdit={() => handleEditTask(task.id)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
```

#### Expected Result:
After implementing these components, you should see:
- A professional header with TaskFlow Pro branding
- A grid of task cards showing different priorities and states
- Interactive elements (checkboxes, buttons) that log to console
- Responsive design that works on different screen sizes

---

## ✅ Validation Checklist

After implementing the Header and TaskCard components, verify:

### **Functionality**
- [ ] Header displays correctly with logo, title, and navigation
- [ ] TaskCard components render with all provided props
- [ ] Priority colors display correctly (red=high, yellow=medium, green=low)
- [ ] Completed tasks show with line-through styling
- [ ] Click handlers log appropriate messages to console

### **Visual Design**
- [ ] Header has gradient background and proper spacing
- [ ] Task cards have consistent styling and hover effects
- [ ] Priority badges are clearly visible and well-colored
- [ ] Overdue tasks have red border warning
- [ ] Responsive layout works on mobile and desktop

### **Code Quality**
- [ ] Components are in correct directories (`layout/`, `tasks/`)
- [ ] All files export components correctly
- [ ] Props are clearly defined and used appropriately
- [ ] No ESLint errors or warnings
- [ ] Code follows consistent formatting

### **Accessibility**
- [ ] Checkboxes are properly labeled and keyboard accessible
- [ ] Color contrast meets accessibility standards
- [ ] Interactive elements have appropriate hover states
- [ ] Text is readable at different zoom levels

### **Project Integration**
- [ ] Components fit the TaskFlow Pro design vision
- [ ] Structure supports future feature additions
- [ ] Props interface allows for easy state management integration
- [ ] Components are reusable for different parts of the app

**Congratulations!** You've successfully created the foundational components for TaskFlow Pro. In the next lesson, we'll add state management to make these components fully interactive.