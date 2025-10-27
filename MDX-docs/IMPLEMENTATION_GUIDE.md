# Quick Implementation Guide

**Fast-track guide to implement an MDX-based React course platform**

---

## Overview

This guide shows you how to quickly set up a documentation/course platform using these modules as MDX content. Choose your preferred framework and follow the steps.

---

## Option 1: Fumadocs (Recommended)

**Best for:** Documentation sites with built-in course features  
**Setup time:** 15 minutes  
**Difficulty:** Easy

### Step 1: Create Fumadocs Project

```bash
npx create-fumadocs-app@latest my-react-course
cd my-react-course
```

Choose during setup:
- Content source: **Fumadocs MDX**
- Styling: **Tailwind CSS**

### Step 2: Install Dependencies

```bash
npm install lucide-react react-confetti prism-react-renderer
```

### Step 3: Create Course Structure

```bash
mkdir -p content/modules/{module-0,module-1,module-2,module-3,module-4,module-5,module-6,module-7,module-8}
```

### Step 4: Configure Fumadocs

**`source.config.ts`**

```typescript
import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export const { docs, meta } = defineDocs({
  dir: 'content/modules',
  collections: ['default'],
});
```

### Step 5: Create Course Components

**`components/course/task-list.tsx`**

```tsx
import { Checkbox } from '@/components/ui/checkbox';

interface TaskListProps {
  tasks: string[];
  checked?: boolean;
}

export function TaskList({ tasks, checked = false }: TaskListProps) {
  return (
    <div className="space-y-3 my-4">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50">
          <Checkbox checked={checked} disabled className="mt-0.5" />
          <div 
            className="text-sm" 
            dangerouslySetInnerHTML={{ __html: task }} 
          />
        </div>
      ))}
    </div>
  );
}
```

**`components/course/code-block.tsx`**

```tsx
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  highlightLines?: (number | string)[];
}

export function CodeBlock({ 
  children, 
  language = 'jsx', 
  title,
  highlightLines = [] 
}: CodeBlockProps) {
  const shouldHighlight = (lineNumber: number) => {
    return highlightLines.some(line => {
      if (typeof line === 'number') return line === lineNumber;
      const [start, end] = line.toString().split('-').map(Number);
      return lineNumber >= start && lineNumber <= end;
    });
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border">
      {title && (
        <div className="px-4 py-2 bg-muted border-b text-sm font-mono">
          {title}
        </div>
      )}
      <Highlight theme={themes.vsDark} code={children.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} p-4 overflow-x-auto`} style={style}>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                className={shouldHighlight(i + 1) ? 'bg-yellow-500/20 -mx-4 px-4' : ''}
              >
                <span className="inline-block w-8 text-gray-500 select-none">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
```

### Step 6: Create Navigation Config

**`content/modules/meta.json`**

```json
{
  "title": "React Course",
  "pages": [
    "module-0",
    "module-1", 
    "module-2",
    "module-3",
    "module-4",
    "module-5",
    "module-6",
    "module-7",
    "module-8"
  ]
}
```

### Step 7: Add First Module

**`content/modules/module-0/index.mdx`**

```mdx
---
title: "Module 0: Introduction"
description: "Get started with the React course platform"
---

import { TaskList } from '@/components/course/task-list'

# Module 0 - Introduction

Welcome to Project React!

## Learning Objectives

<TaskList tasks={[
  "Understand course structure",
  "Navigate the platform",
  "Complete your first module"
]} />
```

### Step 8: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## Option 2: Next.js + MDX

**Best for:** Full control over design and features  
**Setup time:** 30 minutes  
**Difficulty:** Intermediate

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest my-react-course
cd my-react-course
```

Choose during setup:
- TypeScript: **Yes**
- Tailwind CSS: **Yes**
- App Router: **Yes**

### Step 2: Install MDX Dependencies

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install gray-matter reading-time
npm install lucide-react react-confetti prism-react-renderer
```

### Step 3: Configure MDX

**`next.config.mjs`**

```javascript
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
```

**`mdx-components.tsx`**

```tsx
import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from '@/components/course/code-block';
import { TaskList } from '@/components/course/task-list';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CodeBlock,
    TaskList,
    ...components,
  };
}
```

### Step 4: Create File Structure

```bash
mkdir -p app/modules/{module-0,module-1,module-2}
mkdir -p components/course
mkdir -p lib
```

### Step 5: Create Module Loader

**`lib/mdx.ts`**

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const modulesDirectory = path.join(process.cwd(), 'app/modules');

export async function getModule(slug: string) {
  const fullPath = path.join(modulesDirectory, slug, 'page.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    metadata: data,
    content,
  };
}

export function getAllModules() {
  const modules = fs.readdirSync(modulesDirectory);
  
  return modules.map(module => {
    const fullPath = path.join(modulesDirectory, module, 'page.mdx');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug: module,
      ...data,
    };
  });
}
```

