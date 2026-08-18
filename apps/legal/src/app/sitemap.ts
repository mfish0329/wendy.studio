import type { MetadataRoute } from "next";

import { buildSitemap } from "@wendy/seo";

import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(site);
}
