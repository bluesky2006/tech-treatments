export const SITE_URL = "https://techtreatments.co.uk";
export const SITE_NAME = "Tech Treatments";
export const SITE_UPDATED_AT = "2026-03-10T00:00:00.000Z";
export const DEFAULT_OG_IMAGE = "/hero.jpg";
export const LOGO_IMAGE = "/logo.png";
export const GOOGLE_BUSINESS_PROFILE_URL =
  "https://www.google.com/maps/place/Tech+Treatments/@51.1126112,-2.9798105,9z/data=!4m10!1m2!2m1!1sTech+Treatments!3m6!1s0x484de4f7f3b35d8b:0x564418afcab471d9!8m2!3d51.1163188!4d-2.979803!15sCg9UZWNoIFRyZWF0bWVudHNaESIPdGVjaCB0cmVhdG1lbnRzkgEXY29tcHV0ZXJfcmVwYWlyX3NlcnZpY2WaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnRTUjFwcmRHeFZSamxWVGxkVk1sUnJVa3RQVXpGNVZXMXNWVkl3UlJBQuABAPoBBAg5EDY!16s%2Fg%2F11ywt7r9gm?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D";
export const SERVICE_AREAS = [
  "Frome",
  "Bath",
  "Bristol",
  "Bradford-on-Avon",
  "Corsham",
  "Devizes",
  "Glastonbury",
  "Keynsham",
  "Melksham",
  "Midsomer Norton",
  "Radstock",
  "Shepton Mallet",
  "Trowbridge",
  "Warminster",
  "Westbury",
  "Wells",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
