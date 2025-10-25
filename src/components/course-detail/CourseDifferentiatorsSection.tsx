import type { CourseDifferentiator } from "@/lib/course-detail/types";

interface CourseDifferentiatorsSectionProps {
   differentiators: CourseDifferentiator[];
}

export function CourseDifferentiatorsSection({
   differentiators,
}: CourseDifferentiatorsSectionProps) {
   return (
      <section className='relative px-6 pb-20'>
         <div className='mx-auto max-w-6xl rounded-3xl border border-border bg-card/95 p-10 shadow-[0_25px_60px_-30px_hsl(var(--color-primary)/0.32)] backdrop-blur-sm lg:p-16'>
            <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
               <div>
                  <p className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground'>
                     Why this track
                  </p>
                  <h2 className='mt-6 text-3xl font-semibold text-foreground sm:text-4xl'>
                     Built for engineers shipping complex, collaborative apps.
                  </h2>
                  <p className='mt-4 text-sm text-muted-foreground'>
                     Every differentiator comes from production incidents and
                     retros. You get the tooling, patterns, and guardrails
                     modern teams expect on day zero.
                  </p>
               </div>

               <div className='grid gap-6 sm:grid-cols-2'>
                  {differentiators.map((item) => (
                     <div
                        key={item.title}
                        className='group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-2 hover:border-primary/35 hover:bg-card/90'
                     >
                        <item.icon className='h-5 w-5 text-primary' />
                        <h3 className='mt-4 text-base font-semibold text-foreground'>
                           {item.title}
                        </h3>
                        <p className='mt-2 text-sm text-muted-foreground'>
                           {item.description}
                        </p>
                        <div className='absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/15 transition group-hover:scale-125' />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
