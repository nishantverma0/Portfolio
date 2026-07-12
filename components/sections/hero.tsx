"use client";

import {
  ArrowRight,
  Download,
  ChevronDown,
  BrainCircuit,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TypingRoles } from "@/components/animated-text";
import { MagneticButton } from "@/components/magnetic-button";
import { AILabScene } from "@/components/three/ai-lab-scene";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroMetrics, profile } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
];

export function HeroSection() {
  return (
    <section
  id="home"
  className="relative isolate flex min-h-screen lg:min-h-[105vh] items-center overflow-hidden border-b border-white/10"
>
      <AILabScene />
      <div className="container relative z-10 pt-32 pb-32 md:pt-36 md:pb-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="cyan" className="mb-5 gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                AI Engineer • Generative AI • Agentic AI
              </Badge>
            </motion.div>

            <motion.h1
              className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-8xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Nishant Verma
            </motion.h1>

            <motion.p
              className="mt-5 min-h-[2.2rem] text-2xl font-medium tracking-normal text-white/72 md:text-3xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <TypingRoles roles={profile.roles} />
            </motion.p>

            <motion.p
              className="mt-6 max-w-3xl text-pretty text-base leading-8 text-white/68 md:text-xl md:leading-9"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton>
  <Button
    variant="primary"
    size="lg"
    onClick={() => scrollToSection("#projects")}
  >
    Explore Projects
    <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
  </Button>
</MagneticButton>

<MagneticButton>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="lg">
        <Download className="mr-2 h-4 w-4" />
        Resume
        <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="start"
      sideOffset={8}
      className="w-72 rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl p-2"
    >
      <DropdownMenuItem asChild className="rounded-xl cursor-pointer">
        <a
          href="/Nishant_AI_Engineer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 py-3"
        >
          <BrainCircuit className="mt-1 h-5 w-5 text-cyan-400" />

          <div>
            <p className="font-medium text-white">
              AI Engineer Resume
            </p>

            <p className="text-xs text-zinc-400">
              Generative AI • Agentic AI • RAG • FastAPI
            </p>
          </div>
        </a>
      </DropdownMenuItem>

      <DropdownMenuItem asChild className="rounded-xl cursor-pointer">
        <a
          href="/Nishant_FullStack_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 py-3"
        >
          <Code2 className="mt-1 h-5 w-5 text-violet-400" />

          <div>
            <p className="font-medium text-white">
              Full Stack Resume
            </p>

            <p className="text-xs text-zinc-400">
              React • Next.js • Node.js • Python
            </p>
          </div>
        </a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</MagneticButton>
<MagneticButton>
  <Button
    variant="ghost"
    size="lg"
    onClick={() => scrollToSection("#contact")}
  >
    Hire Me
  </Button>
</MagneticButton>
            </motion.div>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto") ? undefined : "noreferrer"}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.42, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ml-auto max-w-sm rounded-3xl border border-white/10 bg-black/30 p-4 shadow-panel backdrop-blur-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm text-white/62">System readiness</span>
                  <span className="rounded-full bg-emerald-300/12 px-3 py-1 text-xs text-emerald-100">
                    online
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {heroMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-black/22 p-4"
                    >
                      <p className="text-2xl font-semibold text-white">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs text-white/54">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-xs leading-6 text-cyan-100/82">
                  <p>$ python main.py</p>
<p className="text-white/52">✓ FastAPI Server Started</p>
<p className="text-white/52">✓ LangGraph Agent Initialized</p>
<p className="text-white/52">✓ Vector Database Connected</p>
<p className="text-emerald-200/80">✓ AI System Ready</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
