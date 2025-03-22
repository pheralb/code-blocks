import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { cn } from "@/utils/cn";

const ExternalLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) => {
  return (
    <a
      href={props.href}
      title={props.title}
      rel="noreferrer"
      target="_blank"
      className={cn(props.className)}
      {...props}
    >
      {props.children}
    </a>
  );
};

export default ExternalLink;
