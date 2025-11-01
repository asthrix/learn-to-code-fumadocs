import type { CreatorValue } from "@/lib/contact-content";

interface CreatorValuesProps {
   values: CreatorValue[];
}

export function CreatorValues({ values }: CreatorValuesProps) {
   if (!values.length) {
      return null;
   }

   return (
      <section className='space-y-8'>
         <header className='space-y-2 text-center'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>Teaching Philosophy</p>
            <h2 className='text-2xl font-semibold text-foreground sm:text-3xl'>Principles that shape every module</h2>
            <p className='text-sm text-muted-foreground'>These foundations keep each curriculum iteration grounded in real-world engineering impact.</p>
         </header>
         <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {values.map((value) => {
               const Icon = value.icon;
               return (
                  <article
                     key={value.title}
                     className='flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card/85 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg'
                  >
                     <Icon className='h-10 w-10 text-primary' aria-hidden='true' />
                     <div className='space-y-2'>
                        <h3 className='text-lg font-semibold text-foreground'>{value.title}</h3>
                        <p className='text-sm leading-relaxed text-muted-foreground'>{value.description}</p>
                     </div>
                  </article>
               );
            })}
         </div>
      </section>
   );
}
