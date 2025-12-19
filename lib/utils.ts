import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clampInt(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}
