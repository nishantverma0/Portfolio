"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const moveRing = gsap.quickTo(ring, "x", { duration: 0.42, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.42, ease: "power3.out" });

    const handlePointer = (event: PointerEvent) => {
      moveDot(event.clientX);
      moveDotY(event.clientY);
      moveRing(event.clientX);
      moveRingY(event.clientY);
    };

    const handleEnter = () => {
      gsap.to(ring, { scale: 1.7, duration: 0.25, ease: "power3.out" });
    };

    const handleLeave = () => {
      gsap.to(ring, { scale: 1, duration: 0.25, ease: "power3.out" });
    };

    window.addEventListener("pointermove", handlePointer);
    const interactive = document.querySelectorAll("a, button, input, textarea, [role='button']");
    interactive.forEach((element) => {
      element.addEventListener("pointerenter", handleEnter);
      element.addEventListener("pointerleave", handleLeave);
    });

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      interactive.forEach((element) => {
        element.removeEventListener("pointerenter", handleEnter);
        element.removeEventListener("pointerleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/30 mix-blend-screen lg:block"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(91,231,255,0.9)] lg:block"
      />
    </>
  );
}
