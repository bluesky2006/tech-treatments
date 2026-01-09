import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Tech Treatments – Friendly Computer Help in Somerset",
    template: "%s – Tech Treatments",
  },
  description:
    "Friendly computer help for everyday people – repairs, upgrades, restorations, custom builds and responsible disposal. Frome and nearby villages.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={roboto.variable}>
      <body className="min-h-dvh bg-background text-foreground antialiased font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
