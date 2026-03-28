"use client";

import Image from "next/image";
import { SITE_CONTENT } from "@/constants/content";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";

export function LadiesCare() {
  return (
    <Section id="ladies-care" tone="muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-brand-text-muted font-bold tracking-[0.4em] uppercase text-xs">
                {SITE_CONTENT.ladiesCare.subtitle}
              </h3>
              <h2 className="text-2xl md:text-4xl font-serif text-brand-heading leading-tight tracking-[0.2em] uppercase font-normal">
                {SITE_CONTENT.ladiesCare.title}
              </h2>
              <div className="w-12 h-px bg-brand-border" />
            </div>
            <p className="text-brand-text-main text-base font-medium leading-relaxed max-w-lg italic">
              {SITE_CONTENT.ladiesCare.description}
            </p>
            <div className="pt-6">
              <a
                href={`tel:${SITE_CONTENT.brand.phone}`}
                className="inline-flex items-center justify-center px-10 py-4 bg-brand-dark-1 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-brand-black transition-all shadow-sm"
              >
                Contact for Female Staff
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-4/3 rounded-sm overflow-hidden shadow-xl"
          >
            <Image
              src={SITE_CONTENT.ladiesCare.image}
              alt="Female Patient Care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
