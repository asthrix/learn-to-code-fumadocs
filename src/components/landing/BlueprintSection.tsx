import { featureHighlights } from "@/lib/home-content";

import { FeatureHighlightCard } from "./FeatureHighlightCard";

export function BlueprintSection() {
   return (
      <section className='relative px-6 pb-24'>
         <div className='mx-auto max-w-6xl rounded-3xl border border-slate-900/10 bg-white/90 p-10 shadow-[0_35px_70px_-35px_rgba(59,130,246,0.3)] transition-colors backdrop-blur-sm lg:p-16 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_35px_70px_-30px_rgba(59,130,246,0.35)] dark:backdrop-blur-xl'>
            <div className='grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center'>
               <div>
                  <p className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-sky-600/80 dark:border-white/10 dark:bg-white/5 dark:text-sky-200/80'>
                     Battle-tested framework
                  </p>
                  <h2 className='mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl'>
                     Every sprint ends with proof, not promises.
                  </h2>
                  <p className='mt-4 text-sm text-slate-600 dark:text-slate-300'>
                     Walk through architecture reviews, learn how to defend
                     implementation decisions, and watch recorded retrospectives
                     so you can replicate the process on the job.
                  </p>
                  <ul className='mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300'>
                     <li className='flex items-start gap-3'>
                        <span className='mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.45)] dark:shadow-[0_0_10px_rgba(16,185,129,0.8)]' />
                        Deployment scripts & release checklists inside every
                        module.
                     </li>
                     <li className='flex items-start gap-3'>
                        <span className='mt-1 h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.45)] dark:shadow-[0_0_10px_rgba(56,189,248,0.8)]' />
                        Copy-paste automation for CI, analytics, and error
                        monitoring.
                     </li>
                     <li className='flex items-start gap-3'>
                        <span className='mt-1 h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.45)] dark:shadow-[0_0_10px_rgba(192,132,252,0.8)]' />
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
