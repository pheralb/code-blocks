import { create } from "zustand";
import { persist } from "zustand/middleware";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

interface PkgManagerState {
  packageManager: PackageManager;
  setPackageManager: (pkgManager: PackageManager) => void;
}

const usePkgManager = create<PkgManagerState>()(
  persist(
    (set) => ({
      packageManager: "pnpm",
      setPackageManager: (pkgManager: PackageManager) =>
        set(() => ({ packageManager: pkgManager })),
    }),
    {
      name: "pkg-manager-store",
    },
  ),
);

export { type PackageManager, usePkgManager };
