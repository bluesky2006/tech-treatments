import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import HomeCard from "@/components/HomeCard";

export default function HomePage() {
  return (
    <>
      <section className="relative -mt-20 min-h-dvh overflow-hidden flex items-center pt-20">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero2.jpg)" }}
          aria-hidden="true"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-zinc-900/55" aria-hidden="true" />
        {/* Content */}
        <Container>
          <div className="relative -mt-16 md:-mt-24">
            {" "}
            <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
              Local computer help
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl text-zinc-100">
              Friendly computer help for everyday people
            </h1>
            <p className="mt-8 max-w-3xl text-zinc-100">
              Repairs, upgrades, restorations and new builds – no jargon, no pressure. Based near
              Frome, Somerset.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink variant="primary" href="/contact">
                Get in touch
              </ButtonLink>
              <ButtonLink href="/services">See services</ButtonLink>
            </div>
            <p className="mt-8 text-sm text-zinc-100/90">
              Not sure what you need? That’s fine – just tell me what’s going wrong.
            </p>
          </div>
        </Container>
      </section>
      <section className="pt-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <HomeCard
              title="Fix & speed up"
              points={[
                "Slow laptops and PCs",
                "Startup issues and updates",
                "Clean-ups and tune-ups",
              ]}
              src="/icons/pc-tower.png"
            />
            <HomeCard
              title="Upgrade & build"
              points={[
                "SSD and RAM upgrades",
                "Quiet home office PCs",
                "Gaming PCs / Workstations",
              ]}
              src="/icons/tower-pc.png"
            />
            <HomeCard
              title="Restore & recycle"
              points={[
                "Older machines and retro systems",
                "Secure wiping and responsible disposal",
              ]}
              src="/icons/computer.png"
            />
          </div>
        </Container>
      </section>
      <section className="py-10">
        <Container>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
              {/* Left: copy */}
              <div>
                <h2 className="text-lg font-semibold">Service area</h2>
                <p className="mt-3 text-sm text-foreground">
                  Based in Frome but serving most of Somerset. Home visits available depending on
                  the job. Workshop-style jobs can be collected and returned.
                </p>

                <div className="mt-5">
                  <ButtonLink variant="primary" href="/contact">
                    Ask about availability
                  </ButtonLink>
                </div>

                <p className="mt-24 text-xs text-muted">
                  Tip: If you’re outside Frome, mention your postcode and I’ll confirm if I can get
                  to you.
                </p>
              </div>

              {/* Right: map */}
              <div className="overflow-hidden rounded-xl border border-border bg-background">
                <div className="relative h-64 w-full md:h-full min-h-64">
                  <iframe
                    title="Map showing Frome, Somerset"
                    className="absolute inset-0 h-full w-full grayscale-100 contrast-100"
                    src="https://www.openstreetmap.org/export/embed.html
?bbox=-2.65,51.05,-2.05,51.40
&layer=mapnik
&marker=51.229,-2.323"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
