import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
   "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
   {
      variants: {
         variant: {
            default: "border-transparent bg-muted text-muted-foreground",
            primary: "border-transparent bg-fd-primary/10 text-fd-primary",
            success: "border-transparent bg-emerald-500/10 text-emerald-500",
            danger: "border-transparent bg-red-500/10 text-red-500",
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
