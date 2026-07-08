"use client";

import { CheckCircle2, Cpu, GraduationCap, Terminal } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { aboutHighlights, focusAreas, timeline } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="An AI engineer focused on shipping useful intelligence."
          description="Nishant works where LLM reasoning, backend reliability, retrieval quality and clear product interfaces meet."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060811]/82 shadow-panel backdrop-blur-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
                <span className="ml-3 flex items-center gap-2 text-xs text-white/48">
                  <Terminal className="h-3.5 w-3.5" />
                  nishant.system.profile
                </span>
              </div>

              <div className="relative p-6 md:p-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-300/8 to-transparent" />
                <div className="space-y-5 font-mono text-sm leading-7 text-white/72">
                  <p>
                    <span className="text-cyan-200">const</span>{" "}
                    <span className="text-white">engineer</span>{" "}
                    <span className="text-white/36">=</span>{" "}
                    <span className="text-emerald-200">&quot;Nishant Verma&quot;</span>
                  </p>
                  <p>
                    <span className="text-cyan-200">focus</span>
                    <span className="text-white/36">:</span>{" "}
                    <span>LLM systems, RAG pipelines, LangGraph agents, FastAPI backends</span>
                  </p>
                  <p>
                    <span className="text-cyan-200">principles</span>
                    <span className="text-white/36">:</span>{" "}
                    <span>clarity, traceability, latency, reliability, measurable output</span>
                  </p>
                  <p className="text-white/46">
                    {"// The goal is not just an impressive demo. It is an AI product that can be trusted, inspected and improved."}
                  </p>
                </div>

                <div className="mt-8 grid gap-4">
                  {aboutHighlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />
                      <p className="text-sm leading-6 text-white/70">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/12 text-cyan-100">
                    <Cpu className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Current Focus</h3>
                    <p className="text-sm text-muted-foreground">Production AI workflows</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <Badge key={area} variant="secondary">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-300/12 text-violet-100">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Education and Growth</h3>
                    <p className="text-sm text-muted-foreground">Applied AI engineering path</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {timeline.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="relative flex gap-4">
                        <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/24 text-cyan-100">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-medium text-white">{item.title}</h4>
                            <span className="text-xs text-white/40">{item.label}</span>
                          </div>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
