"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black shadow-[0_0_32px_rgba(255,255,255,0.18)] hover:bg-white/90",
        primary:
          "border border-white/15 bg-white text-black shadow-[0_18px_60px_rgba(91,231,255,0.18)] hover:-translate-y-0.5 hover:bg-white/90",
        secondary:
          "border border-white/12 bg-white/[0.07] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.12]",
        ghost: "text-muted-foreground hover:bg-white/[0.06] hover:text-white",
        link: "h-auto rounded-none p-0 text-lab-cyan underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-[52px] px-7 text-base",
        icon: "h-10 w-10 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
