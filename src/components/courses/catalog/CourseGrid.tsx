import type { Course } from "@/lib/courses";

import { CourseCard } from "./CourseCard";

interface CourseGridProps {
   courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
   if (courses.length === 0) {
      return (
         <div className='rounded-3xl border border-dashed border-border/60 bg-card/40 p-10 text-center text-sm text-muted-foreground'>
            No courses match your filters yet. Try a different level or search term.
         </div>
      );
   }

   return (
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
         {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
         ))}
      </div>
   );
}
