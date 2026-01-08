"use client";

import { useEffect } from "react";
import Image from "next/image";
import BulletList from "./BulletList";
import type { ServiceData } from "@/lib/services";

export default function ServiceModal({
  open,
  onClose,
  service,
}: {
  open: boolean;
  onClose: () => void;
  service: ServiceData | null;
}) {
  // Esc to close
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !service) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${service.title} details`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Panel */}
      <div className="relative mx-4 w-full max-w-3xl overflow-hidden rounded-3xl bg-card shadow-2xl">
        {/* Image header */}
        <div className="relative h-56 w-full">
          <Image
            src={service.imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 768px) 672px, 100vw"
            priority
          />
          {/* Optional subtle overlay for readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-foreground">{service.intro}</p>
            </div>

            {/* Improved close button */}
            <div className="absolute right-4 top-4 z-10">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="flex h-10 w-10 items-center justify-center rounded-full text-3xl leading-none text-muted hover:text-teal-400 transition"
              >
                ×
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <section>
              <h4 className="text-sm font-semibold tracking-wide text-muted uppercase">
                What you get
              </h4>
              <BulletList items={service.whatYouGet} className="mt-3" />
            </section>

            <section>
              <h4 className="text-sm font-semibold tracking-wide text-muted uppercase">
                Typical jobs
              </h4>
              <BulletList items={service.typicalJobs} className="mt-3" />
            </section>
          </div>

          {service.goodToKnow?.length ? (
            <section className="mt-6">
              <h4 className="text-sm font-semibold tracking-wide text-muted uppercase">
                Good to know
              </h4>
              <BulletList items={service.goodToKnow} className="mt-3" />
            </section>
          ) : null}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/contact"
              className="flex flex-wrap gap-3 items-center justify-center rounded-2xl bg-teal-500 px-4 py-2 text-sm font-semibold text-black hover:bg-teal-400"
            >
              Get in touch about this
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
