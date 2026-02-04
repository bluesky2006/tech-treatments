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
      <div className="relative mx-4 w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl bg-card shadow-2xl">
        {/* Image header */}
        <div className="relative hidden h-56 w-full md:block">
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
        <div className="overflow-y-auto overscroll-contain max-h-[90vh] md:max-h-[calc(90vh-14rem)]">
          {/* Main content (padded) */}
          <div className="p-6 pb-24 sm:pb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-foreground">{service.intro}</p>
              </div>

              {/* Close button */}
              <div className="absolute right-4 top-4 z-10">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-3xl leading-none text-muted transition hover:text-teal-400"
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
          </div>

          {/* Sticky CTA (mobile) */}
          <div
            className="sticky bottom-0 border-t border-border/60 bg-card/95 px-4 py-4 backdrop-blur
                sm:static sm:border-0 sm:bg-transparent sm:px-6 sm:py-6"
          >
            <a
              href="/contact"
              className="flex w-full sm:w-auto sm:inline-flex items-center justify-center rounded-2xl bg-teal-500 px-4 py-3 text-sm font-semibold text-black hover:bg-teal-400 sm:px-5 sm:py-2.5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
