"use client";

import Image from "next/image";
import { SITE_CONTENT } from "@/constants/content";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function ProductDetails() {
  return (
    <div id="products">
      {SITE_CONTENT.sections.map((section, idx) => (
        <Section
          key={section.id}
          id={section.id}
          tone={idx % 2 === 0 ? "default" : "muted"}
        >
          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
              idx % 2 === 1 ? "lg:flex-row-reverse" : "",
            )}
          >
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={cn(
                "space-y-10",
                idx % 2 === 1 ? "lg:order-2" : "lg:order-1",
              )}
            >
              <div className="space-y-6">
                <h3 className="text-brand-text-muted font-bold tracking-[0.4em] uppercase text-xs">
                  Technology Pillar {idx + 1}
                </h3>
                <h2 className="text-2xl md:text-3xl font-serif text-brand-heading leading-tight tracking-[0.2em] uppercase font-normal">
                  {section.heading}
                </h2>
                <div className="w-12 h-px bg-brand-border" />
              </div>
              <p className="text-brand-text-main text-base font-medium leading-relaxed max-w-lg">
                {section.text}
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("locations")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 text-brand-text-main font-bold tracking-widest uppercase text-xs group border-b border-brand-border pb-2 hover:border-brand-text-main transition-colors"
              >
                Learn More{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={cn(
                "relative aspect-4/3 rounded-sm overflow-hidden shadow-sm",
                idx % 2 === 1 ? "lg:order-1" : "lg:order-2",
              )}
            >
              <Image
                src={section.image}
                alt={section.heading}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </motion.div>
          </div>
        </Section>
      ))}

      <Section id="benefits-list" tone="muted">
        <SectionHeader
          variant="display"
          title="Gemstone Heat Therapy Benefits"
          description="Experience a range of therapeutic advantages designed to restore your physical and mental well-being."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          {SITE_CONTENT.benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-sm shadow-sm border border-brand-border flex flex-col items-center text-center space-y-6"
            >
              <div className="w-1 h-1 bg-brand-accent rounded-full" />
              <p className="text-brand-text-main font-bold tracking-[0.15em] uppercase text-xs leading-relaxed">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
