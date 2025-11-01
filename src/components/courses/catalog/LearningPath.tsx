import { Check, Lock, Zap } from "lucide-react";

import type { Course } from "@/lib/courses";

import { cn } from "@/lib/utils";

interface LearningPathProps {
   courses: Course[];
}

type StageState = "completed" | "current" | "locked";

type StageMeta = {
   label: string;
   description: string;
};

const STATE_META: Record<StageState, StageMeta> = {
   completed: {
      label: "Completed",
      description: "You have access to everything here.",
   },
   current: {
      label: "In progress",
      description: "Your next focus area.",
   },
   locked: {
      label: "Locked",
      description: "Coming soon in the learning path.",
   },
};

export function LearningPath({ courses }: LearningPathProps) {
   if (courses.length === 0) {
      return null;
   }

   const firstAvailableIndex = courses.findIndex(
      (course) => course.status === "available"
   );

   const getStageState = (course: Course, index: number): StageState => {
      if (firstAvailableIndex === -1) {
         return index === 0 ? "current" : "locked";
      }

      if (course.status === "available") {
         return index === firstAvailableIndex ? "current" : "completed";
      }

      return "locked";
   };

   return (
      <section className='mx-auto w-full max-w-5xl rounded-3xl border border-border/60 bg-card/60 p-6 shadow-sm sm:p-8'>
         <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
            <div className='max-w-xl space-y-2'>
               <p className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>Learning Path</p>
               <h2 className='text-2xl font-semibold text-foreground'>HTML to Next.js roadmap</h2>
               <p className='text-sm text-muted-foreground'>
                  Follow a guided sequence from foundational HTML to production-ready Next.js applications. Each step unlocks once the prior skills are in place.
               </p>
            </div>
            <div className='flex gap-4 text-xs text-muted-foreground'>
               {Object.entries(STATE_META).map(([key, meta]) => (
                  <div key={key} className='hidden sm:flex flex-col items-start gap-1'>
                     <span className='font-semibold text-foreground'>{meta.label}</span>
                     <span className='max-w-[180px]'>{meta.description}</span>
                  </div>
               ))}
            </div>
         </div>

         <ol className='mt-8 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-4'>
            {courses.map((course, index) => {
               const state = getStageState(course, index);
               const isLast = index === courses.length - 1;

               return (
                  <li
                     key={course.id}
                     className='relative flex items-start gap-4 md:flex-1 md:flex-col md:items-center md:text-center'
                  >
                     <div className='relative flex items-center md:flex-col'>
                        <div
                           className={cn(
                              "flex h-12 w-12 items-center justify-center rounded-full border-2 bg-background text-sm font-semibold transition",
                              state === "completed" &&
                                 "border-emerald-500/40 bg-emerald-100/40 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200",
                              state === "current" &&
                                 "border-primary/50 bg-primary/15 text-primary shadow-md shadow-primary/20 animate-soft-pulse",
                              state === "locked" &&
                                 "border-border/70 bg-muted/50 text-muted-foreground"
                           )}
                           aria-label={`${course.title} stage is ${STATE_META[state].label}`}
                        >
                           {state === "completed" ? (
                              <Check className='h-4 w-4' aria-hidden='true' />
                           ) : state === "current" ? (
                              <Zap className='h-4 w-4' aria-hidden='true' />
                           ) : (
                              <Lock className='h-4 w-4' aria-hidden='true' />
                           )}
                        </div>
                        {!isLast && (
                           <span className='absolute left-12 top-1/2 hidden h-px w-32 -translate-y-1/2 bg-border md:left-1/2 md:top-6 md:block md:h-px md:w-[calc(100%+1rem)] md:-translate-y-1/2' aria-hidden='true' />
                        )}
                     </div>

                     <div className='flex-1 md:mt-4'>
                        <p className='text-sm font-semibold text-foreground'>{course.title}</p>
                        <p className='text-xs text-muted-foreground'>
                           {state === "locked" ? "Locked" : STATE_META[state].label}
                        </p>
                     </div>
                  </li>
               );
            })}
         </ol>
      </section>
   );
}
