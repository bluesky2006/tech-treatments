"use client";

import { useRef, useState, useTransition } from "react";
import { sendContactEmail } from "@/app/contact/actions";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);

  return (
    <form
      ref={formRef}
      className="mt-4 space-y-4"
      action={(formData) => {
        setStatus(null);

        startTransition(async () => {
          const res = await sendContactEmail(formData);

          if (res.ok) {
            formRef.current?.reset();
            setStatus({ ok: true, message: "Thanks – message sent. I’ll get back to you soon." });
          } else {
            setStatus({ ok: false, message: res.error ?? "Something went wrong." });
          }
        });
      }}
    >
      <div>
        <label className="block text-xs font-medium tracking-wide text-muted uppercase">Name</label>
        <input
          className="mt-2 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted outline-none focus:border-teal-200/30 focus:ring-2 focus:ring-teal-200/10"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-medium tracking-wide text-muted uppercase">
          Email
        </label>
        <input
          className="mt-2 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted outline-none focus:border-teal-200/30 focus:ring-2 focus:ring-teal-200/10"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label className="block text-xs font-medium tracking-wide text-muted uppercase">
          Service needed
        </label>

        <select
          className="
    mt-2 w-full appearance-none
    rounded-xl border border-border bg-card
    px-3 py-2 pr-9
    text-sm text-foreground
    outline-none
    focus:border-teal-200/30 focus:ring-2 focus:ring-teal-200/10
    bg-no-repeat bg-[length:20px]
    bg-position-[right_12px_center]
  "
          name="service"
          defaultValue=""
          required
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Cpolyline points='6 8 10 12 14 8'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            Select a service…
          </option>
          <option value="help">Help & repairs</option>
          <option value="upgrades">Upgrades</option>
          <option value="custom">New & custom PCs</option>
          <option value="retro">Retro & disposal</option>
          <option value="not_sure">Not sure</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium tracking-wide text-muted uppercase">
          What’s going on?
        </label>
        <textarea
          className="mt-2 min-h-35 w-full resize-y rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted outline-none focus:border-teal-200/30 focus:ring-2 focus:ring-teal-200/10"
          name="message"
          placeholder="e.g., Laptop is very slow, takes ages to start, worried about photos…"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-teal-200/30 bg-teal-300 px-4 text-sm font-semibold text-zinc-900 transition hover:scale-101 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Send"}
      </button>

      {status && (
        <p
          className={["text-sm", status.ok ? "text-foreground" : "text-red-400"].join(" ")}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
