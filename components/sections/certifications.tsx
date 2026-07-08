"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning across AI, backend and cloud delivery."
          description="These cards are structured to make future verified certificates easy to drop in while still presenting current learning areas cleanly."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((certification, index) => {
            const Icon = certification.icon;

            return (
              <Reveal key={certification.title} delay={index * 0.08}>
                <motion.article
                  className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge variant="outline">{certification.status}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {certification.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/44">{certification.issuer}</p>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    {certification.details}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
