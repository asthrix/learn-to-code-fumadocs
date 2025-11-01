"use client";

import type { Course } from "@/lib/courses";
import type {
   CourseFaqItem,
   CourseStat,
} from "@/lib/course-page-content";
import { calculateCourseCounts } from "@/lib/course-utils";
import { useCourseFilters } from "@/hooks/useCourseFilters";

import { CourseFAQ } from "./CourseFAQ";
import { CourseGrid } from "./CourseGrid";
import { CourseHero } from "./CourseHero";
import { CourseStats } from "./CourseStats";
import { LearningPath } from "./LearningPath";

interface CourseCatalogProps {
   courses: Course[];
   stats: CourseStat[];
   learningPath: Course[];
   faqs: CourseFaqItem[];
}

export function CourseCatalog({ courses, stats, learningPath, faqs }: CourseCatalogProps) {
   const { filter, setFilter, search, setSearch, filteredCourses } =
      useCourseFilters(courses);

   const counts = calculateCourseCounts(courses);

   return (
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-16 pb-24 pt-12 sm:gap-20 sm:pt-16'>
         <CourseHero
            totalCourses={counts.total}
            availableCourses={counts.available}
            comingSoonCourses={counts.comingSoon}
            filter={filter}
            onFilterChange={setFilter}
            search={search}
            onSearchChange={setSearch}
         />

         <section className='mx-auto w-full max-w-5xl space-y-8'>
            <header className='space-y-2 text-center'>
               <p className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>Browse Courses</p>
               <h2 className='text-2xl font-semibold text-foreground'>Everything you need to master the modern web</h2>
               <p className='text-sm text-muted-foreground'>
                  Filter by level or search by topic to discover your next course.
               </p>
            </header>
            <CourseGrid courses={filteredCourses} />
         </section>

         <LearningPath courses={learningPath} />

         {stats.length > 0 && <CourseStats stats={stats} />}

         {faqs.length > 0 && <CourseFAQ items={faqs} />}
      </div>
   );
}
