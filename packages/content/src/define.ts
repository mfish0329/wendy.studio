import type {
  AudienceSection,
  Brand,
  Contact,
  CtaSection,
  Footer,
  Hero,
  LinkItem,
  ProcessSection,
  Seo,
  ServiceSection,
  SiteContent,
  WorkSection,
} from "./schema";
import {
  defaultAudienceSection,
  defaultCtaSection,
  defaultFooter,
  defaultHero,
  defaultNav,
  defaultProcessSection,
  defaultSeo,
  defaultServiceSection,
  defaultWorkSection,
  sharedBrand,
  sharedContact,
} from "./shared";

/** 沒有預約連結時，主要 CTA 會退回 mailto，這是信件主旨 */
const MAILTO_SUBJECT = "想預約 30 分鐘需求訪談";

/**
 * 各站傳給 defineSite 的覆寫內容。
 *
 * 每個區塊做一層淺層合併，所以可以只覆寫 hero.headline 而保留其他欄位；
 * 但陣列型欄位（items、steps、trustBadges、nav）是整包替換，不會逐項合併。
 */
export type SiteOverrides = {
  /**
   * 這一站的正式網址，必填。影響 canonical、Open Graph 與 sitemap。
   * 刻意設成必填：忘了改會讓四個站的 canonical 全部指向同一個網域，
   * 而這種錯誤在畫面上完全看不出來。
   */
  url: string;
  /** 品牌名稱通常四站一致，只有特殊情況才覆寫 */
  brand?: Partial<Omit<Brand, "url">>;
  contact?: Partial<Contact>;
  hero?: Partial<Hero>;
  audienceSection?: Partial<AudienceSection>;
  serviceSection?: Partial<ServiceSection>;
  processSection?: Partial<ProcessSection>;
  workSection?: Partial<WorkSection>;
  ctaSection?: Partial<CtaSection>;
  footer?: Partial<Footer>;
  nav?: LinkItem[];
  seo?: Partial<Seo>;
};

/**
 * 把共用基底與這一站的情境文案合併成完整的站台內容。
 *
 * 用法（各 app 的 src/content/site.ts）：
 *
 * ```ts
 * export const { brand, hero, seo } = defineSite({
 *   url: "https://law.wendy.studio",
 *   hero: { headline: "..." },
 * });
 * ```
 */
export function defineSite(overrides: SiteOverrides): SiteContent {
  const brand: Brand = {
    ...sharedBrand,
    ...overrides.brand,
    url: overrides.url,
  };

  const contact: Contact = { ...sharedContact, ...overrides.contact };

  const primaryCtaHref = contact.booking
    ? contact.booking.href
    : `mailto:${contact.email}?subject=${encodeURIComponent(MAILTO_SUBJECT)}`;

  return {
    brand,
    contact,
    primaryCtaHref,
    hero: { ...defaultHero, ...overrides.hero },
    audienceSection: { ...defaultAudienceSection, ...overrides.audienceSection },
    serviceSection: { ...defaultServiceSection, ...overrides.serviceSection },
    processSection: { ...defaultProcessSection, ...overrides.processSection },
    workSection: { ...defaultWorkSection, ...overrides.workSection },
    ctaSection: { ...defaultCtaSection, ...overrides.ctaSection },
    footer: { ...defaultFooter, ...overrides.footer },
    nav: overrides.nav ?? defaultNav,
    seo: { ...defaultSeo(brand), ...overrides.seo },
  };
}
