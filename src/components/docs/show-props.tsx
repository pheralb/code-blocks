import type { ReactNode } from "react";
import { React } from "@/components/ui/svgs/react";

interface ShowPropsProps {
  component: string;
  fullprop?: boolean;
  children: ReactNode;
}

const ShowProps = (props: ShowPropsProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800">
      <div className="not-prose flex items-center space-x-2 border-b border-neutral-200 bg-neutral-200/30 p-2 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/30 dark:text-neutral-400">
        <React width={16} height={16} />
        <p className="text-sm tracking-tight">React Props</p>
      </div>
      <div className="px-6">{props.children}</div>
    </div>
  );
};

export default ShowProps;
