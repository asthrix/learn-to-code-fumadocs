import { courseFaqs } from "@/lib/course-page-content";

export function CourseFaqSection() {
   return (
      <section className='relative px-6 pb-28'>
         <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-100/40 via-transparent to-purple-100/40 dark:from-sky-900/20 dark:via-transparent dark:to-purple-900/20' />
         <div className='relative mx-auto max-w-5xl rounded-3xl border border-slate-900/10 bg-white/90 p-10 shadow-[0_25px_60px_-25px_rgba(59,130,246,0.35)] backdrop-blur-sm md:p-16 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_25px_60px_-20px_rgba(59,130,246,0.45)] dark:backdrop-blur-xl'>
            <div className='text-center'>
               <p className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'>
                  Still curious?
               </p>
               <h2 className='mt-6 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl'>
                  Frequently asked questions
               </h2>
               <p className='mt-4 text-sm text-slate-600 dark:text-slate-300'>
                  Key details about pacing, prerequisites, and how support works
                  throughout every sprint.
               </p>
            </div>

            <div className='mt-12 space-y-6'>
               {courseFaqs.map((faq) => (
                  <div
                     key={faq.question}
                     className='rounded-2xl border border-slate-900/10 bg-white/90 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-900/20 dark:border-white/10 dark:bg-white/10 dark:hover:border-white/20'
                  >
                     <h3 className='text-base font-semibold text-slate-900 dark:text-slate-100'>
                        {faq.question}
                     </h3>
                     <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                        {faq.answer}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
