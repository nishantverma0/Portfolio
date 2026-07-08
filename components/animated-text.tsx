"use client";

import { useEffect, useMemo, useState } from "react";

export function TypingRoles({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex] ?? "";
  const text = useMemo(
    () => currentRole.slice(0, letterIndex),
    [currentRole, letterIndex]
  );

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && letterIndex < currentRole.length) {
          setLetterIndex((value) => value + 1);
          return;
        }

        if (!isDeleting && letterIndex === currentRole.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && letterIndex > 0) {
          setLetterIndex((value) => value - 1);
          return;
        }

        setIsDeleting(false);
        setRoleIndex((value) => (value + 1) % roles.length);
      },
      isDeleting ? 35 : letterIndex === currentRole.length ? 1400 : 68
    );

    return () => window.clearTimeout(timeout);
  }, [currentRole, isDeleting, letterIndex, roles.length]);

  return (
    <span className="inline-flex min-h-[1.3em] items-center text-cyan-100">
      {text}
      <span className="ml-1 inline-block h-[1em] w-px bg-cyan-200 animate-cursor-pulse" />
    </span>
  );
}
