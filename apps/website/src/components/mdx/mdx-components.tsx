import type { MDXComponents } from "mdx/types";

import DocCard from "@/components/docs/doc-card";
import Showcase from "@/components/docs/showcase";
import ShowProps from "@/components/docs/show-props";
import ShowSource from "@/components/docs/show-source";
import ComponentPreview from "@/components/docs/component-preview";
import MDXHighlightTabs from "@/components/docs/mdx-highlight-tabs";
import CopyShadcnCommand from "@/components/docs/copy-shadcn-command";
import DocNeutralColors from "@/components/docs/doc-neutral-colors";
import CodeBlockSugarHighExample from "@/components/previews/code-block-sugar-high-example";
import { CodeBlockSelectPkg } from "@/components/code-block/blocks/copy-with-select-package-manager";
import { CodeBlockTabsPkg } from "@/components/code-block/blocks/copy-with-tabs-package-manager";
import LineAnchorsExample from "@/components/previews/line-anchors-example";

import {
  CreateReactApp,
  HighlightsAvailable,
} from "@/components/docs/prerequisites-cards";

// MDX Components:
import Grid from "@/components/ui/grid";
import { TabsContent } from "@/components/ui/tabs";
import { AMDXComponent } from "@/components/mdx/a-component";
import { PreShikiComponent } from "@/components/code-block/mdx/pre-shiki";

// Homepage:
import Hero from "@/components/hero";
import Features from "@/components/features";

// From Registry:
import { CopyButton } from "@/components/code-block/copy-button";

const MDXCustomComponents: MDXComponents = {
  // <a>:
  ...AMDXComponent,
  // <pre> Shiki:
  ...PreShikiComponent,
  // MDX CodeBlock Source Tabs:
  MDXHighlightTabs,
  TabsContent,
  // Blocks:
  Grid,
  CodeBlockSelectPkg,
  CodeBlockTabsPkg,
  CopyShadcnCommand,
  CodeBlockSugarHighExample,
  DocCard,
  ShowProps,
  ShowSource,
  Showcase,
  CopyButton,
  ComponentPreview,
  Hero,
  Features,
  CreateReactApp,
  HighlightsAvailable,
  DocNeutralColors,
  LineAnchorsExample,
};

export { MDXCustomComponents };
