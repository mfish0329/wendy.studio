# Wendy Studio 官方網站

個人／團隊形象品牌官網。單頁 Landing Page，7 個區塊，主要目標是讓訪客在 60 秒內看懂
「我們是誰、為誰服務、怎麼合作、如何聯絡」，並導流到預約訪談。

## 技術選型

| 項目 | 選用 | 理由 |
| --- | --- | --- |
| 框架 | **Next.js 16（App Router）** | 見下方說明 |
| 語言 | TypeScript | |
| 樣式 | Tailwind CSS 4 | 設計 token 集中在 `globals.css` 的 `@theme` |
| 渲染 | 全站靜態產生（SSG） | 首屏最快，SEO 最穩 |

**為什麼是 Next.js 而不是 Nuxt？**
兩者的 SSR/SSG 能力對 SEO 而言其實相當，實際差異在周邊：

1. Next.js 的 Metadata API 把 canonical、Open Graph、Twitter Card、robots 收在同一份型別安全的設定裡，`sitemap.ts` / `robots.ts` 也是官方約定，不需要額外套件。
2. `next/image` 內建圖片優化與尺寸保留，直接影響 Core Web Vitals 的 LCP 與 CLS，而這兩項是 Google 排名訊號。
3. 之後若要加聯絡表單、預約 API，Route Handler 可以直接寫在同一個專案裡。
4. 部署選擇多（Vercel / Cloudflare / 自架皆可），台灣的接案生態也較容易找到接手的人。

## 開發

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 產生正式版
npm start       # 跑正式版
npm run lint
```

## 改文案：只需要動一個檔案

所有文字、聯絡方式、SEO 設定都集中在 **[src/content/site.ts](src/content/site.ts)**，
不需要碰任何 JSX。標了 `TODO(PM)` 的欄位目前是暫用的 demo 值。

待補項目的完整清單請見 **[CONTENT-TODO.md](CONTENT-TODO.md)**（可直接丟給 PM 填）。

幾個會自動反應的設定：

- `contact.line` 設為 `null` → 所有 LINE 連結自動消失
- `contact.booking` 設為 `null` → 主 CTA 自動退回 `mailto:`；填了連結就改用該連結
- `hero.secondaryCta` 設為 `null` → 首屏次要按鈕消失
- `workSection.items` 給 1–3 筆都可以，版面會自動調整

## 換圖

作品截圖放在 [public/works/](public/works/)，建議 1200×750 的 PNG / JPG。
目前的 `.svg` 是暫用的示意圖，換成點陣圖後會自動啟用 Next.js 的圖片優化。

社群分享縮圖由 [src/app/opengraph-image.tsx](src/app/opengraph-image.tsx) 動態產生（英文版，
因為 next/og 內建字型不含中文）。若設計提供了 1200×630 的圖，命名成 `opengraph-image.png`
放進 `src/app/`，即會自動覆蓋動態版本。

## 檔案結構

```
src/
├─ app/
│  ├─ layout.tsx           # metadata（SEO）、字型、Header / Footer
│  ├─ page.tsx             # 7 個區塊的組裝順序 + JSON-LD 結構化資料
│  ├─ globals.css          # 設計 token（顏色、字型、動畫）
│  ├─ opengraph-image.tsx  # 社群分享縮圖
│  ├─ robots.ts / sitemap.ts
│  └─ icon.svg             # favicon
├─ components/
│  ├─ SiteHeader.tsx       # sticky 導覽列
│  ├─ ButtonLink.tsx       # 按鈕樣式（primary / secondary / ghost）
│  ├─ SectionHeading.tsx   # 各區塊共用標題
│  ├─ Reveal.tsx           # 捲動進場動畫
│  └─ sections/            # 7 個區塊，順序與需求文件一致
└─ content/
   └─ site.ts              # ★ 所有文案的唯一來源
```

## 已處理的 SEO / 無障礙細節

- 全站靜態產生，HTML 直接含完整內容，爬蟲不需執行 JS
- `<html lang="zh-Hant-TW">`、單一 `<h1>`、各區塊 `aria-labelledby`
- canonical、Open Graph、Twitter Card、`robots.txt`、`sitemap.xml`
- `ProfessionalService` JSON-LD 結構化資料（含服務清單與聯絡 Email）
- 「跳到主要內容」skip link、鍵盤 focus 樣式、圖片 alt
- 尊重 `prefers-reduced-motion`；關閉 JavaScript 時內容仍完整可見

## 部署前檢查

- [ ] 把 `brand.url` 換成正式網域（影響 canonical / OG / sitemap）
- [ ] 換掉所有 `TODO(PM)` 的暫用文案
- [ ] 換掉示意用的作品圖，或移除該區塊的假案例
- [ ] 確認 Email、LINE、預約連結都能正常開啟
- [ ] 跑一次 Lighthouse，確認 SEO 與 Performance 分數
