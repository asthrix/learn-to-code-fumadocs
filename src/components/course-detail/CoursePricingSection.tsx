import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import type { CoursePricingTier } from "@/lib/course-detail/types";

interface CoursePricingSectionProps {
   pricing: CoursePricingTier[];
}

export function CoursePricingSection({ pricing }: CoursePricingSectionProps) {
   return (
      <section className='relative px-6 pb-28'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.22),_transparent_55%)]' />
         <div className='relative mx-auto max-w-6xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'>
                  Pricing in INR
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl'>
                  Pick the engagement style that fits your sprint velocity
               </h2>
               <p className='mt-4 text-sm text-slate-600 dark:text-slate-300'>
                  All plans include TaskFlow Pro source code, updates, and
                  lifetime access to refreshed lessons.
               </p>
            </div>

            <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
               {pricing.map((tier) => (
                  <div
                     key={tier.name}
                     className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-900/10 bg-white/90 p-6 shadow-[0_30px_70px_-35px_rgba(37,99,235,0.35)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-40px_rgba(37,99,235,0.4)] dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/70 dark:via-slate-900/45 dark:to-slate-800/35 dark:shadow-[0_30px_70px_-35px_rgba(37,99,235,0.55)] ${
                        tier.highlighted
                           ? "ring-2 ring-sky-400/70 dark:ring-sky-300/70"
                           : ""
                     }`}
                  >
                     {tier.highlighted && (
                        <span className='absolute left-6 top-6 inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:bg-sky-400/10 dark:text-sky-200'>
                           Recommended
                        </span>
                     )}

                     <div className='mt-4 flex flex-col gap-4'>
                        <div>
                           <h3 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>
                              {tier.name}
                           </h3>
                           <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                              {tier.description}
                           </p>
                        </div>

                        <div className='flex items-baseline gap-2 text-slate-900 dark:text-slate-100'>
                           <span className='text-3xl font-semibold sm:text-4xl'>
                              {tier.price}
                           </span>
                           <span className='text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
                              {tier.cadence}
                           </span>
                        </div>

                        <ul className='space-y-3 text-sm text-slate-600 dark:text-slate-300'>
                           {tier.features.map((feature) => (
                              <li
                                 key={feature}
                                 className='flex items-start gap-3'
                              >
                                 <CheckCircle2 className='mt-0.5 h-4 w-4 text-emerald-500 dark:text-emerald-300' />
                                 <span>{feature}</span>
                              </li>
                           ))}
                        </ul>

                        <Link
                           href={tier.ctaHref}
                           className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-offset-2 ${
                              tier.highlighted
                                 ? "group bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/40 hover:-translate-y-1 hover:bg-sky-400 focus-visible:ring-sky-500/60 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
                                 : "group border border-slate-900/20 bg-white/80 text-slate-900 hover:-translate-y-1 hover:border-slate-900/40 hover:bg-white focus-visible:ring-slate-200/70 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20 dark:focus-visible:ring-white/50 dark:focus-visible:ring-offset-slate-950"
                           }`}
                        >
                           {tier.ctaLabel}
                           <ArrowUpRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
