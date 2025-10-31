import { featureHighlights } from "@/lib/home-content";

import { FeatureHighlightCard } from "./FeatureHighlightCard";

export function BlueprintSection() {
   return (
      <section className='relative px-6 pb-24'>
         <div className='mx-auto max-w-6xl rounded-3xl border border-border bg-card/90 p-10 shadow-[0_35px_70px_-35px_hsl(var(--color-primary)/0.3)] transition-colors backdrop-blur-sm lg:p-16 dark:shadow-[0_35px_70px_-30px_hsl(var(--color-primary)/0.35)] dark:backdrop-blur-xl'>
            <div className='grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center'>
               <div>
                  <p className='inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-primary'>
                     Battle-tested framework
                  </p>
                  <h2 className='mt-6 text-3xl font-semibold text-foreground sm:text-4xl'>
                     Every sprint ends with proof, not promises.
                  </h2>
                  <p className='mt-4 text-sm text-muted-foreground'>
                     Walk through architecture reviews, learn how to defend
                     implementation decisions, and watch recorded retrospectives
                     so you can replicate the process on the job.
                  </p>
                  <ul className='mt-6 space-y-4 text-sm text-muted-foreground'>
                     <li className='flex items-start gap-3'>
                        <span className='mt-1 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--color-primary)/0.45)]' />
                        Deployment scripts & release checklists inside every
                        module.
                     </li>
                     <li className='flex items-start gap-3'>
                        <span className='mt-1 h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_10px_hsl(var(--color-secondary)/0.45)]' />
                        Copy-paste automation for CI, analytics, and error
                        monitoring.
                     </li>
                     <li className='flex items-start gap-3'>
                        <span className='mt-1 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--color-accent)/0.45)]' />
                        Paired with validation rubrics so you can certify your
                        build.
                     </li>
                  </ul>
               </div>

               <div className='grid gap-4 sm:grid-cols-2'>
                  {featureHighlights.map((feature) => (
                     <FeatureHighlightCard
                        key={feature.title}
                        feature={feature}
                        variant='grid'
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
