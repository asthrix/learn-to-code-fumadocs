import { isPrerequisitesEnabled } from "./config";

export interface Course {
   id: string;
   title: string;
   description: string;
   shortDescription: string;
   difficulty: "beginner" | "intermediate" | "advanced";
   duration: string;
   modules: number;
   prerequisites: string[];
   project: string;
   technologies: string[];
   icon: string;
   status: "available" | "coming-soon" | "in-development";
   featured: boolean;
   learningObjectives: string[];
   skillLevel: {
      before: string[];
      after: string[];
   };
}

export const courses: Course[] = [
   {
      id: "html",
      title: "HTML Fundamentals",
      description:
         "Master the building blocks of the web with modern HTML5. Learn semantic markup, accessibility, and best practices for creating well-structured web pages.",
      shortDescription:
         "Learn the foundation of web development with semantic HTML5",
      difficulty: "beginner",
      duration: "15 hours",
      modules: 6,
      prerequisites: [],
      project: "Personal Portfolio Website",
      technologies: ["HTML5", "Semantic Markup", "Accessibility", "SEO"],
      icon: "🌐",
      status: "coming-soon",
      featured: true,
      learningObjectives: [
         "Understand HTML document structure and semantics",
         "Create accessible and SEO-friendly markup",
         "Build responsive layouts with modern HTML5 elements",
         "Implement forms, media, and interactive elements",
      ],
      skillLevel: {
         before: ["Basic computer skills", "Text editor familiarity"],
         after: [
            "Semantic HTML5 mastery",
            "Accessibility best practices",
            "SEO fundamentals",
         ],
      },
   },
   {
      id: "css",
      title: "CSS Mastery",
      description:
         "Transform your HTML into beautiful, responsive designs. Master modern CSS including Flexbox, Grid, animations, and responsive design principles.",
      shortDescription: "Create stunning, responsive designs with modern CSS",
      difficulty: "beginner",
      duration: "25 hours",
      modules: 8,
      prerequisites: ["html"],
      project: "Responsive Business Website",
      technologies: [
         "CSS3",
         "Flexbox",
         "Grid",
         "Animations",
         "Responsive Design",
      ],
      icon: "🎨",
      status: "coming-soon",
      featured: true,
      learningObjectives: [
         "Master CSS selectors, properties, and values",
         "Build responsive layouts with Flexbox and Grid",
         "Create smooth animations and transitions",
         "Implement mobile-first responsive design",
      ],
      skillLevel: {
         before: ["HTML fundamentals", "Basic design principles"],
         after: [
            "Advanced CSS techniques",
            "Responsive design mastery",
            "Animation skills",
         ],
      },
   },
   {
      id: "javascript",
      title: "JavaScript Essentials",
      description:
         "Bring your websites to life with modern JavaScript. Learn ES6+, DOM manipulation, async programming, and modern development patterns.",
      shortDescription:
         "Master modern JavaScript and interactive web development",
      difficulty: "intermediate",
      duration: "35 hours",
      modules: 10,
      prerequisites: ["html", "css"],
      project: "Interactive Task Manager",
      technologies: ["ES6+", "DOM", "Async/Await", "APIs", "Modules"],
      icon: "⚡",
      status: "in-development",
      featured: true,
      learningObjectives: [
         "Master modern JavaScript syntax and features",
         "Manipulate the DOM and handle events",
         "Work with APIs and asynchronous programming",
         "Build interactive, dynamic web applications",
      ],
      skillLevel: {
         before: ["HTML/CSS proficiency", "Basic programming concepts"],
         after: ["JavaScript mastery", "API integration", "Modern JS patterns"],
      },
   },
   {
      id: "react-new",
      title: "React Launchpad",
      description:
         "Build the StaySense listing experience from the ground up. Learn React fundamentals, state patterns, and API integration through a guided four-module journey.",
      shortDescription:
         "Ship the StaySense MVP while learning React step by step",
      difficulty: "beginner",
      duration: "28 hours",
      modules: 4,
      prerequisites: ["javascript"],
      project: "StaySense Listing MVP",
      technologies: ["React 18", "Vite", "Tailwind CSS", "Axios"],
      icon: "🌱",
      status: "available",
      featured: true,
      learningObjectives: [
         "Bootstrap a modern React project with Vite and Tailwind",
         "Compose reusable components and layouts for listings",
         "Manage local state, filters, and user interactions",
         "Integrate Axios with a mock API and deliver a polished MVP",
      ],
      skillLevel: {
         before: [
            "JavaScript fundamentals",
            "Basic web development workflows",
            "Comfort with npm tooling",
         ],
         after: [
            "Confident React component authoring",
            "State and effect management basics",
            "API-driven UI implementation",
         ],
      },
   },
   {
      id: "react",
      title: "Project React",
      description:
         "Build modern, scalable web applications with React. Master components, hooks, state management, and production-ready development practices.",
      shortDescription: "Create powerful web applications with React",
      difficulty: "intermediate",
      duration: "40 hours",
      modules: 10,
      prerequisites: ["javascript"],
      project: "TaskFlow Pro - Task Management App",
      technologies: ["React 18", "Hooks", "Context", "Router", "Performance"],
      icon: "⚛️",
      status: "available",
      featured: true,
      learningObjectives: [
         "Master React components and JSX",
         "Implement state management with hooks",
         "Build production-ready applications",
         "Optimize performance and user experience",
      ],
      skillLevel: {
         before: [
            "JavaScript proficiency",
            "ES6+ knowledge",
            "Basic web development",
         ],
         after: [
            "React mastery",
            "Component architecture",
            "Modern development workflow",
         ],
      },
   },
   {
      id: "nextjs",
      title: "Next.js Full-Stack",
      description:
         "Build production-ready full-stack applications with Next.js. Learn server-side rendering, API routes, deployment, and advanced optimization techniques.",
      shortDescription: "Master full-stack development with Next.js",
      difficulty: "advanced",
      duration: "45 hours",
      modules: 12,
      prerequisites: ["react"],
      project: "Full-Stack E-commerce Platform",
      technologies: [
         "Next.js 14",
         "SSR/SSG",
         "API Routes",
         "Database",
         "Deployment",
      ],
      icon: "🚀",
      status: "coming-soon",
      featured: true,
      learningObjectives: [
         "Master Next.js framework and App Router",
         "Implement server-side rendering and static generation",
         "Build full-stack applications with API routes",
         "Deploy scalable applications to production",
      ],
      skillLevel: {
         before: [
            "React mastery",
            "JavaScript advanced concepts",
            "Web development experience",
         ],
         after: [
            "Full-stack development",
            "Production deployment",
            "Performance optimization",
         ],
      },
   },
];

