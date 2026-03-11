import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import localFont from "next/font/local";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  SERVICE_AREAS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tech Treatments – Friendly Computer Help in Somerset",
    template: "%s – Tech Treatments",
  },
  description:
    "Friendly computer help for everyday people – repairs, upgrades, restorations, custom builds and responsible disposal. Frome and nearby villages.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Tech Treatments – Friendly Computer Help in Somerset",
    description:
      "Friendly computer help for everyday people – repairs, upgrades, restorations, custom builds and responsible disposal. Frome and nearby villages.",
    url: "/",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        alt: "Tech Treatments computer help in Somerset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Treatments – Friendly Computer Help in Somerset",
    description:
      "Friendly computer help for everyday people – repairs, upgrades, restorations, custom builds and responsible disposal. Frome and nearby villages.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
};

const roboto = localFont({
  src: [
    { path: "./fonts/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Roboto-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ComputerRepair",
    "@id": absoluteUrl("/#business"),
    name: SITE_NAME,
    url: absoluteUrl("/"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    email: "techtreatments@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Frome",
      addressRegion: "Somerset",
      addressCountry: "GB",
    },
    areaServed: SERVICE_AREAS,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    knowsAbout: [
      "Computer repairs",
      "Computer upgrades",
      "Custom PCs",
      "Retro computer restoration",
      "Responsible computer disposal",
    ],
  };

  return (
    <html lang="en-GB" className={roboto.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L60W4LP0XB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L60W4LP0XB');
          `}
        </Script>
      </head>

      <body className="min-h-dvh bg-background text-foreground antialiased font-sans">
        <StructuredData data={localBusinessSchema} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
