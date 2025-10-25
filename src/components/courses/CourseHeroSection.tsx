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
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.16),_transparent_58%)]' />
         <div className='pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl mix-blend-multiply' />
         <div className='pointer-events-none absolute -right-48 bottom-8 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl mix-blend-multiply' />

         <div className='relative mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-36'>
            <span className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground backdrop-blur transition hover:border-primary/35'>
               <BadgeIcon className='h-4 w-4 text-primary' />
               Guided learning tracks
            </span>

            <div className='mt-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
               <div>
                  <h1 className='text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl'>
                     Master frontend engineering with an immersive course
                     blueprint.
                  </h1>
                  <p className='mt-6 max-w-xl text-lg text-muted-foreground'>
                     Ship five production-grade projects while leveling up from
                     semantic HTML to full-stack React and Next.js. Every
                     milestone is paired with rubrics, retros, and automation
                     playbooks.
                  </p>

                  <div className='mt-10 flex flex-wrap items-center gap-4'>
                     <Link
                        href='/docs/react'
                        className='group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_20px_45px_-20px_hsl(var(--color-primary)/0.55)] transition hover:-translate-y-1 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                     >
                        View the TaskFlow roadmap
                        <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                     </Link>
                     <Link
                        href='/courses#learning-path'
                        className='group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                     >
                        Explore learning path
                        <Sparkles className='h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110' />
                     </Link>
                  </div>

                  <dl className='mt-14 grid grid-cols-2 gap-6 sm:max-w-2xl sm:grid-cols-4'>
                     {stats.map((stat) => (
                        <div
                           key={stat.label}
                           className='rounded-2xl border border-border bg-card/95 p-4 text-center shadow-[0_20px_45px_-25px_hsl(var(--color-primary)/0.3)] backdrop-blur transition hover:-translate-y-2 hover:border-primary/35'
                        >
                           <dt className='text-xs uppercase tracking-wide text-muted-foreground'>
                              {stat.label}
                           </dt>
                           <dd className='mt-2 text-2xl font-semibold text-foreground'>
                              {stat.value}
                           </dd>
                           <p className='mt-2 text-xs text-muted-foreground'>
                              {stat.description}
                           </p>
                        </div>
                     ))}
                  </dl>
               </div>

               <div className='relative'>
                  <div className='pointer-events-none absolute -top-16 -right-6 h-24 w-24 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-primary/40' />
                  <div className='pointer-events-none absolute bottom-16 left-10 h-20 w-20 rounded-full bg-gradient-to-tr from-primary/35 to-secondary/40 blur-2xl' />

                  <div className='group relative rounded-3xl border border-border bg-card p-6 shadow-[0_25px_60px_-25px_hsl(var(--color-primary)/0.35)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-3 hover:rotate-1'>
                     <div className='flex items-center justify-between text-sm text-muted-foreground'>
                        <span className='inline-flex items-center gap-2'>
                           <span className='h-2 w-2 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--color-primary)/0.8)]' />
                           Cohort launch · Jan 2025
                        </span>
                        <span className='font-mono text-xs text-primary'>
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
                     <div className='mt-6 flex items-center justify-between rounded-2xl border border-border bg-muted/40 px-4 py-3 text-xs text-muted-foreground'>
                        <p className='font-mono text-primary'>
                           push learning-path --sync
                        </p>
                        <div className='inline-flex items-center gap-1 text-muted-foreground'>
                           Auto QA
                           <ArrowUpRight className='h-4 w-4 text-primary transition group-hover:translate-x-1' />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
