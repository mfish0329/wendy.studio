# Wendy Studio 形象官網（Monorepo）

同一個工作室、同一套品牌資料，四種視覺版型分開部署。
作品區可以直接連到其他版型，讓客戶點得到實際成品。

| 版型 | 套件 | 風格 | Port | 狀態 |
| --- | --- | --- | --- | --- |
| tech | `@wendy/tech` | 深色科技感（主站） | 3000 | ✅ 已完成 |
| friendly | `@wendy/friendly` | 白底藍天可愛版 | 3001 | ✅ 已完成 |
| legal | `@wendy/legal` | 律師事務所專業感 | 3002 | ✅ 已完成 |
| commerce | `@wendy/commerce` | 電商風格 | 3003 | ✅ 已完成 |

## 結構

```
apps/
├─ tech/               深色科技感（主站）
├─ friendly/           白底藍天可愛版
├─ legal/              律師事務所專業感
└─ commerce/           電商風格
                       ├─ src/content/site.ts   ← 這一站與共用基底的「差異」
                       ├─ src/components/       ← 版面元件，各站獨立不共用
                       └─ src/app/globals.css   ← 設計 token，各站獨立不共用
packages/
├─ content/            ★ 文案的唯一來源
│  ├─ src/schema.ts    資料結構（四站共用）
│  ├─ src/shared.ts    共用品牌資料 + 預設文案
│  └─ src/define.ts    defineSite()：把共用基底與各站文案合併
├─ seo/                metadata / JSON-LD / sitemap / robots 產生器
├─ ui/                 無視覺的共用元件（目前只有捲動進場的 Reveal）
├─ typescript-config/  共用 tsconfig
└─ eslint-config/      共用 ESLint 設定
```

**刻意不共用的是版面**：`components/` 與 `globals.css` 各站自己寫。
「深色科技感」與「白底可愛風」的差異大到共用元件只會做出四個換色版，
那就失去做多版型的意義了。

`packages/ui` 是那條界線的另一側 —— 只放**沒有視覺的行為邏輯**。
`Reveal` 只負責「捲進畫面時加上 `data-revealed`」，實際的動畫寫在各站的
`globals.css`（科技感是平移淡入，可愛版帶回彈），所以共用它不會拉平視覺差異。

## 開發

```bash
pnpm install
pnpm dev              # 同時啟動所有站
pnpm dev:tech         # 只跑科技感版（:3000）
pnpm dev:friendly     # 只跑可愛版（:3001）
pnpm dev:legal        # 只跑律所版（:3002）
pnpm dev:commerce     # 只跑電商版（:3003）
pnpm build            # 建置全部
pnpm lint
pnpm typecheck
```

需要 pnpm 10+ 與 Node 20.11+。相依套件版本統一寫在
[pnpm-workspace.yaml](pnpm-workspace.yaml) 的 `catalog:` 區塊，
升級 Next.js 只需要改那裡一行，四個站同步生效。

## 改文案：先確認要改的是哪一層

| 想改什麼 | 改哪裡 | 影響範圍 |
| --- | --- | --- |
| 品牌名、Email、LINE、預約連結 | [packages/content/src/shared.ts](packages/content/src/shared.ts) 的「A. 品牌識別」區 | **四個站同步** |
| 某一站的 hero、服務、案例文案 | 該 app 的 `src/content/site.ts` | 只有那一站 |
| 所有站的預設文案 | [packages/content/src/shared.ts](packages/content/src/shared.ts) 的「B. 預設文案」區 | 沒有覆寫該欄位的站 |

`defineSite()` 對每個區塊做一層淺層合併，所以可以只覆寫 `hero.headline`
而保留 `hero.trustBadges`。但陣列欄位（`items`、`steps`、`trustBadges`、`nav`）
是整包替換，不會逐項合併。

各站文案可以換語氣、換產業情境，但 **事實必須一致**：保固條件、流程步驟名稱、
服務範圍在四個站要說同一件事。可愛版把「書面報價」寫成「報價寫清楚」沒問題，
把 30 天保固寫成 60 天就不行。

標了 `TODO(PM)` 的欄位目前都還是暫用的 demo 值，
待補清單見 [CONTENT-TODO.md](CONTENT-TODO.md)。

幾個會自動反應的設定：

- `contact.line` 設為 `null` → 所有 LINE 連結自動消失
- `contact.booking` 設為 `null` → 主 CTA 自動退回 `mailto:`
- `hero.secondaryCta` 設為 `null` → 首屏次要按鈕消失
- `workSection.items` 給 1–3 筆都可以，版面會自動調整
- `seo.indexable` 設為 `false` → 產生 `noindex` 與 `Disallow: /`

## 新增一個版型

1. 複製 `apps/friendly` 成 `apps/<新版型>`，改 `package.json` 的 `name` 與 dev/start 的 port
2. 改寫 `src/content/site.ts`：

   ```ts
   export const site = defineSite({
     url: "https://law.wendy.studio",
     hero: { headline: "…寫這個產業的情境文案…" },
     workSection: { items: [ /* 該產業的案例 */ ] },
   });
   ```

   `url` 是必填 —— 忘了改會讓兩個站的 canonical 指向同一個網域，
   而這種錯在畫面上完全看不出來。
   `seo.indexable` 維持預設的 `false`（見下方 SEO 注意事項）。
