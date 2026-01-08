import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import FAQSection from "@/components/FAQSection";
import { homeFaqs } from "@/lib/homeFaqs";

export default function FAQPage() {
  return (
    <section className="pt-32 pb-10">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">FAQ</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Frequently asked questions
          </h1>
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
