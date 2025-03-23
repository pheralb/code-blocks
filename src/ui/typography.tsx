import type { MDXComponents } from "mdx/types";

import Link from "next/link";
import ExternalLink from "./externalLink";

export const MDXTypography: MDXComponents = {
  a: ({ href, ...props }) => {
    if (href.startsWith("https://") || href.startsWith("http://")) {
      return <ExternalLink href={href} {...props} />;
    }
    return <Link href={href} {...props} />;
  },
  h1: (props) => (
    <h1
      className="font-headings scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-headings scroll-m-20 pb-3 text-3xl font-medium tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-headings scroll-m-20 text-2xl font-semibold tracking-tight"
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
      className="leading-7 text-pretty [&:not(:first-child)]:mt-6"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-bold" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
};
