import Link from "next/link";
import { CourseCard } from "@/components/courses/CourseCard";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { courses } from "@/lib/courses";

export default function HomePage() {
   return (
      <main className='flex flex-1 flex-col'>
         {/* Hero Section */}
         <HeroSection />

         {/* Featured Courses */}
         <section className='py-20 bg-gradient-to-b from-gray-50 to-white'>
            <div className='container mx-auto px-4'>
               <div className='text-center mb-16'>
                  <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                     Master Frontend Development
                  </h2>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     Learn modern web development with our comprehensive,
                     project-based courses. From HTML fundamentals to advanced
                     React applications.
                  </p>
               </div>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                  {courses.map((course) => (
                     <CourseCard key={course.id} course={course} />
                  ))}
               </div>

               <div className='text-center mt-12'>
                  <Link
                     href='/courses'
                     className='inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'
                  >
                     View All Courses
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
                           d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                     </svg>
                  </Link>
               </div>
            </div>
         </section>

         {/* Features Section */}
         <FeaturesSection />

         {/* CTA Section */}
         <section className='py-20 bg-blue-600'>
            <div className='container mx-auto px-4 text-center'>
               <h2 className='text-4xl font-bold text-white mb-4'>
                  Ready to Start Your Journey?
               </h2>
               <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                  Join thousands of developers who have mastered frontend
                  development with our hands-on approach.
               </p>
               <Link
                  href='/docs/html'
                  className='inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors'
               >
                  Start with HTML Basics
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
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                     />
                  </svg>
               </Link>
            </div>
         </section>
      </main>
   );
}
