import Link from "next/link";

import type { CourseLevelFilter } from "@/hooks/useCourseFilters";

import { CourseFilters } from "./CourseFilters";
import { CourseSearch } from "./CourseSearch";

interface CourseHeroProps {
   totalCourses: number;
   availableCourses: number;
   comingSoonCourses: number;
   filter: CourseLevelFilter;
   onFilterChange: (value: CourseLevelFilter) => void;
   search: string;
   onSearchChange: (value: string) => void;
}

export function CourseHero({
   totalCourses,
   availableCourses,
   comingSoonCourses,
   filter,
   onFilterChange,
   search,
   onSearchChange,
}: CourseHeroProps) {
   return (
      <section className='mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center'>
         <nav className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
            <Link href='/' className='text-muted-foreground transition hover:text-foreground'>
               Home
            </Link>
            <span className='mx-2 text-muted-foreground'>/</span>
            <span className='text-foreground'>Courses</span>
         </nav>

         <div className='max-w-2xl space-y-4'>
            <h1 className='text-3xl font-semibold text-foreground sm:text-4xl'>Start Learning</h1>
            <p className='text-sm text-muted-foreground sm:text-base'>
               Explore guided paths from HTML fundamentals to production-ready React and Next.js. Search and filter to find the next skill to unlock.
            </p>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80'>
               {availableCourses} Available · {comingSoonCourses} Coming Soon · {totalCourses} Total
            </p>
         </div>

         <div className='flex w-full flex-col items-center gap-4'>
            <CourseSearch value={search} onChange={onSearchChange} />
            <CourseFilters value={filter} onChange={onFilterChange} />
         </div>
      </section>
   );
}
