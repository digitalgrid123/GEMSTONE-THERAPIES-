import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { PLACEHOLDERS } from "@/constants/content";
import { getSiteUrl, isNoIndex, SITE_BRAND } from "@/lib/site";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const SEO_KEYWORDS: string[] = [
  "Gemstone Therapies",
  "Gemstone Therapies Lahore",
  "Gemstone Therapies Clinic",
  "Dr Shahid Aqeel",
  "Dr Shahid Aqeel Rana",
  "Shahid Aqeel Rana stone therapist",
  "certified stone therapist Lahore",
  "stone therapy Lahore",
  "hot stone therapy Lahore",
  "cold stone therapy Lahore",
  "gemstone heat therapy",
  "FIR therapy Lahore",
  "far infrared therapy Pakistan",
  "thermal massage Lahore",
  "slip disc treatment Lahore",
  "disc bulge treatment without surgery",
  "back pain clinic Gulshan e Ravi",
  "neck shoulder pain Lahore",
  "homoeopathic physician Lahore",
  "Gosha e Shifa Hospital stone therapy",
  "Moon Market Gulshan e Ravi clinic",
  "pain care clinic Lahore",
  "non-invasive back pain treatment",
  "gemstone skin care lahore",
  "skin care treatment with gemstone therapy",
  "gemstone facial treatment lahore",
  "natural skin healing gemstone therapy",
];

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl().replace(/\/+$/, "");
  const metadataBase = new URL(`${siteUrl}/`);
  const canonical = `${siteUrl}/`;
  const googleVerification =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

  const titleDefault =
    "Gemstone Therapies & Skin Care Lahore | Dr. Shahid Aqeel Rana | Stone Therapy & Pain Clinic";
  const description =
    "Advanced Gemstone & Stone Therapy in Lahore by Dr. Shahid Aqeel Rana. Non-surgical slip disc treatment, back pain relief, FIR heat therapy, and specialized Gemstone Skin Care. Visit Gosha e Shifa & Moon Market. Call 0321-4014284.";

  return {
    metadataBase,
    title: {
      default: titleDefault,
      template: `%s | ${SITE_BRAND.shortName}`,
    },
    description,
    keywords: SEO_KEYWORDS,
    authors: [{ name: "Dr. Shahid Aqeel Rana", url: canonical }],
    creator: "Dr. Shahid Aqeel Rana",
    publisher: SITE_BRAND.name,
    category: "health",
    formatDetection: {
      email: false,
      address: true,
      telephone: true,
    },
    openGraph: {
      title: titleDefault,
      description,
      url: canonical,
      siteName: SITE_BRAND.name,
      images: [
        {
          url: PLACEHOLDERS.og,
          width: 1200,
          height: 630,
          alt: "Gemstone Therapies Clinic — stone therapy & pain care in Lahore",
          type: "image/webp",
        },
      ],
      locale: "en_PK",
      alternateLocale: ["en_US", "ur_PK"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_BRAND.shortName} | Dr. Shahid Aqeel Rana`,
      description,
      images: [PLACEHOLDERS.og],
    },
    robots: isNoIndex()
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
    alternates: {
      canonical,
      languages: {
        "en-PK": canonical,
        en: canonical,
      },
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    other: {
      "contact:phone_number": "+923214014284",
      "geo.region": "PK-PB",
      "geo.placename": "Lahore",
    },
  };
}

export const viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = getSiteUrl().replace(/\/+$/, "");
  const clinicId = `${siteUrl}/#gemstone-therapies-clinic`;
  const physicianId = `${siteUrl}/#dr-shahid-aqeel-rana`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": clinicId,
        name: SITE_BRAND.name,
        alternateName: [
          "Gemstone Therapies",
          "Gemstone 💎 Therapies Clinic",
          "Gemstone Therapies Pain Care Clinic",
        ],
        url: `${siteUrl}/`,
        image: PLACEHOLDERS.og,
        telephone: "+923214014284",
        description: SITE_BRAND.tagline,
        address: {
          "@type": "PostalAddress",
          streetAddress: "759-A Gulshan e Ravi; Moon Market area",
          addressLocality: "Lahore",
          addressRegion: "Punjab",
          postalCode: "54000",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.5204,
          longitude: 74.3587,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        medicalSpecialty: [
          "PhysicalTherapy",
          "https://schema.org/PhysicalTherapy",
        ],
        employee: { "@id": physicianId },
        priceRange: "$$",
      },
      {
        "@type": "Physician",
        "@id": physicianId,
        name: "Shahid Aqeel Rana",
        honorificPrefix: "Dr.",
        alternateName: [
          "Dr. Shahid Aqeel Rana",
          "Shahid Aqeel Rana",
          "Dr Shahid Aqeel",
        ],
        jobTitle:
          "Certified Stone Therapist, Consultant Homoeopathic Physician",
        worksFor: { "@id": clinicId },
        telephone: "+923214014284",
        knowsAbout: [
          "Stone therapy",
          "Hot stone therapy",
          "Cold stone therapy",
          "Far infrared heat therapy",
          "Spinal disc pain",
          "Slip disc",
          "Back pain",
          "Joint pain",
          "Homoeopathy",
          "Pain management",
        ],
        areaServed: {
          "@type": "City",
          name: "Lahore",
          containedInPlace: {
            "@type": "Country",
            name: "Pakistan",
          },
        },
      },
    ],
  };

  return (
    <html
      lang="en-PK"
      className={`${lato.variable} ${playfairDisplay.variable} h-full antialiased selection:bg-brand-accent selection:text-white`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
