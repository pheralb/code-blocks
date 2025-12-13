import type { MDXComponents } from "mdx/types";

import DocCard from "@/components/docs/doc-card";
import Showcase from "@/components/docs/showcase";
import ShowProps from "@/components/docs/show-props";
import ShowSource from "@/components/docs/show-source";
import ComponentPreview from "@/components/docs/component-preview";

// HTML Components:
import { AMDXComponent } from "@/components/mdx/components/a-component";
import { PreMDXComponent } from "@/components/mdx/components/pre-component";

// Homepage:
import Hero from "@/components/hero";
import Features from "@/components/features";

// From Registry:
import { CopyButton } from "@/components/code-block/copy-button";

const MDXCustomComponents: MDXComponents = {
  // <a>:
  ...AMDXComponent,
  // <pre>:
  ...PreMDXComponent,
  DocCard,
  ShowProps,
  ShowSource,
  Showcase,
  CopyButton,
  ComponentPreview,
  Hero,
  Features
};

export { MDXCustomComponents };
