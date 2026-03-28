import { SITE_CONTENT } from "@/constants/content";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-white border-b border-brand-border py-3 text-center">
      <a
        href={`https://wa.me/${SITE_CONTENT.brand.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-bold tracking-[0.1em] text-brand-text-main hover:text-brand-text-muted transition-all px-4 uppercase"
      >
        Recharge Your Workforce - Discover CERAGEM Corporate Recovery - click
        here &gt;&gt;&gt;&gt;
      </a>
    </div>
  );
}
