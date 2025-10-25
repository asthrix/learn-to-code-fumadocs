import type { CourseTestimonial } from "@/lib/course-detail/types";

interface CourseTestimonialsSectionProps {
   testimonials: CourseTestimonial[];
}

export function CourseTestimonialsSection({
   testimonials,
}: CourseTestimonialsSectionProps) {
   return (
      <section className='relative px-6 pb-24'>
         <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/12 via-background to-background' />
         <div className='relative mx-auto max-w-6xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                  Trusted outcomes
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-foreground sm:text-4xl'>
                  Engineers shipped TaskFlow Pro and levelled up their teams
               </h2>
            </div>

            <div className='mt-12 grid gap-6 md:grid-cols-3'>
               {testimonials.map((testimonial) => (
                  <figure
                     key={`${testimonial.name}-${testimonial.company}`}
                     className='relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/95 p-6 shadow-[0_25px_60px_-35px_hsl(var(--color-primary)/0.34)] transition hover:-translate-y-2 hover:border-primary/35'
                  >
                     <blockquote className='text-sm text-muted-foreground'>
                        “{testimonial.quote}”
                     </blockquote>
                     <figcaption className='mt-6 border-t border-border pt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground'>
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
