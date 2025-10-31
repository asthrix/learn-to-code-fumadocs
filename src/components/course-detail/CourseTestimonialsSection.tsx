import { Quote } from "lucide-react";

import type { CourseTestimonial } from "@/lib/course-detail/types";

interface CourseTestimonialsSectionProps {
   testimonials: CourseTestimonial[];
}

export function CourseTestimonialsSection({
   testimonials,
}: CourseTestimonialsSectionProps) {
   return (
      <section className='px-4 py-16 sm:px-6 lg:px-8'>
         <div className='mx-auto max-w-6xl'>
            {/* Header */}
            <header className='mb-12 text-center'>
               <span className='mb-3 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                  Student Success Stories
               </span>
               <h2 className='mb-4 text-3xl font-bold text-foreground sm:text-4xl'>
                  What Our Students Say
               </h2>
               <p className='mx-auto max-w-2xl text-muted-foreground'>
                  Real feedback from developers who transformed their skills
               </p>
            </header>

            {/* Testimonials Grid */}
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
               {testimonials.map((testimonial) => (
                  <TestimonialCard
                     key={`${testimonial.name}-${testimonial.company}`}
                     testimonial={testimonial}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

// ============================================================================
// Testimonial Card Component (DRY Principle)
// ============================================================================

interface TestimonialCardProps {
   testimonial: CourseTestimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
   return (
      <article className='flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md'>
         {/* Quote Icon */}
         <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary'>
            <Quote className='h-5 w-5' />
         </div>

         {/* Testimonial Quote */}
         <blockquote className='mb-6 flex-1 text-sm text-muted-foreground'>
            "{testimonial.quote}"
         </blockquote>

         {/* Author Info */}
         <footer className='border-t border-border pt-4'>
            <p className='font-semibold text-foreground'>{testimonial.name}</p>
            <p className='text-sm text-muted-foreground'>
               {testimonial.role}
            </p>
            <p className='text-sm text-muted-foreground'>
               {testimonial.company}
            </p>
         </footer>
      </article>
   );
}
