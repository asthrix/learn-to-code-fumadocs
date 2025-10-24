import { BlueprintSection } from "@/components/landing/BlueprintSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { ModernHeroSection } from "@/components/landing/ModernHeroSection";
import { SpotlightCoursesSection } from "@/components/landing/SpotlightCoursesSection";
import { courses } from "@/lib/courses";

export default function HomePage() {
   const spotlightCourses = courses
      .filter((course) => course.featured)
      .slice(0, 4);

   return (
      <main className='relative flex flex-1 flex-col bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-100'>
         <ModernHeroSection />
         <SpotlightCoursesSection spotlightCourses={spotlightCourses} />
         <BlueprintSection />
         <FinalCtaSection />
      </main>
   );
}
