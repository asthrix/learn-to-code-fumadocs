import { CourseDetailHeroSection } from "@/components/course-detail/CourseDetailHeroSection";
import { CourseDifferentiatorsSection } from "@/components/course-detail/CourseDifferentiatorsSection";
import { CourseModulesSection } from "@/components/course-detail/CourseModulesSection";
import { CoursePricingSection } from "@/components/course-detail/CoursePricingSection";
import { CourseTechnologySection } from "@/components/course-detail/CourseTechnologySection";
import { CourseTestimonialsSection } from "@/components/course-detail/CourseTestimonialsSection";
import { reactCourseDetail } from "@/lib/course-detail/react";

export default function ReactCoursePage() {
   const { hero, differentiators, technology, modules, testimonials, pricing } =
      reactCourseDetail;

   return (
      <main className='relative flex flex-1 flex-col bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-100'>
         <CourseDetailHeroSection hero={hero} />
         <CourseDifferentiatorsSection differentiators={differentiators} />
         <CourseTechnologySection technology={technology} />
         <CourseModulesSection
            modules={modules}
            courseSlug={reactCourseDetail.slug}
         />
         <CoursePricingSection pricing={pricing} />
         <CourseTestimonialsSection testimonials={testimonials} />
      </main>
   );
}
