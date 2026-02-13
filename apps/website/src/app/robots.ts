import type { MetadataRoute } from "next";
import { globals } from "@/globals";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
        ],
        sitemap: `${globals.websiteUrl}/sitemap.xml`,
    };
}