import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, Users, BookOpen } from "lucide-react";

const features = [
   {
      icon: BookOpen,
      title: "Structured Learning Path",
      description: "Follow a clear roadmap from HTML fundamentals to production-ready React applications.",
   },
   {
      icon: Rocket,
      title: "Build Real Projects",
      description: "Ship complete applications while learning—no more tutorial hell.",
   },
   {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of developers learning and building together.",
   },
];

const stats = [
   { value: "30+", label: "Hours of Content" },
   { value: "90+", label: "Practical Lessons" },
   { value: "5K+", label: "Active Learners" },
];

export function FinalCtaSection() {
   return (
      <section className='relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8'>
         {/* Background Elements */}
         <div className='absolute inset-0 -z-10'>
            <div className='absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl' />
            <div className='absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl' />
         </div>

         <div className='mx-auto max-w-7xl'>
            {/* Main CTA Card */}
            <div className='relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/30 shadow-2xl'>
               {/* Content Container */}
               <div className='relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20'>
                  {/* Badge */}
                  <div className='mb-6 flex justify-center'>
                     <div className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary'>
                        <Sparkles className='h-4 w-4' />
                        <span>Start Your Journey Today</span>
                     </div>
                  </div>

                  {/* Heading */}
                  <div className='text-center'>
                     <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
                        Ready to Master Modern Web Development?
                     </h2>
                     <p className='mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl'>
                        Join our comprehensive learning platform and transform from beginner to professional developer with hands-on projects and expert guidance.
                     </p>
                  </div>

                  {/* CTAs */}
                  <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                     <Link
                        href='/courses'
                        className='group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl sm:w-auto'
                     >
                        Explore All Courses
                        <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
                     </Link>
                     <Link
                        href='/courses/react'
                        className='group inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-muted sm:w-auto'
                     >
                        Start with React
                        <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
                     </Link>
                  </div>

                  {/* Stats */}
                  <div className='mt-16 grid grid-cols-3 gap-6 border-t border-border pt-12'>
                     {stats.map((stat) => (
                        <div key={stat.label} className='text-center'>
                           <div className='text-3xl font-bold text-primary sm:text-4xl'>
                              {stat.value}
                           </div>
                           <div className='mt-2 text-sm text-muted-foreground sm:text-base'>
                              {stat.label}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Features Grid */}
               <div className='border-t border-border bg-muted/30 px-6 py-12 sm:px-12 lg:px-16'>
                  <div className='grid gap-8 sm:grid-cols-3'>
                     {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                           <div key={feature.title} className='flex flex-col items-center text-center sm:items-start sm:text-left'>
                              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                                 <Icon className='h-6 w-6 text-primary' />
                              </div>
                              <h3 className='text-lg font-semibold text-foreground'>
                                 {feature.title}
                              </h3>
                              <p className='mt-2 text-sm text-muted-foreground'>
                                 {feature.description}
                              </p>
                           </div>
                        );
                     })}
                  </div>
               </div>

               {/* Bottom Tagline */}
               <div className='border-t border-border bg-gradient-to-r from-primary/5 to-secondary/5 px-6 py-6'>
                  <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
                     <p className='text-sm font-medium text-muted-foreground'>
                        💡 Learn by building • 🚀 Ship real projects • 🎓 Level up your skills
                     </p>
                     <Link
                        href='/contact'
                        className='text-sm font-medium text-primary transition-colors hover:text-primary/80'
                     >
                        Have questions? Get in touch →
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
