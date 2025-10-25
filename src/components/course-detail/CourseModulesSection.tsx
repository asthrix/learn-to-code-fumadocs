"use client";

import { type KeyboardEvent, useMemo, useState } from "react";
import { Folder as FolderIcon, FolderOpen } from "lucide-react";

import { Files, File } from "@/components/files";
import { Steps, Step } from "@/components/steps";
import type { CourseModule } from "@/lib/course-detail/types";
import { cn } from "@/lib/cn";

interface CourseModulesSectionProps {
   modules: CourseModule[];
}

export function CourseModulesSection({ modules }: CourseModulesSectionProps) {
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
               <p className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'>
                  Modules & lessons
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl'>
                  Navigate your build sprint-by-sprint
               </h2>
               <p className='mt-4 text-sm text-slate-600 dark:text-slate-300'>
                  Switch between modules to inspect the lesson flow, time
                  commitment, and repository touchpoints without losing context.
               </p>
            </div>

            <div className='mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]'>
               <div className='space-y-6'>
                  <div className='rounded-3xl border border-slate-900/10 bg-white/95 p-6 shadow-[0_25px_55px_-35px_rgba(14,116,144,0.45)] dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_25px_55px_-28px_rgba(14,116,144,0.6)]'>
                     <div className='flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                        <span className='rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/10'>
                           Sprint {String(clampedIndex + 1).padStart(2, "0")}
                        </span>
                        <span className='rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/10'>
                           {activeSummary.lessonsCount} lessons
                        </span>
                        <span className='rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/10'>
                           {activeTimeLabel}
                        </span>
                     </div>
                     <h3 className='mt-5 text-2xl font-semibold text-slate-900 dark:text-slate-100'>
                        {activeModule.title}
                     </h3>
                     <p className='mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300'>
                        {activeModule.description}
                     </p>
                  </div>

                  <div className='rounded-3xl border border-slate-900/10 bg-white/95 p-6 dark:border-white/10 dark:bg-slate-900/60'>
                     <p className='text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                        Lesson cadence
                     </p>
                     <div className='mt-5 space-y-4'>
                        <Steps>
                           {activeModule.lessons.map((lesson, lessonIndex) => (
                              <Step key={lesson.title}>
                                 <div className='flex items-start justify-between gap-6 rounded-2xl border border-slate-900/10 bg-white/90 p-4 shadow-sm transition hover:border-sky-500/40 hover:shadow-[0_12px_35px_-20px_rgba(14,165,233,0.45)] dark:border-white/15 dark:bg-slate-900/70'>
                                    <div>
                                       <p className='text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                                          Lesson{" "}
                                          {String(lessonIndex + 1).padStart(
                                             2,
                                             "0"
                                          )}
                                       </p>
                                       <p className='mt-1 text-sm font-medium text-slate-900 dark:text-slate-100'>
                                          {lesson.title}
                                       </p>
                                    </div>
                                    <span className='shrink-0 rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200'>
                                       {lesson.duration}
                                    </span>
                                 </div>
                              </Step>
                           ))}
                        </Steps>
                     </div>
                  </div>
               </div>

               <div className='space-y-6'>
                  <div className='rounded-3xl border border-slate-900/10 bg-white/95 p-6 dark:border-white/10 dark:bg-slate-900/60'>
                     <p className='text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                        Modules
                     </p>
                     <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
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
                                             ? "bg-sky-500/10 text-sky-700 shadow-[0_18px_35px_-28px_rgba(14,165,233,0.45)] dark:bg-sky-400/10 dark:text-sky-200"
                                             : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                                       )}
                                    />
                                    {/* {isActive && (
                                       <div className='ms-5 mb-3 mt-2 space-y-1 border-l border-slate-900/10 pl-3 dark:border-white/10'>
                                          {module.lessons.map((lesson) => (
                                             <File
                                                key={lesson.title}
                                                name={`${lesson.title} · ${lesson.duration}`}
                                                className='bg-transparent px-2 py-1 text-sm text-slate-600 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/10'
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
