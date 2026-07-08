import { Network } from "lucide-react";

import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectPreview({
  project,
  compact = false
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-white/10 bg-[#080b13]",
        compact ? "aspect-[16/10]" : "aspect-[16/9]"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-75",
          project.preview.gradient
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.74),rgba(0,0,0,0.22)_48%,rgba(0,0,0,0.66))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_24%,rgba(255,255,255,0.18),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 py-1.5 text-xs text-white/80 backdrop-blur-xl">
            <Network className="h-3.5 w-3.5 text-cyan-100" />
            {project.eyebrow}
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs text-white/70">
            {project.status}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_0.72fr] md:items-end">
          <div>
            <h3 className="max-w-lg text-2xl font-semibold tracking-normal text-white md:text-4xl">
              {project.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.preview.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/72 backdrop-blur-xl"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden h-32 md:block">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />
            <div className="flex h-full items-center justify-between gap-2">
              {project.preview.nodes.map((node, index) => (
                <div
                  key={node}
                  className="relative z-10 grid min-h-14 min-w-14 place-items-center rounded-2xl border border-white/14 bg-black/30 px-3 text-center text-[11px] font-medium text-white/82 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                  style={{ transform: `translateY(${index % 2 ? 15 : -15}px)` }}
                >
                  {node}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
