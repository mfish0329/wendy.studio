/**
 * ─────────────────────────────────────────────────────────────
 *  電商風格版本的站台內容
 * ─────────────────────────────────────────────────────────────
 *  這一站的定位是「線上零售」：品牌電商、選物店、網路賣家。
 *  文案直接、以轉換為導向，與律所版的正式語氣是另一個極端。
 *
 *  這個檔案只寫「這一站跟共用基底不一樣的地方」。
 *  品牌名、Email、LINE、預約連結等共用資料放在
 *  packages/content/src/shared.ts，改那裡四個站會同步生效。
 *
 *  ⚠️ 語氣可以改，事實不能改：保固條件、流程步驟名稱都與主站一致。
 *     服務項目在這一站列成四項，是把主站的「業務系統」依電商情境
 *     拆解得更細（商品、訂單、會員），服務範圍本身沒有變。
 */
import { defineSite, sharedBrand } from "@wendy/content";

export const site = defineSite({
  // TODO(PM): 部署前確認要用哪個子網域
  url: "https://shop.wendy.studio",

  seo: {
    // 版型 demo 站，不開放搜尋引擎索引（避免與主站互相稀釋排名）
    indexable: false,
    // TODO(PM): 這一站的 SEO 標題與描述
    title: `${sharedBrand.name}｜品牌電商與購物網站開發`,
    description:
      "Wendy Studio 為品牌電商、選物店與網路賣家打造購物網站：商品目錄、購物車、金物流串接與會員行銷工具。書面報價、分階段驗收、交付後 30 天保固，歡迎免費估價。",
    keywords: [
      "購物網站開發",
      "品牌電商",
      "商品目錄",
      "購物車",
      "金流串接",
      "物流串接",
      "會員系統",
      "網路開店",
    ],
  },

  hero: {
    headline: "把逛的人，變成下單的人。",
    subheadline:
      "我們替品牌電商、選物店與網路賣家，打造從瀏覽、加入購物車到結帳都順的購物網站。",
    primaryCta: { label: "免費估價", href: "#contact" },
    secondaryCta: { label: "看服務內容", href: "#services" },
    trustBadges: ["書面報價", "分階段驗收", "交付後 30 天保固"],
  },

  audienceSection: {
    eyebrow: "服務誰",
    title: "這幾種狀況，我們最常處理",
    items: [
      {
        id: "brand",
        name: "品牌電商",
        pain: "開店平台的版型改不動，品牌感做不出來，每一單還要被抽成。",
        outcome:
          "自有網站完整掌握品牌呈現與客戶名單，成本結構也由自己決定。",
      },
      {
        id: "select-shop",
        name: "選物店",
        pain: "商品一多，客人就找不到想要的東西，逛兩下就離開了。",
        outcome: "分類、篩選與搜尋做到位，客人三步內找到商品並加入購物車。",
      },
      {
        id: "seller",
        name: "網路賣家",
        pain: "訂單分散在社群與通訊軟體，對帳與出貨全靠人工比對。",
        outcome: "訂單集中在後台，付款與物流狀態一目了然，出貨不再漏單。",
      },
    ],
  },

  // 這一站列四項：把主站的「業務系統」依電商情境拆細。
  // schema 沒有限制項目數量，版面由這一站的 Services 元件自己處理。
  serviceSection: {
    eyebrow: "服務項目",
    title: "從逛到結帳，四個環節",
    description: "把購物流程一次做完整，不留半套。",
    items: [
      {
        id: "website",
        name: "品牌形象與商品頁",
        outcome:
          "把品牌故事與商品賣點講清楚，讓客人在加入購物車之前就被說服。",
      },
      {
        id: "catalog",
        name: "商品目錄與購物車",
        outcome: "分類、篩選、搜尋到購物車流程順到底，減少客人中途離開。",
      },
      {
        id: "order",
        name: "訂單與金物流串接",
        outcome: "串接常用金流與物流，付款、出貨、退換貨的狀態一路可追。",
      },
      {
        id: "member",
        name: "會員與行銷工具",
        outcome: "會員分級、優惠券與再行銷，讓買過一次的客人願意再回來。",
      },
    ],
  },

  processSection: {
    eyebrow: "合作流程",
    title: "上線前的四個階段",
    // 步驟名稱與主站一致（需求文件固定），只調整說明的語氣
    steps: [
      {
        name: "需求訪談（30 分鐘）",
        description: "先聊你的商品、客群與現在的銷售管道，找出最卡的環節。",
      },
      {
        name: "範圍與報價（書面確認）",
        description:
          "要做與不做的功能寫成文件，價格與時程一次講清楚，不做才知道的追加。",
      },
      {
        name: "分階段開發（可見進度）",
        description: "每個階段都給你連結，可以自己點進去試操作，隨時提調整。",
      },
      {
        name: "驗收交付",
        description:
          "照文件逐項驗收，上線後 30 天內與驗收項目相關的問題免費修正。",
      },
    ],
  },

  workSection: {
    eyebrow: "作品 / Demo",
    title: "做出來長這樣",
    // TODO(PM): 正式作品清單與真實截圖；目前為示意樣品
    description: "以下為示意樣品，正式案例整理中。",
    items: [
      {
        id: "shop-home",
        category: "購物首頁",
        title: "選物品牌購物首頁",
        problem:
          "商品本身很好，但首頁看不出主打什麼，客人進來繞一圈就離開。",
        image: "/works/demo-shop.svg",
        imageAlt: "選物品牌購物網站首頁的畫面示意圖",
      },
      {
        id: "product-page",
        category: "商品頁",
        title: "商品頁與購物車",
        problem:
          "規格、庫存與運費資訊分散，客人常常到結帳那一步才發現問題。",
        image: "/works/demo-product.svg",
        imageAlt: "商品頁與購物車流程的畫面示意圖",
      },
      {
        id: "order-dashboard",
        category: "訂單後台",
        title: "訂單與出貨管理",
        problem: "訂單來自不同管道，人工彙整既花時間又容易出錯。",
        image: "/works/demo-orders.svg",
        imageAlt: "訂單與出貨管理後台的畫面示意圖",
      },
    ],
  },

  ctaSection: {
    title: "先估個價，再決定要不要做。",
    description:
      "告訴我們商品數量與需要的功能，我們會回一份包含範圍、價格與時程的書面估價。不含糊、不綁約。",
    cta: { label: "免費估價" },
  },

  footer: {
    tagline: "為品牌電商與網路賣家，做出真的會賣的購物網站。",
  },
});

// 解構成 named export，各區塊元件的 import 寫法與其他版型一致
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
