import type { RegistryComponent } from "@/components/registry/types";
import { lazy } from "react";

// Settings:
const utilsFolder = "src/utils";
const stylesFolder = "src/styles";
const storesFolder = "src/stores";
const componentsFolder = "src/components";
const codeblockComponent = "src/components/code-block";

// CSS Files:
const CSSFiles: RegistryComponent[] = [
  {
    title: "Shiki CSS",
    fileType: "css",
    fileSource: `${stylesFolder}/shiki.css`,
    shadcnRegistry: {
      name: "shiki-css",
      type: "registry:file",
      target: "src/styles/shiki.css",
    },
  },
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

// Stores:
const StoresFiles: RegistryComponent[] = [
  {
    title: "Package Manager Store",
    fileType: "ts",
    fileSource: `${storesFolder}/packageManager.ts`,
    shadcnRegistry: {
      name: "package-manager-store",
      type: "registry:file",
      target: "src/stores/packageManager.ts",
      dependencies: ["zustand" ],
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
    exampleFileSource: `${componentsFolder}/previews/code-block-structure-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/code-block-structure-example"),
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

// Blocks:
const Blocks: RegistryComponent[] = [
  {
    title: "Blocks - Inline Code",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/blocks/inline-code.tsx`,
    exampleFileSource: `${componentsFolder}/previews/inline-code-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/inline-code-example"),
    ),
    shadcnRegistry: {
      name: "block-inline-code",
      type: "registry:block",
      registryDependencies: ["code-block-client-shiki"],
    },
  },
  {
    title: "Blocks - Select Package Manager",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/blocks/copy-with-select-package-manager.tsx`,
    exampleFileSource: `${componentsFolder}/previews/select-package-manager-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/select-package-manager-example"),
    ),
    shadcnRegistry: {
      name: "block-select-package-manager",
      type: "registry:block",
      registryDependencies: [
        "code-block-client-shiki",
        "package-manager-store",
      ],
    },
  },
  {
    title: "Blocks - Tabs Package Manager",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/blocks/copy-with-tabs-package-manager.tsx`,
    exampleFileSource: `${componentsFolder}/previews/tabs-package-manager-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/tabs-package-manager-example"),
    ),
    shadcnRegistry: {
      name: "block-tabs-package-manager",
      type: "registry:block",
      registryDependencies: [
        "code-block-client-shiki",
        "package-manager-store",
      ],
    },
  },
];

const RegistryData: RegistryComponent[] = [
  ...UtilsFiles,
  ...StoresFiles,
  ...CSSFiles,
  ...ShikiTransformers,
  ...UIComponents,
  ...Blocks,
];

export { RegistryData };
