import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import {
   courseHeroBadge,
   courseHighlights,
   type CourseStat,
} from "@/lib/course-page-content";
import { FeatureHighlightCard } from "@/components/landing/FeatureHighlightCard";

interface CourseHeroSectionProps {
   stats: CourseStat[];
}

export function CourseHeroSection({ stats }: CourseHeroSectionProps) {
   const BadgeIcon = courseHeroBadge.icon;

   return (
      <section className='relative overflow-hidden'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_58%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_50%)]' />
         <div className='pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl mix-blend-multiply dark:bg-sky-500/25 dark:mix-blend-normal' />
         <div className='pointer-events-none absolute -right-48 bottom-8 h-[28rem] w-[28rem] rounded-full bg-violet-500/15 blur-3xl mix-blend-multiply dark:bg-violet-500/25 dark:mix-blend-normal' />

         <div className='relative mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-36'>
            <span className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-slate-600 backdrop-blur transition hover:border-slate-900/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/20'>
               <BadgeIcon className='h-4 w-4 text-sky-400' />
               Guided learning tracks
            </span>

            <div className='mt-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
               <div>
                  <h1 className='text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl'>
                     Master frontend engineering with an immersive course
                     blueprint.
                  </h1>
                  <p className='mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300'>
                     Ship five production-grade projects while leveling up from
                     semantic HTML to full-stack React and Next.js. Every
                     milestone is paired with rubrics, retros, and automation
                     playbooks.
                  </p>

                  <div className='mt-10 flex flex-wrap items-center gap-4'>
                     <Link
                        href='/docs/react'
                        className='group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-1 hover:bg-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-950 dark:focus-visible:ring-offset-slate-950'
                     >
                        View the TaskFlow roadmap
                        <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                     </Link>
                     <Link
                        href='/courses#learning-path'
                        className='group inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-slate-900/40 hover:bg-white focus-visible:ring-2 focus-visible:ring-slate-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20 dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-slate-950'
                     >
                        Explore learning path
                        <Sparkles className='h-4 w-4 text-sky-300 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110' />
                     </Link>
                  </div>

                  <dl className='mt-14 grid grid-cols-2 gap-6 sm:max-w-2xl sm:grid-cols-4'>
                     {stats.map((stat) => (
                        <div
                           key={stat.label}
                           className='rounded-2xl border border-slate-900/10 bg-white/90 p-4 text-center shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-2 hover:border-slate-900/20 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20 dark:hover:border-white/20'
                        >
                           <dt className='text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400'>
                              {stat.label}
                           </dt>
                           <dd className='mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100'>
                              {stat.value}
                           </dd>
                           <p className='mt-2 text-xs text-slate-500 dark:text-slate-400'>
                              {stat.description}
                           </p>
                        </div>
                     ))}
                  </dl>
               </div>

               <div className='relative'>
                  <div className='pointer-events-none absolute -top-16 -right-6 h-24 w-24 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-sky-400/40' />
                  <div className='pointer-events-none absolute bottom-16 left-10 h-20 w-20 rounded-full bg-gradient-to-tr from-sky-500/40 to-purple-500/40 blur-2xl' />

                  <div className='group relative rounded-3xl border border-slate-900/10 bg-white p-6 shadow-[0_25px_60px_-25px_rgba(14,116,144,0.35)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-3 hover:rotate-1 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-800/30 dark:shadow-[0_25px_60px_-15px_rgba(14,116,144,0.6)]'>
                     <div className='flex items-center justify-between text-sm text-slate-300'>
                        <span className='inline-flex items-center gap-2'>
                           <span className='h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)]' />
                           Cohort launch · Jan 2025
                        </span>
                        <span className='font-mono text-xs text-emerald-300'>
                           sprint 01
                        </span>
                     </div>
                     <div className='mt-6 space-y-4'>
                        {courseHighlights.map((feature) => (
                           <FeatureHighlightCard
                              key={feature.title}
                              feature={feature}
                              variant='stacked'
                           />
                        ))}
                     </div>
                     <div className='mt-6 flex items-center justify-between rounded-2xl border border-slate-900/10 bg-slate-100/80 px-4 py-3 text-xs text-slate-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300'>
                        <p className='font-mono text-emerald-500 dark:text-emerald-300'>
                           push learning-path --sync
                        </p>
                        <div className='inline-flex items-center gap-1 text-slate-500 dark:text-slate-400'>
                           Auto QA
                           <ArrowUpRight className='h-4 w-4 text-sky-500 transition group-hover:translate-x-1 dark:text-sky-300' />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
