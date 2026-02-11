import type { MetadataRoute } from "next";
import { allDocs, normalizePath } from "@/utils/docs";

const baseUrl = "https://code-blocks.pheralb.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const docPages: MetadataRoute.Sitemap = allDocs.map((doc) => ({
    url: `${baseUrl}/docs/${doc.folder}/${normalizePath(doc._meta.path)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...docPages];
}
