import type { MetadataRoute } from "next";

import { globals } from "@/globals";
import { allDocs, normalizePath } from "@/utils/docs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: globals.websiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const docPages: MetadataRoute.Sitemap = allDocs.map((doc) => ({
    url: `${globals.websiteUrl}/docs/${doc.folder}/${normalizePath(doc._meta.path)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...docPages];
}
