import { cn } from "@/lib/utils";

import type { CourseLevelFilter } from "@/hooks/useCourseFilters";

interface CourseFiltersProps {
   value: CourseLevelFilter;
   onChange: (value: CourseLevelFilter) => void;
}

const FILTERS: { label: string; value: CourseLevelFilter }[] = [
   { label: "All", value: "all" },
   { label: "Beginner", value: "beginner" },
   { label: "Intermediate", value: "intermediate" },
   { label: "Advanced", value: "advanced" },
];

export function CourseFilters({ value, onChange }: CourseFiltersProps) {
   return (
      <div className='flex flex-wrap items-center justify-center gap-2'>
         {FILTERS.map((filter) => {
            const isActive = value === filter.value;

            return (
               <button
                  key={filter.value}
                  type='button'
                  onClick={() => onChange(filter.value)}
                  className={cn(
                     "min-w-[120px] rounded-full border px-4 py-2 text-sm font-medium transition",
                     isActive
                        ? "border-primary/40 bg-primary text-primary-foreground shadow-sm"
                        : "border-border/70 bg-card/60 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  )}
                  aria-pressed={isActive}
               >
                  {filter.label}
               </button>
            );
         })}
      </div>
   );
}
