import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Accordions, Accordion } from "@/components/accordion";

const ctaHighlights = [
   {
      id: "cta-path-start",
      title: "Where should I begin?",
      content:
         "Kick off with the HTML track if you are brand new to front-end work. Already comfortable with markup? Jump straight into the React pathway and follow the guided checklists.",
   },
   {
      id: "cta-what-you-ship",
      title: "What will I ship?",
      content:
         "Every module advances a feature of TaskFlow Pro—from foundational layouts to full-stack workflows. Expect tangible progress and a production-ready deployment by the end.",
   },
   {
      id: "cta-support",
      title: "How do I stay unblocked?",
      content:
         "Each lesson includes validation checklists, and the built-in Fumadocs navigation keeps you oriented. Bring questions to the community channel when you need a nudge.",
   },
];

export function FinalCtaSection() {
   return (
      <section className='relative px-6 pb-28'>
         <div className='mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/15 p-10 text-center shadow-[0_25px_60px_-25px_hsl(var(--color-primary)/0.35)] backdrop-blur-sm md:p-16'>
            <h2 className='text-3xl font-semibold text-foreground sm:text-4xl'>
               Ready to launch your next build?
            </h2>
            <p className='mt-4 text-base text-muted-foreground md:text-lg'>
               Join builders shipping real features every week. Start small with
               HTML, or jump into the React track and deploy TaskFlow Pro
               end-to-end.
            </p>
            <div className='mt-8 flex flex-wrap justify-center gap-4'>
               <Link
                  href='/docs/html'
                  className='group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-1 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
               >
                  Start with HTML Basics
                  <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
               </Link>
               <Link
                  href='/docs/react'
                  className='group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
               >
                  View the TaskFlow Pro roadmap
                  <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
               </Link>
            </div>
            <Accordions
               type='single'
               className='mt-10 text-left border border-border bg-card/90'
            >
               {ctaHighlights.map((item) => (
                  <Accordion key={item.id} title={item.title} id={item.id}>
                     <p className='text-sm leading-relaxed text-muted-foreground'>
                        {item.content}
                     </p>
                  </Accordion>
               ))}
            </Accordions>
            <p className='mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground'>
               No fluff. Only shipping.
            </p>
         </div>
      </section>
   );
}
