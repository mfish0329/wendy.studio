import type { Viewport } from "next";
import { Nunito } from "next/font/google";

import { buildMetadata } from "@wendy/seo";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import { site } from "@/content/site";
import "./globals.css";

// 圓潤的無襯線字型，是這一站「可愛感」的來源之一
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

// SEO metadata 的組裝邏輯四站共用，值來自這一站的 site 內容
export const metadata = buildMetadata(site);

// 這一站的視覺設定（白底藍天），不與其他版型共用
export const viewport: Viewport = {
  themeColor: "#38bdf8",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* 在首次繪製前標記 JS 可用，進場動畫才會生效（見 globals.css） */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-fg"
        >
          跳到主要內容
        </a>

        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
