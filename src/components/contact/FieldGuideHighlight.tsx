import { ArrowUpRight } from "lucide-react";

import type { FieldGuideHighlight } from "@/lib/contact-content";

interface FieldGuideHighlightProps {
   highlight: FieldGuideHighlight;
}

export function FieldGuideHighlight({ highlight }: FieldGuideHighlightProps) {
   const Icon = highlight.icon;

   return (
      <section className='rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 via-background to-background p-6 shadow-[0_25px_55px_-25px_hsl(var(--color-primary)/0.4)] sm:p-10'>
         <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex items-start gap-4 text-left'>
               <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 text-primary shadow-inner'>
                  <Icon className='h-6 w-6' aria-hidden='true' />
               </span>
               <div className='max-w-2xl space-y-2'>
                  <p className='text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground'>{highlight.label}</p>
                  <p className='text-sm text-muted-foreground'>{highlight.description}</p>
               </div>
            </div>
            <a
               href={highlight.href}
               target='_blank'
               rel='noopener noreferrer'
               className='inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80'
            >
               {highlight.action}
               <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
            </a>
         </div>
      </section>
   );
}
