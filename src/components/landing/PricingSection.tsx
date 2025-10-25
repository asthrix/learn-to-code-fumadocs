import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { pricingPlans } from "@/lib/home-content";

export function PricingSection() {
   return (
      <section className='relative px-6 pb-28'>
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.14),_transparent_60%)]' />
         <div className='relative mx-auto max-w-6xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                  Pricing in INR
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-foreground sm:text-4xl'>
                  Choose the plan that matches your build cadence
               </h2>
               <p className='mt-4 text-sm text-muted-foreground sm:text-base'>
                  Invest in guided sprints, async reviews, and production
                  playbooks. All prices listed in INR and inclusive of GST.
               </p>
            </div>

            <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
               {pricingPlans.map((plan) => (
                  <div
                     key={plan.name}
                     className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/95 p-6 shadow-[0_25px_60px_-30px_hsl(var(--color-primary)/0.3)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_-38px_hsl(var(--color-primary)/0.42)] ${
                        plan.highlighted ? "ring-2 ring-primary/60" : ""
                     }`}
                  >
                     {plan.highlighted && (
                        <span className='absolute left-6 top-6 inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary'>
                           Most popular
                        </span>
                     )}

                     <div className='flex flex-col gap-4 pt-4'>
                        <div>
                           <h3 className='text-xl font-semibold text-foreground'>
                              {plan.name}
                           </h3>
                           <p className='mt-2 text-sm text-muted-foreground'>
                              {plan.description}
                           </p>
                        </div>

                        <div className='flex items-baseline gap-2 text-foreground'>
                           <span className='text-3xl font-semibold sm:text-4xl'>
                              {plan.price}
                           </span>
                           <span className='text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                              {plan.cadence}
                           </span>
                        </div>

                        <ul className='mt-2 space-y-3 text-sm text-muted-foreground'>
                           {plan.features.map((feature) => (
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
                           href={plan.ctaHref}
                           className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-offset-2 ${
                              plan.highlighted
                                 ? "group bg-primary text-primary-foreground shadow-[0_18px_45px_-25px_hsl(var(--color-primary)/0.55)] hover:-translate-y-1 hover:bg-primary/90 focus-visible:ring-primary/60 focus-visible:ring-offset-background"
                                 : "group border border-border bg-card text-foreground hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:ring-primary/40 focus-visible:ring-offset-background"
                           }`}
                        >
                           {plan.ctaLabel}
                           <ArrowUpRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </Link>
                     </div>
                  </div>
               ))}
            </div>

            <p className='mt-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground'>
               Need a custom enterprise rollout? Drop us a line and we&apos;ll
               tailor onboarding for your team.
            </p>
         </div>
      </section>
   );
}
