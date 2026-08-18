/**
 * ─────────────────────────────────────────────────────────────
 *  科技感版本（主站）的站台內容
 * ─────────────────────────────────────────────────────────────
 *  這個檔案只寫「這一站跟共用基底不一樣的地方」。
 *  品牌名、Email、LINE、預約連結等共用資料放在
 *  packages/content/src/shared.ts，改那裡四個站會同步生效。
 *
 *  這一站沿用全部預設文案，只有作品區不同：主站的作品區展示的是
 *  四種版型本身，其他三站展示的則是該產業的案例。
 */
import { defineSite } from "@wendy/content";

export const site = defineSite({
  // TODO(PM): 部署前換成正式網域（影響 canonical / OG / sitemap）
  url: "https://wendy.studio",
  seo: {
    // 主站，開放搜尋引擎索引；其他三個版型 demo 站維持預設的 false
    indexable: true,
  },

  workSection: {
    eyebrow: "作品 / Demo",
    title: "四種風格，同一套內容",
    description:
      "同一份文案，四種完全不同的樣子。點進去看看哪一種接近你想要的感覺。",
    // TODO(PM): 網域確定後更新下面的 href；目前指向規劃中的子網域
    items: [
      {
        id: "style-tech",
        category: "科技感",
        title: "深色科技風",
        problem:
          "產品講的是技術與精準，需要訪客一眼就看出專業感。你正在看的就是這一款。",
        image: "/works/preview-tech.png",
        imageAlt: "深色科技感版型的首頁畫面",
      },
      {
        id: "style-friendly",
        category: "可愛風",
        title: "白底藍天",
        problem:
          "客群是一般消費者，網站要親切、沒有距離感，讓人願意主動問一句。",
        image: "/works/preview-friendly.png",
        imageAlt: "白底藍天可愛版型的首頁畫面",
        href: "https://hello.wendy.studio",
      },
      {
        id: "style-legal",
        category: "專業感",
        title: "事務所風格",
        problem: "客戶在意的是信任與嚴謹，版面必須克制，不能有任何輕浮的地方。",
        image: "/works/preview-legal.png",
        imageAlt: "律師事務所專業感版型的首頁畫面",
        href: "https://law.wendy.studio",
      },
      {
        id: "style-commerce",
        category: "電商風",
        title: "購物網站",
        problem: "目標是成交，每一屏都要把訪客往加入購物車與結帳的方向推。",
        image: "/works/preview-commerce.png",
        imageAlt: "電商風格版型的首頁畫面",
        href: "https://shop.wendy.studio",
      },
    ],
  },
});

// 解構成 named export，各區塊元件的 import 寫法維持不變
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
