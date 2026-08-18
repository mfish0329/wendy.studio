import { ImageResponse } from "next/og";

import { brand } from "@/content/site";

export const alt = `${brand.name} — 專業服務事務所的形象官網`;
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
          background: "#fbfaf8",
          padding: "80px",
          fontFamily: "serif",
          borderTop: "14px solid #16232e",
        }}
      >
        <div style={{ display: "flex", width: 88, height: 3, background: "#a8863f" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 600,
              color: "#16232e",
              letterSpacing: "-0.01em",
            }}
          >
            {brand.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 34,
              color: "#5a6670",
            }}
          >
            Websites and case systems for law, accounting and advisory firms.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 25,
            color: "#5a6670",
            borderTop: "1px solid #ddd7ca",
            paddingTop: 28,
          }}
        >
          <span>{brand.url.replace(/^https?:\/\//, "")}</span>
          <span style={{ color: "#7a5c34" }}>Book a 30-min consultation</span>
        </div>
      </div>
    ),
    size,
  );
}
