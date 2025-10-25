import { courseFaqs } from "@/lib/course-page-content";

export function CourseFaqSection() {
   return (
      <section className='relative px-6 pb-28'>
         <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/12 via-transparent to-secondary/12' />
         <div className='relative mx-auto max-w-5xl rounded-3xl border border-border bg-card/95 p-10 shadow-[0_25px_60px_-25px_hsl(var(--color-primary)/0.32)] backdrop-blur-sm md:p-16'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                  Still curious?
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-foreground sm:text-4xl'>
                  Frequently asked questions
               </h2>
               <p className='mt-4 text-sm text-muted-foreground'>
                  Key details about pacing, prerequisites, and how support works
                  throughout every sprint.
               </p>
            </div>

            <div className='mt-12 space-y-6'>
               {courseFaqs.map((faq) => (
                  <div
                     key={faq.question}
                     className='rounded-2xl border border-border bg-card/95 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/35'
                  >
                     <h3 className='text-base font-semibold text-foreground'>
                        {faq.question}
                     </h3>
                     <p className='mt-2 text-sm text-muted-foreground'>
                        {faq.answer}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
