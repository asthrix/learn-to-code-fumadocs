import type { CreatorMilestone } from "@/lib/contact-content";

interface CreatorTimelineProps {
   milestones: CreatorMilestone[];
}

export function CreatorTimeline({ milestones }: CreatorTimelineProps) {
   if (!milestones.length) {
      return null;
   }

   return (
      <section className='space-y-8'>
         <header className='space-y-2'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>Experience arc</p>
            <h2 className='text-2xl font-semibold text-foreground sm:text-3xl'>Milestones shaping the curriculum</h2>
            <p className='text-sm text-muted-foreground'>A decade of design systems, engineering leadership, and learner mentorship condensed into a single learning path.</p>
         </header>

         <ol className='space-y-4'>
            {milestones.map((milestone) => (
               <li
                  key={milestone.title}
                  className='grid gap-4 rounded-xl border border-border/60 bg-card/80 p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md md:grid-cols-[160px_minmax(0,1fr)]'
               >
                  <div className='flex flex-col justify-start gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
                     <span>{milestone.period}</span>
                  </div>
                  <div className='space-y-2'>
                     <h3 className='text-lg font-semibold text-foreground'>{milestone.title}</h3>
                     <p className='text-sm leading-relaxed text-muted-foreground'>{milestone.description}</p>
                     <p className='text-sm font-medium text-primary'>{milestone.impact}</p>
                  </div>
               </li>
            ))}
         </ol>
      </section>
   );
}
