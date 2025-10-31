# Complete Code Block Guide for Fumadocs Course Content

This is your comprehensive reference for all code block features available in Fumadocs. Use this guide when creating course lessons.

---

## Table of Contents

1. [Basic Syntax](#basic-syntax)
2. [Code Annotations](#code-annotations)
3. [Blockquotes and Callouts](#blockquotes-and-callouts)
4. [Language-Specific Examples](#language-specific-examples)
5. [Best Practices for Course Content](#best-practices-for-course-content)
6. [Common Patterns in Lessons](#common-patterns-in-course-lessons)
7. [Quick Reference](#quick-reference-card)

---

## Basic Syntax

### Simple Code Block

````mdx
```jsx
const example = "Hello World";
```
````

### With Title (Recommended)

Always use titles to provide file context:

````mdx
```jsx title="src/App.jsx"
const example = "Hello World";
```
````

### With Language Only

````mdx
```javascript
console.log('No title, just language');
```
````

---

## Code Annotations

### 1. Highlight Lines

Emphasize important lines by adding `// [!code highlight]` at the end:

````mdx
```jsx title="Highlighting Example"
function Component() {
  const important = "Pay attention"; // [!code highlight]
  const normal = "Regular line";
  const alsoImportant = "Also highlighted"; // [!code highlight]
  
  return <div>{important}</div>;
}
```
````

**Visual Result:** Highlighted lines have a yellow/gold background.

**Use case:** Draw attention to key concepts, new code, or important changes.

---

### 2. Highlight Words

Emphasize specific terms throughout the code:

````mdx
```jsx title="Word Highlighting"
// [!code word:useState]
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  // The word "useState" is highlighted everywhere it appears
  
  return <div>{count}</div>;
}
```
````

**Visual Result:** All instances of "useState" are highlighted.

**Use case:** Focus on a specific API, function, or concept being taught.

**Multiple words:**

````mdx
```jsx title="Multiple Word Highlights"
// [!code word:useState]
// [!code word:useEffect]
import { useState, useEffect } from 'react';

function Component() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Both useState and useEffect are highlighted
  }, []);
}
```
````

---

### 3. Diff View (Add/Remove Lines)

Show code evolution, corrections, or refactoring:

````mdx
```jsx title="Refactoring Example"
function Component() {
  // Old way (wrong)
  const [data, setData] = useState([]); // [!code --]
  
  // New way (correct)
  const [data, setData] = useState(null); // [!code ++]
  
  return <div>{data?.name}</div>;
}
```
````

**Legend:**
- `// [!code --]` → Red background (removed/old)
- `// [!code ++]` → Green background (added/new)

**Use cases:**
- Show before/after in refactoring lessons
- Display common mistakes vs. correct code
- Demonstrate code improvements
- Version comparisons

---

### 4. Focus Lines

Dim surrounding code to focus on specific lines:

````mdx
```jsx title="Focus Example"
function App() {
  const setup = "Background setup";
  const moreSetup = "More background";
  
  const mainLogic = "This is what matters"; // [!code focus]
  
  const cleanup = "More background";
  const moreCleanup = "Additional background";
  
  return <div>{mainLogic}</div>;
}
```
````

**Visual Result:** Focused lines are normal, other lines are dimmed/grayed out.

**Use case:** When showing large code blocks but only discussing specific parts.

---

### 5. Combining Multiple Annotations

You can combine different annotation types:

````mdx
```jsx title="Combined Annotations Example"
// [!code word:useState]
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // [!code highlight]
  const [oldCount, setOldCount] = useState(0); // [!code --]
  const [newCount, setNewCount] = useState(0); // [!code ++]
  
  const increment = () => setCount(count + 1); // [!code focus]
  
  return <button onClick={increment}>{count}</button>;
}
```
````

**Result:**
- "useState" highlighted throughout
- First useState line has yellow highlight
- Old line has red background
- New line has green background
- Increment function is focused

---

## Blockquotes and Callouts

### Basic Blockquote

```mdx
> This is a simple note or callout.
```

**Renders as:** Indented text with left border (usually gray/blue).

---

### Emphasized Blockquotes

Use bold text at the start for different types of callouts:

```mdx
> **Note:** This is an important note about the concept above.

> **Warning:** Be careful with this approach! It has limitations.

> **Tip:** Here's a pro tip for better performance.

> **Important:** Don't skip this step or things will break.

> **Remember:** State updates are asynchronous in React.
```

**Use cases:**
- Warnings about common mistakes
- Additional context or explanations
- Pro tips for advanced users
- Links to related documentation
- Important caveats or limitations

---

### Multi-line Blockquotes

```mdx
> This is a longer explanation that spans multiple lines.
> You can continue the blockquote on the next line.
> 
> You can even include paragraph breaks within the blockquote.
> Just use `>` at the start of each line.
```

---

### Blockquotes with Code

```mdx
> **Note:** The `useState` hook must be called at the top level:
> 
> ```jsx
> // ✅ Correct
> function Component() {
>   const [state, setState] = useState(0);
> }
> ```
```

---

## Language-Specific Examples

### JavaScript/TypeScript

````mdx
```js title="config.js"
export default {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};
```

```ts title="types.ts"
interface User {
  id: number;
  name: string;
  email: string;
}

export type { User };
```

```tsx title="Component.tsx"
interface Props {
  name: string;
}

export function Component({ name }: Props): JSX.Element {
  return <div>Hello {name}</div>;
}
```
````

---

### Shell/Bash Commands

````mdx
```bash title="Terminal Commands"
npm install fumadocs-ui
npm run dev
```

```shell title="Git Commands"
git add .
git commit -m "Update lesson"
git push origin main
```
````

---

### JSON Configuration

````mdx
```json title="package.json"
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}
```

```json title=".prettierrc"
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```
````

---

### CSS/Styling

````mdx
```css title="styles.css"
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.button {
  background: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
```
````

---

### HTML

````mdx
```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
````

---

### Python

````mdx
```python title="script.py"
def greet(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    print(greet("World"))
```
````

---

### SQL

````mdx
```sql title="query.sql"
SELECT id, name, email
FROM users
WHERE active = true
ORDER BY created_at DESC
LIMIT 10;
```
````

---

## Best Practices for Course Content

### 1. Always Use Titles

**❌ Don't:**
````mdx
```jsx
const example = "code";
```
````

**✅ Do:**
````mdx
```jsx title="src/components/Example.jsx"
const example = "code";
```
````

**Why:** Helps students understand file context and organization. They know exactly where to write this code.

---

### 2. Highlight Key Concepts

When teaching a new concept, highlight the relevant lines:

````mdx
```jsx title="useState Hook Example"
import { useState } from 'react';

function Counter() {
  // This is the new concept we're teaching
  const [count, setCount] = useState(0); // [!code highlight]
  
  return (
    <button onClick={() => setCount(count + 1)}> // [!code highlight]
      Count: {count}
    </button>
  );
}
```
````

---

### 3. Show Progressive Changes

Use diff syntax to show code evolution:

````mdx
```jsx title="Refactoring to State"
function Component() {
  // ❌ Old: Static data (can't update)
  const data = [1, 2, 3]; // [!code --]
  
  // ✅ New: State (can update dynamically)
  const [data, setData] = useState([1, 2, 3]); // [!code ++]
  
  return <div>{data.map(n => <span key={n}>{n}</span>)}</div>;
}
```
````

---

### 4. Add Context with Blockquotes

Always explain important concepts:

````mdx
Here's how to use useState:

```jsx title="useState Example"
const [count, setCount] = useState(0);
```

> **Note:** The initial value (0) is only used on the first render.
> Subsequent re-renders will use the current state value.
````

---

### 5. Focus on Teaching Points

When showing large files, use focus to highlight the teaching point:

````mdx
```jsx title="src/App.jsx"
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  // 🎯 This is the new code we just added
  const [user, setUser] = useState(null); // [!code focus]
  
  return (
    <div>
      <Header />
      <main>Content here</main>
      <Footer />
    </div>
  );
}

export default App;
```
````

---

### 6. Use Word Highlighting for Core Concepts

When teaching a specific API or pattern:

````mdx
## Understanding useState

```jsx title="Multiple State Variables"
// [!code word:useState]
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  
  // useState is highlighted everywhere
  return <form>...</form>;
}
```

> **Pattern:** Each piece of state needs its own useState call.
````

---

## Common Patterns in Course Lessons

### Pattern 1: Concept Introduction

````mdx
## Understanding State

State allows components to remember information between renders:

```jsx title="Counter with State"
// [!code word:useState]
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // [!code highlight]
  
  return <div>Count: {count}</div>;
}
```

> **Key Point:** State persists between re-renders, unlike regular variables which reset.
````

---

### Pattern 2: Before/After Comparison

````mdx
## Refactoring to Components

### Before (Not Reusable)

```jsx title="App.jsx - Before"
function App() {
  return (
    <div>
      <h1>Product 1</h1>
      <p>$19.99</p>
    </div>
  );
}
```

### After (Reusable Component)

```jsx title="App.jsx - After"
function ProductCard({ name, price }) { // [!code ++]
  return ( // [!code ++]
    <div> // [!code ++]
      <h1>{name}</h1> // [!code ++]
      <p>${price}</p> // [!code ++]
    </div> // [!code ++]
  ); // [!code ++]
} // [!code ++]

function App() {
  return (
    <div>
      <ProductCard name="Product 1" price="19.99" /> // [!code ++]
      <ProductCard name="Product 2" price="29.99" /> // [!code ++]
    </div>
  );
}
```

> **Benefit:** Now you can reuse ProductCard for any product!
````

---

### Pattern 3: Step-by-Step Implementation

````mdx
<Steps>
  <Step>
    ### Step 1: Import useState
    
    ```jsx title="src/App.jsx"
    import { useState } from 'react'; // [!code ++]
    
    function App() {
      return <div>App</div>;
    }
    ```
    
    > Import the useState hook from React.
  </Step>
  
  <Step>
    ### Step 2: Initialize State
    
    ```jsx title="src/App.jsx"
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0); // [!code ++]
      
      return <div>App</div>;
    }
    ```
    
    > Call useState with initial value 0.
  </Step>
  
  <Step>
    ### Step 3: Display State
    
    ```jsx title="src/App.jsx"
    import { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0);
      
      return <div>Count: {count}</div>; // [!code highlight]
    }
    ```
    
    > Display the count value in your JSX.
  </Step>
</Steps>
````

---

### Pattern 4: Common Mistakes

````mdx
## Common Mistakes to Avoid

### ❌ Mistake: Mutating State Directly

```jsx title="Wrong Approach"
const [items, setItems] = useState([1, 2, 3]);

// Wrong! Mutating state directly
items.push(4); // [!code --]
setItems(items); // [!code --]
```

### ✅ Correct: Create New Array

```jsx title="Correct Approach"
const [items, setItems] = useState([1, 2, 3]);

// Correct! Create new array with spread
setItems([...items, 4]); // [!code ++]
```

> **Rule:** Always create new objects/arrays when updating state. Never mutate existing state directly.
````

---

### Pattern 5: Checkpoint/Practice

````mdx
## Checkpoint

Try implementing the following on your own:

```jsx title="Practice Exercise"
// TODO: Create a component that:
// 1. Has a state variable for "name"
// 2. Has an input that updates the name
// 3. Displays "Hello, {name}!" below the input

function Greeting() {
  // Your code here
}
```

<Accordions>
  <Accordion title="💡 Hint">
    You'll need:
    - `useState` for the name state
    - An `<input>` with `value` and `onChange`
    - A `<p>` tag to display the greeting
  </Accordion>
  
  <Accordion title="✅ Solution">
    ```jsx title="Solution"
    import { useState } from 'react';
    
    function Greeting() {
      const [name, setName] = useState(''); // [!code highlight]
      
      return (
        <div>
          <input 
            value={name} // [!code highlight]
            onChange={(e) => setName(e.target.value)} // [!code highlight]
          />
          <p>Hello, {name}!</p>
        </div>
      );
    }
    ```
  </Accordion>
</Accordions>
````

---

### Pattern 6: Troubleshooting Section

````mdx
## Troubleshooting

### Issue: State Not Updating

If your state isn't updating, check these common issues:

```jsx title="Common Problems"
// ❌ Problem 1: Mutating state
const [user, setUser] = useState({ name: 'John' });
user.name = 'Jane'; // [!code --]
setUser(user); // [!code --]

// ✅ Solution: Create new object
setUser({ ...user, name: 'Jane' }); // [!code ++]

// ❌ Problem 2: Using stale state
const [count, setCount] = useState(0);
setCount(count + 1); // [!code --]
setCount(count + 1); // [!code --]

// ✅ Solution: Use updater function
setCount(prev => prev + 1); // [!code ++]
setCount(prev => prev + 1); // [!code ++]
```

> **Tip:** When updating state based on previous state, always use the updater function form.
````

---

## Language Support Table

| Language | Code | Title Example | Common Use |
|----------|------|---------------|------------|
| JavaScript | `js` | `title="script.js"` | Vanilla JS examples |
| TypeScript | `ts` | `title="types.ts"` | Type definitions |
| JSX | `jsx` | `title="App.jsx"` | React components |
| TSX | `tsx` | `title="Component.tsx"` | React + TypeScript |
| Bash | `bash` | `title="Terminal"` | Terminal commands |
| Shell | `shell` | `title="Commands"` | Shell scripts |
| JSON | `json` | `title="config.json"` | Configuration files |
| CSS | `css` | `title="styles.css"` | Styling |
| HTML | `html` | `title="index.html"` | HTML markup |
| MDX | `mdx` | `title="page.mdx"` | MDX content |
| Python | `python` | `title="script.py"` | Python examples |
| SQL | `sql` | `title="query.sql"` | Database queries |

---

## Quick Reference Card

### Basic Code Block
````
```language title="filename"
code here
```
````

### With Line Highlights
````
```language title="filename"
normal code
important code // [!code highlight]
normal code
```
````

### With Word Highlight
````
```language title="filename"
// [!code word:term]
code with term here
more code with term
```
````

### With Diff (Add/Remove)
````
```language title="filename"
old code // [!code --]
new code // [!code ++]
```
````

### With Focus
````
```language title="filename"
background code
important code // [!code focus]
background code
```
````

### Blockquote
```
> **Note:** Important information here.
```

### Multi-line Blockquote
```
> This is line one.
> This is line two.
> 
> New paragraph in blockquote.
```

---

## Annotation Cheat Sheet

| Annotation | Syntax | Visual Effect | Use Case |
|------------|--------|---------------|----------|
| Highlight | `// [!code highlight]` | Yellow background | Emphasize key lines |
| Word | `// [!code word:term]` | Highlights all occurrences | Focus on specific API/concept |
| Add | `// [!code ++]` | Green background | Show additions |
| Remove | `// [!code --]` | Red background | Show deletions |
| Focus | `// [!code focus]` | Normal (dims others) | Emphasize specific lines in large blocks |

---

## Critical Rules for MDX

1. **Always add blank lines around code blocks** when used inside JSX components (`<Step>`, `<Accordion>`, etc.)

   ✅ **Correct:**
   ```mdx
   <Step>
     ### Title
     
     Some text here.
     
     ```jsx title="example.jsx"
     const code = "here";
     ```
     
     More text here.
   </Step>
   ```

   ❌ **Wrong:**
   ```mdx
   <Step>
     ### Title
     Some text here.
     ```jsx title="example.jsx"
     const code = "here";
     ```
     More text here.
   </Step>
   ```

2. **Never format MDX files with Prettier** - it will inline code blocks and break parsing

3. **Always use title attribute** for file context

4. **Use annotations to guide learning** - highlight key concepts, show diffs, focus on teaching points

---

## Examples from Real Lessons

### Example 1: Teaching useState

````mdx
## Using State in Components

State lets your components remember information:

```jsx title="src/components/Counter.jsx"
// [!code word:useState]
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0); // [!code highlight]
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}> // [!code highlight]
        Increment
      </button>
    </div>
  );
}
```

> **Key Concepts:**
> - `useState(0)` initializes count to 0
> - `setCount` is used to update the count
> - When state changes, the component re-renders
````

### Example 2: Refactoring Exercise

````mdx
## Refactor to Use Props

Let's make this component reusable:

```jsx title="src/components/ListingCard.jsx"
export function ListingCard() {
  // ❌ Hardcoded values
  const title = "Beach House"; // [!code --]
  const price = 250; // [!code --]
  
  return (
    <div>
      <h3>{title}</h3>
      <p>${price}/night</p>
    </div>
  );
}
```

Now with props:

```jsx title="src/components/ListingCard.jsx"
// ✅ Reusable with props
export function ListingCard({ title, price }) { // [!code ++]
  return (
    <div>
      <h3>{title}</h3>
      <p>${price}/night</p>
    </div>
  );
}

// Usage:
<ListingCard title="Beach House" price={250} /> // [!code ++]
<ListingCard title="Mountain Cabin" price={180} /> // [!code ++]
```

> **Improvement:** Now you can reuse this component for any listing!
````

### Example 3: Common Error

````mdx
## Fixing "Cannot read property of undefined"

This error happens when trying to access properties of `null` or `undefined`:

```jsx title="Common Error Example"
const [user, setUser] = useState(null);

// ❌ Error: Cannot read property 'name' of null
return <div>{user.name}</div>; // [!code --]

// ✅ Solution: Check if user exists first
return <div>{user?.name || 'Guest'}</div>; // [!code ++]
```

> **Best Practice:** Always check if data exists before accessing nested properties.
````

---

## Summary

This guide covers all code block features available in Fumadocs:

✅ **Basic syntax** with titles  
✅ **Line highlighting** for emphasis  
✅ **Word highlighting** for concepts  
✅ **Diff view** for before/after  
✅ **Focus** for large code blocks  
✅ **Blockquotes** for notes and warnings  
✅ **Best practices** for course content  
✅ **Common patterns** for lessons  

**Remember:** Code blocks are teaching tools. Use annotations strategically to guide student attention and understanding.

**Next Steps:**
1. Bookmark this guide for quick reference
2. Review MDX_TEMPLATES.md for complete lesson structure
3. Check MDX_FORMATTING_RULES.md for formatting requirements
4. Start creating lessons with these patterns!

---

**Last Updated:** After Module 1 completion
**Status:** Complete reference guide
**Related Docs:** MDX_TEMPLATES.md, MDX_FORMATTING_RULES.md, MODULE_BREAKDOWN.md
