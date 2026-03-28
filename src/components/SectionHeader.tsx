import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  /** Large grey serif uppercase (hero-style band titles) */
  variant?: "display" | "standard";
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        align === "center" && "mx-auto max-w-5xl",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-bold tracking-[0.4em] uppercase mb-6",
            dark ? "text-brand-text-muted" : "text-brand-text-muted",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "leading-tight tracking-[0.1em] font-serif uppercase font-medium",
          "text-2xl md:text-3xl lg:text-4xl",
          dark ? "text-brand-white" : "text-brand-heading",
        )}
      >
        {title}
      </h2>

      <div
        className={cn(
          "w-16 h-px mt-8",
          align === "center" && "mx-auto",
          align === "left" && "mr-auto",
          dark ? "bg-brand-text-muted" : "bg-brand-border",
        )}
      />

      {description ? (
        <div
          className={cn(
            "mt-8 text-sm md:text-base font-medium leading-relaxed max-w-4xl",
            align === "center" && "mx-auto",
            dark ? "text-brand-text-muted" : "text-brand-text-main",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
