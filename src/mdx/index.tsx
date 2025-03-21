import { useMDXComponent } from "@content-collections/mdx/react";
import { MDXCustomComponents } from "./mdx-components";

interface MDXComponentsProps {
  code: string;
  className?: string;
}

export function MDX(props: MDXComponentsProps) {
  const Component = useMDXComponent(props.code);
  return <Component components={MDXCustomComponents} />;
}
