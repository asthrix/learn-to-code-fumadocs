import { Bot, GaugeCircle, Layers } from "lucide-react";

import type { CourseDetailContent } from "./types";

export const oldReactCourseDetail: CourseDetailContent = {
   slug: "react-old",
   hero: {
      eyebrow: "React · TaskFlow Pro",
      title: "Project React",
      highlight: "Ship Blazing‑Fast, Scalable, Production‑Ready UIs",
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
            {
               title: "Module 0 · Kickstart",
               duration: "30 min",
               id: "m0/0_index",
            },
            {
               title: "Welcome to Project React",
               duration: "20 min",
               id: "m0/1_welcome",
            },
            {
               title: "Downloads & Setup Requirements",
               duration: "30 min",
               id: "m0/2_setup",
            },
            {
               title: "Project Overview",
               duration: "20 min",
               id: "m0/3_project-overview",
            },
            {
               title: "Dependencies",
               duration: "25 min",
               id: "m0/4_dependencies",
            },
            {
               title: "Linting & Formatting",
               duration: "25 min",
               id: "m0/5_linting-formatting",
            },
            {
               title: "API Overview",
               duration: "20 min",
               id: "m0/6_api-overview",
            },
            {
               title: "UI Components",
               duration: "20 min",
               id: "m0/7_ui-components",
            },
            {
               title: "Environment Variables",
               duration: "15 min",
               id: "m0/8_environment-variables",
            },
            {
               title: "Running the Project",
               duration: "15 min",
               id: "m0/9_running-project",
            },
            {
               title: "Working with the Project",
               duration: "20 min",
               id: "m0/10_working-with-project",
            },
            {
               title: "Implementing Module 0",
               duration: "45 min",
               id: "m0/11_implementation",
            },
            {
               title: "Module 0 Validation",
               duration: "15 min",
               id: "m0/12_validation",
            },
         ],
      },
      {
         title: "M1 · React Fundamentals",
         description:
            "Master JSX, components, props, and foundational hooks while styling TaskFlow Pro with Tailwind.",
         lessons: [
            {
               title: "React Fundamentals",
               duration: "60 min",
               id: "m1/0_index",
            },
            {
               title: "Introduction to React",
               duration: "20 min",
               id: "m1/1_intro-react",
            },
            { title: "Why React?", duration: "20 min", id: "m1/2_why-react" },
            {
               title: "JSX Overview",
               duration: "25 min",
               id: "m1/3_jsx-overview",
            },
            {
               title: "JSX Iteration & Conditional Rendering",
               duration: "25 min",
               id: "m1/4_jsx-iteration",
            },
            { title: "Components", duration: "25 min", id: "m1/5_components" },
            {
               title: "Component Props",
               duration: "25 min",
               id: "m1/6_component-props",
            },
            {
               title: "Component Lifecycle",
               duration: "20 min",
               id: "m1/7_component-lifecycle",
            },
            {
               title: "Introduction to Hooks",
               duration: "25 min",
               id: "m1/8_introduction-hooks",
            },
            {
               title: "Styling & Tailwind",
               duration: "30 min",
               id: "m1/9_styling-tailwind",
            },
            {
               title: "Implementing Module 1",
               duration: "60 min",
               id: "m1/10_implementation",
            },
            {
               title: "Module 1 Validation",
               duration: "20 min",
               id: "m1/11_validation",
            },
         ],
      },
      {
         title: "M2 · State & Events",
         description:
            "Wire up interactive workflows with local state, controlled inputs, and ergonomic event handlers.",
         lessons: [
            {
               title: "Module 2 · State & Events",
               duration: "70 min",
               id: "m2/0_index",
            },
            {
               title: "Introduction to State",
               duration: "20 min",
               id: "m2/1_introduction-state",
            },
            {
               title: "State in React",
               duration: "25 min",
               id: "m2/2_state-in-react",
            },
            {
               title: "Event Handlers",
               duration: "25 min",
               id: "m2/3_event-handlers",
            },
            {
               title: "Handling Click Events",
               duration: "25 min",
               id: "m2/4_handling-click-events",
            },
            {
               title: "Handling Change Events",
               duration: "25 min",
               id: "m2/5_handling-change-events",
            },
            {
               title: "Handling Form Submission",
               duration: "25 min",
               id: "m2/6_handling-form-submission",
            },
            {
               title: "Event Handler Best Practices",
               duration: "20 min",
               id: "m2/7_event-handler-best-practices",
            },
            {
               title: "The `useState` Hook",
               duration: "25 min",
               id: "m2/8_use-state-hook",
            },
            {
               title: "Controlled vs Uncontrolled Components",
               duration: "25 min",
               id: "m2/9_controlled-vs-uncontrolled",
            },
            {
               title: "Implementing Module 2",
               duration: "60 min",
               id: "m2/10_implementation",
            },
            {
               title: "Module 2 Validation",
               duration: "20 min",
               id: "m2/11_validation",
            },
         ],
      },
      {
         title: "M3 · Effects & Data",
         description:
            "Leverage effects, refs, and resilient data-fetching patterns to sync TaskFlow Pro with real APIs.",
         lessons: [
            {
               title: "Module 3 · Effects & Data",
               duration: "80 min",
               id: "m3/0_index",
            },
            {
               title: "Introduction to Effects",
               duration: "25 min",
               id: "m3/1_introduction-effects",
            },
            {
               title: "Effects in React",
               duration: "25 min",
               id: "m3/2_effects-in-react",
            },
            {
               title: "`useEffect` Deep Dive",
               duration: "30 min",
               id: "m3/3_use-effect-deep-dive",
            },
            {
               title: "`useRef` for DOM and Mutable Values",
               duration: "20 min",
               id: "m3/4_use-ref-hook",
            },
            {
               title: "Introduction to Data Fetching",
               duration: "25 min",
               id: "m3/5_introduction-data-fetching",
            },
            {
               title: "Data Fetching Part 1",
               duration: "30 min",
               id: "m3/6_data-fetching-part-1",
            },
            {
               title: "Data Fetching Part 2",
               duration: "30 min",
               id: "m3/7_data-fetching-part-2",
            },
            {
               title: "Data Fetching Part 3",
               duration: "35 min",
               id: "m3/8_data-fetching-part-3",
            },
            {
               title: "Data Fetching Best Practices",
               duration: "25 min",
               id: "m3/9_data-fetching-best-practices",
            },
            {
               title: "Implementing Module 3",
               duration: "60 min",
               id: "m3/10_implementation",
            },
            {
               title: "Module 3 Validation",
               duration: "20 min",
               id: "m3/11_validation",
            },
         ],
      },
      {
         title: "M4 · Routes & Navigation",
         description:
            "Design intuitive flows with React Router while differentiating client and server navigation strategies.",
         lessons: [
            {
               title: "Module 4 · Routes & Navigation",
               duration: "60 min",
               id: "m4/0_index",
            },
            {
               title: "Introduction to Navigation",
               duration: "20 min",
               id: "m4/1_introduction-navigation",
            },
            {
               title: "Client vs Server Routing",
               duration: "20 min",
               id: "m4/2_client-vs-server-routing",
            },
            {
               title: "Routing in React",
               duration: "25 min",
               id: "m4/3_routing-in-react",
            },
            {
               title: "React Router Part 1",
               duration: "30 min",
               id: "m4/4_react-router-part-1",
            },
            {
               title: "React Router Part 2",
               duration: "30 min",
               id: "m4/5_react-router-part-2",
            },
            {
               title: "React Router Part 3",
               duration: "35 min",
               id: "m4/6_react-router-part-3",
            },
            {
               title: "Routing Best Practices",
               duration: "25 min",
               id: "m4/7_routing-best-practices",
            },
            {
               title: "Implementing Module 4",
               duration: "60 min",
               id: "m4/8_implementation",
            },
            {
               title: "Validating Module 4",
               duration: "25 min",
               id: "m4/9_validation",
            },
         ],
      },
      {
         title: "M5 · Hooks & Performance",
         description:
            "Push your component architecture with memoization, custom hooks, and performance tuning.",
         lessons: [
            {
               title: "Module 5 · Hooks & Performance",
               duration: "70 min",
               id: "m5/0_index",
            },
            {
               title: "Introduction to Performance",
               duration: "20 min",
               id: "m5/1_introduction-performance",
            },
            {
               title: "Performance in React",
               duration: "25 min",
               id: "m5/2_performance-in-react",
            },
            { title: "`useMemo`", duration: "25 min", id: "m5/3_use-memo" },
            {
               title: "`useCallback`",
               duration: "25 min",
               id: "m5/4_use-callback",
            },
            {
               title: "Custom Hooks",
               duration: "30 min",
               id: "m5/5_custom-hooks",
            },
            {
               title: "Custom Hooks Best Practices",
               duration: "25 min",
               id: "m5/6_custom-hooks-best-practices",
            },
            {
               title: "Custom Components Patterns",
               duration: "35 min",
               id: "m5/7_custom-components-patterns",
            },
            {
               title: "Component Best Practices",
               duration: "30 min",
               id: "m5/8_component-best-practices",
            },
            {
               title: "Implementing Module 5",
               duration: "60 min",
               id: "m5/9_implementation",
            },
            {
               title: "Validating Module 5",
               duration: "30 min",
               id: "m5/10_validation",
            },
         ],
      },
      {
         title: "M6 · State Management",
         description:
            "Scale state across teams using context, Zustand, and Redux while avoiding prop drilling traps.",
         lessons: [
            {
               title: "Module 6 · State Management",
               duration: "80 min",
               id: "m6/0_index",
            },
            {
               title: "Introduction to State Management",
               duration: "20 min",
               id: "m6/1_introduction-state-management",
            },
            {
               title: "State Management in React",
               duration: "25 min",
               id: "m6/2_state-management-in-react",
            },
            {
               title: "Prop Drilling",
               duration: "25 min",
               id: "m6/3_prop-drilling",
            },
            {
               title: "`useContext`",
               duration: "30 min",
               id: "m6/4_use-context",
            },
            {
               title: "Zustand Introduction",
               duration: "25 min",
               id: "m6/5_zustand-introduction",
            },
            {
               title: "Zustand Selectors",
               duration: "30 min",
               id: "m6/6_zustand-selectors",
            },
            {
               title: "Zustand Async Flows",
               duration: "35 min",
               id: "m6/7_zustand-async",
            },
            {
               title: "Zustand Integration",
               duration: "35 min",
               id: "m6/8_zustand-integration",
            },
            {
               title: "Redux Part 1",
               duration: "35 min",
               id: "m6/9_redux-part-1",
            },
            {
               title: "Redux Part 2",
               duration: "40 min",
               id: "m6/10_redux-part-2",
            },
            {
               title: "Redux Part 3",
               duration: "40 min",
               id: "m6/11_redux-part-3",
            },
            {
               title: "Redux Custom Components",
               duration: "35 min",
               id: "m6/12_redux-custom-components",
            },
            {
               title: "Redux Best Practices",
               duration: "30 min",
               id: "m6/13_redux-best-practices",
            },
            {
               title: "Implementing Module 6",
               duration: "65 min",
               id: "m6/14_implementation",
            },
            {
               title: "Validating Module 6",
               duration: "30 min",
               id: "m6/15_validation",
            },
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
               id: "m7/0_index",
            },
            {
               title: "Introduction to Forms",
               duration: "20 min",
               id: "m7/1_introduction-forms",
            },
            {
               title: "Forms in React",
               duration: "25 min",
               id: "m7/2_forms-in-react",
            },
            {
               title: "React Hook Form Basics",
               duration: "30 min",
               id: "m7/3_react-hook-form-basics",
            },
            {
               title: "React Hook Form Validation",
               duration: "35 min",
               id: "m7/4_react-hook-form-validation",
            },
            {
               title: "React Hook Form Dynamic Fields",
               duration: "35 min",
               id: "m7/5_react-hook-form-dynamic-fields",
            },
            {
               title: "Form UX Best Practices",
               duration: "25 min",
               id: "m7/6_form-ux-best-practices",
            },
            {
               title: "Authentication Foundations",
               duration: "20 min",
               id: "m7/7_introduction-authentication",
            },
            {
               title: "Auth Service & Context",
               duration: "40 min",
               id: "m7/8_auth-service-and-context",
            },
            {
               title: "Login Implementation",
               duration: "40 min",
               id: "m7/9_login-implementation",
            },
            {
               title: "Password Reset Flow",
               duration: "35 min",
               id: "m7/10_password-reset-flow",
            },
            {
               title: "Auth Rollout & Validation",
               duration: "45 min",
               id: "m7/11_auth-rollout",
            },
         ],
      },
      {
         title: "M8 · Deployment",
         description:
            "Harden your builds, deploy to Vercel, and codify the release checklist for confident launches.",
         lessons: [
            {
               title: "Module 8 · Deployment",
               duration: "40 min",
               id: "m8/0_index",
            },
            {
               title: "Production Build",
               duration: "25 min",
               id: "m8/1_production-build",
            },
            {
               title: "Vercel Deployment",
               duration: "30 min",
               id: "m8/2_vercel-deployment",
            },
            {
               title: "Deployment Best Practices",
               duration: "30 min",
               id: "m8/3_deployment-best-practices",
            },
            {
               title: "Deployment Validation",
               duration: "25 min",
               id: "m8/4_deployment-validation",
            },
         ],
      },
      {
         title: "MX · Extended",
         description:
            "Ship advanced enhancements—from richer forms to Cypress coverage—to take TaskFlow Pro beyond the core curriculum.",
         lessons: [
            {
               title: "Module X · Extended",
               duration: "90 min",
               id: "mx/0_index",
            },
            {
               title: "Introduction to Extended Enhancements",
               duration: "20 min",
               id: "mx/1_introduction",
            },
            {
               title: "Improving Forms & Inputs",
               duration: "30 min",
               id: "mx/2_improving-forms-inputs",
            },
            {
               title: "Implementing React Query",
               duration: "35 min",
               id: "mx/3_react-query",
            },
            {
               title: "Implementing Users & Profiles",
               duration: "35 min",
               id: "mx/4_users-profiles",
            },
            {
               title: "Implementing Listing Creation",
               duration: "35 min",
               id: "mx/5_listing-creation",
            },
            {
               title: "Implementing Reviews",
               duration: "30 min",
               id: "mx/6_reviews",
            },
            {
               title: "Testing with Cypress",
               duration: "30 min",
               id: "mx/7_cypress-testing",
            },
            {
               title: "Note on React 19",
               duration: "20 min",
               id: "mx/8_react-19-note",
            },
            { title: "Conclusion", duration: "15 min", id: "mx/9_conclusion" },
            {
               title: "Validation Checklist",
               duration: "15 min",
               id: "mx/10_validation-checklist",
            },
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
         name: "Starter",
         price: "₹0",
         cadence: "Free Forever",
         description:
            "Access to introductory modules to get started with fundamentals.",
         features: [
            "Module 0: Introduction",
            "Module 1: Core Fundamentals",
            "Community support",
            "Lifetime access to free content",
         ],
         ctaLabel: "Start Learning",
         ctaHref: "/docs/react-old",
         highlighted: false,
      },
      {
         name: "Pro Builder",
         price: "₹4,999",
         cadence: "One-time Payment",
         description:
            "Complete access to all modules with comprehensive lessons and projects.",
         features: [
            "All course modules & lessons",
            "Lifetime access to content",
            "Hands-on projects",
            "Certificate of completion",
            "Priority email support",
            "Free content updates",
         ],
         ctaLabel: "Enroll Now",
         ctaHref: "/checkout/react-old?plan=pro",
         highlighted: true,
      },
      {
         name: "Team Studio",
         price: "₹19,999",
         cadence: "Per Team",
         description:
            "Perfect for teams learning together with shared progress tracking and dedicated support.",
         features: [
            "Everything in Pro Builder",
            "5-10 team seats",
            "Team dashboard & analytics",
            "Dedicated support channel",
            "Custom onboarding session",
            "Bulk discount available",
         ],
         ctaLabel: "Contact Sales",
         ctaHref: "/checkout/react-old?plan=team",
         highlighted: false,
      },
   ],
};
