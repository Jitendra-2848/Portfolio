import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://workwithjitendra.vercel.app";

  const baseUrl = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
  const cleanBaseUrl = baseUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${cleanBaseUrl}/sitemap.xml`,
  };
}
