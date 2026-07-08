"use client";

import {
  ArrowUp,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Nishant Verma
          </h3>

          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            AI Engineer specializing in Generative AI, Agentic AI,
            RAG Systems, FastAPI, LangGraph, and Production AI Applications.
          </p>

          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nishant Verma. All Rights Reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/10 transition"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/10 transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/10 transition"
          >
            <Mail className="h-4 w-4" />
          </a>

          {/* AI Resume */}
          <Button variant="secondary" asChild>
            <a
              href="/ai-engineer-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-4 w-4" />
              AI Resume
            </a>
          </Button>

          {/* Full Stack Resume */}
          <Button variant="secondary" asChild>
            <a
              href="/full-stack-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Full Stack
            </a>
          </Button>

          {/* Back to Top */}
          <Button
            variant="secondary"
            size="icon"
            onClick={() => scrollToSection("#home")}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>

        </div>
      </div>
    </footer>
  );
}