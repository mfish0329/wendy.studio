/**
 * ─────────────────────────────────────────────────────────────
 *  共用內容基底（Single Source of Truth）
 * ─────────────────────────────────────────────────────────────
 *  這個檔案分成兩區，界線很重要：
 *
 *  【A. 品牌識別】四個站永遠一致。改一次，四個站同步生效。
 *     → 品牌名、Email、LINE、預約連結、版權年份
 *
 *  【B. 預設文案】各站可以在自己的 content/site.ts 覆寫。
 *     → hero、服務、案例等情境文案。律所版寫律所的，電商版寫電商的。
 *       沒有覆寫的欄位就沿用這裡的預設值。
 *
 *  標示 `TODO(PM)` 的欄位目前是暫用的 demo 值，等待正式內容替換。
 *  詳細待補清單請見專案根目錄的 CONTENT-TODO.md。
 */

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
  WorkSection,
} from "./schema";

/* ═══════════════════════════════════════════════════════════
   A. 品牌識別 — 四站共用，不建議各站覆寫
   ═══════════════════════════════════════════════════════════ */

/** brand.url 由各站的 defineSite({ url }) 填入，這裡只放共用的名稱 */
export const sharedBrand: Omit<Brand, "url"> = {
  // TODO(PM): 確認正式品牌名與英文寫法
  name: "Wendy Studio",
  legalName: "Wendy Studio",
};

export const sharedContact: Contact = {
  // TODO(PM): 換成對外正式 Email（必填）
  email: "hello@wendy.studio",
  // TODO(PM): 換成正式 LINE 官方帳號連結；若沒有請設為 null，UI 會自動隱藏
  line: {
    label: "@wendystudio",
    href: "https://line.me/R/ti/p/@wendystudio",
  },
  // TODO(PM): 若改用 Calendly / Google Form 等預約連結，把 href 換掉即可；
  //           設為 null 時，所有主要 CTA 會自動退回 mailto。
  booking: null,
};

/* ═══════════════════════════════════════════════════════════
   B. 預設文案 — 各站可覆寫
   ═══════════════════════════════════════════════════════════ */

export const defaultHero: Hero = {
  // TODO(PM): 主標文案
  headline: "把你的服務，變成客戶看得懂、找得到、也願意主動聯絡的網站。",
  // TODO(PM): 副標文案
  subheadline:
    "我們替實體店家、小型品牌與早期團隊，打造能上線、能維護、能長大的官網與業務系統。",
  // TODO(PM): 主 CTA 文案與導向
  primaryCta: { label: "預約 30 分鐘訪談", href: "#contact" },
  secondaryCta: { label: "看我們怎麼做", href: "#services" },
  // TODO(PM): 確認是否屬實，不實請刪除
  trustBadges: ["書面報價", "分階段驗收", "交付後 30 天保固"],
};

export const defaultAudienceSection: AudienceSection = {
  eyebrow: "我們服務誰",
  title: "如果你正卡在這些地方，我們大概幫得上忙",
  // TODO(PM): 3 類客群最終命名，以及每類的痛點與結果文案
  items: [
    {
      id: "retail",
      name: "實體店家",
      pain: "客人想找你，卻只能在社群翻舊貼文，不知道怎麼預約、怎麼聯絡。",
      outcome:
        "一個清楚的對外入口，把營業時間、地圖、預約與聯絡方式收在同一頁。",
    },
    {
      id: "brand",
      name: "小型品牌",
      pain: "服務其實做得很好，但形象散落在各個平台，說服力被稀釋掉了。",
      outcome: "統一的品牌敘事與視覺，讓潛在客戶第一眼就看懂你的價值在哪。",
    },
    {
      id: "startup",
      name: "早期團隊",
      pain: "需要一個能上線驗證的官網或小系統，又不想一開始就扛大型平台的成本。",
      outcome: "先做能驗證市場的最小可用版本，之後再依實際成長逐步擴充。",
    },
  ],
};

export const defaultServiceSection: ServiceSection = {
  eyebrow: "服務項目",
  title: "我們專注做三件事",
  description: "範圍講清楚，比什麼都能做更重要。",
  // TODO(PM): 3 項服務最終名稱與各一句成果說明
  items: [
    {
      id: "website",
      name: "形象官網 / Landing Page",
      outcome:
        "一頁說清你是誰、能幫什麼忙，並把訪客穩穩導向聯絡與預約，不讓流量白白流走。",
    },
    {
      id: "system",
      name: "業務系統",
      outcome:
        "把預約、訂單、會員這些每天在跑的流程搬上線，減少人工往返，也減少漏單。",
    },
    {
      id: "admin",
      name: "後台管理與內部工具",
      outcome:
        "讓團隊自己就能改內容、看數據、處理訂單，不必每一個小調整都回頭找工程師。",
    },
  ],
};

