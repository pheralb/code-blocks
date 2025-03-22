import { container } from "@/ui/container";
import { cn } from "@/utils/cn";

import { BuiltBy } from "@/components/builtBy";
import ExternalLink from "@/ui/externalLink";
import { Github, X } from "@/ui/logos";
import { buttonVariants } from "@/ui/button";
import ModeToggle from "./modeToggle";

const Footer = () => {
  return (
    <footer
      className={cn(
        "fixed bottom-0",
        "bg-neutral-100/30 backdrop-blur-md dark:bg-neutral-900/30",
        "w-full py-3",
      )}
    >
      <div className={cn(container)}>
        <div className="font-headings flex items-center justify-between text-neutral-600 transition-colors dark:text-neutral-400">
          <BuiltBy size={14} />
          <div className="flex items-center space-x-0.5">
            <ExternalLink
              title="GitHub Repository"
              href="https://github.com/pheralb/codeblocks"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
            >
              <Github width={18} height={18} />
            </ExternalLink>
            <ExternalLink
              title="Twitter"
              href="https://x.com/pheralb_"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
            >
              <X width={16} height={16} />
            </ExternalLink>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