### Step 6: Create Module Page Layout

**`app/modules/[slug]/layout.tsx`**

```tsx
import { ReactNode } from 'react';

export default function ModuleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {children}
      </article>
    </div>
  );
}
```

### Step 7: Create First Module

**`app/modules/module-0/page.mdx`**

```mdx
export const metadata = {
  title: 'Module 0: Introduction',
  description: 'Get started with React'
}

import { TaskList } from '@/components/course/task-list'

# Module 0 - Introduction

Welcome to the course!

<TaskList tasks={[
  "Complete introduction",
  "Set up environment"
]} />
```

### Step 8: Run Development Server

```bash
npm run dev
```

---

## Option 3: Docusaurus

**Best for:** Large documentation sites with versioning  
**Setup time:** 20 minutes  
**Difficulty:** Easy

### Step 1: Create Docusaurus Site

```bash
npx create-docusaurus@latest my-react-course classic
cd my-react-course
```

### Step 2: Install Dependencies

```bash
npm install lucide-react react-confetti prism-react-renderer
```

### Step 3: Configure Docusaurus

**`docusaurus.config.js`**

```javascript
module.exports = {
  title: 'React Course',
  tagline: 'Learn React by building projects',
  url: 'https://your-site.com',
  baseUrl: '/',
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'modules',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
```

### Step 4: Create Sidebar Config

**`sidebars.js`**

```javascript
module.exports = {
  courseSidebar: [
    {
      type: 'category',
      label: 'React Course',
      items: [
        'module-0/intro',
        'module-1/intro',
        'module-2/intro',
        // ... more modules
      ],
    },
  ],
};
```

### Step 5: Create Custom Components

**`src/components/TaskList.jsx`**

```jsx
import React from 'react';

export default function TaskList({ tasks, checked = false }) {
  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {tasks.map((task, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input type="checkbox" checked={checked} disabled />
          <span dangerouslySetInnerHTML={{ __html: task }} />
        </li>
      ))}
    </ul>
  );
}
```

### Step 6: Add Module Content

**`docs/module-0/intro.mdx`**

```mdx
---
sidebar_position: 1
title: "Module 0: Introduction"
---

import TaskList from '@site/src/components/TaskList';

# Module 0 - Introduction

<TaskList tasks={[
  "Learn course structure",
  "Set up environment"
]} />
```

### Step 7: Run Development Server

```bash
npm run start
```

---

## Option 4: Nextra

**Best for:** Minimalist documentation with Next.js  
**Setup time:** 15 minutes  
**Difficulty:** Easy

### Step 1: Create Nextra Project

```bash
npx create-next-app@latest my-react-course -e https://github.com/shuding/nextra-docs-template
cd my-react-course
```

### Step 2: Install Dependencies

```bash
npm install lucide-react react-confetti
```

### Step 3: Configure Nextra

**`theme.config.tsx`**

```tsx
export default {
  logo: <span>React Course</span>,
  project: {
    link: 'https://github.com/your-repo'
  },
  docsRepositoryBase: 'https://github.com/your-repo',
  navigation: true,
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}
```

### Step 4: Create Module Structure

```bash
mkdir -p pages/modules/{module-0,module-1,module-2}
```

### Step 5: Add Meta Files

**`pages/modules/_meta.json`**

```json
{
  "module-0": "Module 0: Introduction",
  "module-1": "Module 1: React Fundamentals",
  "module-2": "Module 2: State & Events"
}
```

### Step 6: Create First Module

**`pages/modules/module-0/index.mdx`**

```mdx
# Module 0 - Introduction

import { TaskList } from '@/components/TaskList'

Welcome to the course!

<TaskList tasks={["Task 1", "Task 2"]} />
```

### Step 7: Run Development Server

```bash
npm run dev
```

---

## File Conversion Workflow

### Converting JSX Modules to MDX

For each module (Module0.jsx → module-0/index.mdx):

1. **Extract tasks array** → Convert to TaskList component
2. **Convert Intro** → Module introduction page
3. **Convert Steps** → Individual step pages
4. **Convert Completed** → Completion page

### Example Conversion

**Original (Module1.jsx):**

```jsx
const tasks = [
  'Create the <code>HomePage</code> component',
  'Add <code>HomePage</code> to <code>App</code>',
];

export const Intro = () => {
  return (
    <div>
      <h2>Module 1 - React Fundamentals</h2>
      <p>Learn React basics...</p>
      <TaskList tasks={tasks} />
    </div>
  );
};
```

**Converted (module-1/index.mdx):**

