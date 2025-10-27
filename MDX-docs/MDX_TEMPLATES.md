# MDX Conversion Templates

**Ready-to-use MDX templates for converting React course modules**

---

## Quick Start Guide

This document provides copy-paste ready templates for converting the Project React modules into MDX format. Each template follows the established patterns and can be customized for your content.

---

## Table of Contents

1. [Basic Module Template](#basic-module-template)
2. [Module Introduction Template](#module-introduction-template)
3. [Learning Step Templates](#learning-step-templates)
4. [Completion Template](#completion-template)
5. [Component Examples](#component-examples)
6. [Real Module Conversions](#real-module-conversions)

---

## Basic Module Template

### File Structure

```
content/
  modules/
    module-1/
      index.mdx          # Module introduction
      step-1.mdx         # First lesson
      step-2.mdx         # Second lesson
      ...
      completed.mdx      # Completion celebration
```

### MDX Frontmatter

```mdx
---
title: "Module {N}: {Module Title}"
description: "{Brief description of module content}"
module: {N}
totalSteps: {X}
duration: "{X-Y} hours"
difficulty: "beginner|intermediate|advanced"
prerequisites: 
  - "module-{N-1}"
objectives:
  - "First learning objective"
  - "Second learning objective"
  - "Third learning objective"
tags: 
  - "react"
  - "hooks"
  - "state"
published: true
---
```

---

## Module Introduction Template

```mdx
---
title: "Module 2: State and Events"
description: "Learn to manage component state and handle user interactions"
module: 2
totalSteps: 7
duration: "2-3 hours"
difficulty: "beginner"
prerequisites: 
  - "module-1"
objectives:
  - "Use useState to manage component state"
  - "Handle user events and interactions"
  - "Create controlled form inputs"
  - "Pass callbacks between components"
  - "Filter data dynamically"
tags: 
  - "react"
  - "state"
  - "events"
  - "useState"
published: true
---

import { Separator } from '@/components/ui/separator'
import { TaskList } from '@/components/course/task-list'
import { Callout } from '@/components/ui/callout'
import { Button } from '@/components/ui/button'

# Module 2 - State and Events

<Separator className="mb-4" />

## Overview

In this module, you'll learn how to make React applications interactive. We'll introduce **state management** using the `useState` hook and show you how to respond to user events like clicks, typing, and selections.

By the end of this module, your application will be fully interactive with working filters and search functionality!

## Description

<Separator className="mb-2" />

Right now, our application displays static listings - the same data every time, with no way for users to interact. That's about to change!

We'll transform the static homepage into a dynamic, interactive experience where users can:
- Search listings by name or location
- Filter by date ranges
- Adjust the number of guests
- See results update in real-time

To accomplish this, we'll learn about:

### **State Management**
State is data that can change over time. When state changes, React automatically updates the UI to reflect those changes. Think of it like a variable that React "watches" - whenever it changes, the component re-renders with the new value.

### **Event Handling**
Events are how users interact with your application - clicking buttons, typing in inputs, selecting dates. We'll learn how to "listen" for these events and respond appropriately.

### **Controlled Components**
We'll create form inputs where React controls the value at all times. This gives us complete control over what the user sees and types.

## What You'll Build

By the end of this module, your homepage will have:
- ✨ A search bar for filtering listings
- 📅 A date range picker for check-in/checkout
- 👥 A guest selector
- 🔄 Real-time filtering as users interact

<Callout type="info">
  **Important Concept:** State is what makes React apps dynamic. Without state, your app would always show the same content - no interactivity, no user input, no dynamic updates.
</Callout>

## Learning Objectives

<Separator className="mb-2" />

<TaskList 
  checked={false}
  tasks={[
    "Turn the <code>listings</code> array in <code>HomePage</code> into state",
    "Create the <code>ListingFilters</code> component",
    "Add state for <code>dates</code> and <code>guests</code> in <code>ListingFilters</code>",
    "Pass filter values from <code>ListingFilters</code> to <code>HomePage</code>",
    "Add state for the <code>search</code> value in <code>HomePage</code>",
    "Filter listings by <code>search</code>, <code>dates</code>, and <code>guests</code>",
  ]} 
/>

## Prerequisites

Before starting this module, make sure you've completed:
- ✅ **Module 1: React Fundamentals** - Understanding of JSX, components, and props

## Estimated Time

⏱️ **2-3 hours** to complete all steps

---

<div className="flex justify-between mt-8">
  <Button variant="outline" href="/modules/module-1/completed">
    ← Previous Module
  </Button>
  <Button href="/modules/module-2/step-1">
    Start Module 2 →
  </Button>
</div>
```

---

## Learning Step Templates

### Template 1: Basic Step Structure

```mdx
---
title: "Step 1: Turn Listings into State"
module: 2
step: 1
type: "lesson"
prev: "/modules/module-2"
next: "/modules/module-2/step-2"
---

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/course/code-block'
import { Callout } from '@/components/ui/callout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

# Turn Listings into State

<Separator className="mb-4" />

## Context

Currently, the `listings` in our `HomePage` component are defined as a regular JavaScript array constant. This works fine for displaying static data, but there's a problem: **we can't change this data**.

```jsx
// This is static - it never changes
const listings = [
  { id: 1, title: 'Beach House' },
  { id: 2, title: 'Mountain Cabin' },
];
```

In the next steps, we'll add filters that should update which listings are displayed. To do that, we need to convert `listings` into **state**.

## What We're Building

We'll transform the static `listings` array into React state. This will allow us to:
- Update the listings when filters change
- Add new listings dynamically
- Remove listings if needed

While the functionality won't visibly change yet, this is a crucial foundation for making our app interactive.

## React Concept: State

<Callout type="info">
  **State** is React's way of tracking data that can change over time. When state changes, React automatically re-renders the component to show the updated data.
</Callout>

### Why State?

Regular variables won't trigger re-renders:
```jsx
❌ let count = 0;
count = 1; // Component doesn't update!
```

State triggers re-renders:
```jsx
✅ const [count, setCount] = useState(0);
setCount(1); // Component re-renders with new value!
```

## Implementation

### Step-by-Step Instructions

1. Import the `useState` hook from React
2. Replace the `listings` constant with state
3. Keep the same initial value (the listings array)

### Code Changes

<Tabs defaultValue="after">
  <TabsList>
    <TabsTrigger value="before">Before</TabsTrigger>
    <TabsTrigger value="after">After</TabsTrigger>
  </TabsList>
  
  <TabsContent value="before">
    <CodeBlock language="jsx" title="src/pages/HomePage.jsx">
      ```jsx
      import { ListingList } from '@/components/ListingList';

      const listings = [
        {
          id: 1,
          title: 'Cozy Beach House',
          price: 250,
          rating: 4.9,
        },
        // ... more listings
      ];

      const HomePage = () => {
        return (
          <div>
            <h1>Find your next stay</h1>
            <ListingList listings={listings} />
          </div>
        );
      };

      export default HomePage;
      ```
    </CodeBlock>
  </TabsContent>
  
  <TabsContent value="after">
    <CodeBlock 
      language="jsx" 
      title="src/pages/HomePage.jsx"
      highlightLines={[1, 3]}
    >
      ```jsx
      import { useState } from 'react';
      import { ListingList } from '@/components/ListingList';

      const HomePage = () => {
        const [listings, setListings] = useState([
          {
            id: 1,
            title: 'Cozy Beach House',
            price: 250,
            rating: 4.9,
          },
          // ... more listings
        ]);

        return (
          <div>
            <h1>Find your next stay</h1>
            <ListingList listings={listings} />
          </div>
        );
      };

      export default HomePage;
      ```
    </CodeBlock>
  </TabsContent>
</Tabs>

## Code Explanation

Let's break down what changed:

### 1. Import useState
```jsx
import { useState } from 'react';
```
We import the `useState` hook from the React library. Hooks are special functions that let us use React features.

### 2. Call useState
```jsx
const [listings, setListings] = useState([...]);
```

This line does several things:
- **`useState([...])`** - Creates state with initial value (the array)
- **`listings`** - The current state value (like a variable)
- **`setListings`** - Function to update the state
- **Array destructuring** - Getting both values from useState's return

### 3. Move Array Inside
The listings array is now **inside** the `useState()` call instead of being a separate constant.

## Understanding useState

<Callout type="success">
  **Pattern:** `const [value, setValue] = useState(initialValue);`
  
  - First element: current state value
  - Second element: function to update state
  - Naming convention: `thing` and `setThing`
</Callout>

### Common Examples

```jsx
// Boolean state
const [isOpen, setIsOpen] = useState(false);

// Number state  
const [count, setCount] = useState(0);

// String state
const [name, setName] = useState('');

// Object state
const [user, setUser] = useState({ name: '', email: '' });

// Array state (our case!)
const [items, setItems] = useState([]);
```

## How State Updates Work

When you call the setter function, React:

1. **Updates the state value**
2. **Schedules a re-render** of the component
3. **Calls your component function again** with the new state
4. **Updates the DOM** with any changes

```jsx
// User clicks a button
<button onClick={() => setCount(count + 1)}>

// React updates state
count: 0 → 1

// React re-renders component
HomePage() // called again

// UI updates automatically
<div>{count}</div> // shows 1
```

## Verification

After making these changes:

✅ Your app should still display the same listings  
✅ No errors in the console  
✅ Code compiles successfully  
✅ The `listings` variable is now state, not a constant

<Callout type="warning">
  **Note:** The app looks the same because we haven't changed the displayed data yet - we've just converted it to state so we CAN change it later!
</Callout>

## What's Next?

In the next step, we'll create the `ListingFilters` component that will eventually update this state to show filtered results.

---

<div className="flex justify-between mt-8">
  <Button variant="outline" href="/modules/module-2">
    ← Module Intro
  </Button>
  <Button href="/modules/module-2/step-2">
    Next Step →
  </Button>
</div>
```

### Template 2: Implementation-Heavy Step

```mdx
---
title: "Step 3: Add State for Filters"
module: 2
step: 3
type: "lesson"
prev: "/modules/module-2/step-2"
next: "/modules/module-2/step-4"
---

import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/course/code-block'
import { Callout } from '@/components/ui/callout'

# Add State for Filters

<Separator className="mb-4" />

## Context

Our `ListingFilters` component currently renders the UI elements (date picker and guest input) but they don't actually store or track any values. When a user selects dates or changes the guest count, nothing happens - the inputs don't "remember" what was selected.

We need to add **state** to track these filter values.

## What We're Building

We'll add two pieces of state to `ListingFilters`:
1. **`dates`** - An object with `from` and `to` properties for check-in/check-out
2. **`guests`** - A number for how many guests

These states will make the inputs "controlled" - React will manage their values.

## Implementation

### Code Changes

<CodeBlock 
  language="jsx" 
  title="src/components/ListingFilters.jsx"
  highlightLines={[1, 4, 5, 10, 11, 16, 17]}
>
```jsx
import { useState } from 'react';
import { DateRangePicker, Input } from '@/components/ui';

const ListingFilters = () => {
  const [dates, setDates] = useState({ from: null, to: null });
  const [guests, setGuests] = useState(1);

  return (
    <div className="flex gap-4 p-4 border rounded-lg">
      <DateRangePicker 
        value={dates}
        onChange={setDates}
        placeholder="Select dates"
      />
      <Input
        type="number"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        min={1}
        placeholder="Guests"
        className="w-32"
      />
    </div>
  );
};

export default ListingFilters;
```
</CodeBlock>

## Detailed Explanation

### Dates State

```jsx
const [dates, setDates] = useState({ from: null, to: null });
```

**Initial value:** `{ from: null, to: null }`
- An object with two properties
- Both start as `null` (no dates selected)
- Will eventually hold Date objects when user selects dates

**Why an object?**  
We need to track TWO dates (check-in and check-out), so we use an object to group them together.

```jsx
// Example of what dates looks like when selected:
{
  from: Date('2024-03-15'),  // Check-in
  to: Date('2024-03-20')     // Check-out
}
```

### Guests State

```jsx
const [guests, setGuests] = useState(1);
```

**Initial value:** `1`
- Default to 1 guest
- Simple number value
- User can increase/decrease

### Controlled DateRangePicker

```jsx
<DateRangePicker 
  value={dates}           // Show current dates
  onChange={setDates}     // Update when user selects
/>
```

**How it works:**
1. User clicks the date picker
2. Selects check-in and check-out dates
3. Component calls `setDates({ from: date1, to: date2 })`
4. React updates the `dates` state
5. Component re-renders with new dates
6. DateRangePicker displays the selected dates

<Callout type="info">
  **Controlled Component:** A form input whose value is controlled by React state. React becomes the "single source of truth" for the input's value.
</Callout>

### Controlled Input

```jsx
<Input
  type="number"
  value={guests}                              // Show current guests
  onChange={(e) => setGuests(Number(e.target.value))}  // Update on change
  min={1}
/>
```

**Breaking down the onChange:**

```jsx
onChange={(e) => setGuests(Number(e.target.value))}
```

- `(e)` - Event object (contains info about the change)
- `e.target` - The input element itself
- `e.target.value` - The input's new value (as a string!)
- `Number(...)` - Convert string to number
- `setGuests(...)` - Update state with new number

**Why `Number()`?**  
Input values are always strings in JavaScript, even for `type="number"`. We convert to a number for proper filtering later.

```jsx
e.target.value // "3" (string)
Number(e.target.value) // 3 (number)
```

## The Data Flow

Here's what happens when a user interacts with the filters:

### Date Selection Flow
```
1. User clicks DateRangePicker
2. User selects March 15 - March 20
3. DateRangePicker calls: onChange({ from: Date, to: Date })
4. This calls: setDates({ from: Date, to: Date })
5. React updates dates state
6. Component re-renders
7. DateRangePicker shows selected dates
```

### Guest Input Flow
```
1. User types "3" in input
2. Input calls: onChange(event)
3. Our handler extracts: event.target.value = "3"
4. Converts to number: Number("3") = 3
5. Calls: setGuests(3)
6. React updates guests state
7. Component re-renders
8. Input shows value: 3
```

## React Concepts

### Controlled vs Uncontrolled Components

**Uncontrolled (bad for React):**
```jsx
❌ <input type="number" />
// React doesn't know the value
// Can't easily access or validate
```

**Controlled (React way):**
```jsx
✅ <input type="number" value={guests} onChange={handleChange} />
// React always knows the value
// Full control over updates
// Easy to validate and manipulate
```

### Why Control Form Inputs?

1. **Single source of truth** - State is the only source of the value
2. **Validation** - Can validate before updating state
3. **Synchronization** - Can sync with other parts of app
4. **Reset easily** - Just reset the state
5. **Debugging** - Can log state changes

## Common Patterns

### Text Input
```jsx
const [text, setText] = useState('');
<input value={text} onChange={(e) => setText(e.target.value)} />
```

### Checkbox
```jsx
const [checked, setChecked] = useState(false);
<input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
```

### Select Dropdown
```jsx
const [selected, setSelected] = useState('option1');
<select value={selected} onChange={(e) => setSelected(e.target.value)}>
  <option value="option1">Option 1</option>
</select>
```

## Verification

After making these changes, test the filters:

✅ **Date Picker:**
- Click the date picker
- Select a date range
- Selected dates should display in the picker
- Clear button should reset to no selection

✅ **Guest Input:**
- Type a number in the guest field
- Value should update as you type
- Minimum value should be 1 (can't go below)
- Can increment/decrement with arrows

✅ **No Errors:**
- Check the console for errors
- App should compile without issues

<Callout type="success">
  **Try it out!** Your filters now track user input, even though they don't filter the listings yet. That's coming in the next steps!
</Callout>

## What's Next?

The filters now store values, but they're isolated in the `ListingFilters` component. In the next step, we'll learn how to pass these values up to the `HomePage` so we can actually filter the listings!

---

<div className="flex justify-between mt-8">
  <Button variant="outline" href="/modules/module-2/step-2">
    ← Previous Step
  </Button>
  <Button href="/modules/module-2/step-4">
    Next Step →
  </Button>
</div>
```

---

## Completion Template

```mdx
---
title: "Module 2 Complete!"
module: 2
type: "completion"
next: "/modules/module-3"
---

import { CheckCircle } from 'lucide-react'
import Confetti from 'react-confetti'
import { Separator } from '@/components/ui/separator'
import { TaskList } from '@/components/course/task-list'
import { Callout } from '@/components/ui/callout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

<div className="relative">
  <Confetti
    numberOfPieces={200}
    recycle={false}
    height={typeof window !== 'undefined' ? window.innerHeight - 200 : 800}
    width={650}
  />

  <div className="text-center mb-8">
    <CheckCircle className="w-40 h-40 mx-auto mb-4 text-green-500" />
    <h1 className="text-4xl font-bold mb-2">Module 2 Completed!</h1>
    <p className="text-xl text-muted-foreground">
      Congratulations! You've mastered state management and event handling! 🎉
    </p>
  </div>

  <Separator className="my-8" />

  ## What You've Accomplished

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <Card>
      <CardHeader>
        <CardTitle>✅ Skills Mastered</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>✓ Using the useState hook</li>
          <li>✓ Managing component state</li>
          <li>✓ Handling user events</li>
          <li>✓ Creating controlled inputs</li>
          <li>✓ Lifting state up</li>
          <li>✓ Filtering arrays dynamically</li>
        </ul>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>🎯 Features Built</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>✓ Interactive search bar</li>
          <li>✓ Date range picker</li>
          <li>✓ Guest selector</li>
          <li>✓ Real-time filtering</li>
          <li>✓ Dynamic listing updates</li>
        </ul>
      </CardContent>
    </Card>
  </div>

  ## Tasks Completed

  <TaskList 
    checked={true}
    tasks={[
      "Turn the <code>listings</code> array in <code>HomePage</code> into state",
      "Create the <code>ListingFilters</code> component",
      "Add state for <code>dates</code> and <code>guests</code> in <code>ListingFilters</code>",
      "Pass filter values from <code>ListingFilters</code> to <code>HomePage</code>",
      "Add state for the <code>search</code> value in <code>HomePage</code>",
      "Filter listings by <code>search</code>, <code>dates</code>, and <code>guests</code>",
    ]} 
  />

  <Separator className="my-8" />

  ## Key Concepts Learned

  ### 1. State Management with useState

  You learned that state is React's way of tracking data that can change:

  ```jsx
  const [value, setValue] = useState(initialValue);
  ```

  - **Value** - Current state
  - **Setter** - Function to update state
  - **Initial value** - Starting value

  ### 2. Event Handling

  You learned how to respond to user actions:

  ```jsx
  const handleClick = (event) => {
    // Do something
  };

  <button onClick={handleClick}>Click Me</button>
  ```

  ### 3. Controlled Components

  You learned to let React control form inputs:

  ```jsx
  <input 
    value={state} 
    onChange={(e) => setState(e.target.value)} 
  />
  ```

  ### 4. Lifting State Up

  You learned to share state between components:

  ```jsx
  // Parent holds state
  const [data, setData] = useState();

  // Child receives callback
  <Child onUpdate={setData} />

  // Child calls callback
  props.onUpdate(newValue);
  ```

  ### 5. Dynamic Filtering

  You learned to filter data in real-time:

  ```jsx
  const filtered = data.filter(item => {
    return item.title.includes(search) &&
           item.guests >= selectedGuests;
  });
  ```

  <Callout type="success">
    **Great Job!** You've transformed a static application into an interactive experience. Your listings now respond to user input in real-time!
  </Callout>

  <Separator className="my-8" />

  ## What's Next?

  In **Module 3: Effects and Data Fetching**, you'll learn:

  - 📡 **useEffect Hook** - Managing side effects
  - 🌐 **API Integration** - Fetching real data from a backend
  - ⏳ **Loading States** - Showing spinners during async operations
  - ❌ **Error Handling** - Gracefully handling failures
  - 🚫 **Race Conditions** - Preventing stale data issues
  - 🎠 **Image Carousels** - Building interactive UI components

  Your application will connect to a mock API and fetch real data dynamically!

  <div className="mt-8 flex justify-center gap-4">
    <Button variant="outline" href="/modules/module-2">
      ← Review Module 2
    </Button>
    <Button href="/modules/module-3" size="lg">
      Continue to Module 3 →
    </Button>
  </div>

</div>
```

---

## Component Examples

### TaskList Component (MDX-Compatible)

```jsx
// components/course/task-list.jsx
import { Checkbox } from '@/components/ui/checkbox';

export const TaskList = ({ tasks, checked = false }) => {
  return (
    <div className="space-y-3 my-4">
      {tasks.map((task, index) => (
        <div 
          key={index} 
          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
        >
          <Checkbox 
            checked={checked} 
            className="mt-0.5 flex-shrink-0"
            disabled
          />
          <div 
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: task }} 
          />
        </div>
      ))}
    </div>
  );
};
```

### CodeBlock Component (MDX-Compatible)

```jsx
// components/course/code-block.jsx
import { Highlight, themes } from 'prism-react-renderer';

export const CodeBlock = ({ 
  children, 
  language = 'jsx', 
  title, 
  highlightLines = [] 
}) => {
  const code = children?.props?.children || children;
  
  const shouldHighlight = (lineNumber) => {
    return highlightLines.some(line => {
      if (typeof line === 'number') {
        return line === lineNumber;
      }
      // Handle ranges like "5-10"
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
      <Highlight
        theme={themes.vsDark}
        code={code.trim()}
        language={language}
      >
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
};
```

---

## Real Module Conversions

### Example: Module 1, Step 1 (Complete)

```mdx
---
title: "Step 1: Create the HomePage Component"
module: 1
step: 1
prev: "/modules/module-1"
next: "/modules/module-1/step-2"
---

import { CodeBlock } from '@/components/course/code-block'
import { Callout } from '@/components/ui/callout'
import { Button } from '@/components/ui/button'

# Create the HomePage Component

## Context

Right now, our React application shows a basic welcome message defined directly in `App.jsx`. As our application grows, we don't want everything crammed into one file. We need to organize our code into separate, focused components.

The first component we'll create is the `HomePage` - the main landing page users will see when they visit our booking application.

## What We're Building

A new React component that will serve as the homepage for our application. For now, it will display a simple heading, but in future steps, we'll add listing cards, filters, and search functionality.

Think of this as laying the foundation - we're building the structure now, and we'll add the details later.

## Implementation

### Creating the Component

We'll create a new file in the `pages` directory and write a functional component that returns JSX.

<CodeBlock language="jsx" title="src/pages/HomePage.jsx">
```jsx
const HomePage = () => {
  return (
    <div>
      <h1>Find your next stay</h1>
    </div>
  );
};

export default HomePage;
```
</CodeBlock>

## Code Explanation

Let's break down each part:

### Component Definition

```jsx
const HomePage = () => {
  return (
    <div>
      <h1>Find your next stay</h1>
    </div>
  );
};
```

This creates a **functional component** - the modern way to write React components. It's just a JavaScript function that returns JSX (the HTML-like syntax).

**Key points:**
- Component names must start with a capital letter (`HomePage`, not `homePage`)
- The arrow function `() => {}` is a concise way to define functions
- Components must return a single root element (our `<div>` wrapper)

### JSX Return

```jsx
return (
  <div>
    <h1>Find your next stay</h1>
  </div>
);
```

JSX looks like HTML, but it's actually JavaScript. React transforms this into real DOM elements that appear in the browser.

**Why wrap in `<div>`?**  
React components can only return one root element. If you want multiple elements, wrap them in a container like `<div>` or use a React Fragment `<>...</>`.

### Default Export

```jsx
export default HomePage;
```

This makes the component available to other files. The `default` keyword means when we import this file, we'll get the `HomePage` component.

```jsx
// Other files can now import it:
import HomePage from './pages/HomePage';
```

## React Concepts

<Callout type="info">
  **Components** are the building blocks of React applications. Everything in React is a component - from a button to an entire page. Components let you split your UI into independent, reusable pieces.
</Callout>

### Functional vs Class Components

Modern React uses **functional components**:

```jsx
✅ Functional (Modern)
const HomePage = () => {
  return <div>Content</div>;
};
```

Older React used **class components** (avoid these):

```jsx
❌ Class (Legacy)
class HomePage extends React.Component {
  render() {
    return <div>Content</div>;
  }
}
```

**Always use functional components** - they're simpler, easier to read, and support React Hooks.

### JSX Rules to Remember

1. **Component names are PascalCase** - `HomePage`, `UserProfile`, `ListingCard`
2. **Single root element** - Wrap multiple elements in a container
3. **Close all tags** - Even self-closing ones like `<img />`, `<br />`
4. **Use `className` not `class`** - Because `class` is a JavaScript keyword
5. **JavaScript expressions use `{}`** - Example: `<div>{userName}</div>`

## File Structure

After creating this file, your project structure should look like:

```
src/
  pages/
    HomePage.jsx    ← New file!
  components/
    ...
  App.jsx
  main.jsx
```

The `pages` directory contains **page-level components** - full pages that users navigate to. Later we'll create smaller components in the `components` directory.

## Verification

After creating `HomePage.jsx`:

✅ File exists at `src/pages/HomePage.jsx`  
✅ Component is defined as a functional component  
✅ Component returns JSX with an `<h1>` heading  
✅ Component is exported as default  
✅ No syntax errors in your editor

<Callout type="warning">
  **Note:** The `HomePage` component won't display yet - we haven't connected it to our app. We'll do that in the next step!
</Callout>

## What's Next?

You've created your first React component! In the next step, we'll import this component into `App.jsx` so it actually displays in the browser.

---

<div className="flex justify-between mt-8">
  <Button variant="outline" href="/modules/module-1">
    ← Module Intro
  </Button>
  <Button href="/modules/module-1/step-2">
    Next: Add HomePage to App →
  </Button>
</div>
```

---

## Conversion Checklist

When converting a module to MDX, ensure you:

### Content
- ✅ Add proper frontmatter with all metadata
- ✅ Import all necessary components
- ✅ Convert code snippets to CodeBlock components
- ✅ Add highlight lines to show changes
- ✅ Include file path titles
- ✅ Use TaskList for objectives
- ✅ Add Callouts for important concepts
- ✅ Include navigation buttons

### Structure
- ✅ Start with clear context
- ✅ Explain what's being built
- ✅ Show before/after code
- ✅ Provide detailed explanations
- ✅ Add verification steps
- ✅ Include "What's Next" section

### Accessibility
- ✅ Use semantic heading hierarchy
- ✅ Add alt text for images
- ✅ Ensure proper contrast
- ✅ Include keyboard navigation
- ✅ Use ARIA labels where needed

### SEO
- ✅ Descriptive title and description
- ✅ Relevant tags/keywords
- ✅ Proper meta tags
- ✅ Clear URL structure

---

## Quick Reference

### Import Statements

```jsx
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Callout } from '@/components/ui/callout'
import { CodeBlock } from '@/components/course/code-block'
import { TaskList } from '@/components/course/task-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle } from 'lucide-react'
import Confetti from 'react-confetti'
```

### Common Patterns

```mdx
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`inline code`

<Separator />

<Callout type="info|warning|success|error">
  Content
</Callout>

<CodeBlock language="jsx" title="file/path.jsx" highlightLines={[1, 5-8]}>
  ```jsx
  code here
  ```
</CodeBlock>

<Button href="/path">Label</Button>

<TaskList tasks={[...]} checked={true|false} />
```

---

## Conclusion

These templates provide everything you need to convert the Project React curriculum to MDX format. Simply:

1. Copy the appropriate template
2. Fill in your content
3. Adjust code examples
4. Add proper navigation
5. Test thoroughly

Happy converting! 🚀
