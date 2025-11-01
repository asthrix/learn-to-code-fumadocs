import { Trophy, Users, Clock, Layers } from "lucide-react";

import type { CourseStat } from "@/lib/course-page-content";

interface CourseStatsProps {
   stats: CourseStat[];
}

const ICONS = [Users, Layers, Trophy, Clock];

export function CourseStats({ stats }: CourseStatsProps) {
   if (!stats || stats.length === 0) {
      return null;
   }

   return (
      <section className='mx-auto w-full max-w-5xl space-y-6'>
         <header className='space-y-2 text-center'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>By the numbers</p>
            <h2 className='text-2xl font-semibold text-foreground'>Learners growing with our curriculum</h2>
         </header>

         <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            {stats.map((stat, index) => {
               const Icon = ICONS[index] ?? ICONS[ICONS.length - 1];

               return (
                  <div
                     key={stat.label}
                     className='flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/60 p-5 text-left shadow-sm transition hover:shadow-md'
                  >
                     <Icon className='h-5 w-5 text-primary' aria-hidden='true' />
                     <strong className='text-3xl font-semibold text-foreground'>
                        {stat.value}
                     </strong>
                     <p className='text-sm font-medium text-foreground/80'>{stat.label}</p>
                     <p className='text-sm text-muted-foreground'>{stat.description}</p>
                  </div>
               );
            })}
         </div>
      </section>
   );
}