export const defaultProcessSection: ProcessSection = {
  eyebrow: "合作流程",
  title: "接下來會發生什麼，我們先講清楚",
  // TODO(PM): 每步一句說明文案
  steps: [
    {
      name: "需求訪談（30 分鐘）",
      description:
        "先聊清楚你的客群、目標與現在最卡的地方，確認方向對了再往下談。",
    },
    {
      name: "範圍與報價（書面確認）",
      description: "把「要做」與「不做」的項目寫成文件，價格與時程一次講明白。",
    },
    {
      name: "分階段開發（可見進度）",
      description: "每個階段都有可以點開的預覽連結，你隨時看得到目前做到哪裡。",
    },
    {
      name: "驗收交付",
      description:
        "依文件逐項驗收，上線後提供 30 天免費修正保固，確保一切如約定運作。",
    },
  ],
  // TODO(PM): 保固說明句 — 請確認保固條件是否正確
  warranty: "交付後 30 天內，與驗收項目相關的問題免費修正。",
};

export const defaultWorkSection: WorkSection = {
  eyebrow: "作品 / Demo",
  title: "實際長什麼樣子",
  // TODO(PM): 正式作品清單與真實截圖；目前為示意樣品
  description: "以下為示意樣品，正式案例整理中。",
  items: [
    {
      id: "dessert-shop",
      category: "形象官網",
      title: "甜點工作室形象官網",
      problem:
        "客人重複私訊詢問營業時間與訂購方式，店主每天花大量時間回覆同樣的問題。",
      image: "/works/demo-website.svg",
      imageAlt: "甜點工作室形象官網的首頁畫面示意圖",
    },
    {
      id: "salon-booking",
      category: "預約系統",
      title: "美容工作室線上預約",
      problem: "手動排班容易撞期，客人也看不到還剩下哪些可預約時段。",
      image: "/works/demo-booking.svg",
      imageAlt: "線上預約系統的時段選擇畫面示意圖",
    },
    {
      id: "order-admin",
      category: "後台管理",
      title: "訂單管理後台",
      problem: "訂單分散在多個平台，每次出貨都要人工比對，容易出錯。",
      image: "/works/demo-admin.svg",
      imageAlt: "訂單管理後台的列表與統計畫面示意圖",
    },
  ],
};

export const defaultCtaSection: CtaSection = {
  // TODO(PM): CTA 最終文案
  title: "不確定適不適合？先聊 30 分鐘。",
  description:
    "不用先準備好完整需求，帶著問題來就可以。聊完你至少會拿到一份明確的方向建議，最後沒有合作也沒關係。",
  cta: { label: "預約 30 分鐘訪談" },
};

export const defaultFooter: Footer = {
  // TODO(PM): 確認 Footer 要放的一句品牌描述
  tagline: "為店家、品牌與早期團隊，做能用得久的網站與系統。",
  since: 2024,
};

export const defaultNav: LinkItem[] = [
  { label: "服務誰", href: "#audience" },
  { label: "服務項目", href: "#services" },
  { label: "合作流程", href: "#process" },
  { label: "作品", href: "#works" },
];

/**
 * SEO 預設值。title 需要用到合併後的品牌名，所以做成函式而不是靜態物件。
 */
export function defaultSeo(brand: Brand): Seo {
  return {
    // TODO(PM): 確認 SEO 標題與描述（描述建議控制在 80–120 字之間）
    title: `${brand.name}｜形象官網與業務系統開發`,
    titleTemplate: `%s｜${brand.name}`,
    description:
      "Wendy Studio 為實體店家、小型品牌與早期團隊打造形象官網、預約訂單系統與後台管理工具。書面報價、分階段開發、交付後 30 天保固。歡迎預約 30 分鐘免費需求訪談。",
    keywords: [
      "形象官網",
      "Landing Page",
      "網站設計",
      "預約系統",
      "訂單系統",
      "後台管理",
      "網頁開發",
      "接案工作室",
    ],
    locale: "zh_TW",
    // 安全預設：忘記設定時不會被索引，比誤放索引安全
    indexable: false,
  };
}
