# React Course Content Playbook

Create production-ready, beginner-friendly lessons that guide students through
building TaskFlow Pro from start to finish. This playbook consolidates the
planning sources you have on hand so every lesson stays short, crisp, and
project-focused.

---

## Reference Map

Keep these files open while writing:

-  `course-structure/course-content-specification.md` – course vision, audience,
   success criteria.
-  `course-structure/CONTENT_GENERATION_GUIDE.md` – lesson template and
   formatting standards.
-  `course-structure/react/tocpis.md` – ordered topic list for every module.
-  `course-structure/IMPLEMENTATION_STATUS.md` – progress tracker and immediate
   priorities.
-  Fumadocs UI docs: <https://fumadocs.dev/docs/ui/components> – component usage
   patterns.

---

## Core Principles

-  **Project-Based Learning:** Every lesson must extend TaskFlow Pro; avoid
   isolated "toy" examples.
-  **Short & Focused:** Target 300–500 word explanations, 2–3 code snippets, and
   a single, tangible outcome.
-  **Progressive Complexity:** Move from fundamentals (M0-M1) to advanced
   patterns (M5-MX) without skipping prerequisite concepts.
-  **Production Quality:** Feature best practices, common mistakes, and
   validation steps in each lesson.
-  **Beginner-Friendly Tone:** Explain the "why" before the "how" and link new
   ideas to familiar concepts.

---

## TaskFlow Pro Roadmap

| Module | Focus                 | TaskFlow Pro Milestone                     | Representative Topics (see `tocpis.md`)                                                                                   |
| ------ | --------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| M0     | Environment & Tooling | Project shell and dev workflow             | Welcome, Setup, Project Overview, Dependencies, Linting, Env Vars, Running, Implementation, Validation                    |
| M1     | React Fundamentals    | UI scaffolding (Header, Sidebar, TaskCard) | Intro to React, Why React, JSX, Rendering, Components, Props, Lifecycle, Hooks intro, Styling, Implementation, Validation |
| M2     | State & Events        | Task CRUD interactions                     | State basics, Event handlers, useState, Controlled inputs, Implementation, Validation                                     |
| M3     | Effects & Data        | Remote data + persistence                  | useEffect, useRef, Fetching (parts 1-3), Best practices, Implementation, Validation                                       |
| M4     | Routing               | Multi-view navigation                      | Routing concepts, React Router parts 1-3, Best practices, Implementation, Validation                                      |
| M5     | Hooks & Performance   | Custom hooks + optimization                | Performance mindset, useMemo, useCallback, Custom hooks, Component best practices, Implementation, Validation             |
| M6     | State Management      | Global state architecture                  | Context, Prop drilling fixes, Redux sequence, Implementation, Validation                                                  |
| M7     | Forms & Auth          | Authenticated experience                   | React Hook Form series, Auth foundations, Best practices, Implementation, Validation                                      |
| M8     | Deployment            | Production readiness                       | Production builds, Vercel deployment, Deployment best practices, Validation                                               |
| MX     | Extended Capabilities | Advanced polish                            | Advanced forms, React Query, Users & Profiles, Listings, Reviews, Testing, React 19 note, Validation                      |

---

## Lesson Blueprint (use for every topic)

1. **Frontmatter:** Complete YAML block (title, description, module, lesson,
   duration, project_phase, prerequisites, learning_objectives, tags).

   ```yaml
   ---
   title: "[Lesson Title]"
   description: "[One-sentence promise for the learner]"
   module: "M#"
   lesson: "#"
   difficulty: "beginner|intermediate|advanced"
   duration: "[minutes]"
   project_phase: "[TaskFlow Pro milestone]"
   prerequisites: ["Previous lesson titles"]
   learning_objectives:
      - "Objective 1"
      - "Objective 2"
      - "Objective 3"
   tags: ["react", "hooks"]
   ---
   ```

2. **Learning Objectives:** 3–4 checkbox bullets mirroring
   `learning_objectives`.
3. **Project Context:** 2–3 sentences linking the concept to the feature being
   built.
4. **Concept Sections:**
   -  Explain the "what" and "why" before diving into code.
   -  Keep paragraphs short; aim for approachable language.
5. **Code Examples:**
   -  `### Basic Example` – isolated snippet proving the core idea.
   -  `### Practical Example` – TaskFlow Pro flavored snippet.
   -  Optionally add `### Advanced Pattern` for production nuance.
6. **✅ Best Practices:** At least two items with rationale and good code.
7. **❌ Common Mistakes:** At least two items showing bad code + fix.
8. **🔨 Implement in TaskFlow Pro:** Clear steps with code to integrate into the
   project.
9. **✅ Validation Checklist:** 8–12 checks grouped under Functionality, Code
   Quality, Understanding, Project Integration.
