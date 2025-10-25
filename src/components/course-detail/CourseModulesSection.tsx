import { Files, File, Folder } from "@/components/files";
import { Steps, Step } from "@/components/steps";
import { Tab, Tabs } from "@/components/tabs";
import type { CourseModule } from "@/lib/course-detail/types";

interface CourseModulesSectionProps {
   modules: CourseModule[];
}

export function CourseModulesSection({ modules }: CourseModulesSectionProps) {
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

            <Tabs
               items={modules.map((module) => module.title)}
               defaultIndex={0}
               className='mt-12 border-none bg-transparent p-0'
            >
               {modules.map((module, index) => {
                  const totalMinutes = module.lessons.reduce((acc, lesson) => {
                     const minutes = Number.parseInt(lesson.duration, 10);
                     return Number.isNaN(minutes) ? acc : acc + minutes;
                  }, 0);
                  const estimatedHours = totalMinutes / 60;
                  const estimatedTime =
                     estimatedHours >= 1
                        ? `${estimatedHours.toFixed(1)} hrs`
                        : `${totalMinutes} mins`;

                  return (
                     <Tab
                        key={module.title}
                        className='mt-10 border-none bg-transparent p-0 focus-visible:outline-none'
                     >
                        <div className='grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]'>
                           <div className='space-y-6'>
                              <div className='rounded-3xl border border-slate-900/10 bg-white/95 p-6 shadow-[0_25px_55px_-35px_rgba(14,116,144,0.45)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_25px_55px_-28px_rgba(14,116,144,0.6)]'>
                                 <div className='flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                                    <span className='rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/10'>
                                       Sprint{" "}
                                       {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className='rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/10'>
                                       {module.lessons.length} lessons
                                    </span>
                                    <span className='rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/10'>
                                       ~{estimatedTime}
                                    </span>
                                 </div>
                                 <h3 className='mt-5 text-2xl font-semibold text-slate-900 dark:text-slate-100'>
                                    {module.title}
                                 </h3>
                                 <p className='mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300'>
                                    {module.description}
                                 </p>
                              </div>

                              <div className='rounded-3xl border border-slate-900/10 bg-white/95 p-6 dark:border-white/10 dark:bg-slate-900/60'>
                                 <p className='text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                                    Lesson cadence
                                 </p>
                                 <div className='mt-5 space-y-4'>
                                    <Steps>
                                       {module.lessons.map(
                                          (lesson, lessonIndex) => (
                                             <Step key={lesson.title}>
                                                <div className='flex items-start justify-between gap-6 rounded-2xl border border-slate-900/10 bg-white/90 p-4 shadow-sm transition hover:border-sky-500/40 hover:shadow-[0_12px_35px_-20px_rgba(14,165,233,0.45)] dark:border-white/15 dark:bg-slate-900/70'>
                                                   <div>
                                                      <p className='text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                                                         Lesson{" "}
                                                         {String(
                                                            lessonIndex + 1
                                                         ).padStart(2, "0")}
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
                                          )
                                       )}
                                    </Steps>
                                 </div>
                              </div>
                           </div>

                           <div className='space-y-6'>
                              <div className='rounded-3xl border border-slate-900/10 bg-white/95 p-6 dark:border-white/10 dark:bg-slate-900/60'>
                                 <p className='text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                                    Repository touchpoints
                                 </p>
                                 <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
                                    Each lesson links back to a focused commit
                                    series. Use the file explorer to preview the
                                    scaffolding you will implement during the
                                    sprint.
                                 </p>
                                 <Files className='mt-5'>
                                    <Folder name='Module assets' defaultOpen>
                                       {module.lessons.map((lesson) => (
                                          <File
                                             key={lesson.title}
                                             name={`${lesson.title} · ${lesson.duration}`}
                                          />
                                       ))}
                                    </Folder>
                                 </Files>
                              </div>
                           </div>
                        </div>
                     </Tab>
                  );
               })}
            </Tabs>
         </div>
      </section>
   );
}
