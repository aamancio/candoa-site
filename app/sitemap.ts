import type { MetadataRoute } from "next";

const siteUrl = "https://www.candoa.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/images/candoa-normal-tabs.png`],
    },
  ];
}
