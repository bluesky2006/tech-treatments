import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://techtreatments.co.uk", lastModified: new Date() },
    { url: "https://techtreatments.co.uk/services", lastModified: new Date() },
    { url: "https://techtreatments.co.uk/contact", lastModified: new Date() },
    { url: "https://techtreatments.co.uk/faq", lastModified: new Date() },
  ];
}
