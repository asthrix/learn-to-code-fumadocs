"use client";

import Link from "next/link";
import { type KeyboardEvent, useMemo, useState } from "react";
import { Folder as FolderIcon, FolderOpen } from "lucide-react";

import { Files, File } from "@/components/files";
import { Steps, Step } from "@/components/steps";
import type { CourseModule } from "@/lib/course-detail/types";
import { cn } from "@/lib/cn";

interface CourseModulesSectionProps {
   modules: CourseModule[];
   courseSlug: string;
}

export function CourseModulesSection({
   modules,
   courseSlug,
}: CourseModulesSectionProps) {
   const [activeIndex, setActiveIndex] = useState(0);

   const summaries = useMemo(
      () =>
         modules.map((module) => {
            const totalMinutes = module.lessons.reduce((acc, lesson) => {
               const minutes = Number.parseInt(lesson.duration, 10);
               return Number.isNaN(minutes) ? acc : acc + minutes;
            }, 0);

            if (totalMinutes <= 0) {
               return {
                  lessonsCount: module.lessons.length,
                  estimatedTime: "—",
               };
            }

            const estimatedHours = totalMinutes / 60;
            const estimatedTime =
               estimatedHours >= 1
                  ? `${estimatedHours.toFixed(1)} hrs`
                  : `${totalMinutes} mins`;

            return {
               lessonsCount: module.lessons.length,
               estimatedTime,
            };
         }),
      [modules]
   );

   if (modules.length === 0) return null;

   const clampedIndex = Math.min(Math.max(activeIndex, 0), modules.length - 1);
   const activeModule = modules[clampedIndex];
   const activeSummary = summaries[clampedIndex];
   const activeTimeLabel =
      activeSummary.estimatedTime === "—"
         ? "—"
         : `~${activeSummary.estimatedTime}`;

   const handleModuleKeyDown = (
      event: KeyboardEvent<HTMLDivElement>,
      index: number
   ) => {
      if (event.key === "Enter" || event.key === " ") {
         event.preventDefault();
         setActiveIndex(index);
      }
   };

   return (
      <section className='relative px-6 pb-20'>
         <div className='mx-auto max-w-6xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-primary dark:border-primary/25 dark:bg-primary/15 dark:text-primary-foreground'>
                  Modules & lessons
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-foreground sm:text-4xl'>
                  Navigate your build sprint-by-sprint
               </h2>
               <p className='mt-4 text-sm text-muted-foreground'>
                  Switch between modules to inspect the lesson flow, time
                  commitment, and repository touchpoints without losing context.
               </p>
            </div>

            <div className='mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]'>
               <div className='space-y-6'>
                  <div className='rounded-3xl border border-border bg-card p-6 shadow-[0_25px_55px_-35px_hsl(var(--color-primary)/0.4)]'>
                     <div className='flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
                        <span className='rounded-full border border-border/60 bg-primary/10 px-3 py-1 text-foreground'>
                           Sprint {String(clampedIndex + 1).padStart(2, "0")}
                        </span>
                        <span className='rounded-full border border-border/60 bg-secondary/10 px-3 py-1 text-secondary'>
                           {activeSummary.lessonsCount} lessons
                        </span>
                        <span className='rounded-full border border-border/60 bg-accent/20 px-3 py-1 text-foreground'>
                           {activeTimeLabel}
                        </span>
                     </div>
                     <h3 className='mt-5 text-2xl font-semibold text-foreground'>
                        {activeModule.title}
                     </h3>
                     <p className='mt-3 max-w-3xl text-sm text-muted-foreground'>
                        {activeModule.description}
                     </p>
                  </div>

                  <div className='rounded-3xl border border-border bg-card p-6'>
                     <p className='text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                        Lesson cadence
                     </p>
                     <div className='mt-5 space-y-4'>
                        <Steps>
                           <div className='space-y-2'>
                              {activeModule.lessons.map(
                                 (lesson, lessonIndex) => {
                                    const inferredHref =
                                       lesson.href ??
                                       (lesson.id
                                          ? `/docs/${courseSlug}/${lesson.id}`
                                          : undefined);

                                    const content = (
                                       <div className='flex items-start justify-between gap-6 rounded-2xl border border-border bg-card/80 p-4 shadow-sm transition hover:border-primary/40 hover:shadow-[0_12px_35px_-20px_hsl(var(--color-primary)/0.45)]'>
                                          <div>
                                             <p className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
                                                {lessonIndex === 0
                                                   ? "Overview"
                                                   : `Lesson ${String(lessonIndex).padStart(2, "0")}`}
                                             </p>
                                             <p className='mt-1 text-sm font-medium text-foreground'>
                                                {lesson.title}
                                             </p>
                                          </div>
                                          <span className='shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-secondary/80'>
                                             {lesson.duration}
                                          </span>
                                       </div>
                                    );

                                    return (
                                       <Step key={lesson.title}>
                                          {inferredHref ? (
                                             <Link
                                                href={inferredHref}
                                                className='block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                                             >
                                                {content}
                                             </Link>
                                          ) : (
                                             content
                                          )}
                                       </Step>
                                    );
                                 }
                              )}
                           </div>
                        </Steps>
                     </div>
                  </div>
               </div>

               <div className='space-y-6'>
                  <div className='rounded-3xl border border-border bg-card p-6'>
                     <p className='text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                        Modules
                     </p>
                     <p className='mt-3 text-sm text-muted-foreground'>
                        Browse every sprint artifact in one place. Tap a module
                        to update the sprint overview, then drill into its
                        lesson commits without losing sight of the larger
                        curriculum.
                     </p>
                     <Files className='mt-5'>
                        <div className='flex flex-col gap-1'>
                           {modules.map((module, index) => {
                              const isActive = index === clampedIndex;

                              return (
                                 <div key={module.title} className='rounded-lg'>
                                    <File
                                       name={module.title}
                                       icon={
                                          isActive ? (
                                             <FolderOpen className='h-4 w-4' />
                                          ) : (
                                             <FolderIcon className='h-4 w-4' />
                                          )
                                       }
                                       role='button'
                                       tabIndex={0}
                                       aria-pressed={isActive}
                                       onClick={() => setActiveIndex(index)}
                                       onKeyDown={(event) =>
                                          handleModuleKeyDown(event, index)
                                       }
                                       className={cn(
                                          "cursor-pointer select-none px-3 py-2 font-medium transition",
                                          isActive
                                             ? "bg-primary/15 text-secondary/80 shadow-[0_18px_35px_-28px_hsl(var(--color-primary)/0.45)] hover:text-secondary"
                                             : "text-muted-foreground hover:bg-muted/40 hover:text-secondary"
                                       )}
                                    />
                                    {/* {isActive && (
                                       <div className='ms-5 mb-3 mt-2 space-y-1 border-l border-border pl-3'>
                                          {module.lessons.map((lesson) => (
                                             <File
                                                key={lesson.title}
                                                name={`${lesson.title} · ${lesson.duration}`}
                                                className='bg-transparent px-2 py-1 text-sm text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                                             />
                                          ))}
                                       </div>
                                    )} */}
                                 </div>
                              );
                           })}
                        </div>
                     </Files>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
