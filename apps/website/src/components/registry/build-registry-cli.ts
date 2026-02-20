import chalk from "chalk";

import { RegistryData } from "./data";
import { writeFileSync } from "node:fs";

const log = console.log;

const generatePublicRegistryData = () => {
  log(chalk.bgGray("|- 📦 Generating registry for @code-blocks/cli..."));

  const publicData = RegistryData.map((component) => ({
    title: component.title,
    fileType: component.fileType,
    fileSource: component.fileSource,
    group: component.group,
    shadcnRegistry: component.shadcnRegistry,
  }));

  const currentDate = new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  writeFileSync(
    "./public/registry-cli.json",
    JSON.stringify(publicData, null, 2),
    "utf-8",
  );

  log(chalk.green(`|- ✅ registry-cli.json generated successfully (${currentDate})`));
};

generatePublicRegistryData();
