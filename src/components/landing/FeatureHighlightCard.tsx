import { FeatureHighlight } from "@/lib/home-content";

interface FeatureHighlightCardProps {
   feature: FeatureHighlight;
   variant: "stacked" | "grid";
}

export function FeatureHighlightCard({
   feature,
   variant,
}: FeatureHighlightCardProps) {
   const Icon = feature.icon;

   if (variant === "stacked") {
      return (
         <div className='flex items-start gap-4 rounded-2xl border border-border bg-card/90 p-4 transition hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/10'>
            <Icon className='mt-1 h-5 w-5 text-primary' />
            <div>
               <p className='text-sm font-semibold text-foreground'>
                  {feature.title}
               </p>
               <p className='mt-1 text-sm text-muted-foreground'>
                  {feature.description}
               </p>
            </div>
         </div>
      );
   }

   return (
      <div className='group relative overflow-hidden rounded-2xl border border-border bg-card/90 p-6 transition hover:-translate-y-2 hover:border-primary/35 hover:bg-primary/10'>
         <div className='absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 transition group-hover:scale-125' />
         <Icon className='h-5 w-5 text-primary' />
         <h3 className='mt-3 text-base font-semibold text-foreground'>
            {feature.title}
         </h3>
         <p className='mt-2 text-sm text-muted-foreground'>
            {feature.description}
         </p>
      </div>
   );
}
