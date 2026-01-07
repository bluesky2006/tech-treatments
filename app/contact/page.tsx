import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import BulletList from "@/components/BulletList";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Tech Treatments – friendly computer help in Frome and nearby villages.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            {/* Left: intro + quick contact */}
            <div className="md:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
                Contact
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Get in touch
              </h1>

              <p className="mt-6 max-w-2xl text-foreground">
                Tell me what’s going wrong and what you’re hoping to achieve. I’ll get back to you
                as soon as I can.
              </p>
              <div className="mt-8">
                <div className="mt-6">
                  <h3 className="text-base font-semibold">Helpful details to include</h3>
                  <BulletList
                    items={[
                      "What device it is (PC, laptop, Mac)",
                      "What you mainly use it for",
                      "Roughly how old it is",
                      "Any error message (a photo is fine)",
                    ]}
                    className="mt-4 space-y-1"
                  />
                </div>
                <h2 className="text-xl font-semibold tracking-tight mt-12">Quick contact</h2>

                <p className="mt-3 text-foreground">
                  Email:{" "}
                  <a
                    className="underline decoration-border underline-offset-4 hover:text-foreground/80"
                    href="mailto:hello@techtreatments.co.uk"
                  >
                    hello@techtreatments.co.uk
                  </a>
                </p>
                <p className="mt-12 text-sm text-muted">
                  Based near Frome – home visits available depending on the job.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="md:col-span-5 md:mt-10">
              <div className="rounded-3xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold">Message form</h2>
                <p className="mt-2 text-sm text-muted">
                  Send a quick message and I’ll get back to you.
                </p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
