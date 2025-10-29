# MDX Formatting Rules for Build Success

**Essential formatting guidelines to prevent MDX compilation errors**

---

## Overview

This document outlines critical formatting rules discovered during Module 1
development. Following these rules ensures your MDX files compile successfully
without errors.

### Code Block Syntax

**Standard markdown code fences with `title` attribute:**

### Code Block Syntax

**Standard markdown code fences with `title` attribute:**

````mdx
```jsx title="src/components/Example.jsx"
import React from 'react';

export function Example() {
  return <div>Example Component</div>;
}
```
````

**Features:**
- Automatic syntax highlighting via Fumadocs (powered by Shiki)
- Copy button automatically added
- Optional file path as title
- No custom wrapper components needed
- Line highlighting support
- Word highlighting support

**Supported Languages:**
`jsx`, `tsx`, `javascript`, `typescript`, `bash`, `shell`, `json`, `css`, `html`, `mdx`, `python`, `sql`, and many more.

---

### Advanced Code Features (Fumadocs/Shiki)

#### 1. Line Highlighting

Highlight specific lines using `// [!code highlight]` comment:

````mdx
```jsx title="src/App.jsx"
function App() {
  const [count, setCount] = useState(0); // [!code highlight]
  
  return <div>{count}</div>;
}
```
````

**Result:** The line with the comment will be highlighted.

#### 2. Word Highlighting

Highlight specific words using `// [!code word:term]`:

````mdx
```jsx title="config.js"
// [!code word:config]
const config = {
  name: 'My App'
};

export default config;
```
````

**Result:** All instances of "config" will be highlighted.

#### 3. Line Additions/Deletions (Diff View)

Show code changes with `// [!code ++]` and `// [!code --]`:

````mdx
```jsx title="Before and After"
function Component() {
  const [data, setData] = useState([]); // [!code --]
  const [data, setData] = useState(null); // [!code ++]
  
  return <div>{data}</div>;
}
```
````

**Result:** Deleted lines shown in red, added lines in green.

#### 4. Line Focus

Focus attention on specific lines with `// [!code focus]`:

````mdx
```jsx title="Important Line"
function App() {
  const important = "This is key!"; // [!code focus]
  const other = "Less important";
  
  return <div>{important}</div>;
}
```
````

**Result:** Focused line emphasized, others dimmed.

#### 5. Blockquotes and Callouts

Use `>` for notes and callouts:

```mdx
> **Note:** This is an important note about the code above.

> **Warning:** Be careful when using this approach.

> **Tip:** You can also do it this way for better performance.
```

**Styling variations:**

```mdx
> If you're looking for an equivalent with runtime syntax highlighting, see Dynamic Code Block.
```

Simple blockquotes render with left border and padding.

---

**Features:**
- Automatic syntax highlighting via Fumadocs
- Copy button automatically added
- Optional file path as title
- No custom wrapper components needed

### Build Error History

During Module 1 implementation (lessons 3-7), the following build errors
occurred:

-  `Expected a closing tag for <Accordion>`
-  `Unexpected character '<' before attribute name`
-  `Expected component 'PropertyCard' to be defined`
-  `ReferenceError: price is not defined` (caused by inline code)

**Root cause:** Auto-formatters (especially Prettier) moved code blocks inline with text, breaking
MDX's JSX parser.

---

## Critical Rules

### Rule 1: Code Blocks Must Be Isolated

