import { Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import type {
   CreatorCallToAction,
   CreatorProfile,
} from "@/lib/contact-content";

interface ContactHeroProps {
   profile: CreatorProfile;
   cta: CreatorCallToAction;
}

export function ContactHero({ profile, cta }: ContactHeroProps) {
   const CtaIcon = cta.icon;

   return (
      <section className='relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-[0_30px_60px_-30px_hsl(var(--color-primary)/0.4)] sm:p-12 lg:p-16'>
         <div className='pointer-events-none absolute -left-12 top-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl' aria-hidden />
         <div className='pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-secondary/15 blur-3xl' aria-hidden />

         <div className='relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between'>
            <div className='max-w-2xl space-y-6 text-left'>
               <span className='inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground'>
                  {profile.role}
               </span>
               <div className='space-y-4'>
                  <h1 className='text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl'>
                     {profile.name}
                  </h1>
                  <p className='text-lg text-muted-foreground'>{profile.tagline}</p>
                  <p className='text-sm text-muted-foreground/90'>{profile.summary}</p>
               </div>

               <div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
                  <span className='inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1.5'>
                     <MapPin className='h-4 w-4 text-primary' aria-hidden='true' />
                     {profile.location}
                  </span>
                  <span className='inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1.5'>
                     <Clock className='h-4 w-4 text-primary' aria-hidden='true' />
                     {profile.timezone}
                  </span>
               </div>

               <p className='text-sm text-muted-foreground'>{profile.availability}</p>

               <div className='flex flex-col gap-2'>
                  <Button
                     asChild
                     className='inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:shadow-md'
                  >
                     <a href={cta.href} target='_blank' rel='noopener noreferrer'>
                        <CtaIcon className='h-4 w-4' aria-hidden='true' />
                        {cta.label}
                     </a>
                  </Button>
                  <span className='text-xs text-muted-foreground'>{cta.note}</span>
               </div>
            </div>

            <aside className='max-w-md rounded-3xl border border-border/60 bg-card/90 p-6 shadow-lg backdrop-blur sm:p-8'>
               <h2 className='text-lg font-semibold text-foreground'>Why I teach</h2>
               <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                  {profile.mission}
               </p>
            </aside>
         </div>
      </section>
   );
}
