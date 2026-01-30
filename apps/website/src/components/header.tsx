import { cn } from "@/utils/cn";

import Link from "next/link";
import GithubLink from "@/components/github-link";
import SponsorLink from "@/components/sponsor-link";
import ThemeToggle from "@/components/theme-toggle";
import SearchDocs from "@/components/docs/search-docs";

interface HeaderProps {
  layout: "docs" | "app";
}

const Header = ({ layout }: HeaderProps) => {
  return (
    <header
      className={cn(
        "z-50",
        "sticky top-0 flex w-full",
        "bg-neutral-50 backdrop-blur-sm dark:bg-neutral-900/90",
        layout === "app" && "h-16 px-0 py-4",
        layout === "docs" &&
          "h-14 border-b border-neutral-200 px-3.5 py-3 dark:border-neutral-800",
      )}
    >
      <nav className="flex w-full items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-xl font-semibold tracking-tight transition-colors",
            "hover:text-neutral-700 dark:hover:text-neutral-300",
          )}
        >
          Code Blocks
        </Link>
        <div className="flex items-center gap-4">
          <SearchDocs />
          <div className="flex items-center space-x-1 border-l border-neutral-200 pl-3 dark:border-neutral-800">
            <GithubLink />
            <SponsorLink />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
