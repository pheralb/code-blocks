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
    group: "shiki",
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
    group: "sugar-high",
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
    fileSource: `${utilsFolder}/shiki/highlight.ts`,
    group: "shiki",
    shadcnRegistry: {
      name: "shiki-highlighter",
      type: "registry:lib",
      dependencies: ["shiki", "@shikijs/themes", "@shikijs/langs"],
      registryDependencies: ["shiki-css"],
      target: "src/utils/shiki/highlight.ts",
    },
  },
  {
    title: "Sugar High Highlighter",
    fileType: "ts",
    fileSource: `${utilsFolder}/sugar-high/highlight.ts`,
    group: "sugar-high",
    shadcnRegistry: {
      name: "sugar-high-highlighter",
      type: "registry:lib",
      dependencies: ["sugar-high"],
      registryDependencies: ["sugar-high-css"],
      target: "src/utils/sugar-high/highlight.ts",
    },
  },
  {
    title: "Copy to Clipboard",
    fileType: "ts",
    fileSource: `${utilsFolder}/copy.ts`,
    shadcnRegistry: {
      name: "copy-to-clipboard",
      type: "registry:lib",
      target: "src/utils/copy.ts",
    },
  },
  {
    title: "React to Text Converter",
    fileType: "ts",
    fileSource: `${utilsFolder}/react-to-text.ts`,
    shadcnRegistry: {
      name: "react-to-text",
      type: "registry:lib",
      target: "src/utils/react-to-text.ts",
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
      dependencies: ["zustand"],
    },
  },
];

