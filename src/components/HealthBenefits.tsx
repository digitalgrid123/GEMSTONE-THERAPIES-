"use client";

import Image from "next/image";
import { SITE_CONTENT } from "@/constants/content";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function HealthBenefits() {
  return (
    <Section id="benefits" tone="default">
      <SectionHeader
        title={SITE_CONTENT.clinicalEvidence.title}
        className="mb-24"
      />

      <div className="space-y-32 max-w-6xl mx-auto">
        {SITE_CONTENT.clinicalEvidence.items.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className={cn(
              "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
              idx % 2 === 1 ? "lg:flex-row-reverse" : "",
            )}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square w-full overflow-hidden shadow-sm">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-brand-heading leading-tight uppercase tracking-widest font-medium">
                  {benefit.title}
                </h3>
                <div className="w-16 h-px bg-brand-border" />
              </div>

              <div className="space-y-6">
                <p className="text-brand-text-main text-sm md:text-base font-medium leading-relaxed">
                  {benefit.description}
                </p>
                {benefit.study && (
                  <p className="text-brand-text-muted text-sm md:text-base font-medium leading-relaxed italic border-l-2 border-brand-border pl-6">
                    {benefit.study}
                  </p>
                )}
              </div>

              <div className="pt-6">
                <motion.a
                  whileHover={{ y: -2 }}
                  href={`https://wa.me/${SITE_CONTENT.brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-brand-dark-1 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-brand-black transition-all shadow-sm"
                >
                  {benefit.ctaLabel || "Clinical study details"}
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final Thoughts Section from reference image */}
      <div className="mt-40 max-w-5xl mx-auto border-t border-brand-border pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-serif text-brand-heading uppercase tracking-widest font-medium">
              Final Thoughts
            </h3>
            <div className="w-16 h-px bg-brand-border" />
            <p className="text-brand-text-main text-sm md:text-base font-medium leading-relaxed">
              Far infrared therapy has been clinically shown to offer diverse
              health benefits across pain relief, cardiovascular support, and
              immune function, making it a valuable tool in modern wellness,
              including inflammation and aiding in cellular repair, supporting
              both relaxation and long-term vitality health. As part of a
              comprehensive approach to health, gemstone and FIR heat therapies
              are designed to naturally enhance your body&apos;s healing and
              wellness.
            </p>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden shadow-sm">
            <Image
              src="/assets/clinical-research.webp"
              alt="Clinical Research"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
