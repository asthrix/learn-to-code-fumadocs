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
            return "bg-primary/15 text-primary";
         case "intermediate":
            return "bg-secondary/15 text-secondary-foreground";
         case "advanced":
            return "bg-accent/15 text-accent-foreground";
      }
   };

   const getStatusClasses = (status: Course["status"]) => {
      switch (status) {
         case "available":
            return "bg-primary/15 text-primary";
         case "coming-soon":
            return "bg-secondary/15 text-secondary-foreground";
         case "in-development":
            return "bg-accent/15 text-accent-foreground";
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
         <div className='mx-auto max-w-6xl rounded-3xl border border-border bg-card/95 p-10 shadow-[0_35px_70px_-35px_hsl(var(--color-primary)/0.3)] transition-colors backdrop-blur-sm lg:p-16'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                  Compare at a glance
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-foreground sm:text-4xl'>
                  Choose the sprint that meets you where you are
               </h2>
               <p className='mt-4 text-sm text-muted-foreground'>
                  Stack ranks show difficulty, duration, and outcome so you can
                  map the next build to your goals.
               </p>
            </div>

            <div className='mt-12 overflow-x-auto rounded-2xl border border-border bg-card/90 shadow-sm'>
               <table className='min-w-full divide-y divide-border/60 text-left text-sm'>
                  <thead className='bg-muted/40 text-muted-foreground'>
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
                  <tbody className='divide-y divide-border/60'>
                     {courses.map((course) => (
                        <tr
                           key={course.id}
                           className='transition hover:bg-primary/5'
                        >
                           <td className='px-6 py-4'>
                              <div className='flex items-center gap-3'>
                                 <span className='text-2xl'>{course.icon}</span>
                                 <div>
                                    <p className='text-sm font-semibold text-foreground'>
                                       {course.title}
                                    </p>
                                    <p className='text-xs text-muted-foreground'>
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
                           <td className='px-6 py-4 text-foreground/90'>
                              {course.duration}
                           </td>
                           <td className='px-6 py-4 text-foreground/90'>
                              {course.modules} modules
                           </td>
                           <td className='px-6 py-4 text-muted-foreground'>
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
