import type { Metadata } from "next";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Tech Treatments – friendly computer help in Frome and nearby villages.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
            Contact
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Get in touch</h1>
          <p className="mt-8 max-w-2xl text-foreground">
            Tell me what’s going wrong and what you’re hoping to achieve. If you can, include the
            device type (PC/laptop/Mac) and any error messages.
          </p>
          <p className="mt-8 text-sm text-muted">
            Based near Frome – home visits available depending on the job.
          </p>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Quick contact</h2>

              <div className="mt-4 space-y-3 text-sm text-foreground">
                <p>
                  Email:{" "}
                  <a
                    className="underline decoration-white/20 underline-offset-4 hover:text-white"
                    href="mailto:techtreatments@gmail.com"
                  >
                    techtreatments@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    className="underline decoration-white/20 underline-offset-4 hover:text-white"
                    href="tel:+447000000000"
                  >
                    07973 189 344
                  </a>
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-black/20 p-4">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-zinc-100">Tip:</span> If it’s a slow computer,
                  tell me roughly how old it is, what you use it for, and whether it’s a laptop or
                  desktop.
                </p>
              </div>

              <div className="mt-5">
                <ButtonLink href="/services">See services</ButtonLink>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Message form</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
