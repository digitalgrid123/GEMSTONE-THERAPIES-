"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE_CONTENT } from "@/constants/content";

const NAV_OFFSET_PX = 96;

/** Section ids matching `href` hashes (order = scroll order for spy). */
const SECTION_ORDER = SITE_CONTENT.navigation
  .map((item) => item.href.replace(/^#/, ""))
  .filter(Boolean);

function navLinkClasses(active: boolean) {
  return cn(
    "text-xs xl:text-sm font-bold transition-all tracking-[0.1em] uppercase py-2",
    active
      ? "text-brand-black"
      : "text-brand-text-muted hover:text-brand-black",
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL without hash if possible, or just prevent default
      window.history.pushState(null, "", "/");
    }
    setMenuOpen(false);
  };

  const updateActiveFromScroll = useCallback(() => {
    let current = SECTION_ORDER[0] ?? "home";
    for (const id of SECTION_ORDER) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= NAV_OFFSET_PX) current = id;
    }
    setActiveId(current);
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    const t = setTimeout(updateActiveFromScroll, 100);
    window.addEventListener("scroll", updateActiveFromScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveFromScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [updateActiveFromScroll]);

  return (
    <nav
      className={cn(
        "fixed top-9 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        scrolled
          ? "top-0 py-3.5 bg-white/95 backdrop-blur-md shadow-sm"
          : "py-5 bg-white",
      )}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/");
          }}
          className="text-sm md:text-base font-bold tracking-[0.15em] text-brand-black hover:opacity-80 transition-opacity uppercase shrink-0 cursor-pointer"
        >
          {SITE_CONTENT.brand.logo}
        </button>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-8 mx-auto px-8">
          {SITE_CONTENT.navigation.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href.replace(/^#/, ""))}
              className={cn(
                navLinkClasses(activeId === item.href.replace(/^#/, "")),
                "cursor-pointer",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`tel:${SITE_CONTENT.brand.phone}`}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-dark-1 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-brand-black transition-all shadow-sm"
          >
            Book Consultation
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden p-1.5 text-brand-text-main"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-brand-border p-8 flex flex-col gap-6 xl:hidden shadow-xl"
        >
          {SITE_CONTENT.navigation.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href.replace(/^#/, ""))}
              className={cn(
                navLinkClasses(activeId === item.href.replace(/^#/, "")),
                "text-left cursor-pointer",
              )}
            >
              {item.label}
            </button>
          ))}
          <a
            href={`tel:${SITE_CONTENT.brand.phone}`}
            className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-brand-dark-1 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-brand-black transition-all shadow-sm mt-4"
          >
            Book Consultation
          </a>
        </motion.div>
      )}
    </nav>
  );
}
