import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { courseHeroBadge, type CourseStat } from "@/lib/course-page-content";

interface CourseHeroSection2Props {
   stats: CourseStat[];
}

export function CourseHeroSection2({ stats }: CourseHeroSection2Props) {
   const BadgeIcon = courseHeroBadge.icon;

   return (
      <section className='relative overflow-hidden border-b border-slate-900/10 bg-white dark:border-white/10 dark:bg-slate-950'>
         <div className='absolute inset-0 bg-gradient-to-br from-sky-100/40 via-white to-white dark:from-sky-900/20 dark:via-slate-950 dark:to-slate-950' />
         <div className='relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8'>
            <div className='max-w-3xl flex-1'>
               <span className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'>
                  <BadgeIcon className='h-4 w-4 text-sky-500 dark:text-sky-300' />
                  Course tracks
               </span>

               <h1 className='mt-6 text-4xl font-semibold text-slate-900 dark:text-slate-100 sm:text-5xl'>
                  Your guided path from foundations to production-ready builds.
               </h1>
               <p className='mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg'>
                  Follow a clear sequence of modules, build portfolio-grade
                  projects, and collect feedback checkpoints designed for modern
                  frontend teams.
               </p>

               <div className='mt-8 flex flex-wrap items-center gap-4'>
                  <Link
                     href='/courses#learning-path'
                     className='inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-900/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 dark:focus-visible:ring-slate-100/60 dark:focus-visible:ring-offset-slate-950'
                  >
                     Browse the path
                     <ArrowUpRight className='h-4 w-4' />
                  </Link>
                  <Link
                     href='/docs/react'
                     className='inline-flex items-center gap-2 rounded-full border border-slate-900/20 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-slate-900/40 hover:bg-white focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10 dark:focus-visible:ring-white/50 dark:focus-visible:ring-offset-slate-950'
                  >
                     Preview TaskFlow Pro
                     <ArrowUpRight className='h-4 w-4' />
                  </Link>
               </div>
            </div>

            <div className='flex-1'>
               <div className='grid gap-4 sm:grid-cols-2'>
                  {stats.map((stat) => (
                     <div
                        key={stat.label}
                        className='rounded-2xl border border-slate-900/10 bg-white/80 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-900/20 dark:border-white/10 dark:bg-white/10 dark:hover:border-white/20'
                     >
                        <p className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400'>
                           {stat.label}
                        </p>
                        <p className='mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100'>
                           {stat.value}
                        </p>
                        <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
                           {stat.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
