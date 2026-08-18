import type { SiteContent } from "@wendy/content";

/**
 * 結構化資料：讓 Google 認得這是一間提供哪些服務、如何聯絡的工作室，
 * 有機會在搜尋結果顯示更完整的資訊。
 */
export function buildProfessionalServiceJsonLd(site: SiteContent) {
  const { brand, contact, seo, serviceSection } = site;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    legalName: brand.legalName,
    url: brand.url,
    description: seo.description,
    email: contact.email,
    areaServed: { "@type": "Country", name: "Taiwan" },
    knowsLanguage: ["zh-Hant", "en"],
    sameAs: contact.line ? [contact.line.href] : [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "服務項目",
      itemListElement: serviceSection.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.outcome,
        },
      })),
    },
  };
}
