"use client";

import Lenis from "lenis";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
      <Toaster
        richColors
        closeButton
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(5, 8, 16, 0.92)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
            backdropFilter: "blur(16px)"
          }
        }}
      />
    </ThemeProvider>
  );
}
