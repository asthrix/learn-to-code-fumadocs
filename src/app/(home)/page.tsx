import { BlueprintSection } from "@/components/landing/BlueprintSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { ModernHeroSection } from "@/components/landing/ModernHeroSection";
import { SpotlightCoursesSection } from "@/components/landing/SpotlightCoursesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { courses } from "@/lib/courses";
import { SEO_CONFIG, HOME_KEYWORDS, getCanonicalUrl, getOgImageUrl } from "@/lib/seo-config";
import type { Metadata } from "next";

// Enhanced Homepage Metadata for SEO
export const metadata: Metadata = {
   title: "Code To Learn | Build Real Projects - HTML, CSS, React, Next.js",
   description: "Project-based coding courses for HTML, CSS, JavaScript, React & Next.js. Build production apps like Airbnb clones. 30+ hours, 90+ lessons, 5K+ learners. Start free today!",
   keywords: HOME_KEYWORDS,
   
   openGraph: {
      type: "website",
      locale: SEO_CONFIG.locale,
      url: getCanonicalUrl("/"),
      siteName: SEO_CONFIG.siteName,
      title: "Code To Learn | Build Real Projects - HTML, CSS, React, Next.js",
      description: "Master web development through hands-on projects. Build a booking app like Airbnb while learning React, Next.js, and modern web technologies.",
      images: [
         {
            url: getOgImageUrl(),
            width: SEO_CONFIG.defaultOgImage.width,
            height: SEO_CONFIG.defaultOgImage.height,
            alt: SEO_CONFIG.defaultOgImage.alt,
         },
      ],
   },
   
   twitter: {
      card: "summary_large_image",
      title: "Code To Learn | Build Real Projects",
      description: "Project-based web development courses. Build real apps, deploy to production, and grow your portfolio.",
      creator: SEO_CONFIG.twitter.creator,
      site: SEO_CONFIG.twitter.handle,
      images: [getOgImageUrl()],
   },
   
   alternates: {
      canonical: getCanonicalUrl("/"),
   },
};

export default function HomePage() {
   const spotlightCourses = courses
      .filter((course) => course.featured)
      .slice(0, 5);

   return (
      <main className='relative flex flex-1 flex-col bg-background text-foreground transition-colors'>
         <ModernHeroSection />
         <SpotlightCoursesSection spotlightCourses={spotlightCourses} />
         <BlueprintSection />
         <PricingSection />
         <FinalCtaSection />
      </main>
   );
}
