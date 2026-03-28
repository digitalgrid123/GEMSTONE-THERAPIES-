"use client";

import { SITE_CONTENT } from "@/constants/content";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

export function Treatments() {
  return (
    <Section id="details" tone="muted">
      <SectionHeader
        variant="display"
        title="Core Services"
        description="We offer a range of specialized therapies combining ancient stone wisdom with modern homoeopathic practices."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
        {SITE_CONTENT.services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-sm shadow-sm border border-brand-border flex flex-col items-center text-center space-y-4"
          >
            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
            <h3 className="text-brand-text-main font-bold tracking-[0.1em] uppercase text-xs">
              {service}
            </h3>
          </motion.div>
        ))}
      </div>

      <SectionHeader
        variant="display"
        title="Conditions Treated"
        description="Our advanced gemstone therapy is effective for a wide range of musculoskeletal issues and chronic pain conditions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-6xl mx-auto mt-16">
        {SITE_CONTENT.conditions.map((condition, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.02 }}
            className="flex items-center gap-4 text-brand-text-main group cursor-default"
          >
            <div className="w-1.5 h-1.5 bg-brand-border rounded-full group-hover:bg-brand-accent group-hover:scale-150 transition-all" />
            <span className="text-sm font-medium tracking-wide uppercase">
              {condition}
            </span>
          </motion.div>
        ))}
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 max-w-6xl mx-auto mt-24 pt-16 border-t border-brand-border"
        dir="rtl"
      >
        {SITE_CONTENT.urduServices.conditions.map((condition, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.02 }}
            className="flex items-center gap-3 text-brand-text-muted group cursor-default"
          >
            <div className="w-1 h-1 bg-brand-accent rounded-full" />
            <span className="text-sm md:text-base font-bold">{condition}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
