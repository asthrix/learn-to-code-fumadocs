import { Cpu, Rocket, Sparkles, Workflow } from "lucide-react";

import type { CourseTechnologyGroup } from "@/lib/course-detail/types";

interface CourseTechnologySectionProps {
   technology: CourseTechnologyGroup[];
}

const iconPalette = [Sparkles, Workflow, Rocket, Cpu];

export function CourseTechnologySection({
   technology,
}: CourseTechnologySectionProps) {
   const totalStacks = technology.length;
   const totalTools = technology.reduce(
      (acc, group) => acc + group.items.length,
      0,
   );

   return (
      <section className='px-4 py-16 sm:px-6 lg:px-8'>
         <div className='mx-auto max-w-6xl space-y-12'>
            {/* Header */}
            <header className=' space-y-6 text-center'>
               {/* <span className='mb-3 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                  Technology Stack
               </span> */}
               <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-primary dark:border-primary/25 dark:bg-primary/15 '>
                  Technology Stack
               </span>
               <h2 className=' text-3xl font-bold text-foreground sm:text-4xl'>
                  Tools & Technologies
               </h2>
               <p className='mx-auto max-w-2xl text-muted-foreground'>
                  Master industry-standard tools and frameworks through hands-on practice
               </p>
               
               {/* Stats */}
               <div className=' flex flex-wrap items-center justify-center gap-4 text-sm'>
                  <div className='flex items-center gap-2 text-muted-foreground'>
                     <span className='font-semibold text-foreground'>{totalStacks}</span>
                     Technology Groups
                  </div>
                  <span className='text-border'>•</span>
                  <div className='flex items-center gap-2 text-muted-foreground'>
                     <span className='font-semibold text-foreground'>{totalTools}</span>
                     Tools Covered
                  </div>
               </div>
            </header>

            {/* Technology Cards Grid */}
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
               {technology.map((group, index) => (
                  <TechnologyCard
                     key={group.title}
                     group={group}
                     icon={iconPalette[index % iconPalette.length]}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

// ============================================================================
// Technology Card Component (DRY Principle)
// ============================================================================

interface TechnologyCardProps {
   group: CourseTechnologyGroup;
   icon: React.ComponentType<{ className?: string }>;
}

function TechnologyCard({ group, icon: Icon }: TechnologyCardProps) {
   return (
      <article className='group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md'>
         {/* Header */}
         <div className='mb-4 flex items-start justify-between'>
            <div className='flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/15'>
               <Icon className='h-5 w-5' />
            </div>
            <span className='rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground'>
               {group.items.length} {group.items.length === 1 ? "tool" : "tools"}
            </span>
         </div>

         {/* Title & Description */}
         <h3 className='mb-2 text-lg font-semibold text-foreground'>
            {group.title}
         </h3>
         <p className='mb-4 text-sm text-muted-foreground'>
            Learn {group.title.toLowerCase()} through practical examples and real-world applications
         </p>

         {/* Tools List */}
         <div className='flex flex-wrap gap-2'>
            {group.items.map((item) => (
               <span
                  key={item}
                  className='inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary'
               >
                  {item}
               </span>
            ))}
         </div>
      </article>
   );
}
