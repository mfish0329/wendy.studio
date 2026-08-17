import { ImageResponse } from "next/og";

import { brand } from "@/content/site";

export const alt = `${brand.name} — 形象官網與業務系統開發`;
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
          background: "#0a0b0d",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 96, height: 8, background: "#ff6b4a" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#f5f6f8",
              letterSpacing: "-0.02em",
            }}
          >
            {brand.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 36,
              color: "#9aa1ac",
            }}
          >
            Websites &amp; business systems for small brands and early teams.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#9aa1ac",
          }}
        >
          <span>{brand.url.replace(/^https?:\/\//, "")}</span>
          <span style={{ color: "#ff6b4a" }}>Book a 30-min call</span>
        </div>
      </div>
    ),
    size,
  );
}
