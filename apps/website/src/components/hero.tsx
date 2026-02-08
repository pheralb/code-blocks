import Link from "next/link";
import { ArrowUpRightIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import { globals } from "@/globals";

import { GitHub } from "@/components/ui/svgs/github";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "@/components/ui/external-link";

const Hero = () => {
  return (
    <div
      className={cn(
        "not-prose",
        "flex flex-col space-y-4 pt-10 pb-6 md:pt-12 md:pb-10",
        "animate-in fill-mode-backwards fade-in slide-in-from-bottom-4 duration-500",
      )}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="font-headings text-4xl font-semibold tracking-tight text-neutral-950 lg:text-5xl dark:text-neutral-50">
          Build beautiful code blocks
        </h1>
        <p className="font-medium text-neutral-500 dark:text-neutral-400">
          Ready to use UI components and utilities to show your snippets
          beautifully.
        </p>
      </div>
      <div
        className={cn(
          "flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-2",
          "animate-in fill-mode-backwards fade-in slide-in-from-bottom-4 delay-100 duration-500",
        )}
      >
        <Link
          href="/docs/getting-started/prerequisites"
          className={buttonVariants({
            size: "default",
            className: "group w-full md:w-auto",
          })}
        >
          <span>Get Started</span>
          <ChevronRightIcon
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
        <ExternalLink
          title="View on GitHub"
          href={globals.githubUrl}
          className={buttonVariants({
            size: "default",
            variant: "ghost",
            className: "w-full no-underline md:w-44",
          })}
        >
          <div className="flex items-center space-x-2">
            <GitHub height={14} />
            <span>View on GitHub</span>
          </div>
          <ArrowUpRightIcon size={12} />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Hero;
