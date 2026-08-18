import { ImageResponse } from "next/og";

import { brand } from "@/content/site";

export const alt = `${brand.name} — 品牌電商與購物網站開發`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * 社群分享縮圖（Facebook / LINE / X 皆會抓這張）。
 *
 * 注意：next/og 內建字型不含中文字符，因此這裡刻意只用拉丁文字排版。
 * 若之後要放中文文案，有兩個做法：
 *   1. 由設計提供 1200×630 的圖，命名為 opengraph-image.png 放在同一層目錄，
 *      即會自動覆蓋這個動態版本（最省事，建議走這條）。
 *   2. 在此讀取中文字型檔並傳入 ImageResponse 的 fonts 參數。
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#ffe4e9",
            color: "#be123c",
            fontSize: 26,
            fontWeight: 700,
            padding: "12px 28px",
            borderRadius: 999,
          }}
        >
          E-COMMERCE
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              color: "#101014",
              letterSpacing: "-0.03em",
            }}
          >
            {brand.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 36,
              color: "#5f5f6b",
            }}
          >
            Online stores that turn browsers into buyers.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#5f5f6b",
          }}
        >
          <span>{brand.url.replace(/^https?:\/\//, "")}</span>
          <span
            style={{
              display: "flex",
              background: "#e11d48",
              color: "#ffffff",
              fontWeight: 700,
              padding: "14px 30px",
              borderRadius: 999,
            }}
          >
            Get a free quote
          </span>
        </div>
      </div>
    ),
    size,
  );
}
