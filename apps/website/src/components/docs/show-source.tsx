import type { ComponentProps, ReactNode } from "react";
import type { RegistryComponent } from "@/types/registry";

interface ShowSourceProps extends ComponentProps<"div"> {
  component: RegistryComponent["title"];
  children?: ReactNode;
}

const ShowSource = ({ className, children, ...props }: ShowSourceProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default ShowSource;
