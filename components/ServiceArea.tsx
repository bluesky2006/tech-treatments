// src/components/ServiceArea.tsx
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

export default function ServiceArea() {
  return (
    <section className="py-5">
      <Container>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
            {/* Left: copy */}
            <div>
              <h2 className="text-lg font-semibold">Service area</h2>
              <p className="mt-3 text-sm text-foreground">
                Based in Frome but serving most of Somerset. Home visits available depending on the
                job. Workshop-style jobs can be collected and returned.
              </p>

              <div className="mt-5">
                <ButtonLink variant="primary" href="/contact">
                  Ask about availability
                </ButtonLink>
              </div>

              <p className="mt-24 text-xs text-muted">
                Tip: If you’re outside Frome, mention your postcode and I’ll confirm if I can get to
                you.
              </p>
            </div>

            {/* Right: map */}
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <div className="relative h-64 w-full md:h-full min-h-64">
                <iframe
                  title="Map showing Frome, Somerset"
                  className="absolute inset-0 h-full w-full grayscale-100 contrast-100"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-2.65,51.05,-2.05,51.40&layer=mapnik&marker=51.229,-2.323"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
