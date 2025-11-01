"use client";

import { useMemo, useState } from "react";

import type { Course } from "@/lib/courses";

export type CourseLevelFilter = "all" | "beginner" | "intermediate" | "advanced";

interface UseCourseFiltersResult {
   filter: CourseLevelFilter;
   setFilter: (value: CourseLevelFilter) => void;
   search: string;
   setSearch: (value: string) => void;
   filteredCourses: Course[];
}

export function useCourseFilters(courses: Course[]): UseCourseFiltersResult {
   const [filter, setFilter] = useState<CourseLevelFilter>("all");
   const [search, setSearch] = useState("");

   const normalizedSearch = search.trim().toLowerCase();

   const filteredCourses = useMemo(() => {
      return courses.filter((course) => {
         const matchesFilter =
            filter === "all" || course.difficulty === filter;

         if (!matchesFilter) {
            return false;
         }

         if (!normalizedSearch) {
            return true;
         }

         const haystack = [
            course.title,
            course.shortDescription,
            course.description,
            course.project,
            ...course.technologies,
         ]
            .join(" ")
            .toLowerCase();

         return haystack.includes(normalizedSearch);
      });
   }, [courses, filter, normalizedSearch]);

   return {
      filter,
      setFilter,
      search,
      setSearch,
      filteredCourses,
   };
}
