import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import type { CoursePricingTier } from "@/lib/course-detail/types";

interface CoursePricingSectionProps {
   pricing: CoursePricingTier[];
}

export function CoursePricingSection({ pricing }: CoursePricingSectionProps) {
   return (
      <section className='relative px-6 pb-28'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.14),_transparent_60%)]' />
         <div className='relative mx-auto max-w-6xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                  Pricing in INR
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-foreground sm:text-4xl'>
                  Pick the engagement style that fits your sprint velocity
               </h2>
               <p className='mt-4 text-sm text-muted-foreground'>
                  All plans include TaskFlow Pro source code, updates, and
                  lifetime access to refreshed lessons.
               </p>
            </div>

            <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
               {pricing.map((tier) => (
                  <div
                     key={tier.name}
                     className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/95 p-6 shadow-[0_30px_70px_-35px_hsl(var(--color-primary)/0.34)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_85px_-42px_hsl(var(--color-primary)/0.45)] ${
                        tier.highlighted ? "ring-2 ring-secondary/60" : ""
                     }`}
                  >
                     {tier.highlighted && (
                        <span className='absolute left-6 top-6 inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-secondary-foreground'>
                           Recommended
                        </span>
                     )}

                     <div className='mt-8 flex flex-col gap-4'>
                        <div>
                           <h3 className='text-xl font-semibold text-foreground'>
                              {tier.name}
                           </h3>
                           <p className='mt-2 text-sm text-muted-foreground'>
                              {tier.description}
                           </p>
                        </div>

                        <div className='flex items-baseline gap-2 text-foreground'>
                           <span className='text-3xl font-semibold sm:text-4xl'>
                              {tier.price}
                           </span>
                           <span className='text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                              {tier.cadence}
                           </span>
                        </div>

                        <ul className='space-y-3 text-sm text-muted-foreground'>
                           {tier.features.map((feature) => (
                              <li
                                 key={feature}
                                 className='flex items-start gap-3'
                              >
                                 <CheckCircle2 className='mt-0.5 h-4 w-4 text-primary' />
                                 <span>{feature}</span>
                              </li>
                           ))}
                        </ul>

                        <Link
                           href={tier.ctaHref}
                           className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-offset-2 ${
                              tier.highlighted
                                 ? "group bg-secondary text-secondary-foreground shadow-[0_18px_45px_-25px_hsl(var(--color-secondary)/0.55)] hover:-translate-y-1 hover:bg-secondary/90 focus-visible:ring-secondary/60 focus-visible:ring-offset-background"
                                 : "group border border-border bg-card text-foreground hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:ring-primary/40 focus-visible:ring-offset-background"
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
