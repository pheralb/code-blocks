import * as path from "node:path";
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";

// Plugins:
import js from "@eslint/js";
import ts from "typescript-eslint";
import turbo from "eslint-plugin-turbo";

export const baseConfig = defineConfig(
  includeIgnoreFile(path.join(import.meta.dirname, "../../.gitignore")),
  { ignores: ["**/*.config.*"] },
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    plugins: {
      turbo: turbo,
    },
    extends: [js.configs.recommended, ...ts.configs.recommended],
    rules: {
      ...turbo.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
