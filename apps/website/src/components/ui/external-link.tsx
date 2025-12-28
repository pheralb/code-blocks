import type { ComponentProps } from "react";

const ExternalLink = (props: ComponentProps<"a">) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  );
};

export { ExternalLink };
