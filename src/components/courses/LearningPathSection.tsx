import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CourseCard } from "@/components/courses/CourseCard";
import type { Course } from "@/lib/courses";

interface LearningPathSectionProps {
   learningPath: Course[];
}

export function LearningPathSection({
   learningPath,
}: LearningPathSectionProps) {
   return (
      <section
         id='learning-path'
         className='relative z-[1] -mt-14 px-6 pb-24 lg:-mt-20'
      >
         <div className='mx-auto max-w-6xl'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
               <div>
                  <h2 className='text-2xl font-semibold text-slate-900 dark:text-slate-100 sm:text-3xl'>
                     Navigate the guided learning path
                  </h2>
                  <p className='mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-400'>
                     Each stage builds on the last, blending fundamentals,
                     tooling, and production habits so you keep momentum.
                  </p>
               </div>
               <Link
                  href='/docs/react-new'
                  className='group inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-slate-700 transition hover:-translate-y-1 hover:border-slate-900/30 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-slate-200 dark:hover:border-white/40 dark:hover:bg-white/10'
               >
                  View roadmap details
                  <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
               </Link>
            </div>

            <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
               {learningPath.map((course, index) => (
                  <div key={course.id} className='relative h-full'>
                     <span className='absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-900/10 bg-white/90 text-xs font-semibold uppercase tracking-widest text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200'>
                        {index + 1}
                     </span>
                     <CourseCard course={course} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
