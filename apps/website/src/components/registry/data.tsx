import type { RegistryComponent } from "@/components/registry/types";
import { lazy } from "react";

// Settings:
const utilsFolder = "src/utils";
const stylesFolder = "src/styles";
const componentsFolder = "src/components";
const codeblockComponent = "src/components/code-block";

// UI Components:
const CSSFiles: RegistryComponent[] = [
  {
    title: "sugar-high-css",
    fileType: "css",
    mainSourceFile: `${stylesFolder}/sugar-high.css`,
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
  {
    title: "sugar-high-highlighter",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/sugar-high/index.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
      dependencies: ["sugar-high"],
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
  {
    title: "shiki-custom-properties",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/shiki/transformers/add-to-pre-element.ts`,
    shadcnRegistry: {
      mainType: "registry:lib",
      dependencies: ["shiki"],
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
    title: "shiki-add-to-pre-element",
    fileType: "ts",
    mainSourceFile: `${utilsFolder}/shiki/transformers/add-to-pre-element.ts`,
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
    title: "code-block-mdx-shiki",
    fileType: "tsx",
    mainSourceFile: `${codeblockComponent}/mdx/pre-shiki.tsx`,
    shadcnRegistry: {
      mainType: "registry:component",
    },
  },
  {
    title: "code-block-mdx-sugar-high",
    fileType: "tsx",
    mainSourceFile: `${codeblockComponent}/mdx/pre-sugar-high.tsx`,
    shadcnRegistry: {
      mainType: "registry:component",
    },
  },
  {
    title: "code-block-client-shiki",
    fileType: "tsx",
    mainSourceFile: `${codeblockComponent}/client/shiki.tsx`,
    shadcnRegistry: {
      mainType: "registry:component",
      dependencies: ["shiki"],
    },
    exampleSourceFile: `${componentsFolder}/previews/code-block-shiki-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/code-block-shiki-example"),
    ),
  },
  {
    title: "code-block-client-sugar-high",
    fileType: "tsx",
    mainSourceFile: `${codeblockComponent}/client/sugar-high.tsx`,
    shadcnRegistry: {
      mainType: "registry:component",
      dependencies: ["sugar-high"],
    },
    exampleSourceFile: `${componentsFolder}/previews/code-block-sugar-high-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/code-block-sugar-high-example"),
    ),
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
  ...CSSFiles,
  ...ShikiTransformers,
  ...UIComponents,
];
