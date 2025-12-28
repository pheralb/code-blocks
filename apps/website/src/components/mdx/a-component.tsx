import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";

import Link from "next/link";
import { ExternalLink } from "@/components/ui/external-link";

const AMDXComponent: MDXComponents = {
  a: ({ href, children, ...props }: ComponentProps<"a">) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <ExternalLink href={href} {...props}>
        {children}
      </ExternalLink>
    );
  },
};

export { AMDXComponent };
