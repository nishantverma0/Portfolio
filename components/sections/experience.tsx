"use client";

import { Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { achievements, timeline } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="A practical path through AI, backend systems and product workflows."
          description="The timeline highlights the direction that matters for recruiters: AI systems thinking, backend implementation and applied project execution."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div className="relative">
            <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300/60 via-white/12 to-transparent md:block" />
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <motion.article
                      className="relative rounded-3xl border border-white/10 bg-white/[0.055] p-6 pl-6 shadow-panel backdrop-blur-2xl md:ml-14"
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 180, damping: 20 }}
                    >
                      <span className="absolute -left-[3.25rem] top-6 hidden h-10 w-10 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 md:grid">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <Badge variant="cyan">{item.label}</Badge>
                          <h3 className="mt-4 text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>
                        <Icon className="h-6 w-6 text-white/30 md:hidden" />
                      </div>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                        {item.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.points.map((point) => (
                          <Badge key={point} variant="outline">
                            {point}
                          </Badge>
                        ))}
                      </div>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-300/12 text-amber-100">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">Achievements</h3>
                  <p className="text-sm text-muted-foreground">What the work signals</p>
                </div>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                      <h4 className="font-medium text-white">{achievement.title}</h4>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
