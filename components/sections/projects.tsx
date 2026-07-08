"use client";

import {
  ArrowRight,
  ExternalLink,
  Github,
  Layers3,
  ListChecks,
  ShieldAlert,
  Wrench
} from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { ProjectPreview } from "@/components/project-preview";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/data";

function LinkButton({
  href,
  children,
  icon
}: {
  href?: string;
  children: ReactNode;
  icon: ReactNode;
}) {
  if (!href) {
    return (
      <Button variant="secondary" disabled>
        {icon}
        {children}
      </Button>
    );
  }

  return (
    <Button variant="secondary" asChild>
      <a href={href} target="_blank" rel="noreferrer">
        {icon}
        {children}
      </a>
    </Button>
  );
}

function DetailList({
  title,
  icon,
  items
}: {
  title: string;
  icon: ReactNode;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
      <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
        {icon}
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectModal({ project }: { project: Project }) {
  return (
    <DialogContent>
      <div className="max-h-[88vh] overflow-y-auto">
        <ProjectPreview project={project} compact />
        <div className="p-6 md:p-8">
          <DialogHeader>
            <Badge variant="cyan" className="w-fit">
              {project.status}
            </Badge>
            <DialogTitle className="text-3xl md:text-4xl">{project.title}</DialogTitle>
            <DialogDescription className="max-w-3xl text-base leading-7">
              {project.overview}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <DetailList
              title="Architecture"
              icon={<Layers3 className="h-4 w-4 text-cyan-100" />}
              items={project.architecture}
            />
            <DetailList
              title="Features"
              icon={<ListChecks className="h-4 w-4 text-emerald-100" />}
              items={project.features}
            />
            <DetailList
              title="Challenges"
              icon={<ShieldAlert className="h-4 w-4 text-amber-100" />}
              items={project.challenges}
            />
            <DetailList
              title="Build Notes"
              icon={<Wrench className="h-4 w-4 text-violet-100" />}
              items={[
                "Designed as a recruiter-friendly case study with architecture emphasis.",
                "Button states are explicit when a repository or demo is private.",
                "The system narrative is optimized for AI engineering interviews."
              ]}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={project.githubUrl} icon={<Github className="h-4 w-4" />}>
              {project.githubUrl ? "GitHub" : "Source Private"}
            </LinkButton>
            <LinkButton href={project.liveUrl} icon={<ExternalLink className="h-4 w-4" />}>
              {project.liveUrl ? "Live Demo" : "Demo Coming Soon"}
            </LinkButton>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-3 shadow-panel backdrop-blur-2xl"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        <ProjectPreview project={project} />
        <div className="p-4 md:p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="outline">{project.status}</Badge>
            <Badge variant="secondary">{project.eyebrow}</Badge>
          </div>
          <h3 className="text-2xl font-semibold tracking-normal text-white">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
            {project.overview}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="primary">
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <ProjectModal project={project} />
            </Dialog>
            <LinkButton href={project.githubUrl} icon={<Github className="h-4 w-4" />}>
              GitHub
            </LinkButton>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="AI systems presented as production case studies."
          description="Each project focuses on architecture, reliability, business value and the tradeoffs behind intelligent workflows."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
