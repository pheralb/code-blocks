import { defineConfig } from "eslint/config";

// Plugins:
import { nextConfig } from "@code-blocks/eslint/nextjs";

const eslintConfig = defineConfig(nextConfig);

export default eslintConfig;