export const getCourseById = (id: string): Course | undefined => {
   return courses.find((course) => course.id === id);
};

export const getFeaturedCourses = (): Course[] => {
   return courses.filter((course) => course.featured);
};

export const getAvailableCourses = (): Course[] => {
   return courses.filter((course) => course.status === "available");
};

export const getCoursesByDifficulty = (
   difficulty: Course["difficulty"]
): Course[] => {
   return courses.filter((course) => course.difficulty === difficulty);
};

export const getLearningPath = (): Course[] => {
   // Return courses in recommended learning order
   return courses.sort((a, b) => {
      const order = [
         "html",
         "css",
         "javascript",
         "react-new",
         "react",
         "nextjs",
      ];
      return order.indexOf(a.id) - order.indexOf(b.id);
   });
};

export const getCourseProgress = (courseId: string): number => {
   // TODO: Implement actual progress tracking
   // For now, return mock data
   const mockProgress: Record<string, number> = {
      html: 0,
      css: 0,
      javascript: 0,
      "react-new": 0,
      react: 25,
      nextjs: 0,
   };
   return mockProgress[courseId] || 0;
};

export const getPrerequisiteStatus = (
   courseId: string
): { met: boolean; missing: string[] } => {
   // Check if prerequisites checking is enabled
   if (!isPrerequisitesEnabled()) {
      return { met: true, missing: [] };
   }

   const course = getCourseById(courseId);
   if (!course) return { met: true, missing: [] };

   // TODO: Implement actual completion tracking
   // For now, assume HTML and CSS are complete for demo
   const completedCourses = ["html", "css"];
   const missing = course.prerequisites.filter(
      (prereq) => !completedCourses.includes(prereq)
   );

   return {
      met: missing.length === 0,
      missing,
   };
};
