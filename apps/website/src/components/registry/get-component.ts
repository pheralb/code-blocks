import type { RegistryComponent } from "@/types/registry";
import { RegistryData } from "./data";

export const getComponent = (title: string): RegistryComponent | undefined => {
  return RegistryData.find((group) => group.shadcnRegistry.name === title);
};
