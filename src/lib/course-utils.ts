import type { Course } from "@/lib/courses";
import type { CourseStat } from "@/lib/course-page-content";

export interface CourseCounts {
   total: number;
   available: number;
   comingSoon: number;
   inDevelopment: number;
}

export function calculateCourseCounts(courses: Course[]): CourseCounts {
   return courses.reduce<CourseCounts>(
      (acc, course) => {
         acc.total += 1;

         switch (course.status) {
            case "available":
               acc.available += 1;
               break;
            case "coming-soon":
               acc.comingSoon += 1;
               break;
            case "in-development":
               acc.inDevelopment += 1;
               break;
         }

         return acc;
      },
      { total: 0, available: 0, comingSoon: 0, inDevelopment: 0 }
   );
}

export function buildCourseStats(courses: Course[]): CourseStat[] {
   const totalModules = courses.reduce((sum, course) => sum + course.modules, 0);
   const totalProjects = new Set(courses.map((course) => course.project)).size;
   const totalHours = courses.reduce((sum, course) => {
      const match = course.duration.match(/\d+/);
      return sum + (match ? Number.parseInt(match[0], 10) : 0);
   }, 0);

   const { available } = calculateCourseCounts(courses);

   return [
      {
         label: "Courses",
         value: `${courses.length}`,
         description: "Guided tracks spanning the full front-end stack.",
      },
      {
         label: "Modules",
         value: `${totalModules}`,
         description: "Focused lessons with implementation checklists.",
      },
      {
         label: "Projects shipped",
         value: `${totalProjects}`,
         description: "Portfolio builds you can deploy and share.",
      },
      {
         label: "Hours of content",
         value: `${totalHours}+`,
         description: `${available} courses ready to start today.`,
      },
   ];
}
