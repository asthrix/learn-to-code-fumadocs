import { Button } from "@/components/ui/button";

export function ContactForm() {
   return (
      <section className='grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start'>
         <div className='rounded-3xl border border-border/70 bg-card/90 p-6 shadow-[0_20px_45px_-25px_hsl(var(--color-primary)/0.35)] sm:p-8'>
            <header className='space-y-2'>
               <p className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>Start a conversation</p>
               <h2 className='text-2xl font-semibold text-foreground'>Tell me about your learners or team</h2>
               <p className='text-sm text-muted-foreground'>Share context for your curriculum goals. You’ll receive a tailored response with next steps within two business days.</p>
            </header>

            <form
               action='mailto:vj.developer15@gmail.com'
               method='post'
               encType='text/plain'
               className='mt-8 space-y-6'
            >
               <div className='grid gap-4 sm:grid-cols-2'>
                  <label className='space-y-2 text-sm font-medium text-foreground'>
                     Full name
                     <input
                        type='text'
                        name='name'
                        required
                        autoComplete='name'
                        placeholder='Who should I address?'
                        className='w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30'
                     />
                  </label>
                  <label className='space-y-2 text-sm font-medium text-foreground'>
                     Work email
                     <input
                        type='email'
                        name='email'
                        required
                        autoComplete='email'
                        placeholder='you@company.com'
                        className='w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30'
                     />
                  </label>
               </div>
               <label className='space-y-2 text-sm font-medium text-foreground'>
                  What are you working on?
                  <textarea
                     name='message'
                     rows={5}
                     placeholder='Share goals, timelines, or cohort details. Feel free to include links.'
                     className='w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30'
                     required
                  />
               </label>
               <div className='flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground'>
                  <span>
                     By submitting, you consent to a follow-up email with tailored recommendations.
                  </span>
                  <Button type='submit' className='rounded-full px-6 py-2 text-sm font-semibold shadow-sm transition hover:shadow-md'>
                     Share context
                  </Button>
               </div>
            </form>
         </div>

         <aside className='rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8'>
            <h3 className='text-lg font-semibold text-foreground'>Prefer async?</h3>
            <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>Record a short audio memo or drop a Notion page describing your cohort goals. I’ll respond with annotated suggestions and a tailored timeline.</p>
            <div className='mt-6 flex flex-col gap-3 text-sm'>
               <a
                  href='https://www.notion.so/templates/roadmap'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-primary transition hover:text-primary/80'
               >
                  Share a Notion roadmap
               </a>
               <a
                  href='mailto:vj.developer15@gmail.com?subject=Curriculum%20voice%20note&body=Link%20your%20audio%20memo%20or%20outline%20here.'
                  className='inline-flex items-center gap-2 text-primary transition hover:text-primary/80'
               >
                  Send an audio memo link
               </a>
            </div>
         </aside>
      </section>
   );
}
