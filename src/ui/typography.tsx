import type { MDXComponents } from "mdx/types";

import Link from "next/link";
import ExternalLink from "./externalLink";
import { cn } from "@/utils/cn";

export const MDXTypography: MDXComponents = {
  a: ({ href, ...props }) => {
    if (href.startsWith("https://") || href.startsWith("http://")) {
      return (
        <ExternalLink className={cn("underline")} href={href} {...props} />
      );
    }
    return <Link className={cn("underline")} href={href} {...props} />;
  },
  h1: (props) => (
    <h1
      className="font-headings scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-headings mt-10 scroll-m-20 border-b border-neutral-200 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-neutral-800"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-headings mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="font-headings scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="leading-7 text-balance text-neutral-900 dark:text-neutral-100 [&:not(:first-child)]:mt-6"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-bold" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-2 pl-6 italic" {...props} />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
};
