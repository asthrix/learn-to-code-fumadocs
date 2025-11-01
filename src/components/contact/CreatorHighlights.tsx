import type { CreatorStat } from "@/lib/contact-content";

interface CreatorHighlightsProps {
   stats: CreatorStat[];
}

export function CreatorHighlights({ stats }: CreatorHighlightsProps) {
   if (!stats.length) {
      return null;
   }

   return (
      <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
         {stats.map((stat) => (
            <article
               key={stat.label}
               className='rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg'
            >
               <h3 className='text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground'>
                  {stat.label}
               </h3>
               <p className='mt-3 text-3xl font-semibold text-foreground'>{stat.value}</p>
               <p className='mt-2 text-sm text-muted-foreground'>{stat.description}</p>
            </article>
         ))}
      </section>
   );
}
