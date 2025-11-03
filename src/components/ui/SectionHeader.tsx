import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

// ============================================================================
// Section Header Component (DRY Principle)
// Reusable header for all course detail sections with badge, title, description
// ============================================================================

interface SectionHeaderProps {
   badge?: string | ReactNode;
   badgeIcon?: ReactNode;
   title: string | ReactNode;
   description?: string | ReactNode;
   stats?: Array<{ label: string; value: string | number }>;
   align?: "left" | "center" | "right";
   className?: string;
}

export function SectionHeader({
   badge,
   badgeIcon,
   title,
   description,
   stats,
   align = "center",
   className,
}: SectionHeaderProps) {
   const alignmentClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
   };

   const itemsClasses = {
      left: "items-start",
      center: "items-center",
      right: "items-end",
   };

   return (
      <header className={cn(alignmentClasses[align], className)}>
         {/* Badge */}
         {badge && (
            <div
               className={cn(
                  "mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-primary dark:border-primary/25 dark:bg-primary/15",
                  align === "center" && "mx-auto",
                  align === "right" && "ml-auto"
               )}
            >
               {badgeIcon}
               {badge}
            </div>
         )}

         {/* Title */}
         <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
         </h2>

         {/* Description */}
         {description && (
            <p
               className={cn(
                  "text-base leading-relaxed text-muted-foreground",
                  align === "center" && "mx-auto max-w-2xl"
               )}
            >
               {description}
            </p>
         )}

         {/* Optional Stats */}
         {stats && stats.length > 0 && (
            <div
               className={cn(
                  "mt-6 flex flex-wrap gap-4 text-sm",
                  itemsClasses[align],
                  align === "center" && "justify-center"
               )}
            >
               {stats.map((stat, index) => (
                  <div key={stat.label}>
                     <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-semibold text-foreground">
                           {stat.value}
                        </span>
                        {stat.label}
                     </div>
                     {index < stats.length - 1 && (
                        <span className="ml-4 text-border">•</span>
                     )}
                  </div>
               ))}
            </div>
         )}
      </header>
   );
}
