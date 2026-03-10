import type { Metadata } from "next";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import BulletList from "@/components/BulletList";
import ServiceCardGrid from "@/components/ServiceCardGrid";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Computer Services in Frome",
  description:
    "Computer repairs, upgrades, custom PCs and retro restoration in Frome and nearby Somerset villages.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-10 pt-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
                Services
              </p>

              <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
                Computer help in Frome and Somerset
              </h1>

              <p className="mt-8 max-w-2xl text-foreground">
                Practical help for slow computers, startup issues, Wi-Fi problems, upgrades, new
                custom PCs and careful restoration work. If you are not sure what you need, describe
                what is happening and I will suggest the simplest sensible next step.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink variant="primary" href="/contact">
                  Get in touch
                </ButtonLink>
              </div>

              <p className="mt-12 text-sm text-muted">
                Based near Frome, Somerset. Home visits are available depending on the job, including
                nearby villages and the wider local area.
              </p>
            </div>

            <div className="md:col-span-5 md:mt-10">
              <div className="rounded-3xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold">What about cost?</h2>
                <p className="mt-3 text-foreground">
                  I explain likely costs before doing any work and I will tell you if a repair is
                  not worth the money.
                </p>

                <BulletList
                  items={[
                    "You only pay for work carried out",
                    "Parts are quoted in advance before ordering",
                    "New or custom builds are agreed upfront after a quick chat",
                    "E-waste collection is often free depending on location and size",
                  ]}
                  className="mt-4 space-y-1"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-border/20 pt-10 pb-16">
        <Container>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Browse services</h2>
            <p className="mt-2 text-sm text-muted">
              Each service has its own page with what is included, typical jobs and useful details.
            </p>
          </div>

          <ServiceCardGrid services={services} />
        </Container>
      </section>
    </>
  );
}
