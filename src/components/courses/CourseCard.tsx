import Link from "next/link";
import {
   Course,
   getCourseProgress,
   getPrerequisiteStatus,
} from "@/lib/courses";
import { isPrerequisitesEnabled } from "@/lib/config";

interface CourseCardProps {
   course: Course;
   showProgress?: boolean;
}

export function CourseCard({ course, showProgress = true }: CourseCardProps) {
   const progress = getCourseProgress(course.id);
   const prerequisiteStatus = getPrerequisiteStatus(course.id);
   const shouldCheckPrerequisites = isPrerequisitesEnabled();

   const getStatusBadge = () => {
      switch (course.status) {
         case "available":
            return (
               <span className='px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full'>
                  Available
               </span>
            );
         case "coming-soon":
            return (
               <span className='px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full'>
                  Coming Soon
               </span>
            );
         case "in-development":
            return (
               <span className='px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full'>
                  In Development
               </span>
            );
      }
   };

   const getDifficultyColor = () => {
      switch (course.difficulty) {
         case "beginner":
            return "text-green-600 bg-green-50 border-green-200";
         case "intermediate":
            return "text-yellow-600 bg-yellow-50 border-yellow-200";
         case "advanced":
            return "text-red-600 bg-red-50 border-red-200";
      }
   };

   // Use primary/secondary colors instead of colorful gradients
   const getCardHeaderStyles = () => {
      return "bg-primary text-primary-foreground";
   };

   const getProgressBarStyles = () => {
      return "bg-primary";
   };

   const getActionButtonStyles = () => {
      return "bg-primary hover:bg-primary/90 text-primary-foreground";
   };

   const isAccessible =
      course.status === "available" &&
      (!shouldCheckPrerequisites || prerequisiteStatus.met);

   return (
      <div className='bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border'>
         {/* Course Header */}
         <div
            className={`h-32 ${getCardHeaderStyles()} p-6 relative overflow-hidden`}
         >
            <div className='absolute top-4 right-4'>{getStatusBadge()}</div>
            <div className='flex items-center space-x-3'>
               <span className='text-4xl'>{course.icon}</span>
               <div>
                  <h3 className='text-xl font-bold'>{course.title}</h3>
                  <p className='text-sm opacity-90'>
                     {course.duration} • {course.modules} modules
                  </p>
               </div>
            </div>

            {/* Decorative shapes */}
            <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-primary-foreground opacity-10 rounded-full'></div>
            <div className='absolute -top-6 -right-12 w-32 h-32 bg-primary-foreground opacity-5 rounded-full'></div>
         </div>

         {/* Course Content */}
         <div className='p-6'>
            <p className='text-muted-foreground mb-4 line-clamp-3'>
               {course.shortDescription}
            </p>

            {/* Difficulty & Prerequisites */}
            <div className='flex items-center gap-2 mb-4'>
               <span
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${getDifficultyColor()}`}
               >
                  {course.difficulty.charAt(0).toUpperCase() +
                     course.difficulty.slice(1)}
               </span>
               {shouldCheckPrerequisites && course.prerequisites.length > 0 && (
                  <span className='text-xs text-muted-foreground'>
                     Requires: {course.prerequisites.join(", ")}
                  </span>
               )}
            </div>

            {/* Progress Bar (if applicable) */}
            {showProgress && progress > 0 && (
               <div className='mb-4'>
                  <div className='flex items-center justify-between text-sm text-muted-foreground mb-1'>
                     <span>Progress</span>
                     <span>{progress}%</span>
                  </div>
                  <div className='w-full bg-secondary rounded-full h-2'>
                     <div
                        className={`${getProgressBarStyles()} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${progress}%` }}
                     ></div>
                  </div>
               </div>
            )}

            {/* Technologies */}
            <div className='mb-4'>
               <div className='flex flex-wrap gap-2'>
                  {course.technologies.slice(0, 3).map((tech, index) => (
                     <span
                        key={index}
                        className='px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md'
                     >
                        {tech}
                     </span>
                  ))}
                  {course.technologies.length > 3 && (
                     <span className='px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md'>
                        +{course.technologies.length - 3} more
                     </span>
                  )}
               </div>
            </div>

            {/* Prerequisites Warning (only if prerequisites checking is enabled) */}
            {shouldCheckPrerequisites && !prerequisiteStatus.met && (
               <div className='mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg'>
                  <p className='text-sm text-amber-800'>
                     <span className='font-medium'>Prerequisites needed:</span>{" "}
                     Complete {prerequisiteStatus.missing.join(", ")} first
                  </p>
               </div>
            )}

            {/* Action Button */}
            <div className='flex items-center justify-between'>
               {isAccessible ? (
                  <Link
                     href={`/docs/${course.id}`}
                     className={`flex-1 inline-flex items-center justify-center px-4 py-2 ${getActionButtonStyles()} font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}
                  >
                     {progress > 0 ? "Continue Learning" : "Start Course"}
                     <svg
                        className='ml-2 w-4 h-4'
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
               ) : (
                  <button
                     disabled
                     className='flex-1 inline-flex items-center justify-center px-4 py-2 bg-muted text-muted-foreground font-medium rounded-lg cursor-not-allowed'
                  >
                     {course.status === "available"
                        ? shouldCheckPrerequisites
                           ? "Complete Prerequisites"
                           : "Course Locked"
                        : "Coming Soon"}
                  </button>
               )}
            </div>

            {/* Course Stats */}
            <div className='mt-4 pt-4 border-t border-border'>
               <div className='flex items-center justify-between text-sm text-muted-foreground'>
                  <span>🎯 {course.project}</span>
                  <span>📚 {course.modules} modules</span>
               </div>
            </div>
         </div>
      </div>
   );
}
