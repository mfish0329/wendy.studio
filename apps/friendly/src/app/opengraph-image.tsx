import { ImageResponse } from "next/og";

import { brand } from "@/content/site";

export const alt = `${brand.name} — 小店與工作室的網站設計`;
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
          background: "linear-gradient(180deg, #e0f2fe 0%, #ffffff 62%)",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 太陽 */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 72,
            right: 96,
            width: 132,
            height: 132,
            borderRadius: 999,
            background: "#fbbf24",
          }}
        />
        {/* 雲 */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 168,
            right: 62,
            width: 240,
            height: 96,
            borderRadius: 999,
            background: "#ffffff",
          }}
        />

        <div style={{ display: "flex", width: 104, height: 12, borderRadius: 999, background: "#38bdf8" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              color: "#123b5c",
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
              color: "#4b6e8a",
            }}
          >
            Friendly websites for small shops, studios and classrooms.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#4b6e8a",
          }}
        >
          <span>{brand.url.replace(/^https?:\/\//, "")}</span>
          <span style={{ color: "#0369a1" }}>Book a 30-min chat</span>
        </div>
      </div>
    ),
    size,
  );
}
