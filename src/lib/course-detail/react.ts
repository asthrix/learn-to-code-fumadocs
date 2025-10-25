import { Bot, GaugeCircle, Layers } from "lucide-react";

import type { CourseDetailContent } from "./types";

export const reactCourseDetail: CourseDetailContent = {
   slug: "react",
   hero: {
      eyebrow: "React · TaskFlow Pro",
      title: "Build production React systems",
      highlight: "from design system atoms to full-stack deployments",
      description:
         "Ship TaskFlow Pro end-to-end while learning state management, routing, data fetching, and performance hardening techniques used by high-growth teams.",
      primaryCta: {
         label: "Start the React track",
         href: "/docs/react",
      },
      secondaryCta: {
         label: "View project blueprint",
         href: "/docs/react/m0",
      },
      metrics: [
         { label: "Total modules", value: "10" },
         { label: "Hours of content", value: "45+" },
         { label: "Production deploys", value: "3" },
         { label: "Interactive labs", value: "18" },
      ],
   },
   differentiators: [
      {
         title: "Architecture, not tutorials",
         description:
            "Blueprint the TaskFlow Pro interface with component-driven workflows, routing strategy, and runtime analytics instrumentation.",
         icon: Layers,
      },
      {
         title: "Performance baked in",
         description:
            "Profile renders, memoize effectively, and ship lighthouse-ready builds with modern data-fetching patterns and suspense.",
         icon: GaugeCircle,
      },
      {
         title: "AI-accelerated reviews",
         description:
            "Automated pull request feedback highlights accessibility, testing, and architectural regressions in minutes.",
         icon: Bot,
      },
   ],
   technology: [
      {
         title: "Core Stack",
         items: ["React 18", "TypeScript", "Vite", "React Router"],
      },
      {
         title: "State & Data",
         items: ["TanStack Query", "Zustand", "Immer", "Server Actions"],
      },
      {
         title: "Tooling",
         items: ["Vitest", "Testing Library", "Storybook", "Playwright"],
      },
      {
         title: "Quality",
         items: ["Lighthouse", "Bundle Analyzer", "ESLint", "Cypress"],
      },
   ],
   modules: [
      {
         title: "M0 · Kickstart",
         description:
            "Stand up your tooling, unpack TaskFlow Pro's architecture, and run the starter scaffold that powers every later sprint.",
         lessons: [
            { title: "Module 0 · Kickstart", duration: "30 min" },
            { title: "Welcome to Project React", duration: "20 min" },
            { title: "Downloads & Setup Requirements", duration: "30 min" },
            { title: "Project Overview", duration: "20 min" },
            { title: "Dependencies", duration: "25 min" },
            { title: "Linting & Formatting", duration: "25 min" },
            { title: "API Overview", duration: "20 min" },
            { title: "UI Components", duration: "20 min" },
            { title: "Environment Variables", duration: "15 min" },
            { title: "Running the Project", duration: "15 min" },
            { title: "Working with the Project", duration: "20 min" },
            { title: "Implementing Module 0", duration: "45 min" },
            { title: "Module 0 Validation", duration: "15 min" },
         ],
      },
      {
         title: "M1 · React Fundamentals",
         description:
            "Master JSX, components, props, and foundational hooks while styling TaskFlow Pro with Tailwind.",
         lessons: [
            { title: "React Fundamentals", duration: "60 min" },
            { title: "Introduction to React", duration: "20 min" },
            { title: "Why React?", duration: "20 min" },
            { title: "JSX Overview", duration: "25 min" },
            {
               title: "JSX Iteration & Conditional Rendering",
               duration: "25 min",
            },
            { title: "Components", duration: "25 min" },
            { title: "Component Props", duration: "25 min" },
            { title: "Component Lifecycle", duration: "20 min" },
            { title: "Introduction to Hooks", duration: "25 min" },
            { title: "Styling & Tailwind", duration: "30 min" },
            { title: "Implementing Module 1", duration: "60 min" },
            { title: "Module 1 Validation", duration: "20 min" },
         ],
      },
      {
         title: "M2 · State & Events",
         description:
            "Wire up interactive workflows with local state, controlled inputs, and ergonomic event handlers.",
         lessons: [
            { title: "Module 2 · State & Events", duration: "70 min" },
            { title: "Introduction to State", duration: "20 min" },
            { title: "State in React", duration: "25 min" },
            { title: "Event Handlers", duration: "25 min" },
            { title: "Handling Click Events", duration: "25 min" },
            { title: "Handling Change Events", duration: "25 min" },
            { title: "Handling Form Submission", duration: "25 min" },
            {
               title: "Event Handler Best Practices",
               duration: "20 min",
            },
            { title: "The `useState` Hook", duration: "25 min" },
            {
               title: "Controlled vs Uncontrolled Components",
               duration: "25 min",
            },
            { title: "Implementing Module 2", duration: "60 min" },
            { title: "Module 2 Validation", duration: "20 min" },
         ],
      },
      {
         title: "M3 · Effects & Data",
         description:
            "Leverage effects, refs, and resilient data-fetching patterns to sync TaskFlow Pro with real APIs.",
         lessons: [
            { title: "Module 3 · Effects & Data", duration: "80 min" },
            { title: "Introduction to Effects", duration: "25 min" },
            { title: "Effects in React", duration: "25 min" },
            { title: "`useEffect` Deep Dive", duration: "30 min" },
            {
               title: "`useRef` for DOM and Mutable Values",
               duration: "20 min",
            },
            {
               title: "Introduction to Data Fetching",
               duration: "25 min",
            },
            { title: "Data Fetching Part 1", duration: "30 min" },
            { title: "Data Fetching Part 2", duration: "30 min" },
            { title: "Data Fetching Part 3", duration: "35 min" },
            {
               title: "Data Fetching Best Practices",
               duration: "25 min",
            },
            { title: "Implementing Module 3", duration: "60 min" },
            { title: "Module 3 Validation", duration: "20 min" },
         ],
      },
      {
         title: "M4 · Routes & Navigation",
         description:
            "Design intuitive flows with React Router while differentiating client and server navigation strategies.",
         lessons: [
            { title: "Module 4 · Routes & Navigation", duration: "60 min" },
            { title: "Introduction to Navigation", duration: "20 min" },
            { title: "Client vs Server Routing", duration: "20 min" },
            { title: "Routing in React", duration: "25 min" },
            { title: "React Router Part 1", duration: "30 min" },
            { title: "React Router Part 2", duration: "30 min" },
            { title: "React Router Part 3", duration: "35 min" },
            { title: "Routing Best Practices", duration: "25 min" },
            { title: "Implementing Module 4", duration: "60 min" },
            { title: "Validating Module 4", duration: "25 min" },
         ],
      },
      {
         title: "M5 · Hooks & Performance",
         description:
            "Push your component architecture with memoization, custom hooks, and performance tuning.",
         lessons: [
            { title: "Module 5 · Hooks & Performance", duration: "70 min" },
            { title: "Introduction to Performance", duration: "20 min" },
            { title: "Performance in React", duration: "25 min" },
            { title: "`useMemo`", duration: "25 min" },
            { title: "`useCallback`", duration: "25 min" },
            { title: "Custom Hooks", duration: "30 min" },
            {
               title: "Custom Hooks Best Practices",
               duration: "25 min",
            },
            {
               title: "Custom Components Patterns",
               duration: "35 min",
            },
            {
               title: "Component Best Practices",
               duration: "30 min",
            },
            { title: "Implementing Module 5", duration: "60 min" },
            { title: "Validating Module 5", duration: "30 min" },
         ],
      },
      {
         title: "M6 · State Management",
         description:
            "Scale state across teams using context, Zustand, and Redux while avoiding prop drilling traps.",
         lessons: [
            { title: "Module 6 · State Management", duration: "80 min" },
            {
               title: "Introduction to State Management",
               duration: "20 min",
            },
            { title: "State Management in React", duration: "25 min" },
            { title: "Prop Drilling", duration: "25 min" },
            { title: "`useContext`", duration: "30 min" },
            { title: "Zustand Introduction", duration: "25 min" },
            { title: "Zustand Selectors", duration: "30 min" },
            { title: "Zustand Async Flows", duration: "35 min" },
            { title: "Zustand Integration", duration: "35 min" },
            { title: "Redux Part 1", duration: "35 min" },
            { title: "Redux Part 2", duration: "40 min" },
            { title: "Redux Part 3", duration: "40 min" },
            { title: "Redux Custom Components", duration: "35 min" },
            { title: "Redux Best Practices", duration: "30 min" },
            { title: "Implementing Module 6", duration: "65 min" },
            { title: "Validating Module 6", duration: "30 min" },
         ],
      },
      {
         title: "M7 · Forms & Authentication",
         description:
            "Craft resilient forms with React Hook Form and roll out authentication flows across TaskFlow Pro.",
         lessons: [
            {
               title: "Module 7 · Forms & Authentication",
               duration: "80 min",
            },
            { title: "Introduction to Forms", duration: "20 min" },
            { title: "Forms in React", duration: "25 min" },
            { title: "React Hook Form Basics", duration: "30 min" },
            {
               title: "React Hook Form Validation",
               duration: "35 min",
            },
            {
               title: "React Hook Form Dynamic Fields",
               duration: "35 min",
            },
            { title: "Form UX Best Practices", duration: "25 min" },
            { title: "Authentication Foundations", duration: "20 min" },
            { title: "Auth Service & Context", duration: "40 min" },
            { title: "Login Implementation", duration: "40 min" },
            { title: "Password Reset Flow", duration: "35 min" },
            { title: "Auth Rollout & Validation", duration: "45 min" },
         ],
      },
      {
         title: "M8 · Deployment",
         description:
            "Harden your builds, deploy to Vercel, and codify the release checklist for confident launches.",
         lessons: [
            { title: "Module 8 · Deployment", duration: "40 min" },
            { title: "Production Build", duration: "25 min" },
            { title: "Vercel Deployment", duration: "30 min" },
            { title: "Deployment Best Practices", duration: "30 min" },
            { title: "Deployment Validation", duration: "25 min" },
         ],
      },
      {
         title: "MX · Extended",
         description:
            "Ship advanced enhancements—from richer forms to Cypress coverage—to take TaskFlow Pro beyond the core curriculum.",
         lessons: [
            { title: "Module X · Extended", duration: "90 min" },
            {
               title: "Introduction to Extended Enhancements",
               duration: "20 min",
            },
            { title: "Improving Forms & Inputs", duration: "30 min" },
            { title: "Implementing React Query", duration: "35 min" },
            { title: "Implementing Users & Profiles", duration: "35 min" },
            { title: "Implementing Listing Creation", duration: "35 min" },
            { title: "Implementing Reviews", duration: "30 min" },
            { title: "Testing with Cypress", duration: "30 min" },
            { title: "Note on React 19", duration: "20 min" },
            { title: "Conclusion", duration: "15 min" },
            { title: "Validation Checklist", duration: "15 min" },
         ],
      },
   ],
   testimonials: [
      {
         name: "Asha Rao",
         role: "Senior Frontend Engineer",
         company: "Zenscale",
         quote: "The TaskFlow Pro build mirrors the expectations we set for new hires. The automated reviews meant I had deploy-ready PRs day one at my new role.",
      },
      {
         name: "Karthik Mehta",
         role: "Product Engineer",
         company: "Northwind Labs",
         quote: "From state modeling to performance budgets, every lesson translated directly into features we shipped for our enterprise dashboard.",
      },
      {
         name: "Divya Sharma",
         role: "UI Engineer",
         company: "Acme Systems",
         quote: "I finally understood how to operationalize design systems at scale. The Storybook-driven workflow was a game changer for my team collaborations.",
      },
   ],
   pricing: [
      {
         name: "Solo Builder",
         price: "₹4,499",
         cadence: "one-time",
         description:
            "Full access to the React track, assessments, and deployment templates for individual learners.",
         features: [
            "Lifetime access to React curriculum",
            "Automated PR reviews for 3 projects",
            "Community office hours & support",
         ],
         ctaLabel: "Enroll now",
         ctaHref: "/checkout/react/solo",
         highlighted: true,
      },
      {
         name: "Mentored Sprint",
         price: "₹7,999",
         cadence: "one-time",
         description:
            "Get async mentor feedback, portfolio polish sessions, and interview prep guidance.",
         features: [
            "Everything in Solo Builder",
            "Four mentor review sessions",
            "Personalized performance audits",
            "Interview prep kit with mock questions",
         ],
         ctaLabel: "Reserve seat",
         ctaHref: "/checkout/react/mentored",
      },
      {
         name: "Team Pod",
         price: "₹22,500",
         cadence: "per team",
         description:
            "Ideal for 4-6 engineers adopting React best practices with shared scorecards and rollout plan.",
         features: [
            "Seat management dashboard",
            "Custom onboarding workshop",
            "Team retros with senior mentors",
            "Quarterly roadmap alignment call",
         ],
         ctaLabel: "Chat with us",
         ctaHref: "mailto:hello@learnfrontend.dev",
      },
   ],
};
