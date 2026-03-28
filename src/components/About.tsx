"use client";

import Image from "next/image";
import { SITE_CONTENT, PLACEHOLDERS } from "@/constants/content";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" tone="default">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10 order-2 lg:order-1"
        >
          <div className="space-y-8">
            <h3 className="text-brand-text-muted font-bold tracking-[0.4em] uppercase text-xs">
              Clinical Leadership
            </h3>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-serif text-brand-heading leading-tight tracking-[0.2em] uppercase font-normal">
                {SITE_CONTENT.doctor.name}
              </h2>
              <p className="text-brand-text-muted font-bold tracking-[0.1em] uppercase text-xs">
                {SITE_CONTENT.doctor.clinic}
              </p>
              <div className="w-12 h-px bg-brand-border" />
            </div>
            <p className="text-brand-text-main text-base font-medium leading-relaxed italic">
              &ldquo;{SITE_CONTENT.doctor.description}&rdquo;
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-brand-border">
            {SITE_CONTENT.doctor.titles.map((title, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-4 text-brand-text-muted font-bold tracking-widest uppercase text-xs"
              >
                <div className="w-1 h-1 bg-brand-accent rounded-full" />
                {title}
              </motion.div>
            ))}
          </div>

          <motion.a
            whileHover={{ y: -2 }}
            href={`tel:${SITE_CONTENT.brand.phone}`}
            className="inline-flex items-center justify-center px-10 py-5 bg-brand-dark-1 text-white text-xs font-bold tracking-[0.25em] uppercase rounded-sm hover:bg-brand-black transition-all shadow-sm"
          >
            Contact Dr. Shahid
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square md:aspect-4/5 order-1 lg:order-2"
        >
          <div className="relative h-full w-full rounded-sm overflow-hidden shadow-sm">
            <Image
              src={PLACEHOLDERS.portrait}
              alt="Dr. Shahid Aqeel Rana"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
