import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { courseHeroBadge, type CourseStat } from "@/lib/course-page-content";

interface CourseHeroSection2Props {
   stats: CourseStat[];
}

export function CourseHeroSection2({ stats }: CourseHeroSection2Props) {
   const BadgeIcon = courseHeroBadge.icon;

   return (
      <section className='relative overflow-hidden border-b border-border bg-background'>
         <div className='absolute inset-0 bg-gradient-to-br from-primary/12 via-background to-background' />
         <div className='relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8'>
            <div className='max-w-3xl flex-1'>
               <span className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground'>
                  <BadgeIcon className='h-4 w-4 text-primary' />
                  Course tracks
               </span>

               <h1 className='mt-6 text-4xl font-semibold text-foreground sm:text-5xl'>
                  Your guided path from foundations to production-ready builds.
               </h1>
               <p className='mt-4 text-base text-muted-foreground sm:text-lg'>
                  Follow a clear sequence of modules, build portfolio-grade
                  projects, and collect feedback checkpoints designed for modern
                  frontend teams.
               </p>

               <div className='mt-8 flex flex-wrap items-center gap-4'>
                  <Link
                     href='/courses#learning-path'
                     className='inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-1 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                  >
                     Browse the path
                     <ArrowUpRight className='h-4 w-4' />
                  </Link>
                  <Link
                     href='/docs/react'
                     className='inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
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
                        className='rounded-2xl border border-border bg-card/90 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/35'
                     >
                        <p className='text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground'>
                           {stat.label}
                        </p>
                        <p className='mt-2 text-2xl font-semibold text-foreground'>
                           {stat.value}
                        </p>
                        <p className='mt-2 text-sm text-muted-foreground'>
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
