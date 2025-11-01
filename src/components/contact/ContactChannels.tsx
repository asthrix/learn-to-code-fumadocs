import { ArrowUpRight } from "lucide-react";

import type { ContactChannel } from "@/lib/contact-content";

interface ContactChannelsProps {
   channels: ContactChannel[];
}

export function ContactChannels({ channels }: ContactChannelsProps) {
   if (!channels.length) {
      return null;
   }

   return (
      <section className='space-y-6'>
         <header className='space-y-2 text-center'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>Stay in touch</p>
            <h2 className='text-2xl font-semibold text-foreground sm:text-3xl'>Curated channels for deeper collaboration</h2>
            <p className='text-sm text-muted-foreground'>Choose the path that fits your request—responses land within two business days.</p>
         </header>

         <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {channels.map((channel) => {
               const Icon = channel.icon;
               return (
                  <article
                     key={channel.label}
                     className='flex h-full flex-col justify-between gap-4 rounded-2xl border border-border/70 bg-card/90 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg'
                  >
                     <div className='space-y-4'>
                        <Icon className='h-6 w-6 text-primary' aria-hidden='true' />
                        <div className='space-y-2'>
                           <h3 className='text-lg font-semibold text-foreground'>{channel.label}</h3>
                           <p className='text-sm leading-relaxed text-muted-foreground'>{channel.description}</p>
                        </div>
                     </div>
                     <a
                        href={channel.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80'
                     >
                        {channel.action}
                        <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
                     </a>
                  </article>
               );
            })}
         </div>
      </section>
   );
}
