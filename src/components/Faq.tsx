"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONTENT } from "@/constants/content";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq" tone="muted" className="bg-brand-surface">
      <SectionHeader
        eyebrow="PATIENT INFORMATION"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our stone therapy and homoeopathic treatments."
      />

      <div className="max-w-4xl mx-auto space-y-4">
        {SITE_CONTENT.faq.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-brand-border rounded-sm overflow-hidden shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 md:gap-6 px-6 py-6 md:px-8 md:py-8 text-left group"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-base md:text-xl text-brand-text-main leading-tight uppercase tracking-widest font-normal group-hover:text-brand-text-muted transition-colors">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 shrink-0 text-brand-text-muted transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-500 ease-in-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-8 md:px-8 md:pb-10">
                    <div className="w-12 h-px bg-brand-border mb-6" />
                    <p className="text-brand-text-muted font-medium leading-relaxed text-sm md:text-base max-w-2xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
