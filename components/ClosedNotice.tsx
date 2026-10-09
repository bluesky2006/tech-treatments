"use client";

import { useEffect } from "react";

export default function ClosedNotice() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="closed-notice-title"
    >
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-2xl">
        <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
          Tech Treatments
        </p>
        <h2 id="closed-notice-title" className="mt-4 text-3xl font-semibold">
          Currently closed
        </h2>
        <p className="mt-4 text-foreground">
          Tech Treatments is currently closed so I&rsquo;m not offering computer repairs, upgrades or
          home visits at this time. Thank you to everyone who has used the service.
        </p>
        <p className="mt-6 text-sm text-muted">
          If you need to reach me, email{" "}
          <a
            className="underline decoration-border underline-offset-4 hover:text-foreground/80"
            href="mailto:techtreatments@gmail.com"
          >
            techtreatments@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
