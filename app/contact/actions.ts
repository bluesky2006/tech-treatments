"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactEmail(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in all fields." } as const;
  }
  if (!isEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." } as const;
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !to || !from) {
    return { ok: false, error: "Email is not configured on the server yet." } as const;
  }

  const { data, error } = await resend.emails.send({
    from: `Tech Treatments <${from}>`,
    to,
    replyTo: email,
    subject: `New message from ${name} (Tech Treatments)`,
    text: [`Name: ${name}`, `Email: ${email}`, ``, `Message:`, message].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);

    // Common Resend “no verified domain / test mode” message
    const msg =
      typeof error === "object" && error && "message" in error
        ? String((error as any).message)
        : "Email failed to send.";

    return {
      ok: false,
      error: msg,
    } as const;
  }

  console.log("Resend sent:", data);
  return { ok: true } as const;
}
