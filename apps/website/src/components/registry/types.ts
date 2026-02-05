import type { Languages } from "@/utils/shiki";
import type { ComponentType, LazyExoticComponent } from "react";

// https://ui.shadcn.com/docs/registry/registry-item-json#type
export type RegistryType =
  | "registry:ui"
  | "registry:hook"
  | "registry:block"
  | "registry:lib"
  | "registry:file"
  | "registry:component";

export interface ShadcnRegistry {
  name: string;
  title?: string;
  type: RegistryType;
  target?: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files?: {
    path: string;
    target?: string;
    type: RegistryType;
  }[];
}

export interface RegistryComponent {
  title: string;
  fileType: Languages;
  shadcnRegistry: ShadcnRegistry;
  fileSource: string;
  group?: string;
  reactComponent?: LazyExoticComponent<ComponentType>;
  exampleFileSource?: string;
}
