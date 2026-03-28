"use client";

import { SITE_CONTENT } from "@/constants/content";
import { motion } from "framer-motion";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-accent text-white py-2.5 overflow-hidden relative z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href={`https://wa.me/${SITE_CONTENT.brand.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center min-h-[1.5rem]"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[9px] sm:text-[11px] md:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-center leading-tight hover:opacity-80 transition-opacity px-2"
          >
            {SITE_CONTENT.announcement}
          </motion.p>
        </a>
      </div>
    </div>
  );
}
