import type { CourseTechnologyGroup } from "@/lib/course-detail/types";

interface CourseTechnologySectionProps {
   technology: CourseTechnologyGroup[];
}

export function CourseTechnologySection({
   technology,
}: CourseTechnologySectionProps) {
   return (
      <section className='relative px-6 pb-20'>
         <div className='mx-auto max-w-6xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'>
                  Tooling stack
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl'>
                  Master workflows across the React delivery pipeline
               </h2>
               <p className='mt-4 text-sm text-slate-600 dark:text-slate-300'>
                  Each technology group ends with labs that plug into your
                  TaskFlow Pro repository so nothing stays theoretical.
               </p>
            </div>

            <div className='mt-12 grid gap-6 md:grid-cols-2'>
               {technology.map((group) => (
                  <div
                     key={group.title}
                     className='rounded-3xl border border-slate-900/10 bg-white/90 p-6 shadow-[0_20px_45px_-25px_rgba(59,130,246,0.3)] transition hover:-translate-y-2 hover:border-slate-900/20 dark:border-white/10 dark:bg-white/10 dark:shadow-[0_20px_45px_-20px_rgba(59,130,246,0.45)]'
                  >
                     <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
                        {group.title}
                     </h3>
                     <ul className='mt-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300'>
                        {group.items.map((item) => (
                           <li
                              key={item}
                              className='inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] dark:border-white/10 dark:bg-white/10'
                           >
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
