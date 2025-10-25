import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import type { CourseHeroContent } from "@/lib/course-detail/types";

interface CourseDetailHeroSectionProps {
   hero: CourseHeroContent;
}

export function CourseDetailHeroSection({
   hero,
}: CourseDetailHeroSectionProps) {
   return (
      <section className='relative overflow-hidden'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_55%)]' />
         <div className='pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-sky-500/25 blur-3xl mix-blend-multiply dark:bg-sky-500/35 dark:mix-blend-normal' />
         <div className='pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-3xl mix-blend-multiply dark:bg-purple-500/25 dark:mix-blend-normal' />

         <div className='relative mx-auto max-w-6xl px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36'>
            <span className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'>
               <Sparkles className='h-4 w-4 text-sky-400' />
               {hero.eyebrow}
            </span>

            <div className='mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
               <div>
                  <h1 className='text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl'>
                     {hero.title}{" "}
                     <span className='text-sky-600 dark:text-sky-300'>
                        {hero.highlight}
                     </span>
                  </h1>
                  <p className='mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300'>
                     {hero.description}
                  </p>

                  <div className='mt-10 flex flex-wrap items-center gap-4'>
                     <Link
                        href={hero.primaryCta.href}
                        className='group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-1 hover:bg-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-950 dark:focus-visible:ring-offset-slate-950'
                     >
                        {hero.primaryCta.label}
                        <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                     </Link>
                     {hero.secondaryCta && (
                        <Link
                           href={hero.secondaryCta.href}
                           className='group inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-slate-900/40 hover:bg-white focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20 dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-slate-950'
                        >
                           {hero.secondaryCta.label}
                           <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </Link>
                     )}
                  </div>
               </div>

               <dl className='grid gap-4 sm:grid-cols-2'>
                  {hero.metrics.map((metric) => (
                     <div
                        key={metric.label}
                        className='rounded-3xl border border-slate-900/10 bg-white/90 p-6 text-center shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-2 hover:border-slate-900/20 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20 dark:hover:border-white/20'
                     >
                        <dt className='text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                           {metric.label}
                        </dt>
                        <dd className='mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100'>
                           {metric.value}
                        </dd>
                     </div>
                  ))}
               </dl>
            </div>
         </div>
      </section>
   );
}
