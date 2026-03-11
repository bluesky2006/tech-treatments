import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import FAQSection from "@/components/FAQSection";
import { homeFaqs } from "@/lib/homeFaqs";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "FAQ for Tech Treatments – friendly computer help in Frome and nearby villages.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Tech Treatments FAQ",
    description: "FAQ for Tech Treatments – friendly computer help in Frome and nearby villages.",
    url: "/faq",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        alt: "Tech Treatments FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Treatments FAQ",
    description: "FAQ for Tech Treatments – friendly computer help in Frome and nearby villages.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.a === "string" ? item.a : "",
      },
    })),
    url: absoluteUrl("/faq"),
  };

  return (
    <section className="pt-32 pb-10">
      <Container>
        <StructuredData data={faqSchema} />
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">FAQ</p>
          <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">Frequently asked questions</h1>
          <p className="mt-6 text-foreground">
            Quick answers to common questions. If you’re unsure, just get in touch and describe
            what’s happening.
          </p>

          <div className="mt-8">
            <ButtonLink variant="primary" href="/contact">
              Get in touch
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10">
          <FAQSection
            title="FAQs"
            intro="Home visits, pricing, data safety and what I can help with."
            items={homeFaqs}
          />
        </div>
      </Container>
    </section>
  );
}
