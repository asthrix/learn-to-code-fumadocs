import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

// ============================================================================
// Card Components (DRY Principle)
// Reusable card components with consistent styling
// ============================================================================

interface CardProps {
   children: ReactNode;
   className?: string;
   variant?: "default" | "outlined" | "elevated" | "interactive";
   hover?: boolean;
}

export function Card({
   children,
   className,
   variant = "default",
   hover = false,
}: CardProps) {
   return (
      <div
         className={cn(
            "rounded-2xl border bg-card",
            variant === "default" && "border-border",
            variant === "outlined" && "border-border/60",
            variant === "elevated" &&
               "border-border shadow-[0_25px_55px_-35px_hsl(var(--color-primary)/0.4)]",
            variant === "interactive" &&
               "border-border transition-all duration-300 hover:border-primary/50 hover:shadow-md",
            hover &&
               "transition-all duration-300 hover:-translate-y-2 hover:border-secondary/45 hover:shadow-[0_35px_75px_-45px_hsl(var(--color-primary)/0.55)]",
            className
         )}
      >
         {children}
      </div>
   );
}

// ============================================================================
// Feature Card Component
// Used for displaying features, differentiators, or benefits
// ============================================================================

interface FeatureCardProps {
   icon: ReactNode;
   title: string;
   description: string;
   className?: string;
   iconClassName?: string;
}

export function FeatureCard({
   icon,
   title,
   description,
   className,
   iconClassName,
}: FeatureCardProps) {
   return (
      <Card
         variant="interactive"
         className={cn("group relative overflow-hidden p-6", className)}
      >
         {/* Icon */}
         <div
            className={cn(
               "mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/15",
               iconClassName
            )}
         >
            {icon}
         </div>

         {/* Content */}
         <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
         <p className="text-sm text-muted-foreground">{description}</p>

         {/* Decorative blob */}
         <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/15 transition-transform group-hover:scale-125" />
      </Card>
   );
}

// ============================================================================
// Metric Card Component
// Used for displaying statistics or key metrics
// ============================================================================

interface MetricCardProps {
   label: string;
   value: string | number;
   className?: string;
}

export function MetricCard({ label, value, className }: MetricCardProps) {
   return (
      <Card
         hover
         className={cn(
            "group relative overflow-hidden p-5 text-center shadow-[0_25px_55px_-40px_hsl(var(--color-primary)/0.4)]",
            className
         )}
      >
         <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100 dark:from-primary/20" />
         
         <dt className="text-[10px] font-semibold uppercase tracking-[0.38em] text-muted-foreground transition-colors duration-300 group-hover:text-secondary">
            {label}
         </dt>
         <dd className="mt-3 text-3xl font-semibold text-foreground transition-colors duration-300 group-hover:text-secondary">
            {value}
         </dd>
      </Card>
   );
}

// ============================================================================
// Badge Component
// Reusable badge for tags, labels, or small info displays
// ============================================================================

interface BadgeProps {
   children: ReactNode;
   variant?: "default" | "primary" | "secondary" | "outline" | "muted";
   size?: "sm" | "md" | "lg";
   className?: string;
}

export function Badge({
   children,
   variant = "default",
   size = "md",
   className,
}: BadgeProps) {
   return (
      <span
         className={cn(
            "inline-flex items-center rounded-full font-medium",
            // Variants
            variant === "default" &&
               "border border-border bg-card text-foreground",
            variant === "primary" &&
               "border border-primary/30 bg-primary/10 text-primary",
            variant === "secondary" &&
               "bg-secondary/10 text-secondary",
            variant === "outline" &&
               "border border-border/60 bg-transparent text-muted-foreground",
            variant === "muted" &&
               "bg-muted text-muted-foreground",
            // Sizes
            size === "sm" && "px-2 py-0.5 text-xs",
            size === "md" && "px-3 py-1 text-xs",
            size === "lg" && "px-4 py-1.5 text-sm",
            className
         )}
      >
         {children}
      </span>
   );
}
