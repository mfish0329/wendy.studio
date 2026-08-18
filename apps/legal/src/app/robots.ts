import type { MetadataRoute } from "next";

import { buildRobots } from "@wendy/seo";

import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return buildRobots(site);
}
