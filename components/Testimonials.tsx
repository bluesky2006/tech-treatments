import Container from "@/components/Container";

export type Testimonial = {
  quote: string;
  name: string;
  rating: number; // 1–5
};

type TestimonialsProps = {
  title?: string;
  intro?: string;
  items: Testimonial[];
};

function Stars({ rating }: { rating: number }) {
  const total = 5;

  return (
    <div className="mt-2 flex items-center text-yellow-500">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={i < rating ? "opacity-100" : "opacity-30"}>
          ★
        </span>
      ))}
    </div>
  );
}

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

                <figcaption className="mt-3 text-sm">
                  <div className="font-semibold text-foreground">{t.name}</div>

                  <Stars rating={t.rating} />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
