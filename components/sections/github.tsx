"use client";

import { Activity, BookOpen, Github, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { githubStats, profile } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

const statCards = [
  {
    label: "Public repositories",
    value: githubStats.repositories,
    icon: BookOpen,
    tone: "text-cyan-100"
  },
  {
    label: "Followers",
    value: githubStats.followers,
    icon: Users,
    tone: "text-violet-100"
  },
  {
    label: "Public stars",
    value: githubStats.stars,
    icon: Star,
    tone: "text-amber-100"
  },
  {
    label: "Featured repos",
    value: githubStats.publicRepos.length,
    icon: Github,
    tone: "text-emerald-100"
  }
];

function ContributionGraph() {
  const days = Array.from({ length: 154 }, (_, index) => {
    const intensity = (index * 11 + (index % 9) * 7) % 5;
    return intensity;
  });

  const colors = [
    "bg-white/[0.055]",
    "bg-cyan-300/18",
    "bg-cyan-300/32",
    "bg-blue-300/42",
    "bg-emerald-300/54"
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-panel backdrop-blur-2xl">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-white">Contribution Graph</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Public activity styled as a profile signal map.
          </p>
        </div>
        <Badge variant="cyan">GitHub</Badge>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="grid min-w-[720px] grid-flow-col grid-rows-7 gap-1">
          {days.map((intensity, index) => (
            <motion.span
              key={index}
              aria-hidden="true"
              className={`h-3 w-3 rounded-[3px] ${colors[intensity]}`}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.002, duration: 0.2 }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-white/48">
        <span>Less</span>
        {colors.map((color) => (
          <span key={color} className={`h-3 w-3 rounded-[3px] ${color}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

function LanguageBars() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-panel backdrop-blur-2xl">
      <h3 className="font-semibold text-white">Top Languages</h3>
      <div className="mt-5 space-y-4">
        {githubStats.topLanguages.map((language) => (
          <div key={language.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-white/72">{language.name}</span>
              <span className="text-white/42">{language.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${language.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GitHubSection() {
  return (
    <section id="github" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub"
          title="Public engineering signal with room to grow."
          description="The public profile currently emphasizes applied AI projects, a profile README and early-stage repositories. The portfolio frames the strongest work as architecture-focused case studies."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <Icon className={`h-5 w-5 ${stat.tone}`} />
                  </div>
                  <p className="text-4xl font-semibold text-white">
                    {formatNumber(stat.value)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <ContributionGraph />
          </Reveal>
          <Reveal delay={0.08}>
            <LanguageBars />
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl">
              <div className="mb-5 flex items-center gap-3">
                <Activity className="h-5 w-5 text-cyan-100" />
                <h3 className="font-semibold text-white">Recent Activity</h3>
              </div>
              <div className="space-y-4">
                {githubStats.recentActivity.map((activity) => (
                  <div key={activity} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-200" />
                    <p className="text-sm leading-6 text-muted-foreground">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
              <Button variant="secondary" className="mt-6" asChild>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  Open GitHub
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl">
              <h3 className="font-semibold text-white">Repositories</h3>
              <div className="mt-5 grid gap-3">
                {githubStats.publicRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="font-medium text-white group-hover:text-cyan-100">
                        {repo.name}
                      </h4>
                      <Badge variant="outline">{repo.language}</Badge>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {repo.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
