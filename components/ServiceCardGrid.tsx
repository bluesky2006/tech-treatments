"use client";

import ServiceCard from "@/components/ServiceCard";
import type { ServiceData, ServiceKey } from "@/lib/services";

export default function ServiceCardGrid({
  services,
  onOpen,
}: {
  services: ServiceData[];
  onOpen: (key: ServiceKey) => void;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 items-stretch">
      {services.map((service) => (
        <button
          key={service.key}
          type="button"
          onClick={() => onOpen(service.key)}
          className="group h-full text-left rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60"
        >
          <ServiceCard
            title={service.title}
            description={service.cardDescription}
            points={service.cardPoints}
            src={service.imageSrc}
          />
        </button>
      ))}
    </div>
  );
}
