import type { Metadata } from "next";
import Container from "@/components/Container";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tech Treatments is currently closed and not offering computer help at this time.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Tech Treatments",
    description: "Tech Treatments is currently closed and not offering computer help at this time.",
    url: "/contact",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        alt: "Contact Tech Treatments in Frome",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tech Treatments",
    description: "Tech Treatments is currently closed and not offering computer help at this time.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="pb-16 pt-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
                        <div className="md:col-span-7 flex flex-col">
              <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
                Contact
              </p>

              <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
                Currently closed
              </h1>

              <p className="mt-6 max-w-2xl text-foreground">
                Tech Treatments is currently closed so I&rsquo;m not offering computer repairs,
                upgrades or home visits at this time. Thank you to everyone who has used the
                service.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
