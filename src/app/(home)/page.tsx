import { BlueprintSection } from "@/components/landing/BlueprintSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { ModernHeroSection } from "@/components/landing/ModernHeroSection";
import { SpotlightCoursesSection } from "@/components/landing/SpotlightCoursesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { courses } from "@/lib/courses";

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
