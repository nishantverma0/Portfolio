"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentClasses: Record<string, string> = {
  cyan: "from-cyan-300/22 text-cyan-100 border-cyan-300/18",
  blue: "from-blue-300/22 text-blue-100 border-blue-300/18",
  violet: "from-violet-300/22 text-violet-100 border-violet-300/18",
  magenta: "from-fuchsia-300/22 text-fuchsia-100 border-fuchsia-300/18",
  emerald: "from-emerald-300/22 text-emerald-100 border-emerald-300/18",
  amber: "from-amber-300/22 text-amber-100 border-amber-300/18"
};

function SkillCard({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), {
    stiffness: 150,
    damping: 18
  });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), {
    stiffness: 150,
    damping: 18
  });
  const Icon = group.icon;

  return (
    <Reveal delay={index * 0.05}>
      <motion.article
        className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl transition-colors hover:border-white/18"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set(event.clientX - rect.left - rect.width / 2);
          y.set(event.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 transition group-hover:opacity-100" />
        <div
          className={cn(
            "mb-6 grid h-12 w-12 place-items-center rounded-2xl border bg-gradient-to-br to-transparent",
            accentClasses[group.accent]
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-white">{group.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A stack for building AI products, not just AI demos."
          description="The toolkit spans model workflows, backend systems, data layers, automation, deployment and the interfaces needed to make AI usable."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
