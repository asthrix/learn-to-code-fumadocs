import type { Course } from "@/lib/courses";

interface CourseComparisonSectionProps {
   courses: Course[];
}

export function CourseComparisonSection({
   courses,
}: CourseComparisonSectionProps) {
   const getDifficultyClasses = (difficulty: Course["difficulty"]) => {
      switch (difficulty) {
         case "beginner":
            return "bg-emerald-100/80 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200";
         case "intermediate":
            return "bg-amber-100/80 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200";
         case "advanced":
            return "bg-rose-100/80 text-rose-700 dark:bg-rose-500/20 dark:text-rose-200";
      }
   };

   const getStatusClasses = (status: Course["status"]) => {
      switch (status) {
         case "available":
            return "bg-emerald-100/80 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200";
         case "coming-soon":
            return "bg-amber-100/80 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200";
         case "in-development":
            return "bg-sky-100/80 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200";
      }
   };

   const getStatusLabel = (status: Course["status"]) => {
      switch (status) {
         case "available":
            return "Available";
         case "coming-soon":
            return "Coming Soon";
         case "in-development":
            return "In Development";
      }
   };

   return (
      <section className='relative px-6 pb-24'>
         <div className='mx-auto max-w-6xl rounded-3xl border border-slate-900/10 bg-white/90 p-10 shadow-[0_35px_70px_-35px_rgba(59,130,246,0.3)] transition-colors backdrop-blur-sm lg:p-16 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_35px_70px_-30px_rgba(59,130,246,0.35)] dark:backdrop-blur-xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-sky-600/80 dark:border-white/10 dark:bg-white/5 dark:text-sky-200/80'>
                  Compare at a glance
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl'>
                  Choose the sprint that meets you where you are
               </h2>
               <p className='mt-4 text-sm text-slate-600 dark:text-slate-300'>
                  Stack ranks show difficulty, duration, and outcome so you can
                  map the next build to your goals.
               </p>
            </div>

            <div className='mt-12 overflow-x-auto rounded-2xl border border-slate-900/10 bg-white/90 shadow-sm dark:border-white/10 dark:bg-slate-950/40'>
               <table className='min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800'>
                  <thead className='bg-slate-50/80 text-slate-600 dark:bg-slate-900/60 dark:text-slate-300'>
                     <tr>
                        <th className='px-6 py-4 uppercase tracking-[0.22em]'>
                           Course
                        </th>
                        <th className='px-6 py-4 uppercase tracking-[0.22em]'>
                           Difficulty
                        </th>
                        <th className='px-6 py-4 uppercase tracking-[0.22em]'>
                           Duration
                        </th>
                        <th className='px-6 py-4 uppercase tracking-[0.22em]'>
                           Modules
                        </th>
                        <th className='px-6 py-4 uppercase tracking-[0.22em]'>
                           Project
                        </th>
                        <th className='px-6 py-4 uppercase tracking-[0.22em]'>
                           Status
                        </th>
                     </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-200 dark:divide-slate-800'>
                     {courses.map((course) => (
                        <tr
                           key={course.id}
                           className='transition hover:bg-slate-50/60 dark:hover:bg-slate-900/40'
                        >
                           <td className='px-6 py-4'>
                              <div className='flex items-center gap-3'>
                                 <span className='text-2xl'>{course.icon}</span>
                                 <div>
                                    <p className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
                                       {course.title}
                                    </p>
                                    <p className='text-xs text-slate-500 dark:text-slate-400'>
                                       {course.technologies
                                          .slice(0, 2)
                                          .join(", ")}
                                    </p>
                                 </div>
                              </div>
                           </td>
                           <td className='px-6 py-4'>
                              <span
                                 className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getDifficultyClasses(
                                    course.difficulty
                                 )}`}
                              >
                                 {course.difficulty}
                              </span>
                           </td>
                           <td className='px-6 py-4 text-slate-700 dark:text-slate-200'>
                              {course.duration}
                           </td>
                           <td className='px-6 py-4 text-slate-700 dark:text-slate-200'>
                              {course.modules} modules
                           </td>
                           <td className='px-6 py-4 text-slate-500 dark:text-slate-400'>
                              {course.project}
                           </td>
                           <td className='px-6 py-4'>
                              <span
                                 className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                                    course.status
                                 )}`}
                              >
                                 {getStatusLabel(course.status)}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>
   );
}
