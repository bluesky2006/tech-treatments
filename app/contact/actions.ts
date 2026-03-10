"use server";

import { Resend } from "resend";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 4000;
const MIN_SUBMISSION_AGE_MS = 3000;

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

function serviceLabel(value: string) {
  switch (value) {
    case "help":
      return "Help & repairs";
    case "upgrades":
      return "Upgrades";
    case "custom":
      return "New & custom PCs";
    case "retro":
      return "Retro & disposal";
    case "not_sure":
      return "Not sure";
    default:
      return value;
  }
}

function isAllowedService(value: string) {
  return (
    value === "help" ||
    value === "upgrades" ||
    value === "custom" ||
    value === "retro" ||
    value === "not_sure"
  );
}

export async function sendContactEmail(formData: FormData) {
  try {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();
    const submittedAt = Number(formData.get("submittedAt") ?? 0);

    if (website) {
      return { ok: false, error: "Something went wrong sending your message." } as const;
    }

    if (!Number.isFinite(submittedAt) || Date.now() - submittedAt < MIN_SUBMISSION_AGE_MS) {
      return { ok: false, error: "Please wait a moment and try again." } as const;
    }

    if (!name || !email || !message) {
      return { ok: false, error: "Please fill in all fields." } as const;
    }
    if (!service) {
      return { ok: false, error: "Please select a service." } as const;
    }
    if (!isAllowedService(service)) {
      return { ok: false, error: "Please select a valid service." } as const;
    }
    if (!isEmail(email)) {
      return { ok: false, error: "Please enter a valid email address." } as const;
    }
    if (name.length > MAX_NAME_LENGTH) {
      return { ok: false, error: "Name is too long." } as const;
    }
    if (email.length > MAX_EMAIL_LENGTH) {
      return { ok: false, error: "Email is too long." } as const;
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return { ok: false, error: "Message is too long." } as const;
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL?.trim();
    const from = process.env.CONTACT_FROM_EMAIL?.trim();

    if (!apiKey || !to || !from) {
      return {
        ok: false,
        error: "Email is not configured on the server yet.",
      } as const;
    }

    const resend = new Resend(apiKey);

    const serviceText = serviceLabel(service);

    const { error } = await resend.emails.send({
      from: `Tech Treatments <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New ${serviceText} enquiry from ${name} (Tech Treatments)`,
      text: [
        `Service: ${serviceText}`,
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
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
