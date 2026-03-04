import { defineConfig, type UserConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "types/index": "src/types/index.ts",
  },
  format: ["esm"],
  dts: true,
  minify: true,
  treeshake: true,
  outDir: "dist",
  clean: true,
}) as UserConfig;
