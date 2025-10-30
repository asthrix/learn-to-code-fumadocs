import Link from "next/link";

export function HeroSection() {
   return (
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden'>
         {/* Background Pattern */}
         <div className='absolute inset-0 bg-background/20 dark:bg-foreground/10'></div>
         <div
            className='absolute inset-0'
            style={{
               backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--color-foreground) / 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, hsl(var(--color-foreground) / 0.05) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, hsl(var(--color-foreground) / 0.08) 0%, transparent 50%)`,
            }}
         ></div>

         {/* Floating Elements */}
         <div className='absolute top-20 left-20 w-72 h-72 bg-primary-foreground/10 dark:bg-foreground/5 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-blob'></div>
         <div className='absolute top-40 right-20 w-72 h-72 bg-secondary/20 dark:bg-secondary/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
         <div className='absolute -bottom-8 left-40 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>

         {/* Content */}
         <div className='relative z-10 text-center px-4 max-w-6xl mx-auto'>
            <div className='mb-8'>
               <span className='inline-block px-4 py-2 bg-primary-foreground/20 dark:bg-foreground/20 text-primary-foreground dark:text-foreground text-sm font-medium rounded-full mb-4 backdrop-blur-sm'>
                  🚀 Master Frontend Development
               </span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold text-primary-foreground dark:text-foreground mb-6 leading-tight'>
               Learn to Code the
               <span className='block bg-gradient-to-r from-accent via-accent/80 to-secondary bg-clip-text text-transparent'>
                  Modern Web
               </span>
            </h1>

            <p className='text-xl md:text-2xl text-primary-foreground/80 dark:text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed'>
               Master HTML, CSS, JavaScript, React, and Next.js through hands-on
               projects. Build real applications while learning industry best
               practices.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
               <Link
                  href='/docs/html'
                  className='inline-flex items-center px-8 py-4 bg-primary-foreground dark:bg-card text-primary dark:text-foreground font-bold rounded-lg hover:bg-primary-foreground/90 dark:hover:bg-card/90 transform hover:scale-105 transition-all duration-200 shadow-lg'
               >
                  Start Learning
                  <svg
                     className='ml-2 w-5 h-5'
                     fill='none'
                     stroke='currentColor'
                     viewBox='0 0 24 24'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 7l5 5m0 0l-5 5m5-5H6'
                     />
                  </svg>
               </Link>

               <Link
                  href='/courses'
                  className='inline-flex items-center px-8 py-4 border-2 border-primary-foreground dark:border-border text-primary-foreground dark:text-foreground font-bold rounded-lg hover:bg-primary-foreground dark:hover:bg-card hover:text-primary dark:hover:text-foreground transition-all duration-200'
               >
                  Browse Courses
                  <svg
                     className='ml-2 w-5 h-5'
                     fill='none'
                     stroke='currentColor'
                     viewBox='0 0 24 24'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                     />
                  </svg>
               </Link>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
               <div className='text-center'>
                  <div className='text-3xl font-bold text-primary-foreground dark:text-foreground mb-2'>
                     5
                  </div>
                  <div className='text-primary-foreground/70 dark:text-muted-foreground text-sm'>
                     Comprehensive Courses
                  </div>
               </div>
               <div className='text-center'>
                  <div className='text-3xl font-bold text-primary-foreground dark:text-foreground mb-2'>
                     100+
                  </div>
                  <div className='text-primary-foreground/70 dark:text-muted-foreground text-sm'>
                     Hands-on Lessons
                  </div>
               </div>
               <div className='text-center'>
                  <div className='text-3xl font-bold text-primary-foreground dark:text-foreground mb-2'>
                     5
                  </div>
                  <div className='text-primary-foreground/70 dark:text-muted-foreground text-sm'>
                     Real Projects
                  </div>
               </div>
               <div className='text-center'>
                  <div className='text-3xl font-bold text-primary-foreground dark:text-foreground mb-2'>
                     ∞
                  </div>
                  <div className='text-primary-foreground/70 dark:text-muted-foreground text-sm'>
                     Lifetime Access
                  </div>
               </div>
            </div>
         </div>

         {/* Scroll Indicator */}
         <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground dark:text-foreground animate-bounce'>
            <svg
               className='w-6 h-6'
               fill='none'
               stroke='currentColor'
               viewBox='0 0 24 24'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
               />
            </svg>
         </div>
      </section>
   );
}
