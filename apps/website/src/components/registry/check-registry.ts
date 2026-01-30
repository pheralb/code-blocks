import type { RegistryComponent } from "./types";

import chalk from "chalk";
import { RegistryData } from "./data";

import { join } from "path";
import { existsSync, readdirSync, readFileSync, statSync } from "fs";

interface CheckResult {
  title: string;
  mainSourceFile: string;
  exists: boolean;
}

export function checkMainSourceFiles(): CheckResult[] {
  const projectRoot = process.cwd();
  return RegistryData.map((component: RegistryComponent) => {
    const filePath = join(projectRoot, component.fileSource);
    const exists = existsSync(filePath);
    return {
      title: component.title,
      mainSourceFile: component.fileSource,
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

function checkMDXFiles(): Array<{ file: string; name: string; line: number }> {
  const projectRoot = process.cwd();
  const docsFolder = join(projectRoot, "src", "docs");
  const missing: Array<{ file: string; name: string; line: number }> = [];

  if (!existsSync(docsFolder)) {
    return missing;
  }

  const mdxFiles: string[] = [];
  function findMDX(dir: string) {
    readdirSync(dir).forEach((entry) => {
      const fullPath = join(dir, entry);
      if (statSync(fullPath).isDirectory()) {
        findMDX(fullPath);
      } else if (entry.endsWith(".mdx")) {
        mdxFiles.push(fullPath);
      }
    });
  }
  findMDX(docsFolder);

  const regex = /<CopyShadcnCommand[\s\S]*?name=["']([^"']+)["'][\s\S]*?\/>/g;

  mdxFiles.forEach((filePath) => {
    const content = readFileSync(filePath, "utf-8");
    let match;
    while ((match = regex.exec(content)) !== null) {
      const componentName = match[1];
      const exists = RegistryData.some(
        (item) => item.shadcnRegistry?.name === componentName,
      );
      if (!exists) {
        const beforeMatch = content.substring(0, match.index);
        const line = beforeMatch.split("\n").length;
        missing.push({
          file: filePath.replace(projectRoot, "").replace(/\\/g, "/"),
          name: componentName,
          line,
        });
      }
    }
  });

  return missing;
}

function checkRegistry() {
  console.log(chalk.bold.blue("|- 🔍 Checking registry...\n"));

  const results = checkMainSourceFiles();
  const missing = getMissingMainSourceFiles();
  const mdxMissing = checkMDXFiles();

  if (missing.length > 0) {
    console.log(
      chalk.red.bold(
        `|- ❌ Missing ${missing.length} main source files in registry:`,
      ),
    );
    missing.forEach((item) => {
      console.log(chalk.red("-"), chalk.white(item.title));
      console.log(chalk.gray(`-> ${item.mainSourceFile}\n`));
    });
  } else {
    const existing = results.filter((r) => r.exists);
    console.log(
      chalk.green(
        `|- ✓ ${existing.length} main source files found successfully.\n`,
      ),
    );
  }

  if (mdxMissing.length > 0) {
    console.log(
      chalk.red.bold(
        `|- ❌ Missing ${mdxMissing.length} <CopyShadcnCommand /> names in MDX files:`,
      ),
    );
    mdxMissing.forEach((item) => {
      console.log(chalk.red("-"), chalk.white(item.name));
      console.log(chalk.gray(`-> ${item.file}:${item.line}\n`));
    });
  }

  if (missing.length === 0 && mdxMissing.length === 0) {
    console.log(chalk.green.bold("|- ✅ Registry checked successfully."));
    process.exit(0);
  }

  process.exit(1);
}

if (require.main === module) {
  checkRegistry();
}
