/**
 * SEO Configuration & Constants
 * Central configuration for all SEO-related metadata across the application
 */

export const SEO_CONFIG = {
   // Site Information
   siteName: "Learn To Code",
   siteUrl: "https://codetolearn.vercel.app",
   locale: "en_US",
   
   // Social Media
   twitter: {
      handle: "@learntocode", // Update with your actual Twitter handle
      creator: "@learntocode",
   },
   
   // Brand
   brandColor: "#3b82f6", // primary color from your theme
   
   // Default OG Image (using favicon as fallback)
   defaultOgImage: {
      url: "/favicon_images/android-chrome-512x512.png",
      width: 512,
      height: 512,
      alt: "Learn To Code Logo",
   },
} as const;

/**
 * Homepage SEO Keywords
 */
export const HOME_KEYWORDS = [
   // Primary
   "learn to code",
   "web development courses",
   "project based learning",
   
   // Technologies
   "HTML course",
   "CSS tutorial",
   "JavaScript course",
   "React tutorial",
   "Next.js course",
   "Tailwind CSS",
   
   // Learning Style
   "hands-on coding",
   "real-world projects",
   "full stack development",
   "frontend development",
   
   // Project Types
   "build web applications",
   "airbnb clone tutorial",
   "booking app tutorial",
   
   // Audience
   "beginner coding",
   "learn web development",
   "coding bootcamp alternative",
   "self-paced courses",
   
   // Results
   "portfolio projects",
   "production ready apps",
   "deploy web apps",
];

/**
 * Course-specific SEO Keywords
 */
export const COURSE_KEYWORDS = {
   html: [
      "HTML tutorial",
      "HTML5 course",
      "semantic HTML",
      "learn HTML",
      "HTML fundamentals",
      "HTML for beginners",
      "web markup language",
      "HTML structure",
      "HTML elements",
      "HTML tags",
   ],
   css: [
      "CSS course",
      "CSS tutorial",
      "learn CSS",
      "responsive design",
      "CSS Flexbox",
      "CSS Grid",
      "CSS animations",
      "modern CSS",
      "CSS styling",
      "CSS layouts",
   ],
   javascript: [
      "JavaScript tutorial",
      "learn JavaScript",
      "modern JavaScript",
      "ES6 JavaScript",
      "JavaScript course",
      "JavaScript fundamentals",
      "DOM manipulation",
      "async JavaScript",
      "JavaScript projects",
      "interactive websites",
   ],
   react: [
      "React tutorial",
      "learn React",
      "React course",
      "React hooks",
      "React components",
      "React project",
      "build React app",
      "React for beginners",
      "React state management",
      "React booking app",
      "airbnb clone react",
   ],
   nextjs: [
      "Next.js tutorial",
      "Next.js course",
      "learn Next.js",
      "Next.js 15",
      "full stack Next.js",
      "Next.js app router",
      "server components",
      "Next.js deployment",
      "Next.js project",
      "React framework",
   ],
} as const;

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(path: string): string {
   const cleanPath = path.startsWith('/') ? path : `/${path}`;
   return `${SEO_CONFIG.siteUrl}${cleanPath}`;
}

/**
 * Generate OG Image URL (fallback to default)
 */
export function getOgImageUrl(imagePath?: string): string {
   if (!imagePath) {
      return `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultOgImage.url}`;
   }
   
   const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
   return `${SEO_CONFIG.siteUrl}${cleanPath}`;
}
