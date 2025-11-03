import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// CTAButton Component (DRY Principle)
// Reusable CTA button with multiple variants
// ============================================================================

interface CTAButtonBaseProps {
   children: ReactNode;
   variant?: "primary" | "secondary" | "outline" | "ghost";
   size?: "sm" | "md" | "lg";
   className?: string;
   showArrow?: boolean;
   disabled?: boolean;
}

interface CTAButtonAsButtonProps extends CTAButtonBaseProps {
   as?: "button";
   onClick?: () => void;
   type?: "button" | "submit" | "reset";
}

interface CTAButtonAsLinkProps extends CTAButtonBaseProps {
   as: "link";
   href: string;
}

type CTAButtonProps = CTAButtonAsButtonProps | CTAButtonAsLinkProps;

export function CTAButton({
   children,
   variant = "primary",
   size = "md",
   className,
   showArrow = false,
   disabled = false,
   ...props
}: CTAButtonProps) {
   const baseClasses = cn(
      "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      // Variants
      variant === "primary" &&
         "bg-primary text-primary-foreground shadow-[0_20px_45px_-22px_hsl(var(--color-primary)/0.65)] hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_25px_55px_-25px_hsl(var(--color-primary)/0.75)] focus-visible:ring-primary/60",
      variant === "secondary" &&
         "border border-primary/30 bg-card text-foreground hover:-translate-y-1 hover:border-primary/50 hover:bg-card/80 focus-visible:ring-primary/30",
      variant === "outline" &&
         "border-2 border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5 focus-visible:ring-primary/50",
      variant === "ghost" &&
         "bg-transparent text-foreground hover:bg-muted focus-visible:ring-primary/30",
      // Sizes
      size === "sm" && "px-4 py-2 text-xs",
      size === "md" && "px-6 py-3 text-sm",
      size === "lg" && "px-8 py-4 text-base",
      // Disabled
      disabled && "pointer-events-none opacity-50",
      className
   );

   const content = (
      <>
         <span>{children}</span>
         {showArrow && (
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
         )}
      </>
   );

   if (props.as === "link") {
      return (
         <Link href={props.href} className={baseClasses}>
            {content}
         </Link>
      );
   }

   return (
      <button
         type={props.type ?? "button"}
         onClick={props.onClick}
         disabled={disabled}
         className={baseClasses}
      >
         {content}
      </button>
   );
}

// ============================================================================
// CTA Group Component
// Reusable component for primary + secondary CTA buttons
// ============================================================================

interface CTAGroupProps {
   primaryCta: {
      label: string;
      href: string;
   };
   secondaryCta?: {
      label: string;
      href: string;
   };
   className?: string;
}

export function CTAGroup({ primaryCta, secondaryCta, className }: CTAGroupProps) {
   return (
      <div className={cn("flex flex-wrap justify-center gap-4", className)}>
         <CTAButton as="link" href={primaryCta.href} variant="primary" showArrow>
            {primaryCta.label}
         </CTAButton>
         {secondaryCta && (
            <CTAButton
               as="link"
               href={secondaryCta.href}
               variant="secondary"
               showArrow
            >
               {secondaryCta.label}
            </CTAButton>
         )}
      </div>
   );
}