3. 重寫 `src/app/globals.css` 的設計 token 與 `src/components/`，這是這一站的重點
4. 換掉 `public/works/` 的示意圖與 `src/app/opengraph-image.tsx` 的配色
5. 把新站加進主站 `workSection.items` 的 `href`，作品區才連得過去

### 中文標題的斷行

三個版型都踩過同一個坑：中文沒有詞邊界，瀏覽器會在任意字之間斷行，
很容易出現「…看見值得信／賴的專業」這種把詞拆開的結果。兩個處理原則：

- **長標題不要用 `text-balance`**。它會把兩行拉成等長，反而更容易斷在詞中間。
  短標題（各區塊的 h2）留著沒問題。
- **用行寬控制斷點**，讓它斷在標點後：估算「容器寬度 ÷ 字級」得到每行字數，
  調整標題的 `max-w` 或字級，使第一行剛好收在逗號處。桌機與手機要各調一次。

改完務必用實際寬度確認（桌機 1440、手機 390），這種問題只有看畫面才會發現。

## 部署（Vercel）

每個 app 建一個 project，同一個 repo：

| 設定 | 值 |
| --- | --- |
| Root Directory | `apps/<版型>` |
| Build Command | 預設即可（Vercel 會自動偵測 Turborepo） |

**不需要設定 Ignored Build Step。** Vercel 內建的跳過機制會自動略過這次 commit
沒有影響到的站 —— 只改 legal 站時，其他三站不會重建。這個行為對新專案預設開啟，
開關在 Settings → Build and Deployment → Root Directory 區塊的 **Skip deployment**
（要關掉才需要動它）。它不佔用同時建置的名額，而舊做法 `turbo-ignore` 那種
「先建置再取消」會計入建置額度，已經不建議使用。

內建跳過靠的是 workspace 的相依圖，這個 repo 剛好符合它的全部條件：GitHub repo、
pnpm workspaces、每個套件的 `name` 唯一、套件之間的相依都寫在各自的 `package.json`。
**維護時要守住最後一項** —— 如果某個 app 用了 `@wendy/content` 卻沒宣告在
dependencies 裡，Vercel 判斷不出相依關係，改了共用文案也不會重建那一站。

網域建議用子網域：`wendy.studio`（主站）、`hello.wendy.studio`（可愛版）、
`law.wendy.studio`、`shop.wendy.studio`。

主站作品區的四張卡片直接連到這些子網域（見
[apps/tech/src/content/site.ts](apps/tech/src/content/site.ts) 的 `workSection`）。
**網域一旦確定就要回頭更新那裡的 `href`**，否則作品區會連到不存在的位置。

那四張預覽圖是各站首屏的實際截圖（`apps/tech/public/works/preview-*.png`）。
之後任何一站改了首屏視覺，記得重新截一張換掉，不然作品區展示的會是舊樣子。

> Vercel Hobby 方案限個人非商業用途，接案展示用途需要 Pro。
> 四個 project 在同一個 Pro 帳號下不會額外計費。

## SEO 注意事項（重要）

四個站的內容結構高度相似又互相連結，若全部開放索引，
Google 有機會判定成 doorway pages，反而拖累主站排名。

因此 **只有主站 tech 設定 `seo.indexable: true`**，
其餘三個版型 demo 站維持預設的 `false`，會產生 `noindex, nofollow`
與 `Disallow: /`，也不提供 sitemap。這些站的作用是給客戶點，不是給搜尋引擎爬。

## 已處理的 SEO / 無障礙細節

- 全站靜態產生（SSG），HTML 直接含完整內容，爬蟲不需執行 JS
- `<html lang="zh-Hant-TW">`、單一 `<h1>`、各區塊 `aria-labelledby`
- canonical、Open Graph、Twitter Card、`robots.txt`、`sitemap.xml`
- `ProfessionalService` JSON-LD 結構化資料（含服務清單與聯絡 Email）
- 「跳到主要內容」skip link、鍵盤 focus 樣式、圖片 alt，裝飾元素一律 `aria-hidden`
- 文字對比度符合 WCAG AA（可愛版的色票驗算寫在 `globals.css` 的註解裡）
- 尊重 `prefers-reduced-motion`；關閉 JavaScript 時內容仍完整可見

## 換圖

作品截圖放在各 app 的 `public/works/`，建議 1200×750 的 PNG / JPG。
目前的 `.svg` 是暫用示意圖，換成點陣圖後會自動啟用 Next.js 的圖片優化。

社群分享縮圖由各 app 的 `src/app/opengraph-image.tsx` 動態產生（英文版，
因為 next/og 內建字型不含中文）。若設計提供了 1200×630 的圖，
命名成 `opengraph-image.png` 放進該 app 的 `src/app/`，即會自動覆蓋。

## 部署前檢查

- [ ] 各站 `defineSite({ url })` 換成正式網域
- [ ] 換掉所有 `TODO(PM)` 的暫用文案
- [ ] 換掉示意用的作品圖，或移除該區塊的假案例
- [ ] 確認 Email、LINE、預約連結都能正常開啟
- [ ] 確認只有主站是 `indexable: true`
- [ ] 跑一次 Lighthouse，確認 SEO 與 Performance 分數
