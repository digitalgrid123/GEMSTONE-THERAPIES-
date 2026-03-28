"use client";

import { PLACEHOLDERS } from "@/constants/content";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

export function ExerciseVideos() {
  return (
    <Section id="exercises" tone="muted">
      <SectionHeader
        eyebrow="WELLNESS & RECOVERY"
        title="Therapeutic Exercises"
        description="Follow these specialized clinical exercises to enhance your recovery and maintain spinal health between therapy sessions."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        {PLACEHOLDERS.exercises.map((videoSrc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative aspect-[9/16] bg-zinc-100 rounded-sm overflow-hidden shadow-xl border border-brand-border group"
          >
            <video
              src={videoSrc}
              controls
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-brand-dark-1/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                Exercise {idx + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
