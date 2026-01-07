"use server";

import { Resend } from "resend";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getErrorMessage(err: unknown) {
  if (err && typeof err === "object" && "message" in err) {
    const msg = (err as { message?: unknown }).message;
    return typeof msg === "string" ? msg : undefined;
  }
  return undefined;
}

export async function sendContactEmail(formData: FormData) {
  try {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      return { ok: false, error: "Please fill in all fields." } as const;
    }
    if (!isEmail(email)) {
      return { ok: false, error: "Please enter a valid email address." } as const;
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return { ok: false, error: "Email is not configured on the server yet." } as const;
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Tech Treatments <${from}>`,
      to,
      replyTo: email, // <- string, compatible with Resend types
      subject: `New message from ${name} (Tech Treatments)`,
      text: [`Name: ${name}`, `Email: ${email}`, ``, `Message:`, message].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return { ok: false, error: getErrorMessage(error) ?? "Email failed to send." } as const;
    }

    return { ok: true } as const;
  } catch (err) {
    console.error("sendContactEmail crash:", err);
    return { ok: false, error: "Something went wrong sending your message." } as const;
  }
}
