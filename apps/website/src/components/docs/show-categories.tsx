import type { ComponentProps } from "react";

import {
  ArrowUpRightIcon,
  BoxIcon,
  FileCodeCornerIcon,
  FileCogIcon,
  FileText,
  FileTextIcon,
  SquareCodeIcon,
  SquareDashedMousePointerIcon,
  TagIcon,
} from "lucide-react";

import { cn } from "@/utils/cn";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { ExternalLink } from "@/components/ui/external-link";
import { Shiki, SugarHigh, React } from "@/components/ui/svgs";
import { RadixUI } from "../ui/svgs/radix-ui";
import { BaseUI } from "../ui/svgs/base-ui";

const categorySvgs = [
  {
    name: "Shiki",
    icon: Shiki,
    url: "https://shiki.style",
  },
  {
    name: "Sugar-High",
    icon: SugarHigh,
    url: "https://sugar-high.vercel.app/",
  },
  {
    name: "React",
    icon: React,
    url: "https://react.dev/",
  },
  {
    name: "Markdown",
    icon: FileTextIcon,
  },
  {
    name: "MDX",
    icon: FileCodeCornerIcon,
  },
  {
    name: "Client",
    icon: SquareCodeIcon,
  },
  {
    name: "Components",
    icon: SquareDashedMousePointerIcon,
  },
  {
    name: "Zustand",
    icon: FileCogIcon,
  },
  {
    name: "Radix",
    icon: RadixUI,
    url: "https://www.radix-ui.com/primitives",
  },
  {
    name: "Base UI",
    icon: BaseUI,
    url: "https://base-ui.com/",
  },
  {
    name: "Blocks",
    icon: BoxIcon,
  },
];

interface ShowCategoriesProps extends ComponentProps<"div"> {
  categories: string[];
}

const ShowCategories = ({
  categories,
  className,
  ...props
}: ShowCategoriesProps) => {
  const getCategoryIcon = (categoryName: string) => {
    const category = categorySvgs.find((c) => c.name === categoryName);
    return category ? category.icon : TagIcon;
  };

  const getCategoryUrl = (categoryName: string) => {
    const category = categorySvgs.find((c) => c.name === categoryName);
    return category?.url;
  };

  return (
    <div className={cn("flex items-center space-x-1.5", className)} {...props}>
      {categories.length > 1 ? (
        categories.map((cat) => {
          const Icon = getCategoryIcon(cat);
          const url = getCategoryUrl(cat);
          return url ? (
            <ExternalLink
              key={cat}
              href={url}
              className={cn(
                badgeVariants({
                  variant: "outline",
                }),
                "transition-colors hover:border-neutral-400 dark:hover:border-neutral-600",
              )}
            >
              <Icon
                width={14}
                height={14}
                className="text-neutral-600 dark:text-neutral-400"
              />
              <span>{cat}</span>
              <ArrowUpRightIcon
                size={12}
                className="text-neutral-600 dark:text-neutral-400"
              />
            </ExternalLink>
          ) : (
            <Badge key={cat} variant="outline">
              <Icon
                width={14}
                height={14}
                className="text-neutral-600 dark:text-neutral-400"
              />
              <span>{cat}</span>
            </Badge>
          );
        })
      ) : (
        <Badge variant="outline">
          <FileText
            size={14}
            className="text-neutral-600 dark:text-neutral-400"
          />
          <span>{categories[0]}</span>
        </Badge>
      )}
    </div>
  );
};

export default ShowCategories;
