import Link from "next/link";

import {
   Course,
   getCourseProgress,
   getPrerequisiteStatus,
} from "@/lib/courses";
import { isPrerequisitesEnabled } from "@/lib/config";

interface CourseCardProps {
   course: Course;
   showProgress?: boolean;
}

export function CourseCard({ course, showProgress = true }: CourseCardProps) {
   const progress = getCourseProgress(course.id);
   const prerequisiteStatus = getPrerequisiteStatus(course.id);
   const shouldCheckPrerequisites = isPrerequisitesEnabled();

   const getStatusBadge = () => {
      const baseClasses =
         "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest";

      switch (course.status) {
         case "available":
            return (
               <span
                  className={`${baseClasses} border-primary/40 bg-primary/15 text-primary`}
               >
                  Available
               </span>
            );
         case "coming-soon":
            return (
               <span
                  className={`${baseClasses} border-secondary/40 bg-secondary/20 text-secondary-foreground`}
               >
                  Coming Soon
               </span>
            );
         case "in-development":
            return (
               <span
                  className={`${baseClasses} border-accent/40 bg-accent/20 text-accent-foreground`}
               >
                  In Development
               </span>
            );
      }
   };

   const getDifficultyClasses = () => {
      switch (course.difficulty) {
         case "beginner":
            return "border-primary/40 bg-primary/15 text-primary";
         case "intermediate":
            return "border-secondary/40 bg-secondary/15 text-secondary-foreground";
         case "advanced":
            return "border-accent/40 bg-accent/15 text-accent-foreground";
      }
   };

   const isAccessible =
      course.status === "available" &&
      (!shouldCheckPrerequisites || prerequisiteStatus.met);

   return (
      <div className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/95 p-6 shadow-[0_20px_40px_-25px_hsl(var(--color-primary)/0.25)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-20px_hsl(var(--color-primary)/0.4)]'>
         <div className='flex items-start justify-between gap-4'>
            <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/25 text-2xl shadow-[inset_0_1px_2px_hsl(var(--color-primary)/0.15)] transition group-hover:scale-105'>
               {course.icon}
            </span>
            {getStatusBadge()}
         </div>

         <div className='mt-6 flex flex-col gap-4'>
            <div>
               <h3 className='text-lg font-semibold text-foreground'>
                  {course.title}
               </h3>
               <p className='mt-1 text-sm text-muted-foreground'>
                  {course.duration} • {course.modules} modules
               </p>
            </div>

            <p className='text-sm text-muted-foreground'>
               {course.shortDescription}
            </p>

            <div className='flex flex-wrap items-center gap-2'>
               <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest ${getDifficultyClasses()}`}
               >
                  {course.difficulty}
               </span>
               {shouldCheckPrerequisites && course.prerequisites.length > 0 && (
                  <span className='text-xs text-muted-foreground'>
                     Requires: {course.prerequisites.join(", ")}
                  </span>
               )}
            </div>

            {showProgress && progress > 0 && (
               <div>
                  <div className='flex items-center justify-between text-xs text-muted-foreground'>
                     <span>Progress</span>
                     <span>{progress}%</span>
                  </div>
                  <div className='mt-2 h-2 w-full rounded-full bg-muted/60'>
                     <div
                        className='h-full rounded-full bg-primary transition-all duration-300'
                        style={{ width: `${progress}%` }}
                     />
                  </div>
               </div>
            )}

            <div className='flex flex-wrap gap-2'>
               {course.technologies.slice(0, 3).map((tech) => (
                  <span
                     key={tech}
                     className='inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground'
                  >
                     {tech}
                  </span>
               ))}
               {course.technologies.length > 3 && (
                  <span className='inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground'>
                     +{course.technologies.length - 3} more
                  </span>
               )}
            </div>

            {shouldCheckPrerequisites && !prerequisiteStatus.met && (
               <div className='rounded-2xl border border-destructive/40 bg-destructive/15 p-3 text-xs text-destructive'>
                  <span className='font-semibold'>Prerequisites:</span> Complete{" "}
                  {prerequisiteStatus.missing.join(", ")} first.
               </div>
            )}

            <div className='flex flex-col gap-3 pt-2'>
               {isAccessible ? (
                  <Link
                     href={`/docs/${course.id}`}
                     className='inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_15px_35px_-15px_hsl(var(--color-primary)/0.6)] transition hover:-translate-y-1 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                  >
                     {progress > 0 ? "Continue learning" : "Start course"}
                     <svg
                        className='ml-2 h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                     </svg>
                  </Link>
               ) : (
                  <button
                     disabled
                     className='inline-flex items-center justify-center rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-semibold text-muted-foreground'
                  >
                     {course.status === "available"
                        ? shouldCheckPrerequisites
                           ? "Complete prerequisites"
                           : "Course locked"
                        : "Coming soon"}
                  </button>
               )}

               <div className='flex items-center justify-between rounded-2xl border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground'>
                  <span>🎯 {course.project}</span>
                  <span>📚 {course.modules} modules</span>
               </div>
            </div>
         </div>
      </div>
   );
}
