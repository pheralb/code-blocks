import type { ReactNode } from "react";

import { cn } from "@/utils/cn";
import { BoxIcon, ClipboardIcon, HighlighterIcon } from "lucide-react";
import { ShadcnUI } from "@/components/ui/svgs";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
}

const iconSize = 24;
const iconClassName = cn("text-neutral-600 dark:text-neutral-400");

const CardDecorator = () => (
  <>
    <span className="absolute -top-px -left-px block size-2 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-600"></span>
    <span className="absolute -top-px -right-px block size-2 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-600"></span>
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-600"></span>
    <span className="absolute -right-px -bottom-px block size-2 border-r-2 border-b-2 border-neutral-400 dark:border-neutral-600"></span>
  </>
);

const FeatureCard = ({
  icon,
  title,
  description,
  children,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "group relative",
        "not-prose flex flex-col",
        "border border-neutral-200 p-8 dark:border-neutral-800",
      )}
    >
      <CardDecorator />
      <div className="mb-4">{icon}</div>
      <h2 className="font-headings text-2xl font-semibold tracking-tight text-black dark:text-white">
        {title}
      </h2>
      <p className="mt-2 text-pretty text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      {children}
    </div>
  );
};

export default function Features() {
  return (
    <section className="mx-auto grid gap-4 pt-6 lg:grid-cols-2">
      <FeatureCard
        icon={<ClipboardIcon size={iconSize} className={iconClassName} />}
        title="Copy-Paste"
        description="Copy the components and utilities you need and paste them into your project. It's 100% yours."
      />
      <FeatureCard
        icon={<HighlighterIcon className={iconClassName} />}
        title="Syntax Highlighter"
        description="Use Shiki or Sugar-High to add syntax highlighting to your code blocks."
      />
      <FeatureCard
        icon={<BoxIcon size={iconSize} className={iconClassName} />}
        title="Blocks"
        description="Built-in components to extend your code blocks with extra content and interactivity."
      />
      <FeatureCard
        icon={
          <ShadcnUI
            width={iconSize}
            height={iconSize}
            className={iconClassName}
          />
        }
        title="shadcn/ui compatible"
        description="Add components & utilities using shadcn/ui CLI."
      />
    </section>
  );
}
