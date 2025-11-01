import { Bot, GaugeCircle, Layers } from "lucide-react";

import type { CourseDetailContent } from "./types";

export const reactCourseDetail: CourseDetailContent = {
   slug: "react",
   hero: {
      eyebrow: "React · Modern Course",
      title: "Project React",
      highlight: "Master React from Fundamentals to Deployment",
      description:
         "Build a complete booking application while learning React fundamentals, state management, routing, forms, authentication, and deployment to production.",
      primaryCta: {
         label: "Start Learning React",
         href: "/docs/react",
      },
      secondaryCta: {
         label: "View course overview",
         href: "/docs/react/m0",
      },
      metrics: [
         { label: "Total modules", value: "9" },
         { label: "Total lessons", value: "90+" },
         { label: "Hours of content", value: "30+" },
         { label: "Hands-on projects", value: "1" },
      ],
   },
   differentiators: [
      {
         title: "Project-based learning",
         description:
            "Build a complete booking application (Airbnb/Booking.com clone) from scratch, learning React concepts through real-world implementation.",
         icon: Layers,
      },
      {
         title: "Modern React patterns",
         description:
            "Learn React 18+ features, hooks, modern state management with Redux Toolkit and Zustand, and production-ready best practices.",
         icon: GaugeCircle,
      },
      {
         title: "Complete workflow",
         description:
            "From setup to deployment - learn the entire development lifecycle including authentication, forms, routing, and Vercel deployment.",
         icon: Bot,
      },
   ],
   technology: [
      {
         title: "Core Stack",
         items: ["React 18", "Vite", "React Router v6", "JavaScript/JSX"],
      },
      {
         title: "State Management",
         items: ["Redux Toolkit", "Zustand", "Context API", "React Hook Form"],
      },
      {
         title: "Styling & UI",
         items: ["Tailwind CSS", "CSS Modules", "Responsive Design"],
      },
      {
         title: "Production",
         items: ["Vercel", "Environment Variables", "Production Builds", "Deployment"],
      },
   ],
   modules: [
      {
         title: "M0 · Introduction",
         description:
            "Get oriented with the course platform, understand the project structure, and set up your development environment.",
         lessons: [
            {
               title: "Module Overview",
               duration: "15 min",
               id: "m0",
            },
            {
               title: "Welcome to the Course",
               duration: "10 min",
               id: "m0/lesson-1",
            },
            {
               title: "Navigate the Platform",
               duration: "10 min",
               id: "m0/lesson-2",
            },
            {
               title: "Understanding Code Examples",
               duration: "10 min",
               id: "m0/lesson-3",
            },
            {
               title: "Development Environment Setup",
               duration: "15 min",
               id: "m0/lesson-4",
            },
            {
               title: "Project Overview",
               duration: "15 min",
               id: "m0/lesson-5",
            },
         ],
      },
      {
         title: "M1 · React Fundamentals",
         description:
            "Master the building blocks of React: JSX syntax, components, props, and composition patterns.",
         lessons: [
            {
               title: "Module Overview",
               duration: "20 min",
               id: "m1",
            },
            {
               title: "Create HomePage Component",
               duration: "20 min",
               id: "m1/lesson-1",
            },
            {
               title: "Add HomePage to App",
               duration: "15 min",
               id: "m1/lesson-2",
            },
            {
               title: "Create ListingList Component",
               duration: "20 min",
               id: "m1/lesson-3",
            },
            {
               title: "Create ListingCard Component",
               duration: "25 min",
               id: "m1/lesson-4",
            },
            {
               title: "Add ListingList to HomePage",
               duration: "15 min",
               id: "m1/lesson-5",
            },
            {
               title: "Add ListingCard to ListingList",
               duration: "20 min",
               id: "m1/lesson-6",
            },
            {
               title: "Understanding Props and Composition",
               duration: "25 min",
               id: "m1/lesson-7",
            },
         ],
      },
      {
         title: "M2 · State & Events",
         description:
            "Make your application interactive with React state management and event handling.",
         lessons: [
            {
               title: "Module Overview",
               duration: "20 min",
               id: "m2",
            },
            {
               title: "Turn Listings into State",
               duration: "20 min",
               id: "m2/lesson-1",
            },
            {
               title: "Create ListingFilters Component",
               duration: "25 min",
               id: "m2/lesson-2",
            },
            {
               title: "Add State for Dates and Guests",
               duration: "20 min",
               id: "m2/lesson-3",
            },
            {
               title: "Pass Filter Values to HomePage",
               duration: "20 min",
               id: "m2/lesson-4",
            },
            {
               title: "Add Search State",
               duration: "20 min",
               id: "m2/lesson-5",
            },
            {
               title: "Filter Listings by Search",
               duration: "25 min",
               id: "m2/lesson-6",
            },
            {
               title: "Filter by Dates and Guests",
               duration: "25 min",
               id: "m2/lesson-7",
            },
         ],
      },
      {
         title: "M3 · Effects & Data",
         description:
            "Learn side effects with useEffect and fetch data from APIs with proper loading and error handling.",
         lessons: [
            {
               title: "Module Overview",
               duration: "25 min",
               id: "m3",
            },
            {
               title: "Prepare HomePage for Data Fetching",
               duration: "20 min",
               id: "m3/lesson-1",
            },
            {
               title: "Fetch Listings in HomePage",
               duration: "25 min",
               id: "m3/lesson-2",
            },
            {
               title: "Add Loading State",
               duration: "20 min",
               id: "m3/lesson-3",
            },
            {
               title: "Show Spinner When Loading",
               duration: "20 min",
               id: "m3/lesson-4",
            },
            {
               title: "Add Error Handling",
               duration: "25 min",
               id: "m3/lesson-5",
            },
            {
               title: "Show Error Message",
               duration: "20 min",
               id: "m3/lesson-6",
            },
            {
               title: "Prevent Race Conditions",
               duration: "30 min",
               id: "m3/lesson-7",
            },
            {
               title: "Refactor Render Logic",
               duration: "25 min",
               id: "m3/lesson-8",
            },
            {
               title: "Create Image Carousel",
               duration: "30 min",
               id: "m3/lesson-9",
            },
            {
               title: "Understanding useEffect Dependencies",
               duration: "25 min",
               id: "m3/lesson-10",
            },
         ],
      },
      {
         title: "M4 · Routes & Navigation",
         description:
            "Build a multi-page application with React Router, including nested routes and URL parameters.",
         lessons: [
            {
               title: "Module Overview",
               duration: "25 min",
               id: "m4",
            },
            {
               title: "Install React Router",
               duration: "15 min",
               id: "m4/lesson-1",
            },
            {
               title: "Create Router Component",
               duration: "20 min",
               id: "m4/lesson-2",
            },
            {
               title: "Add Router to App",
               duration: "15 min",
               id: "m4/lesson-3",
            },
            {
               title: "Set Up HomePage Route",
               duration: "15 min",
               id: "m4/lesson-4",
            },
            {
               title: "Create ListingDetailsPage",
               duration: "25 min",
               id: "m4/lesson-5",
            },
            {
               title: "Add Route with Parameter",
               duration: "20 min",
               id: "m4/lesson-6",
            },
            {
               title: "Get Listing ID from URL",
               duration: "20 min",
               id: "m4/lesson-7",
            },
            {
               title: "Fetch Listing Data",
               duration: "25 min",
               id: "m4/lesson-8",
            },
            {
               title: "Create ListingDetailsCard",
               duration: "30 min",
               id: "m4/lesson-9",
            },
            {
               title: "Add Card to Details Page",
               duration: "20 min",
               id: "m4/lesson-10",
            },
            {
               title: "Link Cards to Details Page",
               duration: "20 min",
               id: "m4/lesson-11",
            },
            {
               title: "Create NotFoundPage",
               duration: "20 min",
               id: "m4/lesson-12",
            },
            {
               title: "Add 404 Route",
               duration: "15 min",
               id: "m4/lesson-13",
            },
         ],
      },
      {
         title: "M5 · Hooks & Performance",
         description:
            "Optimize your React application with custom hooks, useMemo, useCallback, and React.memo.",
         lessons: [
            {
               title: "Module Overview",
               duration: "25 min",
               id: "m5",
            },
            {
               title: "Create useFetch Custom Hook",
               duration: "30 min",
               id: "m5/lesson-1",
            },
            {
               title: "Use useFetch in HomePage",
               duration: "25 min",
               id: "m5/lesson-2",
            },
            {
               title: "Use useFetch in Details Page",
               duration: "20 min",
               id: "m5/lesson-3",
            },
            {
               title: "Understanding useMemo",
               duration: "25 min",
               id: "m5/lesson-4",
            },
            {
               title: "Memoize Filtered Listings",
               duration: "25 min",
               id: "m5/lesson-5",
            },
            {
               title: "Understanding useCallback",
               duration: "25 min",
               id: "m5/lesson-6",
            },
            {
               title: "Optimize Event Handlers",
               duration: "25 min",
               id: "m5/lesson-7",
            },
            {
               title: "Understanding React.memo",
               duration: "25 min",
               id: "m5/lesson-8",
            },
            {
               title: "Memoize ListingCard Component",
               duration: "25 min",
               id: "m5/lesson-9",
            },
            {
               title: "Performance Best Practices",
               duration: "30 min",
               id: "m5/lesson-10",
            },
         ],
      },
      {
         title: "M6 · State Management",
         description:
            "Scale your application with global state management using Redux Toolkit and Zustand.",
         lessons: [
            {
               title: "Module Overview",
               duration: "30 min",
               id: "m6",
            },
            {
               title: "Redux Toolkit Path (15 Lessons)",
               duration: "300 min",
               id: "m6/redux",
            },
            {
               title: "Zustand Path (13 Lessons)",
               duration: "240 min",
               id: "m6/zustand",
            },
         ],
      },
      {
         title: "M7 · Forms & Authentication",
         description:
            "Build robust forms with React Hook Form and implement complete JWT authentication with protected routes.",
         lessons: [
            {
               title: "Module Overview",
               duration: "30 min",
               id: "m7",
            },
            {
               title: "Create AuthProvider Component",
               duration: "25 min",
               id: "m7/lesson-1",
            },
            {
               title: "Add AuthProvider to App",
               duration: "20 min",
               id: "m7/lesson-2",
            },
            {
               title: "Fetch Access Token on Mount",
               duration: "25 min",
               id: "m7/lesson-3",
            },
            {
               title: "Hide Navbar When Not Signed In",
               duration: "20 min",
               id: "m7/lesson-4",
            },
            {
               title: "Create SignInPage Component",
               duration: "25 min",
               id: "m7/lesson-5",
            },
            {
               title: "Add SignInPage to Router",
               duration: "20 min",
               id: "m7/lesson-6",
            },
            {
               title: "Create SignInForm with React Hook Form",
               duration: "30 min",
               id: "m7/lesson-7",
            },
            {
               title: "Add SignInForm to SignInPage",
               duration: "25 min",
               id: "m7/lesson-8",
            },
            {
               title: "Handle Form Submission",
               duration: "30 min",
               id: "m7/lesson-9",
            },
            {
               title: "Test Authentication Flow",
               duration: "25 min",
               id: "m7/lesson-10",
            },
            {
               title: "Add Token to Requests (Interceptors)",
               duration: "30 min",
               id: "m7/lesson-11",
            },
            {
               title: "Refresh Token When Expired",
               duration: "30 min",
               id: "m7/lesson-12",
            },
            {
               title: "Create Route Guard Component",
               duration: "25 min",
               id: "m7/lesson-13",
            },
            {
               title: "Update Routes with Protection",
               duration: "25 min",
               id: "m7/lesson-14",
            },
            {
               title: "Redirect When Signed In",
               duration: "25 min",
               id: "m7/lesson-15",
            },
            {
               title: "Add Sign-Out Button",
               duration: "25 min",
               id: "m7/lesson-16",
            },
         ],
      },
      {
         title: "M8 · Deployment",
         description:
            "Deploy your completed React application to production using Vercel and celebrate your achievement!",
         lessons: [
            {
               title: "Module Overview",
               duration: "15 min",
               id: "m8",
            },
            {
               title: "Install Vercel CLI",
               duration: "20 min",
               id: "m8/lesson-1",
            },
            {
               title: "Deploy to Production",
               duration: "30 min",
               id: "m8/lesson-2",
            },
         ],
      },
   ],
   testimonials: [
      {
         name: "Priya Sharma",
         role: "Frontend Developer",
         company: "Tech Startup",
         quote: "This course taught me React the right way. Building a complete project from scratch helped me understand concepts deeply rather than just memorizing syntax.",
      },
      {
         name: "Rahul Kumar",
         role: "Full Stack Developer",
         company: "Digital Agency",
         quote: "The authentication module alone was worth the entire course. I implemented the same patterns in my production app and it works flawlessly.",
      },
      {
         name: "Anjali Patel",
         role: "Software Engineer",
         company: "Product Company",
         quote: "Finally, a React course that covers deployment! I now have a live project in my portfolio that I built from scratch. Highly recommended!",
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
         ctaHref: "/docs/react",
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
         ],
         ctaLabel: "Enroll Now",
         ctaHref: "/checkout/react?plan=pro",
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
            "Custom onboarding session",
            "Bulk discount available",
         ],
         ctaLabel: "Contact Sales",
         ctaHref: "/checkout/react?plan=team",
         highlighted: false,
      },
   ],
};
