import { cn } from "@/lib/cn";

export function btn(
  variant: "primary" | "navy" | "line" | "ghost" = "primary",
  className?: string,
) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:cursor-not-allowed disabled:opacity-50";
  const variants = {
    primary: "bg-electric-deep text-on-electric hover:bg-navy",
    navy: "bg-navy text-paper hover:bg-electric-deep",
    line: "bg-card text-navy shadow-card hover:bg-paper",
    ghost: "border border-paper/40 bg-transparent text-paper hover:bg-paper/10",
  };
  return cn(base, variants[variant], className);
}
