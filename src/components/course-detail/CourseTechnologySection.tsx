import { Cpu, Rocket, Sparkles, Workflow } from "lucide-react";

import type { CourseTechnologyGroup } from "@/lib/course-detail/types";

interface CourseTechnologySectionProps {
   technology: CourseTechnologyGroup[];
}

const iconPalette = [Sparkles, Workflow, Rocket, Cpu];

const accentStyles = [
   {
      border: "border-sky-500/30 dark:border-sky-500/20",
      glow: "from-sky-500/25 via-sky-500/5 to-transparent",
      icon: "bg-sky-500/15 text-sky-600 dark:bg-sky-500/20 dark:text-sky-200",
      chip: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/15 dark:text-sky-200",
   },
   {
      border: "border-violet-500/30 dark:border-violet-500/20",
      glow: "from-violet-500/25 via-violet-500/5 to-transparent",
      icon: "bg-violet-500/15 text-violet-600 dark:bg-violet-500/20 dark:text-violet-200",
      chip: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/15 dark:text-violet-200",
   },
   {
      border: "border-emerald-500/30 dark:border-emerald-500/20",
      glow: "from-emerald-500/25 via-emerald-500/5 to-transparent",
      icon: "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200",
      chip: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/15 dark:text-emerald-200",
   },
];

export function CourseTechnologySection({
   technology,
}: CourseTechnologySectionProps) {
   const totalStacks = technology.length;
   const totalTools = technology.reduce(
      (acc, group) => acc + group.items.length,
      0,
   );

   return (
      <section className='relative px-6 pb-24'>
         <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)] blur-lg dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.32),_transparent_60%)]' />
         <div className='mx-auto max-w-6xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 backdrop-blur-sm dark:border-white/15 dark:bg-white/10 dark:text-slate-300'>
                  Tooling stack
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl'>
                  Master workflows across the React delivery pipeline
               </h2>
               <p className='mt-4 text-sm text-slate-600 dark:text-slate-300 sm:text-base'>
                  Each technology group ends with labs that plug into your TaskFlow Pro repository so nothing stays theoretical.
               </p>

               <div className='mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400'>
                  <span className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/10'>
                     {totalStacks} curated stacks
                  </span>
                  <span className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/10'>
                     {totalTools} production tools
                  </span>
               </div>
            </div>

            <div className='mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
               {technology.map((group, index) => {
                  const Icon = iconPalette[index % iconPalette.length];
                  const accent = accentStyles[index % accentStyles.length];

                  return (
                     <article
                        key={group.title}
                        className={`group relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70 p-[1px] transition duration-500 hover:-translate-y-2 hover:shadow-[0_45px_85px_-45px_rgba(56,189,248,0.45)] dark:border-white/10 dark:bg-slate-900/60 ${accent.border}`}
                     >
                        <span
                           className={`pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 dark:opacity-80 dark:group-hover:opacity-100 bg-gradient-to-br ${accent.glow}`}
                        />

                        <div className='relative h-full rounded-[calc(1.5rem-1px)] bg-white/95 p-6 dark:bg-slate-950/75'>
                           <div className='flex items-start justify-between gap-4'>
                              <span
                                 className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-base font-semibold shadow-[0_18px_40px_-22px_rgba(56,189,248,0.45)] ${accent.icon}`}
                              >
                                 <Icon className='h-5 w-5' />
                              </span>
                              <span className='rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'>
                                 {group.items.length} tools
                              </span>
                           </div>

                           <h3 className='mt-6 text-lg font-semibold text-slate-900 dark:text-slate-100'>
                              {group.title}
                           </h3>
                           <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
                              Accelerate your {group.title} mastery with guided labs that bake these tools into the TaskFlow Pro delivery cadence.
                           </p>

                           <ul className='mt-6 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.22em]'>
                              {group.items.map((item) => (
                                 <li
                                    key={item}
                                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 transition ${accent.chip}`}
                                 >
                                    <span className='h-1.5 w-1.5 rounded-full bg-current opacity-80' />
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </article>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
