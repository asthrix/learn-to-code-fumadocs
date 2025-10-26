import { ClipboardList, Compass, Sparkles } from "lucide-react";

import type { CourseDetailContent } from "./types";

export const newReactCourseDetail: CourseDetailContent = {
   slug: "react-new",
   hero: {
      eyebrow: "React · StaySense Launchpad",
      title: "React Launchpad",
      highlight: "Build StaySense from zero to API-backed MVP",
      description:
         "Learn React by shipping the StaySense listing experience. Across four beginner-friendly modules you will scaffold a Vite project, compose reusable UI, add interactive filters, and integrate the Project React mock API—without backend overhead.",
      primaryCta: {
         label: "Start the Launchpad track",
         href: "/docs/react-new",
      },
      secondaryCta: {
         label: "View module roadmap",
         href: "/docs/react-new/m1/0_index",
      },
      metrics: [
         { label: "Total modules", value: "4" },
         { label: "Hours of content", value: "28" },
         { label: "Milestone tasks", value: "4" },
         { label: "Guided solutions", value: "20+" },
      ],
   },
   differentiators: [
      {
         title: "Project-first learning",
         description:
            "Follow a structured path that mirrors the Project React architecture while staying scoped for beginners. Every lesson advances the StaySense MVP.",
         icon: Compass,
      },
      {
         title: "Hands-on tasks with answers",
         description:
            "Each module ends with a shipping checklist and accordion solution so you can compare your work without losing momentum.",
         icon: ClipboardList,
      },
      {
         title: "Beginner-paced workflow",
         description:
            "Short lessons, reusable snippets, and friendly validation checklists help you master React fundamentals with confidence.",
         icon: Sparkles,
      },
   ],
   technology: [
      {
         title: "Core Stack",
         items: ["React 18", "TypeScript", "Vite", "Tailwind CSS"],
      },
      {
         title: "Data & API",
         items: ["Axios", "Axios Mock Adapter", "Zod", "date-fns"],
      },
      {
         title: "Tooling & Docs",
         items: ["Fumadocs", "ESLint", "Prettier", "Lucide Icons"],
      },
   ],
   modules: [
      {
         title: "M1 · React Foundations",
         description:
            "Bootstrap StaySense with Vite, craft the hero section, and compose listing cards that set the tone for the rest of the project.",
         lessons: [
            { title: "Module Overview", duration: "15 min", id: "m1/0_index" },
            {
               title: "Why React for StaySense",
               duration: "20 min",
               id: "m1/1_welcome",
            },
            {
               title: "Environment Setup with Vite",
               duration: "30 min",
               id: "m1/2_environment-setup",
            },
            {
               title: "JSX & Your First Components",
               duration: "35 min",
               id: "m1/3_jsx-and-components",
            },
            {
               title: "Props & Composition",
               duration: "35 min",
               id: "m1/4_props-and-composition",
            },
            {
               title: "Module Task · Landing Page Milestone",
               duration: "40 min",
               id: "m1/5_module-task",
            },
         ],
      },
      {
         title: "M2 · State & Interaction",
         description:
            "Introduce `useState`, event handlers, and controlled inputs to power filters, saved stays, and derived UI states.",
         lessons: [
            { title: "Module Overview", duration: "15 min", id: "m2/0_index" },
            {
               title: "State Basics with useState",
               duration: "30 min",
               id: "m2/1_state-basics",
            },
            {
               title: "Event Handling Patterns",
               duration: "30 min",
               id: "m2/2_event-handling",
            },
            {
               title: "Lists & Conditional Rendering",
               duration: "30 min",
               id: "m2/3_lists-and-conditions",
            },
            {
               title: "Controlled Forms & Derived Filters",
               duration: "35 min",
               id: "m2/4_controlled-forms",
            },
            {
               title: "Module Task · Interactive Filters",
               duration: "45 min",
               id: "m2/5_module-task",
            },
         ],
      },
      {
         title: "M3 · Data & Effects",
         description:
            "Fetch listings from the mock API, show resilient loading states, and share data through context-based providers.",
         lessons: [
            { title: "Module Overview", duration: "15 min", id: "m3/0_index" },
            {
               title: "Effect Basics & Data Lifecycles",
               duration: "30 min",
               id: "m3/1_effect-basics",
            },
            {
               title: "Fetching Listings from the Mock API",
               duration: "40 min",
               id: "m3/2_mock-api-fetching",
            },
            {
               title: "Loading & Error States",
               duration: "35 min",
               id: "m3/3_loading-and-errors",
            },
            {
               title: "Sharing Data with Context",
               duration: "35 min",
               id: "m3/4_shared-context",
            },
            {
               title: "Module Task · API-Driven Listings",
               duration: "45 min",
               id: "m3/5_module-task",
            },
         ],
      },
      {
         title: "M4 · Project Assembly",
         description:
            "Add routing, polish accessibility, gather launch artifacts, and ship the StaySense MVP with a guided retrospective.",
         lessons: [
            { title: "Module Overview", duration: "15 min", id: "m4/0_index" },
            {
               title: "Project Brief & Requirements",
               duration: "25 min",
               id: "m4/1_project-brief",
            },
            {
               title: "Routing & Detail Page",
               duration: "45 min",
               id: "m4/2_detail-page",
            },
            {
               title: "Polish & Accessibility",
               duration: "35 min",
               id: "m4/3_polish-and-accessibility",
            },
            {
               title: "Launch Checklist & Artifacts",
               duration: "30 min",
               id: "m4/4_launch-checklist",
            },
            {
               title: "Capstone Task · StaySense MVP",
               duration: "60 min",
               id: "m4/5_module-task",
            },
         ],
      },
   ],
   testimonials: [
      {
         name: "Maya Fernandes",
         role: "Product Designer turned Engineer",
         company: "Freelance",
         quote: "Launchpad let me build a real portfolio project without drowning in jargon. The guided solutions meant I never felt stuck for long.",
      },
      {
         name: "Leo Carter",
         role: "Junior Frontend Developer",
         company: "Orbit Labs",
         quote: "The mock API integration was a lightbulb moment. I finally understood how React apps talk to services before jumping into the larger Project React track.",
      },
      {
         name: "Seema Kulkarni",
         role: "Coding Bootcamp Graduate",
         company: "Pathfinder Apps",
         quote: "Short lessons plus tangible tasks made it easy to balance learning with my day job. The launch checklist is now my go-to template for side projects.",
      },
   ],
   pricing: [
      {
         name: "Starter",
         price: "₹4,999",
         cadence: "one-time",
         description:
            "Perfect for solo learners who want a guided React kick-off with worksheets and solution accordions.",
         features: [
            "Lifetime access to Launchpad curriculum",
            "StaySense starter repository",
            "Module task solutions and checklists",
         ],
         highlighted: true,
         ctaLabel: "Enroll in Launchpad",
         ctaHref: "/checkout/react-new/starter",
      },
      {
         name: "Mentor Boost",
         price: "₹8,999",
         cadence: "one-time",
         description:
            "Pair Launchpad with two async mentor reviews to get feedback on your StaySense implementation.",
         features: [
            "Everything in Starter",
            "Two async mentor code reviews",
            "Personalized roadmap into Project React",
         ],
         ctaLabel: "Upgrade with mentorship",
         ctaHref: "/checkout/react-new/mentor",
      },
      {
         name: "Team Starter Pod",
         price: "₹24,999",
         cadence: "per team",
         description:
            "Train a pod of up to 5 engineers on React fundamentals with shared progress tracking and retrospective templates.",
         features: [
            "Team license for 5 seats",
            "Kick-off workshop deck",
            "Progress dashboard template",
            "Private Q&A session",
         ],
         ctaLabel: "Talk to us",
         ctaHref: "mailto:hello@learnfrontend.dev",
      },
   ],
};
