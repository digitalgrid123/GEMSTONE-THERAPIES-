import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "default" | "muted" | "dark";

const toneClass: Record<SectionTone, string> = {
  default: "bg-brand-bg text-brand-text-main",
  muted: "bg-brand-surface text-brand-text-main",
  dark: "bg-brand-dark-1 text-white",
};

type SectionProps = {
  id?: string;
  tone?: SectionTone;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  /** Skip inner max-width wrapper (full-bleed children) */
  bleed?: boolean;
};

export function Section({
  id,
  tone = "default",
  className,
  innerClassName,
  bleed = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 lg:py-40 overflow-hidden", toneClass[tone], className)}
    >
      {bleed ? (
        children
      ) : (
        <div
          className={cn(
            "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
            innerClassName,
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}
