import type { RegistryComponent } from "./types";

import chalk from "chalk";
import { RegistryData } from "./data";

import { join } from "path";
import { existsSync } from "fs";

interface CheckResult {
  title: string;
  mainSourceFile: string;
  exists: boolean;
}

export function checkMainSourceFiles(): CheckResult[] {
  const projectRoot = process.cwd();

  return RegistryData.map((component: RegistryComponent) => {
    const filePath = join(projectRoot, component.mainSourceFile);
    const exists = existsSync(filePath);
    return {
      title: component.title,
      mainSourceFile: component.mainSourceFile,
      exists,
    };
  });
}

export function getMissingMainSourceFiles(): CheckResult[] {
  return checkMainSourceFiles().filter((result) => !result.exists);
}

export function allMainSourceFilesExist(): boolean {
  return getMissingMainSourceFiles().length === 0;
}

function checkRegistry() {
  console.log(chalk.bold.blue("|- 🔍 Checking registry...\n"));

  const results = checkMainSourceFiles();
  const missing = getMissingMainSourceFiles();

  if (missing.length === 0) {
    console.log(chalk.green.bold("|- ✅ Registry checked successfully"));
    process.exit(0);
  }

  console.log(
    chalk.red.bold(
      `|- ❌ Missing ${missing.length} main source files in registry:`,
    ),
  );
  missing.forEach((item) => {
    console.log(chalk.red("-"), chalk.white(item.title));
    console.log(chalk.gray(`-> ${item.mainSourceFile}\n`));
  });

  const existing = results.filter((r) => r.exists);
  if (existing.length > 0) {
    console.log(
      chalk.green(
        `✓ ${existing.length} main source files found successfully\n`,
      ),
    );
  }

  process.exit(1);
}

if (require.main === module) {
  checkRegistry();
}
