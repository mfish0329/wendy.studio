import type { SiteContent } from "@wendy/content";
import type { MetadataRoute } from "next";

export function buildSitemap(site: SiteContent): MetadataRoute.Sitemap {
  return [
    {
      url: site.brand.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

export function buildRobots(site: SiteContent): MetadataRoute.Robots {
  const { brand, seo } = site;

  // 不開放索引的 demo 站直接全站 disallow，也不提供 sitemap
  if (!seo.indexable) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      host: brand.url,
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${brand.url}/sitemap.xml`,
    host: brand.url,
  };
}
