import { join } from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import { defineConfig, globalIgnores } from "eslint/config";

// Plugins:
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import nextVitals from "eslint-config-next/core-web-vitals";

const nextConfig = defineConfig([
  includeIgnoreFile(join(import.meta.dirname, "../../../.gitignore")),
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  ...nextVitals,
  ...nextTs,
  prettier,
]);

export { nextConfig };
