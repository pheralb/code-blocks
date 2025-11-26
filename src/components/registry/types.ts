import type { Languages } from "@/utils/shiki";
import type { ComponentType, LazyExoticComponent } from "react";

// https://ui.shadcn.com/docs/registry/registry-item-json#type
export type ShadcnType =
  | "registry:ui"
  | "registry:hook"
  | "registry:lib"
  | "registry:file"
  | "registry:component";

export interface ShadcnRegistry {
  mainType: ShadcnType;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: {
    path: string;
    type: ShadcnType;
  }[];
}

export interface RegistryComponent {
  title: string;
  mainSourceFile: string;
  fileType: Languages;
  shadcnRegistry?: ShadcnRegistry;
  reactComponent?: LazyExoticComponent<ComponentType>;
  exampleSourceFile?: string;
  dependencies?: string[];
  devDependencies?: string[];
}
