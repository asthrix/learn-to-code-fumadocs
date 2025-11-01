import { cn } from "@/lib/utils";

import type { Course } from "@/lib/courses";

interface StatusBadgeProps {
   status: Course["status"];
}

const LABELS: Record<Course["status"], string> = {
   available: "Available",
   "coming-soon": "Coming Soon",
   "in-development": "In Development",
};

export function StatusBadge({ status }: StatusBadgeProps) {
   return (
      <span
         className={cn(
            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.12em]",
            status === "available" && "border-primary/40 bg-primary/10 text-primary",
            status === "coming-soon" &&
               "border-amber-400/50 bg-amber-100/30 text-amber-500 dark:border-amber-300/40 dark:bg-amber-500/20 dark:text-amber-200 animate-soft-pulse",
            status === "in-development" &&
               "border-slate-400/40 bg-slate-200/40 text-slate-600 dark:border-slate-600/60 dark:bg-slate-700/40 dark:text-slate-200"
         )}
      >
         {LABELS[status]}
      </span>
   );
}
