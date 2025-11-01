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
                  <h2 className='text-2xl font-semibold text-foreground sm:text-3xl'>
                     Choose your next mission
                  </h2>
                  <p className='mt-3 max-w-xl text-sm text-muted-foreground'>
                     Each course is a guided build with architecture notes,
                     validation checklists, and recorded retros.
                  </p>
               </div>
               <Link
                  href='/courses'
                  className='group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition hover:-translate-y-1 hover:bg-primary/10 hover:text-primary'
               >
                  View all tracks
                  <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
               </Link>
            </div>

            <div className='mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
               {spotlightCourses.map((course) => (
                  <Link
                     key={course.id}
                     href={`/courses/${course.id}`}
                     className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_20px_40px_-25px_hsl(var(--color-primary)/0.3)] transition hover:-translate-y-2 hover:border-primary/35 hover:bg-primary/10'
                  >
                     <div className='absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 transition group-hover:scale-125' />
                     <span className='relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/25 text-2xl shadow-[inset_0_1px_2px_hsl(var(--color-primary)/0.15)] transition group-hover:scale-105'>
                        {course.icon}
                     </span>
                     <h3 className='relative mt-4 text-lg font-semibold text-foreground'>
                        {course.title}
                     </h3>
                     <p className='relative mt-2 flex-1 text-sm text-muted-foreground'>
                        {course.shortDescription}
                     </p>
                     <div className='relative mt-6 flex items-center justify-between text-xs text-muted-foreground'>
                        <span className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium uppercase tracking-widest text-[10px] text-primary'>
                           {course.difficulty}
                        </span>
                        <span className='inline-flex items-center gap-1 text-foreground'>
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
