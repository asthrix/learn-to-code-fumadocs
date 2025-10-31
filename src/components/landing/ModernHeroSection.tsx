import Link from "next/link";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

import { featureHighlights, statHighlights } from "@/lib/home-content";

import { FeatureHighlightCard } from "./FeatureHighlightCard";

export function ModernHeroSection() {
   return (
      <section className='relative overflow-hidden'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.12),_transparent_58%)]' />
         <div className='pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl mix-blend-multiply dark:bg-primary/30 dark:mix-blend-normal' />
         <div className='pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl mix-blend-multiply dark:bg-accent/20 dark:mix-blend-normal' />

         <div className='relative mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-36'>
            <span className='inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground backdrop-blur transition hover:border-border/50'>
               <Sparkles className='h-4 w-4 text-primary' />
               Launching 2025 Curriculum
            </span>

            <div className='mt-10 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
               <div>
                  <h1 className='text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl'>
                     Build elite frontend skills with{" "}
                     <span className='text-primary'>
                        production-grade
                     </span>{" "}
                     projects.
                  </h1>
                  <p className='mt-6 max-w-xl text-lg text-muted-foreground'>
                     Learn in sprints, ship real interfaces, and document every
                     decision. Our TaskFlow Pro path mirrors the expectations of
                     modern product teams so you graduate with credibility and a
                     deployable portfolio.
                  </p>

                  <div className='mt-10 flex flex-wrap items-center gap-4'>
                     <Link
                        href='/courses'
                        className='group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_hsl(var(--color-primary)/0.4)] transition hover:-translate-y-1 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                     >
                        Explore the catalog
                        <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                     </Link>
                     <Link
                        href='/docs/react'
                        className='group inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:border-border/50 hover:bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                     >
                        Start with React track
                        <Code2 className='h-4 w-4 text-secondary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110' />
                     </Link>
                  </div>

                  <dl className='mt-14 grid grid-cols-2 gap-6 sm:max-w-2xl sm:grid-cols-4'>
                     {statHighlights.map((stat) => (
                        <div
                           key={stat.label}
                           className='rounded-2xl border border-border bg-card/90 p-4 text-center shadow-[0_8px_30px_hsl(var(--color-primary)/0.1)] backdrop-blur transition hover:-translate-y-2 hover:border-border/50'
                        >
                           <dt className='text-xs uppercase tracking-wide text-muted-foreground'>
                              {stat.label}
                           </dt>
                           <dd className='mt-2 text-2xl font-semibold text-foreground'>
                              {stat.value}
                           </dd>
                        </div>
                     ))}
                  </dl>
               </div>

               <div className='relative'>
                  <div className='pointer-events-none absolute -top-16 -right-6 h-24 w-24 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-primary/40' />
                  <div className='pointer-events-none absolute bottom-16 left-10 h-20 w-20 rounded-full bg-gradient-to-tr from-primary/40 to-accent/40 blur-2xl' />

                  <div className='group relative rounded-3xl border border-border bg-card p-6 shadow-[0_25px_60px_-25px_hsl(var(--color-primary)/0.35)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-3 hover:rotate-1'>
                     <div className='flex items-center justify-between text-sm text-muted-foreground'>
                        <span className='inline-flex items-center gap-2'>
                           <span className='h-2 w-2 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--color-primary)/0.9)]' />
                           Sprint Active
                        </span>
                        <span className='font-mono text-xs text-secondary'>
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
                     <div className='mt-6 flex items-center justify-between rounded-2xl border border-border bg-popover/80 px-4 py-3 text-xs text-muted-foreground'>
                        <p className='font-mono text-primary'>
                           deploy vercel --prod
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
