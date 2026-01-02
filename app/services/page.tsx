import type { Metadata } from "next";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import ButtonLink from "@/components/ButtonLink";
import BulletList from "@/components/BulletList";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Repairs, upgrades, restorations, custom builds, and responsible computer disposal in Frome and nearby villages.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            {/* Left: intro */}
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

              <p className="text-sm text-muted mt-24">
                Based near Frome, Somerset – home visits available depending on the job.
              </p>
            </div>

            {/* Right: costs */}
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

      {/* Cards (unchanged) */}
      <section className="pb-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <ServiceCard
              title="Computer help & repairs"
              description="Help with everyday computer problems – slow performance, crashes, startup issues, and things that just aren’t behaving as they should. I’ll look for the simplest, most sensible fix and explain what’s going on in plain English."
              points={[
                "Slow computers, crashes, startup issues",
                "Software problems, updates and cleanup",
                "Mac, PC or Linux",
                "Basic printer / Wi-Fi issues (home setups)",
              ]}
              src="/bsod.jpg"
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
                "Workstations for creative projects",
                "Data transfer from your old computer",
              ]}
              src="/build.jpg"
            />
            <ServiceCard
              title="Retro & restoration"
              description="Careful restoration of older computers and systems, from reviving machines that no longer start to making vintage setups usable again. I can also put together bespoke emulation machines – ideal for revisiting old gaming favourites without the hassle."
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
              description="Safe and responsible handling of old computers you no longer need. This includes secure data wiping where required, reuse or refurbishment when possible, and proper recycling when it isn’t."
              points={[
                "Secure data wiping (on request)",
                "Reuse / refurb where possible - responsible recycling otherwise ",
                "Collection may be available depending on location",
                "Free service (subject to terms)",
              ]}
              src="/ewaste.jpg"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
