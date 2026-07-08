"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/lib/data";
import { cn, scrollToSection } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-3 shadow-[0_20px_80px_rgba(0,0,0,0.36)] backdrop-blur-2xl">
        <button
          className="flex items-center gap-3 rounded-full px-2 py-1 text-left"
          onClick={() => handleNav("#home")}
          aria-label="Go to home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-semibold text-black">
            NV
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">
              {profile.name}
            </span>
            <span className="block text-xs text-muted-foreground">AI systems</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/64 transition hover:bg-white/[0.06] hover:text-white"
              onClick={() => handleNav(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <ThemeSwitch />
          <Button
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => handleNav("#contact")}
          >
            Contact
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 grid max-w-6xl gap-1 rounded-2xl border border-white/10 bg-black/80 p-2 shadow-panel backdrop-blur-2xl lg:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-left text-sm text-white/74 transition hover:bg-white/[0.08] hover:text-white"
                )}
                onClick={() => handleNav(item.href)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
