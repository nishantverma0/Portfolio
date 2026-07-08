import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-white text-black",
        secondary: "border-white/10 bg-white/[0.07] text-white",
        outline: "border-white/15 text-muted-foreground",
        cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
        violet: "border-violet-300/20 bg-violet-300/10 text-violet-100",
        emerald: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
        amber: "border-amber-300/20 bg-amber-300/10 text-amber-100"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
