import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

// ============================================================================
// Section Wrapper Component (DRY Principle)
// Reusable wrapper for all course detail sections
// ============================================================================

interface SectionWrapperProps {
   children: ReactNode;
   className?: string;
   containerClassName?: string;
   withGradient?: boolean;
   gradientPosition?: "top" | "center" | "bottom";
}

export function SectionWrapper({
   children,
   className,
   containerClassName,
   withGradient = false,
   gradientPosition = "center",
}: SectionWrapperProps) {
   return (
      <section className={cn("relative px-6", className)}>
         {/* Optional gradient background */}
         {withGradient && (
            <div
               className={cn(
                  "pointer-events-none absolute inset-0",
                  gradientPosition === "top" &&
                     "bg-[radial-gradient(circle_at_top,_hsl(var(--color-primary)/0.08),_transparent_50%)]",
                  gradientPosition === "center" &&
                     "bg-[radial-gradient(circle_at_center,_hsl(var(--color-primary)/0.08),_transparent_50%)]",
                  gradientPosition === "bottom" &&
                     "bg-[radial-gradient(circle_at_bottom,_hsl(var(--color-primary)/0.08),_transparent_50%)]"
               )}
            />
         )}

         {/* Content container */}
         <div className={cn("relative mx-auto max-w-6xl", containerClassName)}>
            {children}
         </div>
      </section>
   );
}
