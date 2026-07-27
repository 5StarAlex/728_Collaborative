import type { MetadataRoute } from "next";
import { articles, resources } from "@/lib/content";
import { industryPages } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://728collaborative.org";
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/728-consulting",
    "/services/728-learning",
    "/services/sw-at-home",
    "/industries",
    "/government-contracting",
    "/insights",
    "/resources",
    "/contact",
    "/schedule",
    "/request-proposal",
    "/privacy",
    "/terms",
    "/accessibility"
  ];

  const routes: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : 0.75
    })),
    ...industryPages.map((industry) => ({
      url: `${siteUrl}/industries/${industry.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/insights/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6
    })),
    ...resources.map((resource) => ({
      url: `${siteUrl}/resources/${resource.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
  return routes;
}
