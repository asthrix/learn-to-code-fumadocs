import type { CourseDetailContent } from "@/lib/course-detail/types";
import { CourseDetailHeroSection } from "@/components/course-detail/CourseDetailHeroSection";
import { CourseDifferentiatorsSection } from "@/components/course-detail/CourseDifferentiatorsSection";
import { CourseTechnologySection } from "@/components/course-detail/CourseTechnologySection";
import { CourseModulesSection } from "@/components/course-detail/CourseModulesSection";
import { CoursePricingSection } from "@/components/course-detail/CoursePricingSection";
import { CourseTestimonialsSection } from "@/components/course-detail/CourseTestimonialsSection";

// ============================================================================
// CourseDetailPage Component (Template Pattern - SOLID Principle)
// ============================================================================
// This component follows the Template Method Pattern where the structure
// is defined but the data can vary. This eliminates duplication across
// react/page.tsx, react-new/page.tsx, and react-old/page.tsx
//
// Benefits:
// 1. DRY: Single source of truth for course detail page structure
// 2. OCP: Open for extension (can add new sections), closed for modification
// 3. SRP: Each section component has a single responsibility
// 4. Easy maintenance: Changes to layout affect all course pages
// ============================================================================

interface CourseDetailPageProps {
   courseDetail: CourseDetailContent;
}

export function CourseDetailPage({ courseDetail }: CourseDetailPageProps) {
   const {
      hero,
      differentiators,
      technology,
      modules,
      testimonials,
      pricing,
      slug,
   } = courseDetail;

   return (
      <main className='relative flex flex-1 flex-col bg-background text-foreground transition-colors'>
         {/* Hero Section */}
         <CourseDetailHeroSection hero={hero} />

         {/* Differentiators Section */}
         <CourseDifferentiatorsSection differentiators={differentiators} />

         {/* Technology Stack Section */}
         <CourseTechnologySection technology={technology} />

         {/* Modules & Lessons Section */}
         <CourseModulesSection modules={modules} courseSlug={slug} />

         {/* Pricing Section */}
         <CoursePricingSection pricing={pricing} />

         {/* Testimonials Section */}
         <CourseTestimonialsSection testimonials={testimonials} />
      </main>
   );
}
