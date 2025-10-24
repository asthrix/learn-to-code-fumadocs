import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCtaSection() {
   return (
      <section className='relative px-6 pb-28'>
         <div className='mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-900/10 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-purple-500/10 p-10 text-center shadow-[0_25px_60px_-25px_rgba(59,130,246,0.35)] backdrop-blur-sm md:p-16 dark:border-white/10 dark:from-sky-500/20 dark:via-blue-500/20 dark:to-purple-500/20 dark:shadow-[0_25px_60px_-20px_rgba(59,130,246,0.45)] dark:backdrop-blur-xl'>
            <h2 className='text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl'>
               Ready to launch your next build?
            </h2>
            <p className='mt-4 text-base text-slate-700 md:text-lg dark:text-slate-200'>
               Join builders shipping real features every week. Start small with
               HTML, or jump into the React track and deploy TaskFlow Pro
               end-to-end.
            </p>
            <div className='mt-8 flex flex-wrap justify-center gap-4'>
               <Link
                  href='/docs/html'
                  className='group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950'
               >
                  Start with HTML Basics
                  <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
               </Link>
               <Link
                  href='/docs/react-new'
                  className='group inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-slate-900/40 hover:bg-white focus-visible:ring-2 focus-visible:ring-slate-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20 dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-slate-950'
               >
                  View the TaskFlow Pro roadmap
                  <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
               </Link>
            </div>
            <p className='mt-6 text-xs uppercase tracking-[0.3em] text-slate-700/70 dark:text-slate-200/60'>
               No fluff. Only shipping.
            </p>
         </div>
      </section>
   );
}
