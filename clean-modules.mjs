import { join } from "path";
import { rm, readdir } from "fs/promises";

const targets = [
  "pnpm-lock.yaml",
  ".turbo",
  ".next",
  ".content-collections",
  "build",
  "dist",
  "node_modules",
];

const workspaceDirs = ["apps", "packages"];

const root = process.cwd();

async function clean(dir) {
  for (const target of targets) {
    const fullPath = join(dir, target);
    try {
      await rm(fullPath, { recursive: true, force: true });
      console.log(`|- 🗑️ Deleted: ${fullPath.replace(root, ".")}`);
    } catch {
      console.error(`|- ❌ Failed: ${fullPath.replace(root, ".")}`);
    }
  }
}

await clean(root);

for (const wsDir of workspaceDirs) {
  const wsPath = join(root, wsDir);
  let entries;
  try {
    entries = await readdir(wsPath, { withFileTypes: true });
  } catch {
    continue;
  }
  for (const entry of entries) {
    if (entry.isDirectory()) {
      await clean(join(wsPath, entry.name));
    }
  }
}
