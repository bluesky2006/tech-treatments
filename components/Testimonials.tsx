import Container from "@/components/Container";

export type Testimonial = {
  quote: string;
  name: string;
  location?: string;
  service?: string;
};

type TestimonialsProps = {
  title?: string;
  intro?: string;
  items: Testimonial[];
};

export default function Testimonials({
  title = "What people say",
  intro = "A few words from recent customers.",
  items,
}: TestimonialsProps) {
  if (!items?.length) return null;

  return (
    <section className="py-5">
      <Container>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted">{intro}</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {items.slice(0, 6).map((t, idx) => (
              <figure key={idx} className="rounded-2xl border border-border bg-background p-5">
                <blockquote className="text-sm text-foreground">
                  <span className="text-muted">“</span>
                  {t.quote}
                  <span className="text-muted">”</span>
                </blockquote>

                <figcaption className="mt-4 text-sm">
                  <div className="font-semibold text-foreground">{t.name}</div>

                  {(t.location || t.service) && (
                    <div className="mt-1 text-xs text-muted">
                      {[t.location, t.service].filter(Boolean).join(" · ")}
                    </div>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
