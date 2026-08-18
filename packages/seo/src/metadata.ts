import type { SiteContent } from "@wendy/content";
import type { Metadata } from "next";

/**
 * 產生全站 metadata。四個版型的 SEO 結構完全一致，差異只在 site 裡的值，
 * 所以這段邏輯共用，各 app 的 layout.tsx 只要 `export const metadata = buildMetadata(site)`。
 */
export function buildMetadata(site: SiteContent): Metadata {
  const { brand, seo } = site;

  // demo 站（indexable: false）明確送出 noindex，避免四個結構相似的站
  // 互相競爭關鍵字、稀釋主站排名
  const robots: Metadata["robots"] = seo.indexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false };

  return {
    // metadataBase 讓 OG 圖與 canonical 能產生絕對網址
    metadataBase: new URL(brand.url),
    title: {
      default: seo.title,
      template: seo.titleTemplate,
    },
    description: seo.description,
    keywords: seo.keywords,
    applicationName: brand.name,
    authors: [{ name: brand.name, url: brand.url }],
    creator: brand.name,
    publisher: brand.name,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: seo.locale,
      url: brand.url,
      siteName: brand.name,
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots,
    formatDetection: {
      telephone: false,
    },
  };
}
