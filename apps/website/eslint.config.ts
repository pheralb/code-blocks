import { defineConfig } from "eslint/config";

// Package Plugins:
import { baseConfig } from "@pheralb/cb-eslint/base";
import { nextConfig } from "@pheralb/cb-eslint/nextjs";

const eslintConfig = defineConfig(baseConfig, nextConfig);

export default eslintConfig;
