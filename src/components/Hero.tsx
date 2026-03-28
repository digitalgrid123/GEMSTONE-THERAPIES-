"use client";

import Image from "next/image";
import { SITE_CONTENT, PLACEHOLDERS } from "@/constants/content";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden pt-40 pb-20"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-16 w-full flex flex-col items-center"
        >
          {/* Main Title */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-brand-heading leading-tight tracking-[0.1em] uppercase max-w-5xl mx-auto font-medium">
              {SITE_CONTENT.hero.heading}
            </h1>
            <div className="w-20 h-px bg-brand-border mx-auto mt-10" />
          </div>

          {/* Large Hero Image */}
          <div className="relative w-full max-w-6xl mx-auto aspect-16/9 md:aspect-21/9 overflow-hidden shadow-md">
            <Image
              src={PLACEHOLDERS.hero}
              alt="Therapeutic Thermal Therapy"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Caption Text Below Image */}
          <div className="max-w-4xl mx-auto space-y-10">
            <p className="text-brand-text-main text-sm md:text-base font-medium leading-relaxed max-w-3xl mx-auto">
              The therapeutic application of heat, often called heat or thermal
              therapy, is the practice of using heat to promote healing, reduce
              pain, and improve overall well-being.
            </p>

            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-brand-black"
                dir="rtl"
              >
                {SITE_CONTENT.hero.urduHeading}
              </h2>
              <p className="text-brand-text-muted text-sm md:text-base font-medium leading-relaxed max-w-3xl mx-auto">
                {SITE_CONTENT.hero.subtext}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-col gap-6 pt-10 border-t border-brand-border">
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                {SITE_CONTENT.hero.badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-brand-accent rounded-full" />
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-text-muted">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="flex flex-wrap justify-center gap-x-12 gap-y-4 font-bold"
                dir="rtl"
              >
                {SITE_CONTENT.hero.urduBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-brand-accent rounded-full" />
                    <span className="text-sm md:text-base text-brand-text-muted">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
