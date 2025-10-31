import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
   "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
   {
      variants: {
         variant: {
            default: "border-transparent bg-muted text-muted-foreground",
            primary: "border-transparent bg-primary/10 text-primary",
            success: "border-transparent bg-primary/10 text-primary",
            danger: "border-transparent bg-destructive/10 text-destructive",
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