10.   **Navigation:** Update `meta.json` and bottom links (`Previous` / `Next`).

---

## Writing Workflow

1. **Review & Plan**

   -  Confirm lesson order in `tocpis.md` and prerequisites.
   -  Decide TaskFlow Pro feature(s) the lesson advances.

2. **Outline**

   -  Draft bullet points for explanation, examples, best practices, mistakes,
      and implementation steps.
   -  Select which UI components (callouts, tabs, collapsible details) support
      clarity.

3. **Draft**

   -  Write concise sections following the template.
   -  Keep paragraphs 2–3 sentences; use lists for multi-step ideas.
   -  Introduce code blocks early—students should see code on the first scroll.

4. **Project Implementation**

   -  Provide exact file paths and commands (e.g., `src/components/...`) for
      TaskFlow Pro updates.
   -  Remind students to run or refresh the dev server after changes.

5. **Quality Pass**

   -  Run through the validation checklist yourself.
   -  Ensure best practices and mistake sections feel actionable.
   -  Cross-check navigation links and `meta.json` entries.

6. **Status Update**
   -  Mark progress inside `course-structure/IMPLEMENTATION_STATUS.md`.
   -  Note any follow-up tasks or TODOs.

---

## Using Fumadocs UI Components in MDX

Leverage the shared component library to keep lessons interactive and
consistent.

### Built-in Fumadocs Components

-  Available automatically through `src/mdx-components.tsx`.
-  Examples: Tabs, Callout, Steps, Cards, Alerts, CodeBlock.
-  Docs: <https://fumadocs.dev/docs/ui/components>

````mdx
import {
   Tabs,
   TabsList,
   TabsTrigger,
   TabsContent,
} from "fumadocs-ui/components/tabs";

<Tabs defaultValue='basic'>
   <TabsList>
      <TabsTrigger value='basic'>Basic</TabsTrigger>
      <TabsTrigger value='advanced'>Advanced</TabsTrigger>
   </TabsList>
   <TabsContent value='basic'>
      ```tsx // Beginner-friendly snippet ```
   </TabsContent>
   <TabsContent value='advanced'>
      ```tsx // Production-ready variant ```
   </TabsContent>
</Tabs>
````

### Local UI Components (`src/components/ui`)

| Component       | How to Import in MDX                                                                                 | Typical Use                                    |
| --------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Button variants | `import { buttonVariants } from '@/components/ui/button';`                                           | Style links or CTA buttons with project theme. |
| Collapsible     | `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';` | Hide advanced notes or optional challenges.    |

Usage tips:

-  Apply classes from `buttonVariants({ variant: 'primary' })` on anchor tags to
   match branding.
-  Wrap optional or advanced material in `<Collapsible>` blocks so the main
   lesson stays streamlined for beginners.
-  Combine with Fumadocs components (e.g., place a `Callout` inside
   `CollapsibleContent`) for layered explanations.

### General Guidelines

-  Import components at the top of the MDX file; unused imports should be
   removed before committing.
-  Prefer semantic HTML inside components (e.g., lists within Collapsible
   content).
-  Keep component usage purposeful—ask "Does this improve clarity for a
   beginner?"

---

## Style Checklist

-  **Voice:** Encouraging, confident, jargon-free.
-  **Formatting:** Short paragraphs, descriptive headings, consistent fenced
   code blocks (` ```tsx ` when using React).
-  **Accessibility:** Mention keyboard shortcuts, color contrast, or screen
   reader notes where relevant.
-  **Context Linking:** Reference earlier lessons when building upon prior
   knowledge.
-  **Actionable Outcomes:** Every lesson ends with a working feature or verified
   understanding.

---

## Publishing Checklist

Before marking a lesson complete:

-  [ ] Lesson file created with full frontmatter and navigation links.
-  [ ] Code samples tested inside TaskFlow Pro or a minimal reproduction.
-  [ ] Best practices and common mistakes sections each include ≥2 items.
-  [ ] Implementation steps reference real file paths and commands.
-  [ ] Validation checklist covers functionality, quality, understanding, and
       project integration.
-  [ ] `meta.json` updated, and `IMPLEMENTATION_STATUS.md` progress recorded.
-  [ ] Optional components (tabs, collapsibles, callouts, buttons) enhance
       clarity without overwhelming the learner.

---

## Staying Project-Focused

-  Begin each module by summarizing what part of TaskFlow Pro students will
   complete.
-  Tie every example back to an app feature (e.g., "This hook powers the task
   filter panel").
-  Celebrate milestones—remind students how far TaskFlow Pro has progressed.
-  Suggest extension ideas for learners who finish early (e.g., "Try adding
   priority sorting").

---

Use this playbook as your single source of truth while authoring content.
Combine it with the existing templates and topic outline to deliver consistent,
high-impact lessons that lead every student to a production-ready TaskFlow Pro
application.
