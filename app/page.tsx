import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import HomeCard from "@/components/HomeCard";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100dvh-5rem)] overflow-hidden flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero2.jpg)" }}
          aria-hidden="true"
        />

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-background/75" aria-hidden="true" />

        {/* Content */}
        <Container>
          <div className="relative">
            <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
              Local computer help
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Friendly computer help for everyday people
            </h1>

            <p className="mt-8 max-w-3xl text-foreground">
              Repairs, upgrades, restorations and new builds – no jargon, no pressure. Based near
              Frome, Somerset.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink variant="primary" href="/contact">
                Get in touch
              </ButtonLink>
              <ButtonLink href="/services">See services</ButtonLink>
            </div>

            <p className="mt-8 text-sm text-muted">
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
                "Gaming PCs (sensible builds)",
              ]}
              src="/icons/tower-pc.png"
            />
            <HomeCard
              title="Restore & recycle"
              points={[
                "Retro systems and older machines",
                "Data transfer (where possible)",
                "Secure wiping and responsible disposal",
              ]}
              src="/icons/computer.png"
            />
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">How it works</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-foreground">
                <li>You describe the problem (message, email, or call).</li>
                <li>I’ll explain your options and likely costs clearly.</li>
                <li>I fix it – or tell you honestly if it’s not worth doing.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Service area</h2>
              <p className="mt-3 text-sm text-foreground">
                Frome and nearby villages. Home visits available depending on the job.
                Workshop-style jobs can be collected and returned.
              </p>
              <div className="mt-5">
                <ButtonLink href="/contact">Ask about availability</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
