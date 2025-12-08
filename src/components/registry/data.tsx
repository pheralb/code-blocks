import type { RegistryComponent } from "@/components/registry/types";
import { lazy } from "react";

// Settings:
const utilsFolder = "src/utils";
const componentsFolder = "src/components";
const mdxComponents = "src/components/mdx/components";
const codeblockComponent = "src/components/code-block";

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
  {
    title: "copy-to-clipboard",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/copy.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
    },
  },
  {
    title: "react-to-text",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/react-to-text.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
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
  {
    title: "shiki-get-title",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/shiki/transformers/get-title.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
      dependencies: ["shiki"],
    },
  },
  {
    title: "shiki-get-language",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/shiki/transformers/get-language.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
      dependencies: ["shiki"],
    },
  },
];

// UI Components:
const UIComponents: RegistryComponent[] = [
  {
    title: "code-block-structure",
    fileType: "tsx",
    mainSourceFile: `${codeblockComponent}/code-block.tsx`,
    shadcnRegistry: {
      mainType: "registry:component",
      dependencies: ["lucide-react"],
    },
    exampleSourceFile: `${componentsFolder}/previews/code-block-structure.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/code-block-structure"),
    ),
  },
  {
    title: "code-block-mdx",
    fileType: "tsx",
    mainSourceFile: `${mdxComponents}/pre-component.tsx`,
    shadcnRegistry: {
      mainType: "registry:component",
      dependencies: ["lucide-react"],
    },
  },
  {
    title: "copy-button",
    fileType: "tsx",
    mainSourceFile: `${codeblockComponent}/copy-button.tsx`,
    shadcnRegistry: {
      mainType: "registry:component",
      dependencies: ["lucide-react"],
    },
    exampleSourceFile: `${componentsFolder}/previews/copy-button-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/copy-button-example"),
    ),
  },
  {
    title: "language-svgs",
    fileType: "tsx",
    mainSourceFile: `${codeblockComponent}/language-svgs.tsx`,
    shadcnRegistry: {
      mainType: "registry:component",
      dependencies: ["@react-symbols/icons"],
    },
  },
];

export const RegistryData: RegistryComponent[] = [
  ...UtilsFiles,
  ...ShikiTransformers,
  ...UIComponents,
];
