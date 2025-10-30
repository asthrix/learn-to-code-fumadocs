# Fumadocs Component Usage Guide

This guide shows you how to properly use Fumadocs UI components in your MDX
files.

## Important: CodeBlock Component

**❌ WRONG - Do NOT use `<CodeBlock>` in MDX:**

````mdx
<CodeBlock title="example.js" language="javascript">
```js
console.log('hello');
````

</CodeBlock>
```

**✅ CORRECT - Use regular markdown code blocks:**

````mdx
```js title="example.js"
console.log("hello");
```
````

````

### Code Block with Title
```js title="config.js"
export default { name: 'value' };
````

### Code Block with Icon

The icon is automatically determined by the language or filename extension.

## Steps Component

**Import:**

```mdx
import { Step, Steps } from "fumadocs-ui/components/steps";

;
```

**Usage:**

```mdx
<Steps>
<Step>
### First Step

Content for the first step goes here.

</Step>

<Step>
### Second Step

Content for the second step.

</Step>
</Steps>
```

**Alternative - Without imports (Tailwind CSS):**

```mdx
<div className="fd-steps">
  
### Step 1

Content here

### Step 2

More content

</div>
```

## Accordion Component

**Import:**

```mdx
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";

;
```

**Usage:**

```mdx
<Accordions type='single'>
   <Accordion title='What is Fumadocs?'>
      Fumadocs is a documentation framework built for Next.js.
   </Accordion>

   <Accordion title='How do I install it?'>
      Run `npm install fumadocs-ui fumadocs-core`
   </Accordion>
</Accordions>
```

**Props:**

-  `type`: "single" or "multiple" (controls if multiple accordions can be open)
-  `title`: The accordion header text
-  `id`: Optional ID for deep linking

## Files Component

**Import:**

```mdx
import { Files, Folder, File } from "fumadocs-ui/components/files";

;
```

**Usage:**

```mdx
<Files>
   <Folder name='src' defaultOpen>
      <Folder name='components'>
         <File name='Button.tsx' />
         <File name='Card.tsx' />
      </Folder>
      <File name='index.ts' />
   </Folder>
   <File name='package.json' />
</Files>
```

## Tabs Component

**Import:**

```mdx
import { Tab, Tabs } from "fumadocs-ui/components/tabs";

;
```

**Usage:**

````mdx
<Tabs items={['npm', 'yarn', 'pnpm']}>
<Tab value="npm">
```bash
npm install package-name
````

</Tab>

<Tab value="yarn">
```bash
yarn add package-name
```
</Tab>

<Tab value="pnpm">
```bash
pnpm add package-name
```
</Tab>
</Tabs>
```

## Badge Component (from shadcn/ui)

**Import:**

```mdx
import { Badge } from "@/components/ui/badge";

;
```

**Usage:**

```mdx
<Badge variant='default'>Default</Badge>
<Badge variant='secondary'>Secondary</Badge>
<Badge variant='destructive'>Destructive</Badge>
<Badge variant='outline'>Outline</Badge>
```

## Button Component (from shadcn/ui)

**Import:**

```mdx
import { Button } from "@/components/ui/button";

;
```

**Usage:**

```mdx
<Button>Click me</Button>
<Button variant='outline'>Outline</Button>
<Button size='lg'>Large Button</Button>

<!-- With link -->

<Button asChild>
   <a href='/docs/getting-started'>Get Started</a>
</Button>
```

## Callout (Built-in MDX Component)

**No import needed** - use markdown blockquote syntax:

```mdx
> [!NOTE] This is a note callout

> [!TIP] This is a tip callout

> [!IMPORTANT] This is important

> [!WARNING] This is a warning

> [!CAUTION] This is dangerous
```

## Banner Component

**Import:**

```mdx
import { Banner } from "fumadocs-ui/components/banner";

;
```

**Usage:**

```mdx
<Banner variant='rainbow'>🎉 Welcome to our documentation!</Banner>
```

## Complete Example

Here's a complete MDX file using multiple components:

````mdx
---
title: "Getting Started"
description: "Learn how to use our framework"
---

import { Step, Steps } from "fumadocs-ui/components/steps";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Files, Folder, File } from "fumadocs-ui/components/files";
import { Badge } from "@/components/ui/badge";

# Getting Started <Badge>v2.0</Badge>

## Installation

Choose your package manager:

<Tabs items={['npm', 'yarn', 'pnpm']}>
<Tab value="npm">
```bash
npm install my-package
````

</Tab>
<Tab value="yarn">
```bash
yarn add my-package
```
</Tab>
<Tab value="pnpm">
```bash
pnpm add my-package
```
</Tab>
</Tabs>

## Project Structure

<Files>
  <Folder name="src" defaultOpen>
    <File name="index.ts" />
    <File name="config.ts" />
  </Folder>
  <File name="package.json" />
</Files>

## Quick Start

<Steps>
<Step>
### Install Dependencies

Install the required packages using your package manager. </Step>

<Step>
### Configure Your App

Create a configuration file:

```ts title="config.ts"
export const config = {
   apiKey: "your-key",
   endpoint: "https://api.example.com",
};
```

</Step>

<Step>
### Start Building

You're ready to go! Import and use components in your app. </Step> </Steps>

## FAQ

<Accordions type="single">
  <Accordion title="What versions are supported?">
    We support Node.js 16+ and React 18+.
  </Accordion>
  
  <Accordion title="Can I use TypeScript?">
    Yes! Full TypeScript support is included.
  </Accordion>
</Accordions>

> [!TIP] Check out our examples repository for more code samples.

````

## Key Takeaways

1. **Never wrap markdown code blocks** with `<CodeBlock>` - use triple backticks with metadata
2. **Import components** at the top of your MDX file
3. **Use proper JSX syntax** - close all tags, use camelCase props
4. **Leverage built-in features** like callouts with blockquote syntax
5. **Component spacing matters** - leave blank lines around components

## Common Mistakes

### ❌ Wrong: Nested code block wrapping
```mdx
<CodeBlock>
```js
code here
````

</CodeBlock>
```

### ✅ Correct: Direct markdown

````mdx
```js title="file.js"
code here
```
````

````

### ❌ Wrong: Missing imports
```mdx
<Steps>
  <Step>Content</Step>
</Steps>
````

### ✅ Correct: Import first

```mdx
import { Step, Steps } from "fumadocs-ui/components/steps";

<Steps>
   <Step>Content</Step>
</Steps>
```

### ❌ Wrong: Using HTML class

```mdx
<div class="container">
```

### ✅ Correct: Use className

```mdx
<div className="container">
```
