import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { pricingPlans } from "@/lib/home-content";
import { AnimatedBlob } from "@/components/ui/AnimatedBlob";

export function PricingSection() {
   return (
      <section className='relative px-6 py-24'>
         {/* Subtle gradient background */}
         <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.08),_transparent_50%)]' />
         
         <div className='relative mx-auto max-w-7xl'>
            {/* Header */}
            <div className='mx-auto max-w-2xl text-center'>
               <div className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm'>
                  💰 Pricing in INR (GST Included)
               </div>
               <h2 className='mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl'>
                  Simple, transparent pricing
               </h2>
               <p className='mt-4 text-base leading-relaxed text-muted-foreground'>
                  Choose the plan that fits your learning journey. All courses include lifetime access and updates.
               </p>
            </div>

            {/* Pricing Cards */}
            <div className='mt-16 grid gap-8 lg:grid-cols-3'>
               {pricingPlans.map((plan) => (
                  <div
                     key={plan.name}
                     className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 ${
                        plan.highlighted
                           ? "border-primary/50 shadow-[0_20px_50px_-20px_hsl(var(--color-primary)/0.3)]"
                           : "border-border hover:border-primary/30 hover:shadow-lg"
                     }`}
                  >
                     {/* Animated background for highlighted plan */}
                     {plan.highlighted && <AnimatedBlob />}

                     {/* Popular badge */}
                     {plan.highlighted && (
                        <div className='absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground'>
                           Most Popular
                        </div>
                     )}

                     {/* Card Content */}
                     <div className='relative flex flex-col p-8'>
                        {/* Plan name & description */}
                        <div className='mb-6'>
                           <h3 className='text-xl font-bold text-foreground'>
                              {plan.name}
                           </h3>
                           <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                              {plan.description}
                           </p>
                        </div>

                        {/* Price */}
                        <div className='mb-8 flex items-baseline gap-2'>
                           <span className='text-5xl font-bold tracking-tight text-foreground'>
                              {plan.price}
                           </span>
                           <span className='text-sm font-medium text-muted-foreground'>
                              {plan.cadence}
                           </span>
                        </div>

                        {/* CTA Button */}
                        <Link
                           href={plan.ctaHref}
                           className={`group/btn mb-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                              plan.highlighted
                                 ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:ring-primary"
                                 : "border-2 border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5 focus-visible:ring-primary/50"
                           }`}
                        >
                           <span>{plan.ctaLabel}</span>
                           <ArrowRight className='h-4 w-4 transition-transform group-hover/btn:translate-x-1' />
                        </Link>

                        {/* Divider */}
                        <div className='mb-6 h-px bg-border' />

                        {/* Features */}
                        <div className='space-y-4'>
                           <p className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                              What&apos;s included
                           </p>
                           <ul className='space-y-3'>
                              {plan.features.map((feature) => (
                                 <li
                                    key={feature}
                                    className='flex items-start gap-3 text-sm'
                                 >
                                    <Check className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                                    <span className='text-muted-foreground'>
                                       {feature}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Footer note */}
            <div className='mt-16 text-center'>
               <p className='text-sm text-muted-foreground'>
                  Need a custom enterprise solution?{" "}
                  <Link
                     href='/contact'
                     className='font-semibold text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary'
                  >
                     Get in touch
                  </Link>{" "}
                  for tailored onboarding for your team.
               </p>
            </div>
         </div>
      </section>
   );
}
