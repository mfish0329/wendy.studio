/**
 * ─────────────────────────────────────────────────────────────
 *  站台內容的資料結構定義
 * ─────────────────────────────────────────────────────────────
 *  四個版型（tech / friendly / legal / commerce）共用這一份 schema，
 *  差異只在填進去的文案與視覺，區塊結構本身是一致的。
 */

/** 通用的「文字 + 連結」，導覽列、按鈕、聯絡方式都用它 */
export type LinkItem = {
  label: string;
  href: string;
};

export type Brand = {
  /** 對外品牌名 */
  name: string;
  /** 用於 <title> 後綴與結構化資料 */
  legalName: string;
  /** 這一站的正式網址（影響 canonical / OG / sitemap），各站不同 */
  url: string;
};

export type Contact = {
  /** 對外正式 Email */
  email: string;
  /** LINE 官方帳號；設為 null 時所有 LINE 連結自動隱藏 */
  line: LinkItem | null;
  /** 預約連結；設為 null 時主要 CTA 自動退回 mailto */
  booking: LinkItem | null;
};

export type Hero = {
  /** 主標：價值主張，1 句，結果導向 */
  headline: string;
  /** 副標：服務對象 + 範圍，1 句 */
  subheadline: string;
  primaryCta: LinkItem;
  /** 次要 CTA，設為 null 則不顯示 */
  secondaryCta: LinkItem | null;
  /** 首屏信任標記，各 2–4 字短句 */
  trustBadges: string[];
};

export type Audience = {
  id: string;
  /** 客群名稱 */
  name: string;
  /** 一句痛點 */
  pain: string;
  /** 一句合作後的結果 */
  outcome: string;
};

export type AudienceSection = {
  eyebrow: string;
  title: string;
  items: Audience[];
};

export type Service = {
  id: string;
  /** 服務名稱 */
  name: string;
  /** 一句成果說明（寫客戶會得到什麼，不寫技術棧） */
  outcome: string;
};

export type ServiceSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: Service[];
};

export type ProcessStep = {
  name: string;
  description: string;
};

export type ProcessSection = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
  /** 保固說明句，顯示在流程區塊下方 */
  warranty: string;
};

export type Work = {
  id: string;
  /** 案件類型，例：形象官網、預約系統 */
  category: string;
  title: string;
  /** 解決什麼問題（1 句） */
  problem: string;
  /** 成果截圖，放在該 app 的 public/works/ 底下 */
  image: string;
  /** 截圖替代文字（SEO 與無障礙用） */
  imageAlt: string;
  /** 可選的線上 Demo 連結；沒有就留 undefined，卡片不會出現連結 */
  href?: string;
};

export type WorkSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: Work[];
};

export type CtaSection = {
  title: string;
  description: string;
  cta: { label: string };
};

export type Footer = {
  /** 品牌一句話描述 */
  tagline: string;
  /** 版權年份起始年，顯示為「起始年–今年」 */
  since: number;
};

export type Seo = {
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  locale: string;
  /**
   * 是否開放搜尋引擎索引。
   *
   * 版型 demo 站一律設為 false：四個內容結構高度相似又互相連結的站若全部被索引，
   * Google 可能判定成 doorway pages，反而拖累主站排名。
   */
  indexable: boolean;
};

/** 組裝完成的站台內容，各 app 的 content/site.ts 會把它解構成 named export */
export type SiteContent = {
  brand: Brand;
  contact: Contact;
  /** 主要 CTA 的導向：優先使用預約連結，沒有就退回 mailto */
  primaryCtaHref: string;
  hero: Hero;
  audienceSection: AudienceSection;
  serviceSection: ServiceSection;
  processSection: ProcessSection;
  workSection: WorkSection;
  ctaSection: CtaSection;
  footer: Footer;
  nav: LinkItem[];
  seo: Seo;
};
