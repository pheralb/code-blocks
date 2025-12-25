import type { ShadcnType } from "./types";

import chalk from "chalk";
import { RegistryData } from "./data";

import { writeFileSync } from "fs";
import { execSync } from "child_process";

const log = console.log;

const RegistrySchema = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "pheralb/code-blocks",
  homepage: "https://code.pheralb.dev/",
  items: [],
};

type RegistryItem = {
  name: string;
  type: ShadcnType;
  dependencies?: string[];
  registryDependencies?: string[];
  files: [
    {
      path: string;
      type: ShadcnType;
    },
  ];
};

const buildRegistry = () => {
  const registryItems: RegistryItem[] = [];

  for (const component of RegistryData) {
    if (!component.shadcnRegistry) continue;

    const item: RegistryItem = {
      name: component.title,
      type: component.shadcnRegistry.mainType,
      files: [
        {
          path: component.mainSourceFile,
          type: component.shadcnRegistry.mainType,
        },
      ],
    };

    if (component.shadcnRegistry.dependencies) {
      item.dependencies = component.shadcnRegistry.dependencies;
    }
    if (component.shadcnRegistry.registryDependencies) {
      item.registryDependencies = component.shadcnRegistry.registryDependencies;
    }

    registryItems.push(item);
  }

  return {
    ...RegistrySchema,
    items: registryItems,
  };
};

const main = () => {
  try {
    log(chalk.bgGray("|- 📦 Generating registry..."));

    const result = buildRegistry();
    writeFileSync("./registry.json", JSON.stringify(result, null, 2), "utf-8");
    log(chalk.green("|- ✅ registry.json generated successfully"));

    log(chalk.bgGray("|- 📦 Running shadcn CLI..."));
    execSync("shadcn build", { stdio: "inherit" });
    log(chalk.green("|- ✅ shadcn build completed successfully"));
  } catch (error) {
    log(chalk.red("|- ❌ Error deleting registry.json:"), error);
    process.exit(1);
  }
};

main();
