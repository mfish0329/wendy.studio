/**
 * ─────────────────────────────────────────────────────────────
 *  律師事務所專業感版本的站台內容
 * ─────────────────────────────────────────────────────────────
 *  這一站的定位是「專業服務事務所」：律師、會計師、顧問。
 *  文案刻意寫得正式、界線分明，與可愛版的口語敘事完全相反。
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
  url: "https://law.wendy.studio",

  seo: {
    // 版型 demo 站，不開放搜尋引擎索引（避免與主站互相稀釋排名）
    indexable: false,
    // TODO(PM): 這一站的 SEO 標題與描述
    title: `${sharedBrand.name}｜專業服務事務所的形象官網`,
    description:
      "Wendy Studio 為律師事務所、會計師事務所與顧問公司建置形象官網、諮詢預約與案件管理系統。書面報價、分階段驗收、交付後 30 天保固，歡迎預約 30 分鐘諮詢。",
    keywords: [
      "律師事務所網站",
      "會計師事務所網站",
      "事務所官網",
      "專業服務網站",
      "諮詢預約系統",
      "案件管理",
      "形象官網",
    ],
  },

  hero: {
    headline: "讓委任人搜尋你的名字時，看見值得信賴的專業。",
    subheadline:
      "我們為律師、會計師與顧問事務所，建置符合專業形象、也便於委任人聯繫的官方網站。",
    primaryCta: { label: "預約 30 分鐘諮詢", href: "#contact" },
    secondaryCta: { label: "了解服務範圍", href: "#services" },
    trustBadges: ["書面報價", "分階段驗收", "交付後 30 天保固"],
  },

  // 導覽用語跟著這一站的正式語氣調整
  nav: [
    { label: "服務對象", href: "#audience" },
    { label: "服務項目", href: "#services" },
    { label: "合作流程", href: "#process" },
    { label: "案例", href: "#works" },
  ],

  audienceSection: {
    eyebrow: "服務對象",
    title: "為專業服務事務所而設計",
    items: [
      {
        id: "law-firm",
        name: "律師事務所",
        pain: "委任人上網查詢時，只找得到名錄上的舊資料，看不出事務所的執業領域。",
        outcome:
          "清楚呈現執業領域、團隊背景與聯繫方式，讓潛在委任人在第一頁就理解你的專業。",
      },
      {
        id: "accounting",
        name: "會計與記帳事務所",
        pain: "服務範圍與收費方式每次都要重新說明，初次諮詢耗費大量時間。",
        outcome:
          "將服務項目與作業流程完整說明於官網，諮詢時得以直接進入實質問題。",
      },
      {
        id: "consulting",
        name: "顧問與專業事務所",
        pain: "專業能力難以在網路上被驗證，案源高度仰賴既有人脈。",
        outcome:
          "以案例與方法論建立可查證的專業形象，讓推薦以外的客戶也找得到你。",
      },
    ],
  },

  serviceSection: {
    eyebrow: "服務項目",
    title: "三項核心服務",
    description: "明確界定服務範圍，是專業合作的起點。",
    items: [
      {
        id: "website",
        name: "事務所形象官網",
        outcome:
          "完整呈現執業領域、團隊成員與聯繫方式，建立委任人初次接觸時的信任基礎。",
      },
      {
        id: "system",
        name: "諮詢預約與案件表單",
        outcome:
          "委任人可線上預約諮詢時段並填寫初步案情，雙方在會面前都有充分準備。",
      },
      {
        id: "admin",
        name: "案件與客戶管理後台",
        outcome:
          "案件進度、文件與客戶資料集中管理，團隊成員權限分明，交接時完整移轉。",
      },
    ],
  },

  processSection: {
    eyebrow: "合作流程",
    title: "四個階段，權責明確",
    // 步驟名稱與主站一致（需求文件固定），只調整說明的語氣
    steps: [
      {
        name: "需求訪談（30 分鐘）",
        description:
          "確認服務對象、目標與現行作業方式，並評估需求是否適合由我們承接。",
      },
      {
        name: "範圍與報價（書面確認）",
        description: "以書面明確界定工作範圍、交付項目、時程與費用，雙方確認後始進行。",
      },
      {
        name: "分階段開發（可見進度）",
        description: "各階段提供可檢視的預覽環境，進度公開透明，隨時可提出修正意見。",
      },
      {
        name: "驗收交付",
        description:
          "依書面範圍逐項驗收，交付後 30 天內就相關問題提供免費修正。",
      },
    ],
  },

  workSection: {
    eyebrow: "案例",
    title: "實際成果",
    // TODO(PM): 正式作品清單與真實截圖；目前為示意樣品
    description: "以下為示意樣品，正式案例整理中。",
    items: [
      {
        id: "firm-site",
        category: "事務所官網",
        title: "聯合法律事務所官網",
        problem:
          "委任人查詢事務所時，只能找到名錄上的基本資料，無從判斷執業領域是否相符。",
        image: "/works/demo-firm.svg",
        imageAlt: "法律事務所形象官網首頁的畫面示意圖",
      },
      {
        id: "consult-booking",
        category: "諮詢預約",
        title: "法律諮詢線上預約",
        problem:
          "電話預約需反覆確認可行時段，初次諮詢前也缺乏基本案情資訊。",
        image: "/works/demo-consult.svg",
        imageAlt: "法律諮詢線上預約表單的畫面示意圖",
      },
      {
        id: "case-admin",
        category: "案件管理",
        title: "案件進度管理後台",
        problem:
          "案件文件散落於個人電腦與信箱，人員異動時難以完整交接。",
        image: "/works/demo-case.svg",
        imageAlt: "案件進度管理後台的列表畫面示意圖",
      },
    ],
  },

  ctaSection: {
    title: "歡迎來信，或預約 30 分鐘諮詢。",
    description:
      "初次諮詢不收費，也不需要事先準備完整需求。我們會先了解事務所的現況與目標，再共同評估是否適合合作。",
    cta: { label: "預約 30 分鐘諮詢" },
  },

  footer: {
    tagline: "為專業服務事務所，建置經得起時間的官方網站。",
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
