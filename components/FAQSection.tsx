"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type FAQItem = {
  q: string;
  a: React.ReactNode;
};

export default function FAQSection({
  title = "FAQ",
  intro,
  items,
}: {
  title?: string;
  intro?: string;
  items: FAQItem[];
}) {
  const sectionId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby={sectionId}>
      <div className="rounded-3xl border border-border bg-card p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h2 id={sectionId} className="text-xl font-semibold tracking-tight">
              {title}
            </h2>
            {intro && <p className="mt-2 text-sm text-muted">{intro}</p>}
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `${sectionId}-panel-${i}`;
            const buttonId = `${sectionId}-button-${i}`;

            return (
              <button
                key={`${item.q}-${i}`}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={cn(
                  "w-full text-left rounded-2xl border border-border bg-background p-5 transition cursor-pointer",
                  "hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-200/10 focus:border-teal-200/30",
                  isOpen && "shadow-sm"
                )}
              >
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-foreground">{item.q}</span>

                  <span
                    className={cn(
                      "pointer-events-none inline-flex h-5 w-5 items-center justify-center text-sm font-semibold text-teal-400 transition",
                      isOpen && "text-foreground"
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </div>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid min-h-0 transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "mt-3 grid-rows-[1fr]" : "mt-0 grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="text-sm text-foreground">{item.a}</div>
                  </div>
                </div>
              </button>
            );
          })}{" "}
        </div>
      </div>
    </section>
  );
}
