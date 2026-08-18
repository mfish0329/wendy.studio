import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * 四個站共用的 ESLint 設定。各 app 的 eslint.config.mjs 只需要 re-export 這一份。
 */
export const nextEslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // 覆寫 eslint-config-next 的預設忽略清單
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default nextEslintConfig;
