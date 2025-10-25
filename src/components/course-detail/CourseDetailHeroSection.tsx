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
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.28),_transparent_55%)]' />
         <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,_rgba(15,23,42,0.08)_0%,_transparent_35%,_transparent_75%,_rgba(15,23,42,0.12)_100%)] dark:bg-[linear-gradient(125deg,_rgba(2,6,23,0.55)_0%,_transparent_40%,_transparent_70%,_rgba(30,64,175,0.55)_100%)]' />
         <div className='pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(120deg,_transparent,_transparent_32px,rgba(15,23,42,0.06)_32px,rgba(15,23,42,0.06)_64px)] opacity-60 dark:opacity-40' />
         <div className='pointer-events-none absolute -top-28 left-[10%] h-64 w-64 rounded-full bg-sky-500/25 blur-3xl dark:bg-sky-500/35' />
         <div className='pointer-events-none absolute bottom-[-6rem] right-[8%] h-[22rem] w-[22rem] rounded-full bg-violet-500/25 blur-[140px] dark:bg-violet-500/35' />

         <div className='relative mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-40'>
            <div className='mx-auto max-w-5xl text-center'>
               <span className='inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-slate-600 shadow-[0_18px_45px_-28px_rgba(56,189,248,0.35)] backdrop-blur dark:border-white/15 dark:bg-white/10 dark:text-slate-300'>
                  <Sparkles className='h-4 w-4 text-sky-400 dark:text-sky-300' />
                  {hero.eyebrow}
               </span>

               <h1 className='mt-8 text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl'>
                  {hero.title}{" "}
                  <span className='relative inline-flex items-center'>
                     <span className='absolute inset-y-0 left-0 right-0 rounded-full bg-sky-500/25 blur-lg dark:bg-sky-400/25' />
                     <span className='relative bg-gradient-to-r from-sky-500/20 via-sky-400/40 to-cyan-400/20 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(56,189,248,0.45)] dark:from-sky-400 dark:via-sky-300 dark:to-cyan-200'>
                        {hero.highlight}
                     </span>
                  </span>
               </h1>

               <p className='mt-6 text-base text-slate-600 dark:text-slate-300 sm:text-lg'>
                  {hero.description}
               </p>

               <div className='mt-9 flex flex-wrap justify-center gap-4'>
                  <Link
                     href={hero.primaryCta.href}
                     className='group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_45px_-20px_rgba(56,189,248,0.6)] transition duration-300 hover:-translate-y-1 hover:bg-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-950 dark:focus-visible:ring-offset-slate-950'
                  >
                     {hero.primaryCta.label}
                     <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
                  </Link>
                  {hero.secondaryCta && (
                     <Link
                        href={hero.secondaryCta.href}
                        className='group inline-flex items-center gap-2 rounded-full border border-slate-900/25 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-slate-900/40 hover:bg-white focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20 dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-slate-950'
                     >
                        {hero.secondaryCta.label}
                        <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
                     </Link>
                  )}
               </div>

               <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                  {hero.metrics.map((metric) => (
                     <div
                        key={metric.label}
                        className='group relative overflow-hidden rounded-2xl border border-slate-900/10 bg-white/80 p-5 text-center shadow-[0_25px_55px_-40px_rgba(56,189,248,0.45)] transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_35px_75px_-45px_rgba(56,189,248,0.55)] dark:border-white/10 dark:bg-white/10 dark:shadow-[0_22px_50px_-30px_rgba(59,130,246,0.55)] dark:hover:border-sky-400/50'
                     >
                        <span className='pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/8 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100 dark:from-sky-400/15' />
                        <dt className='text-[10px] font-semibold uppercase tracking-[0.38em] text-slate-500 transition-colors duration-300 group-hover:text-sky-600 dark:text-slate-400 dark:group-hover:text-sky-300'>
                           {metric.label}
                        </dt>
                        <dd className='mt-3 text-3xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-slate-100 dark:group-hover:text-sky-300'>
                           {metric.value}
                        </dd>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
