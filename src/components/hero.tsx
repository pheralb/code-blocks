import type { ReactNode } from "react";

import Link from "next/link";
import { ArrowUpRightIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import { GitHub } from "@/components/ui/svgs/github";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "@/components/ui/external-link";
import { globals } from "@/globals";

interface HeroProps {
  children: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <div
      className={cn(
        "not-prose",
        "flex flex-col space-y-4 pt-12",
        "border-b border-dashed border-neutral-200 pb-6 dark:border-neutral-800",
      )}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="font-headings text-3xl font-semibold tracking-tight text-white lg:text-5xl">
          Build beautiful code blocks
        </h1>
        <p className="font-medium text-neutral-500 dark:text-neutral-400">
          Display code snippets with syntax highlighting in your React project.
        </p>
      </div>
      <div>{children}</div>
      <div className={cn("flex items-center justify-center space-x-2")}>
        <Link
          href="/docs/getting-started/prerequisites"
          className={buttonVariants({
            size: "lg",
            className: "w-full md:w-auto",
          })}
        >
          <span>Get Started</span>
          <ChevronRightIcon size={16} />
        </Link>
        <ExternalLink
          title="View on GitHub"
          href={globals.githubUrl}
          className={buttonVariants({
            size: "lg",
            variant: "outline",
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
