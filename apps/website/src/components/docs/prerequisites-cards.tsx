import { cn } from "@/utils/cn";

import Link from "next/link";
import { ExternalLink } from "@/components/ui/external-link";

import { ArrowUpRightIcon } from "lucide-react";
import {
  Astro,
  Nextjs,
  ReactRouter,
  Shiki,
  SugarHigh,
  Vite,
} from "@/components/ui/svgs";

const cardStyles = cn(
  "group relative",
  "flex flex-col items-center justify-center gap-2",
  "border border-neutral-200 p-4 dark:border-neutral-800",
  "hover:border-neutral-300 dark:hover:border-neutral-700",
  "bg-neutral-200/40 dark:bg-neutral-800/40",
);

const ReactFrameworks = [
  {
    name: "Vite",
    icon: Vite,
    url: "https://vite.dev/guide/#scaffolding-your-first-vite-project",
  },
  {
    name: "Next.js",
    icon: Nextjs,
    url: "https://nextjs.org/",
  },
  {
    name: "Astro",
    icon: Astro,
    url: "https://docs.astro.build/en/guides/integrations-guide/react/",
  },
  {
    name: "React-Router",
    icon: ReactRouter,
    url: "https://reactrouter.com/",
  },
];

const Highlights = [
  {
    name: "Shiki",
    icon: Shiki,
    url: "/docs/shiki/highlighter",
  },
  {
    name: "Sugar-High",
    icon: SugarHigh,
    url: "/docs/sugar-high/highlighter",
  },
];

const CreateReactApp = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
      {ReactFrameworks.map(({ name, icon: Icon, url }) => (
        <ExternalLink key={name} href={url} className={cn(cardStyles)}>
          <ArrowUpRightIcon
            size={14}
            className="absolute top-2 right-2 text-neutral-500 transition-colors group-hover:text-black dark:group-hover:text-white"
          />
          <Icon className="h-6 w-6" />
          <span className="text-sm font-medium">{name}</span>
        </ExternalLink>
      ))}
    </div>
  );
};

const HighlightsAvailable = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
      {Highlights.map(({ name, icon: Icon, url }) => (
        <Link key={name} href={url} className={cn(cardStyles)}>
          <ArrowUpRightIcon
            size={14}
            className="absolute top-2 right-2 text-neutral-500 transition-colors group-hover:text-black dark:group-hover:text-white"
          />
          <Icon className="h-6 w-6" />
          <span className="text-sm font-medium">{name}</span>
        </Link>
      ))}
    </div>
  );
};

export { CreateReactApp, HighlightsAvailable };
