import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

const Article = ({ children, className }: ComponentProps<"article">) => {
  return (
    <article
      className={cn(
        "prose prose-neutral dark:prose-invert",
        "prose-h2:font-headings",
        "w-full max-w-full text-pretty",
        className,
      )}
    >
      {children}
    </article>
  );
};

export default Article;
