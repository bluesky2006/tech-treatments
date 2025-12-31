"use client";

export default function ContactForm() {
  return (
    <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-xs font-medium tracking-wide text-muted uppercase">Name</label>
        <input
          className="mt-2 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-teal-200/30 focus:ring-2 focus:ring-teal-200/10"
          name="name"
          autoComplete="name"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-xs font-medium tracking-wide text-muted uppercase">
          Email
        </label>
        <input
          className="mt-2 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-teal-200/30 focus:ring-2 focus:ring-teal-200/10"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-xs font-medium tracking-wide text-muted uppercase">
          What’s going on?
        </label>
        <textarea
          className="mt-2 min-h-35 w-full resize-y rounded-xl border border-border bg-card px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-teal-200/30 focus:ring-2 focus:ring-teal-200/10"
          name="message"
          placeholder="e.g., Laptop is very slow, takes ages to start, worried about photos…"
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-teal-200/30 bg-teal-200/10 px-4 text-sm font-medium text-zinc-50 transition hover:bg-teal-200/15"
      >
        Send (setup required)
      </button>
    </form>
  );
}
