import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Repairs, upgrades, restorations, custom builds, and responsible computer disposal in Frome and nearby villages.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
            Services
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            What I can help with
          </h1>

          <p className="mt-8 max-w-2xl text-foreground">
            Simple, practical help – focused on getting you back up and running. If you’re unsure
            what you need, just describe what’s happening and I’ll guide you through the options.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink variant="primary" href="/contact">
              Get in touch
            </ButtonLink>
          </div>

          <p className="mt-8 text-sm text-muted">
            Based near Frome, Somerset – home visits available depending on the job.
          </p>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <ServiceCard
              title="Computer help & repairs"
              description="Help with everyday computer problems – slow performance, crashes, startup issues, and things that just aren’t behaving as they should. I’ll look for the simplest, most sensible fix and explain what’s going on in plain English.
"
              points={[
                "Slow computers, crashes, startup issues",
                "Software problems, updates and cleanup",
                "Overheating and noisy fans",
                "Basic printer / Wi-Fi issues (home setups)",
              ]}
              src="/repairs.jpg"
            />
            <ServiceCard
              title="Upgrades"
              description="Practical upgrades that make a real difference, especially for older machines. I’ll advise honestly on what’s worth doing – and just as importantly, what isn’t – so you don’t spend money unnecessarily."
              points={[
                "SSD upgrades (often the biggest speed boost)",
                "RAM upgrades (when worthwhile)",
                "Health checks and tune-ups",
                "Honest advice on what’s worth spending money on",
              ]}
              src="/upgrades.jpg"
            />
            <ServiceCard
              title="New & custom PCs"
              description="Computers built around how you actually use them – whether that’s home office work, creative projects, or gaming. I’ll help you choose sensible components, build the machine, and set everything up so it’s ready to use."
              points={[
                "Quiet home office machines (reliable and tidy)",
                "Gaming PCs (budget-aware, explainable choices)",
                "Full setup: accounts, backups, updates, printer",
                "Data transfer from your old computer",
              ]}
              src="/build.jpg"
            />
            <ServiceCard
              title="Retro & restoration"
              description="Careful restoration of older computers and systems, from reviving machines that no longer start to making vintage setups usable again. I can also put together bespoke emulation machines based on the games, platforms, or time period you care about – ideal for revisiting old favourites without the hassle."
              points={[
                "Bringing older machines back to life",
                "Modern storage options where appropriate",
                "File retrieval (case-by-case, where possible)",
                "Tailored emulation setups based on your interests",
              ]}
              src="/retro.jpg"
            />
            <ServiceCard
              title="Responsible disposal"
              description="Safe and responsible handling of old computers you no longer need. This includes secure data wiping where required, reuse or refurbishment when possible, and proper recycling when it isn’t.
"
              points={[
                "Secure data wiping (on request)",
                "Reuse / refurb where possible",
                "Responsible recycling otherwise",
                "Collection may be available depending on location",
              ]}
              src="/ewaste.jpg"
            />
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="relative h-40 w-full">
                <Image
                  src=""
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">What it typically costs</h3>
                <p className="mt-3 text-foreground">
                  I’ll always explain options and likely costs before doing any work.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-foreground">
                  <li>Home visits: priced by job / time depending on what’s needed</li>
                  <li>Upgrades: labour + parts (with clear choices)</li>
                  <li>Restoration work: quoted per project</li>
                </ul>
                <p className="mt-3 text-teal-400">
                  If something isn’t worth fixing, I’ll tell you.
                </p>

                <div className="mt-5">
                  <ButtonLink variant="primary" href="/contact">
                    Describe your issue
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