```mdx
---
title: "Module 1: React Fundamentals"
---

import { TaskList } from '@/components/course/task-list'

# Module 1 - React Fundamentals

Learn React basics...

<TaskList tasks={[
  'Create the <code>HomePage</code> component',
  'Add <code>HomePage</code> to <code>App</code>',
]} />
```

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### GitHub Pages

**Add to `package.json`:**

```json
{
  "scripts": {
    "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out -t true"
  }
}
```

```bash
npm install -D gh-pages
npm run deploy
```

---

## Course Platform Features Checklist

### Essential Features
- ✅ Module navigation
- ✅ Step-by-step lessons
- ✅ Code syntax highlighting
- ✅ Task tracking
- ✅ Progress indication

### Enhanced Features
- ⭐ Search functionality
- ⭐ Dark mode toggle
- ⭐ Mobile responsive
- ⭐ Code copy button
- ⭐ Table of contents

### Advanced Features
- 🚀 User authentication
- 🚀 Progress persistence
- 🚀 Code playground
- 🚀 Discussion forums
- 🚀 Certificates

---

## Styling Tips

### Tailwind Configuration

**`tailwind.config.js`**

```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              backgroundColor: 'rgb(var(--code-bg))',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

### Custom CSS

**`globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --code-bg: 241 245 249;
  }
  
  .dark {
    --code-bg: 30 41 59;
  }
}

@layer components {
  .task-item {
    @apply flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors;
  }
  
  .code-block {
    @apply my-6 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800;
  }
}
```

---

## Testing Your Course

### Manual Testing Checklist

- ✅ All modules load correctly
- ✅ Navigation works between modules
- ✅ Code blocks display with syntax highlighting
- ✅ Highlighted lines show correctly
- ✅ Task lists render properly
- ✅ Mobile responsive design
- ✅ Dark mode (if implemented)
- ✅ All links work
- ✅ Images load correctly
- ✅ Search works (if implemented)

### Automated Testing

**`tests/modules.test.ts`**

```typescript
import { getAllModules } from '@/lib/mdx';

describe('Course Modules', () => {
  it('should load all 9 modules', () => {
    const modules = getAllModules();
    expect(modules).toHaveLength(9);
  });
  
  it('should have valid frontmatter', () => {
    const modules = getAllModules();
    modules.forEach(module => {
      expect(module.title).toBeDefined();
      expect(module.description).toBeDefined();
    });
  });
});
```

---

## Performance Optimization

### Image Optimization

```jsx
import Image from 'next/image';

<Image 
  src="/images/demo.png"
  alt="Description"
  width={800}
  height={400}
  loading="lazy"
/>
```

### Code Splitting

```jsx
import dynamic from 'next/dynamic';

const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false,
});
```

### MDX Optimization

```javascript
// next.config.js
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});
```

---

## Common Issues & Solutions

### Issue: Code blocks not highlighting

**Solution:**
```bash
npm install prism-react-renderer
```

Add to MDX components:
```tsx
import { CodeBlock } from '@/components/course/code-block';
```

### Issue: Task lists not rendering HTML

**Solution:**
```tsx
<div dangerouslySetInnerHTML={{ __html: task }} />
```

### Issue: Confetti not working

**Solution:**
```tsx
// Disable SSR for Confetti
const Confetti = dynamic(() => import('react-confetti'), { ssr: false });
```

### Issue: Module navigation broken

**Solution:** Check meta.json files and ensure all paths match:

```json
{
  "pages": ["module-0", "module-1"]  // Must match folder names
}
```

---

## Next Steps

After setting up your platform:

1. **Convert all modules** using templates
2. **Test thoroughly** on different devices
3. **Add search** for better UX
4. **Implement progress tracking**
5. **Add discussion/comments**
6. **Create certificates**
7. **Deploy to production**
8. **Gather user feedback**
9. **Iterate and improve**

---

## Resources

### Documentation
- [Fumadocs](https://fumadocs.vercel.app/)
- [Next.js MDX](https://nextjs.org/docs/pages/building-your-application/configuring/mdx)
- [Docusaurus](https://docusaurus.io/)
- [Nextra](https://nextra.site/)

### Tools
- [MDX Playground](https://mdxjs.com/playground/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer)

### Inspiration
- [React Docs](https://react.dev/)
- [Next.js Docs](https://nextjs.org/docs)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## Summary

You now have everything needed to:
1. ✅ Set up a course platform
2. ✅ Convert modules to MDX
3. ✅ Add custom components
4. ✅ Style beautifully
5. ✅ Deploy to production

Choose your framework, follow the steps, and start building! 🚀

**Recommended path for beginners:** Start with Fumadocs - it has the best defaults and fastest setup.

Good luck with your course platform! 🎓
