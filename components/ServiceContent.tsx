import BulletList from "@/components/BulletList";
import type { ServiceData } from "@/lib/services";

export default function ServiceContent({ service }: { service: ServiceData }) {
  const goodToKnow = service.goodToKnow ?? [];
  const pricingCopy =
    service.pricingHint ?? "Costs depend on the job, and any parts are agreed before ordering.";

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">How this usually works</h2>
        <BulletList
          items={service.whatYouGet}
          className="mt-5 space-y-3 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3 sm:space-y-0"
          itemClassName="items-start"
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{pricingCopy}</p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">Common things I can help with</h2>
        <BulletList
          items={service.typicalJobs}
          className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3"
          itemClassName="items-start"
        />
      </section>

      {goodToKnow.length ? (
        <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Before you book</h2>
          <BulletList
            items={goodToKnow}
            className="mt-5 space-y-3"
            itemClassName="items-start"
          />
        </section>
      ) : null}
    </div>
  );
}
