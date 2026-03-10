export const SITE_URL = "https://techtreatments.co.uk";
export const SITE_NAME = "Tech Treatments";
export const SITE_UPDATED_AT = "2026-03-10T00:00:00.000Z";
export const DEFAULT_OG_IMAGE = "/hero.jpg";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
