export type RegistryType =
  | "registry:ui"
  | "registry:hook"
  | "registry:block"
  | "registry:lib"
  | "registry:file"
  | "registry:component";

export type RegistryGroup = "shiki" | "sugar-high" | "blocks";

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

export interface BaseRegistry {
  title: string;
  fileType: string;
  shadcnRegistry: ShadcnRegistry;
  fileSource: string;
  group?: RegistryGroup;
  exampleFileSource?: string;
}
