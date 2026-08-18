/**
 * ─────────────────────────────────────────────────────────────
 *  白底藍天可愛版的站台內容
 * ─────────────────────────────────────────────────────────────
 *  這一站的定位是「生活感小店」：甜點烘焙、寵物照護、親子教室。
 *  文案刻意寫得口語、親切，跟主站的科技感版本是完全不同的敘事。
 *
 *  這個檔案只寫「這一站跟共用基底不一樣的地方」。
 *  品牌名、Email、LINE、預約連結等共用資料放在
 *  packages/content/src/shared.ts，改那裡四個站會同步生效。
 *
 *  ⚠️ 語氣可以改，事實不能改：保固條件、流程步驟名稱都與主站一致。
 */
import { defineSite, sharedBrand } from "@wendy/content";

export const site = defineSite({
  // TODO(PM): 部署前確認要用哪個子網域
  url: "https://hello.wendy.studio",

  seo: {
    // 版型 demo 站，不開放搜尋引擎索引（避免與主站互相稀釋排名）
    indexable: false,
    // TODO(PM): 這一站的 SEO 標題與描述
    title: `${sharedBrand.name}｜小店與工作室的網站設計`,
    description:
      "Wendy Studio 為甜點店、寵物照護與親子教室打造好看又好用的形象官網與線上預約系統。報價寫清楚、分階段確認、交付後 30 天保固，歡迎預約 30 分鐘免費諮詢。",
    keywords: [
      "小店網站",
      "甜點店網站",
      "寵物美容預約",
      "親子教室報名",
      "線上預約系統",
      "形象官網",
      "網站設計",
    ],
  },

  hero: {
    headline: "讓第一次點進來的客人，安心按下預約。",
    subheadline:
      "我們替甜點店、寵物照護與親子教室，做出好看也好用的網站 — 客人不必再私訊問東問西。",
    primaryCta: { label: "來聊聊你的店", href: "#contact" },
    secondaryCta: { label: "看看能幫什麼忙", href: "#services" },
    // 與主站相同的事實，只換成比較親切的說法
    trustBadges: ["報價寫清楚", "分階段確認", "交付後 30 天保固"],
  },

  audienceSection: {
    eyebrow: "我們服務誰",
    title: "如果你也遇到這些狀況，我們可以幫上忙",
    items: [
      {
        id: "bakery",
        name: "甜點與烘焙店",
        pain: "每天回一樣的私訊：今天有開嗎？可以訂蛋糕嗎？幾點可以取？",
        outcome:
          "把品項、訂購方式與取貨時間收在同一頁，客人自己就找得到答案。",
      },
      {
        id: "pet",
        name: "寵物照護",
        pain: "預約靠訊息一來一往，常常撞期，毛孩的特殊需求也記在不同地方。",
        outcome:
          "線上就能挑時段與服務項目，毛孩的資料跟著預約一起留下來。",
      },
      {
        id: "kids",
        name: "親子教室",
        pain: "課表發在群組裡很快被洗掉，家長翻不到，報名還要私下核對名單。",
        outcome: "課表與報名收在網站上，家長隨時查得到，名單也不會亂。",
      },
    ],
  },

  serviceSection: {
    eyebrow: "服務項目",
    title: "三件事，我們做得最熟",
    description: "做得少一點，但每一項都做到能安心交給你自己維護。",
    items: [
      {
        id: "website",
        name: "形象官網 / Landing Page",
        outcome:
          "一頁講完你是誰、賣什麼、怎麼找到你，客人看完就知道下一步要按哪裡。",
      },
      {
        id: "system",
        name: "線上預約與訂單",
        outcome:
          "客人自己挑時段、自己下單，你不用再一則一則訊息確認，也不會漏掉。",
      },
      {
        id: "admin",
        name: "好上手的後台",
        outcome:
          "改價格、換照片、看今天有誰要來，用手機就能處理，不必回頭找工程師。",
      },
    ],
  },

  processSection: {
    eyebrow: "合作流程",
    title: "從聊天到上線，大概是這樣",
    // 步驟名稱與主站一致（需求文件固定），只調整說明的語氣
    steps: [
      {
        name: "需求訪談（30 分鐘）",
        description:
          "先聽你說現在最困擾的是什麼，還有希望客人看完網站以後做什麼。",
      },
      {
        name: "範圍與報價（書面確認）",
        description:
          "要做哪些、不做哪些，寫成一份看得懂的文件，價格與時間一次講清楚。",
      },
      {
        name: "分階段開發（可見進度）",
        description:
          "每做好一段就給你連結，隨時打開來看，想調整的地方隨時說。",
      },
      {
        name: "驗收交付",
        description:
          "照著文件一項一項確認，上線後 30 天內與驗收項目相關的問題免費修。",
      },
    ],
  },

  workSection: {
    eyebrow: "作品 / Demo",
    title: "做出來大概長這樣",
    // TODO(PM): 正式作品清單與真實截圖；目前為示意樣品
    description: "以下為示意樣品，正式案例整理中。",
    items: [
      {
        id: "bakery-site",
        category: "形象官網",
        title: "小巷甜點店官網",
        problem:
          "客人常問今天有沒有開、蛋糕要多久前預訂，店主每天都在回一樣的訊息。",
        image: "/works/demo-bakery.svg",
        imageAlt: "甜點店形象官網首頁的畫面示意圖",
      },
      {
        id: "pet-booking",
        category: "預約系統",
        title: "寵物美容線上預約",
        problem:
          "時段要靠訊息慢慢喬，常常撞期；毛孩的特殊需求也散落在不同對話裡。",
        image: "/works/demo-pet.svg",
        imageAlt: "寵物美容線上預約的時段挑選畫面示意圖",
      },
      {
        id: "class-schedule",
        category: "課程管理",
        title: "親子教室課表與報名",
        problem: "課表發在群組很快被洗掉，家長翻不到，報名名單還要人工核對。",
        image: "/works/demo-class.svg",
        imageAlt: "親子教室課表與報名頁面的畫面示意圖",
      },
    ],
  },

  ctaSection: {
    title: "還沒想清楚也沒關係，先聊聊看。",
    description:
      "不用先準備好完整需求，把現在最困擾的事情帶來就好。聊完至少會帶走一個明確的方向，最後沒有合作也完全沒關係。",
    cta: { label: "預約 30 分鐘聊聊" },
  },

  footer: {
    tagline: "為小店、工作室與教室，做出客人願意用的網站。",
  },
});

// 解構成 named export，各區塊元件的 import 寫法與主站一致
export const {
  brand,
  contact,
  primaryCtaHref,
  hero,
  audienceSection,
  serviceSection,
  processSection,
  workSection,
  ctaSection,
  footer,
  nav,
  seo,
} = site;
