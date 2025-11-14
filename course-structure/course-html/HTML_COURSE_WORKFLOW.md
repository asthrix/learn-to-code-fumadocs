# HTML Course Workflow Documentation

**Complete guide for designing and implementing HTML course modules**

---

## 📋 Table of Contents

1. [Course Overview](#course-overview)
2. [Module Structure](#module-structure)
3. [Content Design Guidelines](#content-design-guidelines)
4. [MDX Formatting Rules](#mdx-formatting-rules)
5. [Template Library](#template-library)
6. [Implementation Guide](#implementation-guide)
7. [Quality Checklist](#quality-checklist)

---

## 🎯 Course Overview

### Learning Path

Based on the roadmap.sh HTML curriculum, the course is divided into progressive modules that build upon each other:

```
Foundation (Basics)
    ↓
Structure (Semantic HTML)
    ↓
Forms & Inputs
    ↓
Media & Graphics
    ↓
Accessibility & SEO
    ↓
Best Practices
```

### Target Audience

- **Absolute Beginners** - No prior coding experience required
- **Career Switchers** - Looking to enter web development
- **Self-Learners** - Want structured, project-based learning
- **Students** - Supplementing formal education

### Course Philosophy

1. **Learn by Building** - Every lesson includes hands-on exercises
2. **Progressive Complexity** - Start simple, gradually increase difficulty
3. **Real-World Context** - Examples from actual websites
4. **Best Practices First** - Teach modern HTML5 standards from day one
5. **Accessibility-First** - Semantic HTML and ARIA from the start

---

## 📚 Module Structure

### Complete Module Breakdown

Based on the official **roadmap.sh/html** curriculum, here's the comprehensive module structure:

#### **Module 0: Introduction to HTML**
**Duration:** 2-3 hours  
**Difficulty:** Beginner  
**Topics:**
- What is HTML and how it is used?
- What are markup languages?
- How the web works
- What is HTTP?
- DNS and Domain names
- Browsers and how they work
- What is Hosting?
- Setting up Development Environment
- Your First HTML File

**Learning Objectives:**
- Understand what HTML is and its role in web development
- Learn how the web works (HTTP, DNS, browsers)
- Set up a code editor (VS Code)
- Create and view your first HTML file
- Understand the basic client-server model

**Project:** Create a simple "Hello World" HTML page and view it in the browser

---

#### **Module 1: HTML Document Structure**
**Duration:** 2-3 hours  
**Difficulty:** Beginner  
**Topics:**
- `<!DOCTYPE>` declaration
- `<html>` root element
- `<head>` section
- `<body>` section
- `<meta>` tags (charset, viewport)
- `<title>` tag
- Case Insensitivity in HTML
- Whitespaces in HTML
- HTML Comments

**Learning Objectives:**
- Understand the anatomy of an HTML document
- Use the correct DOCTYPE declaration
- Structure head and body sections properly
- Add meta information and page title
- Write proper HTML comments
- Understand case sensitivity and whitespace handling

**Project:** Create a properly structured HTML document template

---

#### **Module 2: Basic HTML Tags**
**Duration:** 3-4 hours  
**Difficulty:** Beginner  
**Topics:**
- Tags and Attributes
- Headings (`<h1>` to `<h6>`)
- Paragraphs (`<p>`)
- Bold (`<b>` / `<strong>`)
- Italic (`<i>` / `<em>`)
- `<mark>` for highlighting
- `<hr>` horizontal rule
- `<br>` line breaks
- `<sub>` and `<sup>` for subscript/superscript
- `<pre>` for preformatted text

**Learning Objectives:**
- Understand HTML tags and attributes syntax
- Use heading tags to create hierarchy
- Format text with various tags
- Understand semantic vs presentational elements
- Create properly formatted text content

**Project:** Build a formatted article page with headings and text formatting

---

#### **Module 3: Links and Navigation**
**Duration:** 2-3 hours  
**Difficulty:** Beginner  
**Topics:**
- Anchor tags (`<a>`)
- `href` attribute
- Link types (external, internal, anchor links)
- `target` attribute (`_blank`, `_self`, etc.)
- Email and telephone links
- Download links
- Link accessibility

**Learning Objectives:**
- Create hyperlinks to other pages and websites
- Link to sections within a page
- Open links in new tabs
- Create email and phone links
- Make links accessible

**Project:** Create a multi-page website with navigation

---

#### **Module 4: Textual and Grouping Tags**
**Duration:** 2-3 hours  
**Difficulty:** Beginner  
**Topics:**
- `<div>` for block-level grouping
- `<span>` for inline grouping
- `<blockquote>` for quotations
- `<q>` for inline quotes
- `<cite>` for citations
- `<dfn>` for definitions
- `<abbr>` for abbreviations
- `<address>` for contact info
- `<del>` and `<s>` for deleted text
- `<ins>` for inserted text

**Learning Objectives:**
- Group content with div and span
- Add quotations and citations properly
- Mark up definitions and abbreviations
- Show text changes (deletions/insertions)
- Structure textual content semantically

**Project:** Create a documentation page with definitions, quotes, and citations

---

#### **Module 5: Lists and Types**
**Duration:** 2-3 hours  
**Difficulty:** Beginner  
**Topics:**
- Unordered Lists (`<ul>`, `<li>`)
- Ordered Lists (`<ol>`, `<li>`)
- Definition Lists (`<dl>`, `<dt>`, `<dd>`)
- Nested Lists
- List styling attributes
- Accessibility with lists

**Learning Objectives:**
- Create bullet-point lists
- Create numbered lists
- Create definition/description lists
- Nest lists within lists
- Make lists accessible

**Project:** Build a recipe page with ingredients list and step-by-step instructions

---

#### **Module 6: Semantic Layout Tags**
**Duration:** 3-4 hours  
**Difficulty:** Beginner-Intermediate  
**Topics:**
- `<header>` for page/section headers
- `<nav>` for navigation
- `<main>` for main content
- `<article>` for independent content
- `<section>` for thematic grouping
- `<aside>` for sidebars
- `<footer>` for page/section footers
- Semantic HTML importance for SEO and accessibility

**Learning Objectives:**
- Understand the importance of semantic HTML
- Structure pages with semantic elements
- Improve SEO with proper markup
- Make content more accessible
- Choose the right semantic tag for each purpose

**Project:** Convert a non-semantic page layout to fully semantic HTML

---

#### **Module 7: Embedding Media**
**Duration:** 4-5 hours  
**Difficulty:** Intermediate  
**Topics:**
- **Images**: `<img>` tag, `src`, `alt` attributes
- `<figure>` and `<figcaption>`
- `img` vs `figure` - when to use each
- Responsive images (`srcset`, `sizes`)
- `<picture>` element
- Priority Hints (loading="lazy", fetchpriority)
- **Video**: `<video>` element and attributes
- **Audio**: `<audio>` element and attributes
- **iframe**: Embedding external content
- Media accessibility

**Learning Objectives:**
- Embed and optimize images
- Use figure and figcaption for image context
- Create responsive image solutions
- Add video and audio players
- Embed external content with iframe
- Make media accessible with alt text and captions

**Project:** Build a media gallery with images, videos, and audio

---

#### **Module 8: Table Structure**
**Duration:** 2-3 hours  
**Difficulty:** Beginner-Intermediate  
**Topics:**
- Table Tag (`<table>`)
- Table structure (`<tr>`, `<td>`, `<th>`)
- Table sections (`<thead>`, `<tbody>`, `<tfoot>`)
- Column and row spanning (`colspan`, `rowspan`)
- `<caption>` for table descriptions
- `<colgroup>` and `<col>`
- Table accessibility
- When (and when not) to use tables

**Learning Objectives:**
- Create properly structured data tables
- Use tables for tabular data only (not layout)
- Add table headers and captions
- Span cells across columns and rows
- Make tables accessible for screen readers

**Project:** Create a complex data table (e.g., schedule, pricing comparison)

---

#### **Module 9: HTML Forms**
**Duration:** 5-6 hours  
**Difficulty:** Intermediate  
**Topics:**
- **Using Forms**: `<form>` element, `action`, `method`
- **Labels and Inputs**: `<label>`, `<input>` types
  - text, email, password, number, tel, url
  - checkbox, radio, file, hidden
  - date, time, color, range, search
- `<textarea>` for multi-line input
- `<select>` and `<option>` for dropdowns
- `<button>` vs `<input type="submit">`
- **Form Validation**: HTML5 validation attributes
  - required, pattern, min, max, minlength, maxlength
- **Limitations** of HTML validation
- `<fieldset>` and `<legend>` for grouping
- **File Uploads** with `<input type="file">`
- Form accessibility

**Learning Objectives:**
- Create functional, accessible forms
- Use appropriate input types for data
- Implement client-side HTML5 validation
- Group related form fields
- Handle file uploads
- Make forms keyboard-navigable
- Understand validation limitations

**Project:** Build a complete registration/contact form with validation

---

#### **Module 10: HTML Entities**
**Duration:** 1-2 hours  
**Difficulty:** Beginner  
**Topics:**
- HTML Entities syntax
- Reserved characters (`<`, `>`, `&`, `"`, `'`)
- Special characters (`&nbsp;`, `&copy;`, `&trade;`, etc.)
- Unicode characters
- Numeric character references
- Common symbols and emojis

**Learning Objectives:**
- Use HTML entities correctly
- Display reserved characters in content
- Add special characters and symbols
- Understand entity syntax

**Project:** Create a character reference guide page

---

#### **Module 11: Attributes and Data**
**Duration:** 2-3 hours  
**Difficulty:** Beginner-Intermediate  
**Topics:**
- Standard attributes (class, id, style, title)
- `id` attribute for unique identification
- `class` attribute for styling and grouping
- `style` attribute for inline CSS
- Data Attributes (`data-*`)
- Global attributes (hidden, lang, dir, etc.)
- Boolean attributes
- Custom attributes best practices

**Learning Objectives:**
- Use id for unique element identification
- Use class for grouping and styling
- Store custom data with data attributes
- Apply global HTML attributes
- Understand attribute syntax and values

**Project:** Build an interactive component using data attributes

---

#### **Module 12: Styling Basics**
**Duration:** 2-3 hours  
**Difficulty:** Beginner-Intermediate  
**Topics:**
- **Inline CSS** with `style` attribute
- **Internal CSS** with `<style>` tag
- **External CSS** with `<link>` tag
- When to use each approach
- CSS precedence and specificity basics
- Separation of concerns
- Best practices for styling

**Learning Objectives:**
- Apply inline styles
- Add internal stylesheets
- Link external CSS files
- Understand the cascade and specificity
- Follow best practices for CSS organization

**Project:** Style an HTML page using all three methods

---

#### **Module 13: Meta Tags and SEO**
**Duration:** 3-4 hours  
**Difficulty:** Intermediate  
**Topics:**
- Essential meta tags (charset, viewport, description)
- **Basics of SEO** in HTML
- Page title optimization
- Meta description
- Open Graph tags (Facebook/social)
- Twitter Card tags
- Canonical URLs
- Robots meta tag
- Structured data basics (schema.org)
- Favicon and app icons

**Learning Objectives:**
- Optimize page metadata for SEO
- Add social media preview tags
- Set up favicons properly
- Understand SEO fundamentals
- Improve search engine discoverability

**Project:** Optimize a website's metadata for search and social sharing

---

#### **Module 14: Accessibility Basics**
**Duration:** 4-5 hours  
**Difficulty:** Intermediate-Advanced  
**Topics:**
- Why accessibility matters
- ARIA roles, states, and properties
- Semantic HTML vs ARIA (when to use each)
- Alt text for images
- Form labels and accessibility
- Keyboard navigation
- Focus management
- Screen reader considerations
- Skip navigation links
- Color contrast
- WCAG guidelines overview
- Testing with accessibility tools

**Learning Objectives:**
- Understand accessibility principles (WCAG)
- Use ARIA attributes correctly
- Make websites screen reader friendly
- Ensure keyboard accessibility
- Test with accessibility tools
- Write accessible HTML from the start

**Project:** Audit and fix accessibility issues in an existing website

---

#### **Module 15: Including JavaScript**
**Duration:** 2-3 hours  
**Difficulty:** Intermediate  
**Topics:**
- `<script>` tag basics
- Inline JavaScript
- External JavaScript files
- `src` attribute
- `async` and `defer` attributes
- Script placement (head vs body)
- `<noscript>` tag
- Content Security Policy (CSP) basics

**Learning Objectives:**
- Include JavaScript in HTML documents
- Use external JavaScript files
- Understand async/defer loading
- Place scripts optimally for performance
- Handle browsers with JavaScript disabled
- Understand basic CSP concepts

**Project:** Create an interactive HTML page with JavaScript

---

#### **Module 16: Best Practices & Validation**
**Duration:** 3-4 hours  
**Difficulty:** Intermediate  
**Topics:**
- Code organization and structure
- Naming conventions
- HTML comments and documentation
- Indentation and formatting
- W3C HTML Validation
- Cross-browser compatibility
- Progressive enhancement
- Performance optimization
- Mobile-first approach
- Accessibility-first development
- SEO best practices

**Learning Objectives:**
- Write clean, maintainable HTML
- Validate HTML with W3C validator
- Follow HTML5 standards and conventions
- Optimize for performance
- Ensure cross-browser compatibility
- Apply progressive enhancement

**Project:** Refactor and optimize a poorly written HTML document

---

#### **Module 17: Final Project**
**Duration:** 8-12 hours  
**Difficulty:** Intermediate  
**Topics:**
- Planning a complete website
- Combining all learned concepts
- Multi-page website structure
- Semantic HTML throughout
- Forms and validation
- Media integration
- Accessibility implementation
- SEO optimization
- Performance considerations
- Deployment (GitHub Pages, Netlify, etc.)

**Learning Objectives:**
- Plan and build a complete website from scratch
- Apply all HTML concepts learned
- Make it fully responsive and accessible
- Optimize for search engines
- Validate and test thoroughly
- Deploy to a live server

**Project:** Build a complete multi-page website (portfolio, business site, or blog)

---

## 🎨 Content Design Guidelines

### Module Introduction Template

Each module should follow this structure:

```markdown
# Module Title

## Overview
Brief description of what the module covers (2-3 sentences)

## Description
Detailed explanation of the module's content and relevance (2-3 paragraphs)

## What You'll Build
Specific project or outcome students will create

## Learning Objectives
- Objective 1
- Objective 2
- Objective 3

## Prerequisites
- Previous modules completed
- Required knowledge

## Estimated Time
X-Y hours to complete

## Navigation
[Previous Module] [Start Module →]
```

### Lesson Structure Template

Each lesson within a module should include:

```markdown
# Lesson Title

## Context
Why this topic matters and where it fits in the bigger picture

## Concept Explanation
Clear, beginner-friendly explanation with:
- Real-world analogies
- Visual examples
- Common use cases

## Implementation
Step-by-step instructions with:
- Code examples
- Before/after comparisons
- Live demos

## Code Breakdown
Line-by-line explanation of what each part does

## Best Practices
- Industry standards
- Common mistakes to avoid
- Accessibility considerations

## Hands-On Exercise
Practical task for students to complete

## Verification
How to check if the implementation is correct

## Common Issues
Troubleshooting guide for typical problems

## What's Next
Preview of the next lesson

## Navigation
[← Previous] [Next →]
```

---

## 📝 MDX Formatting Rules

### Critical Rules for HTML Course

Based on the MDX formatting documentation, follow these rules **strictly**:

#### 1. Code Block Formatting

**✅ CORRECT:**
````mdx
Here's how to create a heading:

```html title="index.html"
<h1>My First Heading</h1>
```

This creates a level-1 heading.
````

**❌ WRONG:**
````mdx
Here's how to create a heading: ```html <h1>My First Heading</h1>``` This creates a level-1 heading.
````

#### 2. Component Usage

**✅ CORRECT:**
````mdx
<Accordion id="html-structure" title="HTML Document Structure">

The basic structure of an HTML document includes:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Content</h1>
  </body>
</html>
```

Each part serves a specific purpose.

</Accordion>
````

**❌ WRONG:**
````mdx
<Accordion id="html-structure" title="HTML Document Structure">
The basic structure: ```html <!DOCTYPE html>..``` Each part serves a purpose.
</Accordion>
````

#### 3. Step Components

**✅ CORRECT:**
````mdx
<Steps>
  <Step>
    ### Create the HTML file
    
    Create a new file named `index.html`:
    
    ```html title="index.html"
    <!DOCTYPE html>
    <html lang="en">
    </html>
    ```
    
    Save this file in your project folder.
  </Step>
  
  <Step>
    ### Add the head section
    
    Next step content...
  </Step>
</Steps>
````

**❌ WRONG:**
````mdx
<Steps>
  <Step>
    ### Create the HTML file Create a new file: ```html <!DOCTYPE html>``` Save this file.
  </Step>
</Steps>
````

#### 4. Callout Boxes

```mdx
<Callout type="info">
  **Important:** Always use lowercase for HTML tags. While `<H1>` works, the standard is `<h1>`.
</Callout>

<Callout type="warning">
  **Warning:** Don't forget to close your tags! Missing closing tags can break your page layout.
</Callout>

<Callout type="success">
  **Pro Tip:** Use semantic HTML elements for better accessibility and SEO.
</Callout>
```

#### 5. Code Highlighting

````mdx
```html title="index.html" {2,5-7}
<!DOCTYPE html>
<html lang="en">  <!-- Highlighted line -->
<head>
  <meta charset="UTF-8">
  <title>My Page</title>  <!-- These lines -->
  <meta name="viewport" content="width=device-width">  <!-- are also -->
  <meta name="description" content="Page description">  <!-- highlighted -->
</head>
</html>
```
````

---

## 📖 Template Library

### Module Introduction Template (Complete)

````mdx
---
title: "Module 1: Basic HTML Tags"
description: "Learn the fundamental HTML tags for creating web page content"
module: 1
totalSteps: 8
duration: "3-4 hours"
difficulty: "beginner"
prerequisites:
  - "module-0"
objectives:
  - "Use heading tags (<h1> to <h6>) appropriately"
  - "Create paragraphs with the <p> tag"
  - "Add hyperlinks using <a> with proper attributes"
  - "Embed images with <img> and alt text"
  - "Create ordered and unordered lists"
tags:
  - "html"
  - "basics"
  - "tags"
published: true
---

import { Separator } from "@/components/ui/separator";
import { TaskList } from "@/components/course/task-list";
import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";

# Module 1 - Basic HTML Tags

<Separator className="mb-4" />

## Overview

In this module, you'll learn the essential HTML tags that form the building blocks of every web page. These fundamental elements allow you to add headings, paragraphs, links, images, and lists to your pages.

## Description

HTML (HyperText Markup Language) uses tags to define different types of content. Think of tags as labels that tell the browser how to display your content. For example, wrapping text in `<h1>` tags tells the browser "this is a main heading" and it will display it large and bold.

In this module, we'll cover:

### **Headings**
HTML has six levels of headings, from `<h1>` (most important) to `<h6>` (least important). These create the hierarchy and structure of your content, similar to chapters and sections in a book.

### **Paragraphs**
The `<p>` tag defines paragraphs of text. This is how you add body content to your pages.

### **Links**
The `<a>` (anchor) tag creates clickable links that navigate to other pages or sections. Links are what make the web "connected."

### **Images**
The `<img>` tag embeds images in your page. You'll learn how to add images, provide alt text for accessibility, and control image display.

### **Lists**
HTML provides two types of lists:
- Unordered lists (`<ul>`) for bullet points
- Ordered lists (`<ol>`) for numbered items

## What You'll Build

By the end of this module, you'll create a complete blog post page featuring:

- ✍️ Properly structured headings (main title and section headings)
- 📝 Multiple paragraphs of formatted text
- 🔗 Internal and external links
- 🖼️ Images with descriptive alt text
- 📋 Both ordered and unordered lists
- 🎨 A visually organized, readable page layout

<Callout type="info">
  **Foundation Module:** This module teaches the tags you'll use in almost every HTML page you create. Master these fundamentals before moving on to more advanced concepts!
</Callout>

## Learning Objectives

<Separator className="mb-2" />

<TaskList
  checked={false}
  tasks={[
    "Create a properly structured HTML document",
    "Use heading tags (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) to create page hierarchy",
    "Write paragraphs using the <code>&lt;p&gt;</code> tag",
    "Add hyperlinks with <code>&lt;a href=''&gt;</code>",
    "Embed images using <code>&lt;img src='' alt=''&gt;</code>",
    "Create unordered lists with <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>",
    "Create ordered lists with <code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code>",
    "Build a complete blog post layout combining all elements"
  ]}
/>

## Prerequisites

Before starting this module, make sure you've completed:

- ✅ **Module 0: Introduction to HTML** - Understanding of HTML document structure and how to create and view HTML files

## Estimated Time

⏱️ **3-4 hours** to complete all lessons and the project

---

<div className="flex justify-between mt-8">
  <Button variant="outline" href="/docs/html/module-0/completed">
    ← Previous Module
  </Button>
  <Button href="/docs/html/module-1/lesson-1">
    Start Module 1 →
  </Button>
</div>
````

---

### Lesson Template (Complete Example)

````mdx
---
title: "Lesson 1: HTML Headings"
module: 1
lesson: 1
type: "lesson"
prev: "/docs/html/module-1"
next: "/docs/html/module-1/lesson-2"
---

import { Separator } from "@/components/ui/separator";
import { Callout } from "@/components/ui/callout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

# HTML Headings

<Separator className="mb-4" />

## Context

Headings are one of the most important elements in HTML. They create the structure and hierarchy of your content, similar to how a book has chapter titles and section headings.

Search engines use headings to understand your page structure, and screen readers use them to help users navigate your content. Proper heading usage is crucial for both SEO and accessibility.

## What Are Headings?

HTML provides six levels of headings, from `<h1>` (largest/most important) to `<h6>` (smallest/least important):

```html title="All Heading Levels"
<h1>Main Title (Heading 1)</h1>
<h2>Section Title (Heading 2)</h2>
<h3>Subsection Title (Heading 3)</h3>
<h4>Sub-subsection (Heading 4)</h4>
<h5>Minor Heading (Heading 5)</h5>
<h6>Smallest Heading (Heading 6)</h6>
```

### Visual Hierarchy

<div className="my-6 p-6 border rounded-lg">
  <h1 style={{margin: 0, fontSize: '2em', fontWeight: 'bold'}}>This is an h1 heading</h1>
  <h2 style={{margin: '1rem 0 0 0', fontSize: '1.5em', fontWeight: 'bold'}}>This is an h2 heading</h2>
  <h3 style={{margin: '1rem 0 0 0', fontSize: '1.17em', fontWeight: 'bold'}}>This is an h3 heading</h3>
  <h4 style={{margin: '1rem 0 0 0', fontSize: '1em', fontWeight: 'bold'}}>This is an h4 heading</h4>
  <h5 style={{margin: '1rem 0 0 0', fontSize: '0.83em', fontWeight: 'bold'}}>This is an h5 heading</h5>
  <h6 style={{margin: '1rem 0 0 0', fontSize: '0.67em', fontWeight: 'bold'}}>This is an h6 heading</h6>
</div>

## Heading Hierarchy Rules

<Callout type="warning">
  **Important:** Each page should have exactly **one** `<h1>` tag - the main title of the page. Think of it as the book title.
</Callout>

### Proper Hierarchy Example

```html title="Correct Heading Structure" {1,3,5,11,13}
<!-- Page Title -->
<h1>Complete Guide to Web Development</h1>

<!-- Main Sections -->
<h2>1. Introduction to HTML</h2>
  <p>HTML is the foundation...</p>
  
  <!-- Subsections -->
  <h3>What is HTML?</h3>
    <p>HTML stands for...</p>
    
  <h3>Why Learn HTML?</h3>
    <p>Learning HTML allows...</p>

<h2>2. Basic HTML Tags</h2>
  <p>In this section...</p>
  
  <h3>Headings</h3>
    <p>Headings create...</p>
    
    <h4>H1 Through H6</h4>
      <p>HTML provides six levels...</p>
```

### Incorrect Usage ❌

```html title="Wrong - Don't Do This"
<!-- ❌ Multiple h1 tags -->
<h1>Page Title</h1>
<h1>Another Title</h1>  <!-- Wrong! -->

<!-- ❌ Skipping levels -->
<h1>Main Title</h1>
<h4>Subsection</h4>  <!-- Wrong! Should be h2 -->

<!-- ❌ Using headings for styling -->
<h5>This text just needs to be small</h5>  <!-- Wrong! Use CSS instead -->
```

## Real-World Example

<Tabs defaultValue="code">
  <TabsList>
    <TabsTrigger value="code">HTML Code</TabsTrigger>
    <TabsTrigger value="preview">Preview</TabsTrigger>
  </TabsList>
  
  <TabsContent value="code">

```html title="blog-post.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Getting Started with HTML - Blog Post</title>
</head>
<body>
  
  <!-- Main page title -->
  <h1>Getting Started with HTML</h1>
  
  <!-- Introduction section -->
  <h2>Introduction</h2>
  <p>HTML is the foundation of web development. In this guide, we'll cover everything you need to know to get started.</p>
  
  <!-- First major section -->
  <h2>What is HTML?</h2>
  <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
  
  <!-- Subsection -->
  <h3>History of HTML</h3>
  <p>HTML was invented by Tim Berners-Lee in 1991...</p>
  
  <!-- Another subsection -->
  <h3>HTML Versions</h3>
  <p>HTML has evolved through several versions...</p>
  
  <!-- Deeper nesting -->
  <h4>HTML5</h4>
  <p>HTML5 is the latest version, released in 2014...</p>
  
  <!-- Second major section -->
  <h2>Why Learn HTML?</h2>
  <p>Learning HTML is essential because...</p>
  
  <!-- Third major section -->
  <h2>Next Steps</h2>
  <p>Now that you understand the basics...</p>
  
</body>
</html>
```

  </TabsContent>
  
  <TabsContent value="preview">
    <div className="p-6 border rounded-lg bg-white">
      <h1 style={{fontSize: '2em', fontWeight: 'bold', marginBottom: '1rem'}}>Getting Started with HTML</h1>
      
      <h2 style={{fontSize: '1.5em', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.75rem'}}>Introduction</h2>
      <p>HTML is the foundation of web development. In this guide, we'll cover everything you need to know to get started.</p>
      
      <h2 style={{fontSize: '1.5em', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.75rem'}}>What is HTML?</h2>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
      
      <h3 style={{fontSize: '1.17em', fontWeight: 'bold', marginTop: '1.25rem', marginBottom: '0.5rem'}}>History of HTML</h3>
      <p>HTML was invented by Tim Berners-Lee in 1991...</p>
      
      <h3 style={{fontSize: '1.17em', fontWeight: 'bold', marginTop: '1.25rem', marginBottom: '0.5rem'}}>HTML Versions</h3>
      <p>HTML has evolved through several versions...</p>
      
      <h4 style={{fontSize: '1em', fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem'}}>HTML5</h4>
      <p>HTML5 is the latest version, released in 2014...</p>
      
      <h2 style={{fontSize: '1.5em', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.75rem'}}>Why Learn HTML?</h2>
      <p>Learning HTML is essential because...</p>
      
      <h2 style={{fontSize: '1.5em', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.75rem'}}>Next Steps</h2>
      <p>Now that you understand the basics...</p>
    </div>
  </TabsContent>
</Tabs>

## Best Practices

### ✅ DO:

1. **Use one `<h1>` per page**
   ```html
   <h1>Page Main Title</h1>
   ```

2. **Follow logical hierarchy**
   ```html
   <h1>Main Title</h1>
     <h2>Section</h2>
       <h3>Subsection</h3>
   ```

3. **Use headings for structure, not styling**
   ```html
   <!-- Right: Heading defines content hierarchy -->
   <h2>Important Section</h2>
   ```

4. **Make headings descriptive**
   ```html
   <!-- Good: Clear and specific -->
   <h2>How to Install Python</h2>
   
   <!-- Bad: Vague -->
   <h2>Getting Started</h2>
   ```

### ❌ DON'T:

1. **Don't skip heading levels**
   ```html
   ❌ <h1>Title</h1>
      <h4>Subsection</h4>  <!-- Skipped h2 and h3 -->
   ```

2. **Don't use headings for font size**
   ```html
   ❌ <h5>This just needs to be small text</h5>
   <!-- Use CSS for styling instead -->
   ```

3. **Don't use multiple `<h1>` tags**
   ```html
   ❌ <h1>First Title</h1>
      <h1>Second Title</h1>
   ```

## Accessibility & SEO

<Callout type="success">
  **Accessibility Tip:** Screen readers use headings to create a page outline. Users can jump between headings to navigate quickly. Proper heading structure improves accessibility!
</Callout>

### How Screen Readers Use Headings:

1. **Create an outline** of the page structure
2. **Allow users to jump** to specific sections
3. **Understand content hierarchy** and importance

### SEO Benefits:

- **Search engines** use headings to understand your content
- **`<h1>` is especially important** for page topic
- **Proper hierarchy** helps search engines index your page
- **Descriptive headings** improve search rankings

## Hands-On Exercise

Create a web page with the following structure:

```html title="exercise.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Exercise</title>
</head>
<body>
  
  <!-- 1. Add an h1 with the title "My Favorite Hobby" -->
  
  
  <!-- 2. Add an h2 with "Why I Love It" -->
  
  
  <!-- 3. Add an h2 with "How I Got Started" -->
  
  
  <!-- 4. Under "How I Got Started", add an h3 with "First Steps" -->
  
  
  <!-- 5. Add another h2 with "Tips for Beginners" -->
  
  
</body>
</html>
```

### Solution

<Accordion id="exercise-solution" title="Click to see solution">

```html title="exercise-solution.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Favorite Hobby</title>
</head>
<body>
  
  <h1>My Favorite Hobby</h1>
  
  <h2>Why I Love It</h2>
  <p>I love photography because it allows me to capture moments...</p>
  
  <h2>How I Got Started</h2>
  <p>I got started with photography when...</p>
  
  <h3>First Steps</h3>
  <p>My first camera was...</p>
  
  <h2>Tips for Beginners</h2>
  <p>If you're just starting out...</p>
  
</body>
</html>
```

</Accordion>

## Common Mistakes

<Accordions type="single">
  <Accordion id="mistake-1" title="Using Headings for Visual Styling" value="mistake1">
    
    **Problem:**
    ```html
    <h6>This is small text</h6>
    ```
    
    **Why it's wrong:** Headings define structure, not appearance.
    
    **Solution:**
    ```html
    <p style="font-size: 0.8em;">This is small text</p>
    <!-- Or better: use CSS classes -->
    ```
    
  </Accordion>
  
  <Accordion id="mistake-2" title="Multiple H1 Tags" value="mistake2">
    
    **Problem:**
    ```html
    <h1>Company Name</h1>
    <h1>Product Name</h1>
    ```
    
    **Why it's wrong:** Each page should have one main topic (one h1).
    
    **Solution:**
    ```html
    <h1>Company Name - Product Name</h1>
    <h2>About Our Product</h2>
    ```
    
  </Accordion>
  
  <Accordion id="mistake-3" title="Skipping Heading Levels" value="mistake3">
    
    **Problem:**
    ```html
    <h1>Main Title</h1>
    <h4>Subsection</h4>
    ```
    
    **Why it's wrong:** Breaks logical hierarchy.
    
    **Solution:**
    ```html
    <h1>Main Title</h1>
    <h2>Section</h2>
    <h3>Subsection</h3>
    ```
    
  </Accordion>
</Accordions>

## Verification Checklist

After completing this lesson, verify:

- ✅ Page has exactly one `<h1>` tag
- ✅ Headings follow logical hierarchy (h1 → h2 → h3, etc.)
- ✅ No heading levels are skipped
- ✅ Headings are used for structure, not styling
- ✅ Each heading accurately describes its section
- ✅ Page structure makes sense when read by heading outline

## What's Next

Now that you understand headings, the next lesson covers **paragraphs** - the `<p>` tag for adding body text to your pages.

---

<div className="flex justify-between mt-8">
  <Button variant="outline" href="/docs/html/module-1">
    ← Module Intro
  </Button>
  <Button href="/docs/html/module-1/lesson-2">
    Next: Paragraphs →
  </Button>
</div>
````

---

## 🛠️ Implementation Guide

### Step 1: Set Up Course Structure

Create the folder structure:

```bash
content/
  docs/
    html/
      index.mdx                 # HTML course home
      module-0/
        index.mdx              # Module intro
        lesson-1.mdx
        lesson-2.mdx
        ...
        completed.mdx          # Module completion
      module-1/
        index.mdx
        lesson-1.mdx
        ...
      ...
```

### Step 2: Create Module Files

For each module:

1. **index.mdx** - Module introduction
2. **lesson-{n}.mdx** - Individual lessons
3. **completed.mdx** - Celebration page

### Step 3: Configure Navigation

**`meta.json`** for each module:

```json
{
  "title": "Module 1: Basic HTML Tags",
  "pages": [
    "lesson-1",
    "lesson-2",
    "lesson-3",
    "lesson-4",
    "lesson-5",
    "lesson-6",
    "lesson-7",
    "completed"
  ]
}
```

### Step 4: Add Components

Ensure these components are available:

```tsx
// components/course/task-list.tsx
// components/ui/separator.tsx
// components/ui/callout.tsx
// components/ui/button.tsx
// components/ui/tabs.tsx
// components/ui/accordion.tsx
```

### Step 5: Test Each Lesson

1. Write lesson content
2. Run `npm run build`
3. Fix any MDX formatting errors
4. Preview in browser
5. Test all interactive elements

---

## ✅ Quality Checklist

### Content Quality

- [ ] Clear learning objectives stated
- [ ] Concepts explained with real-world examples
- [ ] Code examples are complete and working
- [ ] Step-by-step instructions provided
- [ ] Common mistakes addressed
- [ ] Accessibility considerations included
- [ ] SEO best practices mentioned
- [ ] Hands-on exercise included
- [ ] Verification steps provided

### Technical Quality

- [ ] All code blocks properly formatted
- [ ] No inline code in JSX components
- [ ] Blank lines before/after code blocks
- [ ] All components properly imported
- [ ] All JSX components closed
- [ ] No duplicate component tags
- [ ] Frontmatter complete and accurate
- [ ] Navigation links work correctly
- [ ] Images have alt text
- [ ] Build completes without errors

### MDX Formatting

- [ ] Followed MDX formatting rules
- [ ] Code blocks isolated on separate lines
- [ ] Proper spacing in components
- [ ] Callouts used appropriately
- [ ] Tabs/Accordions structured correctly
- [ ] No Prettier formatting conflicts
- [ ] Headings follow hierarchy

### Accessibility

- [ ] Semantic HTML used in examples
- [ ] Alt text for all images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation mentioned
- [ ] Screen reader considerations
- [ ] Color contrast adequate
- [ ] Focus states visible

### Learning Experience

- [ ] Progression is logical
- [ ] Difficulty increases gradually
- [ ] Examples are relevant
- [ ] Exercises are achievable
- [ ] Projects are engaging
- [ ] Feedback mechanisms present
- [ ] Navigation is intuitive
- [ ] Content is scan-friendly

---

## 📊 Course Completion Criteria

Students complete the HTML course when they:

### Knowledge Milestones

- ✅ Understand HTML document structure
- ✅ Can use semantic HTML elements
- ✅ Know when to use which HTML tag
- ✅ Understand accessibility basics
- ✅ Can create accessible forms
- ✅ Know SEO fundamentals
- ✅ Understand best practices

### Skill Milestones

- ✅ Can build a complete multi-page website
- ✅ Can create accessible, semantic markup
- ✅ Can optimize pages for search engines
- ✅ Can implement forms with validation
- ✅ Can work with media elements
- ✅ Can write clean, maintainable HTML
- ✅ Can validate and debug HTML

### Project Milestones

- ✅ Completed all module exercises
- ✅ Built final portfolio/website project
- ✅ Website passes W3C validation
- ✅ Website meets WCAG AA standards
- ✅ Website is mobile-responsive
- ✅ Website is deployed live

---

## 🎓 Certification Requirements

To receive the HTML course certificate:

1. **Complete all 11 modules** (100% completion)
2. **Pass all module quizzes** (80% minimum score)
3. **Submit final project** meeting all criteria:
   - Multi-page website (minimum 5 pages)
   - Semantic HTML throughout
   - Accessible (WCAG AA compliant)
   - Valid HTML (W3C validator)
   - Responsive design
   - SEO optimized
   - Deployed live (GitHub Pages, Netlify, etc.)

---

## 🔄 Iteration & Updates

### Content Review Cycle

1. **Monthly:** Review student feedback and questions
2. **Quarterly:** Update examples and best practices
3. **Annually:** Major content updates for new HTML standards

### Feedback Collection

- Course completion surveys
- Lesson-specific feedback forms
- Community discussions
- Error reports
- Success stories

### Metrics to Track

- Completion rates per module
- Average time per lesson
- Common error patterns
- Student satisfaction scores
- Project submission quality
- Employment outcomes

---

## 📚 Additional Resources

### Reference Documentation

- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML Specification](https://html.spec.whatwg.org/)
- [HTML Living Standard](https://html.spec.whatwg.org/multipage/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Tools

- [W3C HTML Validator](https://validator.w3.org/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [HTML5 Outliner](https://gsnedders.html5.org/outliner/)

### Learning Aids

- [CodePen](https://codepen.io/) - Live HTML editor
- [JSFiddle](https://jsfiddle.net/) - Online code playground
- [HTML Reference](https://htmlreference.io/) - Visual guide
- [MDN Learning Area](https://developer.mozilla.org/en-US/docs/Learn)

---

## 🎯 Success Metrics

### Course Effectiveness

- **Completion Rate:** Target 70%+ completion
- **Time to Complete:** Average 40-50 hours
- **Student Satisfaction:** Target 4.5/5 stars
- **Project Quality:** 80%+ meet all criteria
- **Career Impact:** Track job placements

### Content Quality

- **Error Rate:** <1% build errors
- **Accessibility:** 100% WCAG AA compliant examples
- **Code Quality:** All examples validated
- **Up-to-date:** Review every 3 months

---

## 🚀 Next Steps

After completing this workflow documentation:

1. **Review:** Ensure all modules are planned
2. **Create:** Start building Module 0
3. **Test:** Build and preview each lesson
4. **Iterate:** Gather feedback and improve
5. **Launch:** Release modules progressively
6. **Support:** Provide student assistance
7. **Update:** Keep content fresh and relevant

---

**Status:** ✅ **HTML Course Workflow Complete**  
**Last Updated:** November 2024  
**Version:** 1.0  

---

*This workflow document provides a complete guide for creating a professional HTML course. Follow these guidelines to ensure consistent, high-quality educational content.*
