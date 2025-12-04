import type { RegistryComponent } from "@/components/registry/types";

// Settings:
const cssFolder = "src/styles";
const utilsFolder = "src/utils";

// CSS Files:
const CSSFiles: RegistryComponent[] = [
  {
    title: "shiki-css",
    fileType: "ts",
    mainSourceFile: `${cssFolder}/shiki.ts`,
    shadcnRegistry: {
      mainType: "registry:file",
    },
  },
];

// Utils:
const UtilsFiles: RegistryComponent[] = [
  {
    title: "shiki-highlighter",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/shiki/index.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
      dependencies: ["shiki", "@shikijs/themes", "@shikijs/langs"],
    },
  },
];

// Shiki Transformers:
const ShikiTransformers: RegistryComponent[] = [
  {
    title: "shiki-show-line-numbers",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/shiki/transformers/show-line-numbers.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
      dependencies: ["shiki"],
    },
  },
  {
    title: "shiki-word-wrap",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/shiki/transformers/word-wrap.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
      dependencies: ["shiki"],
    },
  },
];

export const RegistryData: RegistryComponent[] = [
  ...UtilsFiles,
  ...ShikiTransformers,
  ...CSSFiles,
];
