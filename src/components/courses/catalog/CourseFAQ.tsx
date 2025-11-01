import { Accordions, Accordion } from "@/components/accordion";

import type { CourseFaqItem } from "@/lib/course-page-content";

interface CourseFAQProps {
   items: CourseFaqItem[];
}

export function CourseFAQ({ items }: CourseFAQProps) {
   if (!items || items.length === 0) {
      return null;
   }

   return (
      <section className='mx-auto w-full max-w-5xl space-y-6'>
         <header className='space-y-2 text-center'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>FAQ</p>
            <h2 className='text-2xl font-semibold text-foreground'>Common questions</h2>
         </header>

         <Accordions type='single' className='rounded-2xl border border-border/60 bg-card/70'>
            {items.map((item) => (
               <Accordion key={item.question} title={item.question}>
                  <p className='text-sm leading-relaxed text-muted-foreground'>
                     {item.answer}
                  </p>
               </Accordion>
            ))}
         </Accordions>
      </section>
   );
}
