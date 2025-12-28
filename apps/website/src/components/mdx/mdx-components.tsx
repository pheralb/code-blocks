import type { MDXComponents } from "mdx/types";

import DocCard from "@/components/docs/doc-card";
import Showcase from "@/components/docs/showcase";
import ShowProps from "@/components/docs/show-props";
import ShowSource from "@/components/docs/show-source";
import ComponentPreview from "@/components/docs/component-preview";

// MDX Components:
import { AMDXComponent } from "@/components/mdx/a-component";
import { PreShikiComponent } from "@/components/code-block/mdx/pre-shiki";
import { TabsContent } from "@/components/ui/tabs";
import CopyWithPkgManager from "@/components/blocks/copy-with-pkg-manager";

// Homepage:
import Hero from "@/components/hero";
import Features from "@/components/features";

// Tabs Source:
import MDXCodeBlockSource from "@/components/docs/mdx-code-block-source";

// From Registry:
import { CopyButton } from "@/components/code-block/copy-button";

const MDXCustomComponents: MDXComponents = {
  // <a>:
  ...AMDXComponent,
  // <pre> Shiki:
  ...PreShikiComponent,
  // MDX CodeBlock Source Tabs:
  MDXCodeBlockSource,
  TabsContent,
  // Blocks:
  CopyWithPkgManager,
  DocCard,
  ShowProps,
  ShowSource,
  Showcase,
  CopyButton,
  ComponentPreview,
  Hero,
  Features,
};

export { MDXCustomComponents };
