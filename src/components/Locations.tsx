"use client";

import { MapPin, Clock, ExternalLink, Phone } from "lucide-react";
import { SITE_CONTENT } from "@/constants/content";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

export function Locations() {
  return (
    <Section id="locations" tone="default">
      <SectionHeader
        variant="display"
        title="Our Locations"
        description="Two convenient sites in Gulshan e Ravi, Lahore. Please call before visiting to confirm availability."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mt-16">
        {SITE_CONTENT.locations.map((location, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-10 p-10 md:p-12 bg-white border border-brand-border rounded-sm shadow-sm"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-brand-text-muted">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase">
                  Location {idx + 1}
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-serif text-brand-heading tracking-[0.1em] uppercase">
                  {location.name}
                </h3>
                <div className="w-12 h-px bg-brand-border" />
              </div>
              <p className="text-brand-text-muted text-sm font-medium leading-relaxed max-w-md">
                {location.address}
              </p>
              <div className="flex items-center gap-3 text-brand-text-muted">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="text-xs tracking-[0.1em] font-bold uppercase">
                  {location.timings}
                </span>
              </div>
            </div>

            <div
              className="space-y-4 text-right pt-8 border-t border-brand-border"
              dir="rtl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text-main leading-snug">
                {location.urduName}
              </h3>
              <div className="flex items-center justify-end gap-3 text-brand-text-muted text-lg">
                <Clock className="w-5 h-5 text-brand-text-muted shrink-0" />
                <span className="font-medium">{location.urduTimings}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                whileHover={{ y: -2 }}
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-brand-text-main border border-brand-border px-6 py-4 rounded-sm font-bold tracking-[0.2em] uppercase text-xs hover:bg-brand-surface transition-colors"
              >
                Google Maps
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href={`tel:${SITE_CONTENT.brand.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-dark-1 text-white px-6 py-4 rounded-sm font-bold tracking-[0.2em] uppercase text-xs hover:bg-brand-black transition-colors"
              >
                Call now
                <Phone className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
