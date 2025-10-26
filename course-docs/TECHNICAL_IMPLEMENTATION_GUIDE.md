# Technical Implementation Guide
## Building a Course Platform Like Project React

---

## 🎯 Overview

This guide provides step-by-step instructions for implementing a course platform similar to Project React from scratch, including architecture decisions, component structure, and implementation patterns.

---

## 📐 System Architecture

### Core Platform Components

```
┌─────────────────────────────────────────────────────────────┐
│                    COURSE PLATFORM                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────┐      ┌──────────────────────────┐  │
│  │                     │      │                          │  │
│  │   Course Engine     │◄────►│   Content Delivery      │  │
│  │   (Devbar Logic)    │      │   (Module Components)   │  │
│  │                     │      │                          │  │
│  │  - Navigation       │      │  - Step Content         │  │
│  │  - Progress Track   │      │  - Code Snippets        │  │
│  │  - State Management │      │  - Instructions         │  │
│  │  - localStorage     │      │  - Media Assets         │  │
│  │                     │      │                          │  │
│  └────────────────────┘      └──────────────────────────┘  │
│           │                             │                   │
│           │                             │                   │
│           ▼                             ▼                   │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │           UI Component Library                        │  │
│  │                                                       │  │
│  │   Buttons | Cards | Inputs | Menus | Code Display   │  │
│  │                                                       │  │
│  └─────────────────────────────────────────────────────┘  │
│           │                             │                   │
│           │                             │                   │
│           ▼                             ▼                   │
│  ┌──────────────────┐      ┌──────────────────────────┐  │
│  │                   │      │                          │  │
│  │  Theme System     │      │   Student Application    │  │
│  │  (Dark/Light)     │      │   (What They Build)      │  │
│  │                   │      │                          │  │
│  └──────────────────┘      └──────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Implementation Steps

### Phase 1: Project Foundation (Week 1)

#### Step 1.1: Initialize Project

```bash
# Create Vite + React project
npm create vite@latest my-course-platform -- --template react
cd my-course-platform

# Install core dependencies
npm install react-router-dom @reduxjs/toolkit react-redux
npm install axios axios-mock-adapter
npm install lucide-react react-syntax-highlighter
npm install date-fns js-cookie jose zod

# Install UI dependencies
npm install @radix-ui/react-avatar @radix-ui/react-checkbox
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-popover @radix-ui/react-progress
npm install @radix-ui/react-scroll-area @radix-ui/react-select
npm install @radix-ui/react-separator @radix-ui/react-slot

# Install styling
npm install tailwindcss postcss autoprefixer
npm install tailwindcss-animate class-variance-authority
npm install clsx tailwind-merge

# Initialize Tailwind
npx tailwindcss init -p
```

#### Step 1.2: Configure Path Aliases

**jsconfig.json**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**vite.config.js**
```javascript
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

#### Step 1.3: Setup Tailwind Configuration

**tailwind.config.js**
```javascript
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

**src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}
```

---

### Phase 2: Theme System (Week 1)

#### Step 2.1: Create Theme Provider

**src/components/ThemeProvider.jsx**
```jsx
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeProviderContext = createContext({
  theme: 'dark',
  setTheme: () => null,
});

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children, defaultTheme = 'dark' }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('course-theme') || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    const appliedTheme = theme === 'system' 
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;
    
    root.classList.add(appliedTheme);
    localStorage.setItem('course-theme', theme);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
```

#### Step 2.2: Wrap App with Theme Provider

**src/main.jsx**
```jsx
import ReactDOM from 'react-dom/client';
import ThemeProvider from '@/components/ThemeProvider';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

---

### Phase 3: UI Component Library (Week 2)

#### Step 3.1: Create Utility Functions

**src/lib/utils/cn.js**
```javascript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

**src/lib/utils/localStorage.js**
```javascript
export const getItem = (key) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting localStorage key "${key}":`, error);
    return null;
  }
};

export const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
};

