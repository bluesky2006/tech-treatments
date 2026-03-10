import { MetadataRoute } from "next";
import { SITE_UPDATED_AT, SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: SITE_UPDATED_AT },
    { url: `${SITE_URL}/services`, lastModified: SITE_UPDATED_AT },
    { url: `${SITE_URL}/about`, lastModified: SITE_UPDATED_AT },
    { url: `${SITE_URL}/contact`, lastModified: SITE_UPDATED_AT },
    { url: `${SITE_URL}/faq`, lastModified: SITE_UPDATED_AT },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: SITE_UPDATED_AT,
  }));

  return [...staticPages, ...servicePages];
}
