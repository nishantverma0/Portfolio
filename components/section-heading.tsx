import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto mb-12 max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className
      )}
    >
      <Badge variant="cyan" className="mb-4">
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
