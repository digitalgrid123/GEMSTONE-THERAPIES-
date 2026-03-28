"use client";

import Image from "next/image";
import { SITE_CONTENT } from "@/constants/content";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function ThermalInsights() {
  return (
    <div className="space-y-0" id="products">
      {/* 1. How Thermal Therapy Heals */}
      <Section tone="default">
        <SectionHeader title={SITE_CONTENT.sections[1].heading} />
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={SITE_CONTENT.sections[1].image}
              alt={SITE_CONTENT.sections[1].heading}
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-12 text-brand-text-main text-sm md:text-base font-medium leading-relaxed text-center max-w-4xl mx-auto">
            {SITE_CONTENT.sections[1].text}
          </p>
        </div>
      </Section>

      {/* 2. FIR Technology */}
      <Section tone="muted">
        <SectionHeader title={SITE_CONTENT.sections[2].heading} />
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={SITE_CONTENT.sections[2].image}
              alt={SITE_CONTENT.sections[2].heading}
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-12 text-brand-text-main text-sm md:text-base font-medium leading-relaxed text-center max-w-4xl mx-auto">
            {SITE_CONTENT.sections[2].text}
          </p>
        </div>
      </Section>

      {/* 3. How FIR Therapy Works */}
      <Section tone="default">
        <SectionHeader title={SITE_CONTENT.mechanismSection.heading} />
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={SITE_CONTENT.mechanismSection.image}
              alt={SITE_CONTENT.mechanismSection.heading}
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-12 text-brand-text-main text-sm md:text-base font-medium leading-relaxed text-center max-w-4xl mx-auto">
            {SITE_CONTENT.mechanismSection.text}
          </p>
        </div>
      </Section>

      {/* 4. The Importance of Heat Therapy for Core Body Temperature */}
      <Section tone="muted">
        <SectionHeader title={SITE_CONTENT.temperatureSections[0].heading} />
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={SITE_CONTENT.temperatureSections[0].image}
              alt={SITE_CONTENT.temperatureSections[0].heading}
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-12 space-y-8 text-center max-w-4xl mx-auto">
            <p className="text-brand-text-main text-sm md:text-base font-bold uppercase tracking-widest">
              Low Core Body Temperature vs. Healthy Core Body Temperature:
              Impact on Health
            </p>
            <p className="text-brand-text-muted text-sm md:text-base font-medium leading-relaxed">
              {SITE_CONTENT.temperatureSections[0].text}
            </p>
          </div>
        </div>
      </Section>

      {/* 5. How Core Body Temperature Affects Immune Function */}
      <Section tone="default">
        <SectionHeader title={SITE_CONTENT.temperatureSections[1].heading} />
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={SITE_CONTENT.temperatureSections[1].image}
              alt={SITE_CONTENT.temperatureSections[1].heading}
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-12 space-y-8 text-center max-w-4xl mx-auto">
            <p className="text-brand-text-main text-sm md:text-base font-bold uppercase tracking-widest">
              CORE BODY TEMPERATURE AND IMMUNE FUNCTION
            </p>
            <p className="text-brand-text-muted text-sm md:text-base font-medium leading-relaxed">
              {SITE_CONTENT.temperatureSections[1].text}
            </p>
          </div>
        </div>
      </Section>

      {/* 6. The Relationship Between Body Temperature and Functionality */}
      <Section tone="muted">
        <SectionHeader title="THE RELATIONSHIP BETWEEN BODY TEMPERATURE AND FUNCTIONALITY" />
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-brand-text-main font-bold text-xl md:text-2xl font-serif">
              {SITE_CONTENT.hypothermiaHeading ||
                "Hypothermia is related to life"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
              <div className="space-y-2">
                {SITE_CONTENT.temperatureLevels.map((level, idx) => (
                  <div
                    key={idx}
                    className="flex border border-brand-border rounded-sm overflow-hidden bg-white"
                  >
                    <div className="bg-brand-surface-light p-4 w-32 shrink-0 flex items-center justify-center font-bold text-lg text-brand-text-main border-r border-brand-border text-center">
                      {level.temp}
                    </div>
                    <div className="p-4 flex items-center text-xs font-medium text-brand-text-muted">
                      {level.effect}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-brand-surface-light p-8 rounded-sm flex flex-col justify-center space-y-6 border border-brand-border">
                <p className="text-brand-text-main font-bold text-sm">
                  When the body temperature is decreased by{" "}
                  <span className="bg-brand-dark-1 text-white px-2 py-0.5 rounded-sm">
                    1 degree
                  </span>
                </p>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-brand-text-main">
                      36%
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-text-muted">
                      of Immune function declines!
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-brand-text-main">
                      12%
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-text-muted">
                      of basic metabolism declines!
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-brand-text-main">
                      50%
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-text-muted">
                      of enzyme activities decline!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Integrated Therapy System */}
      <Section tone="muted">
        <SectionHeader title="INTEGRATING MODERN THERMAL THERAPY" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-4/3 w-full overflow-hidden shadow-sm">
              <Image
                src="/assets/thermal-scan.jpg"
                alt="Modern Thermal Therapy Scan"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-brand-text-main font-bold text-2xl font-serif">
                  Clinical Recovery System
                </h3>
                <div className="w-16 h-px bg-brand-border" />
              </div>
              <p className="text-brand-text-muted text-sm md:text-base font-medium leading-relaxed">
                Our integrated system combines stone therapy, thermal massage,
                and FIR technology to provide a comprehensive recovery path for
                chronic pain and spinal health.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. The Science Behind Heat and Health */}
      <Section tone="default">
        <SectionHeader title={SITE_CONTENT.sections[0].heading} />
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={SITE_CONTENT.sections[0].image}
              alt={SITE_CONTENT.sections[0].heading}
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-12 text-brand-text-main text-sm md:text-base font-medium leading-relaxed text-center max-w-4xl mx-auto">
            {SITE_CONTENT.sections[0].text}
          </p>
        </div>
      </Section>

      {/* 12. Device Product Cards */}
      <Section tone="muted">
        <div className="max-w-6xl mx-auto space-y-24">
          {SITE_CONTENT.deviceProducts.map((product, idx) => (
            <div
              key={idx}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
                idx % 2 === 1 ? "lg:flex-row-reverse text-right" : "text-left",
              )}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-4/3 w-full overflow-hidden shadow-sm">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-serif text-brand-heading leading-tight uppercase tracking-widest font-medium">
                  {product.title}
                </h3>
                <div
                  className={cn(
                    "w-16 h-px bg-brand-border",
                    idx % 2 === 1 ? "ml-auto" : "",
                  )}
                />
                <p className="text-brand-text-muted text-sm md:text-base font-medium leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-4">
                  <button className="px-8 py-4 bg-brand-dark-1 text-white border border-brand-dark-1 text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-brand-black transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 13. Numerous Benefits Categorized */}
      <Section tone="default">
        <SectionHeader title="THE NUMEROUS BENEFITS OF CERAGEM INFRARED THERMAL THERAPY" />
        <div className="max-w-5xl mx-auto flex flex-col items-center space-y-16">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={SITE_CONTENT.numerousBenefits.image}
              alt="Numerous benefits"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-left">
            {SITE_CONTENT.numerousBenefits.categories.map((cat, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-brand-text-main font-bold text-xs uppercase tracking-widest border-b border-brand-border pb-2">
                  {cat.title}
                </h4>
                <ul className="space-y-3">
                  {cat.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 bg-brand-accent mt-1.5 shrink-0 rounded-full" />
                      <p className="text-brand-text-main text-sm md:text-base font-medium leading-relaxed">
                        <span className="font-bold text-brand-text-main">
                          {point.split(":")[0]}
                        </span>
                        {point.includes(":") ? `: ${point.split(":")[1]}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 14. Final Summary Section */}
      <Section tone="muted">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h3 className="text-brand-text-main font-bold text-sm uppercase tracking-widest">
            {SITE_CONTENT.finalSummary.title}
          </h3>
          <div className="space-y-8">
            {SITE_CONTENT.finalSummary.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-sm md:text-base font-medium leading-relaxed text-brand-text-main"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
