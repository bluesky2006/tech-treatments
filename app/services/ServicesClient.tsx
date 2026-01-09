"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import BulletList from "@/components/BulletList";
import ServiceModal from "@/components/ServiceModal";
import ServiceCardGrid from "@/components/ServiceCardGrid";
import { services as SERVICES, type ServiceKey } from "@/lib/services";

function isServiceKey(value: string | null): value is ServiceKey {
  return value === "help" || value === "upgrades" || value === "custom" || value === "retro";
}

export default function ServicesClient() {
  const services = SERVICES;
  const [openKey, setOpenKey] = useState<ServiceKey | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const key = searchParams.get("service");
    if (isServiceKey(key)) setOpenKey(key);
  }, [searchParams]);

  const activeService = useMemo(
    () => services.find((s) => s.key === openKey) ?? null,
    [openKey, services]
  );

  function handleOpen(key: ServiceKey) {
    setOpenKey(key);
    router.replace(`/services?service=${key}`, { scroll: false });
  }

  function handleClose() {
    setOpenKey(null);
    router.replace("/services", { scroll: false });
  }

  return (
    <>
      {/* Hero */}
      <section className="pb-10 pt-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
                Services
              </p>

              <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">What I can help with</h1>

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

              <p className="mt-12 text-sm text-muted">
                Based near Frome, Somerset – home visits available depending on the job.
              </p>
            </div>

            <div className="md:col-span-5 md:mt-10">
              <div className="rounded-3xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold ">What about cost?</h2>
                <p className="mt-3 text-foreground">
                  I’ll always explain options and likely costs before doing any work.
                </p>

                <BulletList
                  items={[
                    "You only pay for work carried out",
                    "Parts are quoted in advance before ordering",
                    "New/custom builds: fee agreed upfront after a quick chat",
                    "E-waste collection is typically free (depending on location/size)",
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

      {/* Cards */}
      <section className="bg-border/20 pt-10 pb-16">
        <Container>
          <div className="mb-6">
            <h2 className="text-lg font-semibold ">Choose a service</h2>
            <p className="mt-2 text-sm text-muted">
              Click a service to see what’s included and typical jobs.
            </p>
          </div>

          <ServiceCardGrid services={services} onOpen={handleOpen} />
        </Container>
      </section>

      <ServiceModal open={openKey !== null} onClose={handleClose} service={activeService} />
    </>
  );
}
