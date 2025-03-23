import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ArticleProps {
  children: ReactNode;
}

const Article = (props: ArticleProps) => {
  return (
    <article className={cn("w-full")}>
      {props.children}
    </article>
  );
};

export default Article;