export const removeItem = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
  }
};
```

#### Step 3.2: Create Base UI Components

**src/components/ui/Button.jsx**
```jsx
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = forwardRef(({ 
  className, 
  variant, 
  size, 
  asChild = false, 
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
```

**src/components/ui/Progress.jsx**
```jsx
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils/cn';

const Progress = ({ className, value, ...props }) => (
  <ProgressPrimitive.Root
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className='h-full w-full flex-1 bg-primary transition-all'
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
);

export { Progress };
```

**src/components/ui/Separator.jsx**
```jsx
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/lib/utils/cn';

const Separator = ({ className, orientation = 'horizontal', ...props }) => (
  <SeparatorPrimitive.Root
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    {...props}
  />
);

export { Separator };
```

**src/components/ui/index.js**
```javascript
export { Button } from './Button';
export { Progress } from './Progress';
export { Separator } from './Separator';
// Add more as you create them
```

---

### Phase 4: Course Engine Core (Week 3)

#### Step 4.1: Create Module Structure

**src/components/Devbar/Module0.jsx**
```jsx
import { CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui';

export const Intro = () => {
  return (
    <div>
      <h2>Welcome to Your Course!</h2>
      <Separator className='mb-2' />
      <p>
        This is the introduction to your course platform. You'll learn
        by building real projects step by step.
      </p>
      <h3>What You'll Learn</h3>
      <Separator className='mb-2' />
      <ul>
        <li>Core concepts</li>
        <li>Best practices</li>
        <li>Real-world applications</li>
      </ul>
    </div>
  );
};

export const Step1 = () => {
  return (
    <div>
      <h2>Your First Step</h2>
      <p>Let's begin with the basics...</p>
    </div>
  );
};

export const Completed = () => {
  return (
    <div>
      <CheckCircle className='mx-auto mb-8 h-40 w-40' />
      <h2>Module Completed!</h2>
      <p>Congratulations! Ready for the next module?</p>
    </div>
  );
};
```

#### Step 4.2: Create Devbar Component

**src/components/Devbar/Devbar.jsx**
```jsx
import { useEffect, useMemo, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { Button, Progress, Separator } from '@/components/ui';
import { getItem, setItem } from '@/lib/utils/localStorage';
import {
  Intro as M0Intro,
  Step1 as M0Step1,
  Completed as M0Completed,
} from './Module0';

const INITIAL_MODULE = '0-introduction';

const modules = {
  '0-introduction': {
    steps: {
      0: <M0Intro />,
      1: <M0Step1 />,
      2: <M0Completed />,
    },
  },
  // Add more modules here
};

const initialModuleProgress = Object.keys(modules).reduce((acc, key) => {
  acc[key] = 0;
  return acc;
}, {});

const Devbar = () => {
  const { theme } = useTheme();
  
  const [currentModule, setCurrentModule] = useState(
    getItem('course-module') || INITIAL_MODULE
  );
  
  const [moduleProgress, setModuleProgress] = useState(
    getItem('course-progress') || initialModuleProgress
  );

  useEffect(() => {
    if (!getItem('course-module')) {
      setItem('course-module', INITIAL_MODULE);
    }
    if (!getItem('course-progress')) {
      setItem('course-progress', initialModuleProgress);
    }
  }, []);

  const moduleStep = moduleProgress[currentModule];
  const moduleStepsLength = useMemo(
    () => Object.keys(modules[currentModule].steps).length,
    [currentModule]
  );

  const progressPercentage = (moduleStep / (moduleStepsLength - 1)) * 100;

  const handlePreviousStep = () => {
    if (moduleStep > 0) {
      const newProgress = {
        ...moduleProgress,
        [currentModule]: moduleStep - 1,
      };
      setModuleProgress(newProgress);
      setItem('course-progress', newProgress);
    }
  };

  const handleNextStep = () => {
    if (moduleStep < moduleStepsLength - 1) {
      const newProgress = {
        ...moduleProgress,
        [currentModule]: moduleStep + 1,
      };
      setModuleProgress(newProgress);
      setItem('course-progress', newProgress);
    }
  };

  return (
    <div className='h-screen w-[700px] overflow-auto bg-card'>
      <div className='flex items-center justify-between p-4'>
        <h1 className='text-xl font-bold'>Course Platform</h1>
        <div className='flex gap-2'>
          <Button
            disabled={moduleStep === 0}
            variant='secondary'
            onClick={handlePreviousStep}
          >
            Previous
          </Button>
          <Button
            disabled={moduleStep === moduleStepsLength - 1}
            onClick={handleNextStep}
          >
            Next
          </Button>
        </div>
      </div>

      <Separator />

      <div className='p-4'>
        <Progress value={progressPercentage} />
        <p className='mt-2 text-sm text-muted-foreground'>
          Step {moduleStep + 1} of {moduleStepsLength}
        </p>
      </div>

      <Separator />

      <div className='p-4'>
        {modules[currentModule].steps[moduleStep]}
      </div>
    </div>
  );
};

export default Devbar;
```

#### Step 4.3: Create App Layout

**src/App.jsx**
```jsx
import Devbar from '@/components/Devbar/Devbar';

const App = () => {
  return (
    <div className='flex'>
      <div className='fixed left-0 top-0 bottom-0'>
        <Devbar />
      </div>
      <div className='ml-[700px] flex-1'>
        <div className='flex h-screen items-center justify-center'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Welcome to the Course
            </h2>
            <p className='text-muted-foreground'>
              Follow the steps on the left to start learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
```

---

### Phase 5: Code Highlighting System (Week 3)

#### Step 5.1: Create CodeHighlighter Component

**src/components/Devbar/CodeHighlighter.jsx**
```jsx
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui';

const CodeHighlighter = ({
  children,
  highlightedLines = [],
  language = 'jsx',
  title,
}) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='my-4 rounded-lg border bg-card'>
      <div className='flex items-center justify-between border-b px-4 py-2'>
        {title && (
          <span className='text-sm text-muted-foreground'>{title}</span>
        )}
        <Button
          onClick={handleCopy}
          variant='ghost'
          size='icon'
          className='ml-auto'
        >
          {copied ? (
            <Check size={16} className='text-green-500' />
          ) : (
            <Copy size={16} />
          )}
        </Button>
      </div>
      <div className='overflow-x-auto'>
        <SyntaxHighlighter
          language={language}
          style={theme === 'dark' ? atomDark : oneLight}
          showLineNumbers
          wrapLines
          lineProps={(lineNumber) => {
            const style = { display: 'block' };
            if (highlightedLines.includes(lineNumber)) {
              style.backgroundColor =
                theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
            }
            return { style };
          }}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeHighlighter;
```

#### Step 5.2: Use in Module Steps

```jsx
import CodeHighlighter from './CodeHighlighter';

export const Step1 = () => {
  const code = `const HelloWorld = () => {
  return <div>Hello, World!</div>;
};

export default HelloWorld;`;

  return (
    <div>
      <h2>Creating Your First Component</h2>
      <p>Let's create a simple React component:</p>
      
      <CodeHighlighter 
        title='src/components/HelloWorld.jsx'
        highlightedLines={[2]}
      >
        {code}
      </CodeHighlighter>
      
      <p>Notice the highlighted line shows the return statement.</p>
    </div>
  );
};
```

---

### Phase 6: Module Selection System (Week 4)

#### Step 6.1: Add Select Component

**src/components/ui/Select.jsx**
```jsx
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = ({ className, children, ...props }) => (
  <SelectPrimitive.Trigger
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className='h-4 w-4 opacity-50' />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);

const SelectContent = ({ className, children, ...props }) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className='p-1'>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);

const SelectItem = ({ className, children, ...props }) => (
  <SelectPrimitive.Item
    className={cn(
      'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <SelectPrimitive.ItemIndicator>
        <Check className='h-4 w-4' />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
```

#### Step 6.2: Add Module Selector to Devbar

```jsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

// Inside Devbar component, after progress bar:

const handleModuleChange = (moduleKey) => {
  setCurrentModule(moduleKey);
  setItem('course-module', moduleKey);
};

return (
  <div className='h-screen w-[700px] overflow-auto bg-card'>
    {/* ... header ... */}
    
    <div className='p-4'>
      <Progress value={progressPercentage} />
    </div>

    <Separator />

    <div className='p-4'>
      <Select value={currentModule} onValueChange={handleModuleChange}>
        <SelectTrigger>
          <SelectValue placeholder='Select a module' />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(modules).map((moduleKey) => (
            <SelectItem key={moduleKey} value={moduleKey}>
              {moduleKey}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    <Separator />

    <div className='p-4'>
      {modules[currentModule].steps[moduleStep]}
    </div>
  </div>
);
```

---

### Phase 7: Task Lists and Completion (Week 4)

#### Step 7.1: Create TaskList Component

**src/components/Devbar/TaskList.jsx**
```jsx
import { Checkbox } from '@/components/ui';

const TaskList = ({ checked, tasks }) => {
  return (
    <div className='flex flex-col gap-2 my-4'>
      {tasks.map((task, index) => (
        <div key={index} className='flex items-start gap-2'>
          <Checkbox checked={checked} disabled className='mt-1' />
          <div 
            className='flex-1' 
            dangerouslySetInnerHTML={{ __html: task }} 
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
```

#### Step 7.2: Create Checkbox Component

**src/components/ui/Checkbox.jsx**
```jsx
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const Checkbox = ({ className, ...props }) => (
  <CheckboxPrimitive.Root
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className='flex items-center justify-center text-current'>
      <Check className='h-4 w-4' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

export { Checkbox };
```

#### Step 7.3: Use in Module Intro

```jsx
import TaskList from './TaskList';

export const Intro = () => {
  const tasks = [
    'Complete <code>Step 1</code>',
    'Complete <code>Step 2</code>',
    'Complete <code>Step 3</code>',
  ];

  return (
    <div>
      <h2>Module 1: Introduction</h2>
      <Separator className='mb-2' />
      
      <h3>Tasks</h3>
      <Separator className='mb-2' />
      <TaskList checked={false} tasks={tasks} />
    </div>
  );
};
```

---

### Phase 8: Celebration System (Week 5)

#### Step 8.1: Install Confetti

```bash
npm install react-confetti
```

#### Step 8.2: Create Completion Screen

```jsx
import { CheckCircle } from 'lucide-react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@/hooks/useWindowSize'; // Create this hook

export const Completed = () => {
  const { width, height } = useWindowSize();

  return (
    <div className='relative'>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={200}
      />
      <div className='text-center'>
        <CheckCircle className='mx-auto h-32 w-32 text-green-500 mb-4' />
        <h2 className='text-3xl font-bold mb-2'>Module Completed!</h2>
        <p className='text-muted-foreground'>
          Congratulations! You've completed this module.
        </p>
        <p className='mt-4'>
          Select the next module from the dropdown above to continue.
        </p>
      </div>
    </div>
  );
};
```

#### Step 8.3: Create useWindowSize Hook

**src/hooks/useWindowSize.js**
```javascript
import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
```

---

### Phase 9: Settings Menu (Week 5)

#### Step 9.1: Create DevbarMenu Component

**src/components/Devbar/DevbarMenu.jsx**
```jsx
import { Menu, Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from '@/components/ui';

const DevbarMenu = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu className='h-5 w-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Sun className='mr-2 h-4 w-4' />
            Theme
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className='mr-2 h-4 w-4' />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className='mr-2 h-4 w-4' />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Laptop className='mr-2 h-4 w-4' />
                System
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DevbarMenu;
```

#### Step 9.2: Create DropdownMenu Component

**(This is a complex component - reference Radix UI docs for full implementation)**

---

## 🎯 Content Creation Workflow

### Creating a New Module

1. **Create Module File**
```jsx
// src/components/Devbar/Module1.jsx

const tasks = [
  'Task 1 description',
  'Task 2 description',
  // ...
];

export const Intro = () => {
  return (
    <div>
      <h2>Module Title</h2>
      <Separator />
      <p>Introduction...</p>
      
      <h3>Description</h3>
      <Separator />
      <p>What students will learn...</p>
      
      <h3>Tasks</h3>
      <Separator />
      <TaskList checked={false} tasks={tasks} />
    </div>
  );
};

export const Step1 = () => {
  return (
    <div>
      <h2>Step 1 Title</h2>
      <p>Instructions...</p>
      <CodeHighlighter title="file/path.jsx">
        {`code here`}
      </CodeHighlighter>
    </div>
  );
};

// ... more steps

export const Completed = () => {
  return (
    <div className='relative'>
      <Confetti />
      <CheckCircle />
      <h2>Module Completed!</h2>
    </div>
  );
};
```

2. **Import in Devbar**
```jsx
import {
  Intro as M1Intro,
  Step1 as M1Step1,
  Step2 as M1Step2,
  Completed as M1Completed,
} from './Module1';

const modules = {
  // ... existing modules
  '1-new-module': {
    steps: {
      0: <M1Intro />,
      1: <M1Step1 />,
      2: <M1Step2 />,
      3: <M1Completed />,
    },
  },
};
```

### Content Guidelines

1. **Clear Learning Objectives**
   - State what students will learn
   - List concrete outcomes
   - Show real-world applications

2. **Progressive Complexity**
   - Start simple
   - Build on previous concepts
   - Introduce one concept at a time

3. **Code Examples**
   - Show complete code
   - Highlight changes
   - Include file paths
   - Explain why, not just what

4. **Best Practices**
   - Follow industry standards
   - Explain trade-offs
   - Show common pitfalls
   - Provide alternatives

---

## 🚀 Advanced Features

### 1. Analytics Integration

```jsx
// Track student progress
const trackProgress = (moduleId, stepId) => {
  // Send to analytics service
  analytics.track('step_completed', {
    module: moduleId,
    step: stepId,
    timestamp: new Date(),
  });
};
```

### 2. Search Functionality

```jsx
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchContent = (query) => {
    // Search through all module content
    // Return matching steps
  };

  return <Input onChange={(e) => setQuery(e.target.value)} />;
};
```

### 3. Bookmarking

```jsx
const BookmarkButton = ({ moduleId, stepId }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    const bookmarks = getItem('bookmarks') || [];
    // Add/remove bookmark
    setItem('bookmarks', updatedBookmarks);
  };

  return <Button onClick={toggleBookmark}>Bookmark</Button>;
};
```

### 4. Code Playground

```jsx
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';

const CodePlayground = ({ code }) => {
  return (
    <LiveProvider code={code}>
      <LiveEditor />
      <LivePreview />
    </LiveProvider>
  );
};
```

---

## 📊 Testing Strategy

### Unit Tests

```javascript
// Devbar.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Devbar from './Devbar';

test('navigates to next step', () => {
  render(<Devbar />);
  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);
  // Assert step changed
});
```

### Integration Tests

```javascript
test('progress persists across sessions', () => {
  // Simulate navigation
  // Check localStorage
  // Reload component
  // Verify progress restored
});
```

---

## 🎓 Conclusion

This implementation guide provides a complete roadmap for building a course platform similar to Project React. Follow these phases sequentially, customize the content for your specific needs, and extend with additional features as required.

**Key Takeaways:**
- Modular architecture enables easy content addition
- localStorage provides simple progress persistence
- Theme system enhances user experience
- Code highlighting aids learning
- Celebration mechanics boost engagement

Build amazing learning experiences! 🚀

