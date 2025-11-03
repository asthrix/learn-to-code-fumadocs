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
         {/* <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.18),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.28),_transparent_55%)]' /> */}

         {/* <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,_rgba(15,23,42,0.08)_0%,_transparent_35%,_transparent_75%,_rgba(15,23,42,0.12)_100%)] dark:bg-[linear-gradient(125deg,_rgba(2,6,23,0.55)_0%,_transparent_40%,_transparent_70%,_rgba(2,6,23,0.75)_100%)]' /> */}

         {/* <div className='pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(120deg,_transparent,_transparent_32px,hsl(var(--color-primary)/0.05)_32px,hsl(var(--color-primary)/0.05)_64px)] opacity-60 dark:opacity-40' /> */}

         <div className='pointer-events-none absolute -top-28 left-[10%] h-64 w-64 rounded-full bg-primary/25 blur-3xl dark:bg-primary/30' />

         <div className='pointer-events-none absolute bottom-[10rem] right-[3%] h-[22rem] w-[22rem] rounded-full bg-secondary/40 blur-[140px] dark:bg-secondary/40' />

         <div className='relative mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-40'>
            <div className='mx-auto max-w-5xl text-center'>
               <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-primary shadow-[0_18px_45px_-28px_hsl(var(--color-primary)/0.45)] backdrop-blur dark:border-primary/25 dark:bg-primary/15 dark:text-primary'>
                  <Sparkles className='h-4 w-4 ' />
                  {hero.eyebrow}
               </span>

               <h1 className='mt-8 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl'>
                  <span className='relative bg-gradient-to-l from-primary from-0% via-50% via-primary/70  to-secondary to-80% bg-clip-text text-transparent drop-shadow-[0_0_22px_hsl(var(--color-primary)/0.95)]'>
                     {hero.title}
                  </span>
                  <span className='relative inline-flex items-center'>
                     <span className='absolute inset-y-0 left-0 right-0 rounded-full' />
                     {hero.highlight}{" "}
                  </span>
               </h1>

               <p className='mt-6 text-base text-muted-foreground sm:text-lg'>
                  {hero.description}
               </p>

               <div className='mt-9 flex flex-wrap justify-center gap-4'>
                  <Link
                     href={hero.primaryCta.href}
                     className='group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_20px_45px_-22px_hsl(var(--color-primary)/0.65)] transition duration-300 hover:-translate-y-1 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                  >
                     {hero.primaryCta.label}
                     <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
                  </Link>
                  {hero.secondaryCta && (
                     <Link
                        href={hero.secondaryCta.href}
                        className='group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/80 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
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
                        className='group relative overflow-hidden rounded-2xl border border-border bg-card/90 p-5 text-center shadow-[0_25px_55px_-40px_hsl(var(--color-primary)/0.4)] transition duration-300 hover:-translate-y-2 hover:border-secondary/45 hover:shadow-[0_35px_75px_-45px_hsl(var(--color-primary)/0.55)]'
                     >
                        <span className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100 dark:from-primary/20' />
                        <dt className='text-[10px] font-semibold uppercase tracking-[0.38em] text-muted-foreground transition-colors duration-300 group-hover:text-secondary    '>
                           {metric.label}
                        </dt>
                        <dd className='mt-3 text-3xl font-semibold text-foreground transition-colors duration-300 group-hover:text-secondary'>
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
