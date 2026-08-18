import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const appDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // monorepo：預設只會追蹤這個 app 目錄，但相依的 @wendy/* 套件與 pnpm 的
  // node_modules 都在 workspace 根，所以把追蹤起點往上指兩層。
  outputFileTracingRoot: path.join(appDir, "../../"),
};

export default nextConfig;
