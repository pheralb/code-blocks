import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

const Article = ({ children, className }: ComponentProps<"article">) => {
  return (
    <article
      className={cn(
        "prose prose-neutral dark:prose-invert",
        "prose-h2:font-headings prose-h2:border-b prose-h2:border-neutral-200 dark:prose-h2:border-neutral-800 prose-h2:underline-offset-4 prose-h2:pb-1",
        "prose-h3:py-1",
        "w-full max-w-full text-pretty",
        className,
      )}
    >
      {children}
    </article>
  );
};

export default Article;
