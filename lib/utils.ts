import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.querySelector(id);

  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: value >= 1000 ? "compact" : "standard",
    maximumFractionDigits: 1
  }).format(value);
}
