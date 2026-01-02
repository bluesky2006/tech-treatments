"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

export default function FAQSection({
  title = "FAQ",
  intro,
  items,
  className,
}: {
  title?: string;
  intro?: string;
  items: FAQItem[];
  className?: string;
}) {
  const sectionId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn("py-4", className)} aria-labelledby={sectionId}>
      <div className="rounded-3xl border border-border bg-card p-6">
        <div className="max-w-2xl">
          <h2 id={sectionId} className="text-xl font-semibold tracking-tight">
            {title}
          </h2>
          {intro && <p className="mt-2 text-sm text-muted">{intro}</p>}
        </div>

        <div className="mt-6 divide-y divide-border">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `${sectionId}-panel-${i}`;
            const buttonId = `${sectionId}-button-${i}`;

            return (
              <div key={`${item.q}-${i}`} className="py-3">
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-2 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-base font-semibold text-foreground">{item.q}</span>
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-2 text-large transition text-teal-400 font-medium",
                      isOpen && "text-foreground"
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pb-2 pt-1 text-sm text-foreground">{item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
