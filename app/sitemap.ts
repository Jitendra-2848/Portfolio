import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://workwithjitendra.vercel.app";

  const baseUrl = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
  const cleanBaseUrl = baseUrl.replace(/\/$/, "");

  return [
    {
      url: `${cleanBaseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
