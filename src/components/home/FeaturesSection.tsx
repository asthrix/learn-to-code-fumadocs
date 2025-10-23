export function FeaturesSection() {
   const features = [
      {
         icon: "🎯",
         title: "Project-Based Learning",
         description:
            "Build real applications while learning. Each course includes a complete project that you can showcase in your portfolio.",
      },
      {
         icon: "⚡",
         title: "Modern Technologies",
         description:
            "Learn the latest web technologies including React 18, Next.js 14, and modern JavaScript ES2024 features.",
      },
      {
         icon: "🏗️",
         title: "Production-Ready Code",
         description:
            "Master industry best practices, testing, deployment, and optimization techniques used in real companies.",
      },
      {
         icon: "📈",
         title: "Progressive Learning",
         description:
            "Start from basics and gradually build advanced skills with our carefully structured learning path.",
      },
      {
         icon: "🎨",
         title: "Beautiful UI/UX",
         description:
            "Learn to create stunning, responsive interfaces with modern CSS, animations, and design principles.",
      },
      {
         icon: "🚀",
         title: "Career Ready",
         description:
            "Build a professional portfolio and gain the skills needed to land your dream frontend developer job.",
      },
   ];

   return (
      <section className='py-20 bg-background'>
         <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
               <h2 className='text-4xl font-bold text-foreground mb-4'>
                  Why Choose Our Platform?
               </h2>
               <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                  We believe in learning by doing. Our courses are designed to
                  give you practical, real-world experience that employers
                  value.
               </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className='group bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20'
                  >
                     <div className='w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                        <span className='text-3xl'>{feature.icon}</span>
                     </div>

                     <h3 className='text-xl font-bold text-foreground mb-3'>
                        {feature.title}
                     </h3>

                     <p className='text-muted-foreground leading-relaxed'>
                        {feature.description}
                     </p>
                  </div>
               ))}
            </div>

            {/* Learning Path Visualization */}
            <div className='mt-20'>
               <div className='text-center mb-12'>
                  <h3 className='text-3xl font-bold text-foreground mb-4'>
                     Your Learning Journey
                  </h3>
                  <p className='text-lg text-muted-foreground'>
                     Follow our structured path from beginner to professional
                     developer
                  </p>
               </div>

               <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-6xl mx-auto'>
                  {[
                     { name: "HTML", icon: "🌐" },
                     { name: "CSS", icon: "🎨" },
                     { name: "JavaScript", icon: "⚡" },
                     { name: "React", icon: "⚛️" },
                     { name: "Next.js", icon: "🚀" },
                  ].map((step, index) => (
                     <div key={index} className='flex items-center'>
                        <div className='text-center'>
                           <div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-lg'>
                              {step.icon}
                           </div>
                           <p className='mt-3 font-semibold text-foreground'>
                              {step.name}
                           </p>
                        </div>

                        {index < 4 && (
                           <div className='hidden md:block mx-4'>
                              <svg
                                 className='w-8 h-8 text-muted-foreground'
                                 fill='none'
                                 stroke='currentColor'
                                 viewBox='0 0 24 24'
                              >
                                 <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                 />
                              </svg>
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