Code blocks (` ``` `) **must** be on their own lines with blank lines before and
after.

#### ❌ WRONG Examples

````mdx
<Accordion id='example' title='Example'>
   Some text ```jsx const x = 1; ``` more text
</Accordion>
````

````mdx
<Step>### Variables ```jsx const name = "Value"; ``` explanation</Step>
````

````mdx
<Accordion>
   Rules: 1. Must be unique 2. Should be stable ```jsx key={id} ``` explanation
</Accordion>
````

#### ✅ CORRECT Examples

````mdx
<Accordion id="example" title="Example">
  Some text before the code:
  
  ```jsx
  const x = 1;
````

More text after the code. </Accordion>

````

```mdx
<Step>
  ### Variables

  Explanation before:

  ```jsx
  const name = "Value";
````

Explanation after. </Step>

````

```mdx
<Accordion>
  Rules:
  1. Must be unique
  2. Should be stable

  ```jsx
  key={id}
````

Explanation text. </Accordion>

````

---

### Rule 2: No Inline Code in Component Content

Never put code blocks on the same line as other content inside JSX components.

#### ❌ WRONG

```mdx
<Accordion id="colors" title="Colors">
  ```jsx className="text-red-500" ``` - Red text color
</Accordion>
````

#### ✅ CORRECT

````mdx
<Accordion id="colors" title="Colors">
  ```jsx
  className="text-red-500"
````

-  Red text color </Accordion>

````

---

### Rule 3: Blank Lines Around Code Blocks

Always have at least one blank line before and after code blocks inside MDX components.

#### ❌ WRONG

```mdx
<Step>
  ### Example
  ```jsx
  const x = 1;
````

Next step </Step>

````

#### ✅ CORRECT

```mdx
<Step>
  ### Example

  ```jsx
  const x = 1;
````

Next step </Step>

````

---

### Rule 4: No Duplicate Component Tags

Ensure components don't have duplicate opening tags (often caused by formatters).

#### ❌ WRONG

```mdx
<Accordion id="test" title="Test">
<Accordion id="test" title="Test">
  Content
</Accordion>
````

#### ✅ CORRECT

```mdx
<Accordion id='test' title='Test'>
   Content
</Accordion>
```

---

### Rule 5: Always Close JSX Components

Every opening tag must have a matching closing tag.

#### ❌ WRONG

```mdx
<Accordions type="single">
  <Accordion id="test" title="Test">
    Content
  </Accordion>
  <Accordion id="test2" title="Test 2">
    Content
</Accordions>
```

_Missing `</Accordion>` for second accordion_

#### ✅ CORRECT

```mdx
<Accordions type='single'>
   <Accordion id='test' title='Test'>
      Content
   </Accordion>
   <Accordion id='test2' title='Test 2'>
      Content
   </Accordion>
</Accordions>
```

---

### Rule 6: Lists and Numbered Content

When including lists or numbered items in MDX components, keep them separate
from code blocks.

#### ❌ WRONG

````mdx
<Accordion>1. Rule one 2. Rule two ```jsx code ``` 3. Rule three</Accordion>
````

#### ✅ CORRECT

````mdx
<Accordion>
  1. Rule one
  2. Rule two
  
  ```jsx
  code
````

3. Rule three </Accordion>

````

---

## Component-Specific Guidelines

### Accordions

```mdx
<Accordions type="single">
  <Accordion id="unique-id" title="Title Text" value="unique-value">

    Regular markdown content here.

    ```jsx
    // Code block properly separated
    const example = "value";
    ```

    More content after code.

  </Accordion>
</Accordions>
````

**Key points:**

-  Each `Accordion` needs unique `id` and `value`
-  Code blocks must have blank lines around them
-  Close all `<Accordion>` tags before closing `<Accordions>`

### Steps

````mdx
<Steps>
   <Step>
      ### Step Title Description text. ```jsx const code = "example"; ```
      Explanation text.
   </Step>

   <Step>### Next Step More content.</Step>
</Steps>
````

**Key points:**

-  Each `Step` should have a heading
-  Separate all content with blank lines
-  Code blocks need spacing before and after

### Tabs

````mdx
<Tabs defaultValue='tab1'>
   <TabsList>
      <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
      <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
   </TabsList>

   <TabsContent value='tab1'>
      Content for tab 1. ```jsx const example = "tab1"; ```
   </TabsContent>

   <TabsContent value='tab2'>
      Content for tab 2. ```jsx const example = "tab2"; ```
   </TabsContent>
</Tabs>
````

**Key points:**

-  Match `value` props between triggers and content
-  Each `TabsContent` should have spacing around code

---

## Common Formatter Issues

### Problem: Prettier Inlines Code Blocks

**Symptom:** After running Prettier or saving with format-on-save enabled, code blocks appear on the same line as text inside JSX components.

**Example of what Prettier does wrong:**

````mdx
<!-- BEFORE Prettier (correct) -->
<Step>
  ### Math Operations
  
  ```jsx title="Math in JSX"
  const price = 250;
  ```
</Step>

<!-- AFTER Prettier (BROKEN) -->
<Step>
  ### Math Operations ```jsx title="Math in JSX" const price = 250;
  ```
</Step>
````

This breaks MDX compilation because the parser sees the code fence as inline content instead of a block element.

---

### Solution 1: Ignore MDX Files (Recommended)

**Create `.prettierignore` file in project root:**

```
# Prevent Prettier from formatting MDX files
*.mdx
content/**/*.mdx
MDX-docs/**/*.mdx
```

**Also create/update `.vscode/settings.json`:**

```json
{
  "editor.formatOnSave": true,
  "[mdx]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "[markdown]": {
    "editor.formatOnSave": false
  },
  "files.associations": {
    "*.mdx": "mdx"
  }
}
```

**Result:** Prettier completely ignores MDX files. You format manually for readability.

---

### Solution 2: Use Prettier MDX Plugin (Alternative)

**Install the plugin:**

```bash
npm install --save-dev prettier-plugin-mdx
```

**Create/update `prettier.config.js`:**

```javascript
module.exports = {
  plugins: ['prettier-plugin-mdx'],
  overrides: [
    {
      files: '*.mdx',
      options: {
        proseWrap: 'preserve',
        printWidth: 10000, // Effectively disable line wrapping
      },
    },
  ],
}
```

**Note:** Even with the plugin, results may vary. Solution 1 is more reliable.

---

### Solution 3: Manual Review After Formatting

If you must use Prettier on MDX:

1. Format the file
2. **Immediately review** all JSX components (`<Step>`, `<Accordion>`, etc.)
3. Look for code blocks moved inline with text
4. Manually separate them with blank lines
5. Save without formatting

**This is error-prone and not recommended for large projects.**

---

### Solution 4: Disable Formatting for Specific Sections

Use Prettier ignore comments around problematic sections:

````mdx
<Step>
  ### Math Operations
  
  {/* prettier-ignore */}
  ```jsx title="Math in JSX"
  const price = 250;
  ```
</Step>
````

**Limitation:** You need to add this to every code block inside JSX components.

---

### Recommended Workflow

**For new projects:**
1. ✅ Add `*.mdx` to `.prettierignore`
2. ✅ Disable format-on-save for MDX in VS Code
3. ✅ Format MDX manually for consistency
4. ✅ Run `npm run build` frequently to catch errors early

**For existing projects:**
1. ✅ Review all MDX files for inline code blocks
2. ✅ Fix any formatting issues
3. ✅ Add `.prettierignore` to prevent future issues
4. ✅ Update VS Code settings
5. ✅ Verify build succeeds: `npm run build`

---

### How to Identify Prettier-Broken Files

**Search for common patterns:**

```bash
# Find code blocks on same line as text
grep -r "###.*\`\`\`" content/

