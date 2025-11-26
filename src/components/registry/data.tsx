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
    mainSourceFile: `${utilsFolder}/shiki.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
      dependencies: ["shiki", "@shikijs/themes", "@shikijs/langs"],
    },
  },
  {
    title: "shiki-transformers",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/shiki-transformers.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
      dependencies: ["shiki"],
    },
  },
];

export const RegistryData: RegistryComponent[] = [...UtilsFiles, ...CSSFiles];
