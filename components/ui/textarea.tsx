import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-36 w-full resize-none rounded-xl border border-white/10 bg-white/[0.045] px-4 py-4 text-sm text-white shadow-sm transition-colors placeholder:text-transparent focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
