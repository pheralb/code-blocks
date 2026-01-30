import { defineConfig } from "eslint/config";

// Plugins:
import { nextConfig } from "@pheralb/cb-eslint/nextjs";

const eslintConfig = defineConfig(nextConfig);

export default eslintConfig;
