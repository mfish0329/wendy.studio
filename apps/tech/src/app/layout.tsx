import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { buildMetadata } from "@wendy/seo";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO metadata 的組裝邏輯四站共用，值來自這一站的 site 內容
export const metadata = buildMetadata(site);

// 這一站的視覺設定（深色科技感），不與其他版型共用
export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-bg"
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
