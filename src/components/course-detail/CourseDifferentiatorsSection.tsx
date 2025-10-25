import type { CourseDifferentiator } from "@/lib/course-detail/types";

interface CourseDifferentiatorsSectionProps {
   differentiators: CourseDifferentiator[];
}

export function CourseDifferentiatorsSection({
   differentiators,
}: CourseDifferentiatorsSectionProps) {
   return (
      <section className='relative px-6 pb-20'>
         <div className='mx-auto max-w-6xl rounded-3xl border border-slate-900/10 bg-white/90 p-10 shadow-[0_25px_60px_-30px_rgba(14,165,233,0.35)] backdrop-blur-sm lg:p-16 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_25px_60px_-25px_rgba(14,165,233,0.5)] dark:backdrop-blur-xl'>
            <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
               <div>
                  <p className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'>
                     Why this track
                  </p>
                  <h2 className='mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl'>
                     Built for engineers shipping complex, collaborative apps.
                  </h2>
                  <p className='mt-4 text-sm text-slate-600 dark:text-slate-300'>
                     Every differentiator comes from production incidents and
                     retros. You get the tooling, patterns, and guardrails
                     modern teams expect on day zero.
                  </p>
               </div>

               <div className='grid gap-6 sm:grid-cols-2'>
                  {differentiators.map((item) => (
                     <div
                        key={item.title}
                        className='group relative overflow-hidden rounded-2xl border border-slate-900/10 bg-white p-6 transition hover:-translate-y-2 hover:border-slate-900/20 hover:bg-white/90 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-white/20 dark:hover:bg-slate-900/80'
                     >
                        <item.icon className='h-5 w-5 text-sky-600 dark:text-sky-300' />
                        <h3 className='mt-4 text-base font-semibold text-slate-900 dark:text-slate-100'>
                           {item.title}
                        </h3>
                        <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                           {item.description}
                        </p>
                        <div className='absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-500/10 transition group-hover:scale-125 dark:bg-sky-400/10' />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
