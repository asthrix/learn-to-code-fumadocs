import { CourseCard } from "@/components/courses/CourseCard";
import { courses, getLearningPath } from "@/lib/courses";

export default function CoursesPage() {
   const learningPath = getLearningPath();

   return (
      <main className='min-h-screen bg-gray-50'>
         {/* Header */}
         <section className='bg-primary text-primary-foreground py-20'>
            <div className='container mx-auto px-4'>
               <div className='text-center max-w-4xl mx-auto'>
                  <h1 className='text-5xl font-bold mb-6'>
                     Frontend Development Courses
                  </h1>
                  <p className='text-xl text-primary-foreground/80 mb-8'>
                     Master modern web development with our comprehensive,
                     project-based curriculum. From HTML basics to advanced
                     React applications.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                     <div className='bg-primary-foreground/20 px-6 py-3 rounded-lg backdrop-blur-sm'>
                        <span className='text-sm text-primary-foreground/80'>
                           Total Duration:
                        </span>
                        <div className='text-2xl font-bold'>160+ Hours</div>
                     </div>
                     <div className='bg-primary-foreground/20 px-6 py-3 rounded-lg backdrop-blur-sm'>
                        <span className='text-sm text-primary-foreground/80'>
                           Projects:
                        </span>
                        <div className='text-2xl font-bold'>5 Real Apps</div>
                     </div>
                     <div className='bg-primary-foreground/20 px-6 py-3 rounded-lg backdrop-blur-sm'>
                        <span className='text-sm text-primary-foreground/80'>
                           Modules:
                        </span>
                        <div className='text-2xl font-bold'>46 Modules</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Learning Path */}
         <section className='py-20'>
            <div className='container mx-auto px-4'>
               <div className='text-center mb-16'>
                  <h2 className='text-4xl font-bold text-foreground mb-4'>
                     Your Learning Journey
                  </h2>
                  <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                     Follow our structured learning path designed to take you
                     from beginner to professional frontend developer.
                  </p>
               </div>

               <div className='max-w-7xl mx-auto'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                     {learningPath.map((course, index) => (
                        <div key={course.id} className='relative'>
                           {/* Course Number */}
                           <div className='absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm z-10'>
                              {index + 1}
                           </div>
                           <CourseCard course={course} />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Course Comparison */}
         <section className='py-20 bg-card'>
            <div className='container mx-auto px-4'>
               <div className='text-center mb-16'>
                  <h2 className='text-4xl font-bold text-foreground mb-4'>
                     Course Comparison
                  </h2>
                  <p className='text-xl text-muted-foreground'>
                     Compare our courses to choose the right starting point for
                     your journey.
                  </p>
               </div>

               <div className='max-w-6xl mx-auto overflow-x-auto'>
                  <table className='w-full bg-card rounded-xl shadow-lg border border-border'>
                     <thead className='bg-secondary'>
                        <tr>
                           <th className='px-6 py-4 text-left text-sm font-medium text-secondary-foreground uppercase tracking-wider'>
                              Course
                           </th>
                           <th className='px-6 py-4 text-left text-sm font-medium text-secondary-foreground uppercase tracking-wider'>
                              Difficulty
                           </th>
                           <th className='px-6 py-4 text-left text-sm font-medium text-secondary-foreground uppercase tracking-wider'>
                              Duration
                           </th>
                           <th className='px-6 py-4 text-left text-sm font-medium text-secondary-foreground uppercase tracking-wider'>
                              Modules
                           </th>
                           <th className='px-6 py-4 text-left text-sm font-medium text-secondary-foreground uppercase tracking-wider'>
                              Project
                           </th>
                           <th className='px-6 py-4 text-left text-sm font-medium text-secondary-foreground uppercase tracking-wider'>
                              Status
                           </th>
                        </tr>
                     </thead>
                     <tbody className='bg-card divide-y divide-border'>
                        {courses.map((course) => (
                           <tr
                              key={course.id}
                              className='hover:bg-secondary/50'
                           >
                              <td className='px-6 py-4 whitespace-nowrap'>
                                 <div className='flex items-center'>
                                    <span className='text-2xl mr-3'>
                                       {course.icon}
                                    </span>
                                    <div>
                                       <div className='text-sm font-medium text-foreground'>
                                          {course.title}
                                       </div>
                                       <div className='text-sm text-muted-foreground'>
                                          {course.technologies
                                             .slice(0, 2)
                                             .join(", ")}
                                       </div>
                                    </div>
                                 </div>
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap'>
                                 <span
                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                       course.difficulty === "beginner"
                                          ? "bg-green-100 text-green-800"
                                          : course.difficulty === "intermediate"
                                          ? "bg-yellow-100 text-yellow-800"
                                          : "bg-red-100 text-red-800"
                                    }`}
                                 >
                                    {course.difficulty}
                                 </span>
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap text-sm text-foreground'>
                                 {course.duration}
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap text-sm text-foreground'>
                                 {course.modules} modules
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap text-sm text-muted-foreground'>
                                 {course.project}
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap'>
                                 <span
                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                       course.status === "available"
                                          ? "bg-green-100 text-green-800"
                                          : course.status === "coming-soon"
                                          ? "bg-yellow-100 text-yellow-800"
                                          : "bg-blue-100 text-blue-800"
                                    }`}
                                 >
                                    {course.status === "available"
                                       ? "Available"
                                       : course.status === "coming-soon"
                                       ? "Coming Soon"
                                       : "In Development"}
                                 </span>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section className='py-20 bg-secondary/20'>
            <div className='container mx-auto px-4'>
               <div className='text-center mb-16'>
                  <h2 className='text-4xl font-bold text-foreground mb-4'>
                     Frequently Asked Questions
                  </h2>
               </div>

               <div className='max-w-4xl mx-auto space-y-8'>
                  {[
                     {
                        question: "Do I need prior programming experience?",
                        answer:
                           "No! Our HTML course is designed for complete beginners. We start with the basics and gradually build up your skills.",
                     },
                     {
                        question:
                           "Can I skip courses if I already know the basics?",
                        answer:
                           "Yes! If you're already familiar with HTML and CSS, you can jump straight to JavaScript or React. However, we recommend reviewing the prerequisites to ensure you have the foundation needed.",
                     },
                     {
                        question:
                           "How long does it take to complete all courses?",
                        answer:
                           "The total duration is about 160 hours of content. If you study 10 hours per week, you can complete everything in about 4 months. But learn at your own pace!",
                     },
                     {
                        question: "Will I build real projects?",
                        answer:
                           "Absolutely! Each course includes a real-world project. You'll build a portfolio website, business site, task manager, and more. These projects will showcase your skills to potential employers.",
                     },
                     {
                        question:
                           "Are the courses updated with latest technologies?",
                        answer:
                           "Yes! We keep our courses updated with the latest versions and best practices. You'll learn React 18, Next.js 14, and modern JavaScript features.",
                     },
                  ].map((faq, index) => (
                     <div
                        key={index}
                        className='bg-card rounded-lg shadow-sm p-6 border border-border'
                     >
                        <h3 className='text-lg font-semibold text-foreground mb-3'>
                           {faq.question}
                        </h3>
                        <p className='text-muted-foreground'>{faq.answer}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </main>
   );
}