// Shiki Transformers:
const ShikiTransformers: RegistryComponent[] = [
  {
    title: "Shiki Transformer - Show Line Numbers",
    fileType: "ts",
    group: "shiki",
    fileSource: `${utilsFolder}/shiki/transformers/show-line-numbers.ts`,
    shadcnRegistry: {
      name: "shiki-show-line-numbers",
      type: "registry:lib",
      dependencies: ["shiki"],
      target: "src/utils/shiki/transformers/show-line-numbers.ts",
    },
  },
  {
    title: "Shiki Transformer - Word Wrap",
    fileType: "ts",
    group: "shiki",
    fileSource: `${utilsFolder}/shiki/transformers/word-wrap.ts`,
    shadcnRegistry: {
      name: "shiki-word-wrap",
      type: "registry:lib",
      dependencies: ["shiki"],
      target: "src/utils/shiki/transformers/word-wrap.ts",
    },
  },
  {
    title: "Shiki Transformer - Add to Pre Element",
    fileType: "ts",
    group: "shiki",
    fileSource: `${utilsFolder}/shiki/transformers/add-to-pre-element.ts`,
    shadcnRegistry: {
      name: "shiki-add-to-pre-element",
      type: "registry:lib",
      dependencies: ["shiki"],
      target: "src/utils/shiki/transformers/add-to-pre-element.ts",
    },
  },
  {
    title: "Shiki Transformer - Line Anchors",
    fileType: "ts",
    group: "shiki",
    fileSource: `${utilsFolder}/shiki/transformers/line-anchors.ts`,
    shadcnRegistry: {
      name: "shiki-line-anchors",
      type: "registry:lib",
      dependencies: ["shiki"],
      registryDependencies: ["shiki-css", "shiki-show-line-numbers"],
      target: "src/utils/shiki/transformers/line-anchors.ts",
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
      name: "code-block",
      type: "registry:component",
      dependencies: ["lucide-react", "@react-symbols/icons"],
      target: "src/components/code-block/code-block.tsx",
    },
  },
  {
    title: "Code Block - MDX Shiki",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/mdx/pre-shiki.tsx`,
    group: "shiki",
    shadcnRegistry: {
      name: "mdx-shiki",
      type: "registry:component",
      devDependencies: ["@types/mdx"],
      registryDependencies: [
        "react-to-text",
        "copy-to-clipboard",
        "code-block",
      ],
      target: "src/components/code-block/mdx/pre-shiki.tsx",
    },
  },
  {
    title: "Code Block - MDX Sugar High",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/mdx/pre-sugar-high.tsx`,
    group: "sugar-high",
    shadcnRegistry: {
      name: "mdx-sugar-high",
      type: "registry:component",
      devDependencies: ["@types/mdx"],
      registryDependencies: [
        "react-to-text",
        "sugar-high-highlighter",
        "copy-to-clipboard",
        "code-block",
      ],
      target: "src/components/code-block/mdx/pre-sugar-high.tsx",
    },
  },
  {
    title: "Code Block - Client Shiki",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/client/shiki.tsx`,
    exampleFileSource: `${componentsFolder}/previews/code-block-shiki-example.tsx`,
    group: "shiki",
    reactComponent: lazy(
      () => import("@/components/previews/code-block-shiki-example"),
    ),
    shadcnRegistry: {
      name: "client-shiki",
      type: "registry:component",
      dependencies: ["shiki"],
      registryDependencies: ["shiki-highlighter"],
      target: "src/components/code-block/client/shiki.tsx",
    },
  },
  {
    title: "Code Block - Client Sugar High",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/client/sugar-high.tsx`,
    exampleFileSource: `${componentsFolder}/previews/code-block-sugar-high-example.tsx`,
    group: "sugar-high",
    reactComponent: lazy(
      () => import("@/components/previews/code-block-sugar-high-example"),
    ),
    shadcnRegistry: {
      name: "client-sugar-high",
      type: "registry:component",
      registryDependencies: ["sugar-high-highlighter"],
      target: "src/components/code-block/client/sugar-high.tsx",
    },
  },
  {
    title: "Code Block - Client Sugar High + Line Numbers",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/client/sugar-high.tsx`,
    group: "sugar-high",
    exampleFileSource: `${componentsFolder}/previews/code-block-sugar-high-line-numbers-example.tsx`,
    reactComponent: lazy(
      () =>
        import("@/components/previews/code-block-sugar-high-line-numbers-example"),
    ),
    shadcnRegistry: {
      name: "client-sugar-high-line-numbers",
      type: "registry:component",
      registryDependencies: ["sugar-high-highlighter"],
      target: "src/components/code-block/client/sugar-high.tsx",
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
      registryDependencies: ["copy-to-clipboard"],
      target: "src/components/code-block/copy-button.tsx",
    },
  },
];

// Blocks:
const Blocks: RegistryComponent[] = [
  {
    title: "Blocks - Inline Code",
    fileType: "tsx",
    group: "blocks",
    fileSource: `${codeblockComponent}/blocks/inline-code.tsx`,
    exampleFileSource: `${componentsFolder}/previews/inline-code-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/inline-code-example"),
    ),
    shadcnRegistry: {
      name: "block-inline-code",
      type: "registry:block",
      registryDependencies: [
        "shiki-highlighter",
        "copy-button",
        "code-block",
        "client-shiki",
      ],
      target: "src/components/code-block/blocks/inline-code.tsx",
    },
  },
  {
    title: "Blocks - Copy + Text Morph",
    fileType: "tsx",
    group: "blocks",
    fileSource: `${codeblockComponent}/blocks/copy-text-morph.tsx`,
    exampleFileSource: `${componentsFolder}/previews/copy-text-morph-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/copy-text-morph-example"),
    ),
    shadcnRegistry: {
      name: "block-copy-text-morph",
      type: "registry:block",
      dependencies: ["motion"],
      target: "src/components/code-block/blocks/copy-text-morph.tsx",
    },
  },
  {
    title: "Blocks - Select Package Manager",
    fileType: "tsx",
    fileSource: `${codeblockComponent}/blocks/copy-with-select-package-manager.tsx`,
    group: "blocks",
    exampleFileSource: `${componentsFolder}/previews/select-package-manager-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/select-package-manager-example"),
    ),
    shadcnRegistry: {
      name: "block-select-package-manager",
      type: "registry:block",
      dependencies: ["@react-symbols/icons"],
      registryDependencies: [
        "shiki-highlighter",
        "copy-button",
        "code-block",
        "client-shiki",
        "package-manager-store",
      ],
      target:
        "src/components/code-block/blocks/copy-with-select-package-manager.tsx",
    },
  },
  {
    title: "Blocks - Tabs Package Manager",
    fileType: "tsx",
    group: "blocks",
    fileSource: `${codeblockComponent}/blocks/copy-with-tabs-package-manager.tsx`,
    exampleFileSource: `${componentsFolder}/previews/tabs-package-manager-example.tsx`,
    reactComponent: lazy(
      () => import("@/components/previews/tabs-package-manager-example"),
    ),
    shadcnRegistry: {
      name: "block-tabs-package-manager",
      type: "registry:block",
      dependencies: ["@react-symbols/icons"],
      registryDependencies: [
        "shiki-highlighter",
        "copy-button",
        "code-block",
        "client-shiki",
        "package-manager-store",
      ],
      target:
        "src/components/code-block/blocks/copy-with-tabs-package-manager.tsx",
    },
  },
  {
    title: "Blocks - Multi Tabs",
    fileType: "tsx",
    group: "blocks",
    fileSource: `${codeblockComponent}/blocks/multi-tabs.tsx`,
    exampleFileSource: `${codeblockComponent}/blocks/multi-tabs.tsx`,
    reactComponent: lazy(
      () => import("@/components/code-block/blocks/multi-tabs"),
    ),
    shadcnRegistry: {
      name: "block-multi-tabs",
      type: "registry:block",
      dependencies: ["@react-symbols/icons"],
      registryDependencies: [
        "shiki-highlighter",
        "copy-button",
        "code-block",
        "client-shiki",
      ],
      target: "src/components/code-block/blocks/multi-tabs.tsx",
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
