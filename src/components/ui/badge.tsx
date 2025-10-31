import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
   "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
   {
      variants: {
         variant: {
            default: "border-border border-muted bg-muted text-muted-foreground",
            primary: "border-border border-primary bg-primary/20 text-primary",
            success: "border-border border-green-500 bg-green-500/20 text-green-500",
            warning: "border-border border-orange-400 bg-orange-400/20 text-orange-400",
            danger: "border-border border-destructive bg-destructive/20 text-destructive",
         },
      },
      defaultVariants: {
         variant: "default",
      },
   }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
   VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
   return (
      <span className={cn(badgeVariants({ variant }), className)} {...props} />
   );
}
