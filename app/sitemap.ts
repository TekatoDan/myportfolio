import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://danportfolio-ashy.vercel.app",
      lastModified: new Date("2026-05-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
