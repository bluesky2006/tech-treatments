"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import BulletList from "@/components/BulletList";
import ServiceModal from "@/components/ServiceModal";
import ServiceCardGrid from "@/components/ServiceCardGrid";
import { services as SERVICES, type ServiceKey } from "@/lib/services";

export default function ServicesPage() {
  const services = useMemo(() => SERVICES, []);
  const [openKey, setOpenKey] = useState<ServiceKey | null>(null);

  const activeService = useMemo(
    () => services.find((s) => s.key === openKey) ?? null,
    [openKey, services]
  );

  return (
    <>
      {/* Hero */}
      <section className="pb-4 pt-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
                Services
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                What I can help with
              </h1>

              <p className="mt-8 max-w-2xl text-foreground">
                Simple, practical help – focused on getting you back up and running. If you’re
                unsure what you need, just describe what’s happening and I’ll guide you through the
                options.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink variant="primary" href="/contact">
                  Get in touch
                </ButtonLink>
              </div>

              <p className="mt-24 text-sm text-muted">
                Based near Frome, Somerset – home visits available depending on the job.
              </p>
            </div>

            <div className="md:col-span-5 md:mt-10">
              <div className="rounded-3xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold tracking-tight">What about cost?</h2>
                <p className="mt-3 text-foreground">
                  I’ll always explain options and likely costs before doing any work.
                </p>

                <BulletList
                  items={[
                    "Home visits: priced by job / time depending on what’s needed",
                    "Upgrades: labour + parts (with clear choices)",
                    "Restoration work: quoted per project",
                    "E-waste collection: typically free depending on location / size",
                  ]}
                  className="mt-4 space-y-1"
                />

                <p className="mt-5 font-semibold text-foreground">
                  If something isn’t worth fixing, I’ll tell you.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Cards */}
      <section className="pb-10">
        <Container>
          <ServiceCardGrid services={services} onOpen={setOpenKey} />
        </Container>
      </section>

      <ServiceModal
        open={openKey !== null}
        onClose={() => setOpenKey(null)}
        service={activeService}
      />
    </>
  );
}
