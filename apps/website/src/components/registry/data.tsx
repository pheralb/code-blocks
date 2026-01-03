import type {
  RegistryComponent,
  ShadcnRegistry,
} from "@/components/registry/types";
import { lazy } from "react";

// Settings:
const utilsFolder = "src/utils";
const stylesFolder = "src/styles";
const componentsFolder = "src/components";
const codeblockComponent = "src/components/code-block";
const registryUrl = "https://code-blocks.pheralb.dev/r/";

// Blocks:
const BlocksData: ShadcnRegistry[] = [
  {
    name: "code-block-client-shiki",
    type: "registry:block",
    registryDependencies: [
      `${registryUrl}code-block-structure.json`,
      `${registryUrl}shiki-highlighter.json`,
      `${registryUrl}code-block-client-shiki.json`,
      `${registryUrl}copy-button.json`,
    ],
  },
  {
    name: "code-block-client-sugar-high",
    type: "registry:block",
    registryDependencies: [
      `${registryUrl}code-block-structure.json`,
      `${registryUrl}sugar-high-highlighter.json`,
      `${registryUrl}code-block-client-sugar-high.json`,
      `${registryUrl}copy-button.json`,
    ],
  },
];

// UI Components:
const CSSFiles: RegistryComponent[] = [
  {
    title: "Sugar High CSS",
    fileType: "css",
    fileSource: `${stylesFolder}/sugar-high.css`,
    shadcnRegistry: {
      name: "sugar-high-css",
      type: "registry:file",
      target: "src/styles/sugar-high.css",
    },
  },
];

// Utils:
const UtilsFiles: RegistryComponent[] = [
  {
    title: "Shiki Highlighter",
    fileType: "ts",
    fileSource: `${utilsFolder}/shiki/index.ts`,
    shadcnRegistry: {
      name: "shiki-highlighter",
      type: "registry:lib",
      dependencies: ["shiki", "@shikijs/themes", "@shikijs/langs"],
    },
  },
  {
    title: "Sugar High Highlighter",
    fileType: "ts",
    fileSource: `${utilsFolder}/sugar-high/index.ts`,
    shadcnRegistry: {
      name: "sugar-high-highlighter",
      type: "registry:lib",
      dependencies: ["sugar-high"],
    },
  },
  {
    title: "Copy to Clipboard",
    fileType: "ts",
    fileSource: `${utilsFolder}/copy.ts`,
    shadcnRegistry: {
      name: "copy-to-clipboard",
      type: "registry:lib",
    },
  },
  {
    title: "React to Text Converter",
    fileType: "ts",
    fileSource: `${utilsFolder}/react-to-text.ts`,
    shadcnRegistry: {
      name: "react-to-text",
      type: "registry:lib",
    },
  },
];

// Shiki Transformers:
const ShikiTransformers: RegistryComponent[] = [
  {
    title: "Shiki Transformer - Show Line Numbers",
    fileType: "ts",
    fileSource: `${utilsFolder}/shiki/transformers/show-line-numbers.ts`,
    shadcnRegistry: {
      name: "shiki-show-line-numbers",
      type: "registry:lib",
      dependencies: ["shiki"],
    },
  },
  {
    title: "Shiki Transformer - Word Wrap",
    fileType: "ts",
    fileSource: `${utilsFolder}/shiki/transformers/word-wrap.ts`,
    shadcnRegistry: {
      name: "shiki-word-wrap",
      type: "registry:lib",
      dependencies: ["shiki"],
    },
  },
  {
    title: "Shiki Transformer - Add to Pre Element",
    fileType: "ts",
    fileSource: `${utilsFolder}/shiki/transformers/add-to-pre-element.ts`,
    shadcnRegistry: {
      name: "shiki-add-to-pre-element",
      type: "registry:lib",
      dependencies: ["shiki"],
    },
  },
  {
    title: "Shiki Transformer - Meta Highlight",
    fileType: "ts",
    fileSource: `${utilsFolder}/shiki/transformers/add-to-pre-element.ts`,
    shadcnRegistry: {
      name: "shiki-add-to-pre-element",
      type: "registry:lib",
      dependencies: ["shiki"],
    },
  },
];

// UI Components:
const UIComponents: RegistryComponent[] = [
  {
    title: "Code Block - Structure",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/code-block.tsx`,
    exampleFileSource: `${componentsFolder}/previews/code-block-structure.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/code-block-structure"),
    ),
    shadcnRegistry: {
      name: "code-block-structure",
      type: "registry:component",
      dependencies: ["lucide-react"],
    },
  },
  {
    title: "Code Block - MDX Shiki",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/mdx/pre-shiki.tsx`,
    shadcnRegistry: {
      name: "code-block-mdx-shiki",
      type: "registry:component",
    },
  },
  {
    title: "Code Block - MDX Sugar High",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/mdx/pre-sugar-high.tsx`,
    shadcnRegistry: {
      name: "code-block-mdx-sugar-high",
      type: "registry:component",
    },
  },
  {
    title: "Code Block - Client Shiki",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/client/shiki.tsx`,
    exampleFileSource: `${componentsFolder}/previews/code-block-shiki-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/code-block-shiki-example"),
    ),
    shadcnRegistry: {
      name: "code-block-client-shiki",
      type: "registry:component",
      dependencies: ["shiki"],
    },
  },
  {
    title: "Code Block - Client Sugar High",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/client/sugar-high.tsx`,
    exampleFileSource: `${componentsFolder}/previews/code-block-sugar-high-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/code-block-sugar-high-example"),
    ),
    shadcnRegistry: {
      name: "code-block-client-sugar-high",
      type: "registry:component",
      dependencies: ["sugar-high"],
    },
  },
  {
    title: "Copy Button",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/copy-button.tsx`,
    exampleFileSource: `${componentsFolder}/previews/copy-button-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/copy-button-example"),
    ),
    shadcnRegistry: {
      name: "copy-button",
      type: "registry:component",
      dependencies: ["lucide-react"],
    },
  },
  {
    title: "Language SVGs",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/language-svgs.tsx`,
    shadcnRegistry: {
      name: "language-svgs",
      type: "registry:component",
      dependencies: ["@react-symbols/icons"],
    },
  },
];

const RegistryData: RegistryComponent[] = [
  ...UtilsFiles,
  ...CSSFiles,
  ...ShikiTransformers,
  ...UIComponents,
];

export { RegistryData, BlocksData };
