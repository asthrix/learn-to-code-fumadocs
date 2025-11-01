import { CourseCatalog } from "@/components/courses/catalog/CourseCatalog";
import { courseFaqs } from "@/lib/course-page-content";
import { courses, getLearningPath } from "@/lib/courses";
import { buildCourseStats } from "@/lib/course-utils";

export default function CoursesPage() {
   const learningPath = getLearningPath();
   const stats = buildCourseStats(courses);

   return (
      <main className='relative flex flex-1 flex-col bg-background text-foreground transition-colors'>
         <CourseCatalog
            courses={courses}
            stats={stats}
            learningPath={learningPath}
            faqs={courseFaqs}
         />
      </main>
   );
}
