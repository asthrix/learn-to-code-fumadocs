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
         "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold";

      switch (course.status) {
         case "available":
            return (
               <span
                  className={`${baseClasses} border-emerald-200/80 bg-emerald-100/70 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/20 dark:text-emerald-200`}
               >
                  Available
               </span>
            );
         case "coming-soon":
            return (
               <span
                  className={`${baseClasses} border-amber-200/80 bg-amber-100/70 text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/20 dark:text-amber-200`}
               >
                  Coming Soon
               </span>
            );
         case "in-development":
            return (
               <span
                  className={`${baseClasses} border-sky-200/80 bg-sky-100/70 text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/20 dark:text-sky-200`}
               >
                  In Development
               </span>
            );
      }
   };

   const getDifficultyClasses = () => {
      switch (course.difficulty) {
         case "beginner":
            return "border-emerald-200/60 bg-emerald-50/80 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-500/20 dark:text-emerald-200";
         case "intermediate":
            return "border-amber-200/60 bg-amber-50/80 text-amber-600 dark:border-amber-400/30 dark:bg-amber-500/20 dark:text-amber-200";
         case "advanced":
            return "border-rose-200/60 bg-rose-50/80 text-rose-600 dark:border-rose-400/30 dark:bg-rose-500/20 dark:text-rose-200";
      }
   };

   const isAccessible =
      course.status === "available" &&
      (!shouldCheckPrerequisites || prerequisiteStatus.met);

   return (
      <div className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-900/10 bg-white/90 p-6 shadow-[0_20px_40px_-25px_rgba(14,165,233,0.3)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-20px_rgba(14,165,233,0.45)] dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/70 dark:via-slate-900/40 dark:to-slate-800/30 dark:shadow-[0_20px_40px_-20px_rgba(14,165,233,0.45)] dark:backdrop-blur-xl'>
         <div className='flex items-start justify-between gap-4'>
            <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl shadow-inner shadow-slate-900/10 transition group-hover:scale-105 dark:bg-white/10 dark:shadow-white/20'>
               {course.icon}
            </span>
            {getStatusBadge()}
         </div>

         <div className='mt-6 flex flex-col gap-4'>
            <div>
               <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {course.title}
               </h3>
               <p className='mt-1 text-sm text-slate-500 dark:text-slate-300'>
                  {course.duration} • {course.modules} modules
               </p>
            </div>

            <p className='text-sm text-slate-600 dark:text-slate-300'>
               {course.shortDescription}
            </p>

            <div className='flex flex-wrap items-center gap-2'>
               <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest ${getDifficultyClasses()}`}
               >
                  {course.difficulty}
               </span>
               {shouldCheckPrerequisites && course.prerequisites.length > 0 && (
                  <span className='text-xs text-slate-500 dark:text-slate-400'>
                     Requires: {course.prerequisites.join(", ")}
                  </span>
               )}
            </div>

            {showProgress && progress > 0 && (
               <div>
                  <div className='flex items-center justify-between text-xs text-slate-500 dark:text-slate-400'>
                     <span>Progress</span>
                     <span>{progress}%</span>
                  </div>
                  <div className='mt-2 h-2 w-full rounded-full bg-slate-200/70 dark:bg-slate-800/70'>
                     <div
                        className='h-full rounded-full bg-sky-500 transition-all duration-300 dark:bg-sky-400'
                        style={{ width: `${progress}%` }}
                     />
                  </div>
               </div>
            )}

            <div className='flex flex-wrap gap-2'>
               {course.technologies.slice(0, 3).map((tech) => (
                  <span
                     key={tech}
                     className='inline-flex items-center rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200'
                  >
                     {tech}
                  </span>
               ))}
               {course.technologies.length > 3 && (
                  <span className='inline-flex items-center rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'>
                     +{course.technologies.length - 3} more
                  </span>
               )}
            </div>

            {shouldCheckPrerequisites && !prerequisiteStatus.met && (
               <div className='rounded-2xl border border-amber-200/60 bg-amber-50/80 p-3 text-xs text-amber-700 dark:border-amber-400/20 dark:bg-amber-500/15 dark:text-amber-200'>
                  <span className='font-semibold'>Prerequisites:</span> Complete{" "}
                  {prerequisiteStatus.missing.join(", ")} first.
               </div>
            )}

            <div className='flex flex-col gap-3 pt-2'>
               {isAccessible ? (
                  <Link
                     href={`/docs/${course.id}`}
                     className='inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-1 hover:bg-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-950 dark:focus-visible:ring-offset-slate-950'
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
                     className='inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-400'
                  >
                     {course.status === "available"
                        ? shouldCheckPrerequisites
                           ? "Complete prerequisites"
                           : "Course locked"
                        : "Coming soon"}
                  </button>
               )}

               <div className='flex items-center justify-between rounded-2xl border border-slate-900/10 bg-slate-100/70 px-3 py-2 text-xs text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300'>
                  <span>🎯 {course.project}</span>
                  <span>📚 {course.modules} modules</span>
               </div>
            </div>
         </div>
      </div>
   );
}
