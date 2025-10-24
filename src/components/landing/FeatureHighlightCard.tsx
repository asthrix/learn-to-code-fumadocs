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
         <div className='flex items-start gap-4 rounded-2xl border border-slate-900/10 bg-slate-50/90 p-4 transition hover:-translate-y-1 hover:border-slate-900/20 hover:bg-white dark:border-white/5 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10'>
            <Icon className='mt-1 h-5 w-5 text-sky-600 dark:text-sky-300' />
            <div>
               <p className='text-sm font-semibold text-slate-800 dark:text-slate-100'>
                  {feature.title}
               </p>
               <p className='mt-1 text-sm text-slate-500 dark:text-slate-300'>
                  {feature.description}
               </p>
            </div>
         </div>
      );
   }

   return (
      <div className='group relative overflow-hidden rounded-2xl border border-slate-900/10 bg-white/80 p-6 transition hover:-translate-y-2 hover:border-slate-900/20 hover:bg-white dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-white/25 dark:hover:bg-slate-900/80'>
         <div className='absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-500/10 transition group-hover:scale-125' />
         <Icon className='h-5 w-5 text-sky-600 dark:text-sky-300' />
         <h3 className='mt-3 text-base font-semibold text-slate-800 dark:text-slate-100'>
            {feature.title}
         </h3>
         <p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
            {feature.description}
         </p>
      </div>
   );
}
