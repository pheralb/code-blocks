import { defineConfig, globalIgnores } from "eslint/config";

// Plugins:
import nextTs from "eslint-config-next/typescript";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  ...nextVitals,
  ...nextTs,
]);

export default eslintConfig;
