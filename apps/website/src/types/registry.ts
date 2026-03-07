import type { Languages } from "@/utils/shiki/highlight";

import type { BaseRegistry } from "@code-blocks/registry";
import type { ComponentType, LazyExoticComponent } from "react";

export interface RegistryComponent extends BaseRegistry {
  fileType: Languages;
  reactComponent?: LazyExoticComponent<ComponentType>;
}
