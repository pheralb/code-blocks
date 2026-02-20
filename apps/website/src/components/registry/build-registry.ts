import type { ShadcnRegistry } from "./types";

import chalk from "chalk";
import { RegistryData } from "./data";

import { writeFileSync } from "fs";
import { execSync } from "child_process";

const log = console.log;

const registryUrl = "https://code-blocks.pheralb.dev/r/";

const RegistrySchema = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "pheralb/code-blocks",
  homepage: "https://code.pheralb.dev/",
  items: [],
};

const buildRegistry = () => {
  const registryItems: ShadcnRegistry[] = [];

  // Build from RegistryData
  for (const component of RegistryData) {
    if (!component.shadcnRegistry) continue;

    const item: ShadcnRegistry = {
      title: component.title,
      name: component.shadcnRegistry.name,
      type: component.shadcnRegistry.type,
      files: [
        {
          path: component.fileSource,
          type: component.shadcnRegistry.type,
        },
      ],
    };

    if (component.shadcnRegistry.target) {
      item.files![0].target = component.shadcnRegistry.target;
    }

    if (component.shadcnRegistry.dependencies) {
      item.dependencies = component.shadcnRegistry.dependencies;
    }

    if (component.shadcnRegistry.devDependencies) {
      item.devDependencies = component.shadcnRegistry.devDependencies;
    }

    if (component.shadcnRegistry.registryDependencies) {
      item.registryDependencies =
        component.shadcnRegistry.registryDependencies.map(
          (dep) => `${registryUrl}${dep}.json`,
        );
    }

    registryItems.push(item);
  }

  return {
    ...RegistrySchema,
    items: registryItems,
  };
};

const generatePublicRegistryData = () => {
  log(chalk.bgGray("|- 📦 Generating registry for @code-blocks/cli..."));

  const publicData = RegistryData.map((component) => ({
    title: component.title,
    fileType: component.fileType,
    fileSource: component.fileSource,
    group: component.group,
    shadcnRegistry: component.shadcnRegistry,
  }));

  writeFileSync(
    "./public/registry-cli.json",
    JSON.stringify(publicData, null, 2),
    "utf-8",
  );

  log(chalk.green("|- ✅ registry-cli.json generated successfully"));
};

const main = () => {
  try {
    log(chalk.bgGray("|- 📦 Generating shadcn/ui registry..."));

    const result = buildRegistry();
    writeFileSync("./registry.json", JSON.stringify(result, null, 2), "utf-8");
    log(chalk.green("|- ✅ registry.json generated successfully"));

    log(chalk.bgGray("|- 📦 Running shadcn CLI..."));
    execSync("shadcn build", { stdio: "inherit" });
    log(chalk.green("|- ✅ shadcn build completed successfully"));

    generatePublicRegistryData();
  } catch (error) {
    console.log(
      chalk.red.bold(
        "|- ❌ Error generating registry or running shadcn CLI. Run pnpm build:registry locally and check registry.json file or shadcn CLI errors.",
      ),
      error,
    );
    process.exit(1);
  }
};

main();
