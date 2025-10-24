import Link from "next/link";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

import { featureHighlights, statHighlights } from "@/lib/home-content";

import { FeatureHighlightCard } from "./FeatureHighlightCard";

export function ModernHeroSection() {
   return (
      <section className='relative overflow-hidden'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_58%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]' />
         <div className='pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl mix-blend-multiply dark:bg-sky-500/30 dark:mix-blend-normal' />
         <div className='pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl mix-blend-multiply dark:bg-purple-500/20 dark:mix-blend-normal' />

         <div className='relative mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-36'>
            <span className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-slate-600 backdrop-blur transition hover:border-slate-900/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/20'>
               <Sparkles className='h-4 w-4 text-sky-400' />
               Launching 2025 Curriculum
            </span>

            <div className='mt-10 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
               <div>
                  <h1 className='text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl'>
                     Build elite frontend skills with{" "}
                     <span className='text-sky-600 dark:text-sky-300'>
                        production-grade
                     </span>{" "}
                     projects.
                  </h1>
                  <p className='mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300'>
                     Learn in sprints, ship real interfaces, and document every
                     decision. Our TaskFlow Pro path mirrors the expectations of
                     modern product teams so you graduate with credibility and a
                     deployable portfolio.
                  </p>

                  <div className='mt-10 flex flex-wrap items-center gap-4'>
                     <Link
                        href='/courses'
                        className='group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-1 hover:bg-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-950 dark:focus-visible:ring-offset-slate-950'
                     >
                        Explore the catalog
                        <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                     </Link>
                     <Link
                        href='/docs/react'
                        className='group inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-slate-900/40 hover:bg-white focus-visible:ring-2 focus-visible:ring-slate-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20 dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-slate-950'
                     >
                        Start with React track
                        <Code2 className='h-4 w-4 text-sky-300 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110' />
                     </Link>
                  </div>

                  <dl className='mt-14 grid grid-cols-2 gap-6 sm:max-w-2xl sm:grid-cols-4'>
                     {statHighlights.map((stat) => (
                        <div
                           key={stat.label}
                           className='rounded-2xl border border-slate-900/10 bg-white/90 p-4 text-center shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-2 hover:border-slate-900/20 dark:border-white/5 dark:bg-white/5 dark:shadow-black/20 dark:hover:border-white/15'
                        >
                           <dt className='text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400'>
                              {stat.label}
                           </dt>
                           <dd className='mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100'>
                              {stat.value}
                           </dd>
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
                           Sprint Active
                        </span>
                        <span className='font-mono text-xs text-emerald-300'>
                           v2025.10
                        </span>
                     </div>
                     <div className='mt-6 space-y-4'>
                        {featureHighlights.map((feature) => (
                           <FeatureHighlightCard
                              key={feature.title}
                              feature={feature}
                              variant='stacked'
                           />
                        ))}
                     </div>
                     <div className='mt-6 flex items-center justify-between rounded-2xl border border-slate-900/10 bg-slate-100/80 px-4 py-3 text-xs text-slate-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300'>
                        <p className='font-mono text-emerald-500 dark:text-emerald-300'>
                           deploy vercel --prod
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
