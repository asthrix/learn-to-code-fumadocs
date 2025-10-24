import { CourseHeroSection2 } from "@/components/courses/CourseHeroSection2";
import { CourseComparisonSection } from "@/components/courses/CourseComparisonSection";
import { CourseFaqSection } from "@/components/courses/CourseFaqSection";
import { LearningPathSection } from "@/components/courses/LearningPathSection";
import type { CourseStat } from "@/lib/course-page-content";
import { courses, getLearningPath } from "@/lib/courses";
import { CourseHeroSection } from "@/components/courses/CourseHeroSection";

function calculateCourseStats(): CourseStat[] {
   const totalModules = courses.reduce(
      (sum, course) => sum + course.modules,
      0
   );
   const totalProjects = new Set(courses.map((course) => course.project)).size;
   const totalHours = courses.reduce((sum, course) => {
      const match = course.duration.match(/\d+/);
      return sum + (match ? Number.parseInt(match[0], 10) : 0);
   }, 0);
   const availableCourses = courses.filter(
      (course) => course.status === "available"
   ).length;

   return [
      {
         label: "Courses",
         value: `${courses.length}`,
         description: "Tracks from HTML foundations to advanced Next.js.",
      },
      {
         label: "Modules",
         value: `${totalModules}`,
         description: "Guided lessons with implementation checklists.",
      },
      {
         label: "Projects shipped",
         value: `${totalProjects}`,
         description: "Portfolio-ready builds you deploy end-to-end.",
      },
      {
         label: "Hours available",
         value: `${totalHours}+`,
         description: `${availableCourses} courses ready to start today.`,
      },
   ];
}

export default function CoursesPage() {
   const learningPath = getLearningPath();
   const stats = calculateCourseStats();

   return (
      <main className='relative flex flex-1 flex-col bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-100'>
         <CourseHeroSection stats={stats} />
         <LearningPathSection learningPath={learningPath} />
         <CourseComparisonSection courses={courses} />
         <CourseFaqSection />
      </main>
   );
}