# Find closing fences with text after
grep -r "\`\`\`.*[a-zA-Z]" content/

# Find {" "} artifacts left by Prettier
grep -r '{" "}' content/
```

**Manual inspection:**
1. Look for code blocks that don't have blank lines around them
2. Check inside `<Step>`, `<Accordion>`, and other JSX components
3. Verify all code fences are on their own lines

---

### Error Messages from Formatter Issues

If Prettier has broken your MDX, you'll see errors like:

**Error 1:**
```
ReferenceError: price is not defined
```
**Cause:** Code inside a fence was treated as actual code, not a code block.

**Error 2:**
```
Expected a closing tag for <Step>
```
**Cause:** Code fence broke the JSX component structure.

**Error 3:**
```
Unexpected character '<' before attribute name
```
**Cause:** MDX parser confused by inline code fence.

**Fix:** Add blank lines before and after all code blocks within JSX components.

---

## Pre-Build Checklist

Before running `npm run build`, verify:

### Visual Inspection

-  [ ] No code blocks on same line as text
-  [ ] Blank line before every ` ```jsx `
-  [ ] Blank line after every closing ` ``` `
-  [ ] All JSX components have closing tags
-  [ ] No duplicate component tags

### Common Patterns to Search For

Search your MDX files for these problematic patterns:

**Pattern 1: Text before code fence**

````bash
grep -E "^[^`]*```" *.mdx
````

**Pattern 2: Text after code fence**

````bash
grep -E "```[^`]*$" *.mdx
````

**Pattern 3: Multiple code fences on one line**

````bash
grep -E "```.*```" *.mdx
````

---

## Debugging Build Errors

### Error: "Expected a closing tag for `<Component>`"

**Likely causes:**

1. Code block broke component structure
2. Missing closing tag
3. Duplicate opening tag

**How to fix:**

1. Find the component mentioned in error
2. Check if code blocks are properly separated
3. Verify closing tag exists
4. Remove any duplicate tags

**Example fix:**

Before (error):

````mdx
<Accordion>Text ```jsx code ``` more text</Accordion>
````

After (fixed):

````mdx
<Accordion>
  Text
  
  ```jsx
  code
````

More text </Accordion>

````

### Error: "Unexpected character `<`"

**Likely causes:**
1. Duplicate component tags
2. Unclosed previous component
3. Malformed JSX

**How to fix:**
1. Search for duplicate `<ComponentName` tags
2. Ensure all opening tags have closing tags
3. Check component nesting

### Error: "Expected component to be defined"

**Likely causes:**
1. Component used outside code block
2. Missing import statement
3. Typo in component name

**How to fix:**
1. Wrap component examples in ` ```jsx ` code fences
2. Check imports at top of file
3. Verify component name spelling

---

## Testing Workflow

### Step 1: Create MDX Content

Write content following the rules above:
- Separate code blocks from text
- Add blank lines around code
- Close all JSX components

### Step 2: Visual Review

Before building, scan the file for:
- Inline code blocks
- Missing blank lines
- Unclosed tags
- Duplicate tags

### Step 3: Local Build

```bash
npm run build
````

### Step 4: Fix Errors

If build fails:

1. Note the file and line number from error
2. Open the file
3. Find the problematic component
4. Add blank lines around code blocks
5. Verify closing tags
6. Remove duplicates

### Step 5: Rebuild

```bash
npm run build
```

Repeat until successful.

---

## Quick Reference Card

### ✅ DO:

````mdx
Content before code.

```jsx
const code = "example";
```
````

Content after code.

````

### ❌ DON'T:

```mdx
Content ```jsx code ``` more content
````

### Component Template:

````mdx
<ComponentName id="id" prop="value">
  
  Regular text content.
  
  ```jsx
  // Code here
  const x = 1;
````

More text content.

</ComponentName>
```

---

## Real-World Examples

### Example 1: Lesson with Multiple Code Blocks

````mdx
---
title: "Lesson Example"
---

# Lesson Title

Introduction text here.

---

## Section 1

Explanation before code:

```jsx
// First code example
const example1 = "value";
```
````

Explanation after code.

---

## Section 2

<Steps>
  <Step>
    ### Step One
    
    Description of step.
    
    ```jsx
    // Step code
    const step1 = true;
    ```
    
    More description.
  </Step>
  
  <Step>
    ### Step Two
    
    Next step content.
  </Step>
</Steps>

---

## Common Mistakes

<Accordions type="single">
  <Accordion id="mistake1" title="Mistake 1" value="mistake1">
    
    Explanation of mistake:
    
    ```jsx
    // Wrong way
    const wrong = "example";
    ```
    
    How to fix it:
    
    ```jsx
    // Right way
    const right = "example";
    ```
    
  </Accordion>
  
  <Accordion id="mistake2" title="Mistake 2" value="mistake2">
    
    Another mistake explanation.
    
  </Accordion>
</Accordions>

---

## Navigation

<div className="flex justify-between">
  <Button href="/previous">← Previous</Button>
  <Button href="/next">Next →</Button>
</div>
```

### Example 2: Complex Accordion Structure

````mdx
<Accordions type='single'>
   <Accordion id='concept1' title='First Concept' value='concept1'>
      Concept explanation with multiple paragraphs. First paragraph here. Second
      paragraph here. ```jsx // Code example const example = "value"; ```
      Explanation after code. - Bullet point 1 - Bullet point 2 - Bullet point 3
   </Accordion>

   <Accordion id='concept2' title='Second Concept' value='concept2'>
      Another concept with subsections: ### Subsection A Content here. ###
      Subsection B More content. ```jsx // Example for subsection B const sub =
      "example"; ```
   </Accordion>
</Accordions>
````

---

## Conclusion

Following these formatting rules ensures:

-  ✅ Clean MDX compilation
-  ✅ No build errors
-  ✅ Proper component rendering
-  ✅ Maintainable code

**Golden Rule:** When in doubt, add blank lines around code blocks!

---

## Additional Resources

-  [MDX Documentation](https://mdxjs.com/)
-  [Fumadocs MDX Guide](https://fumadocs.vercel.app/docs/mdx)
-  [React MDX](https://mdxjs.com/packages/react/)

---

**Last Updated:** October 28, 2025  
**Based On:** Module 1 (Lessons 3-7) build error resolution
