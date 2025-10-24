import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Course } from "@/lib/courses";

interface SpotlightCoursesSectionProps {
   spotlightCourses: Course[];
}

export function SpotlightCoursesSection({
   spotlightCourses,
}: SpotlightCoursesSectionProps) {
   return (
      <section className='relative z-[1] -mt-14 px-6 pb-24 lg:-mt-20'>
         <div className='mx-auto max-w-6xl'>
            <div className='flex items-center justify-between gap-4'>
               <div>
                  <h2 className='text-2xl font-semibold text-slate-900 dark:text-slate-100 sm:text-3xl'>
                     Choose your next mission
                  </h2>
                  <p className='mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-400'>
                     Each course is a guided build with architecture notes,
                     validation checklists, and recorded retros.
                  </p>
               </div>
               <Link
                  href='/courses'
                  className='group inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-slate-700 transition hover:-translate-y-1 hover:border-slate-900/30 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-slate-200 dark:hover:border-white/40 dark:hover:bg-white/10'
               >
                  View all tracks
                  <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
               </Link>
            </div>

            <div className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
               {spotlightCourses.map((course) => (
                  <Link
                     key={course.id}
                     href={`/docs/${course.id}`}
                     className='group relative flex h-full flex-col rounded-3xl border border-slate-900/10 bg-white p-6 shadow-[0_20px_40px_-25px_rgba(14,165,233,0.3)] transition-transform duration-500 hover:-translate-y-4 hover:-rotate-1 dark:border-white/5 dark:bg-gradient-to-br dark:from-slate-900/70 dark:via-slate-900/40 dark:to-slate-800/30 dark:shadow-[0_20px_40px_-20px_rgba(14,165,233,0.45)] dark:backdrop-blur-xl'
                  >
                     <span className='inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-2xl shadow-inner shadow-slate-900/10 transition group-hover:scale-105 dark:bg-white/10 dark:shadow-white/20'>
                        {course.icon}
                     </span>
                     <h3 className='mt-4 text-lg font-semibold text-slate-800 dark:text-slate-100'>
                        {course.title}
                     </h3>
                     <p className='mt-2 flex-1 text-sm text-slate-500 dark:text-slate-400'>
                        {course.shortDescription}
                     </p>
                     <div className='mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400'>
                        <span className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 px-3 py-1 font-medium uppercase tracking-widest text-[10px] text-sky-600/80 dark:border-white/10 dark:text-sky-200/80'>
                           {course.difficulty}
                        </span>
                        <span className='inline-flex items-center gap-1 text-slate-700 dark:text-slate-200'>
                           Dive in
                           <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </span>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}
