import type { CourseTestimonial } from "@/lib/course-detail/types";

interface CourseTestimonialsSectionProps {
   testimonials: CourseTestimonial[];
}

export function CourseTestimonialsSection({
   testimonials,
}: CourseTestimonialsSectionProps) {
   return (
      <section className='relative px-6 pb-24'>
         <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-100/40 via-white to-white dark:from-sky-900/20 dark:via-slate-950 dark:to-slate-950' />
         <div className='relative mx-auto max-w-6xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300'>
                  Trusted outcomes
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl'>
                  Engineers shipped TaskFlow Pro and levelled up their teams
               </h2>
            </div>

            <div className='mt-12 grid gap-6 md:grid-cols-3'>
               {testimonials.map((testimonial) => (
                  <figure
                     key={`${testimonial.name}-${testimonial.company}`}
                     className='relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-900/10 bg-white/95 p-6 shadow-[0_25px_60px_-35px_rgba(59,130,246,0.35)] transition hover:-translate-y-2 hover:border-slate-900/20 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_25px_60px_-30px_rgba(59,130,246,0.55)]'
                  >
                     <blockquote className='text-sm text-slate-600 dark:text-slate-300'>
                        “{testimonial.quote}”
                     </blockquote>
                     <figcaption className='mt-6 border-t border-slate-900/10 pt-4 text-xs uppercase tracking-[0.3em] text-slate-500 dark:border-white/10 dark:text-slate-400'>
                        {testimonial.name} · {testimonial.role} @{" "}
                        {testimonial.company}
                     </figcaption>
                  </figure>
               ))}
            </div>
         </div>
      </section>
   );
}
