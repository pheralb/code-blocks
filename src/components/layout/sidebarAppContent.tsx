import { ExternalLink } from "@/components/ui/externalLink";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { cn } from "@/utils/cn";
import Link from "next/link";

const SidebarAppContent = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <nav className="flex flex-col space-y-2 px-5 py-6">
          <div className="flex flex-col gap-px">
            <div className="flex items-center text-zinc-600 dark:text-zinc-400">
              <ExternalLink
                href="https://pheralb.dev"
                className={cn(
                  "transition-colors hover:text-zinc-950 dark:hover:text-zinc-200",
                )}
              >
                pheralb
              </ExternalLink>
              <span className="mx-px text-zinc-600 dark:text-zinc-400">/</span>
            </div>
            <Link
              href="/"
              className={cn(
                "tracking-tight text-2xl font-semibold transition-colors",
                "hover:text-zinc-700 dark:hover:text-zinc-300",
              )}
            >
              Code Blocks
            </Link>
          </div>
        </nav>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarAppContent;
