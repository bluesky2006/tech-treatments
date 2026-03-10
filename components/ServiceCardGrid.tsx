import ServiceCard from "@/components/ServiceCard";
import type { ServiceData } from "@/lib/services";
import Link from "next/link";

export default function ServiceCardGrid({ services }: { services: ServiceData[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 items-stretch">
      {services.map((service) => (
        <Link
          key={service.key}
          href={`/services/${service.slug}`}
          className="group h-full text-left rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60"
        >
          <ServiceCard
            title={service.title}
            description={service.cardDescription}
            points={service.cardPoints}
            src={service.imageSrc}
          />
        </Link>
      ))}
    </div>
  );
}
