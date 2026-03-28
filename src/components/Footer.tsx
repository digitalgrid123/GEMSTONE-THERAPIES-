import Link from "next/link";
import { SITE_CONTENT } from "@/constants/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black py-20 md:py-32 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-20">
          {/* Logo & Info */}
          <div className="space-y-8">
            <Link
              href="/"
              className="text-xl font-serif font-bold tracking-[0.2em] text-white block uppercase"
            >
              {SITE_CONTENT.brand.logo}
            </Link>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-xs">
              {SITE_CONTENT.brand.tagline}
            </p>
            <div className="pt-4 flex gap-4">
              {/* Optional: Add social icons here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-500">
              Navigation
            </h4>
            <ul className="space-y-5">
              {SITE_CONTENT.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-300 hover:text-white transition-all text-sm font-bold tracking-[0.1em] uppercase block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-500">
              Contact Us
            </h4>
            <div className="space-y-8">
              <a
                href={`tel:${SITE_CONTENT.brand.phone}`}
                className="block group"
              >
                <p className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mb-2">
                  Inquiries
                </p>
                <span className="text-3xl font-serif text-white group-hover:text-zinc-300 transition-colors">
                  {SITE_CONTENT.brand.phone}
                </span>
              </a>
              <div className="space-y-6">
                {SITE_CONTENT.locations.map((loc, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">
                      {loc.name}
                    </p>
                    <p className="text-zinc-300 font-medium text-sm leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Urdu Tagline */}
          <div className="space-y-8 text-right" dir="rtl">
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-500">
              معلومات
            </h4>
            <div className="space-y-6">
              <p className="text-white font-bold text-2xl leading-relaxed">
                بغیر سرجری اور ادویات کے درد کا علاج
              </p>
              <div className="space-y-2">
                <p className="text-zinc-400 font-bold text-sm tracking-widest uppercase">
                  ڈاکٹر شاہد عقیل رانا
                </p>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed max-w-[200px]">
                  {SITE_CONTENT.brand.qualifications}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
            © {currentYear} {SITE_CONTENT.brand.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
